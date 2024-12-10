import { z, defineCollection } from "astro:content";
import { ObsidianMdLoader } from "astro-loader-obsidian";

const ObsidianDocumentSchema = z.object({
	// Obsidian Frontmatter Fields
	tags: z.array(z.string()).optional(),
	aliases: z.array(z.string()).optional(),
	cssclasses: z.array(z.string()).optional(),
	publish: z.boolean().optional(),
	permalink: z.string(),
	description: z.string().optional(),
	image: z.string().optional(),
	cover: z.string().optional(),
	// Astro Blogging Fields
	title: z.string(), // Defaults to File Name
	author: z.string(), // Defaults to LoaderOptions -> author
	created: z.date(), // Defaults to Stats -> ctime
	updated: z.date(), // Defaults to Stats -> mtime
});

const blogCollection = defineCollection({
	loader: ObsidianMdLoader({
		base: "src/content/Notebook",
		author: "Ethan Lew",
		pattern: "**/*.md",
	}),
	schema: ObsidianDocumentSchema,
});

export const collections = {
	blog: blogCollection,
};
