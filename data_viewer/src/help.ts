type OpenModal = (
  title: string,
  buildBody: (body: HTMLElement, close: () => void) => void,
  opts?: { overlayClass?: string; modalClass?: string; modalStyle?: Partial<CSSStyleDeclaration> },
) => void;

export function showHelp(openModal: OpenModal): void {
  openModal(
    'MCU Data Viewer · Help',
    (body) => {
      body.classList.add('help-body');
      body.innerHTML = `
        <section>
          <h3>Search by name</h3>
          <p>Type a name with wildcards. Case-insensitive.</p>
          <ul>
            <li><code>stm32f4</code> — substring match (no wildcards = contains)</li>
            <li><code>stm32h*43</code> — <code>*</code> matches any characters</li>
            <li><code>stm32f40?v</code> — <code>?</code> matches a single character</li>
          </ul>
        </section>
        <section>
          <h3>Filters</h3>
          <p>Add space-separated <code>key:value</code> tokens. All filters AND together.</p>
          <table class="help-table">
            <tr><th><code>pin:N</code></th><td>min pin count (max across packages)</td></tr>
            <tr><th><code>freq:100M</code></th><td>min frequency. SI suffixes: <code>k</code>=1e3 <code>M</code>=1e6 <code>G</code>=1e9</td></tr>
            <tr><th><code>mhz:100</code></th><td>min frequency in MHz</td></tr>
            <tr><th><code>ram:32k</code></th><td>min RAM. Binary suffixes: <code>k</code>=1024 <code>M</code>=1024² <code>G</code>=1024³</td></tr>
            <tr><th><code>rom:128k</code></th><td>min flash/ROM (alias <code>flash:</code>)</td></tr>
            <tr><th><code>adc:3</code></th><td>min count of peripheral kind. Works for any kind: <code>usart</code>, <code>timer</code>, <code>spi</code>, …<br>Aliases (bidirectional): <code>uart</code>↔<code>usart</code>, <code>tim</code>↔<code>timer</code>.</td></tr>
            <tr><th><code>family:stm32h*</code></th><td>family wildcard match</td></tr>
            <tr><th><code>sub_family:stm32f405</code></th><td>sub-family wildcard match</td></tr>
            <tr><th><code>core:cm7</code></th><td>core name wildcard match</td></tr>
          </table>
        </section>
        <section>
          <h3>Examples</h3>
          <ul>
            <li><code>stm32h7 pin:144 freq:400M</code> — H7 with ≥144 pins, ≥400 MHz</li>
            <li><code>stm32g* adc:3 ram:64k</code> — any G-series with ≥3 ADCs, ≥64 KiB RAM</li>
            <li><code>stm32f40?v rom:512k</code> — f40xv with ≥512 KiB flash</li>
          </ul>
        </section>
        <section>
          <h3>Keyboard</h3>
          <p>In the search input:</p>
          <ul>
            <li><kbd>Enter</kbd> — select first result</li>
            <li><kbd>↓</kbd> — focus result list</li>
          </ul>
          <p>In tree views (result list, detail tree):</p>
          <ul>
            <li><kbd>↑</kbd> / <kbd>↓</kbd> — move focus to previous / next visible item</li>
            <li><kbd>→</kbd> — expand current group, or step into first child if already open</li>
            <li><kbd>←</kbd> — collapse current group, or step out to parent group</li>
            <li><kbd>Enter</kbd> / <kbd>Space</kbd> — toggle group, or activate (select) a leaf</li>
            <li><kbd>Home</kbd> / <kbd>End</kbd> — first / last visible item</li>
          </ul>
          <p>Globally:</p>
          <ul>
            <li><kbd>Tab</kbd> / <kbd>Shift</kbd>+<kbd>Tab</kbd> — move between search input, result list, detail tree</li>
            <li><kbd>?</kbd> — show this help</li>
            <li><kbd>Esc</kbd> — close help</li>
          </ul>
        </section>
      `;
    },
    {
      modalStyle: { width: '560px', maxHeight: '80vh', overflowY: 'auto' },
    },
  );
}
