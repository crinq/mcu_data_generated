import type { Mcu, DeviceSummary } from './types';

export interface FilterToken {
  key: string;
  value: string;
  raw: string;
}

export interface ParsedQuery {
  namePattern: string | null;
  filters: FilterToken[];
}

export function parseQuery(input: string): ParsedQuery {
  const tokens = input.trim().split(/\s+/).filter(Boolean);
  let namePattern: string | null = null;
  const filters: FilterToken[] = [];
  for (const t of tokens) {
    const colon = t.indexOf(':');
    if (colon > 0) {
      filters.push({ key: t.slice(0, colon).toLowerCase(), value: t.slice(colon + 1), raw: t });
    } else if (namePattern === null) {
      namePattern = t.toLowerCase();
    } else {
      namePattern += t.toLowerCase();
    }
  }
  return { namePattern, filters };
}

/**
 * Wildcard match: `*` = any chars (incl. empty), `?` = single char. Case-insensitive.
 * Pattern is matched as a substring (not anchored). Without wildcards, falls back
 * to plain substring contains. Anchor explicitly with leading/trailing `*` if needed —
 * leading `^` / trailing `$` are also supported as anchors.
 */
export function wildcardMatch(name: string, pattern: string): boolean {
  if (!pattern) return true;
  const lower = name.toLowerCase();
  let p = pattern.toLowerCase();
  if (!p.includes('*') && !p.includes('?') && !p.startsWith('^') && !p.endsWith('$')) {
    return lower.includes(p);
  }
  let anchorStart = false, anchorEnd = false;
  if (p.startsWith('^')) { anchorStart = true; p = p.slice(1); }
  if (p.endsWith('$')) { anchorEnd = true; p = p.slice(0, -1); }
  const escaped = p.replace(/[.+^${}()|[\]\\]/g, '\\$&');
  const body = escaped.replace(/\*/g, '.*').replace(/\?/g, '.');
  const re = (anchorStart ? '^' : '') + body + (anchorEnd ? '$' : '');
  try { return new RegExp(re).test(lower); } catch { return false; }
}

/** Parse "100M", "20k", "1024", returns absolute number. Binary suffixes. */
export function parseScaled(v: string): number | null {
  const m = v.match(/^([0-9]+(?:\.[0-9]+)?)\s*([kKmMgG]?)$/);
  if (!m) return null;
  const n = parseFloat(m[1]);
  const suf = m[2].toLowerCase();
  const mult = suf === 'k' ? 1024 : suf === 'm' ? 1024 * 1024 : suf === 'g' ? 1024 * 1024 * 1024 : 1;
  return n * mult;
}

/** Like parseScaled but SI for Hz (k=1e3, M=1e6, G=1e9). */
export function parseScaledSI(v: string): number | null {
  const m = v.match(/^([0-9]+(?:\.[0-9]+)?)\s*([kKmMgG]?)$/);
  if (!m) return null;
  const n = parseFloat(m[1]);
  const suf = m[2].toLowerCase();
  const mult = suf === 'k' ? 1e3 : suf === 'm' ? 1e6 : suf === 'g' ? 1e9 : 1;
  return n * mult;
}

/** Pin count derived from package name suffix digits, max across packages. */
export function pinCountFromPackages(pkgs: readonly string[]): number {
  let max = 0;
  for (const p of pkgs) {
    const m = p.match(/(\d+)\s*$/);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return max;
}

/** Bidirectional alias groups for peripheral kind matching. */
export const PERIPHERAL_ALIAS_GROUPS: readonly (readonly string[])[] = [
  ['uart', 'usart'],
  ['tim', 'timer'],
];

const ALIAS_LOOKUP: Map<string, Set<string>> = (() => {
  const m = new Map<string, Set<string>>();
  for (const group of PERIPHERAL_ALIAS_GROUPS) {
    const set = new Set(group.map(s => s.toLowerCase()));
    for (const name of set) m.set(name, set);
  }
  return m;
})();

export function expandKindAliases(kind: string): Set<string> {
  const k = kind.toLowerCase();
  return ALIAS_LOOKUP.get(k) ?? new Set([k]);
}

function peripheralCountInMcu(m: Mcu, kind: string): number {
  if (!m.peripherals) return 0;
  const accepted = expandKindAliases(kind);
  let n = 0;
  for (const p of m.peripherals) {
    if (p.kind && accepted.has(p.kind.toLowerCase())) n++;
  }
  return n;
}

const SUMMARY_KEYS = new Set([
  'pin', 'pins', 'freq', 'mhz', 'ram', 'rom', 'flash', 'family', 'sub_family', 'sub-family', 'core',
]);

export function isSummaryFilter(f: FilterToken): boolean {
  return SUMMARY_KEYS.has(f.key);
}

export function partitionFilters(filters: FilterToken[]): { summary: FilterToken[]; detail: FilterToken[] } {
  const summary: FilterToken[] = [];
  const detail: FilterToken[] = [];
  for (const f of filters) (isSummaryFilter(f) ? summary : detail).push(f);
  return { summary, detail };
}

export function checkSummaryFilter(s: DeviceSummary, f: FilterToken): boolean {
  switch (f.key) {
    case 'pin':
    case 'pins': {
      const want = parseInt(f.value, 10);
      if (isNaN(want)) return false;
      return pinCountFromPackages(s.packages || []) >= want;
    }
    case 'freq':
    case 'mhz': {
      const want = f.key === 'mhz'
        ? parseFloat(f.value) * 1e6
        : parseScaledSI(f.value);
      if (want === null || isNaN(want)) return false;
      const max = (s.cores || []).reduce((m, c) => Math.max(m, c.freq_max_hz ?? 0), 0);
      return max >= want;
    }
    case 'ram': {
      const want = parseScaled(f.value);
      if (want === null) return false;
      return (s.ram_bytes ?? 0) >= want;
    }
    case 'rom':
    case 'flash': {
      const want = parseScaled(f.value);
      if (want === null) return false;
      return (s.flash_bytes ?? 0) >= want;
    }
    case 'family':
      return wildcardMatch(s.family || '', f.value);
    case 'sub_family':
    case 'sub-family':
      return wildcardMatch(s.sub_family || '', f.value);
    case 'core':
      return (s.cores || []).some(c => wildcardMatch(c.name || '', f.value));
    default:
      return false;
  }
}

export function checkDetailFilter(m: Mcu, f: FilterToken): boolean {
  // Only peripheral-kind counts here. Anything else is treated as a peripheral kind.
  const want = parseInt(f.value, 10);
  if (isNaN(want)) return false;
  return peripheralCountInMcu(m, f.key) >= want;
}

export function filterByName(devices: string[], pattern: string | null): string[] {
  if (!pattern) return devices;
  return devices.filter(d => wildcardMatch(d, pattern));
}

export function applySummaryFilters(
  names: string[],
  filters: FilterToken[],
  summaryOf: (name: string) => DeviceSummary | undefined,
): string[] {
  if (filters.length === 0) return names;
  return names.filter(n => {
    const s = summaryOf(n);
    if (!s) return false;
    for (const f of filters) if (!checkSummaryFilter(s, f)) return false;
    return true;
  });
}

export interface FilterProgress {
  done: number;
  total: number;
  matched: number;
}

export async function applyDetailFilters(
  candidates: string[],
  filters: FilterToken[],
  loadMcu: (name: string) => Promise<Mcu>,
  opts?: { signal?: AbortSignal; concurrency?: number; onProgress?: (p: FilterProgress) => void },
): Promise<string[]> {
  if (filters.length === 0) return candidates.slice();
  const signal = opts?.signal;
  const concurrency = Math.max(1, opts?.concurrency ?? 16);
  const onProgress = opts?.onProgress;
  const matchSlots = new Array<boolean>(candidates.length).fill(false);
  let done = 0;
  let matched = 0;
  let cursor = 0;

  async function worker(): Promise<void> {
    while (true) {
      if (signal?.aborted) throw new Error('aborted');
      const i = cursor++;
      if (i >= candidates.length) return;
      const name = candidates[i];
      try {
        const mcu = await loadMcu(name);
        let pass = true;
        for (const f of filters) {
          if (!checkDetailFilter(mcu, f)) { pass = false; break; }
        }
        if (pass) { matchSlots[i] = true; matched++; }
      } catch {
        // skip
      }
      done++;
      if (onProgress && (done % 50 === 0 || done === candidates.length)) {
        onProgress({ done, total: candidates.length, matched });
      }
    }
  }

  const workers: Promise<void>[] = [];
  for (let i = 0; i < concurrency; i++) workers.push(worker());
  await Promise.all(workers);

  const out: string[] = [];
  for (let i = 0; i < candidates.length; i++) if (matchSlots[i]) out.push(candidates[i]);
  return out;
}
