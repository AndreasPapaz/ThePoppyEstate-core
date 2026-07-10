import { defineField, defineType } from "sanity";
import { bodyField, slugField } from "./shared";

export const officePage = defineType({
  name: "officePage",
  title: "Office Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
    bodyField,
  ],
  preview: {
    select: { title: "title" },
  },
});
