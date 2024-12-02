// @ts-check
import { defineConfig } from "astro/config";
import unocss from "unocss/astro";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import rehypeSectionize from "@hbsnow/rehype-sectionize";
import readingTime from "astro-reading-time";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

// https://astro.build/config
export default defineConfig({
	integrations: [
		unocss({
			injectReset: true,
		}),
		expressiveCode({
			defaultProps: {
				wrap: true,
			},
		}),
		mdx(),
		sitemap(),
		readingTime(),
	],
	site: "https://ethanlew.dev",
	markdown: {
		remarkPlugins: [],
		rehypePlugins: [rehypeHeadingIds, rehypeSectionize],
	},
});
