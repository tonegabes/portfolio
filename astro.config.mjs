// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import devtoolsJson from "vite-plugin-devtools-json";

// https://astro.build/config
export default defineConfig({
  site: "https://tonegabes.com",
  vite: {
    plugins: [tailwindcss(), devtoolsJson()],
  },
  integrations: [sitemap()],
});
