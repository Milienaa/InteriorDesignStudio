// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oriel-interior-design-studio.vercel.app',
  output: 'static',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
