import { defineField, defineType } from "sanity";
import { slugField } from "./shared";

export const photoGallery = defineType({
  name: "photoGallery",
  title: "Photo Gallery",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
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
    select: { title: "title" },
  },
});
