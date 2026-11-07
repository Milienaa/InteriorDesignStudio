// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oriel.example',
  output: 'static',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
