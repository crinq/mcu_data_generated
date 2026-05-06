export function formatBytes(n: number): string {
  if (n === 0) return '0';
  const units = ['B', 'KiB', 'MiB', 'GiB'];
  let i = 0;
  let v = n;
  while (v >= 1024 && i < units.length - 1) { v /= 1024; i++; }
  const s = v >= 100 ? v.toFixed(0) : v >= 10 ? v.toFixed(1) : v.toFixed(2);
  return `${s} ${units[i]}`;
}

/** Compact memory size for summary lines: "1 MB", "512 kB", "32 kB". Uses 1024-based units. */
export function formatBytesCompact(n: number | undefined): string {
  if (!n) return '—';
  const units: [number, string][] = [
    [1024 * 1024 * 1024, 'GB'],
    [1024 * 1024, 'MB'],
    [1024, 'kB'],
  ];
  for (const [div, suffix] of units) {
    if (n >= div) {
      const v = n / div;
      return `${Number.isInteger(v) ? v : v.toFixed(1)} ${suffix}`;
    }
  }
  return `${n} B`;
}

export function formatHz(hz: number): string {
  if (hz >= 1e9) return `${(hz / 1e9).toFixed(2)} GHz`;
  if (hz >= 1e6) return `${(hz / 1e6).toFixed(0)} MHz`;
  if (hz >= 1e3) return `${(hz / 1e3).toFixed(0)} kHz`;
  return `${hz} Hz`;
}

/** Compact frequency, e.g. "480 MHz" or "32 kHz". */
export function formatHzCompact(hz: number | undefined): string {
  if (!hz) return '—';
  return formatHz(hz);
}
