export type NewsArticle = {
  slug: string;
  title: string;
  publishedAt: string;
  publishedLabel: string;
  category: string;
  heroImage: { src: string; alt: string };
  paragraphs: string[];
  related: { title: string; href: string }[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "childrens-wellbeing-the-true-measure-of-a-healthy-society",
    title: "Children's Wellbeing: The True Measure of a Healthy Society",
    publishedAt: "2026-05-27",
    publishedLabel: "May 27, 2026",
    category: "Dialogue",
    heroImage: {
      src: "https://cdn.sanity.io/images/hq90xi2r/production/49f19b75a929f525a5ba5f4917cc071b5bc8d99d-7802x5523.jpg",
      alt: "Halla Tómasdóttir and Catherine Russell",
    },
    paragraphs: [
      "The President of Iceland, Halla Tómasdóttir, and Catherine Russell, Executive Director of the United Nations Children's Fund (UNICEF), held an impactful conversation at the international annual meeting of leaders of UNICEF national committees, which took place in Reykjavík. They discussed the situation of children and young people, international affairs, and the challenges facing humanitarian organizations. At the outset of the conversation, the President emphasized three key concerns. First, she noted that children are now dying as a result of armed conflict in more places than before. \"National leaders speak more about war and weapons than about protecting and saving children. That is a development that frightens me,\" she said. Second, she expressed deep concern that, despite significant progress in combating global hunger, conditions in many regions have once again reached a critical point. Finally, she drew attention to what she described as a silent assault on children's well-being: the growing influence of social media and excessive screen use. \"Children's well-being is a measure of the health of society,\" she added in this context. Catherine Russell echoed the President's concerns, noting that the deterioration of international relations has only exacerbated the current challenges. She expressed particular alarm at the decline in contributions to development aid. For decades, the United States had served as a cornerstone of an international system that prioritized assistance to vulnerable populations. However, this commitment has shifted dramatically in a remarkably short time. Russell also highlighted the severe consequences of insufficient action on environmental issues, emphasizing that children are disproportionately affected. In response, UNICEF has focused strongly on enhancing the sustainability and resilience of communities facing the impacts of climate change. In addition, Russell addressed ongoing efforts to promote gender equality and protect girls. She cited the harrowing example of organized violence targeting groups of girls in the Darfur region of Sudan last autumn. \"What kind of hatred drives something like this, and where does this hatred come from?\" she asked, underscoring the urgency of confronting such atrocities.",
      "At the conclusion of the discussion, the floor was opened to questions from the audience. In her closing remarks, Russell emphasized that despite the many challenges we face, international cooperation endures, and the aspiration for a better world continues to serve as a guiding light for UNICEF's humanitarian work.",
      "The President concluded by reminding us that in times of uncertainty, we must reflect inward and consider what kind of people we aspire to be.",
    ],
    related: [],
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((a) => a.slug === slug);
}

export function getNewsList() {
  return newsArticles;
}
