import type { DeviceSummary } from './types';

export interface GroupedResults {
  total: number;
  families: { key: string; count: number; subs: { key: string; names: string[] }[] }[];
}

/** Group a list of device names using the family / sub_family from the vendor index. */
export function groupResults(names: string[], summaryOf: (name: string) => DeviceSummary | undefined): GroupedResults {
  const families = new Map<string, Map<string, string[]>>();
  for (const n of names) {
    const s = summaryOf(n);
    const fam = s?.family || '(unknown)';
    const sub = s?.sub_family || fam;
    let subs = families.get(fam);
    if (!subs) { subs = new Map(); families.set(fam, subs); }
    let list = subs.get(sub);
    if (!list) { list = []; subs.set(sub, list); }
    list.push(n);
  }
  const out: GroupedResults = { total: names.length, families: [] };
  for (const [fam, subs] of [...families.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    let count = 0;
    const subList: { key: string; names: string[] }[] = [];
    for (const [sub, list] of [...subs.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
      count += list.length;
      subList.push({ key: sub, names: list });
    }
    out.families.push({ key: fam, count, subs: subList });
  }
  return out;
}
