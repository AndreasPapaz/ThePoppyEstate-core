import type { SchemaTypeDefinition } from "sanity";

import { newsArticle } from "./newsArticle";
import { presidentBio } from "./presidentBio";
import { officePage } from "./officePage";
import { genericPage } from "./genericPage";
import { photoGallery } from "./photoGallery";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsArticle, presidentBio, officePage, genericPage, photoGallery],
};
