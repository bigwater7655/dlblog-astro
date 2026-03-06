// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://bigwater7655.github.io',
  base: '/dlblog-astro',
  integrations: [mdx()],
  vite: {
    resolve: {
      alias: {
        '~': new URL('./src', import.meta.url).pathname
      }
    }
  }
});