export type PressItem = {
  outlet: string;
  title: string;
  image: string;
  imageAlt: string;
  href?: string;
  format?: "Article" | "Radio" | "Video";
  imageFit?: "cover" | "contain";
};

export const pressItems: PressItem[] = [
  {
    outlet: "ABC 7 Chicago",
    title: "Coverage forthcoming",
    image: "/assets/press/abc.webp",
    imageAlt: "ABC 7 Chicago logo",
    imageFit: "contain",
  },
  {
    outlet: "CBS News Chicago",
    title: "Coverage forthcoming",
    image: "/assets/press/cbs.jpg",
    imageAlt: "CBS News Chicago",
  },
  {
    outlet: "Daily Herald",
    title: "Coverage forthcoming",
    image: "/assets/press/daily-herald.jpg",
    imageAlt: "Daily Herald logo",
    imageFit: "contain",
  },
  {
    outlet: "Chicago Tribune",
    title: "Coverage forthcoming",
    image: "/assets/press/chicago-tribune.png",
    imageAlt: "Chicago Tribune logo",
    imageFit: "contain",
  },
  {
    outlet: "Chicago Chronicle",
    title: "The Poppy Estate Opens Its Doors, Reimagining One of Aurora’s Most Historic Venues",
    image: "/assets/press/chicago-chronicle.jpg",
    imageAlt: "Chicago Chronicle logo",
    href: "https://www.chicagochronicle.com/news/279321458/the-poppy-estate-opens-its-doors-reimagining-one-of-auroras-most-historic-venues",
    format: "Article",
    imageFit: "contain",
  },
  {
    outlet: "WGN Radio",
    title: "The Poppy Estate: Creating Unforgettable Moments and Celebrations in Aurora",
    image: "/assets/press/wgn.jpg",
    imageAlt: "WGN Radio logo",
    href: "https://wgnradio.com/lisa-dent/the-poppy-estate-creating-unforgettable-moments-and-celebrations-in-aurora/",
    format: "Radio",
    imageFit: "contain",
  },
  {
    outlet: "Windy City Times",
    title: "The Poppy Estate Featured in SAVOR",
    image: "/assets/press/windy-city-times.png",
    imageAlt: "Windy City Times logo",
    href: "https://windycitytimes.com/2026/10/19/savor-queer-chef-honored-chick-fil-a-stays-mum-mango-pickles-high-tea-and-a-vintage-show/#:~:text=There's%20a%2050%2C000%2B%2Dsquare%2Dfoot%20building%20with,opening%20week%20on%20Oct.%2018",
    format: "Article",
    imageFit: "contain",
  },
  {
    outlet: "What’s Happening in the World of Work",
    title: "A Conversation with The Poppy Estate",
    image: "/assets/press/world-of-work.jpg",
    imageAlt: "What’s Happening in the World of Work video thumbnail",
    href: "https://www.youtube.com/watch?v=m-IUvwdUazg",
    format: "Video",
  },
  {
    outlet: "City of Aurora",
    title: "Video forthcoming",
    image: "/assets/press/city-of-aurora.jpg",
    imageAlt: "City of Aurora, Illinois logo",
    imageFit: "contain",
  },
  {
    outlet: "Stroll Long Grove",
    title: "Coverage forthcoming",
    image: "/assets/press/long-grove-stroll.png",
    imageAlt: "Stroll magazine logo",
    imageFit: "contain",
  },
];
