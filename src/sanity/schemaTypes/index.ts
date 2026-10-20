import type { SchemaTypeDefinition } from "sanity";

import { genericPage } from "./genericPage";
import { photoGallery } from "./photoGallery";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [genericPage, photoGallery],
};
