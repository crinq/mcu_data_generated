import '../ts_lib/styles/theme.css';
import '../ts_lib/styles/layout.css';
import './style.css';

import {
  LayoutManager,
  HorizontalSplitter,
  initTheme,
  cycleThemeMode,
  getThemeMode,
  themeModeLabel,
  onThemeChange,
  openModal,
} from '../ts_lib/src/index';

import { SearchPanel } from './search-panel';
import { DetailPanel } from './detail-panel';
import { showHelp } from './help';

initTheme();

const app = document.getElementById('app')!;
app.style.height = '100%';

const layout = new LayoutManager(app);

const header = layout.getHeader();
header.innerHTML = `
  <div style="display:flex;align-items:center;gap:12px">
    <strong style="font-size:14px">MCU Data Viewer</strong>
    <span style="font-size:12px;color:var(--text-secondary)">browse generated CPU data</span>
  </div>
  <div style="display:flex;gap:6px">
    <button class="btn btn-small" id="btn-help">Help</button>
    <button class="btn btn-small" id="btn-theme">Theme: ${themeModeLabel(getThemeMode())}</button>
  </div>
`;

const footer = layout.getFooter();
footer.innerHTML = `
  <span style="color:var(--text-secondary)">
    Press <kbd>?</kbd> for help. Filters: <code>name*</code> <code>pin:N</code> <code>freq:NM</code> <code>ram:Nk</code> <code>rom:Nk</code> <code>adc:N</code> …
  </span>
`;

const detailPanel = new DetailPanel();
const searchPanel = new SearchPanel((change) => layout.broadcastStateChange(change));

const split = HorizontalSplitter();
split.add(searchPanel, 1);
split.add(detailPanel, 2);

layout.body = split;

const themeBtn = document.getElementById('btn-theme')!;
themeBtn.addEventListener('click', () => cycleThemeMode());
onThemeChange((mode) => { themeBtn.textContent = `Theme: ${themeModeLabel(mode)}`; });

document.getElementById('btn-help')!.addEventListener('click', () => showHelp(openModal));

window.addEventListener('keydown', (e) => {
  if (e.key === '?' && !(e.target instanceof HTMLInputElement)) {
    e.preventDefault();
    showHelp(openModal);
  }
});
