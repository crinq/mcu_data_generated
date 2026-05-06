/**
 * Roving-tabindex keyboard navigator for tree-style containers built from
 * `<details><summary/></details>` groups and explicit leaf elements tagged
 * with the `tree-focusable` class. Summaries are always treated as focusable.
 *
 * Keys:
 *   ArrowDown / ArrowUp — move focus to next/prev visible item (DOM order, skips collapsed subtrees)
 *   ArrowRight         — open closed group, or step into the first child of an open group
 *   ArrowLeft          — close open group, or step out to parent group
 *   Enter / Space      — activate (toggle group, or call onActivate for a leaf)
 *   Home / End         — first / last visible
 */
export interface TreeNavOpts {
  /** Called when Enter/Space is pressed on a leaf. Receive the leaf element. */
  onActivate?: (el: HTMLElement) => void;
  /** Optional CSS selector for leaves; default `.tree-focusable`. */
  leafSelector?: string;
}

export class TreeNavigator {
  private leafSelector: string;
  private current: HTMLElement | null = null;

  constructor(private root: HTMLElement, private opts: TreeNavOpts = {}) {
    this.leafSelector = opts.leafSelector ?? '.tree-focusable';
    root.addEventListener('keydown', (e) => this.onKey(e));
    root.addEventListener('focusin', (e) => this.onFocusIn(e));
    root.addEventListener('mousedown', (e) => this.onMouseDown(e));
  }

  /** Re-scan focusables (e.g. after re-rendering); preserve current focus if still present. */
  refresh(): void {
    const items = this.collectVisible();
    if (items.length === 0) {
      this.current = null;
      return;
    }
    if (this.current && !items.includes(this.current)) {
      this.current = null;
    }
    if (!this.current) this.current = items[0];
    this.applyTabindex(items);
  }

  /** Programmatically focus an item (or the first focusable). */
  focus(el?: HTMLElement): void {
    const items = this.collectVisible();
    const target = el && items.includes(el) ? el : items[0];
    if (!target) {
      this.root.focus();
      return;
    }
    this.current = target;
    this.applyTabindex(items);
    target.focus();
  }

  getCurrent(): HTMLElement | null { return this.current; }

  private collectVisible(): HTMLElement[] {
    const out: HTMLElement[] = [];
    const walk = (node: Element): void => {
      if (node instanceof HTMLDetailsElement) {
        const summary = node.querySelector(':scope > summary') as HTMLElement | null;
        if (summary) out.push(summary);
        if (node.open) {
          for (const child of Array.from(node.children)) {
            if (child !== summary) walk(child);
          }
        }
      } else {
        if ((node as HTMLElement).matches?.(this.leafSelector)) {
          out.push(node as HTMLElement);
        }
        for (const child of Array.from(node.children)) walk(child);
      }
    };
    for (const child of Array.from(this.root.children)) walk(child);
    return out;
  }

  private applyTabindex(items: HTMLElement[]): void {
    for (const it of items) it.tabIndex = it === this.current ? 0 : -1;
    // Root is reachable via Tab only if list is empty.
    this.root.tabIndex = this.current ? -1 : 0;
  }

  private onFocusIn(e: FocusEvent): void {
    const t = e.target as HTMLElement;
    const items = this.collectVisible();
    if (items.includes(t)) {
      this.current = t;
      this.applyTabindex(items);
    } else if (t === this.root && items.length > 0) {
      // Pulled into root via Tab — redirect to current/first item.
      const target = this.current && items.includes(this.current) ? this.current : items[0];
      this.current = target;
      this.applyTabindex(items);
      target.focus();
    }
  }

  private onMouseDown(e: MouseEvent): void {
    const items = this.collectVisible();
    let el = e.target as HTMLElement | null;
    while (el && el !== this.root) {
      if (items.includes(el)) {
        this.current = el;
        this.applyTabindex(items);
        return;
      }
      el = el.parentElement;
    }
  }

  private onKey(e: KeyboardEvent): void {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const items = this.collectVisible();
    if (items.length === 0) return;
    let cur = this.current && items.includes(this.current) ? this.current : items[0];
    const i = items.indexOf(cur);

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const next = items[Math.min(i + 1, items.length - 1)];
        this.move(next);
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const next = items[Math.max(i - 1, 0)];
        this.move(next);
        break;
      }
      case 'ArrowRight': {
        e.preventDefault();
        if (cur instanceof HTMLElement && cur.tagName === 'SUMMARY') {
          const det = cur.parentElement as HTMLDetailsElement;
          if (!det.open) { det.open = true; this.refresh(); break; }
          // Already open: step into first descendant.
          const after = this.collectVisible();
          const j = after.indexOf(cur);
          const next = after[j + 1];
          if (next && det.contains(next)) this.move(next);
        }
        break;
      }
      case 'ArrowLeft': {
        e.preventDefault();
        if (cur instanceof HTMLElement && cur.tagName === 'SUMMARY') {
          const det = cur.parentElement as HTMLDetailsElement;
          if (det.open) { det.open = false; this.refresh(); this.move(cur); break; }
        }
        // Step out to parent details' summary.
        const parentDetails = cur.parentElement?.closest('details');
        if (parentDetails) {
          const summary = parentDetails.querySelector(':scope > summary') as HTMLElement | null;
          if (summary) this.move(summary);
        }
        break;
      }
      case 'Enter':
      case ' ': {
        e.preventDefault();
        if (cur.tagName === 'SUMMARY') {
          const det = cur.parentElement as HTMLDetailsElement;
          det.open = !det.open;
          this.refresh();
        } else {
          this.opts.onActivate?.(cur);
        }
        break;
      }
      case 'Home': {
        e.preventDefault();
        this.move(items[0]);
        break;
      }
      case 'End': {
        e.preventDefault();
        this.move(items[items.length - 1]);
        break;
      }
    }
  }

  private move(target: HTMLElement): void {
    this.current = target;
    this.applyTabindex(this.collectVisible());
    target.focus();
    target.scrollIntoView({ block: 'nearest' });
  }
}
