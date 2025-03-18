import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from "url";
import path from "path";
import { readFileSync } from "fs";
import { Plugin } from "rollup";

import tailwindcss from "@tailwindcss/vite";

// Adapted from https://stackoverflow.com/questions/73847316
const bufferLoader: Plugin = {
  name: "buffer-loader",
  transform(_, id) {
    const [path, query] = id.split("?");
    if (query != "buffer") return null;

    const data = readFileSync(path);
    const hex = data.toString("hex");

    return `export default Buffer.from("${hex}", "hex");`;
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [bufferLoader, tailwindcss()],
    resolve: {
      alias: {
        node_modules: path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          "node_modules"
        ),
      },
    },
  },
  experimental: {
    svg: {
      mode: "sprite",
    },
  },
});
