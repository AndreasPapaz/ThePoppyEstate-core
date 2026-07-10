import { defineField, defineType } from "sanity";
import { bodyField, slugField } from "./shared";

export const presidentBio = defineType({
  name: "presidentBio",
  title: "President Bio",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
    bodyField,
  ],
  preview: {
    select: { title: "title", media: "portrait" },
  },
});
