import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    slug: z.string().optional(),
    published: z.boolean().default(false),
  }),
});

export const collections = {
  notes,
};
