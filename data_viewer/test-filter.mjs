// Mirrors search.ts and grouping.ts against the on-disk dataset.
import { readFileSync } from 'node:fs';

const DATA_ROOT = '/Users/crinq/sandbox/ai/mcu_data/data';
const root = JSON.parse(readFileSync(`${DATA_ROOT}/index.json`, 'utf8'));
const VENDOR = 'stm32';
const vendorEntry = root.vendors[VENDOR];
const idx = JSON.parse(readFileSync(`${DATA_ROOT}/${vendorEntry.index}`, 'utf8'));
const names = Object.keys(idx.devices).sort();
const summaryOf = (n) => idx.devices[n];
const mcuCache = new Map();
function loadMcu(name) {
  if (mcuCache.has(name)) return mcuCache.get(name);
  const m = JSON.parse(readFileSync(`${DATA_ROOT}/${VENDOR}/${idx.devices[name].file}`, 'utf8'));
  mcuCache.set(name, m);
  return m;
}

// ---- mirror of search.ts ----
function parseQuery(input) {
  const tokens = input.trim().split(/\s+/).filter(Boolean);
  let namePattern = null;
  const filters = [];
  for (const t of tokens) {
    const c = t.indexOf(':');
    if (c > 0) filters.push({ key: t.slice(0, c).toLowerCase(), value: t.slice(c + 1) });
    else if (namePattern === null) namePattern = t.toLowerCase();
    else namePattern += t.toLowerCase();
  }
  return { namePattern, filters };
}
function wildcardMatch(name, pattern) {
  if (!pattern) return true;
  const lower = name.toLowerCase();
  let p = pattern.toLowerCase();
  if (!p.includes('*') && !p.includes('?') && !p.startsWith('^') && !p.endsWith('$')) return lower.includes(p);
  let aS = false, aE = false;
  if (p.startsWith('^')) { aS = true; p = p.slice(1); }
  if (p.endsWith('$')) { aE = true; p = p.slice(0, -1); }
  const escaped = p.replace(/[.+^${}()|[\]\\]/g, '\\$&');
  const body = escaped.replace(/\*/g, '.*').replace(/\?/g, '.');
  const re = (aS ? '^' : '') + body + (aE ? '$' : '');
  try { return new RegExp(re).test(lower); } catch { return false; }
}
function parseScaled(v) {
  const m = v.match(/^([0-9]+(?:\.[0-9]+)?)\s*([kKmMgG]?)$/); if (!m) return null;
  const n = parseFloat(m[1]); const s = m[2].toLowerCase();
  return n * (s === 'k' ? 1024 : s === 'm' ? 1048576 : s === 'g' ? 1073741824 : 1);
}
function parseScaledSI(v) {
  const m = v.match(/^([0-9]+(?:\.[0-9]+)?)\s*([kKmMgG]?)$/); if (!m) return null;
  const n = parseFloat(m[1]); const s = m[2].toLowerCase();
  return n * (s === 'k' ? 1e3 : s === 'm' ? 1e6 : s === 'g' ? 1e9 : 1);
}
function pinCountFromPackages(pkgs) {
  let mx = 0; for (const p of pkgs || []) { const m = p.match(/(\d+)\s*$/); if (m) mx = Math.max(mx, parseInt(m[1], 10)); }
  return mx;
}
const ALIAS_GROUPS = [['uart', 'usart'], ['tim', 'timer']];
const ALIAS = new Map();
for (const g of ALIAS_GROUPS) { const s = new Set(g); for (const n of s) ALIAS.set(n, s); }
function expandAliases(k) { return ALIAS.get(k.toLowerCase()) ?? new Set([k.toLowerCase()]); }

const SUMMARY_KEYS = new Set(['pin','pins','freq','mhz','ram','rom','flash','family','sub_family','sub-family','core']);
function checkSummary(s, f) {
  switch (f.key) {
    case 'pin': case 'pins': { const w = parseInt(f.value, 10); return !isNaN(w) && pinCountFromPackages(s.packages) >= w; }
    case 'freq': case 'mhz': {
      const w = f.key === 'mhz' ? parseFloat(f.value) * 1e6 : parseScaledSI(f.value);
      const mx = (s.cores || []).reduce((a, c) => Math.max(a, c.freq_max_hz ?? 0), 0);
      return w !== null && !isNaN(w) && mx >= w;
    }
    case 'ram': { const w = parseScaled(f.value); return w !== null && (s.ram_bytes ?? 0) >= w; }
    case 'rom': case 'flash': { const w = parseScaled(f.value); return w !== null && (s.flash_bytes ?? 0) >= w; }
    case 'family': return wildcardMatch(s.family || '', f.value);
    case 'sub_family': case 'sub-family': return wildcardMatch(s.sub_family || '', f.value);
    case 'core': return (s.cores || []).some(c => wildcardMatch(c.name || '', f.value));
    default: return false;
  }
}
function checkDetail(m, f) {
  const w = parseInt(f.value, 10); if (isNaN(w)) return false;
  const accepted = expandAliases(f.key);
  return (m.peripherals || []).filter(p => p.kind && accepted.has(p.kind.toLowerCase())).length >= w;
}
function search(query) {
  const q = parseQuery(query);
  const byName = q.namePattern ? names.filter(n => wildcardMatch(n, q.namePattern)) : names;
  const summary = q.filters.filter(f => SUMMARY_KEYS.has(f.key));
  const detail = q.filters.filter(f => !SUMMARY_KEYS.has(f.key));
  const afterSummary = byName.filter(n => { const s = summaryOf(n); return s && summary.every(f => checkSummary(s, f)); });
  if (detail.length === 0) return afterSummary;
  return afterSummary.filter(n => { const m = loadMcu(n); return detail.every(f => checkDetail(m, f)); });
}

let pass = 0, fail = 0;
function expect(name, actual, predicate, hint) {
  if (predicate(actual)) { console.log(`  ✓ ${name}`); pass++; }
  else { console.log(`  ✗ ${name} — ${hint?.(actual) ?? JSON.stringify(actual).slice(0, 200)}`); fail++; }
}

console.log('parseQuery:');
expect('bare name', parseQuery('stm32f4'), q => q.namePattern === 'stm32f4' && q.filters.length === 0);
expect('name + filter', parseQuery('stm32h7 pin:144'), q => q.namePattern === 'stm32h7' && q.filters.length === 1);
expect('two filters', parseQuery('adc:3 ram:32k'), q => q.filters.length === 2);

console.log('wildcardMatch:');
expect('substring', wildcardMatch('stm32f401vc', 'stm32f4'), v => v === true);
expect('star middle', wildcardMatch('stm32h743', 'stm32h*43'), v => v === true);
expect('question', wildcardMatch('stm32f401v', 'stm32f40?v'), v => v === true);
expect('? rejects when no v', wildcardMatch('stm32f401zg', 'stm32f40?v'), v => v === false);
expect('explicit end anchor', wildcardMatch('stm32f401vb', 'stm32f40?v$'), v => v === false);
expect('start anchor', wildcardMatch('xstm32f4', '^stm32'), v => v === false);

console.log('summary filters (no fetch):');
const pin100 = search('pin:100');
expect('pin:100 has matches', pin100, r => r.length >= 600, r => `len=${r.length}`);
expect('pin:100 includes stm32f401vc', pin100, r => r.includes('stm32f401vc'));
expect('pin:144 has matches', search('pin:144'), r => r.length > 0);
expect('freq:100M has matches', search('freq:100M'), r => r.length > 100);
expect('mhz:400 has matches', search('mhz:400'), r => r.length > 0);
expect('ram:32k has matches', search('ram:32k'), r => r.length > 100);
expect('rom:256k has matches', search('rom:256k'), r => r.length > 100);
expect('family:stm32h*', search('family:stm32h*'), r => r.every(n => n.startsWith('stm32h')) && r.length > 50);
expect('sub_family filter', search('sub_family:stm32f405'), r => r.length > 0 && r.every(n => summaryOf(n).sub_family === 'stm32f405'));
expect('core:cm7', search('core:cm7'), r => r.length > 0);

console.log('detail filters (with fetch):');
const adc3 = search('adc:3');
expect('adc:3 has matches', adc3, r => r.length > 100);
const usart3 = search('usart:3');
const uart3 = search('uart:3');
expect('uart:3 == usart:3', uart3, r => r.length === usart3.length && r.length > 0);
expect('uart:3 contains stm32f103rd', uart3, r => r.includes('stm32f103rd'));

console.log('combined:');
const combined = search('stm32h7 pin:144 freq:300M');
expect('stm32h7 + pin:144 + freq:300M', combined, r => r.length > 0);
const wildName = search('stm32h*43');
expect('wildcard stm32h*43', wildName, r => r.length > 0 && r.every(n => n.startsWith('stm32h') && n.includes('43')));
const heavy = search('adc:3 ram:64k pin:144');
expect('mixed summary+detail', heavy, r => r.length > 0);

console.log('grouping:');
function groupResults(ns) {
  const fams = new Map();
  for (const n of ns) {
    const s = summaryOf(n);
    const fam = s?.family || '(unknown)';
    const sub = s?.sub_family || fam;
    let subs = fams.get(fam); if (!subs) { subs = new Map(); fams.set(fam, subs); }
    let list = subs.get(sub); if (!list) { list = []; subs.set(sub, list); }
    list.push(n);
  }
  return fams;
}
const g = groupResults(names);
expect('multiple families', g, m => m.size > 5);
const f4 = g.get('stm32f4');
expect('stm32f4 has subs', f4, m => m && m.size > 1);
const stm32f405 = f4 && [...f4.entries()].find(([k]) => k.includes('405'));
expect('stm32f405 sub group exists', stm32f405, v => Array.isArray(v) && v[1].length > 1);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
