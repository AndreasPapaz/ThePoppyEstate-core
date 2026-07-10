import { defineQuery } from "next-sanity";

export const newsListQuery = defineQuery(
  `*[_type == "newsArticle"] | order(publishedAt desc){ title, slug, publishedAt, excerpt, heroImage }`
);

export const newsArticleQuery = defineQuery(
  `*[_type == "newsArticle" && slug.current == $slug][0]`
);

export const presidentBioQuery = defineQuery(
  `*[_type == "presidentBio" && slug.current == $slug][0]`
);

export const officePageQuery = defineQuery(
  `*[_type == "officePage" && slug.current == $slug][0]`
);
