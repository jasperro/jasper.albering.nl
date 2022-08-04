import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), sitemap(), mdx()],
  vite: {
    ssr: {
      external: ['svgo', '@11ty/eleventy-img']
    }
  }
});