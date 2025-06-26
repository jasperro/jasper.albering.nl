import { defineCollection, z } from 'astro:content';
import { glob, Loader } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './src/lib/posts' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			shortTitle: z.string().optional(),
			description: z.string().optional(),
			date: z.coerce.date(),
			cover: image().optional(),
		}),
});

const content = defineCollection({
	loader: glob({ pattern: '**/[^_]*.mdx', base: './src/lib/content' }),
	schema: () =>
		z.object({
			title: z.string(),
			shortTitle: z.string().optional(),
			description: z.string().optional(),
		}),
});

export const collections = { posts, content };
