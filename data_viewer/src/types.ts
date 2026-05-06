export interface RootIndex {
  schema_version: number;
  generated_at: string;
  vendors: Record<string, RootVendorEntry>;
}

export interface RootVendorEntry {
  name: string;
  manufacturer: string;
  index: string;
  device_count: number;
  peripheral_kind_count: number;
  schema_version: number;
  generated_at: string;
}

export interface DeviceSummary {
  file: string;
  family: string;
  sub_family?: string;
  cores: { name: string; freq_max_hz?: number }[];
  flash_bytes?: number;
  ram_bytes?: number;
  packages: string[];
}

export interface VendorPeripheralEntry {
  versions: string[];
}

export interface VendorIndex {
  schema_version: number;
  generated_at: string;
  vendor: string;
  device_count: number;
  peripheral_kind_count: number;
  devices: Record<string, DeviceSummary>;
  peripherals?: Record<string, VendorPeripheralEntry>;
}

export interface Core {
  name: string;
  nvic_prio_bits?: number;
  type_full?: string;
  revision?: string;
}

export interface Memory {
  name: string;
  kind: string;
  address?: string;
  size: number;
  access?: string;
  erase_size?: number | null;
  write_size?: number | null;
}

export interface DocOther {
  type: string;
  title: string;
  name?: string;
  url: string;
}

export interface Docs {
  refmanual?: string;
  refmanual_id?: string;
  refmanual_title?: string;
  programming_manual?: string;
  datasheet?: string;
  product_url?: string;
  refmanual_rm_id?: string;
  refmanual_rm_title?: string;
  refmanual_rm_url?: string;
  other?: DocOther[];
}

export interface Pin {
  position: string;
  name: string;
  alt_names?: string[];
}

export interface Package {
  name: string;
  variant?: string;
  pins: Pin[];
}

export interface PeripheralPin {
  pin: string;
  signal: string;
  af?: number | null;
}

export interface PeripheralInterrupt {
  signal: string;
  interrupt: string;
}

export interface PeripheralDma {
  signal: string;
  channel?: string | null;
  dma?: string | null;
  dmamux?: string | null;
  request?: number | null;
}

export interface Peripheral {
  name: string;
  kind?: string | null;
  version?: string | null;
  register_block?: string | null;
  base_address?: string | null;
  rcc?: unknown;
  interrupts?: PeripheralInterrupt[];
  dma_channels?: PeripheralDma[];
  pins?: PeripheralPin[];
  core?: boolean;
  modm_version?: string | null;
}

export interface Interrupt {
  name: string;
  number: number;
}

export interface Mcu {
  schema: number;
  name: string;
  family: string;
  sub_family?: string;
  line?: string;
  die?: string;
  cores: Core[];
  frequency?: { max_hz?: number };
  voltage?: { min_v?: number; max_v?: number };
  temperature?: { min_c?: number; max_c?: number; suffix?: string };
  memory?: Memory[];
  flash_wait_states?: unknown;
  docs?: Docs;
  packages?: Package[];
  peripherals?: Peripheral[];
  interrupts?: Interrupt[];
  dma_controllers?: unknown;
  clock_tree?: unknown;
  provenance?: unknown;
}
