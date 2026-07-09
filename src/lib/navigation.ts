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
  searchHref: string;
  footer: {
    heading: string;
    headingAccent: string;
    columns: [NavLink[], NavLink[]];
    instagramHref: string;
    copyright: string;
    officeName: string;
    address: string[];
    phone?: { label: string; href: string };
    email: string;
  };
};

export const nav: SiteNav = {
  logoAlt: "The Poppy Estate logo",
  primary: [
    {
      label: "The President",
      href: "/president/halla-tomasdottir",
      megaMenu: {
        columns: [
          {
            label: "The President",
            links: [
              { label: "Halla Tómasdóttir", href: "/president/halla-tomasdottir" },
              { label: "Speeches & Writings", href: "/president/speeches-writings" },
              { label: "Spouse", href: "/president/spouse" },
            ],
          },
          {
            label: "Dialogue",
            links: [
              { label: "Love", href: "/dialogue/love" },
              { label: "Wellbeing", href: "/dialogue/wellbeing" },
              { label: "Safety Net", href: "/dialogue/safety-net" },
              { label: "Leadership", href: "/dialogue/leadership" },
            ],
          },
          {
            label: "Community Support",
            links: [
              { label: "Patron", href: "/president/patron" },
              { label: "Honours", href: "/president/honours" },
            ],
          },
          {
            label: "Presidential Updates",
            links: [
              { label: "Highlights", href: "/news" },
              { label: "Photo Gallery", href: "/president/photo-gallery" },
            ],
          },
        ],
        promoCards: [
          {
            title: "The President in Dialogue",
            href: "/president/dialogue",
            image: {
              src: "https://cdn.sanity.io/images/hq90xi2r/production/7d6061ad4dd7abccd04e1afa9ea71f6bb1efe9b0-1920x1280.jpg",
              alt: "Profile of the President",
            },
          },
          {
            title: "Visit to the Faroe Islands",
            href: "/photo-gallery/faroe-islands",
            image: {
              src: "https://cdn.sanity.io/images/hq90xi2r/production/4b4ead4458e0a8d7f31da3661de7bf64ff4ae29d-2200x1464.jpg",
              alt: "Visit of the presidential couple to the Faroe Islands",
            },
          },
        ],
      },
    },
    { label: "Highlights", href: "/news" },
    { label: "Bessastaðir", href: "/bessastadir" },
    {
      label: "The Presidency",
      href: "/presidency/skrifstofa-forseta",
      megaMenu: {
        columns: [
          {
            label: "Operations",
            links: [
              { label: "Office", href: "/presidency/skrifstofa-forseta" },
              { label: "Role", href: "/presidency/role" },
              { label: "Staff", href: "/presidency/staff" },
            ],
          },
          {
            label: "Orders & Symbols",
            links: [
              { label: "The Order of the Falcon", href: "/presidency/order-of-the-falcon" },
              { label: "Recipients", href: "/presidency/recipients" },
              { label: "Flag & Coat of Arms", href: "/presidency/flag-coat-of-arms" },
            ],
          },
          {
            label: "History of the Office",
            links: [
              { label: "Former Presidents", href: "/presidency/former-presidents" },
              { label: "2016-2024", href: "https://gudni.forseti.is/" },
              { label: "2000-2016", href: "https://olafur.forseti.is/" },
              { label: "Gifts & Artefacts", href: "/presidency/gifts-artefacts" },
            ],
          },
          {
            label: "Information",
            links: [
              { label: "Questions & Answers", href: "/presidency/questions-answers" },
              { label: "About this website", href: "/presidency/about-this-website" },
            ],
          },
        ],
        promoCards: [
          {
            title: "The First Female President",
            href: "/former-presidents/vigdis-finnbogadottir",
            image: {
              src: "https://cdn.sanity.io/images/hq90xi2r/production/a6419b17e9942d65f49cdbb02c2a5da00f344b3c-787x1030.png",
              alt: "Vigdís Finnbogadóttir",
            },
          },
          {
            title: "History of the Order of the Falcon",
            href: "/presidency/order-of-the-falcon",
            image: {
              src: "https://cdn.sanity.io/images/hq90xi2r/production/87ae5fa093fe861356a21207b4a6c0ed12dd520d-2362x1575.jpg",
              alt: "Chain of the Grand Cross",
            },
          },
        ],
      },
    },
  ],
  searchHref: "/search",
  footer: {
    heading: "The Presidency",
    headingAccent: "of Iceland",
    columns: [
      [
        { label: "The President", href: "/president/halla-tomasdottir" },
        { label: "Highlights", href: "/news" },
        { label: "The Residence", href: "/bessastadir" },
        { label: "Office", href: "/presidency/skrifstofa-forseta" },
      ],
      [
        { label: "Addresses & Speeches", href: "/president/speeches-writings" },
        { label: "Photo Gallery", href: "/president/photo-gallery" },
        { label: "The Order of the Falcon", href: "/presidency/order-of-the-falcon" },
        { label: "Q&A", href: "/presidency/questions-answers" },
        { label: "About this website", href: "/presidency/about-this-website" },
        {
          label: "Instagram",
          href: "https://www.instagram.com/hallatomas?igsh=OWFoOG53dW1vNjAy&utm_source=qr",
        },
      ],
    ],
    instagramHref:
      "https://www.instagram.com/hallatomas?igsh=OWFoOG53dW1vNjAy&utm_source=qr",
    copyright: "© The President of Iceland, 2026",
    officeName: "The President's Office",
    address: ["Sóleyjargata 1", "101 Reykjavík, Iceland"],
    email: "president@president.is",
  },
};
