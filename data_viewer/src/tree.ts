import { escapeHtml } from '../ts_lib/src/utils';

export interface TreeNode {
  label: string;
  /** Right-side value rendered as small muted text. */
  value?: string;
  /** Optional URL — label rendered as link. */
  href?: string;
  children?: TreeNode[];
  /** Default expanded state. */
  open?: boolean;
}

export function renderTree(nodes: TreeNode[], depth = 0): string {
  let out = '';
  for (const n of nodes) {
    const hasChildren = n.children && n.children.length > 0;
    const open = n.open ?? false;
    const labelHtml = n.href
      ? `<a href="${escapeHtml(n.href)}" target="_blank" rel="noopener">${escapeHtml(n.label)}</a>`
      : escapeHtml(n.label);
    const valueHtml = n.value !== undefined ? `<span class="tv-val">${escapeHtml(n.value)}</span>` : '';
    if (hasChildren) {
      out += `<details class="tv-node" data-depth="${depth}"${open ? ' open' : ''}>`;
      out += `<summary><span class="tv-label">${labelHtml}</span>${valueHtml}</summary>`;
      out += `<div class="tv-children">${renderTree(n.children!, depth + 1)}</div>`;
      out += `</details>`;
    } else {
      out += `<div class="tv-leaf tree-focusable" data-depth="${depth}"><span class="tv-label">${labelHtml}</span>${valueHtml}</div>`;
    }
  }
  return out;
}
