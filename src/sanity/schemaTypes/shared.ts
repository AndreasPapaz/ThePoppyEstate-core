import { defineField } from "sanity";

export const languageField = defineField({
  name: "language",
  title: "Language",
  type: "string",
  options: {
    list: [
      { title: "Íslenska", value: "is" },
      { title: "English", value: "en" },
    ],
    layout: "radio",
  },
  initialValue: "is",
  validation: (Rule) => Rule.required(),
});

export const slugField = defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  options: { source: "title", maxLength: 96 },
  validation: (Rule) => Rule.required(),
});

export const bodyField = defineField({
  name: "body",
  title: "Body",
  type: "array",
  of: [
    { type: "block" },
    {
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    },
  ],
});
