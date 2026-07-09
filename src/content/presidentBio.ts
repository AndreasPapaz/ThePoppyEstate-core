export type BioSection = {
  heading?: string;
  body: string;
  image?: { src: string; alt: string };
};

export type PresidentBio = {
  slug: string;
  title: string;
  portrait: { src: string; alt: string };
  intro: string;
  sections: BioSection[];
  pullQuote: string;
};

export const presidentBios: PresidentBio[] = [
  {
    slug: "halla-tomasdottir",
    title: "Halla Tómasdóttir",
    portrait: {
      src: "https://cdn.sanity.io/images/hq90xi2r/production/4577e6596c3d594c891002a6052aab646aff2371-3364x2300.jpg",
      alt: "Halla Tómasdóttir, President of Iceland",
    },
    intro:
      "Halla Tómasdóttir was born in Reykjavík on 11 October 1968. She was elected president of Iceland in 2024. She is the second woman to hold the office of the president.",
    sections: [
      {
        heading: "The Presidency",
        body: "The president of Iceland is elected for a term of four years and is the only government official chosen directly in a democratic election. Halla Tómasdóttir was elected president on 1 June 2024 and formally took office on 1 August of the same year.",
      },
      {
        heading: "Family",
        body: "Halla's mother, Kristjana Sigurðardóttir, is a developmental therapist. Halla's father, Tómas Björn Þórhallsson, was a master plumber. He died in 2008. Halla was raised in Kópavogur, just outside Reykjavík, alongside two sisters. She is married to entrepreneur and natural chef Björn Skúlason. Together they have two children, Tómas Bjartur and Auður Ína.",
        image: {
          src: "https://cdn.sanity.io/images/hq90xi2r/production/6eb231f0761a41ef7eda08e2e2f5d3cdefe4bc9e-1200x1600.jpg",
          alt: "Halla Tómasdóttir's family",
        },
      },
      {
        heading: "Education",
        body: "Halla holds a BSc in Business Administration from Auburn University in Montgomery, Alabama and an MBA (formerly MIM) from Thunderbird School of Global Management in Phoenix, Arizona. She completed all coursework for the Doctor of Business Administration (DBA) degree at Cranfield University in England, conducting research in leadership, and was a fellow at UVA Darden School of Business.",
        image: {
          src: "https://cdn.sanity.io/images/hq90xi2r/production/e672529d3c0f17207de1ca18e2ec135a17edcb1e-1280x873.jpg",
          alt: "Halla Tómasdóttir's education",
        },
      },
      {
        heading: "Career",
        body: "Halla started her leadership career working for US-based companies M&M/Mars and Pepsi Cola. When she returned to Iceland she worked for Íslenska útvarpsfélagið (Icelandic Broadcasting), before joining the founding team at Reykjavík University (RU). She established RU's executive- and continuous education programmes, taught entrepreneurship and leadership and led women's empowerment project called \"Auður í krafti kvenna\" (\"Wealth Through Women's Power\"). Halla became the first female CEO of the Iceland Chamber of Commerce, a position she left to co-found the investment firm Auður Capital with the vision to deliver profit with principles. For six years Halla was the CEO of The B Team, a global collective of business and civil society leaders catalysing purpose-driven and principled leadership for a better working world.",
        image: {
          src: "https://cdn.sanity.io/images/hq90xi2r/production/45456c79296673998d83707c944a9aced817a746-6000x4000.jpg",
          alt: "Halla Tómasdóttir's career",
        },
      },
      {
        heading: "Key Issues",
        body: "Since taking office, Halla has emphasised the principles of peace, equality, compassion and respect and underlined the importance of intergenerational conversations and interdisciplinary collaboration. She is passionate about the well-being of children and young adults and has urged the implementation of measures to counteract online harm and disinformation. She aims to bring diverse participants into dialogue to discuss solutions that benefit society as a whole.",
      },
    ],
    pullQuote: "“Progress is based on dialogue, across genders, generations and borders.”",
  },
];

export function getPresidentBio(slug: string) {
  return presidentBios.find((b) => b.slug === slug);
}
