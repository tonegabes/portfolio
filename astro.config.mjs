// @ts-nocheck
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: "https://tonegabes.com",
  // Forçar narrow typing em plugins para evitar conflito de tipos com Astro Check
  vite: /** @type {import('vite').UserConfig} */ ({
    plugins: /** @type {import('vite').PluginOption[]} */ ([tailwindcss()]),
  }),
  integrations: [sitemap()],
});
