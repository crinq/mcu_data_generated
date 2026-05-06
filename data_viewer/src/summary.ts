import type { DeviceSummary } from './types';
import { formatBytesCompact, formatHzCompact } from './format';
import { escapeHtml } from '../ts_lib/src/index';

export interface SummaryParts {
  packages: string;
  cores: string;
  ram: string;
  rom: string;
}

/** Render a summary as discrete HTML pills, ready for ` `-joined display. */
export function summaryParts(s: DeviceSummary | undefined): SummaryParts {
  if (!s) return { packages: '', cores: '', ram: '', rom: '' };
  const pkgs = (s.packages || []).map(p => escapeHtml(p)).join(', ');
  const cores = (s.cores || [])
    .map(c => `${formatHzCompact(c.freq_max_hz)} ${escapeHtml(c.name)}`)
    .join(' · ');
  const ram = s.ram_bytes ? `${formatBytesCompact(s.ram_bytes)} RAM` : '';
  const rom = s.flash_bytes ? `${formatBytesCompact(s.flash_bytes)} flash` : '';
  return { packages: pkgs, cores, ram, rom };
}

/** Single-line HTML summary string (already escaped). */
export function summaryLine(s: DeviceSummary | undefined): string {
  const p = summaryParts(s);
  const segments: string[] = [];
  if (p.packages) segments.push(`<span class="sm-pkgs">${p.packages}</span>`);
  if (p.cores) segments.push(`<span class="sm-cores">${p.cores}</span>`);
  if (p.ram) segments.push(`<span class="sm-mem">${p.ram}</span>`);
  if (p.rom) segments.push(`<span class="sm-mem">${p.rom}</span>`);
  return segments.join('<span class="sm-sep">·</span>');
}
