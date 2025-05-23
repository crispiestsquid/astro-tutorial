// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://kaleidoscopic-gingersnap-4a85af.netlify.app/',
  integrations: [preact()],
});