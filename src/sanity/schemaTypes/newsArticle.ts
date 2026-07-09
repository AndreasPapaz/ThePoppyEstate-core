import { defineField, defineType } from "sanity";
import { bodyField, languageField, slugField } from "./shared";

export const newsArticle = defineType({
  name: "newsArticle",
  title: "News Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    languageField,
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
    select: { title: "title", subtitle: "language", media: "heroImage" },
  },
});
