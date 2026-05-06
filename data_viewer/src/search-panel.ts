import type { Panel } from '../ts_lib/src/index';
import { escapeHtml } from '../ts_lib/src/index';
import type { DeviceSummary, VendorIndex } from './types';
import { loadRoot, loadVendorIndex, loadMcu } from './data';
import { parseQuery, filterByName, partitionFilters, applySummaryFilters, applyDetailFilters } from './search';
import { groupResults } from './grouping';
import { TreeNavigator } from './tree-nav';
import { summaryLine } from './summary';

interface BroadcastFn {
  (change: Record<string, unknown>): void;
}

export class SearchPanel implements Panel {
  readonly id = 'search';
  readonly title = 'Search';
  private input!: HTMLInputElement;
  private vendorSelect!: HTMLSelectElement;
  private status!: HTMLElement;
  private list!: HTMLElement;
  private currentVendor: string | null = null;
  private currentIndex: VendorIndex | null = null;
  private allDevices: string[] = [];
  private results: string[] = [];
  private selected: string | null = null;
  private debounce: ReturnType<typeof setTimeout> | null = null;
  private abortCtl: AbortController | null = null;
  private collapsed = new Set<string>();
  private autoCollapseAtCount = 50;
  private nav!: TreeNavigator;

  constructor(private broadcast: BroadcastFn) {}

  createView(container: HTMLElement): void {
    container.classList.add('search-panel');
    container.innerHTML = `
      <div class="search-bar">
        <div class="search-row">
          <select class="search-vendor" id="search-vendor"></select>
          <input type="text" id="search-input" class="search-input" placeholder="name (e.g. stm32h*43) [adc:3] [pin:64] [freq:100M] [ram:32k] [rom:128k]">
        </div>
        <div class="search-status" id="search-status">Loading…</div>
      </div>
      <div class="search-list" id="search-list"></div>
    `;
    this.vendorSelect = container.querySelector('#search-vendor') as HTMLSelectElement;
    this.input = container.querySelector('#search-input') as HTMLInputElement;
    this.status = container.querySelector('#search-status') as HTMLElement;
    this.list = container.querySelector('#search-list') as HTMLElement;

    this.input.addEventListener('input', () => this.scheduleSearch());
    this.input.addEventListener('keydown', (e) => this.onInputKey(e));
    this.list.addEventListener('click', (e) => this.onListClick(e));
    this.list.addEventListener('toggle', (e) => this.onToggle(e), true);
    this.vendorSelect.addEventListener('change', () => void this.switchVendor(this.vendorSelect.value));

    this.nav = new TreeNavigator(this.list, {
      onActivate: (el) => {
        const name = el.dataset['name'];
        if (name) this.select(name);
      },
    });

    void this.init();
  }

  private async init(): Promise<void> {
    try {
      const root = await loadRoot();
      const vendors = Object.entries(root.vendors);
      if (vendors.length === 0) throw new Error('no vendors in root index');
      this.vendorSelect.innerHTML = vendors
        .map(([id, v]) => `<option value="${escapeHtml(id)}">${escapeHtml(v.name)} · ${v.device_count}</option>`)
        .join('');
      if (vendors.length === 1) {
        this.vendorSelect.style.display = 'none';
      }
      await this.switchVendor(vendors[0][0]);
    } catch (e) {
      this.status.textContent = `Failed to load index: ${e}`;
      this.status.classList.add('error');
    }
  }

  private async switchVendor(vendor: string): Promise<void> {
    if (this.abortCtl) this.abortCtl.abort();
    this.currentVendor = vendor;
    this.selected = null;
    this.status.classList.remove('error');
    try {
      const idx = await loadVendorIndex(vendor);
      this.currentIndex = idx;
      this.allDevices = Object.keys(idx.devices).sort();
      this.results = this.allDevices;
      this.status.textContent = `${this.allDevices.length} devices`;
      this.renderList();
      if (this.input.value.trim()) this.runSearch();
    } catch (e) {
      this.status.textContent = `Failed: ${e}`;
      this.status.classList.add('error');
    }
  }

  private scheduleSearch(): void {
    if (this.debounce) clearTimeout(this.debounce);
    this.debounce = setTimeout(() => this.runSearch(), 200);
  }

  private async runSearch(): Promise<void> {
    if (this.abortCtl) this.abortCtl.abort();
    const ctl = new AbortController();
    this.abortCtl = ctl;
    const vendor = this.currentVendor;
    const idx = this.currentIndex;
    if (!vendor || !idx) return;
    const q = parseQuery(this.input.value);
    const byName = filterByName(this.allDevices, q.namePattern);
    const summaryOf = (n: string): DeviceSummary | undefined => idx.devices[n];
    const { summary, detail } = partitionFilters(q.filters);
    const afterSummary = applySummaryFilters(byName, summary, summaryOf);
    if (detail.length === 0) {
      this.results = afterSummary;
      this.status.textContent = `${afterSummary.length} / ${this.allDevices.length}`;
      this.renderList();
      return;
    }
    this.status.textContent = `Filtering 0 / ${afterSummary.length}…`;
    try {
      const filtered = await applyDetailFilters(afterSummary, detail, (n) => loadMcu(vendor, n), {
        signal: ctl.signal,
        concurrency: 24,
        onProgress: (p) => {
          if (ctl.signal.aborted) return;
          this.status.textContent = `Filtering ${p.done} / ${p.total} · ${p.matched} match`;
        },
      });
      if (ctl.signal.aborted) return;
      this.results = filtered;
      this.status.textContent = `${filtered.length} / ${this.allDevices.length}`;
      this.renderList();
    } catch (e) {
      if (!ctl.signal.aborted) {
        this.status.textContent = `Error: ${e}`;
        this.status.classList.add('error');
      }
    }
  }

  private renderList(): void {
    if (this.results.length === 0) {
      this.list.innerHTML = `<div class="search-empty">No matches.</div>`;
      this.nav?.refresh();
      return;
    }
    if (!this.currentVendor || !this.currentIndex) return;
    const idx = this.currentIndex;
    const grouped = groupResults(this.results, (n) => idx.devices[n]);
    const expandAll = grouped.total <= this.autoCollapseAtCount;
    let html = '';
    for (const fam of grouped.families) {
      const famKey = `f:${fam.key}`;
      const famOpen = expandAll
        ? !this.collapsed.has(famKey)
        : this.collapsed.has(`!${famKey}`);
      html += `<details class="rl-fam" data-key="${escapeHtml(famKey)}"${famOpen ? ' open' : ''}>`;
      html += `<summary><span class="rl-name">${escapeHtml(fam.key)}</span><span class="rl-count">${fam.count}</span></summary>`;
      for (const sub of fam.subs) {
        const subKey = `s:${sub.key}`;
        // sub-family open by default if family expanded and only one sub OR results small
        const onlyOneSub = fam.subs.length === 1;
        const subOpen = expandAll || onlyOneSub
          ? !this.collapsed.has(subKey)
          : this.collapsed.has(`!${subKey}`);
        html += `<details class="rl-sub" data-key="${escapeHtml(subKey)}"${subOpen ? ' open' : ''}>`;
        html += `<summary><span class="rl-name">${escapeHtml(sub.key)}*</span><span class="rl-count">${sub.names.length}</span></summary>`;
        for (const name of sub.names) {
          const sel = name === this.selected ? ' selected' : '';
          const sum = summaryLine(idx.devices[name]);
          html += `<div class="search-item tree-focusable${sel}" data-name="${escapeHtml(name)}">`;
          html += `<span class="si-name">${escapeHtml(name)}</span>`;
          if (sum) html += `<span class="si-summary">${sum}</span>`;
          html += `</div>`;
        }
        html += `</details>`;
      }
      html += `</details>`;
    }
    this.list.innerHTML = html;
    this.nav?.refresh();
  }

  private onToggle(e: Event): void {
    const t = e.target as HTMLElement;
    if (!(t instanceof HTMLDetailsElement)) return;
    const key = t.dataset['key'];
    if (!key) return;
    const total = this.results.length;
    const expandAll = total <= this.autoCollapseAtCount;
    // Two storage modes:
    //   expandAll=true (small lists, default open): track explicit collapse with key
    //   expandAll=false (large lists, default closed): track explicit open with !key
    if (expandAll) {
      if (t.open) this.collapsed.delete(key); else this.collapsed.add(key);
    } else {
      const openKey = `!${key}`;
      if (t.open) this.collapsed.add(openKey); else this.collapsed.delete(openKey);
    }
  }

  private onListClick(e: MouseEvent): void {
    const target = (e.target as HTMLElement).closest('.search-item') as HTMLElement | null;
    if (!target) return;
    const name = target.dataset['name'];
    if (!name) return;
    this.select(name);
  }

  private onInputKey(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      const first = this.results[0];
      if (first) this.select(first);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.nav?.focus();
    }
  }

  private select(name: string): void {
    if (this.selected === name) return;
    this.selected = name;
    for (const el of this.list.querySelectorAll('.search-item')) {
      el.classList.toggle('selected', (el as HTMLElement).dataset['name'] === name);
    }
    const sel = this.list.querySelector('.search-item.selected') as HTMLElement | null;
    if (sel) {
      // Open all ancestor <details> so the row is visible.
      let p: HTMLElement | null = sel.parentElement;
      while (p && p !== this.list) {
        if (p instanceof HTMLDetailsElement) p.open = true;
        p = p.parentElement;
      }
      sel.scrollIntoView({ block: 'nearest' });
    }
    if (!this.currentVendor) return;
    this.broadcast({ type: 'select-cpu', vendor: this.currentVendor, name });
  }
}
