import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from "url";
import path from "path";

// https://astro.build/config
export default defineConfig({
    integrations: [
        image({ serviceEntryPoint: "@astrojs/image/sharp" }),
        mdx(),
        sitemap(),
    ],
    vite: {
        ssr: {
            external: ["svgo"],
        },
        resolve: {
            alias: {
                node_modules: path.resolve(
                    path.dirname(fileURLToPath(import.meta.url)),
                    "node_modules"
                ),
            },
        },
    },
});
