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
    name: string;
    phone: { label: string; href: string };
    address: string;
    social: NavLink[];
  };
};

export const nav: SiteNav = {
  logoAlt: "The Poppy Estate logo",
  primary: [
    { label: "About", href: "/#about" },
    { label: "The Space", href: "/#the-space" },
    { label: "Our Team", href: "/#our-team" },
    { label: "Get Directions", href: "/#get-directions" },
    { label: "Applause", href: "/applause" },
  ],
  cta: { label: "Inquire", href: "/contact" },
  footer: {
    name: "The Poppy Estate",
    phone: { label: "331-223-0075", href: "tel:331-223-0075" },
    address: "251 South River Street Aurora, Illinois",
    social: [
      { label: "INSTAGRAM", href: "https://www.instagram.com/company251" },
      { label: "PINTEREST", href: "https://www.pinterest.com/company251/" },
      { label: "FACEBOOK", href: "https://www.facebook.com/company251/" },
    ],
  },
};
