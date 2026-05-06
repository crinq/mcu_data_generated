import type { Panel } from '../ts_lib/src/index';
import { escapeHtml } from '../ts_lib/src/index';
import type { Mcu, Peripheral } from './types';
import { renderTree, type TreeNode } from './tree';
import { formatBytes, formatHz } from './format';
import type { DeviceSummary } from './types';
import { loadMcu, getDeviceSummary } from './data';
import { TreeNavigator } from './tree-nav';
import { summaryLine } from './summary';

export class DetailPanel implements Panel {
  readonly id = 'detail';
  readonly title = 'Details';
  private container!: HTMLElement;
  private treeRoot: HTMLElement | null = null;
  private nav: TreeNavigator | null = null;
  private currentKey: string | null = null;
  private currentSummary: DeviceSummary | undefined;
  private reqId = 0;

  createView(container: HTMLElement): void {
    this.container = container;
    container.classList.add('detail-panel');
    container.innerHTML = `<div class="detail-empty">Select a CPU to view details.</div>`;
  }

  onStateChange(change: Record<string, unknown>): void {
    if (change['type'] === 'select-cpu'
        && typeof change['name'] === 'string'
        && typeof change['vendor'] === 'string') {
      void this.show(change['vendor'] as string, change['name'] as string);
    }
  }

  async show(vendor: string, name: string): Promise<void> {
    const key = `${vendor}/${name}`;
    if (this.currentKey === key) return;
    this.currentKey = key;
    const id = ++this.reqId;
    this.container.innerHTML = `<div class="detail-empty">Loading ${escapeHtml(name)}…</div>`;
    let mcu: Mcu;
    try {
      [mcu, this.currentSummary] = await Promise.all([
        loadMcu(vendor, name),
        getDeviceSummary(vendor, name),
      ]);
    } catch (e) {
      if (this.reqId !== id) return;
      this.container.innerHTML = `<div class="detail-empty error">Failed: ${escapeHtml(String(e))}</div>`;
      return;
    }
    if (this.reqId !== id) return;
    this.render(mcu);
  }

  private render(m: Mcu): void {
    const nodes: TreeNode[] = [
      this.coreSection(m),
      this.docSection(m),
      this.peripheralSection(m),
      this.pinSection(m),
      this.interruptSection(m),
    ];
    const summary = summaryLine(this.currentSummary);
    const title =
      `<div class="detail-header">` +
      `<div class="detail-title">${escapeHtml(m.name)}</div>` +
      (summary ? `<div class="detail-summary">${summary}</div>` : '') +
      `</div>`;
    this.container.innerHTML = title + `<div class="tree-view">${renderTree(nodes)}</div>`;
    this.treeRoot = this.container.querySelector('.tree-view') as HTMLElement;
    if (this.treeRoot) {
      this.nav = new TreeNavigator(this.treeRoot);
      this.nav.refresh();
    }
  }

  private coreSection(m: Mcu): TreeNode {
    const children: TreeNode[] = [];
    children.push({ label: 'Family', value: m.family });
    if (m.sub_family) children.push({ label: 'Sub-family', value: m.sub_family });
    if (m.line) children.push({ label: 'Line', value: m.line });
    if (m.die) children.push({ label: 'Die', value: m.die });
    if (m.cores) {
      for (const c of m.cores) {
        const sub: TreeNode[] = [];
        if (c.type_full) sub.push({ label: 'Type', value: c.type_full });
        if (c.revision) sub.push({ label: 'Revision', value: c.revision });
        if (c.nvic_prio_bits !== undefined) sub.push({ label: 'NVIC priority bits', value: String(c.nvic_prio_bits) });
        children.push({ label: `Core ${c.name}`, children: sub, open: true });
      }
    }
    if (m.frequency?.max_hz) children.push({ label: 'Max frequency', value: formatHz(m.frequency.max_hz) });
    if (m.voltage) {
      const v = m.voltage;
      if (v.min_v !== undefined && v.max_v !== undefined) {
        children.push({ label: 'Voltage', value: `${v.min_v} – ${v.max_v} V` });
      }
    }
    if (m.temperature) {
      const t = m.temperature;
      if (t.min_c !== undefined && t.max_c !== undefined) {
        children.push({ label: 'Temperature', value: `${t.min_c} – ${t.max_c} °C${t.suffix ? ` (${t.suffix})` : ''}` });
      }
    }
    if (m.memory) {
      const memChildren: TreeNode[] = m.memory.map(mem => ({
        label: mem.name,
        value: `${formatBytes(mem.size)} ${mem.kind}${mem.address ? ` @ ${mem.address}` : ''}`,
      }));
      children.push({ label: `Memory (${m.memory.length})`, children: memChildren, open: true });
    }
    return { label: 'Core', children, open: true };
  }

  private docSection(m: Mcu): TreeNode {
    const d = m.docs;
    const children: TreeNode[] = [];
    if (!d) return { label: 'Documentation', children, open: false };
    if (d.product_url) children.push({ label: 'Product page', href: d.product_url, value: '↗' });
    if (d.datasheet) children.push({ label: 'Datasheet', href: d.datasheet, value: '↗' });
    if (d.refmanual_rm_url || d.refmanual) children.push({ label: 'Reference manual', href: d.refmanual_rm_url || d.refmanual, value: '↗'});
    if (d.programming_manual) children.push({ label: 'Programming manual', href: d.programming_manual, value: '↗' });
    if (d.other && d.other.length > 0) {
      const grouped = new Map<string, TreeNode[]>();
      for (const o of d.other) {
        const key = o.type || 'other';
        if (!grouped.has(key)) grouped.set(key, []);
        grouped.get(key)!.push({ label: o.title, href: o.url, value: o.name || '↗' });
      }
      for (const [key, list] of grouped) {
        children.push({ label: `${key} (${list.length})`, children: list });
      }
    }
    return { label: `Documentation (${children.length})`, children, open: false };
  }

  private peripheralSection(m: Mcu): TreeNode {
    const children: TreeNode[] = [];
    if (!m.peripherals) return { label: 'Peripherals', children };
    const groups = new Map<string, Peripheral[]>();
    for (const p of m.peripherals) {
      const k = p.kind || '(uncategorized)';
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k)!.push(p);
    }
    const sorted = [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    for (const [kind, list] of sorted) {
      const groupChildren: TreeNode[] = list.map(p => this.peripheralNode(p));
      children.push({ label: kind, value: `${list.length}`, children: groupChildren });
    }
    return { label: `Peripherals (${m.peripherals.length})`, children, open: false };
  }

  private peripheralNode(p: Peripheral): TreeNode {
    const sub: TreeNode[] = [];
    if (p.version) sub.push({ label: 'Version', value: p.version });
    if (p.register_block) sub.push({ label: 'Register block', value: p.register_block });
    if (p.base_address) sub.push({ label: 'Base', value: p.base_address });
    if (p.interrupts && p.interrupts.length > 0) {
      sub.push({
        label: `Interrupts (${p.interrupts.length})`,
        children: p.interrupts.map(i => ({ label: i.signal, value: i.interrupt })),
      });
    }
    if (p.dma_channels && p.dma_channels.length > 0) {
      sub.push({
        label: `DMA (${p.dma_channels.length})`,
        children: p.dma_channels.map(d => ({
          label: d.signal,
          value: [d.channel, d.dma, d.dmamux, d.request].filter(Boolean).join(' / ') || '—',
        })),
      });
    }
    if (p.pins && p.pins.length > 0) {
      sub.push({
        label: `Pins (${p.pins.length})`,
        children: p.pins.map(pp => ({
          label: pp.pin,
          value: `${pp.signal}${pp.af !== null && pp.af !== undefined ? ` AF${pp.af}` : ''}`,
        })),
      });
    }
    return { label: p.name, value: p.version || undefined, children: sub };
  }

  private pinSection(m: Mcu): TreeNode {
    const children: TreeNode[] = [];
    if (!m.packages) return { label: 'Packages', children };
    for (const pkg of m.packages) {
      const pinChildren: TreeNode[] = (pkg.pins || []).map(pin => ({
        label: pin.position,
        value: pin.name + (pin.alt_names && pin.alt_names.length > 0 ? ` (${pin.alt_names.join(', ')})` : ''),
      }));
      children.push({
        label: pkg.name,
        value: `${pkg.pins?.length || 0} pins${pkg.variant ? ` · ${pkg.variant}` : ''}`,
        children: pinChildren,
      });
    }
    return { label: `Packages (${m.packages.length})`, children, open: false };
  }

  private interruptSection(m: Mcu): TreeNode {
    if (!m.interrupts || m.interrupts.length === 0) {
      return { label: 'Interrupts', children: [] };
    }
    const children: TreeNode[] = m.interrupts.map(i => ({ label: String(i.number), value: i.name }));
    return { label: `Interrupts (${m.interrupts.length})`, children, open: false };
  }
}
