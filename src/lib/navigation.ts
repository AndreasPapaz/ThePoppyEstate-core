export type NavLink = { label: string; href: string };

export type MegaMenuColumn = { label: string; links: NavLink[] };
export type PromoCard = {
  title: string;
  href: string;
  image: { src: string; alt: string };
};
export type MegaMenu = { columns: MegaMenuColumn[]; promoCards: PromoCard[] };

export type NavItem = NavLink & { megaMenu?: MegaMenu };

export type SiteNav = {
  logoAlt: string;
  primary: NavItem[];
  cta: NavLink;
  footer: {
    heading: string;
    headingAccent: string;
    columns: [NavLink[], NavLink[]];
    instagramHref: string;
    copyright: string;
    address: string[];
    phone?: { label: string; href: string };
    email: string;
  };
};

export const nav: SiteNav = {
  logoAlt: "The Poppy Estate logo",
  primary: [
    { label: "About", href: "/#about" },
    { label: "The Space", href: "/#the-space" },
    { label: "Our Team", href: "/#our-team" },
    { label: "Get Directions", href: "/#get-directions" },
    { label: "Contact Us", href: "/contact" },
  ],
  cta: { label: "Inquire", href: "/contact" },
  footer: {
    heading: "The Poppy",
    headingAccent: "Estate",
    columns: [
      [
        { label: "About Us", href: "/#about" },
        { label: "The Space", href: "/#the-space" },
        { label: "Our Team", href: "/#our-team" },
        { label: "Get Directions", href: "/#get-directions" },
        { label: "Contact Us", href: "/contact" },
      ],
      [
        // { label: "Addresses & Speeches", href: "/president/speeches-writings" },
        // { label: "Photo Gallery", href: "/president/photo-gallery" },
        // { label: "The Order of the Falcon", href: "/presidency/order-of-the-falcon" },
        // { label: "Q&A", href: "/presidency/questions-answers" },
        // { label: "About this website", href: "/presidency/about-this-website" },
        // {
        //   label: "Instagram",
        //   href: "https://www.instagram.com/hallatomas?igsh=OWFoOG53dW1vNjAy&utm_source=qr",
        // },
      ],
    ],
    instagramHref:
      "https://www.instagram.com/company251",
    copyright: "© The Poppy Estate, 2026",
    address: ["251 S River St", "Aurora", "IL 60506"],
    email: "hello@thepoppyestate.com",
  },
};
