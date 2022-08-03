import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	integrations: [svelte(), sitemap()],
	vite: {
		ssr: {
			external: ['svgo']
		}
	}
});
