import { defineField, defineType } from "sanity";
import { languageField, slugField } from "./shared";

export const photoGallery = defineType({
  name: "photoGallery",
  title: "Photo Gallery",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    languageField,
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "caption", title: "Caption", type: "string" }],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "language" },
  },
});
