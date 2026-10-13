// Comprueba enlaces internos y anclas del sitio generado en dist/.
// Uso: npm run build && node scripts/check-links.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = 'dist';
const html = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) html.push(p);
  }
})(dist);

const ids = new Map();
const pageOf = (file) => '/' + relative(dist, file).replace(/\\/g, '/').replace(/index\.html$/, '').replace(/\.html$/, '/');
for (const f of html) {
  const src = readFileSync(f, 'utf8');
  ids.set(pageOf(f), new Set([...src.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
}

const exists = (path) => {
  const clean = decodeURIComponent(path.split('?')[0]);
  if (clean.endsWith('/')) return existsSync(join(dist, clean, 'index.html'));
  return existsSync(join(dist, clean));
};

let errores = 0;
for (const f of html) {
  const src = readFileSync(f, 'utf8');
  const page = pageOf(f);
  for (const [, href] of src.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(href)) continue;
    const [path, hash] = href.split('#');
    const target = path === '' ? page : path;
    if (path && !exists(path)) {
      console.log(`✗ ${page} → ${href} (no existe)`);
      errores++;
    } else if (hash && !ids.get(target.split('?')[0])?.has(hash)) {
      console.log(`✗ ${page} → ${href} (ancla no encontrada)`);
      errores++;
    }
  }
}
console.log(errores ? `\n${errores} enlaces rotos` : `✓ ${html.length} páginas, sin enlaces internos rotos`);
process.exit(errores ? 1 : 0);
