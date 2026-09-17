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

  // No @astrojs/sitemap integration: it only produces one flat, unprioritized
  // sitemap. src/pages/sitemap-*.xml.ts build a categorized, prioritized set
  // instead (see those files for the per-content-type breakdown).
  integrations: []
});