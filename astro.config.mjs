// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://purposebydesignpodcast.com',
  output: 'static',
  build: {
    assets: 'assets',
  },
});
