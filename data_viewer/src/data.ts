import type { RootIndex, VendorIndex, Mcu, DeviceSummary } from './types';

const DATA_BASE = '/data';

let rootCache: RootIndex | null = null;
const vendorIndexCache = new Map<string, VendorIndex>();
const mcuCache = new Map<string, Mcu>();

export async function loadRoot(): Promise<RootIndex> {
  if (rootCache) return rootCache;
  const res = await fetch(`${DATA_BASE}/index.json`);
  if (!res.ok) throw new Error(`index.json: ${res.status}`);
  rootCache = (await res.json()) as RootIndex;
  return rootCache;
}

export async function getDeviceSummary(vendor: string, name: string): Promise<DeviceSummary | undefined> {
  const idx = await loadVendorIndex(vendor);
  return idx.devices[name];
}

export async function loadVendorIndex(vendor: string): Promise<VendorIndex> {
  const cached = vendorIndexCache.get(vendor);
  if (cached) return cached;
  const root = await loadRoot();
  const entry = root.vendors[vendor];
  if (!entry) throw new Error(`unknown vendor: ${vendor}`);
  const res = await fetch(`${DATA_BASE}/${entry.index}`);
  if (!res.ok) throw new Error(`${entry.index}: ${res.status}`);
  const idx = (await res.json()) as VendorIndex;
  vendorIndexCache.set(vendor, idx);
  return idx;
}

export async function loadMcu(vendor: string, name: string): Promise<Mcu> {
  const key = `${vendor}/${name}`;
  const cached = mcuCache.get(key);
  if (cached) return cached;
  const idx = await loadVendorIndex(vendor);
  const summary = idx.devices[name];
  if (!summary) throw new Error(`unknown device: ${name}`);
  const res = await fetch(`${DATA_BASE}/${vendor}/${summary.file}`);
  if (!res.ok) throw new Error(`${summary.file}: ${res.status}`);
  const parsed = (await res.json()) as Mcu;
  mcuCache.set(key, parsed);
  return parsed;
}
