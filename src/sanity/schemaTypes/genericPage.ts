import { defineField, defineType } from "sanity";
import { bodyField, languageField, slugField } from "./shared";

export const genericPage = defineType({
  name: "genericPage",
  title: "Generic Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    languageField,
    bodyField,
  ],
  preview: {
    select: { title: "title", subtitle: "language" },
  },
});
