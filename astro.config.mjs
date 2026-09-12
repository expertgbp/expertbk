// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO [NEEDS CONFIRMATION]: confirm final production domain before launch.
  site: 'https://www.writeexpertbook.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});