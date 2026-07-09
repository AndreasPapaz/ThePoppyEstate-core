import { defineField, defineType } from "sanity";
import { bodyField, languageField, slugField } from "./shared";

export const officePage = defineType({
  name: "officePage",
  title: "Office Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    languageField,
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
    bodyField,
  ],
  preview: {
    select: { title: "title", subtitle: "language" },
  },
});
