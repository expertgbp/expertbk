// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO [NEEDS CONFIRMATION]: confirm final production domain before launch.
  site: 'https://www.writeexpertbook.com',
  vite: {
    plugins: [tailwindcss()]
  },

  // All CSS is inlined into each page's <head>. The site's stylesheets are
  // small (about 35 KB before compression for the homepage), and as
  // separate files they were five render-blocking requests that held back
  // first paint by over a second on a throttled phone connection.
  build: {
    inlineStylesheets: 'always'
  },

  // No @astrojs/sitemap integration: it only produces one flat, unprioritized
  // sitemap. src/pages/sitemap-*.xml.ts build a categorized, prioritized set
  // instead (see those files for the per-content-type breakdown).
  integrations: []
});
