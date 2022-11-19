import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from "url";
import path from "path";

// https://astro.build/config
export default defineConfig({
    integrations: [sitemap(), mdx()],
    vite: {
        ssr: {
            external: ["svgo", "@11ty/eleventy-img"],
        },
        resolve: {
            alias: {
                node_modules: path.resolve(
                    path.dirname(fileURLToPath(import.meta.url)),
                    "node_modules"
                ),
            },
        },
        optimizeDeps: {
            exclude: ["astro-eleventy-img"],
        },
    },
});
