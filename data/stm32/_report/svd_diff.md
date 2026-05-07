# stm32-rs SVD vs embassy IP diff

- 294 (kind, version) pairs compared
- 276 with at least one diff
- 18 fully matching
- 421 devices skipped (no stm32-rs SVD coverage)

## Pairs with diffs

| kind | version | device | peripheral | svd | diff count |
|---|---|---|---|---|---:|
| jpeg | v1 | stm32h743ag | JPEG | stm32h743.svd.patched | 517 |
| rcc | h7rm0433 | stm32h743ag | RCC | stm32h743.svd.patched | 252 |
| rcc | h7 | stm32h723ve | RCC | stm32h735.svd.patched | 243 |
| rcc | h7ab | stm32h7a3ag | RCC | stm32h7b3.svd.patched | 234 |
| rcc | f4 | stm32f401cb | RCC | stm32f401.svd.patched | 200 |
| pwr | wb55 | stm32wb55cc | PWR | stm32wb55.svd.patched | 192 |
| tamp | u5 | stm32u535cb | TAMP | stm32u535.svd.patched | 189 |
| rcc | h7rs | stm32h7r3a8 | RCC | stm32h7r.svd.patched | 167 |
| tsc | v3 | stm32l052c6 | TSC | stm32l0x2.svd.patched | 164 |
| tamp | wba | stm32wba50ke | TAMP | stm32wba50.svd.patched | 155 |
| tsc | v2 | stm32wb55rc | TSC | stm32wb55.svd.patched | 146 |
| tamp | l5 | stm32l552cc | TAMP | stm32l552.svd.patched | 143 |
| exti | v1 | stm32f030c6 | EXTI | stm32f0x0.svd.patched | 138 |
| tsc | v1 | stm32f042c4 | TSC | stm32f0x2.svd.patched | 132 |
| rcc | l4 | stm32l412c8 | RCC | stm32l412.svd.patched | 130 |
| can | fdcan_h7 | stm32h723ve | FDCAN1 | stm32h735.svd.patched | 123 |
| rcc | u5 | stm32u535cb | RCC | stm32u535.svd.patched | 117 |
| timer | v2 | stm32h503cb | TIM1 | stm32h503.svd.patched | 115 |
| rcc | f7 | stm32f730i8 | RCC | stm32f730.svd.patched | 114 |
| adc | u5 | stm32u535cb | ADC1 | stm32u535.svd.patched | 103 |
| rcc | wba | stm32wba50ke | RCC | stm32wba50.svd.patched | 103 |
| eth | v2 | stm32h563ag | ETH | stm32h563.svd.patched | 102 |
| rcc | g0x0 | stm32g030c6 | RCC | stm32g030.svd.patched | 100 |
| rcc | h5 | stm32h562ag | RCC | stm32h562.svd.patched | 99 |
| rcc | g0x1 | stm32g031c4 | RCC | stm32g031.svd.patched | 96 |
| dts | v1 | stm32h503cb | DTS | stm32h503.svd.patched | 91 |
| rcc | f3v2 | stm32f301c6 | RCC | stm32f301.svd.patched | 89 |
| pwr | wba | stm32wba50ke | PWR | stm32wba50.svd.patched | 88 |
| timer | v3 | stm32g030c6 | TIM1 | stm32g030.svd.patched | 88 |
| syscfg | wb | stm32wb55cc | SYSCFG | stm32wb55.svd.patched | 83 |
| rcc | l4plus | stm32l4r5ag | RCC | stm32l4r5.svd.patched | 80 |
| adc | wba | stm32wba50ke | ADC4 | stm32wba50.svd.patched | 78 |
| gtzc | l5 | stm32l552cc | GTZC_MPCBB1 | stm32l552.svd.patched | 76 |
| tamp | h5 | stm32h503cb | TAMP | stm32h503.svd.patched | 76 |
| hash | v3 | stm32h503cb | HASH | stm32h503.svd.patched | 72 |
| hash | v4 | stm32u535cb | HASH | stm32u535.svd.patched | 72 |
| dbgmcu | h5 | stm32h503cb | DBGMCU | stm32h503.svd.patched | 70 |
| rcc | l5 | stm32l552cc | RCC | stm32l552.svd.patched | 69 |
| pwr | h7rm0455 | stm32h7a3ag | PWR | stm32h7b3.svd.patched | 68 |
| pwr | u5 | stm32u535cb | PWR | stm32u535.svd.patched | 68 |
| adc | v4 | stm32h723ve | ADC1 | stm32h735.svd.patched | 67 |
| rcc | f3v1 | stm32f302cb | RCC | stm32f302.svd.patched | 67 |
| flash | h7 | stm32h723ve | FLASH | stm32h735.svd.patched | 66 |
| mdios | v1 | stm32h723ve | MDIOS | stm32h735.svd.patched | 66 |
| ramcfg | wba | stm32wba50ke | RAMCFG | stm32wba50.svd.patched | 66 |
| adc | h7rs | stm32h7r3a8 | ADC1 | stm32h7r.svd.patched | 65 |
| rcc | f3v3 | stm32f302rd | RCC | stm32f302.svd.patched | 65 |
| tamp | g0 | stm32g030c6 | TAMP | stm32g030.svd.patched | 64 |
| tamp | wl | stm32wle5c8 | TAMP | stm32wle5.svd.patched | 64 |
| flash | h5 | stm32h562ag | FLASH | stm32h562.svd.patched | 63 |
| ramcfg | u5 | stm32u535cb | RAMCFG | stm32u535.svd.patched | 63 |
| flash | wba | stm32wba50ke | FLASH | stm32wba50.svd.patched | 62 |
| rcc | h50 | stm32h503cb | RCC | stm32h503.svd.patched | 59 |
| dac | v6 | stm32u535cb | DAC1 | stm32u535.svd.patched | 58 |
| pwr | l5 | stm32l552cc | PWR | stm32l552.svd.patched | 58 |
| flash | h7ab | stm32h7a3ag | FLASH | stm32h7b3.svd.patched | 57 |
| pwr | h5 | stm32h562ag | PWR | stm32h562.svd.patched | 55 |
| rcc | l0 | stm32l010c6 | RCC | stm32l0x0.svd.patched | 54 |
| adc | f3v3 | stm32f373c8 | ADC1 | stm32f373.svd.patched | 53 |
| rcc | f0v3 | stm32f030cc | RCC | stm32f0x0.svd.patched | 53 |
| rcc | f0v1 | stm32f030c6 | RCC | stm32f0x0.svd.patched | 52 |
| rcc | f0v2 | stm32f030c8 | RCC | stm32f0x0.svd.patched | 52 |
| rtc | v2_f7 | stm32f730i8 | RTC | stm32f730.svd.patched | 52 |
| rtc | v2_l0 | stm32l010c6 | RTC | stm32l0x0.svd.patched | 52 |
| rcc | l0_v2 | stm32l052c6 | RCC | stm32l0x2.svd.patched | 51 |
| rtc | v2_h7 | stm32h723ve | RTC | stm32h735.svd.patched | 51 |
| rtc | v2_l4 | stm32l431cb | RTC | stm32l4x1.svd.patched | 51 |
| rtc | v2_wb | stm32wb55cc | RTC | stm32wb55.svd.patched | 51 |
| timer | v1 | stm32f030c6 | TIM1 | stm32f0x0.svd.patched | 51 |
| can | bxcan | stm32f042c4 | CAN | stm32f0x2.svd.patched | 49 |
| dac | v4 | stm32h7a3ag | DAC1 | stm32h7b3.svd.patched | 49 |
| pwr | g0 | stm32g030c6 | PWR | stm32g030.svd.patched | 49 |
| rcc | f37 | stm32f373c8 | RCC | stm32f373.svd.patched | 49 |
| pwr | l4 | stm32l412c8 | PWR | stm32l412.svd.patched | 48 |
| rcc | f2 | stm32f205rb | RCC | stm32f215.svd.patched | 48 |
| rcc | f1 | stm32f101c4 | RCC | stm32f101.svd.patched | 46 |
| rtc | v2_f0 | stm32f030c6 | RTC | stm32f0x0.svd.patched | 45 |
| adc | f3v1 | stm32f301c6 | ADC1 | stm32f301.svd.patched | 44 |
| dbgmcu | f2 | stm32f205rb | DBGMCU | stm32f215.svd.patched | 44 |
| pwr | wl5 | stm32wle5c8 | PWR | stm32wle5.svd.patched | 44 |
| flash | u5 | stm32u535cb | FLASH | stm32u535.svd.patched | 43 |
| dbgmcu | wb | stm32wb55cc | DBGMCU | stm32wb55.svd.patched | 42 |
| otfdec | v1 | stm32h573ai | OTFDEC1 | stm32h573.svd.patched | 42 |
| usart | v4 | stm32g030c6 | USART1 | stm32g030.svd.patched | 42 |
| adc | v3 | stm32l412c8 | ADC1 | stm32l412.svd.patched | 41 |
| rtc | v3_base | stm32g030c6 | RTC | stm32g030.svd.patched | 40 |
| syscfg | l4 | stm32l412c8 | SYSCFG | stm32l412.svd.patched | 40 |
| cryp | v3 | stm32h730ab | CRYP | stm32h735.svd.patched | 39 |
| rtc | v2_l1 | stm32l100c6-a | RTC | stm32l100.svd.patched | 39 |
| rtc | v3_l5 | stm32l552cc | RTC | stm32l552.svd.patched | 39 |
| rcc | f1cl | stm32f105r8 | RCC | stm32f107.svd.patched | 38 |
| sai | v4_2pdm | stm32h562ag | SAI1 | stm32h562.svd.patched | 38 |
| syscfg | wle | stm32wle5c8 | SYSCFG | stm32wle5.svd.patched | 38 |
| rtc | v2_f3 | stm32f301c6 | RTC | stm32f301.svd.patched | 37 |
| rtc | v3_u5 | stm32h503cb | RTC | stm32h503.svd.patched | 37 |
| dbgmcu | l4 | stm32l412c8 | DBGMCU | stm32l412.svd.patched | 36 |
| rcc | l1 | stm32l100c6-a | RCC | stm32l100.svd.patched | 36 |
| rtc | v2_f4 | stm32f401cb | RTC | stm32f401.svd.patched | 36 |
| rtc | v3_h7rs | stm32h7r3a8 | RTC | stm32h7r.svd.patched | 36 |
| dac | v2 | stm32f301c6 | DAC1 | stm32f301.svd.patched | 35 |
| rcc | f0v4 | stm32f042c4 | RCC | stm32f0x2.svd.patched | 35 |
| adc | h5 | stm32h503cb | ADC1 | stm32h503.svd.patched | 34 |
| can | fdcan_v1 | stm32g0b1cb | FDCAN1 | stm32g0b1.svd.patched | 34 |
| usart | v3 | stm32f030c6 | USART1 | stm32f0x0.svd.patched | 34 |
| dbgmcu | f1 | stm32f100c4 | DBGMCU | stm32f100.svd.patched | 33 |
| exti | w | stm32wb55cc | EXTI | stm32wb55.svd.patched | 33 |
| exti | h5 | stm32h562ag | EXTI | stm32h562.svd.patched | 32 |
| exti | h7 | stm32h723ve | EXTI | stm32h735.svd.patched | 32 |
| exti | l5 | stm32l552cc | EXTI | stm32l552.svd.patched | 32 |
| rcc | f100 | stm32f100c4 | RCC | stm32f100.svd.patched | 32 |
| syscfg | g0 | stm32g030c6 | SYSCFG | stm32g030.svd.patched | 32 |
| flash | g0x1 | stm32g031c4 | FLASH | stm32g031.svd.patched | 31 |
| fmc | v4 | stm32h562ag | FMC | stm32h562.svd.patched | 31 |
| pwr | h7rm0468 | stm32h723ve | PWR | stm32h735.svd.patched | 31 |
| rtc | v2_f2 | stm32f205rb | RTC | stm32f215.svd.patched | 31 |
| rtc | v3_l4 | stm32l412c8 | RTC | stm32l412.svd.patched | 31 |
| pwr | h50 | stm32h503cb | PWR | stm32h503.svd.patched | 30 |
| syscfg | f3 | stm32f301c6 | SYSCFG | stm32f301.svd.patched | 30 |
| dbgmcu | wl | stm32wle5c8 | DBGMCU | stm32wle5.svd.patched | 29 |
| exti | h50 | stm32h503cb | EXTI | stm32h503.svd.patched | 29 |
| fmc | v1x3 | stm32f429ag | FMC | stm32f429.svd.patched | 29 |
| pwr | h7rs | stm32h7r3a8 | PWR | stm32h7r.svd.patched | 29 |
| saes | v1a | stm32h573ai | SAES | stm32h573.svd.patched | 29 |
| timer | l0 | stm32l010c6 | TIM2 | stm32l0x0.svd.patched | 29 |
| aes | v1 | stm32f423ch | AES | stm32f413.svd.patched | 28 |
| pwr | f7 | stm32f730i8 | PWR | stm32f730.svd.patched | 28 |
| pwr | h7rm0433 | stm32h743ag | PWR | stm32h743.svd.patched | 28 |
| aes | f7 | stm32f730i8 | AES | stm32f730.svd.patched | 27 |
| aes | v2 | stm32g041c6 | AES | stm32g041.svd.patched | 27 |
| aes | v3a | stm32u545ce | AES | stm32u545.svd.patched | 27 |
| aes | v3b | stm32h573ai | AES | stm32h573.svd.patched | 27 |
| gfxmmu | v1 | stm32l4r9ag | GFXMMU | stm32l4r9.svd.patched | 27 |
| flash | wl | stm32wle5c8 | FLASH | stm32wle5.svd.patched | 26 |
| rcc | wb | stm32wb55cc | RCC | stm32wb55.svd.patched | 26 |
| exti | u5 | stm32u535cb | EXTI | stm32u535.svd.patched | 25 |
| fsmc | v1x3 | stm32f101vc | FSMC | stm32f101.svd.patched | 25 |
| gfxmmu | v2 | stm32u599bj | GFXMMU | stm32u599.svd.patched | 24 |
| hsem | wba | stm32wba50ke | HSEM | stm32wba50.svd.patched | 24 |
| sdadc | v1 | stm32f373c8 | SDADC1 | stm32f373.svd.patched | 24 |
| dbgmcu | f0 | stm32f030c6 | DBGMCU | stm32f0x0.svd.patched | 23 |
| fmc | v2x1 | stm32f446vc | FMC | stm32f446.svd.patched | 23 |
| gpio | v2_l478 | stm32l471qe | GPIOA | stm32l4x1.svd.patched | 23 |
| bdma | v2 | stm32f030cc | DMA1 | stm32f0x0.svd.patched | 22 |
| gpio | v2 | stm32f030c6 | GPIOA | stm32f0x0.svd.patched | 22 |
| i3c | v1 | stm32h503cb | I3C1 | stm32h503.svd.patched | 22 |
| lpdma | v1 | stm32u535cb | LPDMA1 | stm32u535.svd.patched | 22 |
| ucpd | v1 | stm32g071c6 | UCPD1 | stm32g071.svd.patched | 22 |
| bdma | v1 | stm32f030c6 | DMA1 | stm32f0x0.svd.patched | 21 |
| hsem | v1 | stm32wb55cc | HSEM | stm32wb55.svd.patched | 21 |
| gpdma | v1 | stm32h503cb | GPDMA1 | stm32h503.svd.patched | 20 |
| saes | v1b | stm32u545ce | SAES | stm32u545.svd.patched | 20 |
| afio | f1 | stm32f100c4 | AFIO | stm32f100.svd.patched | 19 |
| exti | g0 | stm32g030c6 | EXTI | stm32g030.svd.patched | 19 |
| sdmmc | v1 | stm32f103rc | SDIO | stm32f103.svd.patched | 19 |
| syscfg | l0 | stm32l010c6 | SYSCFG | stm32l0x0.svd.patched | 19 |
| adc | f1 | stm32f100c4 | ADC1 | stm32f100.svd.patched | 18 |
| adc | v2 | stm32f205rb | ADC1 | stm32f215.svd.patched | 18 |
| adf | v1 | stm32u535cb | ADF1 | stm32u535.svd.patched | 18 |
| cryp | v4 | stm32h7s3a8 | CRYP | stm32h7s.svd.patched | 18 |
| dbgmcu | h7 | stm32h723ve | DBGMCU | stm32h735.svd.patched | 18 |
| usb | v4 | stm32g0b0ce | USB | stm32g0b0.svd.patched | 18 |
| exti | wle | stm32wle5c8 | EXTI | stm32wle5.svd.patched | 17 |
| ipcc | v1 | stm32wb55cc | IPCC | stm32wb55.svd.patched | 17 |
| ramcfg | h5 | stm32h503cb | RAMCFG | stm32h503.svd.patched | 17 |
| syscfg | h7 | stm32h723ve | SYSCFG | stm32h735.svd.patched | 17 |
| mdma | v1 | stm32h723ve | MDMA | stm32h735.svd.patched | 16 |
| syscfg | f0 | stm32f030c6 | SYSCFG | stm32f0x0.svd.patched | 16 |
| flash | l0 | stm32l010c6 | FLASH | stm32l0x0.svd.patched | 15 |
| flash | l5 | stm32l552cc | FLASH | stm32l552.svd.patched | 15 |
| gpio | v1 | stm32f100c4 | GPIOA | stm32f100.svd.patched | 15 |
| lptim | v2a | stm32h503cb | LPTIM1 | stm32h503.svd.patched | 15 |
| sai | v1_4pdm | stm32wb55cc | SAI1 | stm32wb55.svd.patched | 15 |
| sai | v3_2pdm | stm32l552cc | SAI1 | stm32l552.svd.patched | 15 |
| sai | v3_4pdm | stm32h743ag | SAI1 | stm32h743.svd.patched | 15 |
| sai | v4_4pdm | stm32h723ve | SAI1 | stm32h735.svd.patched | 15 |
| dbgmcu | l5 | stm32l552cc | DBGMCU | stm32l552.svd.patched | 14 |
| flash | l4 | stm32l412c8 | FLASH | stm32l412.svd.patched | 14 |
| hsem | v2 | stm32h735ag | HSEM | stm32h735.svd.patched | 14 |
| hsem | v4 | stm32wle5c8 | HSEM | stm32wle5.svd.patched | 14 |
| rcc | wb0 | stm32wb05kz | RCC | stm32wb05.svd.patched | 14 |
| dma | v1 | stm32h723ve | DMA1 | stm32h735.svd.patched | 13 |
| dma | v2 | stm32f205rb | DMA1 | stm32f215.svd.patched | 13 |
| ltdc | v1 | stm32f429ag | LTDC | stm32f429.svd.patched | 13 |
| sdmmc | v2 | stm32h562ag | SDMMC1 | stm32h562.svd.patched | 13 |
| comp | h7_a | stm32h7a3ag | COMP1 | stm32h7b3.svd.patched | 12 |
| cryp | v2 | stm32f437ai | CRYP | stm32f427.svd.patched | 12 |
| dmamux | v1 | stm32h723ve | DMAMUX1 | stm32h735.svd.patched | 12 |
| flash | h50 | stm32h503cb | FLASH | stm32h503.svd.patched | 12 |
| fmc | v3x1 | stm32h723ve | FMC | stm32h735.svd.patched | 12 |
| lcd | v2 | stm32l053c6 | LCD | stm32l0x3.svd.patched | 12 |
| dma2d | v1 | stm32f427ag | DMA2D | stm32f427.svd.patched | 11 |
| flash | g0x0 | stm32g030c6 | FLASH | stm32g030.svd.patched | 11 |
| lcd | v1 | stm32l100c6-a | LCD | stm32l100.svd.patched | 11 |
| spi | v2_i2s | stm32f205rb | SPI1 | stm32f215.svd.patched | 11 |
| spi | v5_i2s | stm32h503cb | SPI1 | stm32h503.svd.patched | 11 |
| spi | v6 | stm32u535cb | SPI1 | stm32u535.svd.patched | 11 |
| syscfg | u5 | stm32u535cb | SYSCFG | stm32u535.svd.patched | 11 |
| ucpd | h5 | stm32h562ag | UCPD1 | stm32h562.svd.patched | 11 |
| comp | h7_b | stm32h723ve | COMP1 | stm32h735.svd.patched | 10 |
| flash | h7rs | stm32h7r3a8 | FLASH | stm32h7r.svd.patched | 10 |
| lptim | v1c | stm32l552cc | LPTIM1 | stm32l552.svd.patched | 10 |
| spi | v4_i2s | stm32h723ve | SPI1 | stm32h735.svd.patched | 10 |
| syscfg | f4 | stm32f401cb | SYSCFG | stm32f401.svd.patched | 10 |
| syscfg | h7od | stm32h743ag | SYSCFG | stm32h743.svd.patched | 10 |
| i2c | v1 | stm32f100c4 | I2C1 | stm32f100.svd.patched | 9 |
| lptim | v1b_h7 | stm32h723ve | LPTIM1 | stm32h735.svd.patched | 9 |
| pwr | f0 | stm32f031c4 | PWR | stm32f0x1.svd.patched | 9 |
| pwr | f3 | stm32f301c6 | PWR | stm32f301.svd.patched | 9 |
| sai | v1 | stm32f427ag | SAI1 | stm32f427.svd.patched | 9 |
| sai | v2 | stm32f446mc | SAI1 | stm32f446.svd.patched | 9 |
| syscfg | wba | stm32wba50ke | SYSCFG | stm32wba50.svd.patched | 9 |
| cryp | v1 | stm32f215re | CRYP | stm32f215.svd.patched | 8 |
| flash | f7 | stm32f730i8 | FLASH | stm32f730.svd.patched | 8 |
| lptim | v1a | stm32f410c8 | LPTIM1 | stm32f410.svd.patched | 8 |
| lptim | v1b | stm32g031c4 | LPTIM1 | stm32g031.svd.patched | 8 |
| rcc | wle | stm32wle5c8 | RCC | stm32wle5.svd.patched | 8 |
| syscfg | f2 | stm32f205rb | SYSCFG | stm32f215.svd.patched | 8 |
| syscfg | f7 | stm32f730i8 | SYSCFG | stm32f730.svd.patched | 8 |
| crc | v3 | stm32f070c6 | CRC | stm32f0x0.svd.patched | 7 |
| dma2d | v2 | stm32h723ve | DMA2D | stm32h735.svd.patched | 7 |
| flash | f4 | stm32f401cb | FLASH | stm32f401.svd.patched | 7 |
| fsmc | v1x0 | stm32f100vc | FSMC | stm32f100.svd.patched | 7 |
| hash | v2 | stm32f437ai | HASH | stm32f427.svd.patched | 7 |
| opamp | v4 | stm32h503cb | OPAMP1 | stm32h503.svd.patched | 7 |
| pwr | f0x0 | stm32f030c6 | PWR | stm32f0x0.svd.patched | 7 |
| rcc | f410 | stm32f410c8 | RCC | stm32f410.svd.patched | 7 |
| spi | v1 | stm32f100c4 | SPI1 | stm32f100.svd.patched | 7 |
| spi | v3 | stm32f030c6 | SPI1 | stm32f0x0.svd.patched | 7 |
| usart | v2 | stm32f205rb | USART1 | stm32f215.svd.patched | 7 |
| bkp | v1 | stm32f100c4 | BKP | stm32f100.svd.patched | 6 |
| crc | v2 | stm32f030c6 | CRC | stm32f0x0.svd.patched | 6 |
| icache | v1_3crr | stm32u535cb | ICACHE | stm32u535.svd.patched | 6 |
| icache | v1_4crr | stm32h562ag | ICACHE | stm32h562.svd.patched | 6 |
| syscfg | l1 | stm32l100c6-a | SYSCFG | stm32l100.svd.patched | 6 |
| usb | v2 | stm32f302c6 | USB | stm32f302.svd.patched | 6 |
| dcmi | v1 | stm32f207ic | DCMI | stm32f217.svd.patched | 5 |
| flash | f1 | stm32f100c4 | FLASH | stm32f100.svd.patched | 5 |
| hash | v1 | stm32f215re | HASH | stm32f215.svd.patched | 5 |
| pssi | v1 | stm32h562ag | PSSI | stm32h562.svd.patched | 5 |
| pssi | v1_h7rs | stm32h7r3a8 | PSSI | stm32h7r.svd.patched | 5 |
| usart | v1 | stm32f100c4 | USART1 | stm32f100.svd.patched | 5 |
| cec | v2 | stm32f042c4 | CEC | stm32f0x2.svd.patched | 4 |
| dbgmcu | f3 | stm32f301c6 | DBGMCU | stm32f301.svd.patched | 4 |
| dbgmcu | f4 | stm32f401cb | DBGMCU | stm32f401.svd.patched | 4 |
| dbgmcu | f7 | stm32f730i8 | DBGMCU | stm32f730.svd.patched | 4 |
| dbgmcu | u5 | stm32u535cb | DBGMCU | stm32u535.svd.patched | 4 |
| dbgmcu | wba | stm32wba50ke | DBGMCU | stm32wba50.svd.patched | 4 |
| dcache | v1 | stm32u595ai | DCACHE1 | stm32u595.svd.patched | 4 |
| flash | f2 | stm32f205rb | FLASH | stm32f215.svd.patched | 4 |
| flash | f3 | stm32f301c6 | FLASH | stm32f301.svd.patched | 4 |
| i2c | v2 | stm32f030c6 | I2C1 | stm32f0x0.svd.patched | 4 |
| pwr | f4 | stm32f401cb | PWR | stm32f401.svd.patched | 4 |
| pwr | l1 | stm32l100c6-a | PWR | stm32l100.svd.patched | 4 |
| quadspi | v1 | stm32f412re | QUADSPI | stm32f412.svd.patched | 4 |
| spi | v3_i2s | stm32f031c4 | SPI1 | stm32f0x1.svd.patched | 4 |
| fmpi2c | v2 | stm32f410c8 | FMPI2C1 | stm32f410.svd.patched | 3 |
| i2c | v3 | stm32h7r3a8 | I2C2 | stm32h7r.svd.patched | 3 |
| pwr | l0 | stm32l010c6 | PWR | stm32l0x0.svd.patched | 3 |
| spi | v2 | stm32l010c6 | SPI1 | stm32l0x0.svd.patched | 3 |
| cordic | v1 | stm32h562ag | CORDIC | stm32h562.svd.patched | 2 |
| crc | v1 | stm32f100c4 | CRC | stm32f100.svd.patched | 2 |
| fmac | v1 | stm32h562ag | FMAC | stm32h562.svd.patched | 2 |
| radio | v1 | stm32wb05kz | RADIO | stm32wb05.svd.patched | 2 |
| rng | v1 | stm32f205rb | RNG | stm32f215.svd.patched | 2 |
| rng | v3 | stm32h503cb | RNG | stm32h503.svd.patched | 2 |
| usb | v1 | stm32f102c4 | USB | stm32f102.svd.patched | 2 |
| usb | v3 | stm32f042c4 | USB | stm32f0x2.svd.patched | 2 |
| icache | v1_0crr | stm32h503cb | ICACHE | stm32h503.svd.patched | 1 |
| iwdg | v3 | stm32h503cb | IWDG | stm32h503.svd.patched | 1 |
| octospi | v2 | stm32l552cc | OCTOSPI1 | stm32l552.svd.patched | 1 |
| pka | v1a | stm32h573ai | PKA | stm32h573.svd.patched | 1 |
| pka | v1b | stm32u545ce | PKA | stm32u545.svd.patched | 1 |
| pka | v1c | stm32l562ce | PKA | stm32l562.svd.patched | 1 |
| rng | v2 | stm32h723ve | RNG | stm32h735.svd.patched | 1 |
| spi | v1_i2s | stm32f101rc | SPI1 | stm32f101.svd.patched | 1 |
| vrefbuf | v1 | stm32g031c4 | VREFBUF | stm32g031.svd.patched | 1 |

## Top diffs (first 200 entries)

### jpeg/v1  (stm32h743ag · JPEG · stm32h743.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | CFR |  | svd offset 0x38 |
| register_extra_in_svd | CONFR0 |  | svd offset 0x0 |
| register_extra_in_svd | CONFR1 |  | svd offset 0x4 |
| register_extra_in_svd | CONFR2 |  | svd offset 0x8 |
| register_extra_in_svd | CONFR3 |  | svd offset 0xC |
| register_extra_in_svd | CONFRN1 |  | svd offset 0x10 |
| register_extra_in_svd | CONFRN2 |  | svd offset 0x14 |
| register_extra_in_svd | CONFRN3 |  | svd offset 0x18 |
| register_extra_in_svd | CONFRN4 |  | svd offset 0x1C |
| register_extra_in_svd | CR |  | svd offset 0x30 |
| register_missing_in_svd | DHTMEM0 |  |  |
| register_missing_in_svd | DHTMEM10 |  |  |
| register_missing_in_svd | DHTMEM100 |  |  |
| register_missing_in_svd | DHTMEM101 |  |  |
| register_missing_in_svd | DHTMEM102 |  |  |
| register_missing_in_svd | DHTMEM103 |  |  |
| register_missing_in_svd | DHTMEM11 |  |  |
| register_missing_in_svd | DHTMEM12 |  |  |
| register_missing_in_svd | DHTMEM13 |  |  |
| register_missing_in_svd | DHTMEM14 |  |  |
| register_missing_in_svd | DHTMEM15 |  |  |
| register_missing_in_svd | DHTMEM16 |  |  |
| register_missing_in_svd | DHTMEM17 |  |  |
| register_missing_in_svd | DHTMEM18 |  |  |
| register_missing_in_svd | DHTMEM19 |  |  |
| register_missing_in_svd | DHTMEM2 |  |  |
| register_missing_in_svd | DHTMEM20 |  |  |
| register_missing_in_svd | DHTMEM21 |  |  |
| register_missing_in_svd | DHTMEM22 |  |  |
| register_missing_in_svd | DHTMEM23 |  |  |
| register_missing_in_svd | DHTMEM24 |  |  |
| register_missing_in_svd | DHTMEM25 |  |  |
| register_missing_in_svd | DHTMEM26 |  |  |
| register_missing_in_svd | DHTMEM27 |  |  |
| register_missing_in_svd | DHTMEM28 |  |  |
| register_missing_in_svd | DHTMEM29 |  |  |
| register_missing_in_svd | DHTMEM3 |  |  |
| register_missing_in_svd | DHTMEM30 |  |  |
| register_missing_in_svd | DHTMEM31 |  |  |
| register_missing_in_svd | DHTMEM32 |  |  |
| register_missing_in_svd | DHTMEM33 |  |  |
| register_missing_in_svd | DHTMEM34 |  |  |
| register_missing_in_svd | DHTMEM35 |  |  |
| register_missing_in_svd | DHTMEM36 |  |  |
| register_missing_in_svd | DHTMEM37 |  |  |
| register_missing_in_svd | DHTMEM38 |  |  |
| register_missing_in_svd | DHTMEM39 |  |  |
| register_missing_in_svd | DHTMEM4 |  |  |
| register_missing_in_svd | DHTMEM40 |  |  |
| register_missing_in_svd | DHTMEM41 |  |  |
| _… 467 more …_ | | | |

### rcc/h7rm0433  (stm32h743ag · RCC · stm32h743.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB1ENR | ARTEN |  |
| field_extra_in_svd | AHB1ENR | ETH1MACEN | svd[15:+1] |
| field_extra_in_svd | AHB1ENR | ETH1RXEN | svd[17:+1] |
| field_extra_in_svd | AHB1ENR | ETH1TXEN | svd[16:+1] |
| field_missing_in_svd | AHB1ENR | ETHEN |  |
| field_missing_in_svd | AHB1ENR | ETHRXEN |  |
| field_missing_in_svd | AHB1ENR | ETHTXEN |  |
| field_extra_in_svd | AHB1ENR | USB1OTGHSEN | svd[25:+1] |
| field_extra_in_svd | AHB1ENR | USB1OTGULPIEN | svd[26:+1] |
| field_extra_in_svd | AHB1ENR | USB2OTGHSEN | svd[27:+1] |
| field_extra_in_svd | AHB1ENR | USB2OTGHSULPIEN | svd[28:+1] |
| field_missing_in_svd | AHB1ENR | USB_OTG_FSEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_FS_ULPIEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_HSEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_HS_ULPIEN |  |
| field_missing_in_svd | AHB1LPENR | ARTLPEN |  |
| field_extra_in_svd | AHB1LPENR | ETH1MACLPEN | svd[15:+1] |
| field_extra_in_svd | AHB1LPENR | ETH1RXLPEN | svd[17:+1] |
| field_extra_in_svd | AHB1LPENR | ETH1TXLPEN | svd[16:+1] |
| field_missing_in_svd | AHB1LPENR | ETHLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHRXLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHTXLPEN |  |
| field_extra_in_svd | AHB1LPENR | USB1OTGLPEN | svd[25:+1] |
| field_extra_in_svd | AHB1LPENR | USB1OTGULPILPEN | svd[26:+1] |
| field_extra_in_svd | AHB1LPENR | USB2OTGLPEN | svd[27:+1] |
| field_extra_in_svd | AHB1LPENR | USB2OTGULPILPEN | svd[28:+1] |
| field_missing_in_svd | AHB1LPENR | USB_OTG_FSLPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_FS_ULPILPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HSLPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HS_ULPILPEN |  |
| field_missing_in_svd | AHB1RSTR | ARTRST |  |
| field_extra_in_svd | AHB1RSTR | ETH1MACRST | svd[15:+1] |
| field_missing_in_svd | AHB1RSTR | ETHRST |  |
| field_extra_in_svd | AHB1RSTR | USB1OTGRST | svd[25:+1] |
| field_extra_in_svd | AHB1RSTR | USB2OTGRST | svd[27:+1] |
| field_missing_in_svd | AHB1RSTR | USB_OTG_FSRST |  |
| field_missing_in_svd | AHB1RSTR | USB_OTG_HSRST |  |
| field_missing_in_svd | AHB2ENR | CORDICEN |  |
| field_missing_in_svd | AHB2ENR | CRYPEN |  |
| field_extra_in_svd | AHB2ENR | CRYPTEN | svd[4:+1] |
| field_missing_in_svd | AHB2ENR | FMACEN |  |
| field_missing_in_svd | AHB2LPENR | CORDICLPEN |  |
| field_missing_in_svd | AHB2LPENR | CRYPLPEN |  |
| field_extra_in_svd | AHB2LPENR | CRYPTLPEN | svd[4:+1] |
| field_missing_in_svd | AHB2LPENR | FMACLPEN |  |
| field_extra_in_svd | AHB2RSTR | CAMITFRST | svd[0:+1] |
| field_missing_in_svd | AHB2RSTR | CORDICRST |  |
| field_missing_in_svd | AHB2RSTR | CRYPRST |  |
| field_extra_in_svd | AHB2RSTR | CRYPTRST | svd[4:+1] |
| field_missing_in_svd | AHB2RSTR | DCMIRST |  |
| _… 202 more …_ | | | |

### rcc/h7  (stm32h723ve · RCC · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB1ENR | ARTEN |  |
| field_extra_in_svd | AHB1ENR | ETH1MACEN | svd[15:+1] |
| field_extra_in_svd | AHB1ENR | ETH1RXEN | svd[17:+1] |
| field_extra_in_svd | AHB1ENR | ETH1TXEN | svd[16:+1] |
| field_missing_in_svd | AHB1ENR | ETHEN |  |
| field_missing_in_svd | AHB1ENR | ETHRXEN |  |
| field_missing_in_svd | AHB1ENR | ETHTXEN |  |
| field_extra_in_svd | AHB1ENR | USB1OTGHSEN | svd[25:+1] |
| field_extra_in_svd | AHB1ENR | USB1OTGULPIEN | svd[26:+1] |
| field_missing_in_svd | AHB1ENR | USB_OTG_FSEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_FS_ULPIEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_HSEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_HS_ULPIEN |  |
| field_missing_in_svd | AHB1LPENR | ARTLPEN |  |
| field_extra_in_svd | AHB1LPENR | ETH1MACLPEN | svd[15:+1] |
| field_extra_in_svd | AHB1LPENR | ETH1RXLPEN | svd[17:+1] |
| field_extra_in_svd | AHB1LPENR | ETH1TXLPEN | svd[16:+1] |
| field_missing_in_svd | AHB1LPENR | ETHLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHRXLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHTXLPEN |  |
| field_extra_in_svd | AHB1LPENR | USB1OTGLPEN | svd[25:+1] |
| field_extra_in_svd | AHB1LPENR | USB1OTGULPILPEN | svd[26:+1] |
| field_missing_in_svd | AHB1LPENR | USB_OTG_FSLPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_FS_ULPILPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HSLPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HS_ULPILPEN |  |
| field_missing_in_svd | AHB1RSTR | ARTRST |  |
| field_extra_in_svd | AHB1RSTR | ETH1MACRST | svd[15:+1] |
| field_missing_in_svd | AHB1RSTR | ETHRST |  |
| field_extra_in_svd | AHB1RSTR | USB1OTGRST | svd[25:+1] |
| field_missing_in_svd | AHB1RSTR | USB_OTG_FSRST |  |
| field_missing_in_svd | AHB1RSTR | USB_OTG_HSRST |  |
| field_missing_in_svd | AHB2ENR | CRYPEN |  |
| field_extra_in_svd | AHB2ENR | CRYPTEN | svd[4:+1] |
| field_missing_in_svd | AHB2ENR | DCMIEN |  |
| field_extra_in_svd | AHB2ENR | DCMI_PSSIEN | svd[0:+1] |
| field_missing_in_svd | AHB2ENR | SRAM3EN |  |
| field_missing_in_svd | AHB2LPENR | CRYPLPEN |  |
| field_extra_in_svd | AHB2LPENR | CRYPTLPEN | svd[4:+1] |
| field_missing_in_svd | AHB2LPENR | DCMILPEN |  |
| field_extra_in_svd | AHB2LPENR | DCMI_PSSILPEN | svd[0:+1] |
| field_missing_in_svd | AHB2LPENR | SRAM3LPEN |  |
| field_missing_in_svd | AHB2RSTR | CRYPRST |  |
| field_extra_in_svd | AHB2RSTR | CRYPTRST | svd[4:+1] |
| field_missing_in_svd | AHB2RSTR | DCMIRST |  |
| field_extra_in_svd | AHB2RSTR | DCMI_PSSIRST | svd[0:+1] |
| field_missing_in_svd | AHB3ENR | AXISRAMEN |  |
| field_missing_in_svd | AHB3ENR | DTCM1EN |  |
| field_missing_in_svd | AHB3ENR | DTCM2EN |  |
| field_missing_in_svd | AHB3ENR | ITCM1EN |  |
| _… 193 more …_ | | | |

### rcc/h7ab  (stm32h7a3ag · RCC · stm32h7b3.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB1ENR | ARTEN |  |
| field_extra_in_svd | AHB1ENR | CRCEN | svd[9:+1] |
| field_missing_in_svd | AHB1ENR | ETHEN |  |
| field_missing_in_svd | AHB1ENR | ETHRXEN |  |
| field_missing_in_svd | AHB1ENR | ETHTXEN |  |
| field_extra_in_svd | AHB1ENR | USB1OTGEN | svd[25:+1] |
| field_extra_in_svd | AHB1ENR | USB1OTGULPIEN | svd[26:+1] |
| field_missing_in_svd | AHB1ENR | USB_OTG_FSEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_FS_ULPIEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_HSEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_HS_ULPIEN |  |
| field_missing_in_svd | AHB1LPENR | ARTLPEN |  |
| field_extra_in_svd | AHB1LPENR | CRCLPEN | svd[9:+1] |
| field_missing_in_svd | AHB1LPENR | ETHLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHRXLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHTXLPEN |  |
| field_extra_in_svd | AHB1LPENR | USB1OTGLPEN | svd[25:+1] |
| field_extra_in_svd | AHB1LPENR | USB1OTGULPILPEN | svd[26:+1] |
| field_missing_in_svd | AHB1LPENR | USB_OTG_FSLPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_FS_ULPILPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HSLPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HS_ULPILPEN |  |
| field_missing_in_svd | AHB1RSTR | ARTRST |  |
| field_extra_in_svd | AHB1RSTR | CRCRST | svd[9:+1] |
| field_missing_in_svd | AHB1RSTR | ETHRST |  |
| field_extra_in_svd | AHB1RSTR | USB1OTGRST | svd[25:+1] |
| field_missing_in_svd | AHB1RSTR | USB_OTG_FSRST |  |
| field_missing_in_svd | AHB1RSTR | USB_OTG_HSRST |  |
| field_extra_in_svd | AHB2ENR | AHBSRAM1EN | svd[29:+1] |
| field_extra_in_svd | AHB2ENR | AHBSRAM2EN | svd[30:+1] |
| field_missing_in_svd | AHB2ENR | CORDICEN |  |
| field_missing_in_svd | AHB2ENR | CRYPEN |  |
| field_extra_in_svd | AHB2ENR | CRYPTEN | svd[4:+1] |
| field_missing_in_svd | AHB2ENR | DCMIEN |  |
| field_extra_in_svd | AHB2ENR | DCMI_PSSIEN | svd[0:+1] |
| field_missing_in_svd | AHB2ENR | FMACEN |  |
| field_extra_in_svd | AHB2ENR | HSEMEN | svd[2:+1] |
| field_missing_in_svd | AHB2ENR | SRAM1EN |  |
| field_missing_in_svd | AHB2ENR | SRAM2EN |  |
| field_missing_in_svd | AHB2ENR | SRAM3EN |  |
| field_extra_in_svd | AHB2LPENR | AHBSRAM1LPEN | svd[29:+1] |
| field_extra_in_svd | AHB2LPENR | AHBSRAM2LPEN | svd[30:+1] |
| field_missing_in_svd | AHB2LPENR | BDMA1LPEN |  |
| field_missing_in_svd | AHB2LPENR | CORDICLPEN |  |
| field_missing_in_svd | AHB2LPENR | CRYPLPEN |  |
| field_extra_in_svd | AHB2LPENR | CRYPTLPEN | svd[4:+1] |
| field_missing_in_svd | AHB2LPENR | DCMILPEN |  |
| field_extra_in_svd | AHB2LPENR | DCMI_PSSILPEN | svd[0:+1] |
| field_extra_in_svd | AHB2LPENR | DFSDMDMALPEN | svd[11:+1] |
| field_missing_in_svd | AHB2LPENR | FMACLPEN |  |
| _… 184 more …_ | | | |

### rcc/f4  (stm32f401cb · RCC · stm32f401.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB1ENR | BKPSRAMEN |  |
| field_missing_in_svd | AHB1ENR | CCMDATARAMEN |  |
| field_missing_in_svd | AHB1ENR | DMA2DEN |  |
| field_missing_in_svd | AHB1ENR | ETHEN |  |
| field_missing_in_svd | AHB1ENR | ETHPTPEN |  |
| field_missing_in_svd | AHB1ENR | ETHRXEN |  |
| field_missing_in_svd | AHB1ENR | ETHTXEN |  |
| field_missing_in_svd | AHB1ENR | GPIOFEN |  |
| field_missing_in_svd | AHB1ENR | GPIOGEN |  |
| field_missing_in_svd | AHB1ENR | GPIOIEN |  |
| field_missing_in_svd | AHB1ENR | GPIOJEN |  |
| field_missing_in_svd | AHB1ENR | GPIOKEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_HSEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_HSULPIEN |  |
| field_missing_in_svd | AHB1LPENR | BKPSRAMLPEN |  |
| field_missing_in_svd | AHB1LPENR | DMA2DLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHPTPLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHRXLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHTXLPEN |  |
| field_missing_in_svd | AHB1LPENR | FLASHLPEN |  |
| field_extra_in_svd | AHB1LPENR | FLITFLPEN | svd[15:+1] |
| field_missing_in_svd | AHB1LPENR | GPIOFLPEN |  |
| field_missing_in_svd | AHB1LPENR | GPIOGLPEN |  |
| field_missing_in_svd | AHB1LPENR | GPIOILPEN |  |
| field_missing_in_svd | AHB1LPENR | GPIOJLPEN |  |
| field_missing_in_svd | AHB1LPENR | GPIOKLPEN |  |
| field_missing_in_svd | AHB1LPENR | RNGLPEN |  |
| field_missing_in_svd | AHB1LPENR | SRAM2LPEN |  |
| field_missing_in_svd | AHB1LPENR | SRAM3LPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HSLPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HSULPILPEN |  |
| field_missing_in_svd | AHB1RSTR | DMA2DRST |  |
| field_missing_in_svd | AHB1RSTR | ETHRST |  |
| field_missing_in_svd | AHB1RSTR | GPIOFRST |  |
| field_missing_in_svd | AHB1RSTR | GPIOGRST |  |
| field_missing_in_svd | AHB1RSTR | GPIOIRST |  |
| field_missing_in_svd | AHB1RSTR | GPIOJRST |  |
| field_missing_in_svd | AHB1RSTR | GPIOKRST |  |
| field_missing_in_svd | AHB1RSTR | USB_OTG_HSRST |  |
| field_missing_in_svd | AHB2ENR | CRYPEN |  |
| field_missing_in_svd | AHB2ENR | DCMIEN |  |
| field_missing_in_svd | AHB2ENR | HASHEN |  |
| field_extra_in_svd | AHB2ENR | OTGFSEN | svd[7:+1] |
| field_missing_in_svd | AHB2ENR | RNGEN |  |
| field_missing_in_svd | AHB2ENR | USB_OTG_FSEN |  |
| field_missing_in_svd | AHB2LPENR | CRYPLPEN |  |
| field_missing_in_svd | AHB2LPENR | DCMILPEN |  |
| field_missing_in_svd | AHB2LPENR | FSMCLPEN |  |
| field_missing_in_svd | AHB2LPENR | HASHLPEN |  |
| _… 150 more …_ | | | |

### pwr/wb55  (stm32wb55cc · PWR · stm32wb55.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | C2CR1 | EWKUP802 | svd[15:+1] |
| field_missing_in_svd | C2CR1 | _802EWKUP |  |
| field_missing_in_svd | C2CR3 | EWUP |  |
| field_extra_in_svd | C2CR3 | EWUP1 | svd[0:+1] |
| field_extra_in_svd | C2CR3 | EWUP2 | svd[1:+1] |
| field_extra_in_svd | C2CR3 | EWUP3 | svd[2:+1] |
| field_extra_in_svd | C2CR3 | EWUP4 | svd[3:+1] |
| field_extra_in_svd | C2CR3 | EWUP5 | svd[4:+1] |
| field_missing_in_svd | CR3 | EWUP |  |
| field_extra_in_svd | CR3 | EWUP1 | svd[0:+1] |
| field_extra_in_svd | CR3 | EWUP2 | svd[1:+1] |
| field_extra_in_svd | CR3 | EWUP3 | svd[2:+1] |
| field_extra_in_svd | CR3 | EWUP4 | svd[3:+1] |
| field_extra_in_svd | CR3 | EWUP5 | svd[4:+1] |
| field_extra_in_svd | CR4 | WP2 | svd[1:+1] |
| field_extra_in_svd | CR4 | WP3 | svd[2:+1] |
| field_extra_in_svd | CR4 | WP4 | svd[3:+1] |
| field_extra_in_svd | CR4 | WP5 | svd[4:+1] |
| field_missing_in_svd | CR5 | SDBEN |  |
| field_missing_in_svd | CR5 | SDEB |  |
| field_missing_in_svd | CR5 | SDSC |  |
| field_missing_in_svd | CR5 | SDVOS |  |
| field_missing_in_svd | CR5 | SMPSCFG |  |
| field_extra_in_svd | CR5 | SMPSEN | svd[15:+1] |
| field_extra_in_svd | CR5 | SMPSSC | svd[4:+3] |
| field_extra_in_svd | CR5 | SMPSVOS | svd[0:+4] |
| field_missing_in_svd | PDCRA | PD |  |
| field_extra_in_svd | PDCRA | PD0 | svd[0:+1] |
| field_extra_in_svd | PDCRA | PD1 | svd[1:+1] |
| field_extra_in_svd | PDCRA | PD10 | svd[10:+1] |
| field_extra_in_svd | PDCRA | PD11 | svd[11:+1] |
| field_extra_in_svd | PDCRA | PD12 | svd[12:+1] |
| field_extra_in_svd | PDCRA | PD14 | svd[14:+1] |
| field_extra_in_svd | PDCRA | PD2 | svd[2:+1] |
| field_extra_in_svd | PDCRA | PD3 | svd[3:+1] |
| field_extra_in_svd | PDCRA | PD4 | svd[4:+1] |
| field_extra_in_svd | PDCRA | PD5 | svd[5:+1] |
| field_extra_in_svd | PDCRA | PD6 | svd[6:+1] |
| field_extra_in_svd | PDCRA | PD7 | svd[7:+1] |
| field_extra_in_svd | PDCRA | PD8 | svd[8:+1] |
| field_extra_in_svd | PDCRA | PD9 | svd[9:+1] |
| field_missing_in_svd | PDCRB | PD |  |
| field_extra_in_svd | PDCRB | PD0 | svd[0:+1] |
| field_extra_in_svd | PDCRB | PD1 | svd[1:+1] |
| field_extra_in_svd | PDCRB | PD10 | svd[10:+1] |
| field_extra_in_svd | PDCRB | PD11 | svd[11:+1] |
| field_extra_in_svd | PDCRB | PD12 | svd[12:+1] |
| field_extra_in_svd | PDCRB | PD13 | svd[13:+1] |
| field_extra_in_svd | PDCRB | PD14 | svd[14:+1] |
| field_extra_in_svd | PDCRB | PD15 | svd[15:+1] |
| _… 142 more …_ | | | |

### tamp/u5  (stm32u535cb · TAMP · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | ATCR1 | ATOSEL |  |
| field_extra_in_svd | ATCR1 | ATOSEL1 | svd[8:+2] |
| field_extra_in_svd | ATCR1 | ATOSEL2 | svd[10:+2] |
| field_extra_in_svd | ATCR1 | ATOSEL3 | svd[12:+2] |
| field_extra_in_svd | ATCR1 | ATOSEL4 | svd[14:+2] |
| field_extra_in_svd | ATCR1 | TAMP1AM | svd[0:+1] |
| field_extra_in_svd | ATCR1 | TAMP2AM | svd[1:+1] |
| field_extra_in_svd | ATCR1 | TAMP3AM | svd[2:+1] |
| field_extra_in_svd | ATCR1 | TAMP4AM | svd[3:+1] |
| field_extra_in_svd | ATCR1 | TAMP5AM | svd[4:+1] |
| field_extra_in_svd | ATCR1 | TAMP6AM | svd[5:+1] |
| field_extra_in_svd | ATCR1 | TAMP7AM | svd[6:+1] |
| field_extra_in_svd | ATCR1 | TAMP8AM | svd[7:+1] |
| field_missing_in_svd | ATCR1 | TAMPAM |  |
| field_missing_in_svd | ATCR2 | ATOSEL |  |
| field_extra_in_svd | ATCR2 | ATOSEL1 | svd[8:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL2 | svd[11:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL3 | svd[14:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL4 | svd[17:+2] |
| field_extra_in_svd | ATCR2 | ATOSEL5 | svd[20:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL6 | svd[23:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL7 | svd[26:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL8 | svd[29:+3] |
| register_extra_in_svd | BKP%sR |  | svd offset 0x100 |
| register_missing_in_svd | BKPR |  |  |
| register_extra_in_svd | COUNT1R |  | svd offset 0x40 |
| register_missing_in_svd | COUNTR |  |  |
| field_extra_in_svd | CR1 | ITAMP11E | svd[26:+1] |
| field_extra_in_svd | CR1 | ITAMP12E | svd[27:+1] |
| field_extra_in_svd | CR1 | ITAMP13E | svd[28:+1] |
| field_extra_in_svd | CR1 | ITAMP1E | svd[16:+1] |
| field_extra_in_svd | CR1 | ITAMP2E | svd[17:+1] |
| field_extra_in_svd | CR1 | ITAMP3E | svd[18:+1] |
| field_extra_in_svd | CR1 | ITAMP5E | svd[20:+1] |
| field_extra_in_svd | CR1 | ITAMP6E | svd[21:+1] |
| field_extra_in_svd | CR1 | ITAMP7E | svd[22:+1] |
| field_extra_in_svd | CR1 | ITAMP8E | svd[23:+1] |
| field_extra_in_svd | CR1 | ITAMP9E | svd[24:+1] |
| field_missing_in_svd | CR1 | ITAMPE |  |
| field_extra_in_svd | CR1 | TAMP1E | svd[0:+1] |
| field_extra_in_svd | CR1 | TAMP2E | svd[1:+1] |
| field_extra_in_svd | CR1 | TAMP3E | svd[2:+1] |
| field_extra_in_svd | CR1 | TAMP4E | svd[3:+1] |
| field_extra_in_svd | CR1 | TAMP5E | svd[4:+1] |
| field_extra_in_svd | CR1 | TAMP6E | svd[5:+1] |
| field_extra_in_svd | CR1 | TAMP7E | svd[6:+1] |
| field_extra_in_svd | CR1 | TAMP8E | svd[7:+1] |
| field_missing_in_svd | CR1 | TAMPE |  |
| field_extra_in_svd | CR2 | TAMP1MSK | svd[16:+1] |
| field_extra_in_svd | CR2 | TAMP1NOER | svd[0:+1] |
| _… 139 more …_ | | | |

### rcc/h7rs  (stm32h7r3a8 · RCC · stm32h7r.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | AHB1ENR | ADF1EN | svd[31:+1] |
| field_missing_in_svd | AHB1ENR | ADFEN |  |
| field_extra_in_svd | AHB1ENR | ETH1MACEN | svd[15:+1] |
| field_extra_in_svd | AHB1ENR | ETH1RXEN | svd[17:+1] |
| field_extra_in_svd | AHB1ENR | ETH1TXEN | svd[16:+1] |
| field_missing_in_svd | AHB1ENR | ETHEN |  |
| field_missing_in_svd | AHB1ENR | ETHRXEN |  |
| field_missing_in_svd | AHB1ENR | ETHTXEN |  |
| field_extra_in_svd | AHB1ENR | OTGFSEN | svd[27:+1] |
| field_extra_in_svd | AHB1ENR | OTGHSEN | svd[25:+1] |
| field_missing_in_svd | AHB1ENR | USB_OTG_FSEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_HSEN |  |
| field_extra_in_svd | AHB1LPENR | ADF1LPEN | svd[31:+1] |
| field_missing_in_svd | AHB1LPENR | ADFLPEN |  |
| field_extra_in_svd | AHB1LPENR | ETH1MACLPEN | svd[15:+1] |
| field_extra_in_svd | AHB1LPENR | ETH1RXLPEN | svd[17:+1] |
| field_extra_in_svd | AHB1LPENR | ETH1TXLPEN | svd[16:+1] |
| field_missing_in_svd | AHB1LPENR | ETHLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHRXLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHTXLPEN |  |
| field_extra_in_svd | AHB1LPENR | OTGFSLPEN | svd[27:+1] |
| field_extra_in_svd | AHB1LPENR | OTGHSLPEN | svd[25:+1] |
| field_extra_in_svd | AHB1LPENR | UCPDCTRL | svd[24:+1] |
| field_missing_in_svd | AHB1LPENR | USBPDCTRL |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_FSLPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HSLPEN |  |
| field_extra_in_svd | AHB1RSTR | ADF1RST | svd[31:+1] |
| field_missing_in_svd | AHB1RSTR | ADFRST |  |
| field_extra_in_svd | AHB1RSTR | ETH1MACRST | svd[15:+1] |
| field_missing_in_svd | AHB1RSTR | ETHRST |  |
| field_extra_in_svd | AHB1RSTR | OTGFSRST | svd[27:+1] |
| field_extra_in_svd | AHB1RSTR | OTGHSRST | svd[25:+1] |
| field_missing_in_svd | AHB1RSTR | USB_OTG_FSRST |  |
| field_missing_in_svd | AHB1RSTR | USB_OTG_HSRST |  |
| field_extra_in_svd | AHB5ENR | GPU2DEN | svd[20:+1] |
| field_missing_in_svd | AHB5ENR | GPUEN |  |
| field_missing_in_svd | AHB5ENR | IOMNGREN |  |
| field_extra_in_svd | AHB5ENR | XSPIMEN | svd[14:+1] |
| field_extra_in_svd | AHB5LPENR | FLASHLPEN | svd[2:+1] |
| field_missing_in_svd | AHB5LPENR | FLITFLPEN |  |
| field_extra_in_svd | AHB5LPENR | GPU2DLPEN | svd[20:+1] |
| field_missing_in_svd | AHB5LPENR | GPULPEN |  |
| field_extra_in_svd | AHB5RSTR | GPU2DRST | svd[20:+1] |
| field_missing_in_svd | AHB5RSTR | GPURST |  |
| field_missing_in_svd | AHB5RSTR | IOMNGRRST |  |
| field_extra_in_svd | AHB5RSTR | XSPIMRST | svd[14:+1] |
| register_missing_in_svd | AHBPERCKSELR |  |  |
| field_extra_in_svd | APB1ENR2 | UCPD1EN | svd[27:+1] |
| field_missing_in_svd | APB1ENR2 | UCPDEN |  |
| field_extra_in_svd | APB1LPENR2 | UCPD1LPEN | svd[27:+1] |
| _… 117 more …_ | | | |

### tsc/v3  (stm32l052c6 · TSC · stm32l0x2.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | IOASCR | G%s_IO1 | svd[0:+1] |
| field_extra_in_svd | IOASCR | G%s_IO2 | svd[1:+1] |
| field_extra_in_svd | IOASCR | G%s_IO3 | svd[2:+1] |
| field_extra_in_svd | IOASCR | G%s_IO4 | svd[3:+1] |
| field_missing_in_svd | IOASCR | G1_IO1 |  |
| field_missing_in_svd | IOASCR | G1_IO2 |  |
| field_missing_in_svd | IOASCR | G1_IO3 |  |
| field_missing_in_svd | IOASCR | G1_IO4 |  |
| field_missing_in_svd | IOASCR | G2_IO1 |  |
| field_missing_in_svd | IOASCR | G2_IO2 |  |
| field_missing_in_svd | IOASCR | G2_IO3 |  |
| field_missing_in_svd | IOASCR | G2_IO4 |  |
| field_missing_in_svd | IOASCR | G3_IO1 |  |
| field_missing_in_svd | IOASCR | G3_IO2 |  |
| field_missing_in_svd | IOASCR | G3_IO3 |  |
| field_missing_in_svd | IOASCR | G3_IO4 |  |
| field_missing_in_svd | IOASCR | G4_IO1 |  |
| field_missing_in_svd | IOASCR | G4_IO2 |  |
| field_missing_in_svd | IOASCR | G4_IO3 |  |
| field_missing_in_svd | IOASCR | G4_IO4 |  |
| field_missing_in_svd | IOASCR | G5_IO1 |  |
| field_missing_in_svd | IOASCR | G5_IO2 |  |
| field_missing_in_svd | IOASCR | G5_IO3 |  |
| field_missing_in_svd | IOASCR | G5_IO4 |  |
| field_missing_in_svd | IOASCR | G6_IO1 |  |
| field_missing_in_svd | IOASCR | G6_IO2 |  |
| field_missing_in_svd | IOASCR | G6_IO3 |  |
| field_missing_in_svd | IOASCR | G6_IO4 |  |
| field_missing_in_svd | IOASCR | G7_IO1 |  |
| field_missing_in_svd | IOASCR | G7_IO2 |  |
| field_missing_in_svd | IOASCR | G7_IO3 |  |
| field_missing_in_svd | IOASCR | G7_IO4 |  |
| field_missing_in_svd | IOASCR | G8_IO1 |  |
| field_missing_in_svd | IOASCR | G8_IO2 |  |
| field_missing_in_svd | IOASCR | G8_IO3 |  |
| field_missing_in_svd | IOASCR | G8_IO4 |  |
| field_extra_in_svd | IOCCR | G%s_IO1 | svd[0:+1] |
| field_extra_in_svd | IOCCR | G%s_IO2 | svd[1:+1] |
| field_extra_in_svd | IOCCR | G%s_IO3 | svd[2:+1] |
| field_extra_in_svd | IOCCR | G%s_IO4 | svd[3:+1] |
| field_missing_in_svd | IOCCR | G1_IO1 |  |
| field_missing_in_svd | IOCCR | G1_IO2 |  |
| field_missing_in_svd | IOCCR | G1_IO3 |  |
| field_missing_in_svd | IOCCR | G1_IO4 |  |
| field_missing_in_svd | IOCCR | G2_IO1 |  |
| field_missing_in_svd | IOCCR | G2_IO2 |  |
| field_missing_in_svd | IOCCR | G2_IO3 |  |
| field_missing_in_svd | IOCCR | G2_IO4 |  |
| field_missing_in_svd | IOCCR | G3_IO1 |  |
| field_missing_in_svd | IOCCR | G3_IO2 |  |
| _… 114 more …_ | | | |

### tamp/wba  (stm32wba50ke · TAMP · stm32wba50.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | ATCR1 | ATOSEL |  |
| field_extra_in_svd | ATCR1 | ATOSEL1 | svd[8:+2] |
| field_extra_in_svd | ATCR1 | ATOSEL2 | svd[10:+2] |
| field_extra_in_svd | ATCR1 | ATOSEL3 | svd[12:+2] |
| field_extra_in_svd | ATCR1 | ATOSEL4 | svd[14:+2] |
| field_extra_in_svd | ATCR1 | TAMP1AM | svd[0:+1] |
| field_extra_in_svd | ATCR1 | TAMP2AM | svd[1:+1] |
| field_extra_in_svd | ATCR1 | TAMP3AM | svd[2:+1] |
| field_extra_in_svd | ATCR1 | TAMP4AM | svd[3:+1] |
| field_extra_in_svd | ATCR1 | TAMP5AM | svd[4:+1] |
| field_extra_in_svd | ATCR1 | TAMP6AM | svd[5:+1] |
| field_missing_in_svd | ATCR1 | TAMPAM |  |
| field_missing_in_svd | ATCR2 | ATOSEL |  |
| field_extra_in_svd | ATCR2 | ATOSEL1 | svd[8:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL2 | svd[11:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL3 | svd[14:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL4 | svd[17:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL5 | svd[20:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL6 | svd[23:+3] |
| register_extra_in_svd | BKP%sR |  | svd offset 0x100 |
| register_missing_in_svd | BKPR |  |  |
| register_extra_in_svd | COUNT1R |  | svd offset 0x40 |
| register_missing_in_svd | COUNTR |  |  |
| field_extra_in_svd | CR1 | ITAMP11E | svd[26:+1] |
| field_extra_in_svd | CR1 | ITAMP12E | svd[27:+1] |
| field_extra_in_svd | CR1 | ITAMP13E | svd[28:+1] |
| field_extra_in_svd | CR1 | ITAMP3E | svd[18:+1] |
| field_extra_in_svd | CR1 | ITAMP5E | svd[20:+1] |
| field_extra_in_svd | CR1 | ITAMP6E | svd[21:+1] |
| field_extra_in_svd | CR1 | ITAMP7E | svd[22:+1] |
| field_extra_in_svd | CR1 | ITAMP8E | svd[23:+1] |
| field_extra_in_svd | CR1 | ITAMP9E | svd[24:+1] |
| field_missing_in_svd | CR1 | ITAMPE |  |
| field_extra_in_svd | CR1 | TAMP1E | svd[0:+1] |
| field_extra_in_svd | CR1 | TAMP2E | svd[1:+1] |
| field_extra_in_svd | CR1 | TAMP3E | svd[2:+1] |
| field_extra_in_svd | CR1 | TAMP4E | svd[3:+1] |
| field_extra_in_svd | CR1 | TAMP5E | svd[4:+1] |
| field_extra_in_svd | CR1 | TAMP6E | svd[5:+1] |
| field_missing_in_svd | CR1 | TAMPE |  |
| field_extra_in_svd | CR2 | TAMP1MSK | svd[16:+1] |
| field_extra_in_svd | CR2 | TAMP1NOER | svd[0:+1] |
| field_extra_in_svd | CR2 | TAMP1TRG | svd[24:+1] |
| field_extra_in_svd | CR2 | TAMP2MSK | svd[17:+1] |
| field_extra_in_svd | CR2 | TAMP2NOER | svd[1:+1] |
| field_extra_in_svd | CR2 | TAMP2TRG | svd[25:+1] |
| field_extra_in_svd | CR2 | TAMP3MSK | svd[18:+1] |
| field_extra_in_svd | CR2 | TAMP3NOER | svd[2:+1] |
| field_extra_in_svd | CR2 | TAMP3TRG | svd[26:+1] |
| field_extra_in_svd | CR2 | TAMP4NOER | svd[3:+1] |
| _… 105 more …_ | | | |

### tsc/v2  (stm32wb55rc · TSC · stm32wb55.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | IOASCR | G%s_IO1 | svd[0:+1] |
| field_extra_in_svd | IOASCR | G%s_IO2 | svd[1:+1] |
| field_extra_in_svd | IOASCR | G%s_IO3 | svd[2:+1] |
| field_extra_in_svd | IOASCR | G%s_IO4 | svd[3:+1] |
| field_missing_in_svd | IOASCR | G1_IO1 |  |
| field_missing_in_svd | IOASCR | G1_IO2 |  |
| field_missing_in_svd | IOASCR | G1_IO3 |  |
| field_missing_in_svd | IOASCR | G1_IO4 |  |
| field_missing_in_svd | IOASCR | G2_IO1 |  |
| field_missing_in_svd | IOASCR | G2_IO2 |  |
| field_missing_in_svd | IOASCR | G2_IO3 |  |
| field_missing_in_svd | IOASCR | G2_IO4 |  |
| field_missing_in_svd | IOASCR | G3_IO1 |  |
| field_missing_in_svd | IOASCR | G3_IO2 |  |
| field_missing_in_svd | IOASCR | G3_IO3 |  |
| field_missing_in_svd | IOASCR | G3_IO4 |  |
| field_missing_in_svd | IOASCR | G4_IO1 |  |
| field_missing_in_svd | IOASCR | G4_IO2 |  |
| field_missing_in_svd | IOASCR | G4_IO3 |  |
| field_missing_in_svd | IOASCR | G4_IO4 |  |
| field_missing_in_svd | IOASCR | G5_IO1 |  |
| field_missing_in_svd | IOASCR | G5_IO2 |  |
| field_missing_in_svd | IOASCR | G5_IO3 |  |
| field_missing_in_svd | IOASCR | G5_IO4 |  |
| field_missing_in_svd | IOASCR | G6_IO1 |  |
| field_missing_in_svd | IOASCR | G6_IO2 |  |
| field_missing_in_svd | IOASCR | G6_IO3 |  |
| field_missing_in_svd | IOASCR | G6_IO4 |  |
| field_missing_in_svd | IOASCR | G7_IO1 |  |
| field_missing_in_svd | IOASCR | G7_IO2 |  |
| field_missing_in_svd | IOASCR | G7_IO3 |  |
| field_missing_in_svd | IOASCR | G7_IO4 |  |
| field_extra_in_svd | IOCCR | G%s_IO1 | svd[0:+1] |
| field_extra_in_svd | IOCCR | G%s_IO2 | svd[1:+1] |
| field_extra_in_svd | IOCCR | G%s_IO3 | svd[2:+1] |
| field_extra_in_svd | IOCCR | G%s_IO4 | svd[3:+1] |
| field_missing_in_svd | IOCCR | G1_IO1 |  |
| field_missing_in_svd | IOCCR | G1_IO2 |  |
| field_missing_in_svd | IOCCR | G1_IO3 |  |
| field_missing_in_svd | IOCCR | G1_IO4 |  |
| field_missing_in_svd | IOCCR | G2_IO1 |  |
| field_missing_in_svd | IOCCR | G2_IO2 |  |
| field_missing_in_svd | IOCCR | G2_IO3 |  |
| field_missing_in_svd | IOCCR | G2_IO4 |  |
| field_missing_in_svd | IOCCR | G3_IO1 |  |
| field_missing_in_svd | IOCCR | G3_IO2 |  |
| field_missing_in_svd | IOCCR | G3_IO3 |  |
| field_missing_in_svd | IOCCR | G3_IO4 |  |
| field_missing_in_svd | IOCCR | G4_IO1 |  |
| field_missing_in_svd | IOCCR | G4_IO2 |  |
| _… 96 more …_ | | | |

### tamp/l5  (stm32l552cc · TAMP · stm32l552.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | ATCR1 | ATOSEL |  |
| field_extra_in_svd | ATCR1 | ATOSEL1 | svd[8:+2] |
| field_extra_in_svd | ATCR1 | ATOSEL2 | svd[10:+2] |
| field_extra_in_svd | ATCR1 | ATOSEL3 | svd[12:+2] |
| field_extra_in_svd | ATCR1 | ATOSEL4 | svd[14:+2] |
| field_extra_in_svd | ATCR1 | TAMP1AM | svd[0:+1] |
| field_extra_in_svd | ATCR1 | TAMP2AM | svd[1:+1] |
| field_extra_in_svd | ATCR1 | TAMP3AM | svd[2:+1] |
| field_extra_in_svd | ATCR1 | TAMP4AM | svd[3:+1] |
| field_extra_in_svd | ATCR1 | TAMP5AM | svd[4:+1] |
| field_extra_in_svd | ATCR1 | TAMP6AM | svd[5:+1] |
| field_extra_in_svd | ATCR1 | TAMP7AM | svd[6:+1] |
| field_extra_in_svd | ATCR1 | TAMP8AM | svd[7:+1] |
| field_missing_in_svd | ATCR1 | TAMPAM |  |
| field_missing_in_svd | ATCR2 | ATOSEL |  |
| field_extra_in_svd | ATCR2 | ATOSEL1 | svd[8:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL2 | svd[11:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL3 | svd[14:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL4 | svd[17:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL5 | svd[20:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL6 | svd[23:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL7 | svd[26:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL8 | svd[29:+3] |
| register_extra_in_svd | BKP%sR |  | svd offset 0x100 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR1 | ITAMP1E | svd[16:+1] |
| field_extra_in_svd | CR1 | ITAMP2E | svd[17:+1] |
| field_extra_in_svd | CR1 | ITAMP3E | svd[18:+1] |
| field_extra_in_svd | CR1 | ITAMP5E | svd[20:+1] |
| field_extra_in_svd | CR1 | ITAMP8E | svd[23:+1] |
| field_missing_in_svd | CR1 | ITAMPE |  |
| field_extra_in_svd | CR1 | TAMP1E | svd[0:+1] |
| field_extra_in_svd | CR1 | TAMP2E | svd[1:+1] |
| field_extra_in_svd | CR1 | TAMP3E | svd[2:+1] |
| field_extra_in_svd | CR1 | TAMP4E | svd[3:+1] |
| field_extra_in_svd | CR1 | TAMP5E | svd[4:+1] |
| field_extra_in_svd | CR1 | TAMP6E | svd[5:+1] |
| field_extra_in_svd | CR1 | TAMP7E | svd[6:+1] |
| field_extra_in_svd | CR1 | TAMP8E | svd[7:+1] |
| field_missing_in_svd | CR1 | TAMPE |  |
| field_extra_in_svd | CR2 | TAMP1MSK | svd[16:+1] |
| field_extra_in_svd | CR2 | TAMP1NOER | svd[0:+1] |
| field_extra_in_svd | CR2 | TAMP1TRG | svd[24:+1] |
| field_extra_in_svd | CR2 | TAMP2MSK | svd[17:+1] |
| field_extra_in_svd | CR2 | TAMP2NOER | svd[1:+1] |
| field_extra_in_svd | CR2 | TAMP2TRG | svd[25:+1] |
| field_extra_in_svd | CR2 | TAMP3MSK | svd[18:+1] |
| field_extra_in_svd | CR2 | TAMP3NOER | svd[2:+1] |
| field_extra_in_svd | CR2 | TAMP3TRG | svd[26:+1] |
| field_extra_in_svd | CR2 | TAMP4NOER | svd[3:+1] |
| _… 93 more …_ | | | |

### exti/v1  (stm32f030c6 · EXTI · stm32f0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | EMR | LINE |  |
| field_extra_in_svd | EMR | MR0 | svd[0:+1] |
| field_extra_in_svd | EMR | MR1 | svd[1:+1] |
| field_extra_in_svd | EMR | MR10 | svd[10:+1] |
| field_extra_in_svd | EMR | MR11 | svd[11:+1] |
| field_extra_in_svd | EMR | MR12 | svd[12:+1] |
| field_extra_in_svd | EMR | MR13 | svd[13:+1] |
| field_extra_in_svd | EMR | MR14 | svd[14:+1] |
| field_extra_in_svd | EMR | MR15 | svd[15:+1] |
| field_extra_in_svd | EMR | MR16 | svd[16:+1] |
| field_extra_in_svd | EMR | MR17 | svd[17:+1] |
| field_extra_in_svd | EMR | MR18 | svd[18:+1] |
| field_extra_in_svd | EMR | MR19 | svd[19:+1] |
| field_extra_in_svd | EMR | MR2 | svd[2:+1] |
| field_extra_in_svd | EMR | MR20 | svd[20:+1] |
| field_extra_in_svd | EMR | MR21 | svd[21:+1] |
| field_extra_in_svd | EMR | MR22 | svd[22:+1] |
| field_extra_in_svd | EMR | MR23 | svd[23:+1] |
| field_extra_in_svd | EMR | MR24 | svd[24:+1] |
| field_extra_in_svd | EMR | MR25 | svd[25:+1] |
| field_extra_in_svd | EMR | MR26 | svd[26:+1] |
| field_extra_in_svd | EMR | MR27 | svd[27:+1] |
| field_extra_in_svd | EMR | MR3 | svd[3:+1] |
| field_extra_in_svd | EMR | MR4 | svd[4:+1] |
| field_extra_in_svd | EMR | MR5 | svd[5:+1] |
| field_extra_in_svd | EMR | MR6 | svd[6:+1] |
| field_extra_in_svd | EMR | MR7 | svd[7:+1] |
| field_extra_in_svd | EMR | MR8 | svd[8:+1] |
| field_extra_in_svd | EMR | MR9 | svd[9:+1] |
| field_missing_in_svd | FTSR | LINE |  |
| field_extra_in_svd | FTSR | TR0 | svd[0:+1] |
| field_extra_in_svd | FTSR | TR1 | svd[1:+1] |
| field_extra_in_svd | FTSR | TR10 | svd[10:+1] |
| field_extra_in_svd | FTSR | TR11 | svd[11:+1] |
| field_extra_in_svd | FTSR | TR12 | svd[12:+1] |
| field_extra_in_svd | FTSR | TR13 | svd[13:+1] |
| field_extra_in_svd | FTSR | TR14 | svd[14:+1] |
| field_extra_in_svd | FTSR | TR15 | svd[15:+1] |
| field_extra_in_svd | FTSR | TR16 | svd[16:+1] |
| field_extra_in_svd | FTSR | TR17 | svd[17:+1] |
| field_extra_in_svd | FTSR | TR19 | svd[19:+1] |
| field_extra_in_svd | FTSR | TR2 | svd[2:+1] |
| field_extra_in_svd | FTSR | TR3 | svd[3:+1] |
| field_extra_in_svd | FTSR | TR4 | svd[4:+1] |
| field_extra_in_svd | FTSR | TR5 | svd[5:+1] |
| field_extra_in_svd | FTSR | TR6 | svd[6:+1] |
| field_extra_in_svd | FTSR | TR7 | svd[7:+1] |
| field_extra_in_svd | FTSR | TR8 | svd[8:+1] |
| field_extra_in_svd | FTSR | TR9 | svd[9:+1] |
| field_missing_in_svd | IMR | LINE |  |
| _… 88 more …_ | | | |

### tsc/v1  (stm32f042c4 · TSC · stm32f0x2.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | IOASCR | G%s_IO1 | svd[0:+1] |
| field_extra_in_svd | IOASCR | G%s_IO2 | svd[1:+1] |
| field_extra_in_svd | IOASCR | G%s_IO3 | svd[2:+1] |
| field_extra_in_svd | IOASCR | G%s_IO4 | svd[3:+1] |
| field_missing_in_svd | IOASCR | G1_IO1 |  |
| field_missing_in_svd | IOASCR | G1_IO2 |  |
| field_missing_in_svd | IOASCR | G1_IO3 |  |
| field_missing_in_svd | IOASCR | G1_IO4 |  |
| field_missing_in_svd | IOASCR | G2_IO1 |  |
| field_missing_in_svd | IOASCR | G2_IO2 |  |
| field_missing_in_svd | IOASCR | G2_IO3 |  |
| field_missing_in_svd | IOASCR | G2_IO4 |  |
| field_missing_in_svd | IOASCR | G3_IO1 |  |
| field_missing_in_svd | IOASCR | G3_IO2 |  |
| field_missing_in_svd | IOASCR | G3_IO3 |  |
| field_missing_in_svd | IOASCR | G3_IO4 |  |
| field_missing_in_svd | IOASCR | G4_IO1 |  |
| field_missing_in_svd | IOASCR | G4_IO2 |  |
| field_missing_in_svd | IOASCR | G4_IO3 |  |
| field_missing_in_svd | IOASCR | G4_IO4 |  |
| field_missing_in_svd | IOASCR | G5_IO1 |  |
| field_missing_in_svd | IOASCR | G5_IO2 |  |
| field_missing_in_svd | IOASCR | G5_IO3 |  |
| field_missing_in_svd | IOASCR | G5_IO4 |  |
| field_missing_in_svd | IOASCR | G6_IO1 |  |
| field_missing_in_svd | IOASCR | G6_IO2 |  |
| field_missing_in_svd | IOASCR | G6_IO3 |  |
| field_missing_in_svd | IOASCR | G6_IO4 |  |
| field_extra_in_svd | IOCCR | G%s_IO1 | svd[0:+1] |
| field_extra_in_svd | IOCCR | G%s_IO2 | svd[1:+1] |
| field_extra_in_svd | IOCCR | G%s_IO3 | svd[2:+1] |
| field_extra_in_svd | IOCCR | G%s_IO4 | svd[3:+1] |
| field_missing_in_svd | IOCCR | G1_IO1 |  |
| field_missing_in_svd | IOCCR | G1_IO2 |  |
| field_missing_in_svd | IOCCR | G1_IO3 |  |
| field_missing_in_svd | IOCCR | G1_IO4 |  |
| field_missing_in_svd | IOCCR | G2_IO1 |  |
| field_missing_in_svd | IOCCR | G2_IO2 |  |
| field_missing_in_svd | IOCCR | G2_IO3 |  |
| field_missing_in_svd | IOCCR | G2_IO4 |  |
| field_missing_in_svd | IOCCR | G3_IO1 |  |
| field_missing_in_svd | IOCCR | G3_IO2 |  |
| field_missing_in_svd | IOCCR | G3_IO3 |  |
| field_missing_in_svd | IOCCR | G3_IO4 |  |
| field_missing_in_svd | IOCCR | G4_IO1 |  |
| field_missing_in_svd | IOCCR | G4_IO2 |  |
| field_missing_in_svd | IOCCR | G4_IO3 |  |
| field_missing_in_svd | IOCCR | G4_IO4 |  |
| field_missing_in_svd | IOCCR | G5_IO1 |  |
| field_missing_in_svd | IOCCR | G5_IO2 |  |
| _… 82 more …_ | | | |

### rcc/l4  (stm32l412c8 · RCC · stm32l412.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB1ENR | DMA2DEN |  |
| field_missing_in_svd | AHB1RSTR | DMA2DRST |  |
| field_missing_in_svd | AHB1SMENR | DMA2DSMEN |  |
| field_missing_in_svd | AHB2ENR | AESEN |  |
| field_missing_in_svd | AHB2ENR | DCMIEN |  |
| field_missing_in_svd | AHB2ENR | GPIODEN |  |
| field_missing_in_svd | AHB2ENR | GPIOEEN |  |
| field_missing_in_svd | AHB2ENR | GPIOFEN |  |
| field_missing_in_svd | AHB2ENR | GPIOGEN |  |
| field_missing_in_svd | AHB2ENR | GPIOIEN |  |
| field_missing_in_svd | AHB2ENR | HASHEN |  |
| field_missing_in_svd | AHB2ENR | USB_OTG_FSEN |  |
| field_missing_in_svd | AHB2RSTR | AESRST |  |
| field_missing_in_svd | AHB2RSTR | DCMIRST |  |
| field_missing_in_svd | AHB2RSTR | GPIODRST |  |
| field_missing_in_svd | AHB2RSTR | GPIOERST |  |
| field_missing_in_svd | AHB2RSTR | GPIOFRST |  |
| field_missing_in_svd | AHB2RSTR | GPIOGRST |  |
| field_missing_in_svd | AHB2RSTR | GPIOIRST |  |
| field_missing_in_svd | AHB2RSTR | HASHRST |  |
| field_missing_in_svd | AHB2RSTR | USB_OTG_FSRST |  |
| field_missing_in_svd | AHB2SMENR | AESSMEN |  |
| field_missing_in_svd | AHB2SMENR | DCMISMEN |  |
| field_missing_in_svd | AHB2SMENR | GPIOESMEN |  |
| field_missing_in_svd | AHB2SMENR | GPIOFSMEN |  |
| field_missing_in_svd | AHB2SMENR | GPIOGSMEN |  |
| field_missing_in_svd | AHB2SMENR | GPIOISMEN |  |
| field_missing_in_svd | AHB2SMENR | HASHSMEN |  |
| field_missing_in_svd | AHB2SMENR | USB_OTG_FSSMEN |  |
| field_missing_in_svd | AHB3ENR | FMCEN |  |
| field_extra_in_svd | AHB3ENR | QSPIEN | svd[8:+1] |
| field_missing_in_svd | AHB3ENR | QUADSPIEN |  |
| field_missing_in_svd | AHB3RSTR | FMCRST |  |
| field_extra_in_svd | AHB3RSTR | QSPIRST | svd[8:+1] |
| field_missing_in_svd | AHB3RSTR | QUADSPIRST |  |
| field_missing_in_svd | AHB3SMENR | FMCSMEN |  |
| field_extra_in_svd | AHB3SMENR | QSPISMEN | svd[8:+1] |
| field_missing_in_svd | AHB3SMENR | QUADSPISMEN |  |
| field_missing_in_svd | APB1ENR1 | CAN1EN |  |
| field_missing_in_svd | APB1ENR1 | CAN2EN |  |
| field_missing_in_svd | APB1ENR1 | DAC1EN |  |
| field_missing_in_svd | APB1ENR1 | LCDEN |  |
| field_missing_in_svd | APB1ENR1 | SPI3EN |  |
| field_missing_in_svd | APB1ENR1 | TIM3EN |  |
| field_missing_in_svd | APB1ENR1 | TIM4EN |  |
| field_missing_in_svd | APB1ENR1 | TIM5EN |  |
| field_missing_in_svd | APB1ENR1 | TIM7EN |  |
| field_missing_in_svd | APB1ENR1 | UART4EN |  |
| field_missing_in_svd | APB1ENR1 | UART5EN |  |
| field_missing_in_svd | APB1ENR1 | USBEN |  |
| _… 80 more …_ | | | |

### can/fdcan_h7  (stm32h723ve · FDCAN1 · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | IE | RF0FE | svd[2:+1] |
| field_extra_in_svd | IE | RF0LE | svd[3:+1] |
| field_extra_in_svd | IE | RF0NE | svd[0:+1] |
| field_extra_in_svd | IE | RF0WE | svd[1:+1] |
| field_extra_in_svd | IE | RF1FE | svd[6:+1] |
| field_extra_in_svd | IE | RF1LE | svd[7:+1] |
| field_extra_in_svd | IE | RF1NE | svd[4:+1] |
| field_extra_in_svd | IE | RF1WE | svd[5:+1] |
| field_missing_in_svd | IE | RFFE |  |
| field_missing_in_svd | IE | RFLE |  |
| field_missing_in_svd | IE | RFNE |  |
| field_missing_in_svd | IE | RFWE |  |
| field_extra_in_svd | ILS | RF0FL | svd[2:+1] |
| field_extra_in_svd | ILS | RF0LL | svd[3:+1] |
| field_extra_in_svd | ILS | RF0NL | svd[0:+1] |
| field_extra_in_svd | ILS | RF0WL | svd[1:+1] |
| field_extra_in_svd | ILS | RF1FL | svd[6:+1] |
| field_extra_in_svd | ILS | RF1LL | svd[7:+1] |
| field_extra_in_svd | ILS | RF1NL | svd[4:+1] |
| field_extra_in_svd | ILS | RF1WL | svd[5:+1] |
| field_missing_in_svd | ILS | RFFL |  |
| field_missing_in_svd | ILS | RFLL |  |
| field_missing_in_svd | ILS | RFNL |  |
| field_missing_in_svd | ILS | RFWL |  |
| field_extra_in_svd | IR | RF0F | svd[2:+1] |
| field_extra_in_svd | IR | RF0L | svd[3:+1] |
| field_extra_in_svd | IR | RF0N | svd[0:+1] |
| field_extra_in_svd | IR | RF0W | svd[1:+1] |
| field_extra_in_svd | IR | RF1F | svd[6:+1] |
| field_extra_in_svd | IR | RF1L | svd[7:+1] |
| field_extra_in_svd | IR | RF1N | svd[4:+1] |
| field_extra_in_svd | IR | RF1W | svd[5:+1] |
| field_missing_in_svd | IR | RFF |  |
| field_missing_in_svd | IR | RFL |  |
| field_missing_in_svd | IR | RFN |  |
| field_missing_in_svd | IR | RFW |  |
| field_missing_in_svd | NDAT1 | ND |  |
| field_extra_in_svd | NDAT1 | ND0 | svd[0:+1] |
| field_extra_in_svd | NDAT1 | ND1 | svd[1:+1] |
| field_extra_in_svd | NDAT1 | ND10 | svd[10:+1] |
| field_extra_in_svd | NDAT1 | ND11 | svd[11:+1] |
| field_extra_in_svd | NDAT1 | ND12 | svd[12:+1] |
| field_extra_in_svd | NDAT1 | ND13 | svd[13:+1] |
| field_extra_in_svd | NDAT1 | ND14 | svd[14:+1] |
| field_extra_in_svd | NDAT1 | ND15 | svd[15:+1] |
| field_extra_in_svd | NDAT1 | ND16 | svd[16:+1] |
| field_extra_in_svd | NDAT1 | ND17 | svd[17:+1] |
| field_extra_in_svd | NDAT1 | ND18 | svd[18:+1] |
| field_extra_in_svd | NDAT1 | ND19 | svd[19:+1] |
| field_extra_in_svd | NDAT1 | ND2 | svd[2:+1] |
| _… 73 more …_ | | | |

### rcc/u5  (stm32u535cb · RCC · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB2ENR1 | DCMIEN |  |
| field_extra_in_svd | AHB2ENR1 | DCMI_PSSIEN | svd[12:+1] |
| field_extra_in_svd | AHB2ENR1 | OTGEN | svd[14:+1] |
| field_extra_in_svd | AHB2ENR1 | OTGHSPHYEN | svd[15:+1] |
| field_missing_in_svd | AHB2ENR1 | USB_OTG_FSEN |  |
| field_missing_in_svd | AHB2ENR1 | USB_OTG_HSEN |  |
| field_missing_in_svd | AHB2ENR1 | USB_OTG_HS_PHYEN |  |
| field_missing_in_svd | AHB2RSTR1 | DCMIRST |  |
| field_extra_in_svd | AHB2RSTR1 | DCMI_PSSIRST | svd[12:+1] |
| field_extra_in_svd | AHB2RSTR1 | OTGRST | svd[14:+1] |
| field_missing_in_svd | AHB2RSTR1 | USB_OTG_FSRST |  |
| field_missing_in_svd | AHB2RSTR1 | USB_OTG_HSRST |  |
| field_missing_in_svd | AHB2SMENR1 | DCMISMEN |  |
| field_extra_in_svd | AHB2SMENR1 | DCMI_PSSISMEN | svd[12:+1] |
| field_extra_in_svd | AHB2SMENR1 | OTGHSPHYSMEN | svd[15:+1] |
| field_extra_in_svd | AHB2SMENR1 | OTGSMEN | svd[14:+1] |
| field_missing_in_svd | AHB2SMENR1 | USB_OTG_FSSMEN |  |
| field_missing_in_svd | AHB2SMENR1 | USB_OTG_HSSMEN |  |
| field_missing_in_svd | AHB2SMENR1 | USB_OTG_HS_PHYSMEN |  |
| field_extra_in_svd | CICR | PLL1RDYC | svd[6:+1] |
| field_extra_in_svd | CICR | PLL2RDYC | svd[7:+1] |
| field_extra_in_svd | CICR | PLL3RDYC | svd[8:+1] |
| field_missing_in_svd | CICR | PLLRDYC |  |
| field_extra_in_svd | CIER | PLL1RDYIE | svd[6:+1] |
| field_extra_in_svd | CIER | PLL2RDYIE | svd[7:+1] |
| field_extra_in_svd | CIER | PLL3RDYIE | svd[8:+1] |
| field_missing_in_svd | CIER | PLLRDYIE |  |
| field_extra_in_svd | CIFR | PLL1RDYF | svd[6:+1] |
| field_extra_in_svd | CIFR | PLL2RDYF | svd[7:+1] |
| field_extra_in_svd | CIFR | PLL3RDYF | svd[8:+1] |
| field_missing_in_svd | CIFR | PLLRDYF |  |
| field_extra_in_svd | CR | PLL1ON | svd[24:+1] |
| field_extra_in_svd | CR | PLL1RDY | svd[25:+1] |
| field_extra_in_svd | CR | PLL2ON | svd[26:+1] |
| field_extra_in_svd | CR | PLL2RDY | svd[27:+1] |
| field_extra_in_svd | CR | PLL3ON | svd[28:+1] |
| field_extra_in_svd | CR | PLL3RDY | svd[29:+1] |
| field_missing_in_svd | CR | PLLON |  |
| field_missing_in_svd | CR | PLLRDY |  |
| field_extra_in_svd | PLL1CFGR | PLL1FRACEN | svd[4:+1] |
| field_extra_in_svd | PLL1CFGR | PLL1M | svd[8:+4] |
| field_extra_in_svd | PLL1CFGR | PLL1MBOOST | svd[12:+4] |
| field_extra_in_svd | PLL1CFGR | PLL1PEN | svd[16:+1] |
| field_extra_in_svd | PLL1CFGR | PLL1QEN | svd[17:+1] |
| field_extra_in_svd | PLL1CFGR | PLL1REN | svd[18:+1] |
| field_extra_in_svd | PLL1CFGR | PLL1RGE | svd[2:+2] |
| field_extra_in_svd | PLL1CFGR | PLL1SRC | svd[0:+2] |
| field_missing_in_svd | PLL1CFGR | PLLFRACEN |  |
| field_missing_in_svd | PLL1CFGR | PLLM |  |
| field_missing_in_svd | PLL1CFGR | PLLMBOOST |  |
| _… 67 more …_ | | | |

### timer/v2  (stm32h503cb · TIM1 · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | AF1 | BKCMP1E | svd[1:+1] |
| field_extra_in_svd | AF1 | BKCMP1P | svd[10:+1] |
| field_extra_in_svd | AF1 | BKCMP2E | svd[2:+1] |
| field_extra_in_svd | AF1 | BKCMP2P | svd[11:+1] |
| field_extra_in_svd | AF1 | BKCMP3E | svd[3:+1] |
| field_extra_in_svd | AF1 | BKCMP3P | svd[12:+1] |
| field_extra_in_svd | AF1 | BKCMP4E | svd[4:+1] |
| field_extra_in_svd | AF1 | BKCMP4P | svd[13:+1] |
| field_extra_in_svd | AF1 | BKCMP5E | svd[5:+1] |
| field_extra_in_svd | AF1 | BKCMP6E | svd[6:+1] |
| field_extra_in_svd | AF1 | BKCMP7E | svd[7:+1] |
| field_extra_in_svd | AF1 | BKCMP8E | svd[8:+1] |
| field_extra_in_svd | AF1 | BKINE | svd[0:+1] |
| field_extra_in_svd | AF1 | BKINP | svd[9:+1] |
| field_extra_in_svd | AF2 | BK2CMP1E | svd[1:+1] |
| field_extra_in_svd | AF2 | BK2CMP1P | svd[10:+1] |
| field_extra_in_svd | AF2 | BK2CMP2E | svd[2:+1] |
| field_extra_in_svd | AF2 | BK2CMP2P | svd[11:+1] |
| field_extra_in_svd | AF2 | BK2CMP3E | svd[3:+1] |
| field_extra_in_svd | AF2 | BK2CMP3P | svd[12:+1] |
| field_extra_in_svd | AF2 | BK2CMP4E | svd[4:+1] |
| field_extra_in_svd | AF2 | BK2CMP4P | svd[13:+1] |
| field_extra_in_svd | AF2 | BK2CMP5E | svd[5:+1] |
| field_extra_in_svd | AF2 | BK2CMP6E | svd[6:+1] |
| field_extra_in_svd | AF2 | BK2CMP7E | svd[7:+1] |
| field_extra_in_svd | AF2 | BK2CMP8E | svd[8:+1] |
| field_extra_in_svd | AF2 | BK2INE | svd[0:+1] |
| field_extra_in_svd | AF2 | BK2INP | svd[9:+1] |
| field_extra_in_svd | ARR | ARR | svd[0:+20] |
| register_missing_in_svd | ARR_DITHER |  |  |
| field_extra_in_svd | BDTR | BK2BID | svd[29:+1] |
| field_extra_in_svd | BDTR | BK2DSRM | svd[27:+1] |
| field_extra_in_svd | BDTR | BK2E | svd[24:+1] |
| field_extra_in_svd | BDTR | BK2F | svd[20:+4] |
| field_extra_in_svd | BDTR | BK2P | svd[25:+1] |
| field_extra_in_svd | CCER | CC%sE | svd[0:+1] |
| field_extra_in_svd | CCER | CC%sNE | svd[2:+1] |
| field_extra_in_svd | CCER | CC%sNP | svd[3:+1] |
| field_extra_in_svd | CCER | CC%sP | svd[1:+1] |
| field_missing_in_svd | CCER | CCE |  |
| field_missing_in_svd | CCER | CCNP |  |
| field_missing_in_svd | CCER | CCP |  |
| register_extra_in_svd | CCMR1_Input |  | svd offset 0x18 |
| register_extra_in_svd | CCMR1_Output |  | svd offset 0x18 |
| register_extra_in_svd | CCMR2_Input |  | svd offset 0x1C |
| register_extra_in_svd | CCMR2_Output |  | svd offset 0x1C |
| register_missing_in_svd | CCMR3 |  |  |
| register_extra_in_svd | CCMR3_Output |  | svd offset 0x50 |
| register_missing_in_svd | CCMR_Input |  |  |
| register_missing_in_svd | CCMR_Output |  |  |
| _… 65 more …_ | | | |

### rcc/f7  (stm32f730i8 · RCC · stm32f730.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB1ENR | DMA2DEN |  |
| field_missing_in_svd | AHB1ENR | ETHEN |  |
| field_missing_in_svd | AHB1ENR | ETHPTPEN |  |
| field_missing_in_svd | AHB1ENR | ETHRXEN |  |
| field_missing_in_svd | AHB1ENR | ETHTXEN |  |
| field_missing_in_svd | AHB1ENR | GPIOJEN |  |
| field_missing_in_svd | AHB1ENR | GPIOKEN |  |
| field_extra_in_svd | AHB1ENR | OTGHSEN | svd[29:+1] |
| field_extra_in_svd | AHB1ENR | OTGHSULPIEN | svd[30:+1] |
| field_missing_in_svd | AHB1ENR | USB_OTG_HSEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_HSULPIEN |  |
| field_missing_in_svd | AHB1LPENR | DMA2DLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHPTPLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHRXLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHTXLPEN |  |
| field_missing_in_svd | AHB1LPENR | FLASHLPEN |  |
| field_extra_in_svd | AHB1LPENR | FLITFLPEN | svd[15:+1] |
| field_missing_in_svd | AHB1LPENR | GPIOJLPEN |  |
| field_missing_in_svd | AHB1LPENR | GPIOKLPEN |  |
| field_extra_in_svd | AHB1LPENR | OTGHSLPEN | svd[29:+1] |
| field_extra_in_svd | AHB1LPENR | OTGHSULPILPEN | svd[30:+1] |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HSLPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HSULPILPEN |  |
| field_missing_in_svd | AHB1RSTR | DMA2DRST |  |
| field_missing_in_svd | AHB1RSTR | ETHRST |  |
| field_missing_in_svd | AHB1RSTR | GPIOJRST |  |
| field_missing_in_svd | AHB1RSTR | GPIOKRST |  |
| field_extra_in_svd | AHB1RSTR | OTGHSRST | svd[29:+1] |
| field_missing_in_svd | AHB1RSTR | USB_OTG_HSRST |  |
| field_missing_in_svd | AHB2ENR | CRYPEN |  |
| field_missing_in_svd | AHB2ENR | DCMIEN |  |
| field_missing_in_svd | AHB2ENR | HASHEN |  |
| field_missing_in_svd | AHB2ENR | JPEGEN |  |
| field_extra_in_svd | AHB2ENR | OTGFSEN | svd[7:+1] |
| field_missing_in_svd | AHB2ENR | USB_OTG_FSEN |  |
| field_missing_in_svd | AHB2LPENR | CRYPLPEN |  |
| field_missing_in_svd | AHB2LPENR | DCMILPEN |  |
| field_missing_in_svd | AHB2LPENR | HASHLPEN |  |
| field_missing_in_svd | AHB2LPENR | JPEGLPEN |  |
| field_extra_in_svd | AHB2LPENR | OTGFSLPEN | svd[7:+1] |
| field_missing_in_svd | AHB2LPENR | USB_OTG_FSLPEN |  |
| field_missing_in_svd | AHB2RSTR | CRYPRST |  |
| field_missing_in_svd | AHB2RSTR | DCMIRST |  |
| field_missing_in_svd | AHB2RSTR | HSAHRST |  |
| field_extra_in_svd | AHB2RSTR | OTGFSRST | svd[7:+1] |
| field_missing_in_svd | AHB2RSTR | USB_OTG_FSRST |  |
| field_extra_in_svd | AHB3ENR | QSPIEN | svd[1:+1] |
| field_missing_in_svd | AHB3ENR | QUADSPIEN |  |
| field_extra_in_svd | AHB3LPENR | QSPILPEN | svd[1:+1] |
| _… 64 more …_ | | | |

### adc/u5  (stm32u535cb · ADC1 · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | AWD1TR |  |  |
| field_extra_in_svd | AWD2CR | AWD2CH%s | svd[0:+1] |
| field_missing_in_svd | AWD2CR | AWDCH |  |
| register_missing_in_svd | AWD2TR |  |  |
| field_extra_in_svd | AWD3CR | AWD3CH%s | svd[0:+1] |
| field_missing_in_svd | AWD3CR | AWDCH |  |
| register_missing_in_svd | AWD3TR |  |  |
| field_missing_in_svd | CALFACT | CALFACT |  |
| field_extra_in_svd | CALFACT | CAPTURE_COEF | svd[25:+1] |
| field_extra_in_svd | CALFACT | I_APB_ADDR | svd[0:+8] |
| field_extra_in_svd | CALFACT | I_APB_DATA | svd[8:+8] |
| field_extra_in_svd | CALFACT | LATCH_COEF | svd[24:+1] |
| field_extra_in_svd | CALFACT | VALIDITY | svd[16:+1] |
| register_missing_in_svd | CCR |  |  |
| register_missing_in_svd | CFGR |  |  |
| field_missing_in_svd | CFGR1 | ALIGN |  |
| field_extra_in_svd | CFGR1 | AUTDLY | svd[14:+1] |
| field_missing_in_svd | CFGR1 | CHSELRMOD |  |
| field_extra_in_svd | CFGR1 | DISCNUM | svd[17:+3] |
| field_missing_in_svd | CFGR1 | DMACFG |  |
| field_missing_in_svd | CFGR1 | DMAEN |  |
| field_extra_in_svd | CFGR1 | DMNGT | svd[0:+2] |
| field_layout_mismatch | CFGR1 | EXTSEL | ip[6:+3] svd[5:+5] |
| field_extra_in_svd | CFGR1 | JAUTO | svd[25:+1] |
| field_extra_in_svd | CFGR1 | JAWD1EN | svd[24:+1] |
| field_extra_in_svd | CFGR1 | JDISCEN | svd[20:+1] |
| field_missing_in_svd | CFGR1 | SCANDIR |  |
| field_missing_in_svd | CFGR1 | WAIT |  |
| field_extra_in_svd | CFGR2 | BULB | svd[13:+1] |
| field_extra_in_svd | CFGR2 | JOVSE | svd[1:+1] |
| field_layout_mismatch | CFGR2 | LFTRIG | ip[29:+1] svd[27:+1] |
| field_extra_in_svd | CFGR2 | LSHIFT | svd[28:+4] |
| field_extra_in_svd | CFGR2 | OSR | svd[16:+10] |
| field_missing_in_svd | CFGR2 | OVSE |  |
| field_missing_in_svd | CFGR2 | OVSR |  |
| field_extra_in_svd | CFGR2 | ROVSE | svd[0:+1] |
| field_extra_in_svd | CFGR2 | ROVSM | svd[10:+1] |
| field_extra_in_svd | CFGR2 | SMPTRIG | svd[15:+1] |
| field_extra_in_svd | CFGR2 | SWTRIG | svd[14:+1] |
| field_missing_in_svd | CFGR2 | TOVS |  |
| field_extra_in_svd | CFGR2 | TROVS | svd[9:+1] |
| register_missing_in_svd | CHSELRMOD0 |  |  |
| register_missing_in_svd | CHSELRMOD1 |  |  |
| field_extra_in_svd | CR | ADCALLIN | svd[16:+1] |
| field_extra_in_svd | CR | CALINDEX | svd[24:+4] |
| field_extra_in_svd | CR | DEEPPWD | svd[29:+1] |
| field_extra_in_svd | CR | JADSTART | svd[3:+1] |
| field_extra_in_svd | CR | JADSTP | svd[5:+1] |
| field_missing_in_svd | DIFSEL | DIFSEL |  |
| field_extra_in_svd | DIFSEL | DIFSEL%s | svd[0:+1] |
| _… 53 more …_ | | | |

### rcc/wba  (stm32wba50ke · RCC · stm32wba50.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB2ENR | GPIODEN |  |
| field_missing_in_svd | AHB2ENR | GPIOEEN |  |
| field_missing_in_svd | AHB2ENR | GPIOGEN |  |
| field_missing_in_svd | AHB2ENR | USB_OTG_HSEN |  |
| field_missing_in_svd | AHB2ENR | USB_OTG_HS_PHYEN |  |
| field_missing_in_svd | AHB2RSTR | GPIODRST |  |
| field_missing_in_svd | AHB2RSTR | GPIOERST |  |
| field_missing_in_svd | AHB2RSTR | GPIOGRST |  |
| field_missing_in_svd | AHB2RSTR | USB_OTG_HSRST |  |
| field_missing_in_svd | AHB2SMENR | GPIODSMEN |  |
| field_missing_in_svd | AHB2SMENR | GPIOESMEN |  |
| field_missing_in_svd | AHB2SMENR | GPIOGSMEN |  |
| field_missing_in_svd | AHB2SMENR | USB_OTG_HSSMEN |  |
| field_missing_in_svd | AHB2SMENR | USB_OTG_HS_PHYSMEN |  |
| field_missing_in_svd | AHB5ENR | PTACONVEN |  |
| field_missing_in_svd | AHB5RSTR | PTACONVRST |  |
| field_missing_in_svd | AHB5SMENR | PTACONVSMEN |  |
| field_missing_in_svd | APB1ENR1 | I2C2EN |  |
| field_missing_in_svd | APB1ENR1 | SPI2EN |  |
| field_missing_in_svd | APB1ENR1 | TIM4EN |  |
| field_missing_in_svd | APB1ENR1 | USART3EN |  |
| field_missing_in_svd | APB1ENR2 | I2C4EN |  |
| field_missing_in_svd | APB1RSTR1 | I2C2RST |  |
| field_missing_in_svd | APB1RSTR1 | SPI2RST |  |
| field_missing_in_svd | APB1RSTR1 | TIM4RST |  |
| field_missing_in_svd | APB1RSTR1 | USART3RST |  |
| field_missing_in_svd | APB1RSTR2 | I2C4RST |  |
| field_missing_in_svd | APB1SMENR1 | I2C2SMEN |  |
| field_missing_in_svd | APB1SMENR1 | SPI2SMEN |  |
| field_missing_in_svd | APB1SMENR1 | TIM4SMEN |  |
| field_missing_in_svd | APB1SMENR1 | USART3SMEN |  |
| field_missing_in_svd | APB1SMENR2 | I2C4SMEN |  |
| field_missing_in_svd | APB2ENR | SAI1EN |  |
| field_missing_in_svd | APB2RSTR | SAI1RST |  |
| field_missing_in_svd | APB2SMENR | SAI1SMEN |  |
| field_missing_in_svd | APB7ENR | COMPEN |  |
| field_missing_in_svd | APB7ENR | VREFEN |  |
| field_missing_in_svd | APB7RSTR | COMPRST |  |
| field_missing_in_svd | APB7RSTR | VREFRST |  |
| field_missing_in_svd | APB7SMENR | COMPSMEN |  |
| field_missing_in_svd | APB7SMENR | VREFSMEN |  |
| register_missing_in_svd | ASARR |  |  |
| register_missing_in_svd | ASCAR |  |  |
| register_missing_in_svd | ASCNTR |  |  |
| register_missing_in_svd | ASCOR |  |  |
| register_missing_in_svd | ASCR |  |  |
| register_missing_in_svd | ASIER |  |  |
| register_missing_in_svd | ASSR |  |  |
| register_missing_in_svd | BDCR |  |  |
| register_extra_in_svd | BDCR1 |  | svd offset 0xF0 |
| _… 53 more …_ | | | |

### eth/v2  (stm32h563ag · ETH · stm32h563.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | DMACCARXBR |  | svd offset 0x115C |
| register_extra_in_svd | DMACCARXDR |  | svd offset 0x114C |
| register_missing_in_svd | DMACCARxBR |  |  |
| register_missing_in_svd | DMACCARxDR |  |  |
| register_extra_in_svd | DMACCATXBR |  | svd offset 0x1154 |
| register_extra_in_svd | DMACCATXDR |  | svd offset 0x1144 |
| register_missing_in_svd | DMACCATxBR |  |  |
| register_missing_in_svd | DMACCATxDR |  |  |
| register_offset_mismatch | DMACCR |  | ip=0x100 svd=0x1100 |
| register_offset_mismatch | DMACIER |  | ip=0x134 svd=0x1134 |
| register_offset_mismatch | DMACMFCR |  | ip=0x16C svd=0x116C |
| register_extra_in_svd | DMACRXCR |  | svd offset 0x1108 |
| register_extra_in_svd | DMACRXDLAR |  | svd offset 0x111C |
| register_extra_in_svd | DMACRXDTPR |  | svd offset 0x1128 |
| register_extra_in_svd | DMACRXIWTR |  | svd offset 0x1138 |
| register_extra_in_svd | DMACRXRLR |  | svd offset 0x1130 |
| register_missing_in_svd | DMACRxCR |  |  |
| register_missing_in_svd | DMACRxDLAR |  |  |
| register_missing_in_svd | DMACRxDTPR |  |  |
| register_missing_in_svd | DMACRxIWTR |  |  |
| register_missing_in_svd | DMACRxRLR |  |  |
| register_offset_mismatch | DMACSR |  | ip=0x160 svd=0x1160 |
| field_missing_in_svd | DMACSR | ER |  |
| field_extra_in_svd | DMACSR | ERI | svd[11:+1] |
| field_missing_in_svd | DMACSR | ET |  |
| field_extra_in_svd | DMACSR | ETI | svd[10:+1] |
| register_extra_in_svd | DMACTXCR |  | svd offset 0x1104 |
| register_extra_in_svd | DMACTXDLAR |  | svd offset 0x1114 |
| register_extra_in_svd | DMACTXDTPR |  | svd offset 0x1120 |
| register_extra_in_svd | DMACTXRLR |  | svd offset 0x112C |
| register_missing_in_svd | DMACTxCR |  |  |
| register_missing_in_svd | DMACTxDLAR |  |  |
| register_missing_in_svd | DMACTxDTPR |  |  |
| register_missing_in_svd | DMACTxRLR |  |  |
| register_offset_mismatch | DMADSR |  | ip=0xC svd=0x100C |
| register_offset_mismatch | DMAISR |  | ip=0x8 svd=0x1008 |
| register_offset_mismatch | DMAMR |  | ip=0x0 svd=0x1000 |
| register_offset_mismatch | DMASBMR |  | ip=0x4 svd=0x1004 |
| register_missing_in_svd | ETHERNET_DMA |  |  |
| register_missing_in_svd | ETHERNET_MAC |  |  |
| register_missing_in_svd | ETHERNET_MTL |  |  |
| register_extra_in_svd | MACA1HR |  | svd offset 0x308 |
| register_extra_in_svd | MACA1LR |  | svd offset 0x30C |
| register_extra_in_svd | MACA2HR |  | svd offset 0x310 |
| register_extra_in_svd | MACA2LR |  | svd offset 0x314 |
| register_extra_in_svd | MACA3HR |  | svd offset 0x318 |
| register_extra_in_svd | MACA3LR |  | svd offset 0x31C |
| field_missing_in_svd | MACACR | ATSEN |  |
| field_extra_in_svd | MACACR | ATSEN0 | svd[4:+1] |
| field_extra_in_svd | MACACR | ATSEN1 | svd[5:+1] |
| _… 52 more …_ | | | |

### rcc/g0x0  (stm32g030c6 · RCC · stm32g030.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | AESEN |  |
| field_missing_in_svd | AHBENR | DMA2EN |  |
| field_missing_in_svd | AHBENR | RNGEN |  |
| field_missing_in_svd | AHBRSTR | AESRST |  |
| field_missing_in_svd | AHBRSTR | DMA2RST |  |
| field_missing_in_svd | AHBRSTR | RNGRST |  |
| field_missing_in_svd | AHBSMENR | AESSMEN |  |
| field_missing_in_svd | AHBSMENR | DMA2SMEN |  |
| field_missing_in_svd | AHBSMENR | RNGSMEN |  |
| field_missing_in_svd | APBENR1 | CECEN |  |
| field_missing_in_svd | APBENR1 | CRSEN |  |
| field_missing_in_svd | APBENR1 | DAC1EN |  |
| field_missing_in_svd | APBENR1 | FDCANEN |  |
| field_missing_in_svd | APBENR1 | I2C3EN |  |
| field_missing_in_svd | APBENR1 | LPTIM1EN |  |
| field_missing_in_svd | APBENR1 | LPTIM2EN |  |
| field_missing_in_svd | APBENR1 | LPUART1EN |  |
| field_missing_in_svd | APBENR1 | LPUART2EN |  |
| field_missing_in_svd | APBENR1 | SPI3EN |  |
| field_missing_in_svd | APBENR1 | TIM2EN |  |
| field_missing_in_svd | APBENR1 | TIM4EN |  |
| field_missing_in_svd | APBENR1 | TIM6EN |  |
| field_missing_in_svd | APBENR1 | TIM7EN |  |
| field_missing_in_svd | APBENR1 | UCPD1EN |  |
| field_missing_in_svd | APBENR1 | UCPD2EN |  |
| field_missing_in_svd | APBENR1 | USART3EN |  |
| field_missing_in_svd | APBENR1 | USART4EN |  |
| field_missing_in_svd | APBENR1 | USART5EN |  |
| field_missing_in_svd | APBENR1 | USART6EN |  |
| field_missing_in_svd | APBENR1 | USBEN |  |
| field_missing_in_svd | APBENR2 | TIM15EN |  |
| field_missing_in_svd | APBRSTR1 | CECRST |  |
| field_missing_in_svd | APBRSTR1 | CRSRST |  |
| field_missing_in_svd | APBRSTR1 | DAC1RST |  |
| field_missing_in_svd | APBRSTR1 | FDCANRST |  |
| field_missing_in_svd | APBRSTR1 | I2C3RST |  |
| field_missing_in_svd | APBRSTR1 | LPTIM1RST |  |
| field_missing_in_svd | APBRSTR1 | LPTIM2RST |  |
| field_missing_in_svd | APBRSTR1 | LPUART1RST |  |
| field_missing_in_svd | APBRSTR1 | LPUART2RST |  |
| field_missing_in_svd | APBRSTR1 | SPI3RST |  |
| field_missing_in_svd | APBRSTR1 | TIM2RST |  |
| field_missing_in_svd | APBRSTR1 | TIM4RST |  |
| field_missing_in_svd | APBRSTR1 | TIM6RST |  |
| field_missing_in_svd | APBRSTR1 | TIM7RST |  |
| field_missing_in_svd | APBRSTR1 | UCPD1RST |  |
| field_missing_in_svd | APBRSTR1 | UCPD2RST |  |
| field_missing_in_svd | APBRSTR1 | USART3RST |  |
| field_missing_in_svd | APBRSTR1 | USART4RST |  |
| field_missing_in_svd | APBRSTR1 | USART5RST |  |
| _… 50 more …_ | | | |

### rcc/h5  (stm32h562ag · RCC · stm32h562.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB1ENR | ETHEN |  |
| field_missing_in_svd | AHB1ENR | ETHRXEN |  |
| field_missing_in_svd | AHB1ENR | ETHTXEN |  |
| field_missing_in_svd | AHB1LPENR | ETHLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHRXLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHTXLPEN |  |
| field_missing_in_svd | AHB1RSTR | ETHRST |  |
| field_missing_in_svd | AHB2ENR | ADC12EN |  |
| field_extra_in_svd | AHB2ENR | ADCEN | svd[10:+1] |
| field_missing_in_svd | AHB2ENR | AESEN |  |
| field_missing_in_svd | AHB2ENR | PKAEN |  |
| field_missing_in_svd | AHB2ENR | SAESEN |  |
| field_missing_in_svd | AHB2LPENR | ADC12LPEN |  |
| field_extra_in_svd | AHB2LPENR | ADCLPEN | svd[10:+1] |
| field_missing_in_svd | AHB2LPENR | AESLPEN |  |
| field_missing_in_svd | AHB2LPENR | PKALPEN |  |
| field_missing_in_svd | AHB2LPENR | SAESLPEN |  |
| field_missing_in_svd | AHB2RSTR | ADC12RST |  |
| field_extra_in_svd | AHB2RSTR | ADCRST | svd[10:+1] |
| field_missing_in_svd | AHB2RSTR | AESRST |  |
| field_missing_in_svd | AHB2RSTR | PKARST |  |
| field_missing_in_svd | AHB2RSTR | SAESRST |  |
| field_missing_in_svd | AHB4ENR | OTFDEC1EN |  |
| field_missing_in_svd | AHB4ENR | SDMMC2EN |  |
| field_missing_in_svd | AHB4LPENR | OTFDEC1LPEN |  |
| field_missing_in_svd | AHB4LPENR | SDMMC2LPEN |  |
| field_missing_in_svd | AHB4RSTR | OTFDEC1RST |  |
| field_missing_in_svd | AHB4RSTR | SDMMC2RST |  |
| field_missing_in_svd | APB1HENR | FDCAN12EN |  |
| field_extra_in_svd | APB1HENR | FDCANEN | svd[9:+1] |
| field_extra_in_svd | APB1HENR | UCPD1EN | svd[23:+1] |
| field_missing_in_svd | APB1HENR | UCPDEN |  |
| field_missing_in_svd | APB1HLPENR | FDCAN12LPEN |  |
| field_extra_in_svd | APB1HLPENR | FDCANLPEN | svd[9:+1] |
| field_extra_in_svd | APB1HLPENR | UCPD1LPEN | svd[23:+1] |
| field_missing_in_svd | APB1HLPENR | UCPDLPEN |  |
| field_missing_in_svd | APB1HRSTR | FDCAN12RST |  |
| field_extra_in_svd | APB1HRSTR | FDCANRST | svd[9:+1] |
| field_extra_in_svd | APB1HRSTR | UCPD1RST | svd[23:+1] |
| field_missing_in_svd | APB1HRSTR | UCPDRST |  |
| field_extra_in_svd | APB3ENR | I3C2EN | svd[9:+1] |
| field_extra_in_svd | APB3ENR | SBSEN | svd[1:+1] |
| field_missing_in_svd | APB3ENR | SYSCFGEN |  |
| field_extra_in_svd | APB3LPENR | I3C2LPEN | svd[9:+1] |
| field_extra_in_svd | APB3LPENR | SBSLPEN | svd[1:+1] |
| field_missing_in_svd | APB3LPENR | SYSCFGLPEN |  |
| field_extra_in_svd | APB3RSTR | I3C2RST | svd[9:+1] |
| field_extra_in_svd | APB3RSTR | SBSRST | svd[1:+1] |
| field_missing_in_svd | APB3RSTR | SYSCFGRST |  |
| field_extra_in_svd | CCIPR2 | UART12SEL | svd[4:+3] |
| _… 49 more …_ | | | |

### rcc/g0x1  (stm32g031c4 · RCC · stm32g031.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | AESEN |  |
| field_missing_in_svd | AHBENR | DMA1EN |  |
| field_missing_in_svd | AHBENR | DMA2EN |  |
| field_extra_in_svd | AHBENR | DMAEN | svd[0:+1] |
| field_missing_in_svd | AHBENR | RNGEN |  |
| field_missing_in_svd | AHBRSTR | AESRST |  |
| field_missing_in_svd | AHBRSTR | DMA1RST |  |
| field_missing_in_svd | AHBRSTR | DMA2RST |  |
| field_extra_in_svd | AHBRSTR | DMARST | svd[0:+1] |
| field_missing_in_svd | AHBRSTR | RNGRST |  |
| field_missing_in_svd | AHBSMENR | AESSMEN |  |
| field_missing_in_svd | AHBSMENR | DMA1SMEN |  |
| field_missing_in_svd | AHBSMENR | DMA2SMEN |  |
| field_extra_in_svd | AHBSMENR | DMASMEN | svd[0:+1] |
| field_missing_in_svd | AHBSMENR | RNGSMEN |  |
| field_missing_in_svd | APBENR1 | CECEN |  |
| field_missing_in_svd | APBENR1 | CRSEN |  |
| field_missing_in_svd | APBENR1 | DAC1EN |  |
| field_missing_in_svd | APBENR1 | FDCANEN |  |
| field_missing_in_svd | APBENR1 | I2C3EN |  |
| field_missing_in_svd | APBENR1 | LPUART2EN |  |
| field_missing_in_svd | APBENR1 | SPI3EN |  |
| field_missing_in_svd | APBENR1 | TIM4EN |  |
| field_missing_in_svd | APBENR1 | TIM6EN |  |
| field_missing_in_svd | APBENR1 | TIM7EN |  |
| field_missing_in_svd | APBENR1 | UCPD1EN |  |
| field_missing_in_svd | APBENR1 | UCPD2EN |  |
| field_missing_in_svd | APBENR1 | USART3EN |  |
| field_missing_in_svd | APBENR1 | USART4EN |  |
| field_missing_in_svd | APBENR1 | USART5EN |  |
| field_missing_in_svd | APBENR1 | USART6EN |  |
| field_missing_in_svd | APBENR1 | USBEN |  |
| field_missing_in_svd | APBENR2 | TIM15EN |  |
| field_missing_in_svd | APBRSTR1 | CECRST |  |
| field_missing_in_svd | APBRSTR1 | CRSRST |  |
| field_missing_in_svd | APBRSTR1 | DAC1RST |  |
| field_missing_in_svd | APBRSTR1 | FDCANRST |  |
| field_missing_in_svd | APBRSTR1 | I2C3RST |  |
| field_missing_in_svd | APBRSTR1 | LPUART2RST |  |
| field_missing_in_svd | APBRSTR1 | SPI3RST |  |
| field_missing_in_svd | APBRSTR1 | TIM4RST |  |
| field_missing_in_svd | APBRSTR1 | TIM6RST |  |
| field_missing_in_svd | APBRSTR1 | TIM7RST |  |
| field_missing_in_svd | APBRSTR1 | UCPD1RST |  |
| field_missing_in_svd | APBRSTR1 | UCPD2RST |  |
| field_missing_in_svd | APBRSTR1 | USART3RST |  |
| field_missing_in_svd | APBRSTR1 | USART4RST |  |
| field_missing_in_svd | APBRSTR1 | USART5RST |  |
| field_missing_in_svd | APBRSTR1 | USART6RST |  |
| field_missing_in_svd | APBRSTR1 | USBRST |  |
| _… 46 more …_ | | | |

### dts/v1  (stm32h503cb · DTS · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CFGR1 | EN |  |
| field_missing_in_svd | CFGR1 | INTRIG_SEL |  |
| field_missing_in_svd | CFGR1 | SMP_TIME |  |
| field_missing_in_svd | CFGR1 | START |  |
| field_extra_in_svd | CFGR1 | TS1_EN | svd[0:+1] |
| field_extra_in_svd | CFGR1 | TS1_INTRIG_SEL | svd[8:+4] |
| field_extra_in_svd | CFGR1 | TS1_SMP_TIME | svd[16:+4] |
| field_extra_in_svd | CFGR1 | TS1_START | svd[4:+1] |
| field_missing_in_svd | DR | MFREQ |  |
| field_extra_in_svd | DR | TS1_MFREQ | svd[0:+16] |
| field_missing_in_svd | ICIFR | CAITEF |  |
| field_missing_in_svd | ICIFR | CAITHF |  |
| field_missing_in_svd | ICIFR | CAITLF |  |
| field_missing_in_svd | ICIFR | CITEF |  |
| field_missing_in_svd | ICIFR | CITHF |  |
| field_missing_in_svd | ICIFR | CITLF |  |
| field_extra_in_svd | ICIFR | TS1_CAITEF | svd[4:+1] |
| field_extra_in_svd | ICIFR | TS1_CAITHF | svd[6:+1] |
| field_extra_in_svd | ICIFR | TS1_CAITLF | svd[5:+1] |
| field_extra_in_svd | ICIFR | TS1_CITEF | svd[0:+1] |
| field_extra_in_svd | ICIFR | TS1_CITHF | svd[2:+1] |
| field_extra_in_svd | ICIFR | TS1_CITLF | svd[1:+1] |
| field_missing_in_svd | ITENR | AITEEN |  |
| field_missing_in_svd | ITENR | AITHEN |  |
| field_missing_in_svd | ITENR | AITLEN |  |
| field_missing_in_svd | ITENR | ITEEN |  |
| field_missing_in_svd | ITENR | ITHEN |  |
| field_missing_in_svd | ITENR | ITLEN |  |
| field_extra_in_svd | ITENR | TS1_AITEEN | svd[4:+1] |
| field_extra_in_svd | ITENR | TS1_AITHEN | svd[6:+1] |
| field_extra_in_svd | ITENR | TS1_AITLEN | svd[5:+1] |
| field_extra_in_svd | ITENR | TS1_ITEEN | svd[0:+1] |
| field_extra_in_svd | ITENR | TS1_ITHEN | svd[2:+1] |
| field_extra_in_svd | ITENR | TS1_ITLEN | svd[1:+1] |
| field_missing_in_svd | ITR1 | HITTHD |  |
| field_missing_in_svd | ITR1 | LITTHD |  |
| field_extra_in_svd | ITR1 | TS1_HITTHD | svd[16:+16] |
| field_extra_in_svd | ITR1 | TS1_LITTHD | svd[0:+16] |
| field_missing_in_svd | OR | OP |  |
| field_extra_in_svd | OR | TS_OP0 | svd[0:+1] |
| field_extra_in_svd | OR | TS_OP1 | svd[1:+1] |
| field_extra_in_svd | OR | TS_OP10 | svd[10:+1] |
| field_extra_in_svd | OR | TS_OP11 | svd[11:+1] |
| field_extra_in_svd | OR | TS_OP12 | svd[12:+1] |
| field_extra_in_svd | OR | TS_OP13 | svd[13:+1] |
| field_extra_in_svd | OR | TS_OP14 | svd[14:+1] |
| field_extra_in_svd | OR | TS_OP15 | svd[15:+1] |
| field_extra_in_svd | OR | TS_OP16 | svd[16:+1] |
| field_extra_in_svd | OR | TS_OP17 | svd[17:+1] |
| field_extra_in_svd | OR | TS_OP18 | svd[18:+1] |
| _… 41 more …_ | | | |

### rcc/f3v2  (stm32f301c6 · RCC · stm32f301.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | ADC12EN |  |
| field_extra_in_svd | AHBENR | ADC1EN | svd[28:+1] |
| field_missing_in_svd | AHBENR | ADC34EN |  |
| field_missing_in_svd | AHBENR | DMA2EN |  |
| field_missing_in_svd | AHBENR | FLASHEN |  |
| field_extra_in_svd | AHBENR | FLITFEN | svd[4:+1] |
| field_missing_in_svd | AHBENR | FMCEN |  |
| field_missing_in_svd | AHBENR | GPIOAEN |  |
| field_missing_in_svd | AHBENR | GPIOBEN |  |
| field_missing_in_svd | AHBENR | GPIOCEN |  |
| field_missing_in_svd | AHBENR | GPIODEN |  |
| field_missing_in_svd | AHBENR | GPIOEEN |  |
| field_missing_in_svd | AHBENR | GPIOFEN |  |
| field_missing_in_svd | AHBENR | GPIOGEN |  |
| field_missing_in_svd | AHBENR | GPIOHEN |  |
| field_extra_in_svd | AHBENR | IOPAEN | svd[17:+1] |
| field_extra_in_svd | AHBENR | IOPBEN | svd[18:+1] |
| field_extra_in_svd | AHBENR | IOPCEN | svd[19:+1] |
| field_extra_in_svd | AHBENR | IOPDEN | svd[20:+1] |
| field_extra_in_svd | AHBENR | IOPFEN | svd[22:+1] |
| field_missing_in_svd | AHBRSTR | ADC12RST |  |
| field_extra_in_svd | AHBRSTR | ADC1RST | svd[28:+1] |
| field_missing_in_svd | AHBRSTR | ADC34RST |  |
| field_missing_in_svd | AHBRSTR | FMCRST |  |
| field_missing_in_svd | AHBRSTR | GPIOARST |  |
| field_missing_in_svd | AHBRSTR | GPIOBRST |  |
| field_missing_in_svd | AHBRSTR | GPIOCRST |  |
| field_missing_in_svd | AHBRSTR | GPIODRST |  |
| field_missing_in_svd | AHBRSTR | GPIOERST |  |
| field_missing_in_svd | AHBRSTR | GPIOFRST |  |
| field_missing_in_svd | AHBRSTR | GPIOGRST |  |
| field_missing_in_svd | AHBRSTR | GPIOHRST |  |
| field_extra_in_svd | AHBRSTR | IOPARST | svd[17:+1] |
| field_extra_in_svd | AHBRSTR | IOPBRST | svd[18:+1] |
| field_extra_in_svd | AHBRSTR | IOPCRST | svd[19:+1] |
| field_extra_in_svd | AHBRSTR | IOPDRST | svd[20:+1] |
| field_extra_in_svd | AHBRSTR | IOPFRST | svd[22:+1] |
| field_missing_in_svd | APB1ENR | CANEN |  |
| field_extra_in_svd | APB1ENR | DAC1EN | svd[29:+1] |
| field_missing_in_svd | APB1ENR | DAC2EN |  |
| field_missing_in_svd | APB1ENR | DACEN |  |
| field_missing_in_svd | APB1ENR | TIM3EN |  |
| field_missing_in_svd | APB1ENR | TIM4EN |  |
| field_missing_in_svd | APB1ENR | TIM7EN |  |
| field_missing_in_svd | APB1ENR | UART4EN |  |
| field_missing_in_svd | APB1ENR | UART5EN |  |
| field_missing_in_svd | APB1ENR | USBEN |  |
| field_missing_in_svd | APB1RSTR | CANRST |  |
| field_extra_in_svd | APB1RSTR | DAC1RST | svd[29:+1] |
| field_missing_in_svd | APB1RSTR | DAC2RST |  |
| _… 39 more …_ | | | |

### pwr/wba  (stm32wba50ke · PWR · stm32wba50.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR1 | R1RSB |  |
| field_extra_in_svd | CR1 | R1RSB1 | svd[12:+1] |
| field_missing_in_svd | CR1 | R1RSB567 |  |
| field_missing_in_svd | CR2 | PKARAMPDS |  |
| field_missing_in_svd | CR2 | PRAMPDS |  |
| field_missing_in_svd | CR2 | SRAM1PDS |  |
| field_extra_in_svd | CR2 | SRAM1PDS1 | svd[0:+1] |
| field_missing_in_svd | CR2 | SRAM1PDS567 |  |
| field_missing_in_svd | CR3 | DIVCLP |  |
| field_missing_in_svd | CR3 | SELREP |  |
| field_missing_in_svd | CR3 | V11FBSW |  |
| register_missing_in_svd | DBPCR |  |  |
| register_extra_in_svd | DBPR |  | svd offset 0x28 |
| register_missing_in_svd | IORETENR |  |  |
| register_extra_in_svd | IORETENRA |  | svd offset 0x50 |
| register_extra_in_svd | IORETENRB |  | svd offset 0x58 |
| register_extra_in_svd | IORETENRC |  | svd offset 0x60 |
| register_extra_in_svd | IORETENRH |  | svd offset 0x88 |
| register_missing_in_svd | IORETR |  |  |
| register_extra_in_svd | IORETRA |  | svd offset 0x54 |
| register_extra_in_svd | IORETRB |  | svd offset 0x5C |
| register_extra_in_svd | IORETRC |  | svd offset 0x64 |
| register_extra_in_svd | IORETRH |  | svd offset 0x8C |
| field_missing_in_svd | RADIOSCR | REGPABYPEN |  |
| field_missing_in_svd | RADIOSCR | REGPARDYV11 |  |
| field_missing_in_svd | RADIOSCR | REGPASEL |  |
| register_missing_in_svd | S2RETR |  |  |
| field_extra_in_svd | SECCFGR | WUP2SEC | svd[1:+1] |
| field_extra_in_svd | SECCFGR | WUP3SEC | svd[2:+1] |
| field_extra_in_svd | SECCFGR | WUP4SEC | svd[3:+1] |
| field_extra_in_svd | SECCFGR | WUP5SEC | svd[4:+1] |
| field_extra_in_svd | SECCFGR | WUP6SEC | svd[5:+1] |
| field_extra_in_svd | SECCFGR | WUP7SEC | svd[6:+1] |
| field_extra_in_svd | SECCFGR | WUP8SEC | svd[7:+1] |
| field_missing_in_svd | SR | STOP2F |  |
| field_missing_in_svd | SVMCR | IO2SV |  |
| field_missing_in_svd | SVMCR | USV |  |
| field_missing_in_svd | VOSR | USBBOOSTEN |  |
| field_missing_in_svd | VOSR | USBBOOSTRDY |  |
| field_missing_in_svd | VOSR | USBPWREN |  |
| field_missing_in_svd | VOSR | VDD11USBDIS |  |
| field_missing_in_svd | VOSR | VDD11USBRDY |  |
| field_missing_in_svd | VOSR | VDD11USBSWDLY |  |
| field_missing_in_svd | WUCR1 | WUPEN |  |
| field_extra_in_svd | WUCR1 | WUPEN1 | svd[0:+1] |
| field_extra_in_svd | WUCR1 | WUPEN2 | svd[1:+1] |
| field_extra_in_svd | WUCR1 | WUPEN3 | svd[2:+1] |
| field_extra_in_svd | WUCR1 | WUPEN4 | svd[3:+1] |
| field_extra_in_svd | WUCR1 | WUPEN5 | svd[4:+1] |
| field_extra_in_svd | WUCR1 | WUPEN6 | svd[5:+1] |
| _… 38 more …_ | | | |

### timer/v3  (stm32g030c6 · TIM1 · stm32g030.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | AF1 | BKCMP1E | svd[1:+1] |
| field_extra_in_svd | AF1 | BKCMP1P | svd[10:+1] |
| field_extra_in_svd | AF1 | BKCMP2E | svd[2:+1] |
| field_extra_in_svd | AF1 | BKCMP2P | svd[11:+1] |
| field_extra_in_svd | AF1 | BKINE | svd[0:+1] |
| field_extra_in_svd | AF1 | BKINP | svd[9:+1] |
| field_layout_mismatch | AF1 | ETRSEL | ip[14:+4] svd[14:+3] |
| field_extra_in_svd | AF2 | BK2CMP1E | svd[1:+1] |
| field_extra_in_svd | AF2 | BK2CMP1P | svd[10:+1] |
| field_extra_in_svd | AF2 | BK2CMP2E | svd[2:+1] |
| field_extra_in_svd | AF2 | BK2CMP2P | svd[11:+1] |
| field_missing_in_svd | AF2 | BK2CMPE |  |
| field_missing_in_svd | AF2 | BK2CMPP |  |
| field_missing_in_svd | AF2 | BK2DF1BK1E |  |
| field_extra_in_svd | AF2 | BK2DFBK0E | svd[8:+1] |
| field_extra_in_svd | ARR | ARR | svd[0:+16] |
| field_extra_in_svd | BDTR | BK2DSRM | svd[27:+1] |
| field_extra_in_svd | BDTR | BK2E | svd[24:+1] |
| field_extra_in_svd | BDTR | BK2F | svd[20:+4] |
| field_extra_in_svd | BDTR | BK2ID | svd[29:+1] |
| field_extra_in_svd | BDTR | BK2P | svd[25:+1] |
| field_extra_in_svd | BDTR | BKBID | svd[28:+1] |
| field_extra_in_svd | BDTR | BKDSRM | svd[26:+1] |
| field_extra_in_svd | CCER | CC%sE | svd[0:+1] |
| field_extra_in_svd | CCER | CC%sNE | svd[2:+1] |
| field_extra_in_svd | CCER | CC%sNP | svd[3:+1] |
| field_extra_in_svd | CCER | CC%sP | svd[1:+1] |
| field_missing_in_svd | CCER | CCE |  |
| field_missing_in_svd | CCER | CCNP |  |
| field_missing_in_svd | CCER | CCP |  |
| register_extra_in_svd | CCMR1_Input |  | svd offset 0x18 |
| register_extra_in_svd | CCMR1_Output |  | svd offset 0x18 |
| register_extra_in_svd | CCMR2_Input |  | svd offset 0x1C |
| register_extra_in_svd | CCMR2_Output |  | svd offset 0x1C |
| register_missing_in_svd | CCMR3 |  |  |
| register_extra_in_svd | CCMR3_Output |  | svd offset 0x54 |
| register_missing_in_svd | CCMR_Input |  |  |
| register_missing_in_svd | CCMR_Output |  |  |
| register_missing_in_svd | CCR |  |  |
| register_extra_in_svd | CCR%s |  | svd offset 0x34 |
| field_missing_in_svd | CCR5 | GC5C |  |
| field_extra_in_svd | CCR5 | GC5C1 | svd[29:+1] |
| field_extra_in_svd | CCR5 | GC5C2 | svd[30:+1] |
| field_extra_in_svd | CCR5 | GC5C3 | svd[31:+1] |
| field_extra_in_svd | CNT | CNT | svd[0:+16] |
| field_extra_in_svd | CNT | UIFCPY | svd[31:+1] |
| register_extra_in_svd | CNT16 |  | svd offset 0x24 |
| field_extra_in_svd | CR2 | CCPC | svd[0:+1] |
| field_extra_in_svd | CR2 | CCUS | svd[2:+1] |
| field_extra_in_svd | CR2 | MMS2 | svd[20:+4] |
| _… 38 more …_ | | | |

### syscfg/wb  (stm32wb55cc · SYSCFG · stm32wb55.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CFGR1 | FPU_IE |  |
| field_extra_in_svd | CFGR1 | FPU_IE0 | svd[26:+1] |
| field_extra_in_svd | CFGR1 | FPU_IE1 | svd[27:+1] |
| field_extra_in_svd | CFGR1 | FPU_IE2 | svd[28:+1] |
| field_extra_in_svd | CFGR1 | FPU_IE3 | svd[29:+1] |
| field_extra_in_svd | CFGR1 | FPU_IE4 | svd[30:+1] |
| field_extra_in_svd | CFGR1 | FPU_IE5 | svd[31:+1] |
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x8 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0xC |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x10 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x14 |
| field_missing_in_svd | SIPCR | SAES |  |
| field_extra_in_svd | SIPCR | SAES1 | svd[0:+1] |
| field_extra_in_svd | SIPCR | SAES2 | svd[1:+1] |
| field_extra_in_svd | SWPR | P0WP | svd[0:+1] |
| field_extra_in_svd | SWPR | P10WP | svd[10:+1] |
| field_extra_in_svd | SWPR | P11WP | svd[11:+1] |
| field_extra_in_svd | SWPR | P12WP | svd[12:+1] |
| field_extra_in_svd | SWPR | P13WP | svd[13:+1] |
| field_extra_in_svd | SWPR | P14WP | svd[14:+1] |
| field_extra_in_svd | SWPR | P15WP | svd[15:+1] |
| field_extra_in_svd | SWPR | P16WP | svd[16:+1] |
| field_extra_in_svd | SWPR | P17WP | svd[17:+1] |
| field_extra_in_svd | SWPR | P18WP | svd[18:+1] |
| field_extra_in_svd | SWPR | P19WP | svd[19:+1] |
| field_extra_in_svd | SWPR | P1WP | svd[1:+1] |
| field_extra_in_svd | SWPR | P20WP | svd[20:+1] |
| field_extra_in_svd | SWPR | P21WP | svd[21:+1] |
| field_extra_in_svd | SWPR | P22WP | svd[22:+1] |
| field_extra_in_svd | SWPR | P23WP | svd[23:+1] |
| field_extra_in_svd | SWPR | P24WP | svd[24:+1] |
| field_extra_in_svd | SWPR | P25WP | svd[25:+1] |
| field_extra_in_svd | SWPR | P26WP | svd[26:+1] |
| field_extra_in_svd | SWPR | P27WP | svd[27:+1] |
| field_extra_in_svd | SWPR | P28WP | svd[28:+1] |
| field_extra_in_svd | SWPR | P29WP | svd[29:+1] |
| field_extra_in_svd | SWPR | P2WP | svd[2:+1] |
| field_extra_in_svd | SWPR | P30WP | svd[30:+1] |
| field_extra_in_svd | SWPR | P31WP | svd[31:+1] |
| field_extra_in_svd | SWPR | P3WP | svd[3:+1] |
| field_extra_in_svd | SWPR | P4WP | svd[4:+1] |
| field_extra_in_svd | SWPR | P5WP | svd[5:+1] |
| field_extra_in_svd | SWPR | P6WP | svd[6:+1] |
| field_extra_in_svd | SWPR | P7WP | svd[7:+1] |
| field_extra_in_svd | SWPR | P8WP | svd[8:+1] |
| field_extra_in_svd | SWPR | P9WP | svd[9:+1] |
| field_missing_in_svd | SWPR | PWP |  |
| field_extra_in_svd | SWPR2 | P32WP | svd[0:+1] |
| field_extra_in_svd | SWPR2 | P33WP | svd[1:+1] |
| _… 33 more …_ | | | |

### rcc/l4plus  (stm32l4r5ag · RCC · stm32l4r5.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB2ENR | OCTOSPIMEN |  |
| field_extra_in_svd | AHB2ENR | OSPIMEN | svd[20:+1] |
| field_extra_in_svd | AHB2ENR | OTGFSEN | svd[12:+1] |
| field_missing_in_svd | AHB2ENR | PKAEN |  |
| field_missing_in_svd | AHB2ENR | SDMMC2EN |  |
| field_missing_in_svd | AHB2ENR | USB_OTG_FSEN |  |
| field_missing_in_svd | AHB2RSTR | OCTOSPIMRST |  |
| field_extra_in_svd | AHB2RSTR | OSPIMRST | svd[20:+1] |
| field_extra_in_svd | AHB2RSTR | OTGFSRST | svd[12:+1] |
| field_missing_in_svd | AHB2RSTR | PKARST |  |
| field_missing_in_svd | AHB2RSTR | SDMMC2RST |  |
| field_missing_in_svd | AHB2RSTR | USB_OTG_FSRST |  |
| field_missing_in_svd | AHB2SMENR | ADCSMEN |  |
| field_missing_in_svd | AHB2SMENR | HASH1SMEN |  |
| field_missing_in_svd | AHB2SMENR | OCTOSPIMSMEN |  |
| field_extra_in_svd | AHB2SMENR | OSPIMSMEN | svd[20:+1] |
| field_extra_in_svd | AHB2SMENR | OTGFSSMEN | svd[12:+1] |
| field_missing_in_svd | AHB2SMENR | PKASMEN |  |
| field_missing_in_svd | AHB2SMENR | SDMMC2SMEN |  |
| field_missing_in_svd | AHB2SMENR | USB_OTG_FSSMEN |  |
| field_missing_in_svd | AHB3ENR | OCTOSPI1EN |  |
| field_missing_in_svd | AHB3ENR | OCTOSPI2EN |  |
| field_extra_in_svd | AHB3ENR | OSPI1EN | svd[8:+1] |
| field_extra_in_svd | AHB3ENR | OSPI2EN | svd[9:+1] |
| field_missing_in_svd | AHB3RSTR | OCTOSPI1RST |  |
| field_missing_in_svd | AHB3RSTR | OCTOSPI2RST |  |
| field_extra_in_svd | AHB3RSTR | OSPI1RST | svd[8:+1] |
| field_extra_in_svd | AHB3RSTR | OSPI2RST | svd[9:+1] |
| field_missing_in_svd | AHB3SMENR | OCTOSPI1SMEN |  |
| field_extra_in_svd | AHB3SMENR | OCTOSPI2 | svd[9:+1] |
| field_missing_in_svd | AHB3SMENR | OCTOSPI2SMEN |  |
| field_extra_in_svd | AHB3SMENR | OSPI1SMEN | svd[8:+1] |
| field_missing_in_svd | BDCR | LSESYSDIS |  |
| field_extra_in_svd | CCIPR | SAI1SEL | svd[22:+2] |
| field_extra_in_svd | CCIPR | SAI2SEL | svd[24:+2] |
| field_missing_in_svd | CCIPR2 | LTDCDIV |  |
| field_missing_in_svd | CCIPR2 | OCTOSPISEL |  |
| field_extra_in_svd | CCIPR2 | OSPISEL | svd[20:+2] |
| field_extra_in_svd | CCIPR2 | PLLSAI2DIVR | svd[16:+2] |
| field_missing_in_svd | CSR | LPWRRSTF |  |
| field_missing_in_svd | CSR | LSIPREDIV |  |
| field_layout_mismatch | PLLCFGR | PLLP | ip[27:+5] svd[17:+1] |
| field_missing_in_svd | PLLCFGR | PLLPBIT |  |
| field_extra_in_svd | PLLCFGR | PLLPDIV | svd[27:+5] |
| field_missing_in_svd | PLLSAI1CFGR | PLLM |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLN |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLP |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLPBIT |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLPEN |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLQ |  |
| _… 30 more …_ | | | |

### adc/wba  (stm32wba50ke · ADC4 · stm32wba50.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AWD2CR | AWD2CH |  |
| field_extra_in_svd | AWD2CR | AWD2CH0 | svd[0:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH1 | svd[1:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH10 | svd[10:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH11 | svd[11:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH12 | svd[12:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH13 | svd[13:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH2 | svd[2:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH3 | svd[3:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH4 | svd[4:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH5 | svd[5:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH6 | svd[6:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH7 | svd[7:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH8 | svd[8:+1] |
| field_extra_in_svd | AWD2CR | AWD2CH9 | svd[9:+1] |
| field_missing_in_svd | AWD3CR | AWD3CH |  |
| field_extra_in_svd | AWD3CR | AWD3CH0 | svd[0:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH1 | svd[1:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH10 | svd[10:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH11 | svd[11:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH12 | svd[12:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH13 | svd[13:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH2 | svd[2:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH3 | svd[3:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH4 | svd[4:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH5 | svd[5:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH6 | svd[6:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH7 | svd[7:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH8 | svd[8:+1] |
| field_extra_in_svd | AWD3CR | AWD3CH9 | svd[9:+1] |
| field_extra_in_svd | CHSELR | CHSEL1 | svd[1:+1] |
| field_extra_in_svd | CHSELR | CHSEL10 | svd[10:+1] |
| field_extra_in_svd | CHSELR | CHSEL11 | svd[11:+1] |
| field_extra_in_svd | CHSELR | CHSEL12 | svd[12:+1] |
| field_extra_in_svd | CHSELR | CHSEL13 | svd[13:+1] |
| field_extra_in_svd | CHSELR | CHSEL2 | svd[2:+1] |
| field_extra_in_svd | CHSELR | CHSEL3 | svd[3:+1] |
| field_extra_in_svd | CHSELR | CHSEL4 | svd[4:+1] |
| field_extra_in_svd | CHSELR | CHSEL5 | svd[5:+1] |
| field_extra_in_svd | CHSELR | CHSEL6 | svd[6:+1] |
| field_extra_in_svd | CHSELR | CHSEL7 | svd[7:+1] |
| field_extra_in_svd | CHSELR | CHSEL8 | svd[8:+1] |
| field_extra_in_svd | CHSELR | CHSEL9 | svd[9:+1] |
| field_missing_in_svd | CHSELR_ALTERNATE | SQ |  |
| field_extra_in_svd | CHSELR_ALTERNATE | SQ1 | svd[0:+4] |
| field_extra_in_svd | CHSELR_ALTERNATE | SQ2 | svd[4:+4] |
| field_extra_in_svd | CHSELR_ALTERNATE | SQ3 | svd[8:+4] |
| field_extra_in_svd | CHSELR_ALTERNATE | SQ4 | svd[12:+4] |
| field_extra_in_svd | CHSELR_ALTERNATE | SQ5 | svd[16:+4] |
| field_extra_in_svd | CHSELR_ALTERNATE | SQ6 | svd[20:+4] |
| _… 28 more …_ | | | |

### gtzc/l5  (stm32l552cc · GTZC_MPCBB1 · stm32l552.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | FCR |  |  |
| register_missing_in_svd | IER |  |  |
| register_missing_in_svd | LCKVTR |  |  |
| register_extra_in_svd | LCKVTR1 |  | svd offset 0x10 |
| register_extra_in_svd | LCKVTR2 |  | svd offset 0x14 |
| register_missing_in_svd | SR |  |  |
| register_missing_in_svd | TZSC_CR |  |  |
| register_missing_in_svd | TZSC_PRIVCFGR1 |  |  |
| register_missing_in_svd | TZSC_PRIVCFGR2 |  |  |
| register_missing_in_svd | TZSC_SECCFGR1 |  |  |
| register_missing_in_svd | TZSC_SECCFGR2 |  |  |
| register_missing_in_svd | VCTR |  |  |
| register_extra_in_svd | VCTR0 |  | svd offset 0x100 |
| register_extra_in_svd | VCTR1 |  | svd offset 0x104 |
| register_extra_in_svd | VCTR10 |  | svd offset 0x128 |
| register_extra_in_svd | VCTR11 |  | svd offset 0x12C |
| register_extra_in_svd | VCTR12 |  | svd offset 0x130 |
| register_extra_in_svd | VCTR13 |  | svd offset 0x134 |
| register_extra_in_svd | VCTR14 |  | svd offset 0x138 |
| register_extra_in_svd | VCTR15 |  | svd offset 0x13C |
| register_extra_in_svd | VCTR16 |  | svd offset 0x140 |
| register_extra_in_svd | VCTR17 |  | svd offset 0x144 |
| register_extra_in_svd | VCTR18 |  | svd offset 0x148 |
| register_extra_in_svd | VCTR19 |  | svd offset 0x14C |
| register_extra_in_svd | VCTR2 |  | svd offset 0x108 |
| register_extra_in_svd | VCTR20 |  | svd offset 0x150 |
| register_extra_in_svd | VCTR21 |  | svd offset 0x154 |
| register_extra_in_svd | VCTR22 |  | svd offset 0x158 |
| register_extra_in_svd | VCTR23 |  | svd offset 0x15C |
| register_extra_in_svd | VCTR24 |  | svd offset 0x160 |
| register_extra_in_svd | VCTR25 |  | svd offset 0x164 |
| register_extra_in_svd | VCTR26 |  | svd offset 0x168 |
| register_extra_in_svd | VCTR27 |  | svd offset 0x16C |
| register_extra_in_svd | VCTR28 |  | svd offset 0x170 |
| register_extra_in_svd | VCTR29 |  | svd offset 0x174 |
| register_extra_in_svd | VCTR3 |  | svd offset 0x10C |
| register_extra_in_svd | VCTR30 |  | svd offset 0x178 |
| register_extra_in_svd | VCTR31 |  | svd offset 0x17C |
| register_extra_in_svd | VCTR32 |  | svd offset 0x180 |
| register_extra_in_svd | VCTR33 |  | svd offset 0x184 |
| register_extra_in_svd | VCTR34 |  | svd offset 0x188 |
| register_extra_in_svd | VCTR35 |  | svd offset 0x18C |
| register_extra_in_svd | VCTR36 |  | svd offset 0x190 |
| register_extra_in_svd | VCTR37 |  | svd offset 0x194 |
| register_extra_in_svd | VCTR38 |  | svd offset 0x198 |
| register_extra_in_svd | VCTR39 |  | svd offset 0x19C |
| register_extra_in_svd | VCTR4 |  | svd offset 0x110 |
| register_extra_in_svd | VCTR40 |  | svd offset 0x1A0 |
| register_extra_in_svd | VCTR41 |  | svd offset 0x1A4 |
| register_extra_in_svd | VCTR42 |  | svd offset 0x1A8 |
| _… 26 more …_ | | | |

### tamp/h5  (stm32h503cb · TAMP · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | ATCR1 | ATOSEL |  |
| field_extra_in_svd | ATCR1 | ATOSEL1 | svd[8:+2] |
| field_extra_in_svd | ATCR1 | ATOSEL2 | svd[10:+2] |
| field_extra_in_svd | ATCR1 | ATOSEL3 | svd[12:+2] |
| field_extra_in_svd | ATCR1 | TAMP1AM | svd[0:+1] |
| field_extra_in_svd | ATCR1 | TAMP2AM | svd[1:+1] |
| field_missing_in_svd | ATCR1 | TAMPAM |  |
| field_missing_in_svd | ATCR2 | ATOSEL |  |
| field_extra_in_svd | ATCR2 | ATOSEL1 | svd[8:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL2 | svd[11:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL3 | svd[14:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL4 | svd[17:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL5 | svd[20:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL6 | svd[23:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL7 | svd[26:+3] |
| field_extra_in_svd | ATCR2 | ATOSEL8 | svd[29:+3] |
| field_extra_in_svd | ATSEEDR | SEED | svd[0:+32] |
| register_extra_in_svd | BKP%sR |  | svd offset 0x100 |
| register_missing_in_svd | BKPR |  |  |
| register_extra_in_svd | CFGR |  | svd offset 0x20 |
| field_extra_in_svd | COUNT1R | COUNT | svd[0:+32] |
| field_extra_in_svd | CR1 | TAMP1E | svd[0:+1] |
| field_extra_in_svd | CR1 | TAMP2E | svd[1:+1] |
| field_missing_in_svd | CR1 | TAMPE |  |
| field_extra_in_svd | CR2 | TAMP1MSK | svd[16:+1] |
| field_extra_in_svd | CR2 | TAMP1NOER | svd[0:+1] |
| field_extra_in_svd | CR2 | TAMP1TRG | svd[24:+1] |
| field_extra_in_svd | CR2 | TAMP2MSK | svd[17:+1] |
| field_extra_in_svd | CR2 | TAMP2NOER | svd[1:+1] |
| field_extra_in_svd | CR2 | TAMP2TRG | svd[25:+1] |
| field_missing_in_svd | CR2 | TAMPMSK |  |
| field_missing_in_svd | CR2 | TAMPPOM |  |
| field_missing_in_svd | CR2 | TAMPTRG |  |
| field_extra_in_svd | CR3 | ITAMP11NOER | svd[10:+1] |
| field_missing_in_svd | CR3 | ITAMP11POM |  |
| field_extra_in_svd | CR3 | ITAMP12NOER | svd[11:+1] |
| field_missing_in_svd | CR3 | ITAMP12POM |  |
| field_extra_in_svd | CR3 | ITAMP13NOER | svd[12:+1] |
| field_missing_in_svd | CR3 | ITAMP13POM |  |
| field_extra_in_svd | CR3 | ITAMP15NOER | svd[14:+1] |
| field_missing_in_svd | CR3 | ITAMP15POM |  |
| field_extra_in_svd | CR3 | ITAMP1NOER | svd[0:+1] |
| field_missing_in_svd | CR3 | ITAMP1POM |  |
| field_extra_in_svd | CR3 | ITAMP2NOER | svd[1:+1] |
| field_missing_in_svd | CR3 | ITAMP2POM |  |
| field_extra_in_svd | CR3 | ITAMP3NOER | svd[2:+1] |
| field_missing_in_svd | CR3 | ITAMP3POM |  |
| field_extra_in_svd | CR3 | ITAMP4NOER | svd[3:+1] |
| field_missing_in_svd | CR3 | ITAMP4POM |  |
| field_extra_in_svd | CR3 | ITAMP5NOER | svd[4:+1] |
| _… 26 more …_ | | | |

### hash/v3  (stm32h503cb · HASH · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | CR | ALGO | ip[17:+4] svd[17:+2] |
| register_missing_in_svd | CSR |  |  |
| register_extra_in_svd | CSR0 |  | svd offset 0xF8 |
| register_extra_in_svd | CSR1 |  | svd offset 0xFC |
| register_extra_in_svd | CSR10 |  | svd offset 0x120 |
| register_extra_in_svd | CSR11 |  | svd offset 0x124 |
| register_extra_in_svd | CSR12 |  | svd offset 0x128 |
| register_extra_in_svd | CSR13 |  | svd offset 0x12C |
| register_extra_in_svd | CSR14 |  | svd offset 0x130 |
| register_extra_in_svd | CSR15 |  | svd offset 0x134 |
| register_extra_in_svd | CSR16 |  | svd offset 0x138 |
| register_extra_in_svd | CSR17 |  | svd offset 0x13C |
| register_extra_in_svd | CSR18 |  | svd offset 0x140 |
| register_extra_in_svd | CSR19 |  | svd offset 0x144 |
| register_extra_in_svd | CSR2 |  | svd offset 0x100 |
| register_extra_in_svd | CSR20 |  | svd offset 0x148 |
| register_extra_in_svd | CSR21 |  | svd offset 0x14C |
| register_extra_in_svd | CSR22 |  | svd offset 0x150 |
| register_extra_in_svd | CSR23 |  | svd offset 0x154 |
| register_extra_in_svd | CSR24 |  | svd offset 0x158 |
| register_extra_in_svd | CSR25 |  | svd offset 0x15C |
| register_extra_in_svd | CSR26 |  | svd offset 0x160 |
| register_extra_in_svd | CSR27 |  | svd offset 0x164 |
| register_extra_in_svd | CSR28 |  | svd offset 0x168 |
| register_extra_in_svd | CSR29 |  | svd offset 0x16C |
| register_extra_in_svd | CSR3 |  | svd offset 0x104 |
| register_extra_in_svd | CSR30 |  | svd offset 0x170 |
| register_extra_in_svd | CSR31 |  | svd offset 0x174 |
| register_extra_in_svd | CSR32 |  | svd offset 0x178 |
| register_extra_in_svd | CSR33 |  | svd offset 0x17C |
| register_extra_in_svd | CSR34 |  | svd offset 0x180 |
| register_extra_in_svd | CSR35 |  | svd offset 0x184 |
| register_extra_in_svd | CSR36 |  | svd offset 0x188 |
| register_extra_in_svd | CSR37 |  | svd offset 0x18C |
| register_extra_in_svd | CSR38 |  | svd offset 0x190 |
| register_extra_in_svd | CSR39 |  | svd offset 0x194 |
| register_extra_in_svd | CSR4 |  | svd offset 0x108 |
| register_extra_in_svd | CSR40 |  | svd offset 0x198 |
| register_extra_in_svd | CSR41 |  | svd offset 0x19C |
| register_extra_in_svd | CSR42 |  | svd offset 0x1A0 |
| register_extra_in_svd | CSR43 |  | svd offset 0x1A4 |
| register_extra_in_svd | CSR44 |  | svd offset 0x1A8 |
| register_extra_in_svd | CSR45 |  | svd offset 0x1AC |
| register_extra_in_svd | CSR46 |  | svd offset 0x1B0 |
| register_extra_in_svd | CSR47 |  | svd offset 0x1B4 |
| register_extra_in_svd | CSR48 |  | svd offset 0x1B8 |
| register_extra_in_svd | CSR49 |  | svd offset 0x1BC |
| register_extra_in_svd | CSR5 |  | svd offset 0x10C |
| register_extra_in_svd | CSR50 |  | svd offset 0x1C0 |
| register_extra_in_svd | CSR51 |  | svd offset 0x1C4 |
| _… 22 more …_ | | | |

### hash/v4  (stm32u535cb · HASH · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | CR | ALGO | ip[17:+4] svd[17:+2] |
| register_missing_in_svd | CSR |  |  |
| register_extra_in_svd | CSR0 |  | svd offset 0xF8 |
| register_extra_in_svd | CSR1 |  | svd offset 0xFC |
| register_extra_in_svd | CSR10 |  | svd offset 0x120 |
| register_extra_in_svd | CSR11 |  | svd offset 0x124 |
| register_extra_in_svd | CSR12 |  | svd offset 0x128 |
| register_extra_in_svd | CSR13 |  | svd offset 0x12C |
| register_extra_in_svd | CSR14 |  | svd offset 0x130 |
| register_extra_in_svd | CSR15 |  | svd offset 0x134 |
| register_extra_in_svd | CSR16 |  | svd offset 0x138 |
| register_extra_in_svd | CSR17 |  | svd offset 0x13C |
| register_extra_in_svd | CSR18 |  | svd offset 0x140 |
| register_extra_in_svd | CSR19 |  | svd offset 0x144 |
| register_extra_in_svd | CSR2 |  | svd offset 0x100 |
| register_extra_in_svd | CSR20 |  | svd offset 0x148 |
| register_extra_in_svd | CSR21 |  | svd offset 0x14C |
| register_extra_in_svd | CSR22 |  | svd offset 0x150 |
| register_extra_in_svd | CSR23 |  | svd offset 0x154 |
| register_extra_in_svd | CSR24 |  | svd offset 0x158 |
| register_extra_in_svd | CSR25 |  | svd offset 0x15C |
| register_extra_in_svd | CSR26 |  | svd offset 0x160 |
| register_extra_in_svd | CSR27 |  | svd offset 0x164 |
| register_extra_in_svd | CSR28 |  | svd offset 0x168 |
| register_extra_in_svd | CSR29 |  | svd offset 0x16C |
| register_extra_in_svd | CSR3 |  | svd offset 0x104 |
| register_extra_in_svd | CSR30 |  | svd offset 0x170 |
| register_extra_in_svd | CSR31 |  | svd offset 0x174 |
| register_extra_in_svd | CSR32 |  | svd offset 0x178 |
| register_extra_in_svd | CSR33 |  | svd offset 0x17C |
| register_extra_in_svd | CSR34 |  | svd offset 0x180 |
| register_extra_in_svd | CSR35 |  | svd offset 0x184 |
| register_extra_in_svd | CSR36 |  | svd offset 0x188 |
| register_extra_in_svd | CSR37 |  | svd offset 0x18C |
| register_extra_in_svd | CSR38 |  | svd offset 0x190 |
| register_extra_in_svd | CSR39 |  | svd offset 0x194 |
| register_extra_in_svd | CSR4 |  | svd offset 0x108 |
| register_extra_in_svd | CSR40 |  | svd offset 0x198 |
| register_extra_in_svd | CSR41 |  | svd offset 0x19C |
| register_extra_in_svd | CSR42 |  | svd offset 0x1A0 |
| register_extra_in_svd | CSR43 |  | svd offset 0x1A4 |
| register_extra_in_svd | CSR44 |  | svd offset 0x1A8 |
| register_extra_in_svd | CSR45 |  | svd offset 0x1AC |
| register_extra_in_svd | CSR46 |  | svd offset 0x1B0 |
| register_extra_in_svd | CSR47 |  | svd offset 0x1B4 |
| register_extra_in_svd | CSR48 |  | svd offset 0x1B8 |
| register_extra_in_svd | CSR49 |  | svd offset 0x1BC |
| register_extra_in_svd | CSR5 |  | svd offset 0x10C |
| register_extra_in_svd | CSR50 |  | svd offset 0x1C0 |
| register_extra_in_svd | CSR51 |  | svd offset 0x1C4 |
| _… 22 more …_ | | | |

### dbgmcu/h5  (stm32h503cb · DBGMCU · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | AHB1FZR | DBG_GPDMA1_0_STOP | svd[0:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA1_1_STOP | svd[1:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA1_2_STOP | svd[2:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA1_3_STOP | svd[3:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA1_4_STOP | svd[4:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA1_5_STOP | svd[5:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA1_6_STOP | svd[6:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA1_7_STOP | svd[7:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA2_0_STOP | svd[16:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA2_1_STOP | svd[17:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA2_2_STOP | svd[18:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA2_3_STOP | svd[19:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA2_4_STOP | svd[20:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA2_5_STOP | svd[21:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA2_6_STOP | svd[22:+1] |
| field_extra_in_svd | AHB1FZR | DBG_GPDMA2_7_STOP | svd[23:+1] |
| field_missing_in_svd | AHB1FZR | GPDMA1_STOP |  |
| field_missing_in_svd | AHB1FZR | GPDMA2_STOP |  |
| field_extra_in_svd | APB1HFZR | DBG_LPTIM2_STOP | svd[5:+1] |
| field_missing_in_svd | APB1HFZR | LPTIM2_STOP |  |
| field_extra_in_svd | APB1LFZR | DBG_I2C1_STOP | svd[21:+1] |
| field_extra_in_svd | APB1LFZR | DBG_I2C2_STOP | svd[22:+1] |
| field_extra_in_svd | APB1LFZR | DBG_I3C1_STOP | svd[23:+1] |
| field_extra_in_svd | APB1LFZR | DBG_IWDG_STOP | svd[12:+1] |
| field_extra_in_svd | APB1LFZR | DBG_TIM2_STOP | svd[0:+1] |
| field_extra_in_svd | APB1LFZR | DBG_TIM3_STOP | svd[1:+1] |
| field_extra_in_svd | APB1LFZR | DBG_TIM6_STOP | svd[4:+1] |
| field_extra_in_svd | APB1LFZR | DBG_TIM7_STOP | svd[5:+1] |
| field_extra_in_svd | APB1LFZR | DBG_WWDG_STOP | svd[11:+1] |
| field_missing_in_svd | APB1LFZR | I2C1_STOP |  |
| field_missing_in_svd | APB1LFZR | I2C2_STOP |  |
| field_missing_in_svd | APB1LFZR | I3C1_STOP |  |
| field_missing_in_svd | APB1LFZR | IWDG_STOP |  |
| field_missing_in_svd | APB1LFZR | TIM12_STOP |  |
| field_missing_in_svd | APB1LFZR | TIM13_STOP |  |
| field_missing_in_svd | APB1LFZR | TIM14_STOP |  |
| field_missing_in_svd | APB1LFZR | TIM2_STOP |  |
| field_missing_in_svd | APB1LFZR | TIM3_STOP |  |
| field_missing_in_svd | APB1LFZR | TIM4_STOP |  |
| field_missing_in_svd | APB1LFZR | TIM5_STOP |  |
| field_missing_in_svd | APB1LFZR | TIM6_STOP |  |
| field_missing_in_svd | APB1LFZR | TIM7_STOP |  |
| field_missing_in_svd | APB1LFZR | WWDG_STOP |  |
| field_extra_in_svd | APB2FZR | DBG_TIM1_STOP | svd[11:+1] |
| field_missing_in_svd | APB2FZR | TIM15_STOP |  |
| field_missing_in_svd | APB2FZR | TIM16_STOP |  |
| field_missing_in_svd | APB2FZR | TIM17_STOP |  |
| field_missing_in_svd | APB2FZR | TIM1_STOP |  |
| field_missing_in_svd | APB2FZR | TIM8_STOP |  |
| field_extra_in_svd | APB3FZR | DBG_I3C2_STOP | svd[12:+1] |
| _… 20 more …_ | | | |

### rcc/l5  (stm32l552cc · RCC · stm32l552.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB3ENR | OCTOSPI1EN |  |
| field_extra_in_svd | AHB3ENR | OSPI1EN | svd[8:+1] |
| field_missing_in_svd | AHB3RSTR | OCTOSPI1RST |  |
| field_extra_in_svd | AHB3RSTR | OSPI1RST | svd[8:+1] |
| field_missing_in_svd | AHB3SECSR | OCTOSPI1SECF |  |
| field_extra_in_svd | AHB3SECSR | OSPI1SECF | svd[8:+1] |
| field_missing_in_svd | AHB3SMENR | OCTOSPI1SMEN |  |
| field_extra_in_svd | AHB3SMENR | OSPI1SMEN | svd[8:+1] |
| field_extra_in_svd | APB1ENR1 | SP3EN | svd[15:+1] |
| field_missing_in_svd | APB1ENR1 | SPI3EN |  |
| field_missing_in_svd | APB1ENR2 | USBEN |  |
| field_extra_in_svd | APB1ENR2 | USBFSEN | svd[21:+1] |
| field_extra_in_svd | APB1RSTR2 | USBFSRST | svd[21:+1] |
| field_missing_in_svd | APB1RSTR2 | USBRST |  |
| field_extra_in_svd | APB1SECSR2 | USBFSSECF | svd[21:+1] |
| field_missing_in_svd | APB1SECSR2 | USBSECF |  |
| field_extra_in_svd | APB1SMENR2 | USBFSSMEN | svd[21:+1] |
| field_missing_in_svd | APB1SMENR2 | USBSMEN |  |
| register_missing_in_svd | CCIPR |  |  |
| register_extra_in_svd | CCIPR1 |  | svd offset 0x88 |
| field_missing_in_svd | CCIPR2 | OCTOSPISEL |  |
| field_extra_in_svd | CCIPR2 | OSPISEL | svd[20:+2] |
| field_missing_in_svd | CSR | IWDGRSTF |  |
| field_extra_in_svd | CSR | IWWDGRSTF | svd[29:+1] |
| field_missing_in_svd | CSR | LPWRRSTF |  |
| field_extra_in_svd | CSR | LPWRSTF | svd[31:+1] |
| field_layout_mismatch | PLLCFGR | PLLP | ip[27:+5] svd[17:+1] |
| field_missing_in_svd | PLLCFGR | PLLPBIT |  |
| field_extra_in_svd | PLLCFGR | PLLPDIV | svd[27:+5] |
| field_missing_in_svd | PLLSAI1CFGR | PLLM |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLN |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLP |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLPBIT |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLPEN |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLQ |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLQEN |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLR |  |
| field_missing_in_svd | PLLSAI1CFGR | PLLREN |  |
| field_extra_in_svd | PLLSAI1CFGR | PLLSAI1M | svd[4:+4] |
| field_extra_in_svd | PLLSAI1CFGR | PLLSAI1N | svd[8:+7] |
| field_extra_in_svd | PLLSAI1CFGR | PLLSAI1P | svd[17:+1] |
| field_extra_in_svd | PLLSAI1CFGR | PLLSAI1PDIV | svd[27:+5] |
| field_extra_in_svd | PLLSAI1CFGR | PLLSAI1PEN | svd[16:+1] |
| field_extra_in_svd | PLLSAI1CFGR | PLLSAI1Q | svd[21:+2] |
| field_extra_in_svd | PLLSAI1CFGR | PLLSAI1QEN | svd[20:+1] |
| field_extra_in_svd | PLLSAI1CFGR | PLLSAI1R | svd[25:+2] |
| field_extra_in_svd | PLLSAI1CFGR | PLLSAI1REN | svd[24:+1] |
| field_extra_in_svd | PLLSAI1CFGR | PLLSAI1SRC | svd[0:+2] |
| field_missing_in_svd | PLLSAI1CFGR | PLLSRC |  |
| field_missing_in_svd | PLLSAI2CFGR | PLLM |  |
| _… 19 more …_ | | | |

### pwr/h7rm0455  (stm32h7a3ag · PWR · stm32h7b3.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CPUCR | PDDS_D1 |  |
| field_missing_in_svd | CPUCR | PDDS_D2 |  |
| field_missing_in_svd | CPUCR | PDDS_D3 |  |
| field_extra_in_svd | CPUCR | PDDS_SRD | svd[2:+1] |
| field_extra_in_svd | CPUCR | RETDS_CD | svd[0:+1] |
| field_missing_in_svd | CPUCR | RUN_D3 |  |
| field_extra_in_svd | CPUCR | RUN_SRD | svd[11:+1] |
| field_missing_in_svd | CPUCR | SBF_D1 |  |
| field_missing_in_svd | CPUCR | SBF_D2 |  |
| field_extra_in_svd | CR1 | AHBRAM1SO | svd[22:+1] |
| field_extra_in_svd | CR1 | AHBRAM2SO | svd[23:+1] |
| field_extra_in_svd | CR1 | AVD_READY | svd[13:+1] |
| field_extra_in_svd | CR1 | AXIRAM1SO | svd[19:+1] |
| field_extra_in_svd | CR1 | AXIRAM2SO | svd[20:+1] |
| field_extra_in_svd | CR1 | AXIRAM3SO | svd[21:+1] |
| field_extra_in_svd | CR1 | BOOSTE | svd[12:+1] |
| field_extra_in_svd | CR1 | GFXSO | svd[25:+1] |
| field_extra_in_svd | CR1 | HSITFSO | svd[26:+1] |
| field_extra_in_svd | CR1 | ITCMSO | svd[24:+1] |
| field_extra_in_svd | CR1 | SRDRAMSO | svd[27:+1] |
| field_missing_in_svd | CR2 | VBATH |  |
| field_missing_in_svd | CR2 | VBATL |  |
| field_missing_in_svd | CR3 | SDEN |  |
| field_missing_in_svd | CR3 | SDEXTHP |  |
| field_missing_in_svd | CR3 | SDEXTRDY |  |
| field_missing_in_svd | CR3 | SDLEVEL |  |
| field_extra_in_svd | CR3 | SMPSEN | svd[2:+1] |
| field_extra_in_svd | CR3 | SMPSEXTHP | svd[3:+1] |
| field_extra_in_svd | CR3 | SMPSEXTRDY | svd[16:+1] |
| field_extra_in_svd | CR3 | SMPSLEVEL | svd[4:+2] |
| field_extra_in_svd | CSR1 | MMCVDO | svd[17:+1] |
| register_missing_in_svd | D3CR |  |  |
| register_extra_in_svd | SRDCR |  | svd offset 0x18 |
| field_missing_in_svd | WKUPCR | WKUPC |  |
| field_extra_in_svd | WKUPCR | WKUPC1 | svd[0:+1] |
| field_extra_in_svd | WKUPCR | WKUPC2 | svd[1:+1] |
| field_extra_in_svd | WKUPCR | WKUPC3 | svd[2:+1] |
| field_extra_in_svd | WKUPCR | WKUPC4 | svd[3:+1] |
| field_extra_in_svd | WKUPCR | WKUPC5 | svd[4:+1] |
| field_extra_in_svd | WKUPCR | WKUPC6 | svd[5:+1] |
| field_missing_in_svd | WKUPEPR | WKUPEN |  |
| field_extra_in_svd | WKUPEPR | WKUPEN1 | svd[0:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN2 | svd[1:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN3 | svd[2:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN4 | svd[3:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN5 | svd[4:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN6 | svd[5:+1] |
| field_missing_in_svd | WKUPEPR | WKUPP |  |
| field_extra_in_svd | WKUPEPR | WKUPP1 | svd[8:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP2 | svd[9:+1] |
| _… 18 more …_ | | | |

### pwr/u5  (stm32u535cb · PWR · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR1 | SRAM3PD |  |
| field_missing_in_svd | CR2 | DMA2DRAMPDS |  |
| field_missing_in_svd | CR2 | PKARAMPDS |  |
| field_missing_in_svd | CR2 | SRAM3PDS1 |  |
| field_missing_in_svd | CR2 | SRAM3PDS2 |  |
| field_missing_in_svd | CR2 | SRAM3PDS3 |  |
| field_missing_in_svd | CR2 | SRAM3PDS4 |  |
| field_missing_in_svd | CR2 | SRAM3PDS5 |  |
| field_missing_in_svd | CR2 | SRAM3PDS6 |  |
| field_missing_in_svd | CR2 | SRAM3PDS7 |  |
| field_missing_in_svd | CR2 | SRAM3PDS8 |  |
| register_extra_in_svd | CR4 |  | svd offset 0xA8 |
| register_extra_in_svd | CR5 |  | svd offset 0xAC |
| register_missing_in_svd | DBPCR |  |  |
| register_extra_in_svd | DBPR |  | svd offset 0x28 |
| register_missing_in_svd | PDCR |  |  |
| register_extra_in_svd | PDCRA |  | svd offset 0x54 |
| register_extra_in_svd | PDCRB |  | svd offset 0x5C |
| register_extra_in_svd | PDCRC |  | svd offset 0x64 |
| register_extra_in_svd | PDCRD |  | svd offset 0x6C |
| register_extra_in_svd | PDCRE |  | svd offset 0x74 |
| register_extra_in_svd | PDCRF |  | svd offset 0x7C |
| register_extra_in_svd | PDCRG |  | svd offset 0x84 |
| register_extra_in_svd | PDCRH |  | svd offset 0x8C |
| register_extra_in_svd | PDCRI |  | svd offset 0x94 |
| register_extra_in_svd | PDCRJ |  | svd offset 0x9C |
| register_missing_in_svd | PUCR |  |  |
| register_extra_in_svd | PUCRA |  | svd offset 0x50 |
| register_extra_in_svd | PUCRB |  | svd offset 0x58 |
| register_extra_in_svd | PUCRC |  | svd offset 0x60 |
| register_extra_in_svd | PUCRD |  | svd offset 0x68 |
| register_extra_in_svd | PUCRE |  | svd offset 0x70 |
| register_extra_in_svd | PUCRF |  | svd offset 0x78 |
| register_extra_in_svd | PUCRG |  | svd offset 0x80 |
| register_extra_in_svd | PUCRH |  | svd offset 0x88 |
| register_extra_in_svd | PUCRI |  | svd offset 0x90 |
| register_extra_in_svd | PUCRJ |  | svd offset 0x98 |
| field_extra_in_svd | SECCFGR | WUP2SEC | svd[1:+1] |
| field_extra_in_svd | SECCFGR | WUP3SEC | svd[2:+1] |
| field_extra_in_svd | SECCFGR | WUP4SEC | svd[3:+1] |
| field_extra_in_svd | SECCFGR | WUP5SEC | svd[4:+1] |
| field_extra_in_svd | SECCFGR | WUP6SEC | svd[5:+1] |
| field_extra_in_svd | SECCFGR | WUP7SEC | svd[6:+1] |
| field_extra_in_svd | SECCFGR | WUP8SEC | svd[7:+1] |
| field_missing_in_svd | UCPDR | UCPD_DBDIS |  |
| field_missing_in_svd | UCPDR | UCPD_STBY |  |
| field_missing_in_svd | VOSR | USBBOOSTEN |  |
| field_missing_in_svd | VOSR | USBBOOSTRDY |  |
| field_missing_in_svd | VOSR | USBPWREN |  |
| field_missing_in_svd | VOSR | VDD11USBDIS |  |
| _… 18 more …_ | | | |

### adc/v4  (stm32h723ve · ADC1 · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AWD2CR | AWD2CH |  |
| field_extra_in_svd | AWD2CR | AWD2CH%s | svd[0:+1] |
| field_missing_in_svd | AWD3CR | AWD3CH |  |
| field_extra_in_svd | AWD3CR | AWD3CH%s | svd[0:+1] |
| field_extra_in_svd | CFGR2 | OSVR | svd[16:+10] |
| field_missing_in_svd | CFGR2 | OVSR |  |
| field_extra_in_svd | CFGR2 | RSHIFT%s | svd[11:+1] |
| field_missing_in_svd | CFGR2 | RSHIFT1 |  |
| field_missing_in_svd | CFGR2 | RSHIFT2 |  |
| field_missing_in_svd | CFGR2 | RSHIFT3 |  |
| field_missing_in_svd | CFGR2 | RSHIFT4 |  |
| field_extra_in_svd | CR | LINCALRDYW%s | svd[22:+1] |
| field_missing_in_svd | CR | LINCALRDYW1 |  |
| field_missing_in_svd | CR | LINCALRDYW2 |  |
| field_missing_in_svd | CR | LINCALRDYW3 |  |
| field_missing_in_svd | CR | LINCALRDYW4 |  |
| field_missing_in_svd | CR | LINCALRDYW5 |  |
| field_missing_in_svd | CR | LINCALRDYW6 |  |
| field_missing_in_svd | DIFSEL | DIFSEL |  |
| field_extra_in_svd | DIFSEL | DIFSEL%s | svd[0:+1] |
| field_layout_mismatch | DR | RDATA | ip[0:+16] svd[0:+32] |
| field_extra_in_svd | IER | AWD%sIE | svd[7:+1] |
| field_missing_in_svd | IER | AWD1IE |  |
| field_missing_in_svd | IER | AWD2IE |  |
| field_missing_in_svd | IER | AWD3IE |  |
| field_extra_in_svd | ISR | AWD%s | svd[7:+1] |
| field_missing_in_svd | ISR | AWD1 |  |
| field_missing_in_svd | ISR | AWD2 |  |
| field_missing_in_svd | ISR | AWD3 |  |
| register_missing_in_svd | JDR |  |  |
| register_extra_in_svd | JDR%s |  | svd offset 0x80 |
| field_missing_in_svd | JSQR | JSQ |  |
| field_extra_in_svd | JSQR | JSQ%s | svd[9:+5] |
| register_missing_in_svd | OFR |  |  |
| register_extra_in_svd | OFR%s |  | svd offset 0x60 |
| field_missing_in_svd | PCSEL | PCSEL |  |
| field_extra_in_svd | PCSEL | PCSEL0 | svd[0:+1] |
| field_extra_in_svd | PCSEL | PCSEL1 | svd[1:+1] |
| field_extra_in_svd | PCSEL | PCSEL10 | svd[10:+1] |
| field_extra_in_svd | PCSEL | PCSEL11 | svd[11:+1] |
| field_extra_in_svd | PCSEL | PCSEL12 | svd[12:+1] |
| field_extra_in_svd | PCSEL | PCSEL13 | svd[13:+1] |
| field_extra_in_svd | PCSEL | PCSEL14 | svd[14:+1] |
| field_extra_in_svd | PCSEL | PCSEL15 | svd[15:+1] |
| field_extra_in_svd | PCSEL | PCSEL16 | svd[16:+1] |
| field_extra_in_svd | PCSEL | PCSEL17 | svd[17:+1] |
| field_extra_in_svd | PCSEL | PCSEL18 | svd[18:+1] |
| field_extra_in_svd | PCSEL | PCSEL19 | svd[19:+1] |
| field_extra_in_svd | PCSEL | PCSEL2 | svd[2:+1] |
| field_extra_in_svd | PCSEL | PCSEL3 | svd[3:+1] |
| _… 17 more …_ | | | |

### rcc/f3v1  (stm32f302cb · RCC · stm32f302.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | ADC34EN |  |
| field_missing_in_svd | AHBENR | FLASHEN |  |
| field_extra_in_svd | AHBENR | FLITFEN | svd[4:+1] |
| field_missing_in_svd | AHBENR | GPIOAEN |  |
| field_missing_in_svd | AHBENR | GPIOBEN |  |
| field_missing_in_svd | AHBENR | GPIOCEN |  |
| field_missing_in_svd | AHBENR | GPIODEN |  |
| field_missing_in_svd | AHBENR | GPIOEEN |  |
| field_missing_in_svd | AHBENR | GPIOFEN |  |
| field_missing_in_svd | AHBENR | GPIOGEN |  |
| field_missing_in_svd | AHBENR | GPIOHEN |  |
| field_extra_in_svd | AHBENR | IOPAEN | svd[17:+1] |
| field_extra_in_svd | AHBENR | IOPBEN | svd[18:+1] |
| field_extra_in_svd | AHBENR | IOPCEN | svd[19:+1] |
| field_extra_in_svd | AHBENR | IOPDEN | svd[20:+1] |
| field_extra_in_svd | AHBENR | IOPEEN | svd[21:+1] |
| field_extra_in_svd | AHBENR | IOPFEN | svd[22:+1] |
| field_extra_in_svd | AHBENR | IOPGEN | svd[23:+1] |
| field_extra_in_svd | AHBENR | IOPHEN | svd[16:+1] |
| field_missing_in_svd | AHBRSTR | ADC34RST |  |
| field_missing_in_svd | AHBRSTR | GPIOARST |  |
| field_missing_in_svd | AHBRSTR | GPIOBRST |  |
| field_missing_in_svd | AHBRSTR | GPIOCRST |  |
| field_missing_in_svd | AHBRSTR | GPIODRST |  |
| field_missing_in_svd | AHBRSTR | GPIOERST |  |
| field_missing_in_svd | AHBRSTR | GPIOFRST |  |
| field_missing_in_svd | AHBRSTR | GPIOGRST |  |
| field_missing_in_svd | AHBRSTR | GPIOHRST |  |
| field_extra_in_svd | AHBRSTR | IOPARST | svd[17:+1] |
| field_extra_in_svd | AHBRSTR | IOPBRST | svd[18:+1] |
| field_extra_in_svd | AHBRSTR | IOPCRST | svd[19:+1] |
| field_extra_in_svd | AHBRSTR | IOPDRST | svd[20:+1] |
| field_extra_in_svd | AHBRSTR | IOPERST | svd[21:+1] |
| field_extra_in_svd | AHBRSTR | IOPFRST | svd[22:+1] |
| field_extra_in_svd | AHBRSTR | IOPGRST | svd[23:+1] |
| field_extra_in_svd | AHBRSTR | IOPHRST | svd[16:+1] |
| field_extra_in_svd | APB1ENR | DAC1EN | svd[29:+1] |
| field_missing_in_svd | APB1ENR | DAC2EN |  |
| field_missing_in_svd | APB1ENR | DACEN |  |
| field_missing_in_svd | APB1ENR | TIM7EN |  |
| field_extra_in_svd | APB1RSTR | DAC1RST | svd[29:+1] |
| field_missing_in_svd | APB1RSTR | DAC2RST |  |
| field_missing_in_svd | APB1RSTR | DACRST |  |
| field_missing_in_svd | APB1RSTR | TIM7RST |  |
| field_missing_in_svd | APB2ENR | DBGMCUEN |  |
| field_missing_in_svd | APB2ENR | HRTIM1EN |  |
| field_missing_in_svd | APB2ENR | TIM19EN |  |
| field_missing_in_svd | APB2ENR | TIM20EN |  |
| field_missing_in_svd | APB2ENR | TIM8EN |  |
| field_missing_in_svd | APB2RSTR | DBGMCURST |  |
| _… 17 more …_ | | | |

### flash/h7  (stm32h723ve · FLASH · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | ACR | LATENCY | ip[0:+3] svd[0:+4] |
| register_missing_in_svd | BANK |  |  |
| register_missing_in_svd | BOOT4_CUR |  |  |
| register_missing_in_svd | BOOT4_PRG |  |  |
| register_extra_in_svd | BOOT_CUR |  | svd offset 0x40 |
| register_missing_in_svd | BOOT_CURR |  |  |
| register_extra_in_svd | BOOT_PRG |  | svd offset 0x44 |
| register_missing_in_svd | BOOT_PRGR |  |  |
| register_offset_mismatch | CCR |  | ip=0x10 svd=0x14 |
| register_offset_mismatch | CR |  | ip=0x8 svd=0xC |
| register_offset_mismatch | CRCCR |  | ip=0x4C svd=0x50 |
| field_layout_mismatch | CRCCR | ALL_BANK | ip[7:+1] svd[22:+1] |
| register_offset_mismatch | CRCEADDR |  | ip=0x54 svd=0x58 |
| field_layout_mismatch | CRCEADDR | CRC_END_ADDR | ip[0:+32] svd[2:+18] |
| register_offset_mismatch | CRCSADDR |  | ip=0x50 svd=0x54 |
| field_layout_mismatch | CRCSADDR | CRC_START_ADDR | ip[0:+32] svd[2:+18] |
| register_extra_in_svd | ECC_FAR |  | svd offset 0x60 |
| register_missing_in_svd | FAR |  |  |
| register_offset_mismatch | KEYR |  | ip=0x0 svd=0x4 |
| field_extra_in_svd | KEYR | KEYKEYRR | svd[0:+32] |
| field_missing_in_svd | OPTCR | MER |  |
| field_missing_in_svd | OPTCR | SWAP_BANK |  |
| field_extra_in_svd | OPTKEYR | OPTKEYR | svd[0:+32] |
| register_extra_in_svd | OPTSR2_CUR |  | svd offset 0x70 |
| register_extra_in_svd | OPTSR2_PRG |  | svd offset 0x74 |
| field_missing_in_svd | OPTSR_CUR | BOOT_CM4 |  |
| field_missing_in_svd | OPTSR_CUR | BOOT_CM7 |  |
| field_missing_in_svd | OPTSR_CUR | FZ_IWDG_SDBY |  |
| field_missing_in_svd | OPTSR_CUR | FZ_IWDG_STOP |  |
| field_missing_in_svd | OPTSR_CUR | IWDG1_HW |  |
| field_extra_in_svd | OPTSR_CUR | IWDG1_SW | svd[4:+1] |
| field_extra_in_svd | OPTSR_CUR | IWDG_FZ_SDBY | svd[18:+1] |
| field_extra_in_svd | OPTSR_CUR | IWDG_FZ_STOP | svd[17:+1] |
| field_extra_in_svd | OPTSR_CUR | NRST_STBY_D1 | svd[7:+1] |
| field_extra_in_svd | OPTSR_CUR | NRST_STOP_D1 | svd[6:+1] |
| field_missing_in_svd | OPTSR_CUR | PERSO_OK |  |
| field_missing_in_svd | OPTSR_CUR | RSS1 |  |
| field_missing_in_svd | OPTSR_CUR | SWAP_BANK_OPT |  |
| field_missing_in_svd | OPTSR_CUR | nRST_STBY_D1 |  |
| field_missing_in_svd | OPTSR_CUR | nRST_STOP_D1 |  |
| field_missing_in_svd | OPTSR_PRG | BOOT_CM4 |  |
| field_missing_in_svd | OPTSR_PRG | BOOT_CM7 |  |
| field_missing_in_svd | OPTSR_PRG | FZ_IWDG_SDBY |  |
| field_missing_in_svd | OPTSR_PRG | FZ_IWDG_STOP |  |
| field_missing_in_svd | OPTSR_PRG | IWDG1_HW |  |
| field_extra_in_svd | OPTSR_PRG | IWDG1_SW | svd[4:+1] |
| field_extra_in_svd | OPTSR_PRG | IWDG_FZ_SDBY | svd[18:+1] |
| field_extra_in_svd | OPTSR_PRG | IWDG_FZ_STOP | svd[17:+1] |
| field_extra_in_svd | OPTSR_PRG | NRST_STBY_D1 | svd[7:+1] |
| field_extra_in_svd | OPTSR_PRG | NRST_STOP_D1 | svd[6:+1] |
| _… 16 more …_ | | | |

### mdios/v1  (stm32h723ve · MDIOS · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | DINR |  |  |
| register_extra_in_svd | DINR0 |  | svd offset 0x1C |
| register_extra_in_svd | DINR1 |  | svd offset 0x20 |
| register_extra_in_svd | DINR10 |  | svd offset 0x44 |
| register_extra_in_svd | DINR11 |  | svd offset 0x48 |
| register_extra_in_svd | DINR12 |  | svd offset 0x4C |
| register_extra_in_svd | DINR13 |  | svd offset 0x50 |
| register_extra_in_svd | DINR14 |  | svd offset 0x54 |
| register_extra_in_svd | DINR15 |  | svd offset 0x58 |
| register_extra_in_svd | DINR16 |  | svd offset 0x5C |
| register_extra_in_svd | DINR17 |  | svd offset 0x60 |
| register_extra_in_svd | DINR18 |  | svd offset 0x64 |
| register_extra_in_svd | DINR19 |  | svd offset 0x68 |
| register_extra_in_svd | DINR2 |  | svd offset 0x24 |
| register_extra_in_svd | DINR20 |  | svd offset 0x6C |
| register_extra_in_svd | DINR21 |  | svd offset 0x70 |
| register_extra_in_svd | DINR22 |  | svd offset 0x74 |
| register_extra_in_svd | DINR23 |  | svd offset 0x78 |
| register_extra_in_svd | DINR24 |  | svd offset 0x7C |
| register_extra_in_svd | DINR25 |  | svd offset 0x80 |
| register_extra_in_svd | DINR26 |  | svd offset 0x84 |
| register_extra_in_svd | DINR27 |  | svd offset 0x88 |
| register_extra_in_svd | DINR28 |  | svd offset 0x8C |
| register_extra_in_svd | DINR29 |  | svd offset 0x90 |
| register_extra_in_svd | DINR3 |  | svd offset 0x28 |
| register_extra_in_svd | DINR30 |  | svd offset 0x94 |
| register_extra_in_svd | DINR31 |  | svd offset 0x98 |
| register_extra_in_svd | DINR4 |  | svd offset 0x2C |
| register_extra_in_svd | DINR5 |  | svd offset 0x30 |
| register_extra_in_svd | DINR6 |  | svd offset 0x34 |
| register_extra_in_svd | DINR7 |  | svd offset 0x38 |
| register_extra_in_svd | DINR8 |  | svd offset 0x3C |
| register_extra_in_svd | DINR9 |  | svd offset 0x40 |
| register_missing_in_svd | DOUTR |  |  |
| register_extra_in_svd | DOUTR0 |  | svd offset 0x9C |
| register_extra_in_svd | DOUTR1 |  | svd offset 0xA0 |
| register_extra_in_svd | DOUTR10 |  | svd offset 0xC4 |
| register_extra_in_svd | DOUTR11 |  | svd offset 0xC8 |
| register_extra_in_svd | DOUTR12 |  | svd offset 0xCC |
| register_extra_in_svd | DOUTR13 |  | svd offset 0xD0 |
| register_extra_in_svd | DOUTR14 |  | svd offset 0xD4 |
| register_extra_in_svd | DOUTR15 |  | svd offset 0xD8 |
| register_extra_in_svd | DOUTR16 |  | svd offset 0xDC |
| register_extra_in_svd | DOUTR17 |  | svd offset 0xE0 |
| register_extra_in_svd | DOUTR18 |  | svd offset 0xE4 |
| register_extra_in_svd | DOUTR19 |  | svd offset 0xE8 |
| register_extra_in_svd | DOUTR2 |  | svd offset 0xA4 |
| register_extra_in_svd | DOUTR20 |  | svd offset 0xEC |
| register_extra_in_svd | DOUTR21 |  | svd offset 0xF0 |
| register_extra_in_svd | DOUTR22 |  | svd offset 0xF4 |
| _… 16 more …_ | | | |

### ramcfg/wba  (stm32wba50ke · RAMCFG · stm32wba50.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | M2WPR1 | P0WP | svd[0:+1] |
| field_extra_in_svd | M2WPR1 | P10WP | svd[10:+1] |
| field_extra_in_svd | M2WPR1 | P11WP | svd[11:+1] |
| field_extra_in_svd | M2WPR1 | P12WP | svd[12:+1] |
| field_extra_in_svd | M2WPR1 | P13WP | svd[13:+1] |
| field_extra_in_svd | M2WPR1 | P14WP | svd[14:+1] |
| field_extra_in_svd | M2WPR1 | P15WP | svd[15:+1] |
| field_extra_in_svd | M2WPR1 | P16WP | svd[16:+1] |
| field_extra_in_svd | M2WPR1 | P17WP | svd[17:+1] |
| field_extra_in_svd | M2WPR1 | P18WP | svd[18:+1] |
| field_extra_in_svd | M2WPR1 | P19WP | svd[19:+1] |
| field_extra_in_svd | M2WPR1 | P1WP | svd[1:+1] |
| field_extra_in_svd | M2WPR1 | P20WP | svd[20:+1] |
| field_extra_in_svd | M2WPR1 | P21WP | svd[21:+1] |
| field_extra_in_svd | M2WPR1 | P22WP | svd[22:+1] |
| field_extra_in_svd | M2WPR1 | P23WP | svd[23:+1] |
| field_extra_in_svd | M2WPR1 | P24WP | svd[24:+1] |
| field_extra_in_svd | M2WPR1 | P25WP | svd[25:+1] |
| field_extra_in_svd | M2WPR1 | P26WP | svd[26:+1] |
| field_extra_in_svd | M2WPR1 | P27WP | svd[27:+1] |
| field_extra_in_svd | M2WPR1 | P28WP | svd[28:+1] |
| field_extra_in_svd | M2WPR1 | P29WP | svd[29:+1] |
| field_extra_in_svd | M2WPR1 | P2WP | svd[2:+1] |
| field_extra_in_svd | M2WPR1 | P30WP | svd[30:+1] |
| field_extra_in_svd | M2WPR1 | P31WP | svd[31:+1] |
| field_extra_in_svd | M2WPR1 | P3WP | svd[3:+1] |
| field_extra_in_svd | M2WPR1 | P4WP | svd[4:+1] |
| field_extra_in_svd | M2WPR1 | P5WP | svd[5:+1] |
| field_extra_in_svd | M2WPR1 | P6WP | svd[6:+1] |
| field_extra_in_svd | M2WPR1 | P7WP | svd[7:+1] |
| field_extra_in_svd | M2WPR1 | P8WP | svd[8:+1] |
| field_extra_in_svd | M2WPR1 | P9WP | svd[9:+1] |
| field_missing_in_svd | M2WPR1 | PWP |  |
| field_extra_in_svd | M2WPR2 | P32WP | svd[0:+1] |
| field_extra_in_svd | M2WPR2 | P33WP | svd[1:+1] |
| field_extra_in_svd | M2WPR2 | P34WP | svd[2:+1] |
| field_extra_in_svd | M2WPR2 | P35WP | svd[3:+1] |
| field_extra_in_svd | M2WPR2 | P36WP | svd[4:+1] |
| field_extra_in_svd | M2WPR2 | P37WP | svd[5:+1] |
| field_extra_in_svd | M2WPR2 | P38WP | svd[6:+1] |
| field_extra_in_svd | M2WPR2 | P39WP | svd[7:+1] |
| field_extra_in_svd | M2WPR2 | P40WP | svd[8:+1] |
| field_extra_in_svd | M2WPR2 | P41WP | svd[9:+1] |
| field_extra_in_svd | M2WPR2 | P42WP | svd[10:+1] |
| field_extra_in_svd | M2WPR2 | P43WP | svd[11:+1] |
| field_extra_in_svd | M2WPR2 | P44WP | svd[12:+1] |
| field_extra_in_svd | M2WPR2 | P45WP | svd[13:+1] |
| field_extra_in_svd | M2WPR2 | P46WP | svd[14:+1] |
| field_extra_in_svd | M2WPR2 | P47WP | svd[15:+1] |
| field_extra_in_svd | M2WPR2 | P48WP | svd[16:+1] |
| _… 16 more …_ | | | |

### adc/h7rs  (stm32h7r3a8 · ADC1 · stm32h7r.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | CFGR | EXTSEL | ip[5:+1] svd[5:+5] |
| field_extra_in_svd | IER | AWD1IE | svd[7:+1] |
| field_extra_in_svd | IER | AWD2IE | svd[8:+1] |
| field_extra_in_svd | IER | AWD3IE | svd[9:+1] |
| field_missing_in_svd | IER | AWDIE |  |
| field_missing_in_svd | ISR | AWD |  |
| field_extra_in_svd | ISR | AWD1 | svd[7:+1] |
| field_extra_in_svd | ISR | AWD2 | svd[8:+1] |
| field_extra_in_svd | ISR | AWD3 | svd[9:+1] |
| register_missing_in_svd | JDR |  |  |
| register_extra_in_svd | JDR1 |  | svd offset 0x80 |
| register_extra_in_svd | JDR2 |  | svd offset 0x84 |
| register_extra_in_svd | JDR3 |  | svd offset 0x88 |
| register_extra_in_svd | JDR4 |  | svd offset 0x8C |
| field_missing_in_svd | JSQR | JSQ |  |
| field_extra_in_svd | JSQR | JSQ1 | svd[9:+5] |
| field_extra_in_svd | JSQR | JSQ2 | svd[15:+5] |
| field_extra_in_svd | JSQR | JSQ3 | svd[21:+5] |
| field_extra_in_svd | JSQR | JSQ4 | svd[27:+5] |
| register_missing_in_svd | OFR |  |  |
| register_extra_in_svd | OFR1 |  | svd offset 0x60 |
| register_extra_in_svd | OFR2 |  | svd offset 0x64 |
| register_extra_in_svd | OFR3 |  | svd offset 0x68 |
| register_extra_in_svd | OFR4 |  | svd offset 0x6C |
| field_missing_in_svd | SMPR1 | SMP |  |
| field_extra_in_svd | SMPR1 | SMP0 | svd[0:+3] |
| field_extra_in_svd | SMPR1 | SMP1 | svd[3:+3] |
| field_extra_in_svd | SMPR1 | SMP2 | svd[6:+3] |
| field_extra_in_svd | SMPR1 | SMP3 | svd[9:+3] |
| field_extra_in_svd | SMPR1 | SMP4 | svd[12:+3] |
| field_extra_in_svd | SMPR1 | SMP5 | svd[15:+3] |
| field_extra_in_svd | SMPR1 | SMP6 | svd[18:+3] |
| field_extra_in_svd | SMPR1 | SMP7 | svd[21:+3] |
| field_extra_in_svd | SMPR1 | SMP8 | svd[24:+3] |
| field_extra_in_svd | SMPR1 | SMP9 | svd[27:+3] |
| field_missing_in_svd | SMPR2 | SMP |  |
| field_extra_in_svd | SMPR2 | SMP10 | svd[0:+3] |
| field_extra_in_svd | SMPR2 | SMP11 | svd[3:+3] |
| field_extra_in_svd | SMPR2 | SMP12 | svd[6:+3] |
| field_extra_in_svd | SMPR2 | SMP13 | svd[9:+3] |
| field_extra_in_svd | SMPR2 | SMP14 | svd[12:+3] |
| field_extra_in_svd | SMPR2 | SMP15 | svd[15:+3] |
| field_extra_in_svd | SMPR2 | SMP16 | svd[18:+3] |
| field_extra_in_svd | SMPR2 | SMP17 | svd[21:+3] |
| field_extra_in_svd | SMPR2 | SMP18 | svd[24:+3] |
| field_missing_in_svd | SQR1 | SQ |  |
| field_extra_in_svd | SQR1 | SQ1 | svd[6:+5] |
| field_extra_in_svd | SQR1 | SQ2 | svd[12:+5] |
| field_extra_in_svd | SQR1 | SQ3 | svd[18:+5] |
| field_extra_in_svd | SQR1 | SQ4 | svd[24:+5] |
| _… 15 more …_ | | | |

### rcc/f3v3  (stm32f302rd · RCC · stm32f302.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | ADC34EN |  |
| field_missing_in_svd | AHBENR | FLASHEN |  |
| field_extra_in_svd | AHBENR | FLITFEN | svd[4:+1] |
| field_missing_in_svd | AHBENR | GPIOAEN |  |
| field_missing_in_svd | AHBENR | GPIOBEN |  |
| field_missing_in_svd | AHBENR | GPIOCEN |  |
| field_missing_in_svd | AHBENR | GPIODEN |  |
| field_missing_in_svd | AHBENR | GPIOEEN |  |
| field_missing_in_svd | AHBENR | GPIOFEN |  |
| field_missing_in_svd | AHBENR | GPIOGEN |  |
| field_missing_in_svd | AHBENR | GPIOHEN |  |
| field_extra_in_svd | AHBENR | IOPAEN | svd[17:+1] |
| field_extra_in_svd | AHBENR | IOPBEN | svd[18:+1] |
| field_extra_in_svd | AHBENR | IOPCEN | svd[19:+1] |
| field_extra_in_svd | AHBENR | IOPDEN | svd[20:+1] |
| field_extra_in_svd | AHBENR | IOPEEN | svd[21:+1] |
| field_extra_in_svd | AHBENR | IOPFEN | svd[22:+1] |
| field_extra_in_svd | AHBENR | IOPGEN | svd[23:+1] |
| field_extra_in_svd | AHBENR | IOPHEN | svd[16:+1] |
| field_missing_in_svd | AHBRSTR | ADC34RST |  |
| field_missing_in_svd | AHBRSTR | GPIOARST |  |
| field_missing_in_svd | AHBRSTR | GPIOBRST |  |
| field_missing_in_svd | AHBRSTR | GPIOCRST |  |
| field_missing_in_svd | AHBRSTR | GPIODRST |  |
| field_missing_in_svd | AHBRSTR | GPIOERST |  |
| field_missing_in_svd | AHBRSTR | GPIOFRST |  |
| field_missing_in_svd | AHBRSTR | GPIOGRST |  |
| field_missing_in_svd | AHBRSTR | GPIOHRST |  |
| field_extra_in_svd | AHBRSTR | IOPARST | svd[17:+1] |
| field_extra_in_svd | AHBRSTR | IOPBRST | svd[18:+1] |
| field_extra_in_svd | AHBRSTR | IOPCRST | svd[19:+1] |
| field_extra_in_svd | AHBRSTR | IOPDRST | svd[20:+1] |
| field_extra_in_svd | AHBRSTR | IOPERST | svd[21:+1] |
| field_extra_in_svd | AHBRSTR | IOPFRST | svd[22:+1] |
| field_extra_in_svd | AHBRSTR | IOPGRST | svd[23:+1] |
| field_extra_in_svd | AHBRSTR | IOPHRST | svd[16:+1] |
| field_extra_in_svd | APB1ENR | DAC1EN | svd[29:+1] |
| field_missing_in_svd | APB1ENR | DAC2EN |  |
| field_missing_in_svd | APB1ENR | DACEN |  |
| field_missing_in_svd | APB1ENR | TIM7EN |  |
| field_extra_in_svd | APB1RSTR | DAC1RST | svd[29:+1] |
| field_missing_in_svd | APB1RSTR | DAC2RST |  |
| field_missing_in_svd | APB1RSTR | DACRST |  |
| field_missing_in_svd | APB1RSTR | TIM7RST |  |
| field_missing_in_svd | APB2ENR | DBGMCUEN |  |
| field_missing_in_svd | APB2ENR | HRTIM1EN |  |
| field_missing_in_svd | APB2ENR | TIM19EN |  |
| field_missing_in_svd | APB2ENR | TIM20EN |  |
| field_missing_in_svd | APB2ENR | TIM8EN |  |
| field_missing_in_svd | APB2RSTR | DBGMCURST |  |
| _… 15 more …_ | | | |

### tamp/g0  (stm32g030c6 · TAMP · stm32g030.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | BKP%sR |  | svd offset 0x100 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR1 | ITAMP3E | svd[18:+1] |
| field_extra_in_svd | CR1 | ITAMP4E | svd[19:+1] |
| field_extra_in_svd | CR1 | ITAMP5E | svd[20:+1] |
| field_extra_in_svd | CR1 | ITAMP6E | svd[21:+1] |
| field_missing_in_svd | CR1 | ITAMPE |  |
| field_extra_in_svd | CR1 | TAMP1E | svd[0:+1] |
| field_extra_in_svd | CR1 | TAMP2E | svd[1:+1] |
| field_extra_in_svd | CR1 | TAMP3E | svd[2:+1] |
| field_missing_in_svd | CR1 | TAMPE |  |
| field_extra_in_svd | CR2 | TAMP1MSK | svd[16:+1] |
| field_extra_in_svd | CR2 | TAMP1NOER | svd[0:+1] |
| field_extra_in_svd | CR2 | TAMP1TRG | svd[24:+1] |
| field_extra_in_svd | CR2 | TAMP2MSK | svd[17:+1] |
| field_extra_in_svd | CR2 | TAMP2NOER | svd[1:+1] |
| field_extra_in_svd | CR2 | TAMP2TRG | svd[25:+1] |
| field_extra_in_svd | CR2 | TAMP3MSK | svd[18:+1] |
| field_extra_in_svd | CR2 | TAMP3NOER | svd[2:+1] |
| field_extra_in_svd | CR2 | TAMP3TRG | svd[26:+1] |
| field_missing_in_svd | CR2 | TAMPMSK |  |
| field_missing_in_svd | CR2 | TAMPNOER |  |
| field_missing_in_svd | CR2 | TAMPTRG |  |
| register_missing_in_svd | HWCFGR1 |  |  |
| register_missing_in_svd | HWCFGR2 |  |  |
| field_extra_in_svd | IER | ITAMP3IE | svd[18:+1] |
| field_extra_in_svd | IER | ITAMP4IE | svd[19:+1] |
| field_extra_in_svd | IER | ITAMP5IE | svd[20:+1] |
| field_extra_in_svd | IER | ITAMP6IE | svd[21:+1] |
| field_missing_in_svd | IER | ITAMPIE |  |
| field_extra_in_svd | IER | TAMP1IE | svd[0:+1] |
| field_extra_in_svd | IER | TAMP2IE | svd[1:+1] |
| field_extra_in_svd | IER | TAMP3IE | svd[2:+1] |
| field_missing_in_svd | IER | TAMPIE |  |
| register_missing_in_svd | IPIDR |  |  |
| field_extra_in_svd | MISR | ITAMP3MF | svd[18:+1] |
| field_extra_in_svd | MISR | ITAMP4MF | svd[19:+1] |
| field_extra_in_svd | MISR | ITAMP5MF | svd[20:+1] |
| field_extra_in_svd | MISR | ITAMP6MF | svd[21:+1] |
| field_missing_in_svd | MISR | ITAMPMF |  |
| field_extra_in_svd | MISR | TAMP1MF | svd[0:+1] |
| field_extra_in_svd | MISR | TAMP2MF | svd[1:+1] |
| field_extra_in_svd | MISR | TAMP3MF | svd[2:+1] |
| field_missing_in_svd | MISR | TAMPMF |  |
| field_extra_in_svd | SCR | CITAMP3F | svd[18:+1] |
| field_extra_in_svd | SCR | CITAMP4F | svd[19:+1] |
| field_extra_in_svd | SCR | CITAMP5F | svd[20:+1] |
| field_extra_in_svd | SCR | CITAMP6F | svd[21:+1] |
| field_missing_in_svd | SCR | CITAMPF |  |
| field_extra_in_svd | SCR | CTAMP1F | svd[0:+1] |
| _… 14 more …_ | | | |

### tamp/wl  (stm32wle5c8 · TAMP · stm32wle5.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | BKP%sR |  | svd offset 0x100 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR1 | ITAMP3E | svd[18:+1] |
| field_extra_in_svd | CR1 | ITAMP5E | svd[20:+1] |
| field_extra_in_svd | CR1 | ITAMP6E | svd[21:+1] |
| field_extra_in_svd | CR1 | ITAMP8E | svd[23:+1] |
| field_missing_in_svd | CR1 | ITAMPE |  |
| field_extra_in_svd | CR1 | TAMP1E | svd[0:+1] |
| field_extra_in_svd | CR1 | TAMP2E | svd[1:+1] |
| field_extra_in_svd | CR1 | TAMP3E | svd[2:+1] |
| field_missing_in_svd | CR1 | TAMPE |  |
| field_extra_in_svd | CR2 | TAMP1MSK | svd[16:+1] |
| field_extra_in_svd | CR2 | TAMP1NOER | svd[0:+1] |
| field_extra_in_svd | CR2 | TAMP1TRG | svd[24:+1] |
| field_extra_in_svd | CR2 | TAMP2MSK | svd[17:+1] |
| field_extra_in_svd | CR2 | TAMP2NOER | svd[1:+1] |
| field_extra_in_svd | CR2 | TAMP2TRG | svd[25:+1] |
| field_extra_in_svd | CR2 | TAMP3MSK | svd[18:+1] |
| field_extra_in_svd | CR2 | TAMP3NOER | svd[2:+1] |
| field_extra_in_svd | CR2 | TAMP3TRG | svd[26:+1] |
| field_missing_in_svd | CR2 | TAMPMSK |  |
| field_missing_in_svd | CR2 | TAMPNOER |  |
| field_missing_in_svd | CR2 | TAMPTRG |  |
| field_extra_in_svd | CR3 | ITAMP3NOER | svd[2:+1] |
| field_extra_in_svd | CR3 | ITAMP5NOER | svd[4:+1] |
| field_extra_in_svd | CR3 | ITAMP6NOER | svd[5:+1] |
| field_extra_in_svd | CR3 | ITAMP8NOER | svd[7:+1] |
| field_missing_in_svd | CR3 | ITAMPNOER |  |
| field_extra_in_svd | IER | ITAMP3IE | svd[18:+1] |
| field_extra_in_svd | IER | ITAMP5IE | svd[20:+1] |
| field_extra_in_svd | IER | ITAMP6IE | svd[21:+1] |
| field_extra_in_svd | IER | ITAMP8IE | svd[23:+1] |
| field_missing_in_svd | IER | ITAMPIE |  |
| field_extra_in_svd | IER | TAMP1IE | svd[0:+1] |
| field_extra_in_svd | IER | TAMP2IE | svd[1:+1] |
| field_extra_in_svd | IER | TAMP3IE | svd[2:+1] |
| field_missing_in_svd | IER | TAMPIE |  |
| field_extra_in_svd | MISR | ITAMP3MF | svd[18:+1] |
| field_extra_in_svd | MISR | ITAMP5MF | svd[20:+1] |
| field_extra_in_svd | MISR | ITAMP6MF | svd[21:+1] |
| field_extra_in_svd | MISR | ITAMP8MF | svd[23:+1] |
| field_missing_in_svd | MISR | ITAMPMF |  |
| field_extra_in_svd | MISR | TAMP1MF | svd[0:+1] |
| field_extra_in_svd | MISR | TAMP2MF | svd[1:+1] |
| field_extra_in_svd | MISR | TAMP3MF | svd[2:+1] |
| field_missing_in_svd | MISR | TAMPMF |  |
| field_extra_in_svd | SCR | CITAMP3F | svd[18:+1] |
| field_extra_in_svd | SCR | CITAMP5F | svd[20:+1] |
| field_extra_in_svd | SCR | CITAMP6F | svd[21:+1] |
| field_extra_in_svd | SCR | CITAMP8F | svd[23:+1] |
| _… 14 more …_ | | | |

### flash/h5  (stm32h562ag · FLASH · stm32h562.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | NSKEYR | NSKEY | svd[0:+32] |
| field_extra_in_svd | NSOBKKEYR | NSOBKKEY | svd[0:+32] |
| field_extra_in_svd | OPTKEYR | OPTKEY | svd[0:+32] |
| field_missing_in_svd | OPTSR2_PRG | SRAM13_RST |  |
| field_extra_in_svd | OPTSR2_PRG | SRAM1_3_RST | svd[2:+1] |
| field_missing_in_svd | PRIVBB1R1 | PRIVBB |  |
| field_extra_in_svd | PRIVBB1R1 | PRIVBB1 | svd[0:+32] |
| field_missing_in_svd | PRIVBB1R2 | PRIVBB |  |
| field_extra_in_svd | PRIVBB1R2 | PRIVBB1 | svd[0:+32] |
| field_missing_in_svd | PRIVBB1R3 | PRIVBB |  |
| field_extra_in_svd | PRIVBB1R3 | PRIVBB1 | svd[0:+32] |
| field_missing_in_svd | PRIVBB1R4 | PRIVBB |  |
| field_extra_in_svd | PRIVBB1R4 | PRIVBB1 | svd[0:+32] |
| field_missing_in_svd | PRIVBB2R1 | PRIVBB |  |
| field_extra_in_svd | PRIVBB2R1 | PRIVBB2 | svd[0:+32] |
| field_missing_in_svd | PRIVBB2R2 | PRIVBB |  |
| field_extra_in_svd | PRIVBB2R2 | PRIVBB2 | svd[0:+32] |
| field_missing_in_svd | PRIVBB2R3 | PRIVBB |  |
| field_extra_in_svd | PRIVBB2R3 | PRIVBB2 | svd[0:+32] |
| field_missing_in_svd | PRIVBB2R4 | PRIVBB |  |
| field_extra_in_svd | PRIVBB2R4 | PRIVBB2 | svd[0:+32] |
| field_missing_in_svd | SECBB1R1 | SECBB |  |
| field_extra_in_svd | SECBB1R1 | SECBB1 | svd[0:+32] |
| field_missing_in_svd | SECBB1R2 | SECBB |  |
| field_extra_in_svd | SECBB1R2 | SECBB1 | svd[0:+32] |
| field_missing_in_svd | SECBB1R3 | SECBB |  |
| field_extra_in_svd | SECBB1R3 | SECBB1 | svd[0:+32] |
| field_missing_in_svd | SECBB1R4 | SECBB |  |
| field_extra_in_svd | SECBB1R4 | SECBB1 | svd[0:+32] |
| field_missing_in_svd | SECBB2R1 | SECBB |  |
| field_extra_in_svd | SECBB2R1 | SECBB2 | svd[0:+32] |
| field_missing_in_svd | SECBB2R2 | SECBB |  |
| field_extra_in_svd | SECBB2R2 | SECBB2 | svd[0:+32] |
| field_missing_in_svd | SECBB2R3 | SECBB |  |
| field_extra_in_svd | SECBB2R3 | SECBB2 | svd[0:+32] |
| field_missing_in_svd | SECBB2R4 | SECBB |  |
| field_extra_in_svd | SECBB2R4 | SECBB2 | svd[0:+32] |
| field_extra_in_svd | SECKEYR | SECKEY | svd[0:+32] |
| field_extra_in_svd | SECOBKKEYR | SECOBKKEY | svd[0:+32] |
| field_extra_in_svd | SECWM1R_CUR | SECWM1_END | svd[16:+7] |
| field_extra_in_svd | SECWM1R_CUR | SECWM1_STRT | svd[0:+7] |
| field_missing_in_svd | SECWM1R_CUR | SECWMEND |  |
| field_missing_in_svd | SECWM1R_CUR | SECWMSTRT |  |
| field_extra_in_svd | SECWM1R_PRG | SECWM1_END | svd[16:+7] |
| field_extra_in_svd | SECWM1R_PRG | SECWM1_STRT | svd[0:+7] |
| field_missing_in_svd | SECWM1R_PRG | SECWMEND |  |
| field_missing_in_svd | SECWM1R_PRG | SECWMSTRT |  |
| field_missing_in_svd | SECWM2R_CUR | SECWMEND |  |
| field_missing_in_svd | SECWM2R_CUR | SECWMSTRT |  |
| field_extra_in_svd | SECWM2R_CUR | SECWM_END2 | svd[16:+7] |
| _… 13 more …_ | | | |

### ramcfg/u5  (stm32u535cb · RAMCFG · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | M1CR |  | svd offset 0x0 |
| register_extra_in_svd | M1ISR |  | svd offset 0x8 |
| register_extra_in_svd | M2CR |  | svd offset 0x40 |
| register_extra_in_svd | M2DEAR |  | svd offset 0x50 |
| register_extra_in_svd | M2ECCKEYR |  | svd offset 0x64 |
| register_extra_in_svd | M2ERKEYR |  | svd offset 0x68 |
| register_extra_in_svd | M2ICR |  | svd offset 0x54 |
| register_extra_in_svd | M2IER |  | svd offset 0x44 |
| register_extra_in_svd | M2ISR |  | svd offset 0x48 |
| register_extra_in_svd | M2SEAR |  | svd offset 0x4C |
| register_extra_in_svd | M2WPR1 |  | svd offset 0x58 |
| register_extra_in_svd | M2WPR2 |  | svd offset 0x5C |
| register_extra_in_svd | M3CR |  | svd offset 0x80 |
| register_extra_in_svd | M3DEAR |  | svd offset 0x90 |
| register_extra_in_svd | M3ECCKEYR |  | svd offset 0xA4 |
| register_extra_in_svd | M3ERKEYR |  | svd offset 0xA8 |
| register_extra_in_svd | M3ICR |  | svd offset 0x94 |
| register_extra_in_svd | M3IER |  | svd offset 0x84 |
| register_extra_in_svd | M3ISR |  | svd offset 0x88 |
| register_extra_in_svd | M3SEAR |  | svd offset 0x8C |
| register_extra_in_svd | M4CR |  | svd offset 0xC0 |
| register_extra_in_svd | M4ERKEYR |  | svd offset 0xE8 |
| register_extra_in_svd | M4ISR |  | svd offset 0xC8 |
| register_extra_in_svd | M5CR |  | svd offset 0x100 |
| register_extra_in_svd | M5DEAR |  | svd offset 0x110 |
| register_extra_in_svd | M5ECCKEYR |  | svd offset 0x124 |
| register_extra_in_svd | M5ERKEYR |  | svd offset 0x128 |
| register_extra_in_svd | M5ICR |  | svd offset 0x114 |
| register_extra_in_svd | M5IER |  | svd offset 0x104 |
| register_extra_in_svd | M5ISR |  | svd offset 0x108 |
| register_extra_in_svd | M5SEAR |  | svd offset 0x10C |
| register_extra_in_svd | M6CR |  | svd offset 0x140 |
| register_extra_in_svd | M6ERKEYR |  | svd offset 0x168 |
| register_extra_in_svd | M6ISR |  | svd offset 0x148 |
| register_missing_in_svd | RAM1CR |  |  |
| register_missing_in_svd | RAM1ISR |  |  |
| register_missing_in_svd | RAM2CR |  |  |
| register_missing_in_svd | RAM2DEAR |  |  |
| register_missing_in_svd | RAM2ECCKEYR |  |  |
| register_missing_in_svd | RAM2ERKEYR |  |  |
| register_missing_in_svd | RAM2ICR |  |  |
| register_missing_in_svd | RAM2IER |  |  |
| register_missing_in_svd | RAM2ISR |  |  |
| register_missing_in_svd | RAM2SEAR |  |  |
| register_missing_in_svd | RAM2WPR1 |  |  |
| register_missing_in_svd | RAM2WPR2 |  |  |
| register_missing_in_svd | RAM3CR |  |  |
| register_missing_in_svd | RAM3DEAR |  |  |
| register_missing_in_svd | RAM3ECCKEYR |  |  |
| register_missing_in_svd | RAM3ERKEYR |  |  |
| _… 13 more …_ | | | |

### flash/wba  (stm32wba50ke · FLASH · stm32wba50.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | ACR | PDREQ | svd[12:+1] |
| field_missing_in_svd | ACR | PDREQ1 |  |
| field_missing_in_svd | ACR | PDREQ2 |  |
| field_missing_in_svd | ECCR | BK_ECC |  |
| register_missing_in_svd | NSCR |  |  |
| register_extra_in_svd | NSCR1 |  | svd offset 0x28 |
| field_extra_in_svd | NSKEYR | NSKEY | svd[0:+32] |
| field_extra_in_svd | NSSR | PD | svd[20:+1] |
| field_missing_in_svd | NSSR | PD1 |  |
| field_missing_in_svd | NSSR | PD2 |  |
| field_extra_in_svd | OEM1KEYR1 | OEM1KEY | svd[0:+32] |
| field_extra_in_svd | OEM1KEYR2 | OEM1KEY | svd[0:+32] |
| field_extra_in_svd | OEM2KEYR1 | OEM2KEY | svd[0:+32] |
| field_extra_in_svd | OEM2KEYR2 | OEM2KEY | svd[0:+32] |
| field_missing_in_svd | OPSR | BK_OP |  |
| field_extra_in_svd | OPTKEYR | OPTKEY | svd[0:+32] |
| field_missing_in_svd | OPTR | DUALBANK |  |
| field_missing_in_svd | OPTR | IO_VDDIO2_HSLV |  |
| field_missing_in_svd | OPTR | IO_VDD_HSLV |  |
| field_extra_in_svd | OPTR | NBOOT0 | svd[27:+1] |
| field_extra_in_svd | OPTR | NRST_STDBY | svd[13:+1] |
| field_extra_in_svd | OPTR | NRST_STOP | svd[12:+1] |
| field_extra_in_svd | OPTR | NSWBOOT0 | svd[26:+1] |
| field_missing_in_svd | OPTR | SWAP_BANK |  |
| field_missing_in_svd | OPTR | nBOOT0 |  |
| field_missing_in_svd | OPTR | nRST_SHDW |  |
| field_missing_in_svd | OPTR | nRST_STDBY |  |
| field_missing_in_svd | OPTR | nRST_STOP |  |
| field_missing_in_svd | OPTR | nSWBOOT0 |  |
| register_missing_in_svd | PDKEY1R |  |  |
| register_missing_in_svd | PDKEY2R |  |  |
| register_extra_in_svd | PDKEYR |  | svd offset 0x18 |
| register_extra_in_svd | PRIFCFGR |  | svd offset 0xC4 |
| register_missing_in_svd | PRIVBB1R |  |  |
| register_missing_in_svd | PRIVBB2R |  |  |
| register_extra_in_svd | PRIVBBR1 |  | svd offset 0xD0 |
| register_extra_in_svd | PRIVBBR2 |  | svd offset 0xD4 |
| register_extra_in_svd | PRIVBBR3 |  | svd offset 0xD8 |
| register_extra_in_svd | PRIVBBR4 |  | svd offset 0xDC |
| register_missing_in_svd | PRIVCFGR |  |  |
| register_missing_in_svd | SECBB1R |  |  |
| register_missing_in_svd | SECBB2R |  |  |
| register_extra_in_svd | SECBBR1 |  | svd offset 0x80 |
| register_extra_in_svd | SECBBR2 |  | svd offset 0x84 |
| register_missing_in_svd | SECCR |  |  |
| register_extra_in_svd | SECCR1 |  | svd offset 0x2C |
| field_missing_in_svd | SECHDPCR | HDP1_ACCDIS |  |
| field_missing_in_svd | SECHDPCR | HDP2_ACCDIS |  |
| field_extra_in_svd | SECHDPCR | HDP_ACCDIS | svd[0:+1] |
| field_extra_in_svd | SECKEYR | SECKEY | svd[0:+32] |
| _… 12 more …_ | | | |

### rcc/h50  (stm32h503cb · RCC · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | AHB1ENR | GTZC1EN | svd[24:+1] |
| field_extra_in_svd | AHB1LPENR | GTZC1LPEN | svd[24:+1] |
| field_missing_in_svd | AHB2ENR | ADC1EN |  |
| field_extra_in_svd | AHB2ENR | ADCEN | svd[10:+1] |
| field_extra_in_svd | AHB2ENR | DAC12EN | svd[11:+1] |
| field_missing_in_svd | AHB2ENR | DAC1EN |  |
| field_missing_in_svd | AHB2LPENR | ADC1LPEN |  |
| field_extra_in_svd | AHB2LPENR | ADCLPEN | svd[10:+1] |
| field_extra_in_svd | AHB2LPENR | DAC12LPEN | svd[11:+1] |
| field_missing_in_svd | AHB2LPENR | DAC1LPEN |  |
| field_missing_in_svd | AHB2RSTR | ADC1RST |  |
| field_extra_in_svd | AHB2RSTR | ADCRST | svd[10:+1] |
| field_extra_in_svd | AHB2RSTR | DAC12RST | svd[11:+1] |
| field_missing_in_svd | AHB2RSTR | DAC1RST |  |
| field_missing_in_svd | APB1HENR | FDCAN12EN |  |
| field_extra_in_svd | APB1HENR | FDCANEN | svd[9:+1] |
| field_missing_in_svd | APB1HLPENR | FDCAN12LPEN |  |
| field_extra_in_svd | APB1HLPENR | FDCANLPEN | svd[9:+1] |
| field_missing_in_svd | APB1HRSTR | FDCAN12RST |  |
| field_extra_in_svd | APB1HRSTR | FDCANRST | svd[9:+1] |
| field_extra_in_svd | APB3ENR | SBSEN | svd[1:+1] |
| field_missing_in_svd | APB3ENR | SYSCFGEN |  |
| field_extra_in_svd | APB3LPENR | SBSLPEN | svd[1:+1] |
| field_missing_in_svd | APB3LPENR | SYSCFGLPEN |  |
| field_extra_in_svd | APB3RSTR | SBSRST | svd[1:+1] |
| field_missing_in_svd | APB3RSTR | SYSCFGRST |  |
| field_extra_in_svd | CCIPR5 | CKPERSEL | svd[30:+2] |
| field_extra_in_svd | CCIPR5 | DAC1SEL | svd[3:+1] |
| field_missing_in_svd | CCIPR5 | DACHOLDSEL |  |
| field_missing_in_svd | CCIPR5 | FDCAN12SEL |  |
| field_extra_in_svd | CCIPR5 | FDCANSEL | svd[8:+2] |
| field_missing_in_svd | CCIPR5 | PERSEL |  |
| register_missing_in_svd | CFGR |  |  |
| register_extra_in_svd | CFGR1 |  | svd offset 0x1C |
| field_extra_in_svd | CICR | PLL1RDYC | svd[6:+1] |
| field_extra_in_svd | CICR | PLL2RDYC | svd[7:+1] |
| field_missing_in_svd | CICR | PLLRDYC |  |
| field_extra_in_svd | CIER | PLL1RDYIE | svd[6:+1] |
| field_extra_in_svd | CIER | PLL2RDYIE | svd[7:+1] |
| field_missing_in_svd | CIER | PLLRDYIE |  |
| field_extra_in_svd | CIFR | PLL1RDYF | svd[6:+1] |
| field_extra_in_svd | CIFR | PLL2RDYF | svd[7:+1] |
| field_missing_in_svd | CIFR | PLLRDYF |  |
| field_extra_in_svd | CR | PLL1ON | svd[24:+1] |
| field_extra_in_svd | CR | PLL1RDY | svd[25:+1] |
| field_extra_in_svd | CR | PLL2ON | svd[26:+1] |
| field_extra_in_svd | CR | PLL2RDY | svd[27:+1] |
| field_missing_in_svd | CR | PLLON |  |
| field_missing_in_svd | CR | PLLRDY |  |
| register_extra_in_svd | PLL1CFGR |  | svd offset 0x28 |
| _… 9 more …_ | | | |

### dac/v6  (stm32u535cb · DAC1 · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | AUTOCR |  | svd offset 0x54 |
| field_missing_in_svd | CCR | OTRIM |  |
| field_extra_in_svd | CCR | OTRIM%s | svd[0:+5] |
| field_missing_in_svd | CR | CEN |  |
| field_extra_in_svd | CR | CEN%s | svd[14:+1] |
| field_missing_in_svd | CR | DMAEN |  |
| field_extra_in_svd | CR | DMAEN%s | svd[12:+1] |
| field_missing_in_svd | CR | DMAUDRIE |  |
| field_extra_in_svd | CR | DMAUDRIE%s | svd[13:+1] |
| field_missing_in_svd | CR | EN |  |
| field_extra_in_svd | CR | EN%s | svd[0:+1] |
| field_missing_in_svd | CR | MAMP |  |
| field_extra_in_svd | CR | MAMP%s | svd[8:+4] |
| field_missing_in_svd | CR | TEN |  |
| field_extra_in_svd | CR | TEN%s | svd[1:+1] |
| field_missing_in_svd | CR | TSEL |  |
| field_extra_in_svd | CR | TSEL1 | svd[2:+4] |
| field_extra_in_svd | CR | TSEL2 | svd[18:+4] |
| field_missing_in_svd | CR | WAVE |  |
| field_extra_in_svd | CR | WAVE%s | svd[6:+2] |
| register_missing_in_svd | DHR12L |  |  |
| register_extra_in_svd | DHR12L%s |  | svd offset 0xC |
| field_extra_in_svd | DHR12LD | DACC%sDHR | svd[4:+12] |
| field_missing_in_svd | DHR12LD | DHR |  |
| register_missing_in_svd | DHR12R |  |  |
| register_extra_in_svd | DHR12R%s |  | svd offset 0x8 |
| field_extra_in_svd | DHR12RD | DACC%sDHR | svd[0:+12] |
| field_missing_in_svd | DHR12RD | DHR |  |
| register_missing_in_svd | DHR8R |  |  |
| register_extra_in_svd | DHR8R%s |  | svd offset 0x10 |
| field_extra_in_svd | DHR8RD | DACC%sDHR | svd[0:+8] |
| field_missing_in_svd | DHR8RD | DHR |  |
| register_missing_in_svd | DOR |  |  |
| register_extra_in_svd | DOR%s |  | svd offset 0x2C |
| field_missing_in_svd | MCR | DMADOUBLE |  |
| field_extra_in_svd | MCR | DMADOUBLE%s | svd[8:+1] |
| field_missing_in_svd | MCR | MODE |  |
| field_extra_in_svd | MCR | MODE%s | svd[0:+3] |
| field_missing_in_svd | MCR | SINFORMAT |  |
| field_extra_in_svd | MCR | SINFORMAT%s | svd[9:+1] |
| field_missing_in_svd | SHHR | THOLD |  |
| field_extra_in_svd | SHHR | THOLD%s | svd[0:+10] |
| field_missing_in_svd | SHRR | TREFRESH |  |
| field_extra_in_svd | SHRR | TREFRESH%s | svd[0:+8] |
| register_missing_in_svd | SHSR |  |  |
| register_extra_in_svd | SHSR%s |  | svd offset 0x40 |
| field_missing_in_svd | SR | BWST |  |
| field_extra_in_svd | SR | BWST%s | svd[15:+1] |
| field_missing_in_svd | SR | CAL_FLAG |  |
| field_extra_in_svd | SR | CAL_FLAG%s | svd[14:+1] |
| _… 8 more …_ | | | |

### pwr/l5  (stm32l552cc · PWR · stm32l552.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR3 | EWUP |  |
| field_extra_in_svd | CR3 | EWUP1 | svd[0:+1] |
| field_extra_in_svd | CR3 | EWUP2 | svd[1:+1] |
| field_extra_in_svd | CR3 | EWUP3 | svd[2:+1] |
| field_extra_in_svd | CR3 | EWUP4 | svd[3:+1] |
| field_extra_in_svd | CR3 | EWUP5 | svd[4:+1] |
| field_missing_in_svd | CR4 | WP1 |  |
| field_missing_in_svd | CR4 | WP2 |  |
| field_missing_in_svd | CR4 | WP3 |  |
| field_missing_in_svd | CR4 | WP4 |  |
| field_missing_in_svd | CR4 | WP5 |  |
| field_extra_in_svd | CR4 | WUPP1 | svd[0:+1] |
| field_extra_in_svd | CR4 | WUPP2 | svd[1:+1] |
| field_extra_in_svd | CR4 | WUPP3 | svd[2:+1] |
| field_extra_in_svd | CR4 | WUPP4 | svd[3:+1] |
| field_extra_in_svd | CR4 | WUPP5 | svd[4:+1] |
| register_missing_in_svd | PDCR |  |  |
| register_extra_in_svd | PDCRA |  | svd offset 0x24 |
| register_extra_in_svd | PDCRB |  | svd offset 0x2C |
| register_extra_in_svd | PDCRC |  | svd offset 0x34 |
| register_extra_in_svd | PDCRD |  | svd offset 0x3C |
| register_extra_in_svd | PDCRE |  | svd offset 0x44 |
| register_extra_in_svd | PDCRF |  | svd offset 0x4C |
| register_extra_in_svd | PDCRG |  | svd offset 0x54 |
| register_extra_in_svd | PDCRH |  | svd offset 0x5C |
| register_missing_in_svd | PUCR |  |  |
| register_extra_in_svd | PUCRA |  | svd offset 0x20 |
| register_extra_in_svd | PUCRB |  | svd offset 0x28 |
| register_extra_in_svd | PUCRC |  | svd offset 0x30 |
| register_extra_in_svd | PUCRD |  | svd offset 0x38 |
| register_extra_in_svd | PUCRE |  | svd offset 0x40 |
| register_extra_in_svd | PUCRF |  | svd offset 0x48 |
| register_extra_in_svd | PUCRG |  | svd offset 0x50 |
| register_extra_in_svd | PUCRH |  | svd offset 0x58 |
| field_extra_in_svd | SCR | CSBF | svd[8:+1] |
| field_missing_in_svd | SCR | CWUF |  |
| field_extra_in_svd | SCR | CWUF1 | svd[0:+1] |
| field_extra_in_svd | SCR | CWUF2 | svd[1:+1] |
| field_extra_in_svd | SCR | CWUF3 | svd[2:+1] |
| field_extra_in_svd | SCR | CWUF4 | svd[3:+1] |
| field_extra_in_svd | SCR | CWUF5 | svd[4:+1] |
| field_missing_in_svd | SCR | SBF |  |
| field_missing_in_svd | SR1 | CSBF |  |
| field_missing_in_svd | SR1 | CWUF1 |  |
| field_missing_in_svd | SR1 | CWUF2 |  |
| field_missing_in_svd | SR1 | CWUF3 |  |
| field_missing_in_svd | SR1 | CWUF4 |  |
| field_missing_in_svd | SR1 | CWUF5 |  |
| field_extra_in_svd | SR1 | EXTSMPSRDY | svd[13:+1] |
| field_extra_in_svd | SR1 | SBF | svd[8:+1] |
| _… 8 more …_ | | | |

### flash/h7ab  (stm32h7a3ag · FLASH · stm32h7b3.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | ACR | LATENCY | ip[0:+3] svd[0:+4] |
| register_extra_in_svd | ACR_ |  | svd offset 0x100 |
| register_missing_in_svd | BANK |  |  |
| register_extra_in_svd | BOOT_CURR_ |  | svd offset 0x140 |
| register_extra_in_svd | BOOT_PRGR_ |  | svd offset 0x144 |
| register_missing_in_svd | CCR |  |  |
| register_missing_in_svd | CR |  |  |
| register_missing_in_svd | CRCCR |  |  |
| register_missing_in_svd | CRCEADDR |  |  |
| register_missing_in_svd | CRCSADDR |  |  |
| register_missing_in_svd | FAR |  |  |
| register_missing_in_svd | KEYR |  |  |
| register_extra_in_svd | OPTCCR_ |  | svd offset 0x124 |
| register_extra_in_svd | OPTCR_ |  | svd offset 0x118 |
| field_extra_in_svd | OPTKEYR | OPTKEYR | svd[0:+32] |
| register_extra_in_svd | OPTKEYR_ |  | svd offset 0x108 |
| field_missing_in_svd | OPTSR_CUR | FZ_IWDG_SDBY |  |
| field_missing_in_svd | OPTSR_CUR | FZ_IWDG_STOP |  |
| field_missing_in_svd | OPTSR_CUR | IO_HSLV |  |
| field_missing_in_svd | OPTSR_CUR | IWDG1_HW |  |
| field_extra_in_svd | OPTSR_CUR | IWDG_FZ_SDBY | svd[18:+1] |
| field_extra_in_svd | OPTSR_CUR | IWDG_SW | svd[4:+1] |
| field_extra_in_svd | OPTSR_CUR | NRST_STDY | svd[7:+1] |
| field_extra_in_svd | OPTSR_CUR | NRST_STOP | svd[6:+1] |
| field_missing_in_svd | OPTSR_CUR | PERSO_OK |  |
| field_missing_in_svd | OPTSR_CUR | RSS1 |  |
| field_extra_in_svd | OPTSR_CUR | VDDIO_HSLV | svd[29:+1] |
| field_extra_in_svd | OPTSR_CUR | VDDMMC_HSLV | svd[16:+1] |
| field_extra_in_svd | OPTSR_CUR | WDG_FZ_STOP | svd[17:+1] |
| field_missing_in_svd | OPTSR_CUR | nRST_STBY_D1 |  |
| field_missing_in_svd | OPTSR_CUR | nRST_STOP_D1 |  |
| register_extra_in_svd | OPTSR_CUR_ |  | svd offset 0x11C |
| field_missing_in_svd | OPTSR_PRG | FZ_IWDG_SDBY |  |
| field_missing_in_svd | OPTSR_PRG | FZ_IWDG_STOP |  |
| field_missing_in_svd | OPTSR_PRG | IO_HSLV |  |
| field_missing_in_svd | OPTSR_PRG | IWDG1_HW |  |
| field_extra_in_svd | OPTSR_PRG | IWDG_FZ_SDBY | svd[18:+1] |
| field_extra_in_svd | OPTSR_PRG | IWDG_SW | svd[4:+1] |
| field_extra_in_svd | OPTSR_PRG | NRST_STDY | svd[7:+1] |
| field_extra_in_svd | OPTSR_PRG | NRST_STOP | svd[6:+1] |
| field_missing_in_svd | OPTSR_PRG | RSS1 |  |
| field_missing_in_svd | OPTSR_PRG | RSS2 |  |
| field_extra_in_svd | OPTSR_PRG | VDDIO_HSLV | svd[29:+1] |
| field_extra_in_svd | OPTSR_PRG | VDDMMC_HSLV | svd[16:+1] |
| field_extra_in_svd | OPTSR_PRG | WDG_FZ_STOP | svd[17:+1] |
| field_missing_in_svd | OPTSR_PRG | nRST_STBY_D1 |  |
| field_missing_in_svd | OPTSR_PRG | nRST_STOP_D1 |  |
| register_extra_in_svd | OPTSR_PRG_ |  | svd offset 0x120 |
| register_extra_in_svd | OTPBL_CUR |  | svd offset 0x68 |
| register_extra_in_svd | OTPBL_PRG |  | svd offset 0x6C |
| _… 7 more …_ | | | |

### pwr/h5  (stm32h562ag · PWR · stm32h562.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | PMCR | ETHERNETSO |  |
| field_extra_in_svd | SECCFGR | WUP1SEC | svd[0:+1] |
| field_extra_in_svd | SECCFGR | WUP2SEC | svd[1:+1] |
| field_extra_in_svd | SECCFGR | WUP3SEC | svd[2:+1] |
| field_extra_in_svd | SECCFGR | WUP4SEC | svd[3:+1] |
| field_extra_in_svd | SECCFGR | WUP5SEC | svd[4:+1] |
| field_extra_in_svd | SECCFGR | WUP6SEC | svd[5:+1] |
| field_extra_in_svd | SECCFGR | WUP7SEC | svd[6:+1] |
| field_extra_in_svd | SECCFGR | WUP8SEC | svd[7:+1] |
| field_missing_in_svd | SECCFGR | WUPSEC |  |
| field_missing_in_svd | WUCR | WUPEN |  |
| field_extra_in_svd | WUCR | WUPEN1 | svd[0:+1] |
| field_extra_in_svd | WUCR | WUPEN2 | svd[1:+1] |
| field_extra_in_svd | WUCR | WUPEN3 | svd[2:+1] |
| field_extra_in_svd | WUCR | WUPEN4 | svd[3:+1] |
| field_extra_in_svd | WUCR | WUPEN5 | svd[4:+1] |
| field_extra_in_svd | WUCR | WUPEN6 | svd[5:+1] |
| field_extra_in_svd | WUCR | WUPEN7 | svd[6:+1] |
| field_extra_in_svd | WUCR | WUPEN8 | svd[7:+1] |
| field_missing_in_svd | WUCR | WUPP |  |
| field_extra_in_svd | WUCR | WUPP1 | svd[8:+1] |
| field_extra_in_svd | WUCR | WUPP2 | svd[9:+1] |
| field_extra_in_svd | WUCR | WUPP3 | svd[10:+1] |
| field_extra_in_svd | WUCR | WUPP4 | svd[11:+1] |
| field_extra_in_svd | WUCR | WUPP5 | svd[12:+1] |
| field_extra_in_svd | WUCR | WUPP6 | svd[13:+1] |
| field_extra_in_svd | WUCR | WUPP7 | svd[14:+1] |
| field_extra_in_svd | WUCR | WUPP8 | svd[15:+1] |
| field_missing_in_svd | WUCR | WUPPUPD |  |
| field_extra_in_svd | WUCR | WUPPUPD1 | svd[16:+2] |
| field_extra_in_svd | WUCR | WUPPUPD2 | svd[18:+2] |
| field_extra_in_svd | WUCR | WUPPUPD3 | svd[20:+2] |
| field_extra_in_svd | WUCR | WUPPUPD4 | svd[22:+2] |
| field_extra_in_svd | WUCR | WUPPUPD5 | svd[24:+2] |
| field_extra_in_svd | WUCR | WUPPUPD6 | svd[26:+2] |
| field_extra_in_svd | WUCR | WUPPUPD7 | svd[28:+2] |
| field_extra_in_svd | WUCR | WUPPUPD8 | svd[30:+2] |
| field_missing_in_svd | WUSCR | CWUF |  |
| field_extra_in_svd | WUSCR | CWUF1 | svd[0:+1] |
| field_extra_in_svd | WUSCR | CWUF2 | svd[1:+1] |
| field_extra_in_svd | WUSCR | CWUF3 | svd[2:+1] |
| field_extra_in_svd | WUSCR | CWUF4 | svd[3:+1] |
| field_extra_in_svd | WUSCR | CWUF5 | svd[4:+1] |
| field_extra_in_svd | WUSCR | CWUF6 | svd[5:+1] |
| field_extra_in_svd | WUSCR | CWUF7 | svd[6:+1] |
| field_extra_in_svd | WUSCR | CWUF8 | svd[7:+1] |
| field_missing_in_svd | WUSR | WUF |  |
| field_extra_in_svd | WUSR | WUF1 | svd[0:+1] |
| field_extra_in_svd | WUSR | WUF2 | svd[1:+1] |
| field_extra_in_svd | WUSR | WUF3 | svd[2:+1] |
| _… 5 more …_ | | | |

### rcc/l0  (stm32l010c6 · RCC · stm32l0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | DMA1EN |  |
| field_extra_in_svd | AHBENR | DMAEN | svd[0:+1] |
| field_missing_in_svd | AHBENR | RNGEN |  |
| field_missing_in_svd | AHBENR | TSCEN |  |
| field_missing_in_svd | AHBRSTR | DMA1RST |  |
| field_extra_in_svd | AHBRSTR | DMARST | svd[0:+1] |
| field_missing_in_svd | AHBRSTR | RNGRST |  |
| field_missing_in_svd | AHBRSTR | TSCRST |  |
| field_missing_in_svd | AHBSMENR | CRYPSMEN |  |
| field_missing_in_svd | AHBSMENR | DMA1SMEN |  |
| field_extra_in_svd | AHBSMENR | DMASMEN | svd[0:+1] |
| field_missing_in_svd | AHBSMENR | RNGSMEN |  |
| field_missing_in_svd | AHBSMENR | TSCSMEN |  |
| field_missing_in_svd | APB1ENR | CRSEN |  |
| field_missing_in_svd | APB1ENR | DACEN |  |
| field_missing_in_svd | APB1ENR | TIM3EN |  |
| field_missing_in_svd | APB1ENR | USBEN |  |
| field_extra_in_svd | APB1RSTR | CRCRST | svd[27:+1] |
| field_missing_in_svd | APB1RSTR | CRSRST |  |
| field_missing_in_svd | APB1RSTR | DACRST |  |
| field_extra_in_svd | APB1RSTR | I2C3 | svd[30:+1] |
| field_missing_in_svd | APB1RSTR | I2C3RST |  |
| field_missing_in_svd | APB1RSTR | USBRST |  |
| field_missing_in_svd | APB1SMENR | DACSMEN |  |
| field_missing_in_svd | APB1SMENR | USBSMEN |  |
| field_layout_mismatch | CFGR | MCOSEL | ip[24:+4] svd[24:+3] |
| field_extra_in_svd | CICR | HSI16RDYC | svd[2:+1] |
| field_missing_in_svd | CICR | HSIRDYC |  |
| field_extra_in_svd | CIER | HSI16RDYIE | svd[2:+1] |
| field_missing_in_svd | CIER | HSIRDYIE |  |
| field_extra_in_svd | CIFR | HSI16RDYF | svd[2:+1] |
| field_missing_in_svd | CIFR | HSIRDYF |  |
| field_extra_in_svd | CR | HSI16DIVEN | svd[3:+1] |
| field_extra_in_svd | CR | HSI16DIVF | svd[4:+1] |
| field_extra_in_svd | CR | HSI16KERON | svd[1:+1] |
| field_extra_in_svd | CR | HSI16ON | svd[0:+1] |
| field_extra_in_svd | CR | HSI16OUTEN | svd[5:+1] |
| field_extra_in_svd | CR | HSI16RDYF | svd[2:+1] |
| field_missing_in_svd | CR | HSIDIVEN |  |
| field_missing_in_svd | CR | HSIDIVF |  |
| field_missing_in_svd | CR | HSIKERON |  |
| field_missing_in_svd | CR | HSION |  |
| field_missing_in_svd | CR | HSIOUTEN |  |
| field_missing_in_svd | CR | HSIRDY |  |
| register_missing_in_svd | GPIOENR |  |  |
| register_missing_in_svd | GPIORSTR |  |  |
| register_missing_in_svd | GPIOSMEN |  |  |
| field_extra_in_svd | ICSCR | HSI16CAL | svd[0:+8] |
| field_extra_in_svd | ICSCR | HSI16TRIM | svd[8:+5] |
| field_missing_in_svd | ICSCR | HSICAL |  |
| _… 4 more …_ | | | |

### adc/f3v3  (stm32f373c8 · ADC1 · stm32f373.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | JDR%s |  | svd offset 0x3C |
| register_missing_in_svd | JDR1 |  |  |
| register_missing_in_svd | JDR2 |  |  |
| register_missing_in_svd | JDR3 |  |  |
| register_missing_in_svd | JDR4 |  |  |
| register_extra_in_svd | JOFR%s |  | svd offset 0x14 |
| register_missing_in_svd | JOFR1 |  |  |
| register_missing_in_svd | JOFR2 |  |  |
| register_missing_in_svd | JOFR3 |  |  |
| register_missing_in_svd | JOFR4 |  |  |
| field_missing_in_svd | JSQR | JSQ |  |
| field_extra_in_svd | JSQR | JSQ%s | svd[0:+5] |
| field_extra_in_svd | SMPR1 | SMP%s | svd[0:+3] |
| field_missing_in_svd | SMPR1 | SMP10 |  |
| field_missing_in_svd | SMPR1 | SMP11 |  |
| field_missing_in_svd | SMPR1 | SMP12 |  |
| field_missing_in_svd | SMPR1 | SMP13 |  |
| field_missing_in_svd | SMPR1 | SMP14 |  |
| field_missing_in_svd | SMPR1 | SMP15 |  |
| field_missing_in_svd | SMPR1 | SMP16 |  |
| field_missing_in_svd | SMPR1 | SMP17 |  |
| field_missing_in_svd | SMPR1 | SMP18 |  |
| field_extra_in_svd | SMPR2 | SMP%s | svd[0:+3] |
| field_missing_in_svd | SMPR2 | SMP0 |  |
| field_missing_in_svd | SMPR2 | SMP1 |  |
| field_missing_in_svd | SMPR2 | SMP2 |  |
| field_missing_in_svd | SMPR2 | SMP3 |  |
| field_missing_in_svd | SMPR2 | SMP4 |  |
| field_missing_in_svd | SMPR2 | SMP5 |  |
| field_missing_in_svd | SMPR2 | SMP6 |  |
| field_missing_in_svd | SMPR2 | SMP7 |  |
| field_missing_in_svd | SMPR2 | SMP8 |  |
| field_missing_in_svd | SMPR2 | SMP9 |  |
| field_extra_in_svd | SQR1 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR1 | SQ13 |  |
| field_missing_in_svd | SQR1 | SQ14 |  |
| field_missing_in_svd | SQR1 | SQ15 |  |
| field_missing_in_svd | SQR1 | SQ16 |  |
| field_extra_in_svd | SQR2 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR2 | SQ10 |  |
| field_missing_in_svd | SQR2 | SQ11 |  |
| field_missing_in_svd | SQR2 | SQ12 |  |
| field_missing_in_svd | SQR2 | SQ7 |  |
| field_missing_in_svd | SQR2 | SQ8 |  |
| field_missing_in_svd | SQR2 | SQ9 |  |
| field_extra_in_svd | SQR3 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR3 | SQ1 |  |
| field_missing_in_svd | SQR3 | SQ2 |  |
| field_missing_in_svd | SQR3 | SQ3 |  |
| field_missing_in_svd | SQR3 | SQ4 |  |
| _… 3 more …_ | | | |

### rcc/f0v3  (stm32f030cc · RCC · stm32f0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | DMA2EN |  |
| field_missing_in_svd | AHBENR | FLASHEN |  |
| field_extra_in_svd | AHBENR | FLITFEN | svd[4:+1] |
| field_missing_in_svd | AHBENR | GPIOAEN |  |
| field_missing_in_svd | AHBENR | GPIOBEN |  |
| field_missing_in_svd | AHBENR | GPIOCEN |  |
| field_missing_in_svd | AHBENR | GPIODEN |  |
| field_missing_in_svd | AHBENR | GPIOEEN |  |
| field_missing_in_svd | AHBENR | GPIOFEN |  |
| field_extra_in_svd | AHBENR | IOPAEN | svd[17:+1] |
| field_extra_in_svd | AHBENR | IOPBEN | svd[18:+1] |
| field_extra_in_svd | AHBENR | IOPCEN | svd[19:+1] |
| field_extra_in_svd | AHBENR | IOPDEN | svd[20:+1] |
| field_extra_in_svd | AHBENR | IOPFEN | svd[22:+1] |
| field_missing_in_svd | AHBENR | TSCEN |  |
| field_missing_in_svd | AHBRSTR | GPIOARST |  |
| field_missing_in_svd | AHBRSTR | GPIOBRST |  |
| field_missing_in_svd | AHBRSTR | GPIOCRST |  |
| field_missing_in_svd | AHBRSTR | GPIODRST |  |
| field_missing_in_svd | AHBRSTR | GPIOERST |  |
| field_missing_in_svd | AHBRSTR | GPIOFRST |  |
| field_extra_in_svd | AHBRSTR | IOPARST | svd[17:+1] |
| field_extra_in_svd | AHBRSTR | IOPBRST | svd[18:+1] |
| field_extra_in_svd | AHBRSTR | IOPCRST | svd[19:+1] |
| field_extra_in_svd | AHBRSTR | IOPDRST | svd[20:+1] |
| field_extra_in_svd | AHBRSTR | IOPFRST | svd[22:+1] |
| field_missing_in_svd | AHBRSTR | TSCRST |  |
| field_missing_in_svd | APB1ENR | CANEN |  |
| field_missing_in_svd | APB1ENR | CECEN |  |
| field_missing_in_svd | APB1ENR | CRSEN |  |
| field_missing_in_svd | APB1ENR | DACEN |  |
| field_missing_in_svd | APB1ENR | TIM2EN |  |
| field_missing_in_svd | APB1RSTR | CANRST |  |
| field_missing_in_svd | APB1RSTR | CECRST |  |
| field_missing_in_svd | APB1RSTR | CRSRST |  |
| field_missing_in_svd | APB1RSTR | DACRST |  |
| field_missing_in_svd | APB1RSTR | TIM2RST |  |
| field_missing_in_svd | APB2ENR | USART7EN |  |
| field_missing_in_svd | APB2ENR | USART8EN |  |
| field_missing_in_svd | APB2RSTR | USART7RST |  |
| field_missing_in_svd | APB2RSTR | USART8RST |  |
| field_extra_in_svd | CFGR | MCO | svd[24:+4] |
| field_missing_in_svd | CFGR | MCOSEL |  |
| field_missing_in_svd | CFGR | PLLMCODIV |  |
| field_extra_in_svd | CFGR | PLLNODIV | svd[31:+1] |
| field_layout_mismatch | CFGR | PLLSRC | ip[15:+2] svd[16:+1] |
| field_missing_in_svd | CFGR3 | CECSW |  |
| field_extra_in_svd | CIR | HSI48RDYC | svd[22:+1] |
| field_extra_in_svd | CIR | HSI48RDYF | svd[6:+1] |
| field_extra_in_svd | CIR | HSI48RDYIE | svd[14:+1] |
| _… 3 more …_ | | | |

### rcc/f0v1  (stm32f030c6 · RCC · stm32f0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | DMA2EN |  |
| field_missing_in_svd | AHBENR | FLASHEN |  |
| field_extra_in_svd | AHBENR | FLITFEN | svd[4:+1] |
| field_missing_in_svd | AHBENR | GPIOAEN |  |
| field_missing_in_svd | AHBENR | GPIOBEN |  |
| field_missing_in_svd | AHBENR | GPIOCEN |  |
| field_missing_in_svd | AHBENR | GPIODEN |  |
| field_missing_in_svd | AHBENR | GPIOEEN |  |
| field_missing_in_svd | AHBENR | GPIOFEN |  |
| field_extra_in_svd | AHBENR | IOPAEN | svd[17:+1] |
| field_extra_in_svd | AHBENR | IOPBEN | svd[18:+1] |
| field_extra_in_svd | AHBENR | IOPCEN | svd[19:+1] |
| field_extra_in_svd | AHBENR | IOPDEN | svd[20:+1] |
| field_extra_in_svd | AHBENR | IOPFEN | svd[22:+1] |
| field_missing_in_svd | AHBENR | TSCEN |  |
| field_missing_in_svd | AHBRSTR | GPIOARST |  |
| field_missing_in_svd | AHBRSTR | GPIOBRST |  |
| field_missing_in_svd | AHBRSTR | GPIOCRST |  |
| field_missing_in_svd | AHBRSTR | GPIODRST |  |
| field_missing_in_svd | AHBRSTR | GPIOERST |  |
| field_missing_in_svd | AHBRSTR | GPIOFRST |  |
| field_extra_in_svd | AHBRSTR | IOPARST | svd[17:+1] |
| field_extra_in_svd | AHBRSTR | IOPBRST | svd[18:+1] |
| field_extra_in_svd | AHBRSTR | IOPCRST | svd[19:+1] |
| field_extra_in_svd | AHBRSTR | IOPDRST | svd[20:+1] |
| field_extra_in_svd | AHBRSTR | IOPFRST | svd[22:+1] |
| field_missing_in_svd | AHBRSTR | TSCRST |  |
| field_missing_in_svd | APB1ENR | CANEN |  |
| field_missing_in_svd | APB1ENR | CECEN |  |
| field_missing_in_svd | APB1ENR | CRSEN |  |
| field_missing_in_svd | APB1ENR | DACEN |  |
| field_missing_in_svd | APB1ENR | TIM2EN |  |
| field_missing_in_svd | APB1RSTR | CANRST |  |
| field_missing_in_svd | APB1RSTR | CECRST |  |
| field_missing_in_svd | APB1RSTR | CRSRST |  |
| field_missing_in_svd | APB1RSTR | DACRST |  |
| field_missing_in_svd | APB1RSTR | TIM2RST |  |
| field_missing_in_svd | APB2ENR | USART7EN |  |
| field_missing_in_svd | APB2ENR | USART8EN |  |
| field_missing_in_svd | APB2RSTR | USART7RST |  |
| field_missing_in_svd | APB2RSTR | USART8RST |  |
| field_extra_in_svd | CFGR | MCO | svd[24:+4] |
| field_extra_in_svd | CFGR | MCOPRE | svd[28:+3] |
| field_missing_in_svd | CFGR | MCOSEL |  |
| field_extra_in_svd | CFGR | PLLNODIV | svd[31:+1] |
| field_missing_in_svd | CFGR3 | CECSW |  |
| field_extra_in_svd | CIR | HSI48RDYC | svd[22:+1] |
| field_extra_in_svd | CIR | HSI48RDYF | svd[6:+1] |
| field_extra_in_svd | CIR | HSI48RDYIE | svd[14:+1] |
| field_extra_in_svd | CR2 | HSI48CAL | svd[24:+8] |
| _… 2 more …_ | | | |

### rcc/f0v2  (stm32f030c8 · RCC · stm32f0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | DMA2EN |  |
| field_missing_in_svd | AHBENR | FLASHEN |  |
| field_extra_in_svd | AHBENR | FLITFEN | svd[4:+1] |
| field_missing_in_svd | AHBENR | GPIOAEN |  |
| field_missing_in_svd | AHBENR | GPIOBEN |  |
| field_missing_in_svd | AHBENR | GPIOCEN |  |
| field_missing_in_svd | AHBENR | GPIODEN |  |
| field_missing_in_svd | AHBENR | GPIOEEN |  |
| field_missing_in_svd | AHBENR | GPIOFEN |  |
| field_extra_in_svd | AHBENR | IOPAEN | svd[17:+1] |
| field_extra_in_svd | AHBENR | IOPBEN | svd[18:+1] |
| field_extra_in_svd | AHBENR | IOPCEN | svd[19:+1] |
| field_extra_in_svd | AHBENR | IOPDEN | svd[20:+1] |
| field_extra_in_svd | AHBENR | IOPFEN | svd[22:+1] |
| field_missing_in_svd | AHBENR | TSCEN |  |
| field_missing_in_svd | AHBRSTR | GPIOARST |  |
| field_missing_in_svd | AHBRSTR | GPIOBRST |  |
| field_missing_in_svd | AHBRSTR | GPIOCRST |  |
| field_missing_in_svd | AHBRSTR | GPIODRST |  |
| field_missing_in_svd | AHBRSTR | GPIOERST |  |
| field_missing_in_svd | AHBRSTR | GPIOFRST |  |
| field_extra_in_svd | AHBRSTR | IOPARST | svd[17:+1] |
| field_extra_in_svd | AHBRSTR | IOPBRST | svd[18:+1] |
| field_extra_in_svd | AHBRSTR | IOPCRST | svd[19:+1] |
| field_extra_in_svd | AHBRSTR | IOPDRST | svd[20:+1] |
| field_extra_in_svd | AHBRSTR | IOPFRST | svd[22:+1] |
| field_missing_in_svd | AHBRSTR | TSCRST |  |
| field_missing_in_svd | APB1ENR | CANEN |  |
| field_missing_in_svd | APB1ENR | CECEN |  |
| field_missing_in_svd | APB1ENR | CRSEN |  |
| field_missing_in_svd | APB1ENR | DACEN |  |
| field_missing_in_svd | APB1ENR | TIM2EN |  |
| field_missing_in_svd | APB1RSTR | CANRST |  |
| field_missing_in_svd | APB1RSTR | CECRST |  |
| field_missing_in_svd | APB1RSTR | CRSRST |  |
| field_missing_in_svd | APB1RSTR | DACRST |  |
| field_missing_in_svd | APB1RSTR | TIM2RST |  |
| field_missing_in_svd | APB2ENR | USART7EN |  |
| field_missing_in_svd | APB2ENR | USART8EN |  |
| field_missing_in_svd | APB2RSTR | USART7RST |  |
| field_missing_in_svd | APB2RSTR | USART8RST |  |
| field_extra_in_svd | CFGR | MCO | svd[24:+4] |
| field_missing_in_svd | CFGR | MCOSEL |  |
| field_missing_in_svd | CFGR | PLLMCODIV |  |
| field_extra_in_svd | CFGR | PLLNODIV | svd[31:+1] |
| field_missing_in_svd | CFGR3 | CECSW |  |
| field_extra_in_svd | CIR | HSI48RDYC | svd[22:+1] |
| field_extra_in_svd | CIR | HSI48RDYF | svd[6:+1] |
| field_extra_in_svd | CIR | HSI48RDYIE | svd[14:+1] |
| field_extra_in_svd | CR2 | HSI48CAL | svd[24:+8] |
| _… 2 more …_ | | | |

### rtc/v2_f7  (stm32f730i8 · RTC · stm32f730.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALRM%sR |  | svd offset 0x1C |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| register_extra_in_svd | BKP%sR |  | svd offset 0x50 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | ISR | ALR%sF | svd[8:+1] |
| field_extra_in_svd | ISR | ALR%sWF | svd[0:+1] |
| field_missing_in_svd | ISR | ALRF |  |
| field_missing_in_svd | ISR | ALRWF |  |
| field_extra_in_svd | ISR | TAMP1F | svd[13:+1] |
| field_extra_in_svd | ISR | TAMP2F | svd[14:+1] |
| field_extra_in_svd | ISR | TAMP3F | svd[15:+1] |
| field_missing_in_svd | ISR | TAMPF |  |
| field_layout_mismatch | OR | TSINSEL | ip[1:+2] svd[1:+1] |
| field_extra_in_svd | TAMPCR | TAMP1E | svd[0:+1] |
| field_extra_in_svd | TAMPCR | TAMP1IE | svd[16:+1] |
| field_extra_in_svd | TAMPCR | TAMP1MF | svd[18:+1] |
| field_extra_in_svd | TAMPCR | TAMP1NOERASE | svd[17:+1] |
| field_extra_in_svd | TAMPCR | TAMP1TRG | svd[1:+1] |
| field_extra_in_svd | TAMPCR | TAMP2E | svd[3:+1] |
| field_extra_in_svd | TAMPCR | TAMP2IE | svd[19:+1] |
| field_extra_in_svd | TAMPCR | TAMP2MF | svd[21:+1] |
| field_extra_in_svd | TAMPCR | TAMP2NOERASE | svd[20:+1] |
| field_extra_in_svd | TAMPCR | TAMP2TRG | svd[4:+1] |
| field_extra_in_svd | TAMPCR | TAMP3E | svd[5:+1] |
| field_extra_in_svd | TAMPCR | TAMP3IE | svd[22:+1] |
| field_extra_in_svd | TAMPCR | TAMP3MF | svd[24:+1] |
| field_extra_in_svd | TAMPCR | TAMP3NOERASE | svd[23:+1] |
| field_extra_in_svd | TAMPCR | TAMP3TRG | svd[6:+1] |
| field_missing_in_svd | TAMPCR | TAMPE |  |
| field_missing_in_svd | TAMPCR | TAMPTRG |  |
| field_missing_in_svd | TAMPCR | TAMPXIE |  |
| field_missing_in_svd | TAMPCR | TAMPXMF |  |
| field_missing_in_svd | TAMPCR | TAMPXNOERASE |  |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| _… 2 more …_ | | | |

### rtc/v2_l0  (stm32l010c6 · RTC · stm32l0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALRM%sR |  | svd offset 0x1C |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| register_extra_in_svd | BKP%sR |  | svd offset 0x50 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | ISR | ALR%sF | svd[8:+1] |
| field_extra_in_svd | ISR | ALR%sWF | svd[0:+1] |
| field_missing_in_svd | ISR | ALRF |  |
| field_missing_in_svd | ISR | ALRWF |  |
| field_extra_in_svd | ISR | TAMP1F | svd[13:+1] |
| field_extra_in_svd | ISR | TAMP2F | svd[14:+1] |
| field_extra_in_svd | ISR | TAMP3F | svd[15:+1] |
| field_missing_in_svd | ISR | TAMPF |  |
| field_layout_mismatch | PRER | PREDIV_S | ip[0:+15] svd[0:+16] |
| field_extra_in_svd | TAMPCR | TAMP1E | svd[0:+1] |
| field_extra_in_svd | TAMPCR | TAMP1IE | svd[16:+1] |
| field_extra_in_svd | TAMPCR | TAMP1MF | svd[18:+1] |
| field_extra_in_svd | TAMPCR | TAMP1NOERASE | svd[17:+1] |
| field_extra_in_svd | TAMPCR | TAMP1TRG | svd[1:+1] |
| field_extra_in_svd | TAMPCR | TAMP2E | svd[3:+1] |
| field_extra_in_svd | TAMPCR | TAMP2IE | svd[19:+1] |
| field_extra_in_svd | TAMPCR | TAMP2MF | svd[21:+1] |
| field_extra_in_svd | TAMPCR | TAMP2NOERASE | svd[20:+1] |
| field_extra_in_svd | TAMPCR | TAMP2TRG | svd[4:+1] |
| field_extra_in_svd | TAMPCR | TAMP3E | svd[5:+1] |
| field_extra_in_svd | TAMPCR | TAMP3IE | svd[22:+1] |
| field_extra_in_svd | TAMPCR | TAMP3MF | svd[24:+1] |
| field_extra_in_svd | TAMPCR | TAMP3NOERASE | svd[23:+1] |
| field_extra_in_svd | TAMPCR | TAMP3TRG | svd[6:+1] |
| field_missing_in_svd | TAMPCR | TAMPE |  |
| field_missing_in_svd | TAMPCR | TAMPTRG |  |
| field_missing_in_svd | TAMPCR | TAMPXIE |  |
| field_missing_in_svd | TAMPCR | TAMPXMF |  |
| field_missing_in_svd | TAMPCR | TAMPXNOERASE |  |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| _… 2 more …_ | | | |

### rcc/l0_v2  (stm32l052c6 · RCC · stm32l0x2.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | DMA1EN |  |
| field_extra_in_svd | AHBENR | DMAEN | svd[0:+1] |
| field_extra_in_svd | AHBENR | TOUCHEN | svd[16:+1] |
| field_missing_in_svd | AHBENR | TSCEN |  |
| field_missing_in_svd | AHBRSTR | DMA1RST |  |
| field_extra_in_svd | AHBRSTR | DMARST | svd[0:+1] |
| field_extra_in_svd | AHBRSTR | TOUCHRST | svd[16:+1] |
| field_missing_in_svd | AHBRSTR | TSCRST |  |
| field_missing_in_svd | AHBSMENR | DMA1SMEN |  |
| field_extra_in_svd | AHBSMENR | DMASMEN | svd[0:+1] |
| field_extra_in_svd | AHBSMENR | TOUCHSMEN | svd[16:+1] |
| field_missing_in_svd | AHBSMENR | TSCSMEN |  |
| field_missing_in_svd | APB1ENR | LCDEN |  |
| field_missing_in_svd | APB1RSTR | LCDRST |  |
| field_extra_in_svd | APB1RSTR | LPUART12RST | svd[17:+1] |
| field_missing_in_svd | APB1RSTR | USART2RST |  |
| field_missing_in_svd | APB1RSTR | WWDGRST |  |
| field_extra_in_svd | APB1RSTR | WWDRST | svd[11:+1] |
| field_missing_in_svd | APB1SMENR | LCDSMEN |  |
| field_missing_in_svd | APB2ENR | FWEN |  |
| field_extra_in_svd | APB2ENR | MIFIEN | svd[7:+1] |
| field_missing_in_svd | CCIPR | CLK48SEL |  |
| field_extra_in_svd | CCIPR | HSI48MSEL | svd[26:+1] |
| field_extra_in_svd | CICR | HSI16RDYC | svd[2:+1] |
| field_missing_in_svd | CICR | HSIRDYC |  |
| field_extra_in_svd | CIER | HSI16RDYIE | svd[2:+1] |
| field_missing_in_svd | CIER | HSIRDYIE |  |
| field_extra_in_svd | CIFR | HSI16RDYF | svd[2:+1] |
| field_missing_in_svd | CIFR | HSIRDYF |  |
| field_extra_in_svd | CR | HSI16DIVEN | svd[3:+1] |
| field_extra_in_svd | CR | HSI16DIVF | svd[4:+1] |
| field_extra_in_svd | CR | HSI16KERON | svd[1:+1] |
| field_extra_in_svd | CR | HSI16ON | svd[0:+1] |
| field_extra_in_svd | CR | HSI16OUTEN | svd[5:+1] |
| field_extra_in_svd | CR | HSI16RDYF | svd[2:+1] |
| field_missing_in_svd | CR | HSIDIVEN |  |
| field_missing_in_svd | CR | HSIDIVF |  |
| field_missing_in_svd | CR | HSIKERON |  |
| field_missing_in_svd | CR | HSION |  |
| field_missing_in_svd | CR | HSIOUTEN |  |
| field_missing_in_svd | CR | HSIRDY |  |
| register_missing_in_svd | GPIOENR |  |  |
| register_missing_in_svd | GPIORSTR |  |  |
| register_missing_in_svd | GPIOSMEN |  |  |
| field_extra_in_svd | ICSCR | HSI16CAL | svd[0:+8] |
| field_extra_in_svd | ICSCR | HSI16TRIM | svd[8:+5] |
| field_missing_in_svd | ICSCR | HSICAL |  |
| field_missing_in_svd | ICSCR | HSITRIM |  |
| register_extra_in_svd | IOPENR |  | svd offset 0x2C |
| register_extra_in_svd | IOPRSTR |  | svd offset 0x1C |
| _… 1 more …_ | | | |

### rtc/v2_h7  (stm32h723ve · RTC · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALRM%sR |  | svd offset 0x1C |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| register_extra_in_svd | BKP%sR |  | svd offset 0x50 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | ISR | ALR%sF | svd[8:+1] |
| field_extra_in_svd | ISR | ALR%sWF | svd[0:+1] |
| field_missing_in_svd | ISR | ALRF |  |
| field_missing_in_svd | ISR | ALRWF |  |
| field_extra_in_svd | ISR | TAMP1F | svd[13:+1] |
| field_extra_in_svd | ISR | TAMP2F | svd[14:+1] |
| field_extra_in_svd | ISR | TAMP3F | svd[15:+1] |
| field_missing_in_svd | ISR | TAMPF |  |
| field_extra_in_svd | TAMPCR | TAMP1E | svd[0:+1] |
| field_extra_in_svd | TAMPCR | TAMP1IE | svd[16:+1] |
| field_extra_in_svd | TAMPCR | TAMP1MF | svd[18:+1] |
| field_extra_in_svd | TAMPCR | TAMP1NOERASE | svd[17:+1] |
| field_extra_in_svd | TAMPCR | TAMP1TRG | svd[1:+1] |
| field_extra_in_svd | TAMPCR | TAMP2E | svd[3:+1] |
| field_extra_in_svd | TAMPCR | TAMP2IE | svd[19:+1] |
| field_extra_in_svd | TAMPCR | TAMP2MF | svd[21:+1] |
| field_extra_in_svd | TAMPCR | TAMP2NOERASE | svd[20:+1] |
| field_extra_in_svd | TAMPCR | TAMP2TRG | svd[4:+1] |
| field_extra_in_svd | TAMPCR | TAMP3E | svd[5:+1] |
| field_extra_in_svd | TAMPCR | TAMP3IE | svd[22:+1] |
| field_extra_in_svd | TAMPCR | TAMP3MF | svd[24:+1] |
| field_extra_in_svd | TAMPCR | TAMP3NOERASE | svd[23:+1] |
| field_extra_in_svd | TAMPCR | TAMP3TRG | svd[6:+1] |
| field_missing_in_svd | TAMPCR | TAMPE |  |
| field_missing_in_svd | TAMPCR | TAMPTRG |  |
| field_missing_in_svd | TAMPCR | TAMPXIE |  |
| field_missing_in_svd | TAMPCR | TAMPXMF |  |
| field_missing_in_svd | TAMPCR | TAMPXNOERASE |  |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| _… 1 more …_ | | | |

### rtc/v2_l4  (stm32l431cb · RTC · stm32l4x1.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALRM%sR |  | svd offset 0x1C |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| register_extra_in_svd | BKP%sR |  | svd offset 0x50 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | ISR | ALR%sF | svd[8:+1] |
| field_extra_in_svd | ISR | ALR%sWF | svd[0:+1] |
| field_missing_in_svd | ISR | ALRF |  |
| field_missing_in_svd | ISR | ALRWF |  |
| field_extra_in_svd | ISR | TAMP1F | svd[13:+1] |
| field_extra_in_svd | ISR | TAMP2F | svd[14:+1] |
| field_extra_in_svd | ISR | TAMP3F | svd[15:+1] |
| field_missing_in_svd | ISR | TAMPF |  |
| field_extra_in_svd | TAMPCR | TAMP1E | svd[0:+1] |
| field_extra_in_svd | TAMPCR | TAMP1IE | svd[16:+1] |
| field_extra_in_svd | TAMPCR | TAMP1MF | svd[18:+1] |
| field_extra_in_svd | TAMPCR | TAMP1NOERASE | svd[17:+1] |
| field_extra_in_svd | TAMPCR | TAMP1TRG | svd[1:+1] |
| field_extra_in_svd | TAMPCR | TAMP2E | svd[3:+1] |
| field_extra_in_svd | TAMPCR | TAMP2IE | svd[19:+1] |
| field_extra_in_svd | TAMPCR | TAMP2MF | svd[21:+1] |
| field_extra_in_svd | TAMPCR | TAMP2NOERASE | svd[20:+1] |
| field_extra_in_svd | TAMPCR | TAMP2TRG | svd[4:+1] |
| field_extra_in_svd | TAMPCR | TAMP3E | svd[5:+1] |
| field_extra_in_svd | TAMPCR | TAMP3IE | svd[22:+1] |
| field_extra_in_svd | TAMPCR | TAMP3MF | svd[24:+1] |
| field_extra_in_svd | TAMPCR | TAMP3NOERASE | svd[23:+1] |
| field_extra_in_svd | TAMPCR | TAMP3TRG | svd[6:+1] |
| field_missing_in_svd | TAMPCR | TAMPE |  |
| field_missing_in_svd | TAMPCR | TAMPTRG |  |
| field_missing_in_svd | TAMPCR | TAMPXIE |  |
| field_missing_in_svd | TAMPCR | TAMPXMF |  |
| field_missing_in_svd | TAMPCR | TAMPXNOERASE |  |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| _… 1 more …_ | | | |

### rtc/v2_wb  (stm32wb55cc · RTC · stm32wb55.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALRM%sR |  | svd offset 0x1C |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| register_extra_in_svd | BKP%sR |  | svd offset 0x50 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | ISR | ALR%sF | svd[8:+1] |
| field_extra_in_svd | ISR | ALR%sWF | svd[0:+1] |
| field_missing_in_svd | ISR | ALRF |  |
| field_missing_in_svd | ISR | ALRWF |  |
| field_extra_in_svd | ISR | TAMP1F | svd[13:+1] |
| field_extra_in_svd | ISR | TAMP2F | svd[14:+1] |
| field_extra_in_svd | ISR | TAMP3F | svd[15:+1] |
| field_missing_in_svd | ISR | TAMPF |  |
| field_extra_in_svd | TAMPCR | TAMP1E | svd[0:+1] |
| field_extra_in_svd | TAMPCR | TAMP1IE | svd[16:+1] |
| field_extra_in_svd | TAMPCR | TAMP1MF | svd[18:+1] |
| field_extra_in_svd | TAMPCR | TAMP1NOERASE | svd[17:+1] |
| field_extra_in_svd | TAMPCR | TAMP1TRG | svd[1:+1] |
| field_extra_in_svd | TAMPCR | TAMP2E | svd[3:+1] |
| field_extra_in_svd | TAMPCR | TAMP2IE | svd[19:+1] |
| field_extra_in_svd | TAMPCR | TAMP2MF | svd[21:+1] |
| field_extra_in_svd | TAMPCR | TAMP2NOERASE | svd[20:+1] |
| field_extra_in_svd | TAMPCR | TAMP2TRG | svd[4:+1] |
| field_extra_in_svd | TAMPCR | TAMP3E | svd[5:+1] |
| field_extra_in_svd | TAMPCR | TAMP3IE | svd[22:+1] |
| field_extra_in_svd | TAMPCR | TAMP3MF | svd[24:+1] |
| field_extra_in_svd | TAMPCR | TAMP3NOERASE | svd[23:+1] |
| field_extra_in_svd | TAMPCR | TAMP3TRG | svd[6:+1] |
| field_missing_in_svd | TAMPCR | TAMPE |  |
| field_missing_in_svd | TAMPCR | TAMPTRG |  |
| field_missing_in_svd | TAMPCR | TAMPXIE |  |
| field_missing_in_svd | TAMPCR | TAMPXMF |  |
| field_missing_in_svd | TAMPCR | TAMPXNOERASE |  |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| _… 1 more …_ | | | |

### timer/v1  (stm32f030c6 · TIM1 · stm32f0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | AF1 |  |  |
| register_missing_in_svd | AF2 |  |  |
| field_extra_in_svd | ARR | ARR | svd[0:+16] |
| field_missing_in_svd | BDTR | BKF |  |
| field_extra_in_svd | CCER | CC%sE | svd[0:+1] |
| field_extra_in_svd | CCER | CC%sNE | svd[2:+1] |
| field_extra_in_svd | CCER | CC%sNP | svd[3:+1] |
| field_extra_in_svd | CCER | CC%sP | svd[1:+1] |
| field_missing_in_svd | CCER | CCE |  |
| field_missing_in_svd | CCER | CCNP |  |
| field_missing_in_svd | CCER | CCP |  |
| register_extra_in_svd | CCMR1_Input |  | svd offset 0x18 |
| register_extra_in_svd | CCMR1_Output |  | svd offset 0x18 |
| register_extra_in_svd | CCMR2_Input |  | svd offset 0x1C |
| register_extra_in_svd | CCMR2_Output |  | svd offset 0x1C |
| register_missing_in_svd | CCMR3 |  |  |
| register_missing_in_svd | CCMR_Input |  |  |
| register_missing_in_svd | CCMR_Output |  |  |
| register_missing_in_svd | CCR |  |  |
| register_extra_in_svd | CCR%s |  | svd offset 0x34 |
| register_missing_in_svd | CCR5 |  |  |
| register_missing_in_svd | CCR6 |  |  |
| field_extra_in_svd | CNT | CNT | svd[0:+16] |
| field_missing_in_svd | CR1 | UIFREMAP |  |
| field_extra_in_svd | CR2 | CCPC | svd[0:+1] |
| field_extra_in_svd | CR2 | CCUS | svd[2:+1] |
| field_extra_in_svd | CR2 | OIS%s | svd[8:+1] |
| field_extra_in_svd | CR2 | OIS%sN | svd[9:+1] |
| field_extra_in_svd | DIER | BIE | svd[7:+1] |
| field_extra_in_svd | DIER | CC%sDE | svd[9:+1] |
| field_extra_in_svd | DIER | CC%sIE | svd[1:+1] |
| field_missing_in_svd | DIER | CCDE |  |
| field_missing_in_svd | DIER | CCIE |  |
| field_extra_in_svd | DIER | COMDE | svd[13:+1] |
| field_extra_in_svd | DIER | COMIE | svd[5:+1] |
| field_extra_in_svd | EGR | BG | svd[7:+1] |
| field_extra_in_svd | EGR | CC%sG | svd[1:+1] |
| field_missing_in_svd | EGR | CCG |  |
| field_extra_in_svd | EGR | COMG | svd[5:+1] |
| register_missing_in_svd | OR |  |  |
| field_extra_in_svd | PSC | PSC | svd[0:+16] |
| field_layout_mismatch | RCR | REP | ip[0:+16] svd[0:+8] |
| field_layout_mismatch | SMCR | SMS | ip[[{'start': 0, 'end': 2}, {'start': 16, 'end': 16}]:+4] svd[0:+3] |
| field_layout_mismatch | SMCR | TS | ip[[{'start': 4, 'end': 6}, {'start': 20, 'end': 21}]:+5] svd[4:+3] |
| field_extra_in_svd | SR | BIF | svd[7:+1] |
| field_extra_in_svd | SR | CC%sIF | svd[1:+1] |
| field_extra_in_svd | SR | CC%sOF | svd[9:+1] |
| field_missing_in_svd | SR | CCIF |  |
| field_missing_in_svd | SR | CCOF |  |
| field_extra_in_svd | SR | COMIF | svd[5:+1] |
| _… 1 more …_ | | | |

### can/bxcan  (stm32f042c4 · CAN · stm32f0x2.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | BTR | TS |  |
| field_extra_in_svd | BTR | TS1 | svd[16:+4] |
| field_extra_in_svd | BTR | TS2 | svd[20:+3] |
| field_missing_in_svd | FA1R | FACT |  |
| field_extra_in_svd | FA1R | FACT%s | svd[0:+1] |
| register_missing_in_svd | FB |  |  |
| field_missing_in_svd | FFA1R | FFA |  |
| field_extra_in_svd | FFA1R | FFA%s | svd[0:+1] |
| field_missing_in_svd | FM1R | FBM |  |
| field_extra_in_svd | FM1R | FBM%s | svd[0:+1] |
| register_missing_in_svd | FR1 |  |  |
| register_missing_in_svd | FR2 |  |  |
| field_missing_in_svd | FS1R | FSC |  |
| field_extra_in_svd | FS1R | FSC%s | svd[0:+1] |
| field_missing_in_svd | IER | FFIE |  |
| field_extra_in_svd | IER | FFIE0 | svd[2:+1] |
| field_extra_in_svd | IER | FFIE1 | svd[5:+1] |
| field_missing_in_svd | IER | FMPIE |  |
| field_extra_in_svd | IER | FMPIE0 | svd[1:+1] |
| field_extra_in_svd | IER | FMPIE1 | svd[4:+1] |
| field_missing_in_svd | IER | FOVIE |  |
| field_extra_in_svd | IER | FOVIE0 | svd[3:+1] |
| field_extra_in_svd | IER | FOVIE1 | svd[6:+1] |
| register_missing_in_svd | RDHR |  |  |
| register_missing_in_svd | RDLR |  |  |
| register_missing_in_svd | RDTR |  |  |
| register_extra_in_svd | RF%sR |  | svd offset 0xC |
| register_missing_in_svd | RFR |  |  |
| register_missing_in_svd | RIR |  |  |
| register_missing_in_svd | RX |  |  |
| register_missing_in_svd | TDHR |  |  |
| register_missing_in_svd | TDLR |  |  |
| register_missing_in_svd | TDTR |  |  |
| register_missing_in_svd | TIR |  |  |
| field_missing_in_svd | TSR | ABRQ |  |
| field_extra_in_svd | TSR | ABRQ%s | svd[7:+1] |
| field_missing_in_svd | TSR | ALST |  |
| field_extra_in_svd | TSR | ALST%s | svd[2:+1] |
| field_missing_in_svd | TSR | LOW |  |
| field_extra_in_svd | TSR | LOW%s | svd[29:+1] |
| field_missing_in_svd | TSR | RQCP |  |
| field_extra_in_svd | TSR | RQCP%s | svd[0:+1] |
| field_missing_in_svd | TSR | TERR |  |
| field_extra_in_svd | TSR | TERR%s | svd[3:+1] |
| field_missing_in_svd | TSR | TME |  |
| field_extra_in_svd | TSR | TME%s | svd[26:+1] |
| field_missing_in_svd | TSR | TXOK |  |
| field_extra_in_svd | TSR | TXOK%s | svd[1:+1] |
| register_missing_in_svd | TX |  |  |

### dac/v4  (stm32h7a3ag · DAC1 · stm32h7b3.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CCR | OTRIM |  |
| field_extra_in_svd | CCR | OTRIM%s | svd[0:+5] |
| field_missing_in_svd | CR | CEN |  |
| field_extra_in_svd | CR | CEN%s | svd[14:+1] |
| field_missing_in_svd | CR | DMAEN |  |
| field_extra_in_svd | CR | DMAEN%s | svd[12:+1] |
| field_missing_in_svd | CR | DMAUDRIE |  |
| field_extra_in_svd | CR | DMAUDRIE%s | svd[13:+1] |
| field_missing_in_svd | CR | EN |  |
| field_extra_in_svd | CR | EN%s | svd[0:+1] |
| field_missing_in_svd | CR | MAMP |  |
| field_extra_in_svd | CR | MAMP%s | svd[8:+4] |
| field_missing_in_svd | CR | TEN |  |
| field_extra_in_svd | CR | TEN%s | svd[1:+1] |
| field_missing_in_svd | CR | TSEL |  |
| field_extra_in_svd | CR | TSEL1 | svd[2:+4] |
| field_extra_in_svd | CR | TSEL2 | svd[18:+4] |
| field_missing_in_svd | CR | WAVE |  |
| field_extra_in_svd | CR | WAVE%s | svd[6:+2] |
| register_missing_in_svd | DHR12L |  |  |
| register_extra_in_svd | DHR12L%s |  | svd offset 0xC |
| field_extra_in_svd | DHR12LD | DACC%sDHR | svd[4:+12] |
| field_missing_in_svd | DHR12LD | DHR |  |
| register_missing_in_svd | DHR12R |  |  |
| register_extra_in_svd | DHR12R%s |  | svd offset 0x8 |
| field_extra_in_svd | DHR12RD | DACC%sDHR | svd[0:+12] |
| field_missing_in_svd | DHR12RD | DHR |  |
| register_missing_in_svd | DHR8R |  |  |
| register_extra_in_svd | DHR8R%s |  | svd offset 0x10 |
| field_extra_in_svd | DHR8RD | DACC%sDHR | svd[0:+8] |
| field_missing_in_svd | DHR8RD | DHR |  |
| register_missing_in_svd | DOR |  |  |
| register_extra_in_svd | DOR%s |  | svd offset 0x2C |
| field_missing_in_svd | MCR | MODE |  |
| field_extra_in_svd | MCR | MODE%s | svd[0:+3] |
| field_missing_in_svd | SHHR | THOLD |  |
| field_extra_in_svd | SHHR | THOLD%s | svd[0:+10] |
| field_missing_in_svd | SHRR | TREFRESH |  |
| field_extra_in_svd | SHRR | TREFRESH%s | svd[0:+8] |
| register_missing_in_svd | SHSR |  |  |
| register_extra_in_svd | SHSR%s |  | svd offset 0x40 |
| field_missing_in_svd | SR | BWST |  |
| field_extra_in_svd | SR | BWST%s | svd[15:+1] |
| field_missing_in_svd | SR | CAL_FLAG |  |
| field_extra_in_svd | SR | CAL_FLAG%s | svd[14:+1] |
| field_missing_in_svd | SR | DMAUDR |  |
| field_extra_in_svd | SR | DMAUDR%s | svd[13:+1] |
| register_extra_in_svd | SWTRGR |  | svd offset 0x4 |
| register_missing_in_svd | SWTRIGR |  |  |

### pwr/g0  (stm32g030c6 · PWR · stm32g030.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR2 | PVDE |  |
| field_missing_in_svd | CR2 | PVDFT |  |
| field_missing_in_svd | CR2 | PVDRT |  |
| field_extra_in_svd | CR2 | USV | svd[10:+1] |
| field_missing_in_svd | CR3 | EWUP |  |
| field_extra_in_svd | CR3 | EWUP1 | svd[0:+1] |
| field_extra_in_svd | CR3 | EWUP2 | svd[1:+1] |
| field_extra_in_svd | CR3 | EWUP3 | svd[2:+1] |
| field_extra_in_svd | CR3 | EWUP4 | svd[3:+1] |
| field_extra_in_svd | CR3 | EWUP5 | svd[4:+1] |
| field_extra_in_svd | CR3 | EWUP6 | svd[5:+1] |
| field_missing_in_svd | CR3 | RRS |  |
| field_missing_in_svd | CR3 | ULPEN |  |
| field_missing_in_svd | CR4 | WP |  |
| field_extra_in_svd | CR4 | WP1 | svd[0:+1] |
| field_extra_in_svd | CR4 | WP2 | svd[1:+1] |
| field_extra_in_svd | CR4 | WP3 | svd[2:+1] |
| field_extra_in_svd | CR4 | WP4 | svd[3:+1] |
| field_extra_in_svd | CR4 | WP5 | svd[4:+1] |
| field_extra_in_svd | CR4 | WP6 | svd[5:+1] |
| register_missing_in_svd | PDCR |  |  |
| register_extra_in_svd | PDCRA |  | svd offset 0x24 |
| register_extra_in_svd | PDCRB |  | svd offset 0x2C |
| register_extra_in_svd | PDCRC |  | svd offset 0x34 |
| register_extra_in_svd | PDCRD |  | svd offset 0x3C |
| register_extra_in_svd | PDCRE |  | svd offset 0x44 |
| register_extra_in_svd | PDCRF |  | svd offset 0x4C |
| register_missing_in_svd | PUCR |  |  |
| register_extra_in_svd | PUCRA |  | svd offset 0x20 |
| register_extra_in_svd | PUCRB |  | svd offset 0x28 |
| register_extra_in_svd | PUCRC |  | svd offset 0x30 |
| register_extra_in_svd | PUCRD |  | svd offset 0x38 |
| register_extra_in_svd | PUCRE |  | svd offset 0x40 |
| register_extra_in_svd | PUCRF |  | svd offset 0x48 |
| field_missing_in_svd | SCR | CWUF |  |
| field_extra_in_svd | SCR | CWUF1 | svd[0:+1] |
| field_extra_in_svd | SCR | CWUF2 | svd[1:+1] |
| field_extra_in_svd | SCR | CWUF3 | svd[2:+1] |
| field_extra_in_svd | SCR | CWUF4 | svd[3:+1] |
| field_extra_in_svd | SCR | CWUF5 | svd[4:+1] |
| field_extra_in_svd | SCR | CWUF6 | svd[5:+1] |
| field_missing_in_svd | SR1 | WUF |  |
| field_extra_in_svd | SR1 | WUF1 | svd[0:+1] |
| field_extra_in_svd | SR1 | WUF2 | svd[1:+1] |
| field_extra_in_svd | SR1 | WUF3 | svd[2:+1] |
| field_extra_in_svd | SR1 | WUF4 | svd[3:+1] |
| field_extra_in_svd | SR1 | WUF5 | svd[4:+1] |
| field_extra_in_svd | SR1 | WUF6 | svd[5:+1] |
| field_missing_in_svd | SR2 | PVDO |  |

### rcc/f37  (stm32f373c8 · RCC · stm32f373.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | FLASHEN |  |
| field_extra_in_svd | AHBENR | FLITFEN | svd[4:+1] |
| field_missing_in_svd | AHBENR | GPIOAEN |  |
| field_missing_in_svd | AHBENR | GPIOBEN |  |
| field_missing_in_svd | AHBENR | GPIOCEN |  |
| field_missing_in_svd | AHBENR | GPIODEN |  |
| field_missing_in_svd | AHBENR | GPIOEEN |  |
| field_missing_in_svd | AHBENR | GPIOFEN |  |
| field_extra_in_svd | AHBENR | IOPAEN | svd[17:+1] |
| field_extra_in_svd | AHBENR | IOPBEN | svd[18:+1] |
| field_extra_in_svd | AHBENR | IOPCEN | svd[19:+1] |
| field_extra_in_svd | AHBENR | IOPDEN | svd[20:+1] |
| field_extra_in_svd | AHBENR | IOPEEN | svd[21:+1] |
| field_extra_in_svd | AHBENR | IOPFEN | svd[22:+1] |
| field_missing_in_svd | AHBRSTR | GPIOARST |  |
| field_missing_in_svd | AHBRSTR | GPIOBRST |  |
| field_missing_in_svd | AHBRSTR | GPIOCRST |  |
| field_missing_in_svd | AHBRSTR | GPIODRST |  |
| field_missing_in_svd | AHBRSTR | GPIOERST |  |
| field_missing_in_svd | AHBRSTR | GPIOFRST |  |
| field_extra_in_svd | AHBRSTR | IOPARST | svd[17:+1] |
| field_extra_in_svd | AHBRSTR | IOPBRST | svd[18:+1] |
| field_extra_in_svd | AHBRSTR | IOPCRST | svd[19:+1] |
| field_extra_in_svd | AHBRSTR | IOPDRST | svd[20:+1] |
| field_extra_in_svd | AHBRSTR | IOPERST | svd[21:+1] |
| field_extra_in_svd | AHBRSTR | IOPFRST | svd[22:+1] |
| field_extra_in_svd | APB1ENR | DAC1EN | svd[29:+1] |
| field_missing_in_svd | APB1ENR | DACEN |  |
| field_extra_in_svd | APB1RSTR | DAC1RST | svd[29:+1] |
| field_missing_in_svd | APB1RSTR | DACRST |  |
| field_missing_in_svd | APB2RSTR | DBGMCURST |  |
| field_missing_in_svd | CFGR | I2SSRC |  |
| field_extra_in_svd | CFGR | MCO | svd[24:+3] |
| field_missing_in_svd | CFGR | MCOSEL |  |
| field_missing_in_svd | CFGR2 | ADC12PRES |  |
| field_missing_in_svd | CFGR2 | ADC1PRES |  |
| field_missing_in_svd | CFGR2 | ADC34PRES |  |
| field_missing_in_svd | CFGR3 | HRTIM1SW |  |
| field_missing_in_svd | CFGR3 | I2C3SW |  |
| field_missing_in_svd | CFGR3 | TIM15SW |  |
| field_missing_in_svd | CFGR3 | TIM16SW |  |
| field_missing_in_svd | CFGR3 | TIM17SW |  |
| field_missing_in_svd | CFGR3 | TIM1SW |  |
| field_missing_in_svd | CFGR3 | TIM20SW |  |
| field_missing_in_svd | CFGR3 | TIM2SW |  |
| field_missing_in_svd | CFGR3 | TIM34SW |  |
| field_missing_in_svd | CFGR3 | TIM8SW |  |
| field_missing_in_svd | CFGR3 | UART4SW |  |
| field_missing_in_svd | CFGR3 | UART5SW |  |

### pwr/l4  (stm32l412c8 · PWR · stm32l412.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR2 | IOSV |  |
| field_missing_in_svd | CR2 | PVME2 |  |
| field_extra_in_svd | CR3 | EIWUL | svd[15:+1] |
| field_extra_in_svd | CR3 | ENULP | svd[11:+1] |
| field_missing_in_svd | CR3 | EWF |  |
| field_missing_in_svd | CR3 | EWUP |  |
| field_extra_in_svd | CR3 | EWUP1 | svd[0:+1] |
| field_extra_in_svd | CR3 | EWUP2 | svd[1:+1] |
| field_extra_in_svd | CR3 | EWUP3 | svd[2:+1] |
| field_extra_in_svd | CR3 | EWUP4 | svd[3:+1] |
| field_extra_in_svd | CR3 | EWUP5 | svd[4:+1] |
| field_extra_in_svd | CR4 | EXT_SMPS_ON | svd[13:+1] |
| register_missing_in_svd | PDCR |  |  |
| register_extra_in_svd | PDCRA |  | svd offset 0x24 |
| register_extra_in_svd | PDCRB |  | svd offset 0x2C |
| register_extra_in_svd | PDCRC |  | svd offset 0x34 |
| register_extra_in_svd | PDCRD |  | svd offset 0x3C |
| register_extra_in_svd | PDCRE |  | svd offset 0x44 |
| register_extra_in_svd | PDCRH |  | svd offset 0x5C |
| register_missing_in_svd | PUCR |  |  |
| register_extra_in_svd | PUCRA |  | svd offset 0x20 |
| register_extra_in_svd | PUCRB |  | svd offset 0x28 |
| register_extra_in_svd | PUCRC |  | svd offset 0x30 |
| register_extra_in_svd | PUCRD |  | svd offset 0x38 |
| register_extra_in_svd | PUCRE |  | svd offset 0x40 |
| register_extra_in_svd | PUCRH |  | svd offset 0x58 |
| field_extra_in_svd | SCR | CSBF | svd[8:+1] |
| field_missing_in_svd | SCR | CWUF |  |
| field_extra_in_svd | SCR | CWUF1 | svd[0:+1] |
| field_extra_in_svd | SCR | CWUF2 | svd[1:+1] |
| field_extra_in_svd | SCR | CWUF3 | svd[2:+1] |
| field_extra_in_svd | SCR | CWUF4 | svd[3:+1] |
| field_extra_in_svd | SCR | CWUF5 | svd[4:+1] |
| field_missing_in_svd | SCR | SBF |  |
| field_missing_in_svd | SR1 | CSBF |  |
| field_missing_in_svd | SR1 | CWUF1 |  |
| field_missing_in_svd | SR1 | CWUF2 |  |
| field_missing_in_svd | SR1 | CWUF3 |  |
| field_missing_in_svd | SR1 | CWUF4 |  |
| field_missing_in_svd | SR1 | CWUF5 |  |
| field_extra_in_svd | SR1 | EXT_SMPS_RDY | svd[13:+1] |
| field_extra_in_svd | SR1 | SBF | svd[8:+1] |
| field_extra_in_svd | SR1 | WUF1 | svd[0:+1] |
| field_extra_in_svd | SR1 | WUF2 | svd[1:+1] |
| field_extra_in_svd | SR1 | WUF3 | svd[2:+1] |
| field_extra_in_svd | SR1 | WUF4 | svd[3:+1] |
| field_extra_in_svd | SR1 | WUF5 | svd[4:+1] |
| field_missing_in_svd | SR2 | PVMO2 |  |

### rcc/f2  (stm32f205rb · RCC · stm32f215.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB1ENR | ETHEN |  |
| field_extra_in_svd | AHB1ENR | ETHMACEN | svd[25:+1] |
| field_extra_in_svd | AHB1ENR | ETHMACPTPEN | svd[28:+1] |
| field_extra_in_svd | AHB1ENR | ETHMACRXEN | svd[27:+1] |
| field_extra_in_svd | AHB1ENR | ETHMACTXEN | svd[26:+1] |
| field_missing_in_svd | AHB1ENR | ETHPTPEN |  |
| field_missing_in_svd | AHB1ENR | ETHRXEN |  |
| field_missing_in_svd | AHB1ENR | ETHTXEN |  |
| field_extra_in_svd | AHB1ENR | OTGHSEN | svd[29:+1] |
| field_extra_in_svd | AHB1ENR | OTGHSULPIEN | svd[30:+1] |
| field_missing_in_svd | AHB1ENR | USB_OTG_HSEN |  |
| field_missing_in_svd | AHB1ENR | USB_OTG_HSULPIEN |  |
| field_missing_in_svd | AHB1LPENR | ETHLPEN |  |
| field_extra_in_svd | AHB1LPENR | ETHMACLPEN | svd[25:+1] |
| field_extra_in_svd | AHB1LPENR | ETHMACPTPLPEN | svd[28:+1] |
| field_extra_in_svd | AHB1LPENR | ETHMACRXLPEN | svd[27:+1] |
| field_extra_in_svd | AHB1LPENR | ETHMACTXLPEN | svd[26:+1] |
| field_missing_in_svd | AHB1LPENR | ETHPTPLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHRXLPEN |  |
| field_missing_in_svd | AHB1LPENR | ETHTXLPEN |  |
| field_missing_in_svd | AHB1LPENR | FLASHLPEN |  |
| field_extra_in_svd | AHB1LPENR | FLITFLPEN | svd[15:+1] |
| field_extra_in_svd | AHB1LPENR | OTGHSLPEN | svd[29:+1] |
| field_extra_in_svd | AHB1LPENR | OTGHSULPILPEN | svd[30:+1] |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HSLPEN |  |
| field_missing_in_svd | AHB1LPENR | USB_OTG_HSULPILPEN |  |
| field_extra_in_svd | AHB1RSTR | ETHMACRST | svd[25:+1] |
| field_missing_in_svd | AHB1RSTR | ETHRST |  |
| field_extra_in_svd | AHB1RSTR | OTGHSRST | svd[29:+1] |
| field_missing_in_svd | AHB1RSTR | USB_OTG_HSRST |  |
| field_extra_in_svd | AHB2ENR | OTGFSEN | svd[7:+1] |
| field_missing_in_svd | AHB2ENR | USB_OTG_FSEN |  |
| field_extra_in_svd | AHB2LPENR | OTGFSLPEN | svd[7:+1] |
| field_missing_in_svd | AHB2LPENR | USB_OTG_FSLPEN |  |
| field_extra_in_svd | AHB2RSTR | OTGFSRST | svd[7:+1] |
| field_missing_in_svd | AHB2RSTR | USB_OTG_FSRST |  |
| field_missing_in_svd | APB1RSTR | UART2RST |  |
| field_missing_in_svd | APB1RSTR | UART3RST |  |
| field_extra_in_svd | APB1RSTR | USART2RST | svd[17:+1] |
| field_extra_in_svd | APB1RSTR | USART3RST | svd[18:+1] |
| field_extra_in_svd | CFGR | MCO1 | svd[21:+2] |
| field_missing_in_svd | CFGR | MCO1SEL |  |
| field_extra_in_svd | CFGR | MCO2 | svd[30:+2] |
| field_missing_in_svd | CFGR | MCO2SEL |  |
| field_extra_in_svd | PLLI2SCFGR | PLLI2SN | svd[6:+9] |
| field_extra_in_svd | PLLI2SCFGR | PLLI2SR | svd[28:+3] |
| field_missing_in_svd | PLLI2SCFGR | PLLN |  |
| field_missing_in_svd | PLLI2SCFGR | PLLR |  |

### rcc/f1  (stm32f101c4 · RCC · stm32f101.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | FLASHEN |  |
| field_extra_in_svd | AHBENR | FLITFEN | svd[4:+1] |
| field_missing_in_svd | AHBENR | SDIOEN |  |
| field_missing_in_svd | APB1ENR | CANEN |  |
| field_missing_in_svd | APB1ENR | USBEN |  |
| field_missing_in_svd | APB1RSTR | CANRST |  |
| field_missing_in_svd | APB1RSTR | USBRST |  |
| field_missing_in_svd | APB2ENR | ADC2EN |  |
| field_missing_in_svd | APB2ENR | ADC3EN |  |
| field_missing_in_svd | APB2ENR | GPIOAEN |  |
| field_missing_in_svd | APB2ENR | GPIOBEN |  |
| field_missing_in_svd | APB2ENR | GPIOCEN |  |
| field_missing_in_svd | APB2ENR | GPIODEN |  |
| field_missing_in_svd | APB2ENR | GPIOEEN |  |
| field_missing_in_svd | APB2ENR | GPIOFEN |  |
| field_missing_in_svd | APB2ENR | GPIOGEN |  |
| field_extra_in_svd | APB2ENR | IOPAEN | svd[2:+1] |
| field_extra_in_svd | APB2ENR | IOPBEN | svd[3:+1] |
| field_extra_in_svd | APB2ENR | IOPCEN | svd[4:+1] |
| field_extra_in_svd | APB2ENR | IOPDEN | svd[5:+1] |
| field_extra_in_svd | APB2ENR | IOPEEN | svd[6:+1] |
| field_extra_in_svd | APB2ENR | IOPFEN | svd[7:+1] |
| field_extra_in_svd | APB2ENR | IOPGEN | svd[8:+1] |
| field_missing_in_svd | APB2ENR | TIM1EN |  |
| field_missing_in_svd | APB2ENR | TIM8EN |  |
| field_missing_in_svd | APB2RSTR | ADC2RST |  |
| field_missing_in_svd | APB2RSTR | ADC3RST |  |
| field_missing_in_svd | APB2RSTR | GPIOARST |  |
| field_missing_in_svd | APB2RSTR | GPIOBRST |  |
| field_missing_in_svd | APB2RSTR | GPIOCRST |  |
| field_missing_in_svd | APB2RSTR | GPIODRST |  |
| field_missing_in_svd | APB2RSTR | GPIOERST |  |
| field_missing_in_svd | APB2RSTR | GPIOFRST |  |
| field_missing_in_svd | APB2RSTR | GPIOGRST |  |
| field_extra_in_svd | APB2RSTR | IOPARST | svd[2:+1] |
| field_extra_in_svd | APB2RSTR | IOPBRST | svd[3:+1] |
| field_extra_in_svd | APB2RSTR | IOPCRST | svd[4:+1] |
| field_extra_in_svd | APB2RSTR | IOPDRST | svd[5:+1] |
| field_extra_in_svd | APB2RSTR | IOPERST | svd[6:+1] |
| field_extra_in_svd | APB2RSTR | IOPFRST | svd[7:+1] |
| field_extra_in_svd | APB2RSTR | IOPGRST | svd[8:+1] |
| field_missing_in_svd | APB2RSTR | TIM1RST |  |
| field_missing_in_svd | APB2RSTR | TIM8RST |  |
| field_extra_in_svd | CFGR | MCO | svd[24:+3] |
| field_missing_in_svd | CFGR | MCOSEL |  |
| field_missing_in_svd | CFGR | USBPRE |  |

### rtc/v2_f0  (stm32f030c6 · RTC · stm32f0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALRMAR |  | svd offset 0x1C |
| register_extra_in_svd | ALRMASSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| register_extra_in_svd | BKP%sR |  | svd offset 0x50 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR | ALRAE | svd[8:+1] |
| field_extra_in_svd | CR | ALRAIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_missing_in_svd | CR | WUCKSEL |  |
| field_missing_in_svd | CR | WUTE |  |
| field_missing_in_svd | CR | WUTIE |  |
| field_extra_in_svd | ISR | ALRAF | svd[8:+1] |
| field_extra_in_svd | ISR | ALRAWF | svd[0:+1] |
| field_missing_in_svd | ISR | ALRF |  |
| field_missing_in_svd | ISR | ALRWF |  |
| field_extra_in_svd | ISR | TAMP1F | svd[13:+1] |
| field_extra_in_svd | ISR | TAMP2F | svd[14:+1] |
| field_missing_in_svd | ISR | TAMPF |  |
| field_missing_in_svd | ISR | WUTF |  |
| field_missing_in_svd | ISR | WUTWF |  |
| field_extra_in_svd | TAFCR | TAMP1E | svd[0:+1] |
| field_extra_in_svd | TAFCR | TAMP1TRG | svd[1:+1] |
| field_extra_in_svd | TAFCR | TAMP2E | svd[3:+1] |
| field_extra_in_svd | TAFCR | TAMP2_TRG | svd[4:+1] |
| field_missing_in_svd | TAFCR | TAMPE |  |
| field_missing_in_svd | TAFCR | TAMPPRCH |  |
| field_missing_in_svd | TAFCR | TAMPPUDIS |  |
| field_missing_in_svd | TAFCR | TAMPTRG |  |
| field_extra_in_svd | TAFCR | TAMP_PRCH | svd[13:+2] |
| field_extra_in_svd | TAFCR | TAMP_PUDIS | svd[15:+1] |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| field_missing_in_svd | TSTR | SU |  |
| register_missing_in_svd | WUTR |  |  |

### adc/f3v1  (stm32f301c6 · ADC1 · stm32f301.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | AWD2CR |  | svd offset 0xA0 |
| register_extra_in_svd | AWD3CR |  | svd offset 0xA4 |
| register_missing_in_svd | AWDCR |  |  |
| field_extra_in_svd | DIFSEL | DIFSEL%s | svd[1:+1] |
| field_missing_in_svd | DIFSEL | DIFSEL_10 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_11 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_110 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_111 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_112 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_113 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_114 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_115 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_116 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_117 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_12 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_13 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_14 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_15 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_16 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_17 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_18 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_19 |  |
| field_extra_in_svd | IER | AWD%sIE | svd[7:+1] |
| field_missing_in_svd | IER | AWDIE |  |
| field_missing_in_svd | ISR | AWD |  |
| field_extra_in_svd | ISR | AWD%s | svd[7:+1] |
| register_missing_in_svd | JDR |  |  |
| register_extra_in_svd | JDR%s |  | svd offset 0x80 |
| field_missing_in_svd | JSQR | JSQ |  |
| field_extra_in_svd | JSQR | JSQ%s | svd[8:+5] |
| register_missing_in_svd | OFR |  |  |
| register_extra_in_svd | OFR%s |  | svd offset 0x60 |
| field_missing_in_svd | SMPR1 | SMP |  |
| field_extra_in_svd | SMPR1 | SMP%s | svd[3:+3] |
| field_missing_in_svd | SMPR2 | SMP |  |
| field_extra_in_svd | SMPR2 | SMP%s | svd[0:+3] |
| field_missing_in_svd | SQR1 | SQ |  |
| field_extra_in_svd | SQR1 | SQ%s | svd[6:+5] |
| field_missing_in_svd | SQR2 | SQ |  |
| field_extra_in_svd | SQR2 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR3 | SQ |  |
| field_extra_in_svd | SQR3 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR4 | SQ |  |
| field_extra_in_svd | SQR4 | SQ%s | svd[0:+5] |

### dbgmcu/f2  (stm32f205rb · DBGMCU · stm32f215.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | APB1_FZ | CAN1 |  |
| field_missing_in_svd | APB1_FZ | CAN2 |  |
| field_extra_in_svd | APB1_FZ | DBG_CAN1_STOP | svd[25:+1] |
| field_extra_in_svd | APB1_FZ | DBG_CAN2_STOP | svd[26:+1] |
| field_extra_in_svd | APB1_FZ | DBG_IWDG_STOP | svd[12:+1] |
| field_extra_in_svd | APB1_FZ | DBG_J2C1_SMBUS_TIMEOUT | svd[21:+1] |
| field_extra_in_svd | APB1_FZ | DBG_J2C2_SMBUS_TIMEOUT | svd[22:+1] |
| field_extra_in_svd | APB1_FZ | DBG_J2C3SMBUS_TIMEOUT | svd[23:+1] |
| field_extra_in_svd | APB1_FZ | DBG_RTC_STOP | svd[10:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM12_STOP | svd[6:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM13_STOP | svd[7:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM14_STOP | svd[8:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM2_STOP | svd[0:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM3_STOP | svd[1:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM4_STOP | svd[2:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM5_STOP | svd[3:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM6_STOP | svd[4:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM7_STOP | svd[5:+1] |
| field_extra_in_svd | APB1_FZ | DBG_WWDG_STOP | svd[11:+1] |
| field_missing_in_svd | APB1_FZ | I2C1_SMBUS_TIMEOUT |  |
| field_missing_in_svd | APB1_FZ | I2C2_SMBUS_TIMEOUT |  |
| field_missing_in_svd | APB1_FZ | I2C3_SMBUS_TIMEOUT |  |
| field_missing_in_svd | APB1_FZ | IWDG |  |
| field_missing_in_svd | APB1_FZ | RTC |  |
| field_missing_in_svd | APB1_FZ | TIM12 |  |
| field_missing_in_svd | APB1_FZ | TIM13 |  |
| field_missing_in_svd | APB1_FZ | TIM14 |  |
| field_missing_in_svd | APB1_FZ | TIM2 |  |
| field_missing_in_svd | APB1_FZ | TIM3 |  |
| field_missing_in_svd | APB1_FZ | TIM4 |  |
| field_missing_in_svd | APB1_FZ | TIM5 |  |
| field_missing_in_svd | APB1_FZ | TIM6 |  |
| field_missing_in_svd | APB1_FZ | TIM7 |  |
| field_missing_in_svd | APB1_FZ | WWDG |  |
| field_extra_in_svd | APB2_FZ | DBG_TIM10_STOP | svd[17:+1] |
| field_extra_in_svd | APB2_FZ | DBG_TIM11_STOP | svd[18:+1] |
| field_extra_in_svd | APB2_FZ | DBG_TIM1_STOP | svd[0:+1] |
| field_extra_in_svd | APB2_FZ | DBG_TIM8_STOP | svd[1:+1] |
| field_extra_in_svd | APB2_FZ | DBG_TIM9_STOP | svd[16:+1] |
| field_missing_in_svd | APB2_FZ | TIM1 |  |
| field_missing_in_svd | APB2_FZ | TIM10 |  |
| field_missing_in_svd | APB2_FZ | TIM11 |  |
| field_missing_in_svd | APB2_FZ | TIM8 |  |
| field_missing_in_svd | APB2_FZ | TIM9 |  |

### pwr/wl5  (stm32wle5c8 · PWR · stm32wle5.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | C2CR1 |  |  |
| register_missing_in_svd | C2CR3 |  |  |
| field_missing_in_svd | CR2 | PVME |  |
| field_extra_in_svd | CR2 | PVME3 | svd[6:+1] |
| field_missing_in_svd | CR3 | EC2H |  |
| field_missing_in_svd | CR3 | EWUP |  |
| field_extra_in_svd | CR3 | EWUP1 | svd[0:+1] |
| field_extra_in_svd | CR3 | EWUP2 | svd[1:+1] |
| field_extra_in_svd | CR3 | EWUP3 | svd[2:+1] |
| field_missing_in_svd | CR4 | C2BOOT |  |
| field_missing_in_svd | CR4 | WP |  |
| field_extra_in_svd | CR4 | WP1 | svd[0:+1] |
| field_extra_in_svd | CR4 | WP2 | svd[1:+1] |
| field_extra_in_svd | CR4 | WP3 | svd[2:+1] |
| field_missing_in_svd | EXTSCR | C2CSSF |  |
| field_missing_in_svd | EXTSCR | C2DS |  |
| field_missing_in_svd | EXTSCR | C2SBF |  |
| field_missing_in_svd | EXTSCR | C2STOP2F |  |
| field_missing_in_svd | EXTSCR | C2STOPF |  |
| register_missing_in_svd | PDCR |  |  |
| register_extra_in_svd | PDCRA |  | svd offset 0x24 |
| register_extra_in_svd | PDCRB |  | svd offset 0x2C |
| register_extra_in_svd | PDCRC |  | svd offset 0x34 |
| register_extra_in_svd | PDCRH |  | svd offset 0x5C |
| register_missing_in_svd | PUCR |  |  |
| register_extra_in_svd | PUCRA |  | svd offset 0x20 |
| register_extra_in_svd | PUCRB |  | svd offset 0x28 |
| register_extra_in_svd | PUCRC |  | svd offset 0x30 |
| register_extra_in_svd | PUCRH |  | svd offset 0x58 |
| register_missing_in_svd | RSSCMDR |  |  |
| field_missing_in_svd | SCR | CC2HF |  |
| field_missing_in_svd | SCR | CWUF |  |
| field_extra_in_svd | SCR | CWUF1 | svd[0:+1] |
| field_extra_in_svd | SCR | CWUF2 | svd[1:+1] |
| field_extra_in_svd | SCR | CWUF3 | svd[2:+1] |
| register_missing_in_svd | SECCFGR |  |  |
| field_missing_in_svd | SR1 | C2HF |  |
| field_missing_in_svd | SR1 | WUF |  |
| field_extra_in_svd | SR1 | WUF1 | svd[0:+1] |
| field_extra_in_svd | SR1 | WUF2 | svd[1:+1] |
| field_extra_in_svd | SR1 | WUF3 | svd[2:+1] |
| field_missing_in_svd | SR2 | C2BOOTS |  |
| field_missing_in_svd | SR2 | PVMO |  |
| field_extra_in_svd | SR2 | PVMO3 | svd[14:+1] |

### flash/u5  (stm32u535cb · FLASH · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | ECCR | ADDR_ECC | ip[0:+20] svd[0:+21] |
| field_extra_in_svd | NSKEYR | NSKEY | svd[0:+32] |
| field_layout_mismatch | OPSR | ADDR_OP | ip[0:+20] svd[0:+21] |
| field_extra_in_svd | OPTKEYR | OPTKEY | svd[0:+32] |
| field_extra_in_svd | OPTR | BKPRAM_ECC | svd[22:+1] |
| field_missing_in_svd | OPTR | BKPSRAM_ECC |  |
| field_missing_in_svd | OPTR | SRAM3_ECC |  |
| register_extra_in_svd | PRIV1BBR5 |  | svd offset 0xE0 |
| register_extra_in_svd | PRIV1BBR6 |  | svd offset 0xE4 |
| register_extra_in_svd | PRIV1BBR7 |  | svd offset 0xE8 |
| register_extra_in_svd | PRIV1BBR8 |  | svd offset 0xEC |
| register_extra_in_svd | PRIV2BBR5 |  | svd offset 0x100 |
| register_extra_in_svd | PRIV2BBR6 |  | svd offset 0x104 |
| register_extra_in_svd | PRIV2BBR7 |  | svd offset 0x108 |
| register_extra_in_svd | PRIV2BBR8 |  | svd offset 0x10C |
| register_extra_in_svd | SEC1BBR5 |  | svd offset 0x90 |
| register_extra_in_svd | SEC1BBR6 |  | svd offset 0x94 |
| register_extra_in_svd | SEC1BBR7 |  | svd offset 0x98 |
| register_extra_in_svd | SEC1BBR8 |  | svd offset 0x9C |
| register_extra_in_svd | SEC2BBR5 |  | svd offset 0xB0 |
| register_extra_in_svd | SEC2BBR6 |  | svd offset 0xB4 |
| register_extra_in_svd | SEC2BBR7 |  | svd offset 0xB8 |
| register_extra_in_svd | SEC2BBR8 |  | svd offset 0xBC |
| field_extra_in_svd | SECKEYR | SECKEY | svd[0:+32] |
| field_extra_in_svd | SECSR | RDERR | svd[14:+1] |
| field_layout_mismatch | SECWM1R1 | SECWM1_PEND | ip[16:+7] svd[16:+8] |
| field_layout_mismatch | SECWM1R1 | SECWM1_PSTRT | ip[0:+7] svd[0:+8] |
| field_layout_mismatch | SECWM1R2 | HDP1_PEND | ip[16:+7] svd[16:+8] |
| field_extra_in_svd | SECWM1R2 | PCROP1EN | svd[15:+1] |
| field_extra_in_svd | SECWM1R2 | PCROP1_PSTRT | svd[0:+8] |
| field_layout_mismatch | SECWM2R1 | SECWM2_PEND | ip[16:+7] svd[16:+8] |
| field_layout_mismatch | SECWM2R1 | SECWM2_PSTRT | ip[0:+7] svd[0:+8] |
| field_layout_mismatch | SECWM2R2 | HDP2_PEND | ip[16:+7] svd[16:+8] |
| field_extra_in_svd | SECWM2R2 | PCROP2EN | svd[15:+1] |
| field_extra_in_svd | SECWM2R2 | PCROP2_PSTRT | svd[0:+8] |
| field_layout_mismatch | WRP1AR | WRP1A_PEND | ip[16:+7] svd[16:+8] |
| field_layout_mismatch | WRP1AR | WRP1A_PSTRT | ip[0:+7] svd[0:+8] |
| field_layout_mismatch | WRP1BR | WRP1B_PEND | ip[16:+7] svd[16:+8] |
| field_layout_mismatch | WRP1BR | WRP1B_PSTRT | ip[0:+7] svd[0:+8] |
| field_layout_mismatch | WRP2AR | WRP2A_PEND | ip[16:+7] svd[16:+8] |
| field_layout_mismatch | WRP2AR | WRP2A_PSTRT | ip[0:+7] svd[0:+8] |
| field_layout_mismatch | WRP2BR | WRP2B_PEND | ip[16:+7] svd[16:+8] |
| field_layout_mismatch | WRP2BR | WRP2B_PSTRT | ip[0:+7] svd[0:+8] |

### dbgmcu/wb  (stm32wb55cc · DBGMCU · stm32wb55.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | APB1FZR1 | DBG_I2C1_STOP | svd[21:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_I2C3_STOP | svd[23:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_IWDG_STOP | svd[12:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_LPTIM1_STOP | svd[31:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_RTC_STOP | svd[10:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_TIMER2_STOP | svd[0:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_WWDG_STOP | svd[11:+1] |
| field_missing_in_svd | APB1FZR1 | I2C1 |  |
| field_missing_in_svd | APB1FZR1 | I2C3 |  |
| field_missing_in_svd | APB1FZR1 | IWDG |  |
| field_missing_in_svd | APB1FZR1 | LPTIM1 |  |
| field_missing_in_svd | APB1FZR1 | RTC |  |
| field_missing_in_svd | APB1FZR1 | TIM2 |  |
| field_missing_in_svd | APB1FZR1 | WWDG |  |
| field_extra_in_svd | APB1FZR2 | DBG_LPTIM2_STOP | svd[5:+1] |
| field_missing_in_svd | APB1FZR2 | LPTIM2 |  |
| field_extra_in_svd | APB2FZR | DBG_TIM16_STOP | svd[17:+1] |
| field_extra_in_svd | APB2FZR | DBG_TIM17_STOP | svd[18:+1] |
| field_extra_in_svd | APB2FZR | DBG_TIM1_STOP | svd[11:+1] |
| field_missing_in_svd | APB2FZR | TIM1 |  |
| field_missing_in_svd | APB2FZR | TIM16 |  |
| field_missing_in_svd | APB2FZR | TIM17 |  |
| field_extra_in_svd | C2APB1FZR2 | DBG_LPTIM2_STOP | svd[5:+1] |
| field_missing_in_svd | C2APB1FZR2 | LPTIM2 |  |
| field_extra_in_svd | C2APB2FZR | DBG_TIM16_STOP | svd[17:+1] |
| field_extra_in_svd | C2APB2FZR | DBG_TIM17_STOP | svd[18:+1] |
| field_extra_in_svd | C2APB2FZR | DBG_TIM1_STOP | svd[11:+1] |
| field_missing_in_svd | C2APB2FZR | TIM1 |  |
| field_missing_in_svd | C2APB2FZR | TIM16 |  |
| field_missing_in_svd | C2APB2FZR | TIM17 |  |
| field_extra_in_svd | C2AP_B1FZR1 | DBG_I2C1_STOP | svd[21:+1] |
| field_extra_in_svd | C2AP_B1FZR1 | DBG_I2C3_STOP | svd[23:+1] |
| field_extra_in_svd | C2AP_B1FZR1 | DBG_IWDG_STOP | svd[12:+1] |
| field_extra_in_svd | C2AP_B1FZR1 | DBG_LPTIM1_STOP | svd[31:+1] |
| field_extra_in_svd | C2AP_B1FZR1 | DBG_LPTIM2_STOP | svd[0:+1] |
| field_extra_in_svd | C2AP_B1FZR1 | DBG_RTC_STOP | svd[10:+1] |
| field_missing_in_svd | C2AP_B1FZR1 | I2C1 |  |
| field_missing_in_svd | C2AP_B1FZR1 | I2C3 |  |
| field_missing_in_svd | C2AP_B1FZR1 | IWDG |  |
| field_missing_in_svd | C2AP_B1FZR1 | LPTIM1 |  |
| field_missing_in_svd | C2AP_B1FZR1 | LPTIM2 |  |
| field_missing_in_svd | C2AP_B1FZR1 | RTC |  |

### otfdec/v1  (stm32h573ai · OTFDEC1 · stm32h573.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | CFGR |  |  |
| register_missing_in_svd | ENDADDR |  |  |
| register_missing_in_svd | KEYR |  |  |
| register_missing_in_svd | NONCER |  |  |
| register_extra_in_svd | R1CFGR |  | svd offset 0x20 |
| register_extra_in_svd | R1ENDADDR |  | svd offset 0x28 |
| register_extra_in_svd | R1KEYR0 |  | svd offset 0x34 |
| register_extra_in_svd | R1KEYR1 |  | svd offset 0x38 |
| register_extra_in_svd | R1KEYR2 |  | svd offset 0x3C |
| register_extra_in_svd | R1KEYR3 |  | svd offset 0x40 |
| register_extra_in_svd | R1NONCER0 |  | svd offset 0x2C |
| register_extra_in_svd | R1NONCER1 |  | svd offset 0x30 |
| register_extra_in_svd | R1STARTADDR |  | svd offset 0x24 |
| register_extra_in_svd | R2CFGR |  | svd offset 0x50 |
| register_extra_in_svd | R2ENDADDR |  | svd offset 0x58 |
| register_extra_in_svd | R2KEYR0 |  | svd offset 0x64 |
| register_extra_in_svd | R2KEYR1 |  | svd offset 0x68 |
| register_extra_in_svd | R2KEYR2 |  | svd offset 0x6C |
| register_extra_in_svd | R2KEYR3 |  | svd offset 0x70 |
| register_extra_in_svd | R2NONCER0 |  | svd offset 0x5C |
| register_extra_in_svd | R2NONCER1 |  | svd offset 0x60 |
| register_extra_in_svd | R2STARTADDR |  | svd offset 0x54 |
| register_extra_in_svd | R3CFGR |  | svd offset 0x80 |
| register_extra_in_svd | R3ENDADDR |  | svd offset 0x88 |
| register_extra_in_svd | R3KEYR0 |  | svd offset 0x94 |
| register_extra_in_svd | R3KEYR1 |  | svd offset 0x98 |
| register_extra_in_svd | R3KEYR2 |  | svd offset 0x9C |
| register_extra_in_svd | R3KEYR3 |  | svd offset 0xA0 |
| register_extra_in_svd | R3NONCER0 |  | svd offset 0x8C |
| register_extra_in_svd | R3NONCER1 |  | svd offset 0x90 |
| register_extra_in_svd | R3STARTADDR |  | svd offset 0x84 |
| register_extra_in_svd | R4CFGR |  | svd offset 0xB0 |
| register_extra_in_svd | R4ENDADDR |  | svd offset 0xB8 |
| register_extra_in_svd | R4KEYR0 |  | svd offset 0xC4 |
| register_extra_in_svd | R4KEYR1 |  | svd offset 0xC8 |
| register_extra_in_svd | R4KEYR2 |  | svd offset 0xCC |
| register_extra_in_svd | R4KEYR3 |  | svd offset 0xD0 |
| register_extra_in_svd | R4NONCER0 |  | svd offset 0xBC |
| register_extra_in_svd | R4NONCER1 |  | svd offset 0xC0 |
| register_extra_in_svd | R4STARTADDR |  | svd offset 0xB4 |
| register_missing_in_svd | Region |  |  |
| register_missing_in_svd | STARTADDR |  |  |

### usart/v4  (stm32g030c6 · USART1 · stm32g030.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR2 | ADDM |  |
| field_extra_in_svd | CR2 | ADDM7 | svd[4:+1] |
| field_extra_in_svd | CR2 | DIS_NSS | svd[3:+1] |
| field_extra_in_svd | CR2 | SLVEN | svd[0:+1] |
| field_extra_in_svd | CR3 | TCBGTIE | svd[24:+1] |
| field_extra_in_svd | ICR | CMCF | svd[17:+1] |
| field_missing_in_svd | ICR | CMF |  |
| field_missing_in_svd | ICR | CTS |  |
| field_extra_in_svd | ICR | CTSCF | svd[9:+1] |
| field_extra_in_svd | ICR | EOBCF | svd[12:+1] |
| field_missing_in_svd | ICR | EOBF |  |
| field_missing_in_svd | ICR | FE |  |
| field_extra_in_svd | ICR | FECF | svd[1:+1] |
| field_missing_in_svd | ICR | IDLE |  |
| field_extra_in_svd | ICR | IDLECF | svd[4:+1] |
| field_missing_in_svd | ICR | LBD |  |
| field_extra_in_svd | ICR | LBDCF | svd[8:+1] |
| field_extra_in_svd | ICR | NCF | svd[2:+1] |
| field_missing_in_svd | ICR | NE |  |
| field_missing_in_svd | ICR | ORE |  |
| field_extra_in_svd | ICR | ORECF | svd[3:+1] |
| field_missing_in_svd | ICR | PE |  |
| field_extra_in_svd | ICR | PECF | svd[0:+1] |
| field_extra_in_svd | ICR | RTOCF | svd[11:+1] |
| field_missing_in_svd | ICR | RTOF |  |
| field_missing_in_svd | ICR | TC |  |
| field_extra_in_svd | ICR | TCBGTCF | svd[7:+1] |
| field_extra_in_svd | ICR | TCCF | svd[6:+1] |
| field_extra_in_svd | ICR | TXFECF | svd[5:+1] |
| field_extra_in_svd | ICR | UDRCF | svd[13:+1] |
| field_extra_in_svd | ICR | WUCF | svd[20:+1] |
| field_missing_in_svd | ICR | WUF |  |
| field_missing_in_svd | ISR | LBD |  |
| field_extra_in_svd | ISR | LBDF | svd[8:+1] |
| field_missing_in_svd | ISR | NE |  |
| field_extra_in_svd | ISR | NF | svd[2:+1] |
| field_extra_in_svd | ISR | TCBGT | svd[25:+1] |
| field_extra_in_svd | ISR | UDR | svd[13:+1] |
| field_missing_in_svd | RDR | DR |  |
| field_extra_in_svd | RDR | RDR | svd[0:+9] |
| field_missing_in_svd | TDR | DR |  |
| field_extra_in_svd | TDR | TDR | svd[0:+9] |

### adc/v3  (stm32l412c8 · ADC1 · stm32l412.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AWD2CR | AWD2CH |  |
| field_extra_in_svd | AWD2CR | AWD2CH%s | svd[0:+1] |
| field_missing_in_svd | AWD3CR | AWD3CH |  |
| field_extra_in_svd | AWD3CR | AWD3CH%s | svd[0:+1] |
| field_missing_in_svd | CFGR | AUTOFF |  |
| field_extra_in_svd | CFGR | AWD1CH | svd[26:+5] |
| field_missing_in_svd | CFGR | AWDCH1CH |  |
| field_extra_in_svd | CFGR | DFSDMCFG | svd[2:+1] |
| field_extra_in_svd | CFGR | JQDIS | svd[31:+1] |
| field_extra_in_svd | DIFSEL | DIFSEL%s | svd[0:+1] |
| field_missing_in_svd | DIFSEL | DIFSEL_16_18 |  |
| field_missing_in_svd | DIFSEL | DIFSEL_1_15 |  |
| field_extra_in_svd | DR | RDATA | svd[0:+16] |
| field_missing_in_svd | DR | regularDATA |  |
| field_extra_in_svd | IER | AWD%sIE | svd[7:+1] |
| field_missing_in_svd | IER | AWD1IE |  |
| field_missing_in_svd | IER | AWD2IE |  |
| field_missing_in_svd | IER | AWD3IE |  |
| field_missing_in_svd | ISR | AWD |  |
| field_extra_in_svd | ISR | AWD%s | svd[7:+1] |
| register_missing_in_svd | JDR |  |  |
| register_extra_in_svd | JDR%s |  | svd offset 0x80 |
| field_missing_in_svd | JSQR | JSQ |  |
| field_extra_in_svd | JSQR | JSQ%s | svd[8:+5] |
| register_missing_in_svd | OFR |  |  |
| register_extra_in_svd | OFR%s |  | svd offset 0x60 |
| register_missing_in_svd | SMPR |  |  |
| register_extra_in_svd | SMPR1 |  | svd offset 0x14 |
| register_extra_in_svd | SMPR2 |  | svd offset 0x18 |
| field_missing_in_svd | SQR1 | SQ |  |
| field_extra_in_svd | SQR1 | SQ%s | svd[6:+5] |
| field_missing_in_svd | SQR2 | SQ |  |
| field_extra_in_svd | SQR2 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR3 | SQ |  |
| field_extra_in_svd | SQR3 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR4 | SQ |  |
| field_extra_in_svd | SQR4 | SQ%s | svd[0:+5] |
| register_missing_in_svd | TR |  |  |
| register_extra_in_svd | TR1 |  | svd offset 0x20 |
| register_extra_in_svd | TR2 |  | svd offset 0x24 |
| register_extra_in_svd | TR3 |  | svd offset 0x28 |

### rtc/v3_base  (stm32g030c6 · RTC · stm32g030.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | ALRBINR |  |  |
| register_extra_in_svd | ALRM%sR |  | svd offset 0x40 |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| field_missing_in_svd | CALR | LPCAL |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_missing_in_svd | CR | SSRUIE |  |
| field_extra_in_svd | ICSR | ALR%sWF | svd[0:+1] |
| field_missing_in_svd | ICSR | ALRWF |  |
| field_missing_in_svd | ICSR | BCDU |  |
| field_missing_in_svd | ICSR | BIN |  |
| field_extra_in_svd | MISR | ALR%sMF | svd[0:+1] |
| field_missing_in_svd | MISR | ALRMF |  |
| field_missing_in_svd | MISR | SSRUMF |  |
| field_extra_in_svd | SCR | CALRAF | svd[0:+1] |
| field_extra_in_svd | SCR | CALRBF | svd[1:+1] |
| field_missing_in_svd | SCR | CALRF |  |
| field_missing_in_svd | SCR | CSSRUF |  |
| field_extra_in_svd | SR | ALR%sF | svd[0:+1] |
| field_missing_in_svd | SR | ALRF |  |
| field_missing_in_svd | SR | SSRUF |  |
| field_layout_mismatch | SSR | SS | ip[0:+32] svd[0:+16] |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| field_missing_in_svd | TSTR | SU |  |
| field_missing_in_svd | WUTR | WUTOCLR |  |

### syscfg/l4  (stm32l412c8 · SYSCFG · stm32l412.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x8 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0xC |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x10 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x14 |
| field_missing_in_svd | MEMRMP | FB_MODE |  |
| field_missing_in_svd | MEMRMP | QFS |  |
| field_extra_in_svd | SWPR | P0WP | svd[0:+1] |
| field_extra_in_svd | SWPR | P10WP | svd[10:+1] |
| field_extra_in_svd | SWPR | P11WP | svd[11:+1] |
| field_extra_in_svd | SWPR | P12WP | svd[12:+1] |
| field_extra_in_svd | SWPR | P13WP | svd[13:+1] |
| field_extra_in_svd | SWPR | P14WP | svd[14:+1] |
| field_extra_in_svd | SWPR | P15WP | svd[15:+1] |
| field_extra_in_svd | SWPR | P16WP | svd[16:+1] |
| field_extra_in_svd | SWPR | P17WP | svd[17:+1] |
| field_extra_in_svd | SWPR | P18WP | svd[18:+1] |
| field_extra_in_svd | SWPR | P19WP | svd[19:+1] |
| field_extra_in_svd | SWPR | P1WP | svd[1:+1] |
| field_extra_in_svd | SWPR | P20WP | svd[20:+1] |
| field_extra_in_svd | SWPR | P21WP | svd[21:+1] |
| field_extra_in_svd | SWPR | P22WP | svd[22:+1] |
| field_extra_in_svd | SWPR | P23WP | svd[23:+1] |
| field_extra_in_svd | SWPR | P24WP | svd[24:+1] |
| field_extra_in_svd | SWPR | P25WP | svd[25:+1] |
| field_extra_in_svd | SWPR | P26WP | svd[26:+1] |
| field_extra_in_svd | SWPR | P27WP | svd[27:+1] |
| field_extra_in_svd | SWPR | P28WP | svd[28:+1] |
| field_extra_in_svd | SWPR | P29WP | svd[29:+1] |
| field_extra_in_svd | SWPR | P2WP | svd[2:+1] |
| field_extra_in_svd | SWPR | P30WP | svd[30:+1] |
| field_extra_in_svd | SWPR | P31WP | svd[31:+1] |
| field_extra_in_svd | SWPR | P3WP | svd[3:+1] |
| field_extra_in_svd | SWPR | P4WP | svd[4:+1] |
| field_extra_in_svd | SWPR | P5WP | svd[5:+1] |
| field_extra_in_svd | SWPR | P6WP | svd[6:+1] |
| field_extra_in_svd | SWPR | P7WP | svd[7:+1] |
| field_extra_in_svd | SWPR | P8WP | svd[8:+1] |
| field_extra_in_svd | SWPR | P9WP | svd[9:+1] |
| field_missing_in_svd | SWPR | PWP |  |

### cryp/v3  (stm32h730ab · CRYP · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR | NPBLB |  |
| register_extra_in_svd | CSGCM0R |  | svd offset 0x70 |
| register_extra_in_svd | CSGCM1R |  | svd offset 0x74 |
| register_extra_in_svd | CSGCM2R |  | svd offset 0x78 |
| register_extra_in_svd | CSGCM3R |  | svd offset 0x7C |
| register_extra_in_svd | CSGCM4R |  | svd offset 0x80 |
| register_extra_in_svd | CSGCM5R |  | svd offset 0x84 |
| register_extra_in_svd | CSGCM6R |  | svd offset 0x88 |
| register_extra_in_svd | CSGCM7R |  | svd offset 0x8C |
| register_extra_in_svd | CSGCMCCM0R |  | svd offset 0x50 |
| register_extra_in_svd | CSGCMCCM1R |  | svd offset 0x54 |
| register_extra_in_svd | CSGCMCCM2R |  | svd offset 0x58 |
| register_extra_in_svd | CSGCMCCM3R |  | svd offset 0x5C |
| register_extra_in_svd | CSGCMCCM4R |  | svd offset 0x60 |
| register_extra_in_svd | CSGCMCCM5R |  | svd offset 0x64 |
| register_extra_in_svd | CSGCMCCM6R |  | svd offset 0x68 |
| register_extra_in_svd | CSGCMCCM7R |  | svd offset 0x6C |
| register_missing_in_svd | CSGCMCCMR |  |  |
| register_missing_in_svd | CSGCMR |  |  |
| field_extra_in_svd | DIN | DATAIN | svd[0:+32] |
| field_extra_in_svd | DOUT | DATAOUT | svd[0:+32] |
| register_missing_in_svd | INIT |  |  |
| register_extra_in_svd | IV0LR |  | svd offset 0x40 |
| register_extra_in_svd | IV0RR |  | svd offset 0x44 |
| register_extra_in_svd | IV1LR |  | svd offset 0x48 |
| register_extra_in_svd | IV1RR |  | svd offset 0x4C |
| register_missing_in_svd | IVLR |  |  |
| register_missing_in_svd | IVRR |  |  |
| register_extra_in_svd | K0LR |  | svd offset 0x20 |
| register_extra_in_svd | K0RR |  | svd offset 0x24 |
| register_extra_in_svd | K1LR |  | svd offset 0x28 |
| register_extra_in_svd | K1RR |  | svd offset 0x2C |
| register_extra_in_svd | K2LR |  | svd offset 0x30 |
| register_extra_in_svd | K2RR |  | svd offset 0x34 |
| register_extra_in_svd | K3LR |  | svd offset 0x38 |
| register_extra_in_svd | K3RR |  | svd offset 0x3C |
| register_missing_in_svd | KEY |  |  |
| register_missing_in_svd | KLR |  |  |
| register_missing_in_svd | KRR |  |  |

### rtc/v2_l1  (stm32l100c6-a · RTC · stm32l100.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALRM%sR |  | svd offset 0x1C |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| register_extra_in_svd | BKP%sR |  | svd offset 0x50 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | ISR | ALR%sF | svd[8:+1] |
| field_extra_in_svd | ISR | ALR%sWF | svd[0:+1] |
| field_missing_in_svd | ISR | ALRF |  |
| field_missing_in_svd | ISR | ALRWF |  |
| field_extra_in_svd | ISR | TAMP1F | svd[13:+1] |
| field_extra_in_svd | ISR | TAMP2F | svd[14:+1] |
| field_extra_in_svd | ISR | TAMP3F | svd[15:+1] |
| field_missing_in_svd | ISR | TAMPF |  |
| field_extra_in_svd | TAFCR | TAMP1E | svd[0:+1] |
| field_extra_in_svd | TAFCR | TAMP1ETRG | svd[1:+1] |
| field_extra_in_svd | TAFCR | TAMP2E | svd[3:+1] |
| field_extra_in_svd | TAFCR | TAMP2TRG | svd[4:+1] |
| field_extra_in_svd | TAFCR | TAMP3E | svd[5:+1] |
| field_extra_in_svd | TAFCR | TAMP3TRG | svd[6:+1] |
| field_missing_in_svd | TAFCR | TAMPE |  |
| field_missing_in_svd | TAFCR | TAMPTRG |  |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| field_missing_in_svd | TSTR | SU |  |

### rtc/v3_l5  (stm32l552cc · RTC · stm32l552.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALRM%sR |  | svd offset 0x40 |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | ICSR | ALR%sWF | svd[0:+1] |
| field_missing_in_svd | ICSR | ALRWF |  |
| field_extra_in_svd | MISR | ALR%sMF | svd[0:+1] |
| field_missing_in_svd | MISR | ALRMF |  |
| field_extra_in_svd | PRIVCR | ALRAPRIV | svd[0:+1] |
| field_extra_in_svd | PRIVCR | ALRBPRIV | svd[1:+1] |
| field_missing_in_svd | PRIVCR | ALRPRIV |  |
| field_extra_in_svd | SCR | CALRAF | svd[0:+1] |
| field_extra_in_svd | SCR | CALRBF | svd[1:+1] |
| field_missing_in_svd | SCR | CALRF |  |
| field_extra_in_svd | SMCR | ALRADPROT | svd[0:+1] |
| field_extra_in_svd | SMCR | ALRBDPROT | svd[1:+1] |
| field_missing_in_svd | SMCR | ALRDPROT |  |
| field_extra_in_svd | SMISR | ALRAMF | svd[0:+1] |
| field_extra_in_svd | SMISR | ALRBMF | svd[1:+1] |
| field_missing_in_svd | SMISR | ALRMF |  |
| field_extra_in_svd | SR | ALR%sF | svd[0:+1] |
| field_missing_in_svd | SR | ALRF |  |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| field_missing_in_svd | TSTR | SU |  |

### rcc/f1cl  (stm32f105r8 · RCC · stm32f107.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | ETHEN |  |
| field_extra_in_svd | AHBENR | ETHMACEN | svd[14:+1] |
| field_extra_in_svd | AHBENR | ETHMACRXEN | svd[16:+1] |
| field_extra_in_svd | AHBENR | ETHMACTXEN | svd[15:+1] |
| field_missing_in_svd | AHBENR | ETHRXEN |  |
| field_missing_in_svd | AHBENR | ETHTXEN |  |
| field_missing_in_svd | AHBENR | FLASHEN |  |
| field_extra_in_svd | AHBENR | FLITFEN | svd[4:+1] |
| field_extra_in_svd | AHBENR | OTGFSEN | svd[12:+1] |
| field_missing_in_svd | AHBENR | USB_OTG_FSEN |  |
| field_extra_in_svd | AHBRSTR | ETHMACRST | svd[14:+1] |
| field_missing_in_svd | AHBRSTR | ETHRST |  |
| field_extra_in_svd | AHBRSTR | OTGFSRST | svd[12:+1] |
| field_missing_in_svd | AHBRSTR | USB_OTG_FSRST |  |
| field_missing_in_svd | APB2ENR | GPIOAEN |  |
| field_missing_in_svd | APB2ENR | GPIOBEN |  |
| field_missing_in_svd | APB2ENR | GPIOCEN |  |
| field_missing_in_svd | APB2ENR | GPIODEN |  |
| field_missing_in_svd | APB2ENR | GPIOEEN |  |
| field_extra_in_svd | APB2ENR | IOPAEN | svd[2:+1] |
| field_extra_in_svd | APB2ENR | IOPBEN | svd[3:+1] |
| field_extra_in_svd | APB2ENR | IOPCEN | svd[4:+1] |
| field_extra_in_svd | APB2ENR | IOPDEN | svd[5:+1] |
| field_extra_in_svd | APB2ENR | IOPEEN | svd[6:+1] |
| field_missing_in_svd | APB2RSTR | GPIOARST |  |
| field_missing_in_svd | APB2RSTR | GPIOBRST |  |
| field_missing_in_svd | APB2RSTR | GPIOCRST |  |
| field_missing_in_svd | APB2RSTR | GPIODRST |  |
| field_missing_in_svd | APB2RSTR | GPIOERST |  |
| field_extra_in_svd | APB2RSTR | IOPARST | svd[2:+1] |
| field_extra_in_svd | APB2RSTR | IOPBRST | svd[3:+1] |
| field_extra_in_svd | APB2RSTR | IOPCRST | svd[4:+1] |
| field_extra_in_svd | APB2RSTR | IOPDRST | svd[5:+1] |
| field_extra_in_svd | APB2RSTR | IOPERST | svd[6:+1] |
| field_extra_in_svd | CFGR | MCO | svd[24:+4] |
| field_missing_in_svd | CFGR | MCOSEL |  |
| field_extra_in_svd | CFGR | OTGFSPRE | svd[22:+1] |
| field_missing_in_svd | CFGR | USBPRE |  |

### sai/v4_2pdm  (stm32h562ag · SAI1 · stm32h562.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ACLRFR |  | svd offset 0x1C |
| register_extra_in_svd | ACR1 |  | svd offset 0x4 |
| register_extra_in_svd | ACR2 |  | svd offset 0x8 |
| register_extra_in_svd | ADR |  | svd offset 0x20 |
| register_extra_in_svd | AFRCR |  | svd offset 0xC |
| register_extra_in_svd | AIM |  | svd offset 0x14 |
| register_extra_in_svd | ASLOTR |  | svd offset 0x10 |
| register_extra_in_svd | ASR |  | svd offset 0x18 |
| register_extra_in_svd | BCLRFR |  | svd offset 0x3C |
| register_extra_in_svd | BCR1 |  | svd offset 0x24 |
| register_extra_in_svd | BCR2 |  | svd offset 0x28 |
| register_extra_in_svd | BDR |  | svd offset 0x40 |
| register_extra_in_svd | BFRCR |  | svd offset 0x2C |
| register_extra_in_svd | BIM |  | svd offset 0x34 |
| register_extra_in_svd | BSLOTR |  | svd offset 0x30 |
| register_extra_in_svd | BSR |  | svd offset 0x38 |
| register_missing_in_svd | CH |  |  |
| register_missing_in_svd | CLRFR |  |  |
| register_missing_in_svd | CR1 |  |  |
| register_missing_in_svd | CR2 |  |  |
| register_missing_in_svd | DR |  |  |
| register_missing_in_svd | FRCR |  |  |
| register_missing_in_svd | IM |  |  |
| field_missing_in_svd | PDMCR | CKEN |  |
| field_extra_in_svd | PDMCR | CKEN1 | svd[8:+1] |
| field_extra_in_svd | PDMCR | CKEN2 | svd[9:+1] |
| field_extra_in_svd | PDMDLY | DLYM1L | svd[0:+3] |
| field_extra_in_svd | PDMDLY | DLYM1R | svd[4:+3] |
| field_extra_in_svd | PDMDLY | DLYM2L | svd[8:+3] |
| field_extra_in_svd | PDMDLY | DLYM2R | svd[12:+3] |
| field_extra_in_svd | PDMDLY | DLYM3L | svd[16:+3] |
| field_extra_in_svd | PDMDLY | DLYM3R | svd[20:+3] |
| field_extra_in_svd | PDMDLY | DLYM4L | svd[24:+3] |
| field_extra_in_svd | PDMDLY | DLYM4R | svd[28:+3] |
| field_missing_in_svd | PDMDLY | DLYML |  |
| field_missing_in_svd | PDMDLY | DLYMR |  |
| register_missing_in_svd | SLOTR |  |  |
| register_missing_in_svd | SR |  |  |

### syscfg/wle  (stm32wle5c8 · SYSCFG · stm32wle5.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x8 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0xC |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x10 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x14 |
| field_extra_in_svd | SWPR | P0WP | svd[0:+1] |
| field_extra_in_svd | SWPR | P10WP | svd[10:+1] |
| field_extra_in_svd | SWPR | P11WP | svd[11:+1] |
| field_extra_in_svd | SWPR | P12WP | svd[12:+1] |
| field_extra_in_svd | SWPR | P13WP | svd[13:+1] |
| field_extra_in_svd | SWPR | P14WP | svd[14:+1] |
| field_extra_in_svd | SWPR | P15WP | svd[15:+1] |
| field_extra_in_svd | SWPR | P16WP | svd[16:+1] |
| field_extra_in_svd | SWPR | P17WP | svd[17:+1] |
| field_extra_in_svd | SWPR | P18WP | svd[18:+1] |
| field_extra_in_svd | SWPR | P19WP | svd[19:+1] |
| field_extra_in_svd | SWPR | P1WP | svd[1:+1] |
| field_extra_in_svd | SWPR | P20WP | svd[20:+1] |
| field_extra_in_svd | SWPR | P21WP | svd[21:+1] |
| field_extra_in_svd | SWPR | P22WP | svd[22:+1] |
| field_extra_in_svd | SWPR | P23WP | svd[23:+1] |
| field_extra_in_svd | SWPR | P24WP | svd[24:+1] |
| field_extra_in_svd | SWPR | P25WP | svd[25:+1] |
| field_extra_in_svd | SWPR | P26WP | svd[26:+1] |
| field_extra_in_svd | SWPR | P27WP | svd[27:+1] |
| field_extra_in_svd | SWPR | P28WP | svd[28:+1] |
| field_extra_in_svd | SWPR | P29WP | svd[29:+1] |
| field_extra_in_svd | SWPR | P2WP | svd[2:+1] |
| field_extra_in_svd | SWPR | P30WP | svd[30:+1] |
| field_extra_in_svd | SWPR | P31WP | svd[31:+1] |
| field_extra_in_svd | SWPR | P3WP | svd[3:+1] |
| field_extra_in_svd | SWPR | P4WP | svd[4:+1] |
| field_extra_in_svd | SWPR | P5WP | svd[5:+1] |
| field_extra_in_svd | SWPR | P6WP | svd[6:+1] |
| field_extra_in_svd | SWPR | P7WP | svd[7:+1] |
| field_extra_in_svd | SWPR | P8WP | svd[8:+1] |
| field_extra_in_svd | SWPR | P9WP | svd[9:+1] |
| field_missing_in_svd | SWPR | PWP |  |

### rtc/v2_f3  (stm32f301c6 · RTC · stm32f301.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALRM%sR |  | svd offset 0x1C |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| register_extra_in_svd | BKP%sR |  | svd offset 0x50 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | ISR | ALR%sF | svd[8:+1] |
| field_extra_in_svd | ISR | ALR%sWF | svd[0:+1] |
| field_missing_in_svd | ISR | ALRF |  |
| field_missing_in_svd | ISR | ALRWF |  |
| field_extra_in_svd | ISR | TAMP1F | svd[13:+1] |
| field_extra_in_svd | ISR | TAMP2F | svd[14:+1] |
| field_extra_in_svd | ISR | TAMP3F | svd[15:+1] |
| field_missing_in_svd | ISR | TAMPF |  |
| field_extra_in_svd | TAFCR | TAMP1E | svd[0:+1] |
| field_extra_in_svd | TAFCR | TAMP1TRG | svd[1:+1] |
| field_extra_in_svd | TAFCR | TAMP2E | svd[3:+1] |
| field_extra_in_svd | TAFCR | TAMP2TRG | svd[4:+1] |
| field_missing_in_svd | TAFCR | TAMPE |  |
| field_missing_in_svd | TAFCR | TAMPTRG |  |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| field_missing_in_svd | TSTR | SU |  |

### rtc/v3_u5  (stm32h503cb · RTC · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALR%sBINR |  | svd offset 0x70 |
| register_missing_in_svd | ALRBINR |  |  |
| register_extra_in_svd | ALRM%sR |  | svd offset 0x40 |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_extra_in_svd | CR | ALRAFCLR | svd[27:+1] |
| field_extra_in_svd | CR | ALRBFCLR | svd[28:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRFCLR |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | MISR | ALR%sMF | svd[0:+1] |
| field_missing_in_svd | MISR | ALRMF |  |
| register_extra_in_svd | PRIVCFGR |  | svd offset 0x1C |
| register_missing_in_svd | PRIVCR |  |  |
| field_extra_in_svd | SCR | CALRAF | svd[0:+1] |
| field_extra_in_svd | SCR | CALRBF | svd[1:+1] |
| field_missing_in_svd | SCR | CALRF |  |
| register_missing_in_svd | SECCFGR |  |  |
| register_missing_in_svd | SMISR |  |  |
| field_extra_in_svd | SR | ALR%sF | svd[0:+1] |
| field_missing_in_svd | SR | ALRF |  |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| field_missing_in_svd | TSTR | SU |  |

### dbgmcu/l4  (stm32l412c8 · DBGMCU · stm32l412.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | APB1FZR1 | CAN |  |
| field_extra_in_svd | APB1FZR1 | DBG_CAN_STOP | svd[25:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_I2C1_STOP | svd[21:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_I2C2_STOP | svd[22:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_I2C3_STOP | svd[23:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_IWDG_STOP | svd[12:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_LPTIM1_STOP | svd[31:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_RTC_STOP | svd[10:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_TIM2_STOP | svd[0:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_TIM6_STOP | svd[4:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_TIM7_STOP | svd[5:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_WWDG_STOP | svd[11:+1] |
| field_missing_in_svd | APB1FZR1 | I2C1 |  |
| field_missing_in_svd | APB1FZR1 | I2C2 |  |
| field_missing_in_svd | APB1FZR1 | I2C3 |  |
| field_missing_in_svd | APB1FZR1 | IWDG |  |
| field_missing_in_svd | APB1FZR1 | LPTIM1 |  |
| field_missing_in_svd | APB1FZR1 | RTC |  |
| field_missing_in_svd | APB1FZR1 | TIM2 |  |
| field_missing_in_svd | APB1FZR1 | TIM3 |  |
| field_missing_in_svd | APB1FZR1 | TIM4 |  |
| field_missing_in_svd | APB1FZR1 | TIM5 |  |
| field_missing_in_svd | APB1FZR1 | TIM6 |  |
| field_missing_in_svd | APB1FZR1 | TIM7 |  |
| field_missing_in_svd | APB1FZR1 | WWDG |  |
| field_extra_in_svd | APB1FZR2 | DBG_LPTIM2_STOP | svd[5:+1] |
| field_missing_in_svd | APB1FZR2 | LPTIM2 |  |
| field_extra_in_svd | APB2FZR | DBG_TIM15_STOP | svd[16:+1] |
| field_extra_in_svd | APB2FZR | DBG_TIM16_STOP | svd[17:+1] |
| field_extra_in_svd | APB2FZR | DBG_TIM1_STOP | svd[11:+1] |
| field_missing_in_svd | APB2FZR | TIM1 |  |
| field_missing_in_svd | APB2FZR | TIM15 |  |
| field_missing_in_svd | APB2FZR | TIM16 |  |
| field_missing_in_svd | APB2FZR | TIM17 |  |
| field_missing_in_svd | APB2FZR | TIM8 |  |
| field_layout_mismatch | IDCODE | DEV_ID | ip[0:+16] svd[0:+12] |

### rcc/l1  (stm32l100c6-a · RCC · stm32l100.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | FLASHEN |  |
| field_extra_in_svd | AHBENR | FLITFEN | svd[15:+1] |
| field_missing_in_svd | AHBENR | GPIOAEN |  |
| field_missing_in_svd | AHBENR | GPIOBEN |  |
| field_missing_in_svd | AHBENR | GPIOCEN |  |
| field_missing_in_svd | AHBENR | GPIODEN |  |
| field_missing_in_svd | AHBENR | GPIOEEN |  |
| field_missing_in_svd | AHBENR | GPIOFEN |  |
| field_missing_in_svd | AHBENR | GPIOGEN |  |
| field_missing_in_svd | AHBENR | GPIOHEN |  |
| field_extra_in_svd | AHBENR | GPIOPAEN | svd[0:+1] |
| field_extra_in_svd | AHBENR | GPIOPBEN | svd[1:+1] |
| field_extra_in_svd | AHBENR | GPIOPCEN | svd[2:+1] |
| field_extra_in_svd | AHBENR | GPIOPDEN | svd[3:+1] |
| field_extra_in_svd | AHBENR | GPIOPEEN | svd[4:+1] |
| field_extra_in_svd | AHBENR | GPIOPFEN | svd[6:+1] |
| field_extra_in_svd | AHBENR | GPIOPGEN | svd[7:+1] |
| field_extra_in_svd | AHBENR | GPIOPHEN | svd[5:+1] |
| field_extra_in_svd | AHBLPENR | AESLPEN | svd[27:+1] |
| field_missing_in_svd | AHBLPENR | FLASHLPEN |  |
| field_extra_in_svd | AHBLPENR | FLITFLPEN | svd[15:+1] |
| field_extra_in_svd | AHBLPENR | FSMCLPEN | svd[30:+1] |
| field_missing_in_svd | AHBRSTR | FLASHRST |  |
| field_extra_in_svd | AHBRSTR | FLITFRST | svd[15:+1] |
| field_extra_in_svd | APB1LPENR | SPI3LPEN | svd[15:+1] |
| field_extra_in_svd | APB1LPENR | TIM5LPEN | svd[3:+1] |
| field_extra_in_svd | APB1LPENR | UART4LPEN | svd[19:+1] |
| field_extra_in_svd | APB1LPENR | UART5LPEN | svd[20:+1] |
| field_extra_in_svd | CIR | LSECSSC | svd[22:+1] |
| field_extra_in_svd | CIR | LSECSSF | svd[6:+1] |
| field_extra_in_svd | CIR | LSECSSIE | svd[14:+1] |
| field_missing_in_svd | CSR | LPWRRSTF |  |
| field_extra_in_svd | CSR | LPWRSTF | svd[31:+1] |
| field_extra_in_svd | CSR | LSECSSD | svd[12:+1] |
| field_extra_in_svd | CSR | LSECSSON | svd[11:+1] |
| field_extra_in_svd | CSR | OBLRSTF | svd[25:+1] |

### rtc/v2_f4  (stm32f401cb · RTC · stm32f401.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALRM%sR |  | svd offset 0x1C |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| register_extra_in_svd | BKP%sR |  | svd offset 0x50 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | ISR | ALR%sF | svd[8:+1] |
| field_extra_in_svd | ISR | ALR%sWF | svd[0:+1] |
| field_missing_in_svd | ISR | ALRF |  |
| field_missing_in_svd | ISR | ALRWF |  |
| field_extra_in_svd | ISR | TAMP1F | svd[13:+1] |
| field_extra_in_svd | ISR | TAMP2F | svd[14:+1] |
| field_missing_in_svd | ISR | TAMPF |  |
| field_extra_in_svd | TAFCR | TAMP1E | svd[0:+1] |
| field_extra_in_svd | TAFCR | TAMP1TRG | svd[1:+1] |
| field_extra_in_svd | TAFCR | TAMP2E | svd[3:+1] |
| field_extra_in_svd | TAFCR | TAMP2TRG | svd[4:+1] |
| field_missing_in_svd | TAFCR | TAMPE |  |
| field_missing_in_svd | TAFCR | TAMPTRG |  |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| field_missing_in_svd | TSTR | SU |  |

### rtc/v3_h7rs  (stm32h7r3a8 · RTC · stm32h7r.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALR%sBINR |  | svd offset 0x70 |
| register_missing_in_svd | ALRBINR |  |  |
| register_extra_in_svd | ALRM%sR |  | svd offset 0x40 |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_extra_in_svd | CR | ALRAFCLR | svd[27:+1] |
| field_extra_in_svd | CR | ALRBFCLR | svd[28:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRFCLR |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | MISR | ALR%sMF | svd[0:+1] |
| field_missing_in_svd | MISR | ALRMF |  |
| field_extra_in_svd | PRIVCFGR | ALRAPRIV | svd[0:+1] |
| field_extra_in_svd | PRIVCFGR | ALRBPRIV | svd[1:+1] |
| field_missing_in_svd | PRIVCFGR | ALRPRIV |  |
| field_extra_in_svd | SCR | CALRAF | svd[0:+1] |
| field_extra_in_svd | SCR | CALRBF | svd[1:+1] |
| field_missing_in_svd | SCR | CALRF |  |
| field_extra_in_svd | SR | ALR%sF | svd[0:+1] |
| field_missing_in_svd | SR | ALRF |  |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| field_missing_in_svd | TSTR | SU |  |

### dac/v2  (stm32f301c6 · DAC1 · stm32f301.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR | BOFF |  |
| field_extra_in_svd | CR | BOFF%s | svd[1:+1] |
| field_missing_in_svd | CR | DMAEN |  |
| field_extra_in_svd | CR | DMAEN%s | svd[12:+1] |
| field_missing_in_svd | CR | DMAUDRIE |  |
| field_extra_in_svd | CR | DMAUDRIE%s | svd[13:+1] |
| field_missing_in_svd | CR | EN |  |
| field_extra_in_svd | CR | EN%s | svd[0:+1] |
| field_missing_in_svd | CR | MAMP |  |
| field_extra_in_svd | CR | MAMP%s | svd[8:+4] |
| field_missing_in_svd | CR | TEN |  |
| field_extra_in_svd | CR | TEN%s | svd[2:+1] |
| field_missing_in_svd | CR | TSEL |  |
| field_extra_in_svd | CR | TSEL1 | svd[3:+3] |
| field_extra_in_svd | CR | TSEL2 | svd[19:+3] |
| field_missing_in_svd | CR | WAVE |  |
| field_extra_in_svd | CR | WAVE%s | svd[6:+2] |
| register_missing_in_svd | DHR12L |  |  |
| register_extra_in_svd | DHR12L%s |  | svd offset 0xC |
| field_extra_in_svd | DHR12LD | DACC%sDHR | svd[4:+12] |
| field_missing_in_svd | DHR12LD | DHR |  |
| register_missing_in_svd | DHR12R |  |  |
| register_extra_in_svd | DHR12R%s |  | svd offset 0x8 |
| field_extra_in_svd | DHR12RD | DACC%sDHR | svd[0:+12] |
| field_missing_in_svd | DHR12RD | DHR |  |
| register_missing_in_svd | DHR8R |  |  |
| register_extra_in_svd | DHR8R%s |  | svd offset 0x10 |
| field_extra_in_svd | DHR8RD | DACC%sDHR | svd[0:+8] |
| field_missing_in_svd | DHR8RD | DHR |  |
| register_missing_in_svd | DOR |  |  |
| register_extra_in_svd | DOR%s |  | svd offset 0x2C |
| field_missing_in_svd | SR | DMAUDR |  |
| field_extra_in_svd | SR | DMAUDR%s | svd[13:+1] |
| field_missing_in_svd | SWTRIGR | SWTRIG |  |
| field_extra_in_svd | SWTRIGR | SWTRIG%s | svd[0:+1] |

### rcc/f0v4  (stm32f042c4 · RCC · stm32f0x2.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | DMA2EN |  |
| field_missing_in_svd | AHBENR | FLASHEN |  |
| field_extra_in_svd | AHBENR | FLITFEN | svd[4:+1] |
| field_missing_in_svd | AHBENR | GPIOAEN |  |
| field_missing_in_svd | AHBENR | GPIOBEN |  |
| field_missing_in_svd | AHBENR | GPIOCEN |  |
| field_missing_in_svd | AHBENR | GPIODEN |  |
| field_missing_in_svd | AHBENR | GPIOEEN |  |
| field_missing_in_svd | AHBENR | GPIOFEN |  |
| field_extra_in_svd | AHBENR | IOPAEN | svd[17:+1] |
| field_extra_in_svd | AHBENR | IOPBEN | svd[18:+1] |
| field_extra_in_svd | AHBENR | IOPCEN | svd[19:+1] |
| field_extra_in_svd | AHBENR | IOPDEN | svd[20:+1] |
| field_extra_in_svd | AHBENR | IOPEEN | svd[21:+1] |
| field_extra_in_svd | AHBENR | IOPFEN | svd[22:+1] |
| field_missing_in_svd | AHBRSTR | GPIOARST |  |
| field_missing_in_svd | AHBRSTR | GPIOBRST |  |
| field_missing_in_svd | AHBRSTR | GPIOCRST |  |
| field_missing_in_svd | AHBRSTR | GPIODRST |  |
| field_missing_in_svd | AHBRSTR | GPIOERST |  |
| field_missing_in_svd | AHBRSTR | GPIOFRST |  |
| field_extra_in_svd | AHBRSTR | IOPARST | svd[17:+1] |
| field_extra_in_svd | AHBRSTR | IOPBRST | svd[18:+1] |
| field_extra_in_svd | AHBRSTR | IOPCRST | svd[19:+1] |
| field_extra_in_svd | AHBRSTR | IOPDRST | svd[20:+1] |
| field_extra_in_svd | AHBRSTR | IOPERST | svd[21:+1] |
| field_extra_in_svd | AHBRSTR | IOPFRST | svd[22:+1] |
| field_missing_in_svd | APB2ENR | USART7EN |  |
| field_missing_in_svd | APB2ENR | USART8EN |  |
| field_missing_in_svd | APB2RSTR | USART7RST |  |
| field_missing_in_svd | APB2RSTR | USART8RST |  |
| field_extra_in_svd | CFGR | MCO | svd[24:+4] |
| field_missing_in_svd | CFGR | MCOSEL |  |
| field_missing_in_svd | CFGR | PLLMCODIV |  |
| field_extra_in_svd | CFGR | PLLNODIV | svd[31:+1] |

### adc/h5  (stm32h503cb · ADC1 · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AWD2CR | AWD2CH |  |
| field_extra_in_svd | AWD2CR | AWD2CH%s | svd[0:+1] |
| field_missing_in_svd | AWD3CR | AWD3CH |  |
| field_extra_in_svd | AWD3CR | AWD3CH%s | svd[0:+1] |
| register_extra_in_svd | CCR |  | svd offset 0x308 |
| field_layout_mismatch | CFGR | EXTSEL | ip[5:+1] svd[5:+5] |
| field_missing_in_svd | DIFSEL | DIFSEL |  |
| field_extra_in_svd | DIFSEL | DIFSEL%s | svd[0:+1] |
| register_extra_in_svd | HWCFGR0 |  | svd offset 0x3F0 |
| field_extra_in_svd | IER | AWD%sIE | svd[7:+1] |
| field_missing_in_svd | IER | AWDIE |  |
| register_extra_in_svd | IPDR |  | svd offset 0x3F8 |
| field_missing_in_svd | ISR | AWD |  |
| field_extra_in_svd | ISR | AWD%s | svd[7:+1] |
| register_missing_in_svd | JDR |  |  |
| register_extra_in_svd | JDR%s |  | svd offset 0x80 |
| field_missing_in_svd | JSQR | JSQ |  |
| field_extra_in_svd | JSQR | JSQ%s | svd[9:+5] |
| register_missing_in_svd | OFR |  |  |
| register_extra_in_svd | OFR%s |  | svd offset 0x60 |
| register_extra_in_svd | SIDR |  | svd offset 0x3FC |
| field_missing_in_svd | SMPR1 | SMP |  |
| field_extra_in_svd | SMPR1 | SMP%s | svd[0:+3] |
| field_missing_in_svd | SMPR2 | SMP |  |
| field_extra_in_svd | SMPR2 | SMP%s | svd[0:+3] |
| field_missing_in_svd | SQR1 | SQ |  |
| field_extra_in_svd | SQR1 | SQ%s | svd[6:+5] |
| field_missing_in_svd | SQR2 | SQ |  |
| field_extra_in_svd | SQR2 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR3 | SQ |  |
| field_extra_in_svd | SQR3 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR4 | SQ |  |
| field_extra_in_svd | SQR4 | SQ%s | svd[0:+5] |
| register_extra_in_svd | VERR |  | svd offset 0x3F4 |

### can/fdcan_v1  (stm32g0b1cb · FDCAN1 · stm32g0b1.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | IE | RF0FE | svd[1:+1] |
| field_extra_in_svd | IE | RF0LE | svd[2:+1] |
| field_extra_in_svd | IE | RF0NE | svd[0:+1] |
| field_extra_in_svd | IE | RF1FE | svd[4:+1] |
| field_extra_in_svd | IE | RF1LE | svd[5:+1] |
| field_extra_in_svd | IE | RF1NE | svd[3:+1] |
| field_missing_in_svd | IE | RFFE |  |
| field_missing_in_svd | IE | RFLE |  |
| field_missing_in_svd | IE | RFNE |  |
| field_missing_in_svd | ILS | RXFIFO |  |
| field_extra_in_svd | ILS | RxFIFO0 | svd[0:+1] |
| field_extra_in_svd | ILS | RxFIFO1 | svd[1:+1] |
| field_extra_in_svd | IR | RF0F | svd[1:+1] |
| field_extra_in_svd | IR | RF0L | svd[2:+1] |
| field_extra_in_svd | IR | RF0N | svd[0:+1] |
| field_extra_in_svd | IR | RF1F | svd[4:+1] |
| field_extra_in_svd | IR | RF1L | svd[5:+1] |
| field_extra_in_svd | IR | RF1N | svd[3:+1] |
| field_missing_in_svd | IR | RFF |  |
| field_missing_in_svd | IR | RFL |  |
| field_missing_in_svd | IR | RFN |  |
| register_extra_in_svd | RXF0A |  | svd offset 0x94 |
| register_extra_in_svd | RXF0S |  | svd offset 0x90 |
| register_extra_in_svd | RXF1A |  | svd offset 0x9C |
| register_extra_in_svd | RXF1S |  | svd offset 0x98 |
| register_missing_in_svd | RXFA |  |  |
| register_missing_in_svd | RXFS |  |  |
| field_layout_mismatch | TXBAR | AR | ip[0:+1] svd[0:+3] |
| field_layout_mismatch | TXBCF | CF | ip[0:+1] svd[0:+3] |
| field_layout_mismatch | TXBCIE | CFIE | ip[0:+1] svd[0:+3] |
| field_layout_mismatch | TXBCR | CR | ip[0:+1] svd[0:+3] |
| field_layout_mismatch | TXBRP | TRP | ip[0:+1] svd[0:+3] |
| field_layout_mismatch | TXBTIE | TIE | ip[0:+1] svd[0:+3] |
| field_layout_mismatch | TXBTO | TO | ip[0:+1] svd[0:+3] |

### usart/v3  (stm32f030c6 · USART1 · stm32f0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR2 | ADDM |  |
| field_extra_in_svd | CR2 | ADDM7 | svd[4:+1] |
| field_extra_in_svd | ICR | CMCF | svd[17:+1] |
| field_missing_in_svd | ICR | CMF |  |
| field_missing_in_svd | ICR | CTS |  |
| field_extra_in_svd | ICR | CTSCF | svd[9:+1] |
| field_extra_in_svd | ICR | EOBCF | svd[12:+1] |
| field_missing_in_svd | ICR | EOBF |  |
| field_missing_in_svd | ICR | FE |  |
| field_extra_in_svd | ICR | FECF | svd[1:+1] |
| field_missing_in_svd | ICR | IDLE |  |
| field_extra_in_svd | ICR | IDLECF | svd[4:+1] |
| field_missing_in_svd | ICR | LBD |  |
| field_extra_in_svd | ICR | LBDCF | svd[8:+1] |
| field_extra_in_svd | ICR | NCF | svd[2:+1] |
| field_missing_in_svd | ICR | NE |  |
| field_missing_in_svd | ICR | ORE |  |
| field_extra_in_svd | ICR | ORECF | svd[3:+1] |
| field_missing_in_svd | ICR | PE |  |
| field_extra_in_svd | ICR | PECF | svd[0:+1] |
| field_extra_in_svd | ICR | RTOCF | svd[11:+1] |
| field_missing_in_svd | ICR | RTOF |  |
| field_missing_in_svd | ICR | TC |  |
| field_extra_in_svd | ICR | TCCF | svd[6:+1] |
| field_extra_in_svd | ICR | WUCF | svd[20:+1] |
| field_missing_in_svd | ICR | WUF |  |
| field_missing_in_svd | ISR | LBD |  |
| field_extra_in_svd | ISR | LBDF | svd[8:+1] |
| field_missing_in_svd | ISR | NE |  |
| field_extra_in_svd | ISR | NF | svd[2:+1] |
| field_missing_in_svd | RDR | DR |  |
| field_extra_in_svd | RDR | RDR | svd[0:+9] |
| field_missing_in_svd | TDR | DR |  |
| field_extra_in_svd | TDR | TDR | svd[0:+9] |

### dbgmcu/f1  (stm32f100c4 · DBGMCU · stm32f100.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR | CAN1 |  |
| field_missing_in_svd | CR | CAN2 |  |
| field_extra_in_svd | CR | DBG_IWDG_STOP | svd[8:+1] |
| field_extra_in_svd | CR | DBG_TIM12_STOP | svd[25:+1] |
| field_extra_in_svd | CR | DBG_TIM13_STOP | svd[26:+1] |
| field_extra_in_svd | CR | DBG_TIM14_STOP | svd[27:+1] |
| field_extra_in_svd | CR | DBG_TIM15_STOP | svd[22:+1] |
| field_extra_in_svd | CR | DBG_TIM16_STOP | svd[23:+1] |
| field_extra_in_svd | CR | DBG_TIM17_STOP | svd[24:+1] |
| field_extra_in_svd | CR | DBG_TIM1_STOP | svd[10:+1] |
| field_extra_in_svd | CR | DBG_TIM2_STOP | svd[11:+1] |
| field_extra_in_svd | CR | DBG_TIM3_STOP | svd[12:+1] |
| field_extra_in_svd | CR | DBG_TIM4_STOP | svd[13:+1] |
| field_extra_in_svd | CR | DBG_TIM5_STOP | svd[18:+1] |
| field_extra_in_svd | CR | DBG_TIM6_STOP | svd[19:+1] |
| field_extra_in_svd | CR | DBG_TIM7_STOP | svd[20:+1] |
| field_extra_in_svd | CR | DBG_WWDG_STOP | svd[9:+1] |
| field_missing_in_svd | CR | IWDG |  |
| field_missing_in_svd | CR | TIM1 |  |
| field_missing_in_svd | CR | TIM12 |  |
| field_missing_in_svd | CR | TIM13 |  |
| field_missing_in_svd | CR | TIM14 |  |
| field_missing_in_svd | CR | TIM15 |  |
| field_missing_in_svd | CR | TIM16 |  |
| field_missing_in_svd | CR | TIM17 |  |
| field_missing_in_svd | CR | TIM2 |  |
| field_missing_in_svd | CR | TIM3 |  |
| field_missing_in_svd | CR | TIM4 |  |
| field_missing_in_svd | CR | TIM5 |  |
| field_missing_in_svd | CR | TIM6 |  |
| field_missing_in_svd | CR | TIM7 |  |
| field_missing_in_svd | CR | TIM8 |  |
| field_missing_in_svd | CR | WWDG |  |

### exti/w  (stm32wb55cc · EXTI · stm32wb55.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | C2EMR1 |  | svd offset 0xC4 |
| register_extra_in_svd | C2EMR2 |  | svd offset 0xD4 |
| register_extra_in_svd | C2IMR1 |  | svd offset 0xC0 |
| register_extra_in_svd | C2IMR2 |  | svd offset 0xD0 |
| register_missing_in_svd | CPU |  |  |
| register_missing_in_svd | EMR |  |  |
| register_extra_in_svd | EMR1 |  | svd offset 0x84 |
| register_extra_in_svd | EMR2 |  | svd offset 0x94 |
| register_missing_in_svd | FTSR |  |  |
| register_extra_in_svd | FTSR1 |  | svd offset 0x4 |
| register_extra_in_svd | FTSR2 |  | svd offset 0x24 |
| register_extra_in_svd | HWCFGR1 |  | svd offset 0x3F0 |
| register_extra_in_svd | HWCFGR2 |  | svd offset 0x3EC |
| register_extra_in_svd | HWCFGR3 |  | svd offset 0x3E8 |
| register_extra_in_svd | HWCFGR4 |  | svd offset 0x3E4 |
| register_extra_in_svd | HWCFGR5 |  | svd offset 0x3E0 |
| register_extra_in_svd | HWCFGR6 |  | svd offset 0x3DC |
| register_extra_in_svd | HWCFGR7 |  | svd offset 0x3D8 |
| register_missing_in_svd | IMR |  |  |
| register_extra_in_svd | IMR1 |  | svd offset 0x80 |
| register_extra_in_svd | IMR2 |  | svd offset 0x90 |
| register_extra_in_svd | IPIDR |  | svd offset 0x3F8 |
| register_missing_in_svd | PR |  |  |
| register_extra_in_svd | PR1 |  | svd offset 0xC |
| register_extra_in_svd | PR2 |  | svd offset 0x2C |
| register_missing_in_svd | RTSR |  |  |
| register_extra_in_svd | RTSR1 |  | svd offset 0x0 |
| register_extra_in_svd | RTSR2 |  | svd offset 0x20 |
| register_extra_in_svd | SIDR |  | svd offset 0x3FC |
| register_missing_in_svd | SWIER |  |  |
| register_extra_in_svd | SWIER1 |  | svd offset 0x8 |
| register_extra_in_svd | SWIER2 |  | svd offset 0x28 |
| register_extra_in_svd | VERR |  | svd offset 0x3F4 |

### exti/h5  (stm32h562ag · EXTI · stm32h562.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | EMR |  |  |
| register_extra_in_svd | EMR1 |  | svd offset 0x84 |
| register_extra_in_svd | EMR2 |  | svd offset 0x94 |
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x60 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0x64 |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x68 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x6C |
| register_missing_in_svd | FPR |  |  |
| register_extra_in_svd | FPR1 |  | svd offset 0x10 |
| register_extra_in_svd | FPR2 |  | svd offset 0x30 |
| register_missing_in_svd | FTSR |  |  |
| register_extra_in_svd | FTSR1 |  | svd offset 0x4 |
| register_extra_in_svd | FTSR2 |  | svd offset 0x24 |
| register_missing_in_svd | IMR |  |  |
| register_extra_in_svd | IMR1 |  | svd offset 0x80 |
| register_extra_in_svd | IMR2 |  | svd offset 0x90 |
| register_missing_in_svd | PRIVCFGR |  |  |
| register_extra_in_svd | PRIVCFGR1 |  | svd offset 0x18 |
| register_extra_in_svd | PRIVCFGR2 |  | svd offset 0x38 |
| register_missing_in_svd | RPR |  |  |
| register_extra_in_svd | RPR1 |  | svd offset 0xC |
| register_extra_in_svd | RPR2 |  | svd offset 0x2C |
| register_missing_in_svd | RTSR |  |  |
| register_extra_in_svd | RTSR1 |  | svd offset 0x0 |
| register_extra_in_svd | RTSR2 |  | svd offset 0x20 |
| register_missing_in_svd | SECCFGR |  |  |
| register_extra_in_svd | SECCFGR1 |  | svd offset 0x14 |
| register_extra_in_svd | SECCFGR2 |  | svd offset 0x34 |
| register_missing_in_svd | SWIER |  |  |
| register_extra_in_svd | SWIER1 |  | svd offset 0x8 |
| register_extra_in_svd | SWIER2 |  | svd offset 0x28 |

### exti/h7  (stm32h723ve · EXTI · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | CPUEMR1 |  | svd offset 0x84 |
| register_extra_in_svd | CPUEMR2 |  | svd offset 0x94 |
| register_extra_in_svd | CPUEMR3 |  | svd offset 0xA4 |
| register_extra_in_svd | CPUIMR1 |  | svd offset 0x80 |
| register_extra_in_svd | CPUIMR2 |  | svd offset 0x90 |
| register_extra_in_svd | CPUIMR3 |  | svd offset 0xA0 |
| register_extra_in_svd | CPUPR1 |  | svd offset 0x88 |
| register_extra_in_svd | CPUPR2 |  | svd offset 0x98 |
| register_extra_in_svd | CPUPR3 |  | svd offset 0xA8 |
| register_extra_in_svd | D3PCR1H |  | svd offset 0x14 |
| register_extra_in_svd | D3PCR1L |  | svd offset 0x10 |
| register_extra_in_svd | D3PCR2H |  | svd offset 0x34 |
| register_extra_in_svd | D3PCR2L |  | svd offset 0x30 |
| register_extra_in_svd | D3PCR3H |  | svd offset 0x54 |
| register_extra_in_svd | D3PMR1 |  | svd offset 0xC |
| register_extra_in_svd | D3PMR2 |  | svd offset 0x2C |
| register_extra_in_svd | D3PMR3 |  | svd offset 0x4C |
| register_missing_in_svd | EMR |  |  |
| register_missing_in_svd | FTSR |  |  |
| register_extra_in_svd | FTSR1 |  | svd offset 0x4 |
| register_extra_in_svd | FTSR2 |  | svd offset 0x24 |
| register_extra_in_svd | FTSR3 |  | svd offset 0x44 |
| register_missing_in_svd | IMR |  |  |
| register_missing_in_svd | PR |  |  |
| register_missing_in_svd | RTSR |  |  |
| register_extra_in_svd | RTSR1 |  | svd offset 0x0 |
| register_extra_in_svd | RTSR2 |  | svd offset 0x20 |
| register_extra_in_svd | RTSR3 |  | svd offset 0x40 |
| register_missing_in_svd | SWIER |  |  |
| register_extra_in_svd | SWIER1 |  | svd offset 0x8 |
| register_extra_in_svd | SWIER2 |  | svd offset 0x28 |
| register_extra_in_svd | SWIER3 |  | svd offset 0x48 |

### exti/l5  (stm32l552cc · EXTI · stm32l552.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | EMR |  |  |
| register_extra_in_svd | EMR1 |  | svd offset 0x84 |
| register_extra_in_svd | EMR2 |  | svd offset 0x94 |
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x60 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0x64 |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x68 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x6C |
| register_missing_in_svd | FPR |  |  |
| register_extra_in_svd | FPR1 |  | svd offset 0x10 |
| register_extra_in_svd | FPR2 |  | svd offset 0x30 |
| register_missing_in_svd | FTSR |  |  |
| register_extra_in_svd | FTSR1 |  | svd offset 0x4 |
| register_extra_in_svd | FTSR2 |  | svd offset 0x24 |
| register_missing_in_svd | IMR |  |  |
| register_extra_in_svd | IMR1 |  | svd offset 0x80 |
| register_extra_in_svd | IMR2 |  | svd offset 0x90 |
| register_missing_in_svd | PRIVCFGR |  |  |
| register_extra_in_svd | PRIVCFGR1 |  | svd offset 0x18 |
| register_extra_in_svd | PRIVCFGR2 |  | svd offset 0x34 |
| register_missing_in_svd | RPR |  |  |
| register_extra_in_svd | RPR1 |  | svd offset 0xC |
| register_extra_in_svd | RPR2 |  | svd offset 0x2C |
| register_missing_in_svd | RTSR |  |  |
| register_extra_in_svd | RTSR1 |  | svd offset 0x0 |
| register_extra_in_svd | RTSR2 |  | svd offset 0x20 |
| register_missing_in_svd | SECCFGR |  |  |
| register_extra_in_svd | SECCFGR1 |  | svd offset 0x14 |
| register_extra_in_svd | SECCFGR2 |  | svd offset 0x38 |
| register_missing_in_svd | SWIER |  |  |
| register_extra_in_svd | SWIER1 |  | svd offset 0x8 |
| register_extra_in_svd | SWIER2 |  | svd offset 0x28 |

### rcc/f100  (stm32f100c4 · RCC · stm32f100.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHBENR | FLASHEN |  |
| field_extra_in_svd | AHBENR | FLITFEN | svd[4:+1] |
| field_missing_in_svd | APB2ENR | GPIOAEN |  |
| field_missing_in_svd | APB2ENR | GPIOBEN |  |
| field_missing_in_svd | APB2ENR | GPIOCEN |  |
| field_missing_in_svd | APB2ENR | GPIODEN |  |
| field_missing_in_svd | APB2ENR | GPIOEEN |  |
| field_missing_in_svd | APB2ENR | GPIOFEN |  |
| field_missing_in_svd | APB2ENR | GPIOGEN |  |
| field_extra_in_svd | APB2ENR | IOPAEN | svd[2:+1] |
| field_extra_in_svd | APB2ENR | IOPBEN | svd[3:+1] |
| field_extra_in_svd | APB2ENR | IOPCEN | svd[4:+1] |
| field_extra_in_svd | APB2ENR | IOPDEN | svd[5:+1] |
| field_extra_in_svd | APB2ENR | IOPEEN | svd[6:+1] |
| field_extra_in_svd | APB2ENR | IOPFEN | svd[7:+1] |
| field_extra_in_svd | APB2ENR | IOPGEN | svd[8:+1] |
| field_missing_in_svd | APB2RSTR | GPIOARST |  |
| field_missing_in_svd | APB2RSTR | GPIOBRST |  |
| field_missing_in_svd | APB2RSTR | GPIOCRST |  |
| field_missing_in_svd | APB2RSTR | GPIODRST |  |
| field_missing_in_svd | APB2RSTR | GPIOERST |  |
| field_missing_in_svd | APB2RSTR | GPIOFRST |  |
| field_missing_in_svd | APB2RSTR | GPIOGRST |  |
| field_extra_in_svd | APB2RSTR | IOPARST | svd[2:+1] |
| field_extra_in_svd | APB2RSTR | IOPBRST | svd[3:+1] |
| field_extra_in_svd | APB2RSTR | IOPCRST | svd[4:+1] |
| field_extra_in_svd | APB2RSTR | IOPDRST | svd[5:+1] |
| field_extra_in_svd | APB2RSTR | IOPERST | svd[6:+1] |
| field_extra_in_svd | APB2RSTR | IOPFRST | svd[7:+1] |
| field_extra_in_svd | APB2RSTR | IOPGRST | svd[8:+1] |
| field_extra_in_svd | CFGR | MCO | svd[24:+3] |
| field_missing_in_svd | CFGR | MCOSEL |  |

### syscfg/g0  (stm32g030c6 · SYSCFG · stm32g030.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | CFGR1 | I2C3_FMP | svd[24:+1] |
| field_extra_in_svd | CFGR1 | I2C_PA10_FMP | svd[23:+1] |
| field_extra_in_svd | CFGR1 | I2C_PA9_FMP | svd[22:+1] |
| field_missing_in_svd | CFGR1 | I2C_PAx_FMP |  |
| field_extra_in_svd | CFGR1 | I2C_PB7_FMP | svd[17:+1] |
| field_extra_in_svd | CFGR1 | I2C_PB8_FMP | svd[18:+1] |
| field_extra_in_svd | CFGR1 | I2C_PB9_FMP | svd[19:+1] |
| field_layout_mismatch | CFGR1 | I2C_PBx_FMP | ip[16:+4] svd[16:+1] |
| field_missing_in_svd | CFGR2 | PA13_CDEN |  |
| field_missing_in_svd | CFGR2 | PA1_CDEN |  |
| field_missing_in_svd | CFGR2 | PA3_CDEN |  |
| field_missing_in_svd | CFGR2 | PA5_CDEN |  |
| field_missing_in_svd | CFGR2 | PA6_CDEN |  |
| field_missing_in_svd | CFGR2 | PB0_CDEN |  |
| field_missing_in_svd | CFGR2 | PB1_CDEN |  |
| field_missing_in_svd | CFGR2 | PB2_CDEN |  |
| field_missing_in_svd | CFGR2 | PVD_LOCK |  |
| register_missing_in_svd | ITLINE1 |  |  |
| field_missing_in_svd | ITLINE11 | DMA1_CH6 |  |
| field_missing_in_svd | ITLINE11 | DMA1_CH7 |  |
| field_missing_in_svd | ITLINE12 | COMP1 |  |
| field_missing_in_svd | ITLINE12 | COMP2 |  |
| register_missing_in_svd | ITLINE15 |  |  |
| register_missing_in_svd | ITLINE17 |  |  |
| register_missing_in_svd | ITLINE18 |  |  |
| register_missing_in_svd | ITLINE20 |  |  |
| register_missing_in_svd | ITLINE29 |  |  |
| register_missing_in_svd | ITLINE30 |  |  |
| register_missing_in_svd | ITLINE31 |  |  |
| register_missing_in_svd | ITLINE8 |  |  |
| register_missing_in_svd | VREFBUF_CCR |  |  |
| register_missing_in_svd | VREFBUF_CSR |  |  |

### flash/g0x1  (stm32g031c4 · FLASH · stm32g031.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR | MER |  |
| field_extra_in_svd | CR | MER1 | svd[2:+1] |
| field_layout_mismatch | CR | PNB | ip[3:+7] svd[3:+10] |
| field_extra_in_svd | CR | SEC_PROT2 | svd[29:+1] |
| field_layout_mismatch | ECCR | ADDR_ECC | ip[0:+16] svd[0:+15] |
| field_layout_mismatch | ECCR2 | ADDR_ECC | ip[0:+16] svd[0:+15] |
| field_extra_in_svd | KEYR | KEY | svd[0:+32] |
| field_extra_in_svd | OPTKEYR | OPTKEY | svd[0:+32] |
| field_missing_in_svd | OPTR | DUAL_BANK |  |
| field_missing_in_svd | OPTR | IDWG_SW |  |
| field_extra_in_svd | OPTR | IWDG_SW | svd[16:+1] |
| field_missing_in_svd | OPTR | nSWAP_BANK |  |
| field_layout_mismatch | PCROP1AER | PCROP1A_END | ip[0:+9] svd[0:+8] |
| field_layout_mismatch | PCROP1ASR | PCROP1A_STRT | ip[0:+9] svd[0:+8] |
| field_layout_mismatch | PCROP1BER | PCROP1B_END | ip[0:+9] svd[0:+8] |
| field_layout_mismatch | PCROP1BSR | PCROP1B_STRT | ip[0:+9] svd[0:+8] |
| register_missing_in_svd | PCROP2AER |  |  |
| register_missing_in_svd | PCROP2ASR |  |  |
| register_missing_in_svd | PCROP2BER |  |  |
| register_missing_in_svd | PCROP2BSR |  |  |
| field_layout_mismatch | SECR | SEC_SIZE | ip[0:+8] svd[0:+7] |
| field_missing_in_svd | SECR | SEC_SIZE_2 |  |
| field_missing_in_svd | SR | BSY2 |  |
| field_missing_in_svd | SR | MISERR |  |
| field_extra_in_svd | SR | MISSERR | svd[8:+1] |
| field_layout_mismatch | WRP1AR | WRP1A_END | ip[16:+7] svd[16:+6] |
| field_layout_mismatch | WRP1AR | WRP1A_STRT | ip[0:+7] svd[0:+6] |
| field_layout_mismatch | WRP1BR | WRP1B_END | ip[16:+7] svd[16:+6] |
| field_layout_mismatch | WRP1BR | WRP1B_STRT | ip[0:+7] svd[0:+6] |
| register_missing_in_svd | WRP2AR |  |  |
| register_missing_in_svd | WRP2BR |  |  |

### fmc/v4  (stm32h562ag · FMC · stm32h562.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | BCR |  |  |
| register_extra_in_svd | BCR%s |  | svd offset 0x8 |
| register_missing_in_svd | BTR |  |  |
| register_extra_in_svd | BTR%s |  | svd offset 0x4 |
| register_missing_in_svd | BWTR |  |  |
| register_extra_in_svd | BWTR%s |  | svd offset 0x104 |
| register_offset_mismatch | ECCR |  | ip=0x14 svd=0x94 |
| field_extra_in_svd | ECCR | ECC | svd[0:+32] |
| register_missing_in_svd | NAND |  |  |
| register_missing_in_svd | NOR_PSRAM |  |  |
| register_offset_mismatch | PATT |  | ip=0xC svd=0x8C |
| register_offset_mismatch | PCR |  | ip=0x0 svd=0x80 |
| field_extra_in_svd | PCSCNTR | CNTB%sEN | svd[16:+1] |
| field_missing_in_svd | PCSCNTR | CNTBEN |  |
| register_offset_mismatch | PMEM |  | ip=0x8 svd=0x88 |
| register_offset_mismatch | SDCMR |  | ip=0x10 svd=0x150 |
| field_missing_in_svd | SDCMR | CTB |  |
| field_extra_in_svd | SDCMR | CTB1 | svd[4:+1] |
| field_extra_in_svd | SDCMR | CTB2 | svd[3:+1] |
| register_missing_in_svd | SDCR |  |  |
| register_extra_in_svd | SDCR1 |  | svd offset 0x140 |
| register_extra_in_svd | SDCR2 |  | svd offset 0x144 |
| register_missing_in_svd | SDRAM |  |  |
| register_offset_mismatch | SDRTR |  | ip=0x14 svd=0x154 |
| register_offset_mismatch | SDSR |  | ip=0x18 svd=0x158 |
| field_missing_in_svd | SDSR | MODES |  |
| field_extra_in_svd | SDSR | MODES1 | svd[1:+2] |
| field_extra_in_svd | SDSR | MODES2 | svd[3:+2] |
| register_missing_in_svd | SDTR |  |  |
| register_extra_in_svd | SDTR%s |  | svd offset 0x148 |
| register_offset_mismatch | SR |  | ip=0x4 svd=0x84 |

### pwr/h7rm0468  (stm32h723ve · PWR · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | WKUPCR | WKUPC |  |
| field_extra_in_svd | WKUPCR | WKUPC1 | svd[0:+1] |
| field_extra_in_svd | WKUPCR | WKUPC2 | svd[1:+1] |
| field_extra_in_svd | WKUPCR | WKUPC4 | svd[3:+1] |
| field_extra_in_svd | WKUPCR | WKUPC6 | svd[5:+1] |
| field_missing_in_svd | WKUPEPR | WKUPEN |  |
| field_extra_in_svd | WKUPEPR | WKUPEN1 | svd[0:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN2 | svd[1:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN3 | svd[2:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN4 | svd[3:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN5 | svd[4:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN6 | svd[5:+1] |
| field_missing_in_svd | WKUPEPR | WKUPP |  |
| field_extra_in_svd | WKUPEPR | WKUPP1 | svd[8:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP2 | svd[9:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP3 | svd[10:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP4 | svd[11:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP5 | svd[12:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP6 | svd[13:+1] |
| field_missing_in_svd | WKUPEPR | WKUPPUPD |  |
| field_extra_in_svd | WKUPEPR | WKUPPUPD1 | svd[16:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD2 | svd[18:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD3 | svd[20:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD4 | svd[22:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD5 | svd[24:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD6 | svd[26:+2] |
| field_missing_in_svd | WKUPFR | WKUPF |  |
| field_extra_in_svd | WKUPFR | WKUPF1 | svd[0:+1] |
| field_extra_in_svd | WKUPFR | WKUPF2 | svd[1:+1] |
| field_extra_in_svd | WKUPFR | WKUPF4 | svd[3:+1] |
| field_extra_in_svd | WKUPFR | WKUPF6 | svd[5:+1] |

### rtc/v2_f2  (stm32f205rb · RTC · stm32f215.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALRM%sR |  | svd offset 0x1C |
| register_missing_in_svd | ALRMR |  |  |
| register_extra_in_svd | BKP%sR |  | svd offset 0x50 |
| register_missing_in_svd | BKPR |  |  |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | ISR | ALR%sF | svd[8:+1] |
| field_extra_in_svd | ISR | ALR%sWF | svd[0:+1] |
| field_missing_in_svd | ISR | ALRF |  |
| field_missing_in_svd | ISR | ALRWF |  |
| field_extra_in_svd | ISR | TAMP1F | svd[13:+1] |
| field_missing_in_svd | ISR | TAMPF |  |
| field_layout_mismatch | PRER | PREDIV_S | ip[0:+15] svd[0:+13] |
| field_extra_in_svd | TAFCR | TAMP1E | svd[0:+1] |
| field_extra_in_svd | TAFCR | TAMP1TRG | svd[1:+1] |
| field_missing_in_svd | TAFCR | TAMPE |  |
| field_missing_in_svd | TAFCR | TAMPTRG |  |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| field_missing_in_svd | TSTR | SU |  |

### rtc/v3_l4  (stm32l412c8 · RTC · stm32l412.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ALRM%sR |  | svd offset 0x40 |
| register_extra_in_svd | ALRM%sSSR |  | svd offset 0x44 |
| register_missing_in_svd | ALRMR |  |  |
| register_missing_in_svd | ALRMSSR |  |  |
| field_layout_mismatch | CALR | LPCAL | ip[12:+1] svd[21:+1] |
| field_extra_in_svd | CR | ALR%sE | svd[8:+1] |
| field_extra_in_svd | CR | ALR%sIE | svd[12:+1] |
| field_missing_in_svd | CR | ALRE |  |
| field_missing_in_svd | CR | ALRIE |  |
| field_extra_in_svd | ICSR | ALR%sWF | svd[0:+1] |
| field_extra_in_svd | MISR | ALR%sMF | svd[0:+1] |
| field_missing_in_svd | MISR | ALRMF |  |
| field_extra_in_svd | SCR | CALRAF | svd[0:+1] |
| field_extra_in_svd | SCR | CALRBF | svd[1:+1] |
| field_missing_in_svd | SCR | CALRF |  |
| field_extra_in_svd | SR | ALR%sF | svd[0:+1] |
| field_missing_in_svd | SR | ALRF |  |
| field_layout_mismatch | SSR | SS | ip[0:+32] svd[0:+16] |
| field_missing_in_svd | TSDR | DT |  |
| field_missing_in_svd | TSDR | DU |  |
| field_missing_in_svd | TSDR | MT |  |
| field_missing_in_svd | TSDR | MU |  |
| field_missing_in_svd | TSDR | WDU |  |
| field_missing_in_svd | TSSSR | SS |  |
| field_missing_in_svd | TSTR | HT |  |
| field_missing_in_svd | TSTR | HU |  |
| field_missing_in_svd | TSTR | MNT |  |
| field_missing_in_svd | TSTR | MNU |  |
| field_missing_in_svd | TSTR | PM |  |
| field_missing_in_svd | TSTR | ST |  |
| field_missing_in_svd | TSTR | SU |  |

### pwr/h50  (stm32h503cb · PWR · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | WUCR | WUPEN |  |
| field_extra_in_svd | WUCR | WUPEN1 | svd[0:+1] |
| field_extra_in_svd | WUCR | WUPEN2 | svd[1:+1] |
| field_extra_in_svd | WUCR | WUPEN3 | svd[2:+1] |
| field_extra_in_svd | WUCR | WUPEN4 | svd[3:+1] |
| field_extra_in_svd | WUCR | WUPEN5 | svd[4:+1] |
| field_missing_in_svd | WUCR | WUPP |  |
| field_extra_in_svd | WUCR | WUPP1 | svd[8:+1] |
| field_extra_in_svd | WUCR | WUPP2 | svd[9:+1] |
| field_extra_in_svd | WUCR | WUPP3 | svd[10:+1] |
| field_extra_in_svd | WUCR | WUPP4 | svd[11:+1] |
| field_extra_in_svd | WUCR | WUPP5 | svd[12:+1] |
| field_missing_in_svd | WUCR | WUPPUPD |  |
| field_extra_in_svd | WUCR | WUPPUPD1 | svd[16:+2] |
| field_extra_in_svd | WUCR | WUPPUPD2 | svd[18:+2] |
| field_extra_in_svd | WUCR | WUPPUPD3 | svd[20:+2] |
| field_extra_in_svd | WUCR | WUPPUPD4 | svd[22:+2] |
| field_extra_in_svd | WUCR | WUPPUPD5 | svd[24:+2] |
| field_missing_in_svd | WUSCR | CWUF |  |
| field_extra_in_svd | WUSCR | CWUF1 | svd[0:+1] |
| field_extra_in_svd | WUSCR | CWUF2 | svd[1:+1] |
| field_extra_in_svd | WUSCR | CWUF3 | svd[2:+1] |
| field_extra_in_svd | WUSCR | CWUF4 | svd[3:+1] |
| field_extra_in_svd | WUSCR | CWUF5 | svd[4:+1] |
| field_missing_in_svd | WUSR | WUF |  |
| field_extra_in_svd | WUSR | WUF1 | svd[0:+1] |
| field_extra_in_svd | WUSR | WUF2 | svd[1:+1] |
| field_extra_in_svd | WUSR | WUF3 | svd[2:+1] |
| field_extra_in_svd | WUSR | WUF4 | svd[3:+1] |
| field_extra_in_svd | WUSR | WUF5 | svd[4:+1] |

### syscfg/f3  (stm32f301c6 · SYSCFG · stm32f301.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CFGR1 | ADC2_DMA_RMP |  |
| field_missing_in_svd | CFGR1 | DAC1_TRIG_RMP |  |
| field_missing_in_svd | CFGR1 | DAC2_CH1_DMA_RMP |  |
| field_missing_in_svd | CFGR1 | DAC_TRIG_RMP |  |
| field_missing_in_svd | CFGR1 | FPU_IE |  |
| field_extra_in_svd | CFGR1 | FPU_IE0 | svd[26:+1] |
| field_extra_in_svd | CFGR1 | FPU_IE1 | svd[27:+1] |
| field_extra_in_svd | CFGR1 | FPU_IE2 | svd[28:+1] |
| field_extra_in_svd | CFGR1 | FPU_IE3 | svd[29:+1] |
| field_extra_in_svd | CFGR1 | FPU_IE4 | svd[30:+1] |
| field_extra_in_svd | CFGR1 | FPU_IE5 | svd[31:+1] |
| field_missing_in_svd | CFGR1 | TIM18_DAC2_OUT1_DMA_RMP |  |
| field_missing_in_svd | CFGR1 | TIM6_DAC1_CH1_DMA_RMP |  |
| field_missing_in_svd | CFGR1 | TIM6_DAC1_OUT1_DMA_RMP |  |
| field_missing_in_svd | CFGR1 | TIM7_DAC1_CH2_DMA_RMP |  |
| field_missing_in_svd | CFGR1 | TIM7_DAC1_OUT2_DMA_RMP |  |
| field_missing_in_svd | CFGR1 | USB_IT_RMP |  |
| field_missing_in_svd | CFGR1 | VBAT_MON |  |
| field_missing_in_svd | CFGR2 | BYP_ADDR_PAR |  |
| field_missing_in_svd | CFGR2 | LOCKUP_LOCK |  |
| field_missing_in_svd | CFGR2 | SRAM_PARITY_LOCK |  |
| field_missing_in_svd | CFGR2 | SRAM_PEF |  |
| register_missing_in_svd | CFGR3 |  |  |
| register_missing_in_svd | CFGR4 |  |  |
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x8 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0xC |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x10 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x14 |
| register_missing_in_svd | RCR |  |  |

### dbgmcu/wl  (stm32wle5c8 · DBGMCU · stm32wle5.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | APB1FZR1 | DBG_I2C1_STOP | svd[21:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_I2C2_STOP | svd[22:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_I2C3_STOP | svd[23:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_IWDG_STOP | svd[12:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_LPTIM1_STOP | svd[31:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_RTC_STOP | svd[10:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_TIM2_STOP | svd[0:+1] |
| field_extra_in_svd | APB1FZR1 | DBG_WWDG_STOP | svd[11:+1] |
| field_missing_in_svd | APB1FZR1 | I2C1 |  |
| field_missing_in_svd | APB1FZR1 | I2C2 |  |
| field_missing_in_svd | APB1FZR1 | I2C3 |  |
| field_missing_in_svd | APB1FZR1 | IWDG |  |
| field_missing_in_svd | APB1FZR1 | LPTIM1 |  |
| field_missing_in_svd | APB1FZR1 | RTC |  |
| field_missing_in_svd | APB1FZR1 | TIM2 |  |
| field_missing_in_svd | APB1FZR1 | WWDG |  |
| field_extra_in_svd | APB1FZR2 | DBG_LPTIM2_STOP | svd[5:+1] |
| field_extra_in_svd | APB1FZR2 | DBG_LPTIM3_STOP | svd[6:+1] |
| field_missing_in_svd | APB1FZR2 | LPTIM2 |  |
| field_missing_in_svd | APB1FZR2 | LPTIM3 |  |
| field_extra_in_svd | APB2FZR | DBG_TIM16_STOP | svd[17:+1] |
| field_extra_in_svd | APB2FZR | DBG_TIM17_STOP | svd[18:+1] |
| field_extra_in_svd | APB2FZR | DBG_TIM1_STOP | svd[11:+1] |
| field_missing_in_svd | APB2FZR | TIM1 |  |
| field_missing_in_svd | APB2FZR | TIM16 |  |
| field_missing_in_svd | APB2FZR | TIM17 |  |
| register_missing_in_svd | C2APB1FZR1 |  |  |
| register_missing_in_svd | C2APB1FZR2 |  |  |
| register_missing_in_svd | C2APB2FZR |  |  |

### exti/h50  (stm32h503cb · EXTI · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | EMR |  |  |
| register_extra_in_svd | EMR1 |  | svd offset 0x84 |
| register_extra_in_svd | EMR2 |  | svd offset 0x94 |
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x60 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0x64 |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x68 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x6C |
| register_missing_in_svd | FPR |  |  |
| register_extra_in_svd | FPR1 |  | svd offset 0x10 |
| register_extra_in_svd | FPR2 |  | svd offset 0x30 |
| register_missing_in_svd | FTSR |  |  |
| register_extra_in_svd | FTSR1 |  | svd offset 0x4 |
| register_extra_in_svd | FTSR2 |  | svd offset 0x24 |
| register_missing_in_svd | IMR |  |  |
| register_extra_in_svd | IMR1 |  | svd offset 0x80 |
| register_extra_in_svd | IMR2 |  | svd offset 0x90 |
| register_missing_in_svd | PRIVCFGR |  |  |
| register_extra_in_svd | PRIVCFGR1 |  | svd offset 0x18 |
| register_extra_in_svd | PRIVCFGR2 |  | svd offset 0x38 |
| register_missing_in_svd | RPR |  |  |
| register_extra_in_svd | RPR1 |  | svd offset 0xC |
| register_extra_in_svd | RPR2 |  | svd offset 0x2C |
| register_missing_in_svd | RTSR |  |  |
| register_extra_in_svd | RTSR1 |  | svd offset 0x0 |
| register_extra_in_svd | RTSR2 |  | svd offset 0x20 |
| register_missing_in_svd | SWIER |  |  |
| register_extra_in_svd | SWIER1 |  | svd offset 0x8 |
| register_extra_in_svd | SWIER2 |  | svd offset 0x28 |

### fmc/v1x3  (stm32f429ag · FMC · stm32f429.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | BCR |  |  |
| register_extra_in_svd | BCR%s |  | svd offset 0x8 |
| register_missing_in_svd | BTR |  |  |
| register_extra_in_svd | BTR%s |  | svd offset 0x4 |
| register_missing_in_svd | BWTR |  |  |
| register_extra_in_svd | BWTR%s |  | svd offset 0x104 |
| register_missing_in_svd | ECCR |  |  |
| register_extra_in_svd | ECCR%s |  | svd offset 0x74 |
| register_missing_in_svd | PATT |  |  |
| register_extra_in_svd | PATT%s |  | svd offset 0x6C |
| register_missing_in_svd | PCR |  |  |
| register_extra_in_svd | PCR%s |  | svd offset 0x60 |
| field_extra_in_svd | PIO4 | IOHIZ | svd[24:+8] |
| field_missing_in_svd | PIO4 | IOHIZx |  |
| field_extra_in_svd | PIO4 | IOHOLD | svd[16:+8] |
| field_missing_in_svd | PIO4 | IOHOLDx |  |
| field_extra_in_svd | PIO4 | IOSET | svd[0:+8] |
| field_missing_in_svd | PIO4 | IOSETx |  |
| field_extra_in_svd | PIO4 | IOWAIT | svd[8:+8] |
| field_missing_in_svd | PIO4 | IOWAITx |  |
| register_missing_in_svd | PMEM |  |  |
| register_extra_in_svd | PMEM%s |  | svd offset 0x68 |
| register_missing_in_svd | SDCR |  |  |
| register_extra_in_svd | SDCR1 |  | svd offset 0x140 |
| register_extra_in_svd | SDCR2 |  | svd offset 0x144 |
| register_missing_in_svd | SDTR |  |  |
| register_extra_in_svd | SDTR%s |  | svd offset 0x148 |
| register_missing_in_svd | SR |  |  |
| register_extra_in_svd | SR%s |  | svd offset 0x64 |

### pwr/h7rs  (stm32h7r3a8 · PWR · stm32h7r.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CSR2 | SDEXTHP |  |
| field_extra_in_svd | CSR2 | SDHILEVEL | svd[4:+1] |
| field_missing_in_svd | CSR2 | SDLEVEL |  |
| field_extra_in_svd | CSR2 | SMPSEXTHP | svd[3:+1] |
| field_missing_in_svd | WKUPCR | WKUPC |  |
| field_extra_in_svd | WKUPCR | WKUPC1 | svd[0:+1] |
| field_extra_in_svd | WKUPCR | WKUPC2 | svd[1:+1] |
| field_extra_in_svd | WKUPCR | WKUPC3 | svd[2:+1] |
| field_extra_in_svd | WKUPCR | WKUPC4 | svd[3:+1] |
| field_missing_in_svd | WKUPEPR | WKUPEN |  |
| field_extra_in_svd | WKUPEPR | WKUPEN1 | svd[0:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN2 | svd[1:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN3 | svd[2:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN4 | svd[3:+1] |
| field_missing_in_svd | WKUPEPR | WKUPP |  |
| field_extra_in_svd | WKUPEPR | WKUPP1 | svd[8:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP2 | svd[9:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP3 | svd[10:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP4 | svd[11:+1] |
| field_missing_in_svd | WKUPEPR | WKUPPUPD |  |
| field_extra_in_svd | WKUPEPR | WKUPPUPD1 | svd[16:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD2 | svd[18:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD3 | svd[20:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD4 | svd[22:+2] |
| field_missing_in_svd | WKUPFR | WKUPF |  |
| field_extra_in_svd | WKUPFR | WKUPF1 | svd[0:+1] |
| field_extra_in_svd | WKUPFR | WKUPF2 | svd[1:+1] |
| field_extra_in_svd | WKUPFR | WKUPF3 | svd[2:+1] |
| field_extra_in_svd | WKUPFR | WKUPF4 | svd[3:+1] |

### saes/v1a  (stm32h573ai · SAES · stm32h573.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR | CHMOD |  |
| field_extra_in_svd | CR | CHMOD1 | svd[5:+2] |
| field_extra_in_svd | CR | CHMOD2 | svd[16:+1] |
| field_extra_in_svd | DINR | DIN | svd[0:+32] |
| field_extra_in_svd | DOUTR | DOUT | svd[0:+32] |
| register_missing_in_svd | IVR |  |  |
| register_extra_in_svd | IVR0 |  | svd offset 0x20 |
| register_extra_in_svd | IVR1 |  | svd offset 0x24 |
| register_extra_in_svd | IVR2 |  | svd offset 0x28 |
| register_extra_in_svd | IVR3 |  | svd offset 0x2C |
| register_missing_in_svd | KEYR |  |  |
| register_extra_in_svd | KEYR0 |  | svd offset 0x10 |
| register_extra_in_svd | KEYR1 |  | svd offset 0x14 |
| register_extra_in_svd | KEYR2 |  | svd offset 0x18 |
| register_extra_in_svd | KEYR3 |  | svd offset 0x1C |
| register_extra_in_svd | KEYR4 |  | svd offset 0x30 |
| register_extra_in_svd | KEYR5 |  | svd offset 0x34 |
| register_extra_in_svd | KEYR6 |  | svd offset 0x38 |
| register_extra_in_svd | KEYR7 |  | svd offset 0x3C |
| field_extra_in_svd | SR | CCF | svd[0:+1] |
| register_extra_in_svd | SUSP0R |  | svd offset 0x40 |
| register_extra_in_svd | SUSP1R |  | svd offset 0x44 |
| register_extra_in_svd | SUSP2R |  | svd offset 0x48 |
| register_extra_in_svd | SUSP3R |  | svd offset 0x4C |
| register_extra_in_svd | SUSP4R |  | svd offset 0x50 |
| register_extra_in_svd | SUSP5R |  | svd offset 0x54 |
| register_extra_in_svd | SUSP6R |  | svd offset 0x58 |
| register_extra_in_svd | SUSP7R |  | svd offset 0x5C |
| register_missing_in_svd | SUSPR |  |  |

### timer/l0  (stm32l010c6 · TIM2 · stm32l0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | CCER | CC%sE | svd[0:+1] |
| field_extra_in_svd | CCER | CC%sNP | svd[3:+1] |
| field_extra_in_svd | CCER | CC%sP | svd[1:+1] |
| field_missing_in_svd | CCER | CCE |  |
| field_missing_in_svd | CCER | CCNP |  |
| field_missing_in_svd | CCER | CCP |  |
| register_extra_in_svd | CCMR1_Input |  | svd offset 0x18 |
| register_extra_in_svd | CCMR1_Output |  | svd offset 0x18 |
| register_extra_in_svd | CCMR2_Input |  | svd offset 0x1C |
| register_extra_in_svd | CCMR2_Output |  | svd offset 0x1C |
| register_missing_in_svd | CCMR_Input |  |  |
| register_missing_in_svd | CCMR_Output |  |  |
| register_missing_in_svd | CCR |  |  |
| register_extra_in_svd | CCR%s |  | svd offset 0x34 |
| field_missing_in_svd | CNT | UIFCPY |  |
| field_missing_in_svd | CR1 | UIFREMAP |  |
| field_extra_in_svd | DIER | CC%sDE | svd[9:+1] |
| field_extra_in_svd | DIER | CC%sIE | svd[1:+1] |
| field_missing_in_svd | DIER | CCDE |  |
| field_missing_in_svd | DIER | CCIE |  |
| field_extra_in_svd | EGR | CC%sG | svd[1:+1] |
| field_missing_in_svd | EGR | CCG |  |
| field_extra_in_svd | OR | ETR_RMP | svd[0:+3] |
| field_extra_in_svd | OR | TI4_RMP | svd[3:+2] |
| field_extra_in_svd | PSC | PSC | svd[0:+16] |
| field_extra_in_svd | SR | CC%sIF | svd[1:+1] |
| field_extra_in_svd | SR | CC%sOF | svd[9:+1] |
| field_missing_in_svd | SR | CCIF |  |
| field_missing_in_svd | SR | CCOF |  |

### aes/v1  (stm32f423ch · AES · stm32f413.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | CR | CHMOD | svd[5:+2] |
| field_missing_in_svd | CR | CHMOD10 |  |
| field_extra_in_svd | CR | CHMOD_2 | svd[16:+1] |
| field_extra_in_svd | CR | GCMPH | svd[13:+2] |
| field_extra_in_svd | CR | KEYSIZE | svd[18:+1] |
| register_missing_in_svd | IVR |  |  |
| register_extra_in_svd | IVR0 |  | svd offset 0x20 |
| register_extra_in_svd | IVR1 |  | svd offset 0x24 |
| register_extra_in_svd | IVR2 |  | svd offset 0x28 |
| register_extra_in_svd | IVR3 |  | svd offset 0x2C |
| register_missing_in_svd | KEYR |  |  |
| register_extra_in_svd | KEYR0 |  | svd offset 0x10 |
| register_extra_in_svd | KEYR1 |  | svd offset 0x14 |
| register_extra_in_svd | KEYR2 |  | svd offset 0x18 |
| register_extra_in_svd | KEYR3 |  | svd offset 0x1C |
| register_extra_in_svd | KEYR4 |  | svd offset 0x30 |
| register_extra_in_svd | KEYR5 |  | svd offset 0x34 |
| register_extra_in_svd | KEYR6 |  | svd offset 0x38 |
| register_extra_in_svd | KEYR7 |  | svd offset 0x3C |
| field_extra_in_svd | SR | BUSY | svd[3:+1] |
| register_extra_in_svd | SUSP0R |  | svd offset 0x40 |
| register_extra_in_svd | SUSP1R |  | svd offset 0x44 |
| register_extra_in_svd | SUSP2R |  | svd offset 0x48 |
| register_extra_in_svd | SUSP3R |  | svd offset 0x4C |
| register_extra_in_svd | SUSP4R |  | svd offset 0x50 |
| register_extra_in_svd | SUSP5R |  | svd offset 0x54 |
| register_extra_in_svd | SUSP6R |  | svd offset 0x58 |
| register_extra_in_svd | SUSP7R |  | svd offset 0x5C |

### pwr/f7  (stm32f730i8 · PWR · stm32f730.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR2 | CWUPF |  |
| field_extra_in_svd | CR2 | CWUPF1 | svd[0:+1] |
| field_extra_in_svd | CR2 | CWUPF2 | svd[1:+1] |
| field_extra_in_svd | CR2 | CWUPF3 | svd[2:+1] |
| field_extra_in_svd | CR2 | CWUPF4 | svd[3:+1] |
| field_extra_in_svd | CR2 | CWUPF5 | svd[4:+1] |
| field_extra_in_svd | CR2 | CWUPF6 | svd[5:+1] |
| field_missing_in_svd | CR2 | WUPP |  |
| field_extra_in_svd | CR2 | WUPP1 | svd[8:+1] |
| field_extra_in_svd | CR2 | WUPP2 | svd[9:+1] |
| field_extra_in_svd | CR2 | WUPP3 | svd[10:+1] |
| field_extra_in_svd | CR2 | WUPP4 | svd[11:+1] |
| field_extra_in_svd | CR2 | WUPP5 | svd[12:+1] |
| field_extra_in_svd | CR2 | WUPP6 | svd[13:+1] |
| field_missing_in_svd | CSR2 | EWUP |  |
| field_extra_in_svd | CSR2 | EWUP1 | svd[8:+1] |
| field_extra_in_svd | CSR2 | EWUP2 | svd[9:+1] |
| field_extra_in_svd | CSR2 | EWUP3 | svd[10:+1] |
| field_extra_in_svd | CSR2 | EWUP4 | svd[11:+1] |
| field_extra_in_svd | CSR2 | EWUP5 | svd[12:+1] |
| field_extra_in_svd | CSR2 | EWUP6 | svd[13:+1] |
| field_missing_in_svd | CSR2 | WUPF |  |
| field_extra_in_svd | CSR2 | WUPF1 | svd[0:+1] |
| field_extra_in_svd | CSR2 | WUPF2 | svd[1:+1] |
| field_extra_in_svd | CSR2 | WUPF3 | svd[2:+1] |
| field_extra_in_svd | CSR2 | WUPF4 | svd[3:+1] |
| field_extra_in_svd | CSR2 | WUPF5 | svd[4:+1] |
| field_extra_in_svd | CSR2 | WUPF6 | svd[5:+1] |

### pwr/h7rm0433  (stm32h743ag · PWR · stm32h743.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | WKUPEPR | WKUPEN |  |
| field_extra_in_svd | WKUPEPR | WKUPEN1 | svd[0:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN2 | svd[1:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN3 | svd[2:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN4 | svd[3:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN5 | svd[4:+1] |
| field_extra_in_svd | WKUPEPR | WKUPEN6 | svd[5:+1] |
| field_missing_in_svd | WKUPEPR | WKUPP |  |
| field_extra_in_svd | WKUPEPR | WKUPP1 | svd[8:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP2 | svd[9:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP3 | svd[10:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP4 | svd[11:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP5 | svd[12:+1] |
| field_extra_in_svd | WKUPEPR | WKUPP6 | svd[13:+1] |
| field_missing_in_svd | WKUPEPR | WKUPPUPD |  |
| field_extra_in_svd | WKUPEPR | WKUPPUPD1 | svd[16:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD2 | svd[18:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD3 | svd[20:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD4 | svd[22:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD5 | svd[24:+2] |
| field_extra_in_svd | WKUPEPR | WKUPPUPD6 | svd[26:+2] |
| field_missing_in_svd | WKUPFR | WKUPF |  |
| field_extra_in_svd | WKUPFR | WKUPF1 | svd[0:+1] |
| field_extra_in_svd | WKUPFR | WKUPF2 | svd[1:+1] |
| field_extra_in_svd | WKUPFR | WKUPF3 | svd[2:+1] |
| field_extra_in_svd | WKUPFR | WKUPF4 | svd[3:+1] |
| field_extra_in_svd | WKUPFR | WKUPF5 | svd[4:+1] |
| field_extra_in_svd | WKUPFR | WKUPF6 | svd[5:+1] |

### aes/f7  (stm32f730i8 · AES · stm32f730.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | CR | CHMOD | svd[5:+2] |
| field_missing_in_svd | CR | CHMOD10 |  |
| field_missing_in_svd | CR | CHMOD2 |  |
| field_extra_in_svd | CR | CHMOD_2 | svd[16:+1] |
| register_missing_in_svd | IVR |  |  |
| register_extra_in_svd | IVR0 |  | svd offset 0x20 |
| register_extra_in_svd | IVR1 |  | svd offset 0x24 |
| register_extra_in_svd | IVR2 |  | svd offset 0x28 |
| register_extra_in_svd | IVR3 |  | svd offset 0x2C |
| register_missing_in_svd | KEYR |  |  |
| register_extra_in_svd | KEYR0 |  | svd offset 0x10 |
| register_extra_in_svd | KEYR1 |  | svd offset 0x14 |
| register_extra_in_svd | KEYR2 |  | svd offset 0x18 |
| register_extra_in_svd | KEYR3 |  | svd offset 0x1C |
| register_extra_in_svd | KEYR4 |  | svd offset 0x30 |
| register_extra_in_svd | KEYR5 |  | svd offset 0x34 |
| register_extra_in_svd | KEYR6 |  | svd offset 0x38 |
| register_extra_in_svd | KEYR7 |  | svd offset 0x3C |
| register_extra_in_svd | SUSP0R |  | svd offset 0x40 |
| register_extra_in_svd | SUSP1R |  | svd offset 0x44 |
| register_extra_in_svd | SUSP2R |  | svd offset 0x48 |
| register_extra_in_svd | SUSP3R |  | svd offset 0x4C |
| register_extra_in_svd | SUSP4R |  | svd offset 0x50 |
| register_extra_in_svd | SUSP5R |  | svd offset 0x54 |
| register_extra_in_svd | SUSP6R |  | svd offset 0x58 |
| register_extra_in_svd | SUSP7R |  | svd offset 0x5C |
| register_missing_in_svd | SUSPR |  |  |

### aes/v2  (stm32g041c6 · AES · stm32g041.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | CR | CHMOD | svd[5:+2] |
| field_missing_in_svd | CR | CHMOD10 |  |
| field_missing_in_svd | CR | CHMOD2 |  |
| field_extra_in_svd | CR | CHMOD_2 | svd[16:+1] |
| register_missing_in_svd | IVR |  |  |
| register_extra_in_svd | IVR0 |  | svd offset 0x20 |
| register_extra_in_svd | IVR1 |  | svd offset 0x24 |
| register_extra_in_svd | IVR2 |  | svd offset 0x28 |
| register_extra_in_svd | IVR3 |  | svd offset 0x2C |
| register_missing_in_svd | KEYR |  |  |
| register_extra_in_svd | KEYR0 |  | svd offset 0x10 |
| register_extra_in_svd | KEYR1 |  | svd offset 0x14 |
| register_extra_in_svd | KEYR2 |  | svd offset 0x18 |
| register_extra_in_svd | KEYR3 |  | svd offset 0x1C |
| register_extra_in_svd | KEYR4 |  | svd offset 0x30 |
| register_extra_in_svd | KEYR5 |  | svd offset 0x34 |
| register_extra_in_svd | KEYR6 |  | svd offset 0x38 |
| register_extra_in_svd | KEYR7 |  | svd offset 0x3C |
| register_extra_in_svd | SUSP0R |  | svd offset 0x40 |
| register_extra_in_svd | SUSP1R |  | svd offset 0x44 |
| register_extra_in_svd | SUSP2R |  | svd offset 0x48 |
| register_extra_in_svd | SUSP3R |  | svd offset 0x4C |
| register_extra_in_svd | SUSP4R |  | svd offset 0x50 |
| register_extra_in_svd | SUSP5R |  | svd offset 0x54 |
| register_extra_in_svd | SUSP6R |  | svd offset 0x58 |
| register_extra_in_svd | SUSP7R |  | svd offset 0x5C |
| register_missing_in_svd | SUSPR |  |  |

### aes/v3a  (stm32u545ce · AES · stm32u545.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | CR | CHMOD | ip[[{'start': 5, 'end': 6}, {'start': 16, 'end': 16}]:+3] svd[5:+2] |
| field_extra_in_svd | CR | CHMOD_2 | svd[16:+1] |
| field_extra_in_svd | DINR | DIN | svd[0:+32] |
| field_extra_in_svd | DOUTR | DOUT | svd[0:+32] |
| register_missing_in_svd | IVR |  |  |
| register_extra_in_svd | IVR0 |  | svd offset 0x20 |
| register_extra_in_svd | IVR1 |  | svd offset 0x24 |
| register_extra_in_svd | IVR2 |  | svd offset 0x28 |
| register_extra_in_svd | IVR3 |  | svd offset 0x2C |
| register_missing_in_svd | KEYR |  |  |
| register_extra_in_svd | KEYR0 |  | svd offset 0x10 |
| register_extra_in_svd | KEYR1 |  | svd offset 0x14 |
| register_extra_in_svd | KEYR2 |  | svd offset 0x18 |
| register_extra_in_svd | KEYR3 |  | svd offset 0x1C |
| register_extra_in_svd | KEYR4 |  | svd offset 0x30 |
| register_extra_in_svd | KEYR5 |  | svd offset 0x34 |
| register_extra_in_svd | KEYR6 |  | svd offset 0x38 |
| register_extra_in_svd | KEYR7 |  | svd offset 0x3C |
| register_extra_in_svd | SUSP0R |  | svd offset 0x40 |
| register_extra_in_svd | SUSP1R |  | svd offset 0x44 |
| register_extra_in_svd | SUSP2R |  | svd offset 0x48 |
| register_extra_in_svd | SUSP3R |  | svd offset 0x4C |
| register_extra_in_svd | SUSP4R |  | svd offset 0x50 |
| register_extra_in_svd | SUSP5R |  | svd offset 0x54 |
| register_extra_in_svd | SUSP6R |  | svd offset 0x58 |
| register_extra_in_svd | SUSP7R |  | svd offset 0x5C |
| register_missing_in_svd | SUSPR |  |  |

### aes/v3b  (stm32h573ai · AES · stm32h573.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | CR | CHMOD | ip[[{'start': 5, 'end': 6}, {'start': 16, 'end': 16}]:+3] svd[5:+2] |
| field_extra_in_svd | CR | CHMOD_2 | svd[16:+1] |
| field_extra_in_svd | DINR | DIN | svd[0:+32] |
| field_extra_in_svd | DOUTR | DOUT | svd[0:+32] |
| register_missing_in_svd | IVR |  |  |
| register_extra_in_svd | IVR0 |  | svd offset 0x20 |
| register_extra_in_svd | IVR1 |  | svd offset 0x24 |
| register_extra_in_svd | IVR2 |  | svd offset 0x28 |
| register_extra_in_svd | IVR3 |  | svd offset 0x2C |
| register_missing_in_svd | KEYR |  |  |
| register_extra_in_svd | KEYR0 |  | svd offset 0x10 |
| register_extra_in_svd | KEYR1 |  | svd offset 0x14 |
| register_extra_in_svd | KEYR2 |  | svd offset 0x18 |
| register_extra_in_svd | KEYR3 |  | svd offset 0x1C |
| register_extra_in_svd | KEYR4 |  | svd offset 0x30 |
| register_extra_in_svd | KEYR5 |  | svd offset 0x34 |
| register_extra_in_svd | KEYR6 |  | svd offset 0x38 |
| register_extra_in_svd | KEYR7 |  | svd offset 0x3C |
| register_extra_in_svd | SUSP0R |  | svd offset 0x40 |
| register_extra_in_svd | SUSP1R |  | svd offset 0x44 |
| register_extra_in_svd | SUSP2R |  | svd offset 0x48 |
| register_extra_in_svd | SUSP3R |  | svd offset 0x4C |
| register_extra_in_svd | SUSP4R |  | svd offset 0x50 |
| register_extra_in_svd | SUSP5R |  | svd offset 0x54 |
| register_extra_in_svd | SUSP6R |  | svd offset 0x58 |
| register_extra_in_svd | SUSP7R |  | svd offset 0x5C |
| register_missing_in_svd | SUSPR |  |  |

### gfxmmu/v1  (stm32l4r9ag · GFXMMU · stm32l4r9.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | B0CR |  | svd offset 0x20 |
| register_extra_in_svd | B1CR |  | svd offset 0x24 |
| register_extra_in_svd | B2CR |  | svd offset 0x28 |
| register_extra_in_svd | B3CR |  | svd offset 0x2C |
| register_missing_in_svd | BCR |  |  |
| field_extra_in_svd | CR | B0OIE | svd[0:+1] |
| field_extra_in_svd | CR | B1OIE | svd[1:+1] |
| field_extra_in_svd | CR | B2OIE | svd[2:+1] |
| field_extra_in_svd | CR | B3OIE | svd[3:+1] |
| field_missing_in_svd | CR | BM |  |
| field_extra_in_svd | CR | BM192 | svd[6:+1] |
| field_missing_in_svd | CR | BOIE |  |
| field_extra_in_svd | FCR | CB0OF | svd[0:+1] |
| field_extra_in_svd | FCR | CB1OF | svd[1:+1] |
| field_extra_in_svd | FCR | CB2OF | svd[2:+1] |
| field_extra_in_svd | FCR | CB3OF | svd[3:+1] |
| field_missing_in_svd | FCR | CBOF |  |
| register_extra_in_svd | IPIDR |  | svd offset 0xFF8 |
| register_missing_in_svd | LUTH |  |  |
| register_missing_in_svd | LUTL |  |  |
| register_extra_in_svd | SIDR |  | svd offset 0xFFC |
| field_extra_in_svd | SR | B0OF | svd[0:+1] |
| field_extra_in_svd | SR | B1OF | svd[1:+1] |
| field_extra_in_svd | SR | B2OF | svd[2:+1] |
| field_extra_in_svd | SR | B3OF | svd[3:+1] |
| field_missing_in_svd | SR | BOF |  |
| register_extra_in_svd | VERR |  | svd offset 0xFF4 |

### flash/wl  (stm32wle5c8 · FLASH · stm32wle5.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | C2ACR |  |  |
| register_missing_in_svd | C2CR |  |  |
| register_missing_in_svd | C2SR |  |  |
| field_layout_mismatch | CR | PNB | ip[3:+8] svd[3:+7] |
| field_missing_in_svd | ECCR | CPUID |  |
| register_missing_in_svd | IPCCBR |  |  |
| field_extra_in_svd | KEYR | KEY | svd[0:+32] |
| field_extra_in_svd | OPTKEYR | OPTKEY | svd[0:+32] |
| field_missing_in_svd | OPTR | AGC_TRIM |  |
| field_extra_in_svd | OPTR | BOOT_LOCK | svd[30:+1] |
| field_missing_in_svd | OPTR | IDWG_SW |  |
| field_extra_in_svd | OPTR | IWDG_SW | svd[16:+1] |
| field_missing_in_svd | OPTR | SRAM2_RST |  |
| field_extra_in_svd | OPTR | SRAM_RST | svd[25:+1] |
| field_layout_mismatch | PCROP1AER | PCROP1A_END | ip[0:+9] svd[0:+8] |
| field_layout_mismatch | PCROP1ASR | PCROP1A_STRT | ip[0:+9] svd[0:+8] |
| field_layout_mismatch | PCROP1BER | PCROP1B_END | ip[0:+9] svd[0:+8] |
| field_layout_mismatch | PCROP1BSR | PCROP1B_STRT | ip[0:+9] svd[0:+8] |
| register_missing_in_svd | SFR |  |  |
| field_missing_in_svd | SR | MISERR |  |
| field_extra_in_svd | SR | MISSERR | svd[8:+1] |
| register_missing_in_svd | SRRVR |  |  |
| field_layout_mismatch | WRP1AR | WRP1A_END | ip[16:+8] svd[16:+7] |
| field_layout_mismatch | WRP1AR | WRP1A_STRT | ip[0:+8] svd[0:+7] |
| field_layout_mismatch | WRP1BR | WRP1B_END | ip[0:+8] svd[16:+7] |
| field_layout_mismatch | WRP1BR | WRP1B_STRT | ip[16:+8] svd[0:+7] |

### rcc/wb  (stm32wb55cc · RCC · stm32wb55.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | AHB1ENR | DMAMUX1EN |  |
| field_extra_in_svd | AHB1ENR | DMAMUXEN | svd[2:+1] |
| field_missing_in_svd | AHB1RSTR | DMAMUX1RST |  |
| field_extra_in_svd | AHB1RSTR | DMAMUXRST | svd[2:+1] |
| field_missing_in_svd | AHB1SMENR | DMAMUX1SMEN |  |
| field_extra_in_svd | AHB1SMENR | DMAMUXSMEN | svd[2:+1] |
| field_extra_in_svd | AHB3ENR | QSPIEN | svd[8:+1] |
| field_missing_in_svd | AHB3ENR | QUADSPIEN |  |
| field_extra_in_svd | AHB3RSTR | QSPIRST | svd[8:+1] |
| field_missing_in_svd | AHB3RSTR | QUADSPIRST |  |
| field_extra_in_svd | AHB3SMENR | QSPISMEN | svd[8:+1] |
| field_missing_in_svd | AHB3SMENR | QUADSPISMEN |  |
| field_extra_in_svd | APB1RSTR1 | USBFSRST | svd[26:+1] |
| field_missing_in_svd | APB1RSTR1 | USBRST |  |
| field_layout_mismatch | BDCR | LSCOSEL | ip[25:+2] svd[25:+1] |
| field_extra_in_svd | BDCR | LSECSSD | svd[6:+1] |
| field_missing_in_svd | BDCR | LSECSSD_ |  |
| field_missing_in_svd | C2AHB1ENR | DMAMUX1EN |  |
| field_extra_in_svd | C2AHB1ENR | DMAMUXEN | svd[2:+1] |
| field_missing_in_svd | C2AHB1SMENR | DMAMUX1SMEN |  |
| field_extra_in_svd | C2AHB1SMENR | DMAMUXSMEN | svd[2:+1] |
| field_extra_in_svd | CICR | CSSC | svd[8:+1] |
| field_missing_in_svd | CICR | HSECSSC |  |
| field_extra_in_svd | CIFR | CSSF | svd[8:+1] |
| field_missing_in_svd | CIFR | HSECSSF |  |
| register_extra_in_svd | HSECR_KEY |  | svd offset 0x9C |

### exti/u5  (stm32u535cb · EXTI · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | EMR |  |  |
| register_extra_in_svd | EMR1 |  | svd offset 0x84 |
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x60 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0x64 |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x68 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x6C |
| register_missing_in_svd | FPR |  |  |
| register_extra_in_svd | FPR1 |  | svd offset 0x10 |
| register_missing_in_svd | FTSR |  |  |
| register_extra_in_svd | FTSR1 |  | svd offset 0x4 |
| register_missing_in_svd | IMR |  |  |
| register_extra_in_svd | IMR1 |  | svd offset 0x80 |
| register_extra_in_svd | LOCKR |  | svd offset 0x70 |
| register_missing_in_svd | LOCKRG |  |  |
| register_missing_in_svd | PRIVCFGR |  |  |
| register_extra_in_svd | PRIVCFGR1 |  | svd offset 0x18 |
| register_missing_in_svd | RPR |  |  |
| register_extra_in_svd | RPR1 |  | svd offset 0xC |
| register_missing_in_svd | RTSR |  |  |
| register_extra_in_svd | RTSR1 |  | svd offset 0x0 |
| register_missing_in_svd | SECCFGR |  |  |
| register_extra_in_svd | SECCFGR1 |  | svd offset 0x14 |
| register_missing_in_svd | SWIER |  |  |
| register_extra_in_svd | SWIER1 |  | svd offset 0x8 |

### fsmc/v1x3  (stm32f101vc · FSMC · stm32f101.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | BCR |  |  |
| register_extra_in_svd | BCR%s |  | svd offset 0x8 |
| register_extra_in_svd | BCR1 |  | svd offset 0x0 |
| register_missing_in_svd | BTR |  |  |
| register_extra_in_svd | BTR%s |  | svd offset 0x4 |
| register_missing_in_svd | BWTR |  |  |
| register_extra_in_svd | BWTR%s |  | svd offset 0x104 |
| register_missing_in_svd | ECCR |  |  |
| register_extra_in_svd | ECCR%s |  | svd offset 0x74 |
| register_missing_in_svd | PATT |  |  |
| register_extra_in_svd | PATT%s |  | svd offset 0x6C |
| register_missing_in_svd | PCR |  |  |
| register_extra_in_svd | PCR%s |  | svd offset 0x60 |
| field_extra_in_svd | PIO4 | IOHIZ | svd[24:+8] |
| field_missing_in_svd | PIO4 | IOHIZx |  |
| field_extra_in_svd | PIO4 | IOHOLD | svd[16:+8] |
| field_missing_in_svd | PIO4 | IOHOLDx |  |
| field_extra_in_svd | PIO4 | IOSET | svd[0:+8] |
| field_missing_in_svd | PIO4 | IOSETx |  |
| field_extra_in_svd | PIO4 | IOWAIT | svd[8:+8] |
| field_missing_in_svd | PIO4 | IOWAITx |  |
| register_missing_in_svd | PMEM |  |  |
| register_extra_in_svd | PMEM%s |  | svd offset 0x68 |
| register_missing_in_svd | SR |  |  |
| register_extra_in_svd | SR%s |  | svd offset 0x64 |

### gfxmmu/v2  (stm32u599bj · GFXMMU · stm32u599.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | B0CR |  | svd offset 0x20 |
| register_extra_in_svd | B1CR |  | svd offset 0x24 |
| register_extra_in_svd | B2CR |  | svd offset 0x28 |
| register_extra_in_svd | B3CR |  | svd offset 0x2C |
| register_missing_in_svd | BCR |  |  |
| field_extra_in_svd | CR | B0OIE | svd[0:+1] |
| field_extra_in_svd | CR | B1OIE | svd[1:+1] |
| field_extra_in_svd | CR | B2OIE | svd[2:+1] |
| field_extra_in_svd | CR | B3OIE | svd[3:+1] |
| field_missing_in_svd | CR | BM |  |
| field_extra_in_svd | CR | BM192 | svd[6:+1] |
| field_missing_in_svd | CR | BOIE |  |
| field_extra_in_svd | FCR | CB0OF | svd[0:+1] |
| field_extra_in_svd | FCR | CB1OF | svd[1:+1] |
| field_extra_in_svd | FCR | CB2OF | svd[2:+1] |
| field_extra_in_svd | FCR | CB3OF | svd[3:+1] |
| field_missing_in_svd | FCR | CBOF |  |
| register_missing_in_svd | LUTH |  |  |
| register_missing_in_svd | LUTL |  |  |
| field_extra_in_svd | SR | B0OF | svd[0:+1] |
| field_extra_in_svd | SR | B1OF | svd[1:+1] |
| field_extra_in_svd | SR | B2OF | svd[2:+1] |
| field_extra_in_svd | SR | B3OF | svd[3:+1] |
| field_missing_in_svd | SR | BOF |  |

### hsem/wba  (stm32wba50ke · HSEM · stm32wba50.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR | COREID |  |
| field_extra_in_svd | CR | LOCKID | svd[8:+4] |
| field_missing_in_svd | ICR | ISC |  |
| field_extra_in_svd | ICR | ISC%s | svd[0:+1] |
| field_missing_in_svd | IER | ISE |  |
| field_extra_in_svd | IER | ISE%s | svd[0:+1] |
| field_missing_in_svd | ISR | ISF |  |
| field_extra_in_svd | ISR | ISF%s | svd[0:+1] |
| field_missing_in_svd | MISR | MISF |  |
| field_extra_in_svd | MISR | MISF%s | svd[0:+1] |
| register_extra_in_svd | MSISR |  | svd offset 0x18C |
| field_layout_mismatch | PRIVCFGR | PRIV | ip[0:+1] svd[0:+16] |
| register_missing_in_svd | R |  |  |
| register_extra_in_svd | R%s |  | svd offset 0x0 |
| register_missing_in_svd | RLR |  |  |
| register_extra_in_svd | RLR%s |  | svd offset 0x80 |
| field_layout_mismatch | SECCFGR | SEC | ip[0:+1] svd[0:+16] |
| field_missing_in_svd | SICR | ISC |  |
| field_extra_in_svd | SICR | SISC | svd[0:+16] |
| field_missing_in_svd | SIER | ISE |  |
| field_extra_in_svd | SIER | SISE | svd[0:+16] |
| field_missing_in_svd | SISR | ISF |  |
| field_extra_in_svd | SISR | SISF | svd[0:+16] |
| register_missing_in_svd | SMISR |  |  |

### sdadc/v1  (stm32f373c8 · SDADC1 · stm32f373.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | CONF0R |  | svd offset 0x20 |
| register_extra_in_svd | CONF1R |  | svd offset 0x24 |
| register_extra_in_svd | CONF2R |  | svd offset 0x28 |
| field_missing_in_svd | CONFCHR1 | CONFCH |  |
| field_extra_in_svd | CONFCHR1 | CONFCH0 | svd[0:+2] |
| field_extra_in_svd | CONFCHR1 | CONFCH1 | svd[4:+2] |
| field_extra_in_svd | CONFCHR1 | CONFCH2 | svd[8:+2] |
| field_extra_in_svd | CONFCHR1 | CONFCH3 | svd[12:+2] |
| field_extra_in_svd | CONFCHR1 | CONFCH4 | svd[16:+2] |
| field_extra_in_svd | CONFCHR1 | CONFCH5 | svd[20:+2] |
| field_extra_in_svd | CONFCHR1 | CONFCH6 | svd[24:+2] |
| field_extra_in_svd | CONFCHR1 | CONFCH7 | svd[28:+2] |
| field_missing_in_svd | CONFCHR2 | CONFCH |  |
| field_extra_in_svd | CONFCHR2 | CONFCH8 | svd[0:+2] |
| register_missing_in_svd | CONFR |  |  |
| field_extra_in_svd | JDATA12R | JDATA1 | svd[0:+16] |
| field_extra_in_svd | JDATA12R | JDATA2 | svd[16:+16] |
| field_extra_in_svd | JDATA13R | JDATA1 | svd[0:+16] |
| field_extra_in_svd | JDATA13R | JDATA3 | svd[16:+16] |
| field_layout_mismatch | JDATAR | JDATACH | ip[24:+4] svd[25:+4] |
| field_extra_in_svd | RDATA12R | RDATA1 | svd[0:+16] |
| field_extra_in_svd | RDATA12R | RDATA2 | svd[16:+16] |
| field_extra_in_svd | RDATA13R | RDATA1 | svd[0:+16] |
| field_extra_in_svd | RDATA13R | RDATA3 | svd[16:+16] |

### dbgmcu/f0  (stm32f030c6 · DBGMCU · stm32f0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | APB1_FZ | CAN |  |
| field_extra_in_svd | APB1_FZ | DBG_IWDG_STOP | svd[12:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM14_STOP | svd[8:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM3_STOP | svd[1:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM6_STOP | svd[4:+1] |
| field_extra_in_svd | APB1_FZ | DBG_TIM7_STOP | svd[5:+1] |
| field_extra_in_svd | APB1_FZ | DBG_WWDG_STOP | svd[11:+1] |
| field_missing_in_svd | APB1_FZ | IWDG |  |
| field_missing_in_svd | APB1_FZ | RTC |  |
| field_missing_in_svd | APB1_FZ | TIM14 |  |
| field_missing_in_svd | APB1_FZ | TIM2 |  |
| field_missing_in_svd | APB1_FZ | TIM3 |  |
| field_missing_in_svd | APB1_FZ | TIM6 |  |
| field_missing_in_svd | APB1_FZ | TIM7 |  |
| field_missing_in_svd | APB1_FZ | WWDG |  |
| field_extra_in_svd | APB2_FZ | DBG_TIM15_STOP | svd[16:+1] |
| field_extra_in_svd | APB2_FZ | DBG_TIM16_STOP | svd[17:+1] |
| field_extra_in_svd | APB2_FZ | DBG_TIM17_STOP | svd[18:+1] |
| field_extra_in_svd | APB2_FZ | DBG_TIM1_STOP | svd[11:+1] |
| field_missing_in_svd | APB2_FZ | TIM1 |  |
| field_missing_in_svd | APB2_FZ | TIM15 |  |
| field_missing_in_svd | APB2_FZ | TIM16 |  |
| field_missing_in_svd | APB2_FZ | TIM17 |  |

### fmc/v2x1  (stm32f446vc · FMC · stm32f446.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | BCR |  |  |
| register_extra_in_svd | BCR%s |  | svd offset 0x8 |
| field_extra_in_svd | BCR1 | WRAPMOD | svd[10:+1] |
| register_missing_in_svd | BTR |  |  |
| register_extra_in_svd | BTR%s |  | svd offset 0x4 |
| register_missing_in_svd | BWTR |  |  |
| register_extra_in_svd | BWTR%s |  | svd offset 0x104 |
| register_missing_in_svd | ECCR |  |  |
| register_extra_in_svd | ECCR%s |  | svd offset 0x74 |
| register_missing_in_svd | PATT |  |  |
| register_extra_in_svd | PATT%s |  | svd offset 0x6C |
| register_missing_in_svd | PCR |  |  |
| register_extra_in_svd | PCR%s |  | svd offset 0x60 |
| register_extra_in_svd | PIO4 |  | svd offset 0xB0 |
| register_missing_in_svd | PMEM |  |  |
| register_extra_in_svd | PMEM%s |  | svd offset 0x68 |
| register_missing_in_svd | SDCR |  |  |
| register_extra_in_svd | SDCR1 |  | svd offset 0x140 |
| register_extra_in_svd | SDCR2 |  | svd offset 0x144 |
| register_missing_in_svd | SDTR |  |  |
| register_extra_in_svd | SDTR%s |  | svd offset 0x148 |
| register_missing_in_svd | SR |  |  |
| register_extra_in_svd | SR%s |  | svd offset 0x64 |

### gpio/v2_l478  (stm32l471qe · GPIOA · stm32l4x1.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | AFR |  |  |
| register_extra_in_svd | AFRH |  | svd offset 0x24 |
| register_extra_in_svd | AFRL |  | svd offset 0x20 |
| register_missing_in_svd | ASCR |  |  |
| register_extra_in_svd | BRR |  | svd offset 0x28 |
| field_missing_in_svd | BSRR | BR |  |
| field_extra_in_svd | BSRR | BR%s | svd[16:+1] |
| field_missing_in_svd | BSRR | BS |  |
| field_extra_in_svd | BSRR | BS%s | svd[0:+1] |
| field_missing_in_svd | IDR | IDR |  |
| field_extra_in_svd | IDR | IDR%s | svd[0:+1] |
| field_missing_in_svd | LCKR | LCK |  |
| field_extra_in_svd | LCKR | LCK%s | svd[0:+1] |
| field_missing_in_svd | MODER | MODER |  |
| field_extra_in_svd | MODER | MODER%s | svd[0:+2] |
| field_missing_in_svd | ODR | ODR |  |
| field_extra_in_svd | ODR | ODR%s | svd[0:+1] |
| field_missing_in_svd | OSPEEDR | OSPEEDR |  |
| field_extra_in_svd | OSPEEDR | OSPEEDR%s | svd[0:+2] |
| field_missing_in_svd | OTYPER | OT |  |
| field_extra_in_svd | OTYPER | OT%s | svd[0:+1] |
| field_missing_in_svd | PUPDR | PUPDR |  |
| field_extra_in_svd | PUPDR | PUPDR%s | svd[0:+2] |

### bdma/v2  (stm32f030cc · DMA1 · stm32f0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | CH |  |  |
| register_missing_in_svd | CR |  |  |
| register_missing_in_svd | CSELR |  |  |
| field_extra_in_svd | IFCR | CGIF%s | svd[0:+1] |
| field_extra_in_svd | IFCR | CHTIF%s | svd[2:+1] |
| field_extra_in_svd | IFCR | CTCIF%s | svd[1:+1] |
| field_extra_in_svd | IFCR | CTEIF%s | svd[3:+1] |
| field_missing_in_svd | IFCR | GIF |  |
| field_missing_in_svd | IFCR | HTIF |  |
| field_missing_in_svd | IFCR | TCIF |  |
| field_missing_in_svd | IFCR | TEIF |  |
| field_missing_in_svd | ISR | GIF |  |
| field_extra_in_svd | ISR | GIF%s | svd[0:+1] |
| field_missing_in_svd | ISR | HTIF |  |
| field_extra_in_svd | ISR | HTIF%s | svd[2:+1] |
| field_missing_in_svd | ISR | TCIF |  |
| field_extra_in_svd | ISR | TCIF%s | svd[1:+1] |
| field_missing_in_svd | ISR | TEIF |  |
| field_extra_in_svd | ISR | TEIF%s | svd[3:+1] |
| register_missing_in_svd | MAR |  |  |
| register_missing_in_svd | NDTR |  |  |
| register_missing_in_svd | PAR |  |  |

### gpio/v2  (stm32f030c6 · GPIOA · stm32f0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | AFR |  |  |
| register_extra_in_svd | AFRH |  | svd offset 0x24 |
| register_extra_in_svd | AFRL |  | svd offset 0x20 |
| register_extra_in_svd | BRR |  | svd offset 0x28 |
| field_missing_in_svd | BSRR | BR |  |
| field_extra_in_svd | BSRR | BR%s | svd[16:+1] |
| field_missing_in_svd | BSRR | BS |  |
| field_extra_in_svd | BSRR | BS%s | svd[0:+1] |
| field_missing_in_svd | IDR | IDR |  |
| field_extra_in_svd | IDR | IDR%s | svd[0:+1] |
| field_missing_in_svd | LCKR | LCK |  |
| field_extra_in_svd | LCKR | LCK%s | svd[0:+1] |
| field_missing_in_svd | MODER | MODER |  |
| field_extra_in_svd | MODER | MODER%s | svd[0:+2] |
| field_missing_in_svd | ODR | ODR |  |
| field_extra_in_svd | ODR | ODR%s | svd[0:+1] |
| field_missing_in_svd | OSPEEDR | OSPEEDR |  |
| field_extra_in_svd | OSPEEDR | OSPEEDR%s | svd[0:+2] |
| field_missing_in_svd | OTYPER | OT |  |
| field_extra_in_svd | OTYPER | OT%s | svd[0:+1] |
| field_missing_in_svd | PUPDR | PUPDR |  |
| field_extra_in_svd | PUPDR | PUPDR%s | svd[0:+2] |

### i3c/v1  (stm32h503cb · I3C1 · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | DEVR |  |  |
| register_extra_in_svd | DEVR1 |  | svd offset 0x64 |
| register_extra_in_svd | DEVR2 |  | svd offset 0x68 |
| register_extra_in_svd | DEVR3 |  | svd offset 0x6C |
| register_extra_in_svd | DEVR4 |  | svd offset 0x70 |
| register_missing_in_svd | DR |  |  |
| register_missing_in_svd | DWR |  |  |
| field_missing_in_svd | IBIDR | IBIDB |  |
| field_extra_in_svd | IBIDR | IBIDB0 | svd[0:+8] |
| field_extra_in_svd | IBIDR | IBIDB1 | svd[8:+8] |
| field_extra_in_svd | IBIDR | IBIDB2 | svd[16:+8] |
| field_extra_in_svd | IBIDR | IBIDB3 | svd[24:+8] |
| field_missing_in_svd | MAXRLR | ML |  |
| field_extra_in_svd | MAXRLR | MRL | svd[0:+16] |
| field_missing_in_svd | MAXWLR | ML |  |
| field_extra_in_svd | MAXWLR | MWL | svd[0:+16] |
| register_extra_in_svd | RDR |  | svd offset 0x10 |
| register_extra_in_svd | RDWR |  | svd offset 0x14 |
| register_missing_in_svd | RxDataRegs |  |  |
| register_extra_in_svd | TDR |  | svd offset 0x18 |
| register_extra_in_svd | TDWR |  | svd offset 0x1C |
| register_missing_in_svd | TxDataRegs |  |  |

### lpdma/v1  (stm32u535cb · LPDMA1 · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | BR1 |  |  |
| register_missing_in_svd | BR2 |  |  |
| register_missing_in_svd | CH |  |  |
| register_missing_in_svd | CR |  |  |
| register_missing_in_svd | DAR |  |  |
| register_missing_in_svd | FCR |  |  |
| register_missing_in_svd | LBAR |  |  |
| register_missing_in_svd | LLR |  |  |
| field_missing_in_svd | MISR | MIS |  |
| field_extra_in_svd | MISR | MIS%s | svd[0:+1] |
| field_missing_in_svd | PRIVCFGR | PRIV |  |
| field_extra_in_svd | PRIVCFGR | PRIV%s | svd[0:+1] |
| register_missing_in_svd | RCFGLOCKR |  |  |
| register_missing_in_svd | SAR |  |  |
| field_missing_in_svd | SECCFGR | SEC |  |
| field_extra_in_svd | SECCFGR | SEC%s | svd[0:+1] |
| field_missing_in_svd | SMISR | MIS |  |
| field_extra_in_svd | SMISR | MIS%s | svd[0:+1] |
| register_missing_in_svd | SR |  |  |
| register_missing_in_svd | TR1 |  |  |
| register_missing_in_svd | TR2 |  |  |
| register_missing_in_svd | TR3 |  |  |

### ucpd/v1  (stm32g071c6 · UCPD1 · stm32g071.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CFGR1 | RXORDSETEN |  |
| field_extra_in_svd | CFGR1 | RXORDSETEN0 | svd[20:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN1 | svd[21:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN2 | svd[22:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN3 | svd[23:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN4 | svd[24:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN5 | svd[25:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN6 | svd[26:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN7 | svd[27:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN8 | svd[28:+1] |
| field_extra_in_svd | CFGR3 | TRIM1_NG_CC1A5 | svd[4:+5] |
| field_extra_in_svd | CFGR3 | TRIM1_NG_CC3A0 | svd[9:+4] |
| field_extra_in_svd | CFGR3 | TRIM1_NG_CCRPD | svd[0:+4] |
| field_extra_in_svd | CFGR3 | TRIM2_NG_CC1A5 | svd[20:+5] |
| field_extra_in_svd | CFGR3 | TRIM2_NG_CC3A0 | svd[25:+4] |
| field_extra_in_svd | CFGR3 | TRIM2_NG_CCRPD | svd[16:+4] |
| field_missing_in_svd | CFGR3 | TRIM_CC1_RD |  |
| field_missing_in_svd | CFGR3 | TRIM_CC1_RP |  |
| field_missing_in_svd | CFGR3 | TRIM_CC2_RD |  |
| field_missing_in_svd | CFGR3 | TRIM_CC2_RP |  |
| field_missing_in_svd | CR | CC1VCONNEN |  |
| field_missing_in_svd | CR | CC2VCONNEN |  |

### bdma/v1  (stm32f030c6 · DMA1 · stm32f0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | CH |  |  |
| register_missing_in_svd | CR |  |  |
| field_extra_in_svd | IFCR | CGIF%s | svd[0:+1] |
| field_extra_in_svd | IFCR | CHTIF%s | svd[2:+1] |
| field_extra_in_svd | IFCR | CTCIF%s | svd[1:+1] |
| field_extra_in_svd | IFCR | CTEIF%s | svd[3:+1] |
| field_missing_in_svd | IFCR | GIF |  |
| field_missing_in_svd | IFCR | HTIF |  |
| field_missing_in_svd | IFCR | TCIF |  |
| field_missing_in_svd | IFCR | TEIF |  |
| field_missing_in_svd | ISR | GIF |  |
| field_extra_in_svd | ISR | GIF%s | svd[0:+1] |
| field_missing_in_svd | ISR | HTIF |  |
| field_extra_in_svd | ISR | HTIF%s | svd[2:+1] |
| field_missing_in_svd | ISR | TCIF |  |
| field_extra_in_svd | ISR | TCIF%s | svd[1:+1] |
| field_missing_in_svd | ISR | TEIF |  |
| field_extra_in_svd | ISR | TEIF%s | svd[3:+1] |
| register_missing_in_svd | MAR |  |  |
| register_missing_in_svd | NDTR |  |  |
| register_missing_in_svd | PAR |  |  |

### hsem/v1  (stm32wb55cc · HSEM · stm32wb55.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | C1ICR |  | svd offset 0x104 |
| register_extra_in_svd | C1IER |  | svd offset 0x100 |
| register_extra_in_svd | C1ISR |  | svd offset 0x108 |
| register_extra_in_svd | C1MISR |  | svd offset 0x10C |
| register_extra_in_svd | C2ICR |  | svd offset 0x114 |
| register_extra_in_svd | C2IER |  | svd offset 0x110 |
| register_extra_in_svd | C2ISR |  | svd offset 0x118 |
| register_extra_in_svd | C2MISR |  | svd offset 0x11C |
| register_extra_in_svd | HWCFGR1 |  | svd offset 0x3F0 |
| register_extra_in_svd | HWCFGR2 |  | svd offset 0x3EC |
| register_missing_in_svd | ICR |  |  |
| register_missing_in_svd | IER |  |  |
| register_extra_in_svd | IPIDR |  | svd offset 0x3F8 |
| register_missing_in_svd | ISR |  |  |
| register_missing_in_svd | MISR |  |  |
| register_missing_in_svd | R |  |  |
| register_extra_in_svd | R%s |  | svd offset 0x0 |
| register_missing_in_svd | RLR |  |  |
| register_extra_in_svd | RLR%s |  | svd offset 0x80 |
| register_extra_in_svd | SIDR |  | svd offset 0x3FC |
| register_extra_in_svd | VERR |  | svd offset 0x3F4 |

### gpdma/v1  (stm32h503cb · GPDMA1 · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | BR1 |  |  |
| register_missing_in_svd | BR2 |  |  |
| register_missing_in_svd | CH |  |  |
| register_missing_in_svd | CR |  |  |
| register_missing_in_svd | DAR |  |  |
| register_missing_in_svd | FCR |  |  |
| register_missing_in_svd | LBAR |  |  |
| register_missing_in_svd | LLR |  |  |
| field_missing_in_svd | MISR | MIS |  |
| field_extra_in_svd | MISR | MIS%s | svd[0:+1] |
| field_missing_in_svd | PRIVCFGR | PRIV |  |
| field_extra_in_svd | PRIVCFGR | PRIV%s | svd[0:+1] |
| register_missing_in_svd | RCFGLOCKR |  |  |
| register_missing_in_svd | SAR |  |  |
| register_missing_in_svd | SECCFGR |  |  |
| register_missing_in_svd | SMISR |  |  |
| register_missing_in_svd | SR |  |  |
| register_missing_in_svd | TR1 |  |  |
| register_missing_in_svd | TR2 |  |  |
| register_missing_in_svd | TR3 |  |  |

### saes/v1b  (stm32u545ce · SAES · stm32u545.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | CR | CHMOD | ip[[{'start': 5, 'end': 6}, {'start': 16, 'end': 16}]:+3] svd[5:+2] |
| field_extra_in_svd | DINR | DIN | svd[0:+32] |
| field_extra_in_svd | DOUTR | DOUT | svd[0:+32] |
| register_extra_in_svd | DPACFGR |  | svd offset 0x100 |
| register_missing_in_svd | IVR |  |  |
| register_extra_in_svd | IVR0 |  | svd offset 0x20 |
| register_extra_in_svd | IVR1 |  | svd offset 0x24 |
| register_extra_in_svd | IVR2 |  | svd offset 0x28 |
| register_extra_in_svd | IVR3 |  | svd offset 0x2C |
| register_missing_in_svd | KEYR |  |  |
| register_extra_in_svd | KEYR0 |  | svd offset 0x10 |
| register_extra_in_svd | KEYR1 |  | svd offset 0x14 |
| register_extra_in_svd | KEYR2 |  | svd offset 0x18 |
| register_extra_in_svd | KEYR3 |  | svd offset 0x1C |
| register_extra_in_svd | KEYR4 |  | svd offset 0x30 |
| register_extra_in_svd | KEYR5 |  | svd offset 0x34 |
| register_extra_in_svd | KEYR6 |  | svd offset 0x38 |
| register_extra_in_svd | KEYR7 |  | svd offset 0x3C |
| field_layout_mismatch | SR | CCF | ip[1:+1] svd[0:+1] |
| register_missing_in_svd | SUSPR |  |  |

### afio/f1  (stm32f100c4 · AFIO · stm32f100.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x8 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0xC |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x10 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x14 |
| field_missing_in_svd | MAPR | ADC1_ETRGINJ_REMAP |  |
| field_missing_in_svd | MAPR | ADC1_ETRGREG_REMAP |  |
| field_missing_in_svd | MAPR | ADC2_ETRGINJ_REMAP |  |
| field_missing_in_svd | MAPR | ADC2_ETRGREG_REMAP |  |
| field_missing_in_svd | MAPR | CAN1_REMAP |  |
| field_missing_in_svd | MAPR | CAN2_REMAP |  |
| field_missing_in_svd | MAPR | ETH_REMAP |  |
| field_missing_in_svd | MAPR | MII_RMII_SEL |  |
| field_missing_in_svd | MAPR | PTP_PPS_REMAP |  |
| field_missing_in_svd | MAPR | SPI3_REMAP |  |
| field_missing_in_svd | MAPR | TIM2ITR1_IREMAP |  |
| field_missing_in_svd | MAPR2 | TIM10_REMAP |  |
| field_missing_in_svd | MAPR2 | TIM11_REMAP |  |
| field_missing_in_svd | MAPR2 | TIM9_REMAP |  |

### exti/g0  (stm32g030c6 · EXTI · stm32g030.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | EMR |  |  |
| register_extra_in_svd | EMR1 |  | svd offset 0x84 |
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x60 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0x64 |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x68 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x6C |
| register_missing_in_svd | FPR |  |  |
| register_extra_in_svd | FPR1 |  | svd offset 0x10 |
| register_missing_in_svd | FTSR |  |  |
| register_extra_in_svd | FTSR1 |  | svd offset 0x4 |
| register_missing_in_svd | IMR |  |  |
| register_extra_in_svd | IMR1 |  | svd offset 0x80 |
| register_missing_in_svd | RPR |  |  |
| register_extra_in_svd | RPR1 |  | svd offset 0xC |
| register_missing_in_svd | RTSR |  |  |
| register_extra_in_svd | RTSR1 |  | svd offset 0x0 |
| register_missing_in_svd | SWIER |  |  |
| register_extra_in_svd | SWIER1 |  | svd offset 0x8 |

### sdmmc/v1  (stm32f103rc · SDIO · stm32f103.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ARG |  | svd offset 0x8 |
| register_missing_in_svd | ARGR |  |  |
| register_extra_in_svd | CMD |  | svd offset 0xC |
| register_missing_in_svd | CMDR |  |  |
| register_missing_in_svd | DCNTR |  |  |
| register_extra_in_svd | DCOUNT |  | svd offset 0x30 |
| register_extra_in_svd | DLEN |  | svd offset 0x28 |
| register_missing_in_svd | DLENR |  |  |
| register_extra_in_svd | FIFO |  | svd offset 0x80 |
| register_missing_in_svd | FIFOR |  |  |
| field_extra_in_svd | ICR | CEATAENDC | svd[23:+1] |
| register_extra_in_svd | MASK |  | svd offset 0x3C |
| register_missing_in_svd | MASKR |  |  |
| register_extra_in_svd | RESP%s |  | svd offset 0x14 |
| register_extra_in_svd | RESPCMD |  | svd offset 0x10 |
| register_missing_in_svd | RESPCMDR |  |  |
| register_missing_in_svd | RESPR |  |  |
| register_extra_in_svd | STA |  | svd offset 0x34 |
| register_missing_in_svd | STAR |  |  |

### syscfg/l0  (stm32l010c6 · SYSCFG · stm32l0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CFGR1 | UFB |  |
| field_missing_in_svd | CFGR2 | I2C3_FMP |  |
| field_extra_in_svd | CFGR3 | ENBUF_BGAP_ADC | svd[8:+1] |
| field_missing_in_svd | CFGR3 | ENBUF_VREFINT_ADC |  |
| field_extra_in_svd | CFGR3 | ENBUF_VREFINT_COMP | svd[12:+1] |
| field_missing_in_svd | CFGR3 | ENBUF_VREFINT_COMP2 |  |
| field_missing_in_svd | CFGR3 | ENREF_HSI48 |  |
| field_extra_in_svd | CFGR3 | ENREF_RC48MHz | svd[13:+1] |
| field_extra_in_svd | CFGR3 | EN_BGAP | svd[0:+1] |
| field_missing_in_svd | CFGR3 | EN_VREFINT |  |
| field_extra_in_svd | CFGR3 | REF_RC48MHz_RDYF | svd[26:+1] |
| field_extra_in_svd | CFGR3 | SENSOR_ADC_RDYF | svd[27:+1] |
| field_extra_in_svd | CFGR3 | VREFINT_ADC_RDYF | svd[28:+1] |
| field_extra_in_svd | CFGR3 | VREFINT_COMP_RDYF | svd[29:+1] |
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x8 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0xC |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x10 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x14 |

### adc/f1  (stm32f100c4 · ADC1 · stm32f100.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR1 | DUALMOD |  |
| field_missing_in_svd | DR | ADC2DATA |  |
| register_missing_in_svd | JDR |  |  |
| register_extra_in_svd | JDR%s |  | svd offset 0x3C |
| register_missing_in_svd | JOFR |  |  |
| register_extra_in_svd | JOFR%s |  | svd offset 0x14 |
| field_missing_in_svd | JSQR | JSQ |  |
| field_extra_in_svd | JSQR | JSQ%s | svd[0:+5] |
| field_missing_in_svd | SMPR1 | SMP |  |
| field_extra_in_svd | SMPR1 | SMP%s | svd[0:+3] |
| field_missing_in_svd | SMPR2 | SMP |  |
| field_extra_in_svd | SMPR2 | SMP%s | svd[0:+3] |
| field_missing_in_svd | SQR1 | SQ |  |
| field_extra_in_svd | SQR1 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR2 | SQ |  |
| field_extra_in_svd | SQR2 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR3 | SQ |  |
| field_extra_in_svd | SQR3 | SQ%s | svd[0:+5] |

### adc/v2  (stm32f205rb · ADC1 · stm32f215.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | JDR |  |  |
| register_extra_in_svd | JDR%s |  | svd offset 0x3C |
| register_missing_in_svd | JOFR |  |  |
| register_extra_in_svd | JOFR%s |  | svd offset 0x14 |
| field_missing_in_svd | JSQR | JSQ |  |
| field_extra_in_svd | JSQR | JSQ%s | svd[0:+5] |
| field_missing_in_svd | SMPR1 | SMP |  |
| field_extra_in_svd | SMPR1 | SMP%s | svd[0:+3] |
| field_missing_in_svd | SMPR1 | SMPx_x |  |
| field_missing_in_svd | SMPR2 | SMP |  |
| field_extra_in_svd | SMPR2 | SMP%s | svd[0:+3] |
| field_missing_in_svd | SMPR2 | SMPx_x |  |
| field_missing_in_svd | SQR1 | SQ |  |
| field_extra_in_svd | SQR1 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR2 | SQ |  |
| field_extra_in_svd | SQR2 | SQ%s | svd[0:+5] |
| field_missing_in_svd | SQR3 | SQ |  |
| field_extra_in_svd | SQR3 | SQ%s | svd[0:+5] |

### adf/v1  (stm32u535cb · ADF1 · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | BSMX0CR |  | svd offset 0x84 |
| register_missing_in_svd | BSMXCR |  |  |
| register_extra_in_svd | DFLT0CICR |  | svd offset 0x8C |
| register_extra_in_svd | DFLT0CR |  | svd offset 0x88 |
| register_extra_in_svd | DFLT0DR |  | svd offset 0xF0 |
| register_extra_in_svd | DFLT0IER |  | svd offset 0xAC |
| register_extra_in_svd | DFLT0ISR |  | svd offset 0xB0 |
| register_extra_in_svd | DFLT0RSFR |  | svd offset 0x90 |
| register_missing_in_svd | DFLTCICR |  |  |
| register_missing_in_svd | DFLTCR |  |  |
| register_missing_in_svd | DFLTDR |  |  |
| register_missing_in_svd | DFLTIER |  |  |
| register_missing_in_svd | DFLTISR |  |  |
| register_missing_in_svd | DFLTRSFR |  |  |
| register_extra_in_svd | DLY0CR |  | svd offset 0xA4 |
| register_missing_in_svd | DLYCR |  |  |
| register_extra_in_svd | SITF0CR |  | svd offset 0x80 |
| register_missing_in_svd | SITFCR |  |  |

### cryp/v4  (stm32h7s3a8 · CRYP · stm32h7s.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | CR | ALGOMODE | svd[3:+3] |
| field_missing_in_svd | CR | ALGOMODE0 |  |
| field_missing_in_svd | CR | ALGOMODE3 |  |
| field_extra_in_svd | CR | ALGOMODE_1 | svd[19:+1] |
| register_extra_in_svd | CSGCM%sR |  | svd offset 0x70 |
| register_extra_in_svd | CSGCMCCM%sR |  | svd offset 0x50 |
| register_missing_in_svd | CSGCMCCMR |  |  |
| register_missing_in_svd | CSGCMR |  |  |
| register_missing_in_svd | DIN |  |  |
| register_extra_in_svd | DINR |  | svd offset 0x8 |
| register_missing_in_svd | DOUT |  |  |
| register_extra_in_svd | DOUTR |  | svd offset 0xC |
| register_missing_in_svd | INIT |  |  |
| register_missing_in_svd | IVLR |  |  |
| register_missing_in_svd | IVRR |  |  |
| register_missing_in_svd | KEY |  |  |
| register_missing_in_svd | KLR |  |  |
| register_missing_in_svd | KRR |  |  |

### dbgmcu/h7  (stm32h723ve · DBGMCU · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | APB1HFZ1 |  | svd offset 0x44 |
| register_extra_in_svd | APB1LFZ1 |  | svd offset 0x3C |
| register_missing_in_svd | APB1LFZR1 |  |  |
| register_extra_in_svd | APB2FZ1 |  | svd offset 0x4C |
| register_missing_in_svd | APB2FZR1 |  |  |
| register_extra_in_svd | APB3FZ1 |  | svd offset 0x34 |
| register_missing_in_svd | APB3FZR1 |  |  |
| register_extra_in_svd | APB4FZ1 |  | svd offset 0x54 |
| register_missing_in_svd | APB4FZR1 |  |  |
| register_extra_in_svd | CIDR0 |  | svd offset 0xFF0 |
| register_extra_in_svd | CIDR1 |  | svd offset 0xFF4 |
| register_extra_in_svd | CIDR2 |  | svd offset 0xFF8 |
| register_extra_in_svd | CIDR3 |  | svd offset 0xFFC |
| register_extra_in_svd | PIDR0 |  | svd offset 0xFE0 |
| register_extra_in_svd | PIDR1 |  | svd offset 0xFE4 |
| register_extra_in_svd | PIDR2 |  | svd offset 0xFE8 |
| register_extra_in_svd | PIDR3 |  | svd offset 0xFEC |
| register_extra_in_svd | PIDR4 |  | svd offset 0xFD0 |

### usb/v4  (stm32g0b0ce · USB · stm32g0b0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | BCDR | DPPU |  |
| field_extra_in_svd | BCDR | DPPU_DPD | svd[15:+1] |
| register_extra_in_svd | CHEP%sR |  | svd offset 0x0 |
| field_missing_in_svd | CNTR | FRES |  |
| field_missing_in_svd | CNTR | FSUSP |  |
| field_extra_in_svd | CNTR | L2RESUME | svd[4:+1] |
| field_missing_in_svd | CNTR | LPMODE |  |
| field_missing_in_svd | CNTR | RESETM |  |
| field_missing_in_svd | CNTR | RESUME |  |
| field_extra_in_svd | CNTR | RST_DCONM | svd[10:+1] |
| field_extra_in_svd | CNTR | SUSPEN | svd[3:+1] |
| field_extra_in_svd | CNTR | SUSPRDY | svd[2:+1] |
| field_extra_in_svd | CNTR | USBRST | svd[0:+1] |
| register_missing_in_svd | EPR |  |  |
| field_missing_in_svd | ISTR | EP_ID |  |
| field_extra_in_svd | ISTR | IDN | svd[0:+4] |
| field_missing_in_svd | ISTR | RESET |  |
| field_extra_in_svd | ISTR | RST_DCON | svd[10:+1] |

### exti/wle  (stm32wle5c8 · EXTI · stm32wle5.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | C1IMR1 |  | svd offset 0x80 |
| register_extra_in_svd | C1IMR2 |  | svd offset 0x90 |
| register_missing_in_svd | EMR |  |  |
| register_extra_in_svd | EMR1 |  | svd offset 0x84 |
| register_missing_in_svd | FTSR |  |  |
| register_extra_in_svd | FTSR1 |  | svd offset 0x4 |
| register_extra_in_svd | FTSR2 |  | svd offset 0x24 |
| register_missing_in_svd | IMR |  |  |
| register_missing_in_svd | PR |  |  |
| register_extra_in_svd | PR1 |  | svd offset 0xC |
| register_extra_in_svd | PR2 |  | svd offset 0x2C |
| register_missing_in_svd | RTSR |  |  |
| register_extra_in_svd | RTSR1 |  | svd offset 0x0 |
| register_extra_in_svd | RTSR2 |  | svd offset 0x20 |
| register_missing_in_svd | SWIER |  |  |
| register_extra_in_svd | SWIER1 |  | svd offset 0x8 |
| register_extra_in_svd | SWIER2 |  | svd offset 0x28 |

### ipcc/v1  (stm32wb55cc · IPCC · stm32wb55.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | C1CR |  | svd offset 0x0 |
| register_extra_in_svd | C1MR |  | svd offset 0x4 |
| register_extra_in_svd | C1SCR |  | svd offset 0x8 |
| register_extra_in_svd | C1TOC2SR |  | svd offset 0xC |
| register_extra_in_svd | C2CR |  | svd offset 0x10 |
| register_extra_in_svd | C2MR |  | svd offset 0x14 |
| register_extra_in_svd | C2SCR |  | svd offset 0x18 |
| register_extra_in_svd | C2TOC1SR |  | svd offset 0x1C |
| register_missing_in_svd | CPU |  |  |
| register_missing_in_svd | CR |  |  |
| register_extra_in_svd | HWCFGR |  | svd offset 0x3F0 |
| register_extra_in_svd | IPIDR |  | svd offset 0x3F8 |
| register_missing_in_svd | MR |  |  |
| register_missing_in_svd | SCR |  |  |
| register_extra_in_svd | SIDR |  | svd offset 0x3FC |
| register_missing_in_svd | SR |  |  |
| register_extra_in_svd | VERR |  | svd offset 0x3F4 |

### ramcfg/h5  (stm32h503cb · RAMCFG · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | M2WPR1 | P0WP | svd[0:+1] |
| field_extra_in_svd | M2WPR1 | P10WP | svd[10:+1] |
| field_extra_in_svd | M2WPR1 | P11WP | svd[11:+1] |
| field_extra_in_svd | M2WPR1 | P12WP | svd[12:+1] |
| field_extra_in_svd | M2WPR1 | P13WP | svd[13:+1] |
| field_extra_in_svd | M2WPR1 | P14WP | svd[14:+1] |
| field_extra_in_svd | M2WPR1 | P15WP | svd[15:+1] |
| field_extra_in_svd | M2WPR1 | P1WP | svd[1:+1] |
| field_extra_in_svd | M2WPR1 | P2WP | svd[2:+1] |
| field_extra_in_svd | M2WPR1 | P3WP | svd[3:+1] |
| field_extra_in_svd | M2WPR1 | P4WP | svd[4:+1] |
| field_extra_in_svd | M2WPR1 | P5WP | svd[5:+1] |
| field_extra_in_svd | M2WPR1 | P6WP | svd[6:+1] |
| field_extra_in_svd | M2WPR1 | P7WP | svd[7:+1] |
| field_extra_in_svd | M2WPR1 | P8WP | svd[8:+1] |
| field_extra_in_svd | M2WPR1 | P9WP | svd[9:+1] |
| field_missing_in_svd | M2WPR1 | PWP |  |

### syscfg/h7  (stm32h723ve · SYSCFG · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | ADC2ALT |  | svd offset 0x30 |
| field_missing_in_svd | CCCSR | RDY |  |
| field_extra_in_svd | CCCSR | READY | svd[8:+1] |
| register_extra_in_svd | CFGR |  | svd offset 0x18 |
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x8 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0xC |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x10 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x14 |
| field_extra_in_svd | PMCR | EPIS | svd[21:+3] |
| field_missing_in_svd | PMCR | ETH_SEL_PHY |  |
| field_extra_in_svd | PMCR | I2C5FMP | svd[10:+1] |
| field_missing_in_svd | UR0 | BKS |  |
| register_missing_in_svd | UR10 |  |  |
| field_missing_in_svd | UR11 | SA_END_2 |  |
| register_missing_in_svd | UR8 |  |  |
| register_missing_in_svd | UR9 |  |  |

### mdma/v1  (stm32h723ve · MDMA · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | BNDTR |  |  |
| register_missing_in_svd | BRUR |  |  |
| register_missing_in_svd | CH |  |  |
| register_missing_in_svd | CR |  |  |
| register_missing_in_svd | DAR |  |  |
| register_missing_in_svd | ESR |  |  |
| field_missing_in_svd | GISR0 | GIF |  |
| field_extra_in_svd | GISR0 | GIF%s | svd[0:+1] |
| register_missing_in_svd | IFCR |  |  |
| register_missing_in_svd | ISR |  |  |
| register_missing_in_svd | LAR |  |  |
| register_missing_in_svd | MAR |  |  |
| register_missing_in_svd | MDR |  |  |
| register_missing_in_svd | SAR |  |  |
| register_missing_in_svd | TBR |  |  |
| register_missing_in_svd | TCR |  |  |

### syscfg/f0  (stm32f030c6 · SYSCFG · stm32f0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CFGR1 | I2C1_DMA_RMP |  |
| field_missing_in_svd | CFGR1 | I2C2_FMP |  |
| field_missing_in_svd | CFGR1 | IR_MOD |  |
| field_missing_in_svd | CFGR1 | SPI2_DMA_RMP |  |
| field_missing_in_svd | CFGR1 | TIM16_DMA_RMP2 |  |
| field_missing_in_svd | CFGR1 | TIM17_DMA_RMP2 |  |
| field_missing_in_svd | CFGR1 | TIM1_DMA_RMP |  |
| field_missing_in_svd | CFGR1 | TIM2_DMA_RMP |  |
| field_missing_in_svd | CFGR1 | TIM3_DMA_RMP |  |
| field_missing_in_svd | CFGR1 | USART2_DMA_RMP |  |
| field_missing_in_svd | CFGR2 | PVD_LOCK |  |
| register_missing_in_svd | EXTICR |  |  |
| register_extra_in_svd | EXTICR1 |  | svd offset 0x8 |
| register_extra_in_svd | EXTICR2 |  | svd offset 0xC |
| register_extra_in_svd | EXTICR3 |  | svd offset 0x10 |
| register_extra_in_svd | EXTICR4 |  | svd offset 0x14 |

### flash/l0  (stm32l010c6 · FLASH · stm32l0x0.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | OPTKEYR | OPTKEYR | svd[0:+32] |
| field_extra_in_svd | OPTR | BFB2 | svd[23:+1] |
| field_extra_in_svd | OPTR | WDG_SW | svd[20:+1] |
| field_extra_in_svd | OPTR | nBOOT1 | svd[31:+1] |
| field_extra_in_svd | OPTR | nRST_STDBY | svd[22:+1] |
| field_extra_in_svd | OPTR | nRST_STOP | svd[21:+1] |
| field_extra_in_svd | PDKEYR | PDKEYR | svd[0:+32] |
| field_extra_in_svd | PECR | NZDISABLE | svd[23:+1] |
| field_extra_in_svd | PEKEYR | PEKEYR | svd[0:+32] |
| field_extra_in_svd | PRGKEYR | PRGKEYR | svd[0:+32] |
| field_layout_mismatch | SR | RDERR | ip[14:+1] svd[13:+1] |
| register_missing_in_svd | WRPROT |  |  |
| register_extra_in_svd | WRPROT1 |  | svd offset 0x20 |
| field_missing_in_svd | WRPROT2 | WRPROT |  |
| field_extra_in_svd | WRPROT2 | WRPROT2 | svd[0:+16] |

### flash/l5  (stm32l552cc · FLASH · stm32l552.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | LVEKEYR | LVEKEYR | svd[0:+32] |
| field_extra_in_svd | NSKEYR | NSKEYR | svd[0:+32] |
| field_extra_in_svd | OPTKEYR | OPTKEYR | svd[0:+32] |
| field_extra_in_svd | PDKEYR | PDKEYR | svd[0:+32] |
| register_extra_in_svd | SECBB1R%s |  | svd offset 0x80 |
| register_missing_in_svd | SECBB1R1 |  |  |
| register_missing_in_svd | SECBB1R2 |  |  |
| register_missing_in_svd | SECBB1R3 |  |  |
| register_missing_in_svd | SECBB1R4 |  |  |
| register_extra_in_svd | SECBB2R%s |  | svd offset 0xA0 |
| register_missing_in_svd | SECBB2R1 |  |  |
| register_missing_in_svd | SECBB2R2 |  |  |
| register_missing_in_svd | SECBB2R3 |  |  |
| register_missing_in_svd | SECBB2R4 |  |  |
| field_extra_in_svd | SECKEYR | SECKEYR | svd[0:+32] |

### gpio/v1  (stm32f100c4 · GPIOA · stm32f100.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | BRR | BR |  |
| field_extra_in_svd | BRR | BR%s | svd[0:+1] |
| field_missing_in_svd | BSRR | BR |  |
| field_extra_in_svd | BSRR | BR%s | svd[16:+1] |
| field_missing_in_svd | BSRR | BS |  |
| field_extra_in_svd | BSRR | BS%s | svd[0:+1] |
| register_missing_in_svd | CR |  |  |
| register_extra_in_svd | CRH |  | svd offset 0x4 |
| register_extra_in_svd | CRL |  | svd offset 0x0 |
| field_missing_in_svd | IDR | IDR |  |
| field_extra_in_svd | IDR | IDR%s | svd[0:+1] |
| field_missing_in_svd | LCKR | LCK |  |
| field_extra_in_svd | LCKR | LCK%s | svd[0:+1] |
| field_missing_in_svd | ODR | ODR |  |
| field_extra_in_svd | ODR | ODR%s | svd[0:+1] |

### lptim/v2a  (stm32h503cb · LPTIM1 · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | CCMR |  |  |
| register_extra_in_svd | CCMR1 |  | svd offset 0x2C |
| register_missing_in_svd | CCR |  |  |
| register_extra_in_svd | CCR1 |  | svd offset 0x14 |
| register_extra_in_svd | CCR2 |  | svd offset 0x34 |
| register_missing_in_svd | CFGR2 |  |  |
| register_missing_in_svd | DIER |  |  |
| register_extra_in_svd | DIER_intput |  | svd offset 0x8 |
| register_extra_in_svd | DIER_output |  | svd offset 0x8 |
| register_missing_in_svd | ICR |  |  |
| register_extra_in_svd | ICR_intput |  | svd offset 0x4 |
| register_extra_in_svd | ICR_output |  | svd offset 0x4 |
| register_missing_in_svd | ISR |  |  |
| register_extra_in_svd | ISR_intput |  | svd offset 0x0 |
| register_extra_in_svd | ISR_output |  | svd offset 0x0 |

### sai/v1_4pdm  (stm32wb55cc · SAI1 · stm32wb55.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | CH |  |  |
| register_missing_in_svd | CLRFR |  |  |
| register_missing_in_svd | CR1 |  |  |
| register_missing_in_svd | CR2 |  |  |
| register_missing_in_svd | DR |  |  |
| register_missing_in_svd | FRCR |  |  |
| register_missing_in_svd | IM |  |  |
| field_missing_in_svd | PDMCR | CKEN |  |
| field_extra_in_svd | PDMCR | CKEN%s | svd[8:+1] |
| field_extra_in_svd | PDMDLY | DLYM%sL | svd[0:+3] |
| field_extra_in_svd | PDMDLY | DLYM%sR | svd[4:+3] |
| field_missing_in_svd | PDMDLY | DLYML |  |
| field_missing_in_svd | PDMDLY | DLYMR |  |
| register_missing_in_svd | SLOTR |  |  |
| register_missing_in_svd | SR |  |  |

### sai/v3_2pdm  (stm32l552cc · SAI1 · stm32l552.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | CH |  |  |
| register_missing_in_svd | CLRFR |  |  |
| register_missing_in_svd | CR1 |  |  |
| register_missing_in_svd | CR2 |  |  |
| register_missing_in_svd | DR |  |  |
| register_missing_in_svd | FRCR |  |  |
| register_missing_in_svd | IM |  |  |
| field_missing_in_svd | PDMCR | CKEN |  |
| field_extra_in_svd | PDMCR | CKEN%s | svd[8:+1] |
| field_extra_in_svd | PDMDLY | DLYM%sL | svd[0:+3] |
| field_extra_in_svd | PDMDLY | DLYM%sR | svd[4:+3] |
| field_missing_in_svd | PDMDLY | DLYML |  |
| field_missing_in_svd | PDMDLY | DLYMR |  |
| register_missing_in_svd | SLOTR |  |  |
| register_missing_in_svd | SR |  |  |

### sai/v3_4pdm  (stm32h743ag · SAI1 · stm32h743.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | CH |  |  |
| register_missing_in_svd | CLRFR |  |  |
| register_missing_in_svd | CR1 |  |  |
| register_missing_in_svd | CR2 |  |  |
| register_missing_in_svd | DR |  |  |
| register_missing_in_svd | FRCR |  |  |
| register_missing_in_svd | IM |  |  |
| field_missing_in_svd | PDMCR | CKEN |  |
| field_extra_in_svd | PDMCR | CKEN%s | svd[8:+1] |
| field_extra_in_svd | PDMDLY | DLYM%sL | svd[0:+3] |
| field_extra_in_svd | PDMDLY | DLYM%sR | svd[4:+3] |
| field_missing_in_svd | PDMDLY | DLYML |  |
| field_missing_in_svd | PDMDLY | DLYMR |  |
| register_missing_in_svd | SLOTR |  |  |
| register_missing_in_svd | SR |  |  |

### sai/v4_4pdm  (stm32h723ve · SAI1 · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | CH |  |  |
| register_missing_in_svd | CLRFR |  |  |
| register_missing_in_svd | CR1 |  |  |
| register_missing_in_svd | CR2 |  |  |
| register_missing_in_svd | DR |  |  |
| register_missing_in_svd | FRCR |  |  |
| register_missing_in_svd | IM |  |  |
| field_missing_in_svd | PDMCR | CKEN |  |
| field_extra_in_svd | PDMCR | CKEN%s | svd[8:+1] |
| field_extra_in_svd | PDMDLY | DLYM%sL | svd[0:+3] |
| field_extra_in_svd | PDMDLY | DLYM%sR | svd[4:+3] |
| field_missing_in_svd | PDMDLY | DLYML |  |
| field_missing_in_svd | PDMDLY | DLYMR |  |
| register_missing_in_svd | SLOTR |  |  |
| register_missing_in_svd | SR |  |  |

### dbgmcu/l5  (stm32l552cc · DBGMCU · stm32l552.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | APB1FZR1 |  |  |
| register_missing_in_svd | APB1FZR2 |  |  |
| register_extra_in_svd | APB1HFZR |  | svd offset 0xC |
| register_extra_in_svd | APB1LFZR |  | svd offset 0x8 |
| field_extra_in_svd | APB2FZR | DBG_TIM15_STOP | svd[16:+1] |
| field_extra_in_svd | APB2FZR | DBG_TIM16_STOP | svd[17:+1] |
| field_extra_in_svd | APB2FZR | DBG_TIM17_STOP | svd[18:+1] |
| field_extra_in_svd | APB2FZR | DBG_TIM1_STOP | svd[11:+1] |
| field_extra_in_svd | APB2FZR | DBG_TIM8_STOP | svd[13:+1] |
| field_missing_in_svd | APB2FZR | TIM1 |  |
| field_missing_in_svd | APB2FZR | TIM15 |  |
| field_missing_in_svd | APB2FZR | TIM16 |  |
| field_missing_in_svd | APB2FZR | TIM17 |  |
| field_missing_in_svd | APB2FZR | TIM8 |  |

### flash/l4  (stm32l412c8 · FLASH · stm32l412.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR | MER |  |
| field_extra_in_svd | CR | MER1 | svd[2:+1] |
| field_extra_in_svd | CR | MER2 | svd[15:+1] |
| field_extra_in_svd | KEYR | KEYR | svd[0:+32] |
| field_extra_in_svd | OPTKEYR | OPTKEYR | svd[0:+32] |
| field_missing_in_svd | OPTR | BFB |  |
| field_missing_in_svd | OPTR | DUALBANK |  |
| field_missing_in_svd | OPTR | IDWG_SW |  |
| field_extra_in_svd | OPTR | IWDG_SW | svd[16:+1] |
| register_missing_in_svd | PCROP2ER |  |  |
| register_missing_in_svd | PCROP2SR |  |  |
| field_extra_in_svd | PDKEYR | PDKEYR | svd[0:+32] |
| register_missing_in_svd | WRP2AR |  |  |
| register_missing_in_svd | WRP2BR |  |  |

### hsem/v2  (stm32h735ag · HSEM · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR | COREID |  |
| field_extra_in_svd | CR | MASTERID | svd[8:+4] |
| field_missing_in_svd | ICR | ISC |  |
| field_extra_in_svd | ICR | ISC%s | svd[0:+1] |
| field_missing_in_svd | IER | ISE |  |
| field_extra_in_svd | IER | ISE%s | svd[0:+1] |
| field_missing_in_svd | ISR | ISF |  |
| field_extra_in_svd | ISR | ISF%s | svd[0:+1] |
| field_missing_in_svd | MISR | MISF |  |
| field_extra_in_svd | MISR | MISF%s | svd[0:+1] |
| register_missing_in_svd | R |  |  |
| register_extra_in_svd | R%s |  | svd offset 0x0 |
| register_missing_in_svd | RLR |  |  |
| register_extra_in_svd | RLR%s |  | svd offset 0x80 |

### hsem/v4  (stm32wle5c8 · HSEM · stm32wle5.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR | COREID |  |
| field_extra_in_svd | CR | MASTERID | svd[8:+4] |
| field_missing_in_svd | ICR | ISC |  |
| field_extra_in_svd | ICR | ISC%s | svd[0:+1] |
| field_missing_in_svd | IER | ISE |  |
| field_extra_in_svd | IER | ISE%s | svd[0:+1] |
| field_missing_in_svd | ISR | ISF |  |
| field_extra_in_svd | ISR | ISF%s | svd[0:+1] |
| field_missing_in_svd | MISR | MISF |  |
| field_extra_in_svd | MISR | MISF%s | svd[0:+1] |
| register_missing_in_svd | R |  |  |
| register_extra_in_svd | R%s |  | svd offset 0x0 |
| register_missing_in_svd | RLR |  |  |
| register_extra_in_svd | RLR%s |  | svd offset 0x80 |

### rcc/wb0  (stm32wb05kz · RCC · stm32wb05.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | APB0ENR | TIM1EN |  |
| field_missing_in_svd | APB0RSTR | WDGRST |  |
| field_missing_in_svd | APB1ENR | I2C2EN |  |
| field_missing_in_svd | APB1ENR | SPI1EN |  |
| field_missing_in_svd | APB1ENR | SPI2EN |  |
| field_missing_in_svd | APB1RSTR | ADCRST |  |
| field_missing_in_svd | APB1RSTR | I2C1RST |  |
| field_missing_in_svd | APB1RSTR | I2C2RST |  |
| field_missing_in_svd | APB1RSTR | SPI1RST |  |
| field_missing_in_svd | APB1RSTR | SPI2RST |  |
| field_extra_in_svd | APB2RSTR | BLERST | svd[0:+1] |
| field_missing_in_svd | APB2RSTR | MRBLERST |  |
| field_missing_in_svd | CFGR | SPI2I2SCLKSEL |  |
| register_missing_in_svd | CSSWCR |  |  |

### dma/v1  (stm32h723ve · DMA1 · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | CR |  |  |
| register_missing_in_svd | FCR |  |  |
| register_extra_in_svd | HIFCR |  | svd offset 0xC |
| register_extra_in_svd | HISR |  | svd offset 0x4 |
| register_missing_in_svd | IFCR |  |  |
| register_missing_in_svd | ISR |  |  |
| register_extra_in_svd | LIFCR |  | svd offset 0x8 |
| register_extra_in_svd | LISR |  | svd offset 0x0 |
| register_missing_in_svd | M0AR |  |  |
| register_missing_in_svd | M1AR |  |  |
| register_missing_in_svd | NDTR |  |  |
| register_missing_in_svd | PAR |  |  |
| register_missing_in_svd | ST |  |  |

### dma/v2  (stm32f205rb · DMA1 · stm32f215.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | CR |  |  |
| register_missing_in_svd | FCR |  |  |
| register_extra_in_svd | HIFCR |  | svd offset 0xC |
| register_extra_in_svd | HISR |  | svd offset 0x4 |
| register_missing_in_svd | IFCR |  |  |
| register_missing_in_svd | ISR |  |  |
| register_extra_in_svd | LIFCR |  | svd offset 0x8 |
| register_extra_in_svd | LISR |  | svd offset 0x0 |
| register_missing_in_svd | M0AR |  |  |
| register_missing_in_svd | M1AR |  |  |
| register_missing_in_svd | NDTR |  |  |
| register_missing_in_svd | PAR |  |  |
| register_missing_in_svd | ST |  |  |

### ltdc/v1  (stm32f429ag · LTDC · stm32f429.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | BFCR |  |  |
| register_missing_in_svd | CACR |  |  |
| register_missing_in_svd | CFBAR |  |  |
| register_missing_in_svd | CFBLNR |  |  |
| register_missing_in_svd | CFBLR |  |  |
| register_missing_in_svd | CKCR |  |  |
| register_missing_in_svd | CLUTWR |  |  |
| register_missing_in_svd | CR |  |  |
| register_missing_in_svd | DCCR |  |  |
| register_missing_in_svd | LAYER |  |  |
| register_missing_in_svd | PFCR |  |  |
| register_missing_in_svd | WHPCR |  |  |
| register_missing_in_svd | WVPCR |  |  |

### sdmmc/v2  (stm32h562ag · SDMMC1 · stm32h562.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | FIFOR |  |  |
| register_extra_in_svd | FIFOR%s |  | svd offset 0x80 |
| register_missing_in_svd | ID |  |  |
| register_extra_in_svd | IDMABAR |  | svd offset 0x68 |
| register_missing_in_svd | IDMABASE0R |  |  |
| register_missing_in_svd | IDMABASE1R |  |  |
| register_extra_in_svd | IDMABASER |  | svd offset 0x58 |
| field_layout_mismatch | IDMABSIZER | IDMABNDT | ip[5:+8] svd[5:+12] |
| field_missing_in_svd | IDMACTRLR | IDMABACT |  |
| register_extra_in_svd | IDMALAR |  | svd offset 0x64 |
| register_extra_in_svd | RESP%sR |  | svd offset 0x14 |
| register_missing_in_svd | RESPR |  |  |
| register_missing_in_svd | VER |  |  |

### comp/h7_a  (stm32h7a3ag · COMP1 · stm32h7b3.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | CFGR1 | INMSEL | ip[16:+4] svd[16:+3] |
| field_layout_mismatch | CFGR2 | INMSEL | ip[16:+4] svd[16:+3] |
| field_extra_in_svd | ICFR | CC1IF | svd[16:+1] |
| field_extra_in_svd | ICFR | CC2IF | svd[17:+1] |
| field_missing_in_svd | ICFR | CCIF |  |
| field_extra_in_svd | OR | OR | svd[11:+21] |
| field_extra_in_svd | SR | C1IF | svd[16:+1] |
| field_extra_in_svd | SR | C1VAL | svd[0:+1] |
| field_extra_in_svd | SR | C2IF | svd[17:+1] |
| field_extra_in_svd | SR | C2VAL | svd[1:+1] |
| field_missing_in_svd | SR | CIF |  |
| field_missing_in_svd | SR | CVAL |  |

### cryp/v2  (stm32f437ai · CRYP · stm32f427.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | CSGCM%sR |  | svd offset 0x70 |
| register_extra_in_svd | CSGCMCCM%sR |  | svd offset 0x50 |
| register_missing_in_svd | CSGCMCCMR |  |  |
| register_missing_in_svd | CSGCMR |  |  |
| field_extra_in_svd | DIN | DATAIN | svd[0:+32] |
| field_extra_in_svd | DOUT | DATAOUT | svd[0:+32] |
| register_missing_in_svd | INIT |  |  |
| register_missing_in_svd | IVLR |  |  |
| register_missing_in_svd | IVRR |  |  |
| register_missing_in_svd | KEY |  |  |
| register_missing_in_svd | KLR |  |  |
| register_missing_in_svd | KRR |  |  |

### dmamux/v1  (stm32h723ve · DMAMUX1 · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_extra_in_svd | C%sCR |  | svd offset 0x0 |
| register_missing_in_svd | CCR |  |  |
| field_extra_in_svd | CFR | CSOF%s | svd[0:+1] |
| field_missing_in_svd | CFR | SOF |  |
| field_missing_in_svd | CSR | SOF |  |
| field_extra_in_svd | CSR | SOF%s | svd[0:+1] |
| register_extra_in_svd | RG%sCR |  | svd offset 0x100 |
| field_extra_in_svd | RGCFR | COF%s | svd[0:+1] |
| field_missing_in_svd | RGCFR | OF |  |
| register_missing_in_svd | RGCR |  |  |
| field_missing_in_svd | RGSR | OF |  |
| field_extra_in_svd | RGSR | OF%s | svd[0:+1] |

### flash/h50  (stm32h503cb · FLASH · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | NSKEYR | NSKEY | svd[0:+32] |
| field_extra_in_svd | OPTKEYR | OPTKEY | svd[0:+32] |
| field_missing_in_svd | PRIVBB1R | PRIVBB |  |
| field_extra_in_svd | PRIVBB1R | PRIVBB1 | svd[0:+8] |
| field_missing_in_svd | WRPSGN1R_CUR | WRPSG |  |
| field_extra_in_svd | WRPSGN1R_CUR | WRPSG1 | svd[0:+8] |
| field_missing_in_svd | WRPSGN1R_PRG | WRPSG |  |
| field_extra_in_svd | WRPSGN1R_PRG | WRPSG1 | svd[0:+8] |
| field_missing_in_svd | WRPSGN2R_CUR | WRPSG |  |
| field_extra_in_svd | WRPSGN2R_CUR | WRPSG2 | svd[0:+8] |
| field_missing_in_svd | WRPSGN2R_PRG | WRPSG |  |
| field_extra_in_svd | WRPSGN2R_PRG | WRPSG2 | svd[0:+8] |

### fmc/v3x1  (stm32h723ve · FMC · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | BCR |  |  |
| register_extra_in_svd | BCR%s |  | svd offset 0x8 |
| register_missing_in_svd | BTR |  |  |
| register_extra_in_svd | BTR%s |  | svd offset 0x4 |
| register_missing_in_svd | BWTR |  |  |
| register_extra_in_svd | BWTR%s |  | svd offset 0x104 |
| field_layout_mismatch | SDCMR | MRD | ip[9:+13] svd[9:+14] |
| register_missing_in_svd | SDCR |  |  |
| register_extra_in_svd | SDCR1 |  | svd offset 0x140 |
| register_extra_in_svd | SDCR2 |  | svd offset 0x144 |
| register_missing_in_svd | SDTR |  |  |
| register_extra_in_svd | SDTR%s |  | svd offset 0x148 |

### lcd/v2  (stm32l053c6 · LCD · stm32l0x3.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR | BUFEN |  |
| register_missing_in_svd | HIGH |  |  |
| register_missing_in_svd | LOW |  |  |
| register_missing_in_svd | RAM_COM |  |  |
| register_extra_in_svd | RAM_COM0 |  | svd offset 0x14 |
| register_extra_in_svd | RAM_COM1 |  | svd offset 0x1C |
| register_extra_in_svd | RAM_COM2 |  | svd offset 0x24 |
| register_extra_in_svd | RAM_COM3 |  | svd offset 0x2C |
| register_extra_in_svd | RAM_COM4 |  | svd offset 0x34 |
| register_extra_in_svd | RAM_COM5 |  | svd offset 0x3C |
| register_extra_in_svd | RAM_COM6 |  | svd offset 0x44 |
| register_extra_in_svd | RAM_COM7 |  | svd offset 0x4C |

### dma2d/v1  (stm32f427ag · DMA2D · stm32f427.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | BGCLUT |  |  |
| field_extra_in_svd | BGPFCCR | AI | svd[20:+1] |
| field_extra_in_svd | BGPFCCR | RBS | svd[21:+1] |
| register_missing_in_svd | FGCLUT |  |  |
| field_extra_in_svd | FGPFCCR | AI | svd[20:+1] |
| field_extra_in_svd | FGPFCCR | CSS | svd[18:+2] |
| field_extra_in_svd | FGPFCCR | RBS | svd[21:+1] |
| field_extra_in_svd | OCOLR | ALPHA | svd[24:+8] |
| field_missing_in_svd | OCOLR | APLHA |  |
| field_extra_in_svd | OPFCCR | AI | svd[20:+1] |
| field_extra_in_svd | OPFCCR | RBS | svd[21:+1] |

### flash/g0x0  (stm32g030c6 · FLASH · stm32g030.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR | MER |  |
| field_extra_in_svd | CR | MER1 | svd[2:+1] |
| field_extra_in_svd | KEYR | KEY | svd[0:+32] |
| field_extra_in_svd | OPTKEYR | OPTKEY | svd[0:+32] |
| field_missing_in_svd | OPTR | IDWG_SW |  |
| field_extra_in_svd | OPTR | IWDG_SW | svd[16:+1] |
| field_extra_in_svd | OPTR | nSWAP_BANK | svd[20:+1] |
| field_missing_in_svd | SR | BSY |  |
| field_extra_in_svd | SR | BSY1 | svd[16:+1] |
| field_missing_in_svd | SR | MISERR |  |
| field_extra_in_svd | SR | MISSERR | svd[8:+1] |

### lcd/v1  (stm32l100c6-a · LCD · stm32l100.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| register_missing_in_svd | HIGH |  |  |
| register_missing_in_svd | LOW |  |  |
| register_missing_in_svd | RAM_COM |  |  |
| register_extra_in_svd | RAM_COM0 |  | svd offset 0x14 |
| register_extra_in_svd | RAM_COM1 |  | svd offset 0x1C |
| register_extra_in_svd | RAM_COM2 |  | svd offset 0x24 |
| register_extra_in_svd | RAM_COM3 |  | svd offset 0x2C |
| register_extra_in_svd | RAM_COM4 |  | svd offset 0x34 |
| register_extra_in_svd | RAM_COM5 |  | svd offset 0x3C |
| register_extra_in_svd | RAM_COM6 |  | svd offset 0x44 |
| register_extra_in_svd | RAM_COM7 |  | svd offset 0x4C |

### spi/v2_i2s  (stm32f205rb · SPI1 · stm32f215.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CR1 | CRCL |  |
| field_missing_in_svd | CR2 | DS |  |
| field_missing_in_svd | CR2 | FRXTH |  |
| field_missing_in_svd | CR2 | LDMA_RX |  |
| field_missing_in_svd | CR2 | LDMA_TX |  |
| field_missing_in_svd | CR2 | NSSP |  |
| register_extra_in_svd | DR8 |  | svd offset 0xC |
| field_missing_in_svd | SR | FRE |  |
| field_missing_in_svd | SR | FRLVL |  |
| field_missing_in_svd | SR | FTLVL |  |
| field_extra_in_svd | SR | TIFRFE | svd[8:+1] |

### spi/v5_i2s  (stm32h503cb · SPI1 · stm32h503.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | CFG1 | UDRCFG | ip[9:+2] svd[9:+1] |
| field_missing_in_svd | CFG2 | LSBFIRST |  |
| field_extra_in_svd | CFG2 | LSBFRST | svd[23:+1] |
| register_extra_in_svd | RXDR |  | svd offset 0x30 |
| field_extra_in_svd | RXDR16 | RXDR | svd[0:+16] |
| register_missing_in_svd | RXDR32 |  |  |
| field_extra_in_svd | RXDR8 | RXDR | svd[0:+8] |
| register_extra_in_svd | TXDR |  | svd offset 0x20 |
| field_extra_in_svd | TXDR16 | TXDR | svd[0:+16] |
| register_missing_in_svd | TXDR32 |  |  |
| field_extra_in_svd | TXDR8 | TXDR | svd[0:+8] |

### spi/v6  (stm32u535cb · SPI1 · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | CFG1 | UDRCFG | ip[9:+2] svd[9:+1] |
| field_missing_in_svd | CFG2 | LSBFIRST |  |
| field_extra_in_svd | CFG2 | LSBFRST | svd[23:+1] |
| register_extra_in_svd | RXDR |  | svd offset 0x30 |
| field_extra_in_svd | RXDR16 | RXDR | svd[0:+16] |
| register_missing_in_svd | RXDR32 |  |  |
| field_extra_in_svd | RXDR8 | RXDR | svd[0:+8] |
| register_extra_in_svd | TXDR |  | svd offset 0x20 |
| field_extra_in_svd | TXDR16 | TXDR | svd[0:+16] |
| register_missing_in_svd | TXDR32 |  |  |
| field_extra_in_svd | TXDR8 | TXDR | svd[0:+8] |

### syscfg/u5  (stm32u535cb · SYSCFG · stm32u535.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | CCCR | NCC3 | svd[16:+4] |
| field_extra_in_svd | CCCR | PCC3 | svd[20:+4] |
| field_extra_in_svd | CCCSR | CS3 | svd[5:+1] |
| field_extra_in_svd | CCCSR | EN3 | svd[4:+1] |
| field_extra_in_svd | CCCSR | RDY3 | svd[10:+1] |
| field_extra_in_svd | CCVR | NCV3 | svd[16:+4] |
| field_extra_in_svd | CCVR | PCV3 | svd[20:+4] |
| field_extra_in_svd | CFGR1 | ENDCAP | svd[24:+2] |
| register_missing_in_svd | OTGHSPHYCR |  |  |
| register_missing_in_svd | OTGHSPHYTUNER2 |  |  |
| register_missing_in_svd | UCPDR |  |  |

### ucpd/h5  (stm32h562ag · UCPD1 · stm32h562.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_missing_in_svd | CFGR1 | RXORDSETEN |  |
| field_extra_in_svd | CFGR1 | RXORDSETEN0 | svd[20:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN1 | svd[21:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN2 | svd[22:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN3 | svd[23:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN4 | svd[24:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN5 | svd[25:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN6 | svd[26:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN7 | svd[27:+1] |
| field_extra_in_svd | CFGR1 | RXORDSETEN8 | svd[28:+1] |
| register_missing_in_svd | CFGR3 |  |  |

### comp/h7_b  (stm32h723ve · COMP1 · stm32h735.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_extra_in_svd | ICFR | CC1IF | svd[16:+1] |
| field_extra_in_svd | ICFR | CC2IF | svd[17:+1] |
| field_missing_in_svd | ICFR | CCIF |  |
| field_extra_in_svd | OR | OR | svd[11:+21] |
| field_extra_in_svd | SR | C1IF | svd[16:+1] |
| field_extra_in_svd | SR | C1VAL | svd[0:+1] |
| field_extra_in_svd | SR | C2IF | svd[17:+1] |
| field_extra_in_svd | SR | C2VAL | svd[1:+1] |
| field_missing_in_svd | SR | CIF |  |
| field_missing_in_svd | SR | CVAL |  |

### flash/h7rs  (stm32h7r3a8 · FLASH · stm32h7r.svd.patched)

| issue | register | field | details |
|---|---|---|---|
| field_layout_mismatch | CR | SSN | ip[6:+3] svd[6:+2] |
| register_missing_in_svd | OBKDR |  |  |
| register_extra_in_svd | OBKDR0 |  | svd offset 0x118 |
| register_extra_in_svd | OBKDR1 |  | svd offset 0x11C |
| register_extra_in_svd | OBKDR2 |  | svd offset 0x120 |
| register_extra_in_svd | OBKDR3 |  | svd offset 0x124 |
| register_extra_in_svd | OBKDR4 |  | svd offset 0x128 |
| register_extra_in_svd | OBKDR5 |  | svd offset 0x12C |
| register_extra_in_svd | OBKDR6 |  | svd offset 0x130 |
| register_extra_in_svd | OBKDR7 |  | svd offset 0x134 |

