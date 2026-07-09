export type HomeContent = {
  hero: {
    quote: string;
    linkLabel: string;
    linkHref: string;
    image: { src: string; alt: string };
  };
  news: {
    heading: string;
    moreLabel: string;
    moreHref: string;
    items: {
      date: string;
      title: string;
      excerpt: string;
      href: string;
      image: { src: string; alt: string };
    }[];
  };
  presidentIntro: {
    quote: string;
    linkLabel: string;
    linkHref: string;
    name: string;
    role: string;
    image: { src: string; alt: string };
  };
  falcon: {
    body: string;
    imageCaption: string;
    image: { src: string; alt: string };
    linkLabel: string;
    linkHref: string;
  };
  bessastadir: {
    body: string;
    image: { src: string; alt: string };
    linkLabel: string;
    linkHref: string;
  };
};

const heroImage = {
  src: "https://cdn.sanity.io/images/hq90xi2r/production/c3e290fa4d5cf35b0a3b9fc8de22430c6093908f-2363x3543.jpg",
  alt: "Halla Tómasdóttir, President of Iceland",
};

const coupleImage = {
  src: "https://cdn.sanity.io/images/hq90xi2r/production/40b19eaf3e9b5ccd9025cdeb5af1e2e446d70a3b-725x585.png",
  alt: "The presidential couple, Halla Tómasdóttir and Björn Skúlason.",
};

export const home: HomeContent = {
  hero: {
    quote:
      "“Dialogue promotes understanding, counteracts division, and enables us to collectively address complex challenges.”",
    linkLabel: "The President in Dialogue",
    linkHref: "/president/dialogue",
    image: heroImage,
  },
  news: {
    heading: "Highlights from the President's agenda",
    moreLabel: "See more news",
    moreHref: "/news",
    items: [
      {
        date: "July 8, 2026",
        title: "What kind of society – and humanity – do we choose to be?",
        excerpt:
          "The President addresses UN's Global Dialogue on AI Governance in Geneva.",
        href: "/news/what-kind-of-humanity-do-we-want-choose-to-be",
        image: {
          src: "https://cdn.sanity.io/images/hq90xi2r/production/ba58a7d346480060df9d9159a4ad60dcd89edb1f-2412x1332.jpg",
          alt: "What kind of society and humanity do we choose to be?",
        },
      },
      {
        date: "June 25, 2026",
        title: "Farewell in Tórshavn",
        excerpt:
          "Final day of the visit of the presidential couple to the Faroe Islands.",
        href: "/news/farewell-in-torshavn",
        image: {
          src: "https://cdn.sanity.io/images/hq90xi2r/production/cf34af598ed25beda99d39fc2175a569ab113bd8-446x500.jpg",
          alt: "Farewell in Tórshavn",
        },
      },
      {
        date: "June 24, 2026",
        title: "Visits to Austurey and Borðey",
        excerpt:
          "Second day of the presidential couple's visit to the Faroe Islands.",
        href: "/news/diverse-destinations-on-austurey-and-borey",
        image: {
          src: "https://cdn.sanity.io/images/hq90xi2r/production/44e3531404324b74a5a7b36c686b7c94d93ee203-2000x1333.jpg",
          alt: "Visits to Austurey and Borðey",
        },
      },
    ],
  },
  presidentIntro: {
    quote:
      "“Whether at home or abroad, I will always advocate for the interests of Iceland and the Icelandic people.”",
    linkLabel: "Profile of the President",
    linkHref: "/president/halla-tomasdottir",
    name: "Halla Tómasdóttir is the second woman",
    role: "serving as the President in Iceland.",
    image: coupleImage,
  },
  falcon: {
    body: "The president of Iceland presents Icelandic citizens with the Order of the Falcon twice a year. The Order of the Falcon is the highest honour awarded by the Icelandic State.",
    imageCaption: "Icelandic citizens who received the Order of the Falcon on 1 January 2026",
    image: {
      src: "https://cdn.sanity.io/images/hq90xi2r/production/90dfebd2f1f5dfc3892791f44c6d6b20d455d5d3-1690x1072.png",
      alt: "Icelandic citizens who received the Order of the Falcon on 1 January 2026",
    },
    linkLabel: "The Order of the Falcon",
    linkHref: "/presidency/order-of-the-falcon",
  },
  bessastadir: {
    body: "Bessastaðir is the official residence of the President of Iceland.",
    image: {
      src: "https://cdn.sanity.io/images/hq90xi2r/production/7e3d8dcda7481a5cd630a33878c5659924dc8f36-2500x1666.jpg",
      alt: "Bessastaðir",
    },
    linkLabel: "Learn more about this historic place",
    linkHref: "/bessastadir",
  },
};
