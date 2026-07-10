import { defineField, defineType } from "sanity";
import { bodyField, slugField } from "./shared";

export const newsArticle = defineType({
  name: "newsArticle",
  title: "News Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    bodyField,
  ],
  preview: {
    select: { title: "title", media: "heroImage" },
  },
});
