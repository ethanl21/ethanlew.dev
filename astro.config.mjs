// @ts-check
import { defineConfig } from "astro/config";
import unocss from "unocss/astro";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [
    unocss({
      injectReset: true,
    }),
    expressiveCode(),
    mdx(),
    sitemap(),
  ],
  site: "https://ethanlew.dev",
});
