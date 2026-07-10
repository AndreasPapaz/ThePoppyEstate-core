import { defineField, defineType } from "sanity";
import { bodyField, slugField } from "./shared";

export const genericPage = defineType({
  name: "genericPage",
  title: "Generic Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    bodyField,
  ],
  preview: {
    select: { title: "title" },
  },
});
