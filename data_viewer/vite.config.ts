import { defineConfig } from 'vite';
import { resolve, normalize } from 'node:path';
import { existsSync, statSync, createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const dataRoot = resolve(here, '../data');

export default defineConfig({
  server: {
    fs: { allow: [here, resolve(here, '..'), dataRoot] },
  },
  plugins: [
    {
      name: 'serve-mcu-data',
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
  ],
});
