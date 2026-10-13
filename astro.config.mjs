// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kspiscinas.es',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // CSS pequeño: se inyecta en línea para evitar peticiones bloqueantes.
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/gracias/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
