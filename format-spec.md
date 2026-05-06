# mcu_data — JSON output format

`schema_version: 1` — bump on any breaking change to a field name, semantics,
or required-vs-optional status.

All sizes are byte counts. All addresses are emitted as hex strings
(`"0x40011000"`, upper-case digits, zero-padded to 8 hex chars where
applicable). All other integers are JSON numbers. Bit offsets / widths /
counts are unitless.

Identifiers are lower-case ASCII (`stm32f405rg`, `usart`, `armv7em`). String
keys never contain spaces.

UTF-8, JSON-spec strict. Files end with a single newline.

---

## 1. Layout

```
data/
  index.json                     # root catalog: vendor → index pointer
  stm32/                         # one directory per vendor
    index.json                   # device + ip catalog with summary meta
    families.json                # family taxonomy (per-vendor)
    mcu/<device-id>.json         # one file per concrete part number
    ip/<kind>/<version>.json     # register-block IP definitions
    _report/
      missing.md                 # required-field gaps (markdown)
      conflicts.md               # cross-source disagreements (markdown)
```

Vendor directory id == vendor key in the root index (`stm32`, future: `nrf`,
`rp2040`, `mspm0`, …).

---

## 2. Root `data/index.json`

```jsonc
{
  "schema_version": 1,
  "generated_at": "2026-05-06T10:21:43+00:00",   // ISO-8601 UTC
  "vendors": {
    "stm32": {
      "name":           "STMicroelectronics STM32",
      "manufacturer":   "STMicroelectronics",
      "index":          "stm32/index.json",       // relative path
      "device_count":   1503,
      "peripheral_kind_count": 107,
      "schema_version": 1,
      "generated_at":   "2026-05-06T10:21:43+00:00"
    }
  }
}
```

`vendors[*].index` is the only authoritative entry-point. All other fields
are summary metadata duplicated from the per-vendor index for quick
catalog browsing without a second fetch.

---

## 3. Vendor `data/<vendor>/index.json`

```jsonc
{
  "schema_version": 1,
  "generated_at": "2026-05-06T10:21:43+00:00",
  "vendor": "stm32",
  "device_count": 1503,
  "peripheral_kind_count": 107,
  "devices": {
    "stm32f405rg": {
      "file":         "mcu/stm32f405rg.json",
      "family":       "stm32f4",
      "sub_family":   "stm32f405",
      "cores": [
        { "name": "cm4", "freq_max_hz": 168000000, "fpu": "fpv4-sp-d16" }
      ],
      "flash_bytes":  1049104,
      "ram_bytes":    196608,
      "packages":     ["LQFP64"]
    },
    // ... one entry per device
  },
  "peripherals": {
    "usart": { "versions": ["v1", "v2", "v3"] },
    "adc":   { "versions": ["v1", "v2", "v3", "v4", "h5", "h7rs"] }
  }
}
```

`devices[did].file` is relative to the vendor directory. The other fields
are a summary of what's in the per-device JSON — sufficient for filtering,
search, and table rendering without opening every device file.

`peripherals[kind].versions` is the set of register-block versions for which
an IP file exists at `ip/<kind>/<version>.json`.

---

## 4. Per-device `mcu/<device-id>.json`

Top-level keys (in emit order):

```jsonc
{
  "schema":      1,                    // per-file schema version
  "name":        "stm32f405rg",        // canonical lower-case device id
  "family":      "stm32f4",
  "sub_family":  "stm32f405",          // optional, vendor-specific
  "line":        "STM32F405/415",      // optional, vendor marketing line
  "die":         "DIE413",             // optional, ST die identifier

  "cores":       [/* §4.1 */],
  "voltage":     {/* §4.2 */},
  "temperature": {/* §4.2 */},

  "memory":             [/* §4.3 */],
  "flash_wait_states":  [/* §4.4 */],

  "docs":      {/* §4.5 */},

  "packages":  [/* §4.6 */],
  "gpios":     [/* §4.7 */],

  "peripherals":     [/* §4.8 */],
  "interrupts":      [/* §4.9 */],
  "dma_controllers": [/* §4.10 */],
  "clock_tree":      {/* §4.11 */},

  "provenance": ["embassy", "modm", "open_pin_data", "stm32rs_parttable"]
}
```

Optional sections may be omitted entirely when no source provides data.
Order is stable but consumers must not rely on it.

### 4.1 `cores`

Always non-empty. One entry per CPU core on the die.

```jsonc
{
  "name":           "cm4",                 // armv6m: cm0, cm0p
                                           // armv7m: cm3
                                           // armv7em: cm4, cm7
                                           // armv8m: cm33, cm55
  "nvic_prio_bits": 4,
  "type_full":      "cortex-m4",           // optional
  "fpu":            "fpv4-sp-d16",         // optional, "none" if absent
  "revision":       "r0p1",                // optional
  "freq_max_hz":    168000000              // optional
}
```

### 4.2 `voltage` / `temperature`

```jsonc
"voltage":     { "min_v": 1.8, "max_v": 3.6 }     // V
"temperature": { "min_c": -40, "max_c": 105, "suffix": "7" }  // °C
```

`temperature.suffix` is the part-number temperature digit per ST naming
(`6`=85 °C, `7`=105 °C, `3`=125 °C). Optional.

### 4.3 `memory`

```jsonc
{
  "name":       "BANK_1_REGION_1",   // vendor-supplied region label
  "kind":       "flash",             // "flash" | "ram" | "otp" | ...
  "address":    "0x08000000",        // hex string
  "size":       65536,               // bytes
  "access":     "rx",                // r|w|x combinations
  "erase_size": 16384,               // optional, only on flash regions
  "write_size": 4                    // optional
}
```

### 4.4 `flash_wait_states`

Per-vcore wait-state table, useful for clock-tree validation.

```jsonc
{
  "vcore_min_mv": 1800,
  "wait_states": [
    { "ws": 0, "hclk_max": 20000000 },
    { "ws": 1, "hclk_max": 40000000 }
  ]
}
```

### 4.5 `docs`

```jsonc
{
  "refmanual":          "http://www.st.com/.../DM00031020.pdf",
  "refmanual_id":       "DM00031020",
  "refmanual_title":    "STM32F405/...",
  "datasheet":          "http://www.st.com/.../DM00037051.pdf",
  "programming_manual": "http://www.st.com/.../DM00046982.pdf",
  // stm32-rs RM-coded identifiers (complementary to ST's DM codes)
  "refmanual_rm_id":    "RM0090",
  "refmanual_rm_title": "STM32F405/...",
  "refmanual_rm_url":   "https://...",
  "product_url":        "https://www.st.com/...",
  "other": [
    { "type": "errata_sheet", "title": "...", "name": "DM00037591",
      "url": "..." }
  ]
}
```

All keys optional.

### 4.6 `packages`

```jsonc
{
  "name":    "LQFP64",            // physical package
  "variant": "STM32F405RGTx",     // ST RefName / SKU
  "pins": [
    { "position": "1",  "names": ["VBAT"],            "type": "power" },
    { "position": "2",  "names": ["PC13"],            "type": "io"    },
    { "position": "7",  "names": ["NRST"],            "type": "reset" },
    { "position": "60", "names": ["PA0", "PA0_C"],    "type": "io"    }
  ]
}
```

`pins[].position` is the package position string (numeric for QFP/QFN; grid
ref like `"A1"` for BGA).

`pins[].names` carries one or more **clean** identifiers:
- For IO pins: GPIO short names (`PC13`, `PA13`). Multi-bonded pins list
  every connected GPIO (e.g. `["PA0", "PA0_C"]` on H7/L4 analog companions).
- For special pins: the literal label (`VBAT`, `NRST`, `BOOT0`, `VDDA`, `NC`).
- Bonded debug/RTC suffixes (e.g. `ANTI_TAMP`, `JTMS-SWDIO`) are NOT
  duplicated here; they live on the corresponding gpio's
  `additional_functions`.

`pins[].type` is one of:
`io`, `power`, `reset`, `boot`, `mono_io`, `nc`, plus less-common values
that pass through verbatim from the upstream source (`bootloader`,
`bootrom`, `cube`, `el`, `linux`, `mcuboot`, `op-tee`, `sp_min`, `tf-a`,
`tf-m`, `u-boot`).

### 4.7 `gpios`

Top-level GPIO catalog. One entry per logical GPIO pad on the die.

```jsonc
{
  "name": "PA10",
  "port": "a",
  "pin":  10,
  "alternate_functions": {
    "1":  "TIM1_CH3",
    "7":  "USART1_RX",
    "10": "USB_OTG_FS_ID"
  },
  "additional_functions": [
    "ADC1_EXTI10",
    "EXTI10"
  ]
}
```

- `port` is lower-case `a`-`k` (or `_C` companion suffix retained on the
  full name for analog through-bonded GPIOs: `name="PA0_C"`).
- `alternate_functions` keys are AF numbers as **strings** (JSON object
  keys are always strings). Convert with `int(k)` if you need integers.
- Each AF value is either a single signal string (`"USART1_RX"`) or an
  array of strings if multiple peripheral signals share that AF on this
  pin (`["TIM2_CH1", "TIM2_ETR"]`). Always treat as string-or-array.
- Signal names are `<PERIPHERAL_INSTANCE>_<SIGNAL>` (e.g. `USART1_RX`,
  `SPI3_NSS`).
- `additional_functions` lists non-AF pin functions: ADC inputs, EXTI lines,
  RCC oscillator pins, debug (SWD/JTAG) signals. Format mirrors AF entries
  where applicable. Dash-joined dual signals are split with the prefix
  preserved (`SYS_JTMS-SWDIO` → `SYS_JTMS`, `SYS_SWDIO`).

Cross-reference: `packages[*].pins[*].names` → look up matching `gpios[*].name`.
Use the regex `^P[A-Z]\d+(_C)?$` to filter package pin names down to
GPIO-shaped strings.

### 4.8 `peripherals`

Per-device peripheral instance list. Includes both vendor peripherals and
ARM Cortex-M core peripherals (NVIC, SysTick, SCB, MPU, FPU, DWT, ITM, …).

```jsonc
{
  "name":            "USART1",
  "kind":            "usart",                 // peripheral kind (lower-case)
  "version":         "v2",                    // matches ip/<kind>/<version>.json
  "register_block":  "USART",                 // block name within the IP file
  "base_address":    "0x40011000",
  "rcc": {
    "bus_clock":       "PCLK2",
    "kernel_clock":    { "type": "fixed", "clock": "PCLK2" },
    "stop_mode":       null,
    "enable_register": "APB2ENR", "enable_field": "USART1EN",
    "reset_register":  "APB2RSTR", "reset_field":  "USART1RST"
  },
  "interrupts":   [{ "signal": "GLOBAL", "interrupt": "USART1" }],
  "dma_channels": [
    // legacy stream-based DMA: list of physical channels usable for the signal
    { "signal": "RX", "dma": ["DMA2_CH2", "DMA2_CH5"] },
    // DMAMUX-routed: every DMAMUX channel can carry the request, the (N)
    // suffix is the DMAMUX request input (DMAMUXn_CH<channel>(<request>))
    { "signal": "TX", "dma": ["DMAMUX1_CH0(51)", "DMAMUX1_CH1(51)", "..."] },
    // Conditional: a routing only available when an MCU register is in a
    // particular state (DMA remap bits on F0/F1/F3).
    { "signal": "RX", "dma": [
      { "dma": "DMA1_CH1",
        "enable_condition": {
          "set_register": {
            "register": "ADC1.CFGR1",
            "field":    "ADC_DMA_RMP",
            "value":    0
          }
        }
      },
      { "dma": "DMA1_CH2",
        "enable_condition": {
          "set_register": {
            "register": "ADC1.CFGR1",
            "field":    "ADC_DMA_RMP",
            "value":    1
          }
        }
      }
    ]}
  ],
  "features":     ["over8"],                  // modm-derived feature flags
  "modm_version": "stm32",                    // cross-ref tag; informational

  // Multi-core chips only: which cores can access this peripheral
  "cores": ["cm7", "cm4"],

  // Cortex-M core peripherals only
  "core": true
}
```

`rcc.kernel_clock` is always one of:
- `null` — no kernel clock (e.g. core peripherals)
- `{ "type": "fixed", "clock": "<clock-name>" }` — fixed bus/clock
- `{ "type": "mux", "register": "<RCC reg>", "field": "<RCC field>" }` —
  mux-selected; consumers must read the runtime register value to resolve

`dma_channels` groups every DMA route by its peripheral signal. Each entry's
`dma` field is a list whose elements are either an opaque token string or a
``{"dma": "<token>", "enable_condition": {...}}`` object when the routing
needs an MCU register to be in a particular state.

Token grammar:
- `DMA<n>_CH<m>` — legacy stream/channel-based DMA (F1/F2/F4/F7). The pair
  `(<DMAn>, <CHm>)` uniquely names the physical channel, no request mux.
- `DMAMUX<n>_CH<m>(<request>)` — DMAMUX-routed (G0/G4/H5/H7/L4+/L5/U5/WB
  and newer). The same DMAMUX request can be served by *any* DMAMUX
  channel; consumers are free to pick one based on availability. The
  `(<request>)` suffix is the DMAMUX input number on that mux.

`enable_condition` is a tagged-union; current shapes:
- `{"set_register": {"register": "<peripheral>.<register>", "field": "<field>", "value": <int>}}` —
  the field must hold the given value (typically a DMA-remap bit on F0/F3).
- `{"set_registers": [<set_register-shape>, ...]}` — for multi-step remaps;
  reserved for future use.

The top-level `dma_controllers` lists every physical DMA channel and its
DMAMUX assignment; the per-signal token list is derived from it at emit
time so consumers don't need to do the join themselves.

For ARM Cortex-M core peripherals (NVIC / SYST / SCB / MPU / FPU / DWT /
ITM / FPB / TPIU / DCB / CPB / CPUID), `core: true` is set, `version` is
the architecture id (`armv6m` / `armv7m` / `armv7em` / `armv8m`), and
`base_address` is the architectural constant (`0xE000E100` for NVIC, etc.).

### 4.9 `interrupts`

Flat NVIC vector list, sorted by `number`.

```jsonc
{ "name": "USART1", "number": 37 }
```

### 4.10 `dma_controllers`

```jsonc
{
  "name": "DMA1",
  "channels": [
    { "name": "DMA1_CH0", "channel": 0,
      "dmamux": null, "dmamux_channel": null }
  ]
}
```

### 4.11 `clock_tree`

A discovered-nodes view derived from the union of peripheral RCC bindings.
This is **not** a full PLL graph — it lists the bus-clock and kernel-clock
identifiers actually referenced by peripherals, plus the RCC mux fields.

```jsonc
{
  "buses":          ["HCLK1", "HCLK2", "PCLK1", "PCLK2"],
  "kernel_clocks":  ["HCLK1", "PCLK1", "PCLK1_TIM", "PCLK2", "PCLK2_TIM"],
  "kernel_muxes": [
    { "register": "BDCR",    "field": "RTCSEL",
      "peripherals": ["RTC"] },
    { "register": "DCKCFGR", "field": "CLK48SEL",
      "peripherals": ["USB_OTG_FS", "USB_OTG_HS"] }
  ],
  "enable_registers": ["AHB1ENR", "AHB2ENR", "APB1ENR", "APB2ENR"]
}
```

### 4.12 `provenance`

A sorted list of importer names that contributed to this device file
(`embassy`, `open_pin_data`, `modm`, `stm32rs_parttable`, `cortex_m`).
No semantic meaning beyond traceability.

---

## 5. Per-IP `ip/<kind>/<version>.json`

```jsonc
{
  "schema":  1,
  "kind":    "usart",
  "version": "v2",
  "blocks": {
    "USART": {
      "name":        "USART",
      "description": "Universal synchronous async receiver transmitter",
      "extends":     "UART",        // optional: another block in this file
      "registers": [
        {
          "name":        "CR1",
          "offset":      0,                 // byte offset within the block
          "size":        32,                // bits
          "access":      "read-write",      // standard SVD access codes
          "description": "Control register 1",
          "array_len":   null,
          "array_stride": null,
          "fieldset_description": "...",    // optional
          "fields": [
            {
              "name":        "UE",
              "bit_offset":  0,
              "bit_width":   1,
              "description": "USART enable",
              "enum":        null            // optional name → enums[]
            }
          ]
        }
      ]
    }
  },
  "enums": {
    "OVER8": {
      "bit_size": 1,
      "variants": [
        { "name": "Oversampling16", "value": 0,
          "description": "Oversampling by 16" },
        { "name": "Oversampling8",  "value": 1,
          "description": "Oversampling by 8" }
      ]
    }
  }
}
```

- `blocks` is keyed by block name; each `extends` value references another
  block in the **same** file (transitively). Consumers should resolve
  inheritance by merging `registers` from the chain.
- `registers[*].array_len` / `array_stride` are non-null when the register
  is a cluster array (e.g. `OARn`); the file contains a single template
  entry rather than expanded copies.
- `fields[*].enum` is the **name** of an entry in the top-level `enums`
  object. Resolve lazily.
- For ARM Cortex-M core IP files (`ip/nvic/armv7m.json`, `ip/syst/armv7em.json`,
  …), `enums` is `{}` and registers carry no field-level enum references.

---

## 6. Reports

`_report/missing.md` and `_report/conflicts.md` are markdown tables, not
JSON. Tooling may parse them with a markdown-table reader, but they are
intended primarily for human review.

```markdown
# Missing required fields

| device       | field                                  |
|---|---|
| stm32l011d3  | peripherals[ADC1_COMMON].kind/version  |
```

```markdown
# Cross-source conflicts

| device       | field      | winner | loser |
|---|---|---|---|
| stm32xxx... | docs.refmanual_title | {"source":"embassy","value":"..."} | {"source":"stm32rs_parttable","value":"..."} |
```

---

## 7. Conventions

**Identifiers**:
- `device id`: lower-case ASCII matching the device's "short" part number
  (no package/temperature suffix). E.g. `stm32f405rg` covers the LQFP64
  `STM32F405RGTx` and TFBGA `STM32F405RGYx` variants.
- `peripheral kind`: lower-case ASCII (`usart`, `adc`, `tim`, `gpio`).
- `peripheral version`: short identifier with no implicit ordering
  (`v1`, `v2`, `f3v3`, `h7rs`, `armv7em`). Don't compare lexically.
- `gpio name`: `P<port-uppercase><pin-decimal>` (`PA0`, `PC13`); analog
  companion: `P<port>(\d+)_C` (`PA0_C`).

**Numbers**:
- All addresses: hex string (`"0x40011000"`).
- All sizes: integer byte count.
- All frequencies: integer hertz.
- All voltages: float volts.
- All temperatures: integer °C.
- Bit offsets / widths / array indices: integer.

**Time**: ISO-8601 UTC strings (`"2026-05-06T10:21:43+00:00"`).

**Optional vs missing**: a key may be omitted entirely when no source has
data. Consumers must treat missing keys identically to `null`. Empty arrays
and empty objects are valid and meaningful (e.g. `additional_functions: []`
means "we know there are no extras", not "unknown").

---

## 8. Stability guarantees

- `schema_version: 1` covers every file.
- Adding new top-level optional keys is **non-breaking**.
- Adding new optional sub-keys inside an existing object is **non-breaking**.
- Adding new entries to enum-like fields (e.g. new pin `type` values, new
  RCC `kernel_clock.type` cases) is **non-breaking**; consumers must
  pass-through unrecognised values.
- Renaming or removing keys, narrowing a field's value space, or changing
  a value's type is **breaking** and bumps `schema_version`.
- Numeric `device_count` / `peripheral_kind_count` summaries in the
  catalogs may include or exclude future device kinds without bumping the
  schema; treat them as informational, not invariants.
