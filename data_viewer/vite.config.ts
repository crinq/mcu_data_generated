import { defineConfig } from 'vite';
import { resolve, normalize, sep } from 'node:path';
import { existsSync, statSync, createReadStream, cpSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const dataRoot = resolve(here, '../data');

const base = process.env.BASE_PATH
  ? (process.env.BASE_PATH.endsWith('/') ? process.env.BASE_PATH : process.env.BASE_PATH + '/')
  : '/';

/** Allow only the files the webapp actually fetches:
 *  - root index.json
 *  - <vendor>/index.json
 *  - <vendor>/mcu/*.json
 *  Skip _report/, ip/, families.json, etc. to keep the artifact small.
 */
function dataIncludeFilter(src: string): boolean {
  if (src === dataRoot) return true;
  const rel = src.slice(dataRoot.length).replace(/^[/\\]+/, '');
  if (!rel) return true;
  const parts = rel.split(/[/\\]/);
  if (parts.length === 1) {
    if (rel === 'index.json') return true;
    return statSync(src).isDirectory();
  }
  if (parts.length === 2) {
    if (parts[1] === 'index.json') return true;
    if (parts[1] === 'mcu') return statSync(src).isDirectory();
    return false;
  }
  if (parts.length === 3 && parts[1] === 'mcu') {
    return parts[2].endsWith('.json');
  }
  return false;
}

export default defineConfig({
  base,
  server: {
    fs: { allow: [here, resolve(here, '..'), dataRoot] },
  },
  plugins: [
    {
      name: 'serve-mcu-data',
      apply: 'serve',
      configureServer(server) {
        server.middlewares.use('/data', (req, res, next) => {
          const url = (req.url || '/').split('?')[0];
          const decoded = decodeURIComponent(url);
          const target = normalize(resolve(dataRoot, '.' + decoded));
          if (!target.startsWith(dataRoot)) { res.statusCode = 403; res.end('forbidden'); return; }
          if (!existsSync(target) || !statSync(target).isFile()) { next(); return; }
          const ct = target.endsWith('.json')
            ? 'application/json'
            : target.endsWith('.yaml') || target.endsWith('.yml')
              ? 'text/yaml'
              : 'application/octet-stream';
          res.setHeader('Content-Type', ct);
          createReadStream(target).pipe(res);
        });
      },
    },
    {
      name: 'copy-mcu-data',
      apply: 'build',
      closeBundle() {
        const out = resolve(here, 'dist', 'data');
        cpSync(dataRoot, out, {
          recursive: true,
          filter: dataIncludeFilter,
          dereference: true,
        });
        // eslint-disable-next-line no-console
        console.log(`copy-mcu-data: bundled data subset to ${out.split(sep).slice(-3).join('/')}`);
      },
    },
  ],
});
