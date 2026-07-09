import { defineQuery } from "next-sanity";

export const newsListQuery = defineQuery(
  `*[_type == "newsArticle" && language == $language] | order(publishedAt desc){ title, slug, publishedAt, excerpt, heroImage }`
);

export const newsArticleQuery = defineQuery(
  `*[_type == "newsArticle" && language == $language && slug.current == $slug][0]`
);

export const presidentBioQuery = defineQuery(
  `*[_type == "presidentBio" && language == $language && slug.current == $slug][0]`
);

export const officePageQuery = defineQuery(
  `*[_type == "officePage" && language == $language && slug.current == $slug][0]`
);
