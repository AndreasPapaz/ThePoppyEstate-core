export type HomeContent = {
  hero: {
    quote: string;
    linkLabel: string;
    linkHref: string;
    image: { src: string; alt: string };
  };
  aboutUs: {
    heading: string;
    body: string;
    images: { src: string; alt: string }[];
  };
  theSpace: {
    heading: string;
    paragraphs: string[];
    image: { src: string; alt: string };
    amenities: {
      heading: string;
      items: string[];
    };
  };
  ourTeam: {
    heading: string;
    lead: { name: string; image: { src: string; alt: string } };
    members: { name: string; image: { src: string; alt: string } }[];
  };
  getDirections: {
    heading: string;
    intro: string;
    directions: string;
    airportNote: string;
    mapAddress: string;
    hotelsHeading: string;
    hotels: { name: string; distance: string; phone: string }[];
  };
};

const heroImage = {
  src: "/assets/home/bride1.jpeg",
  alt: "Bride at The Poppy Estate",
};

const spaceImage = {
  src: "/assets/home/east_profile.jpeg",
  alt: "The Poppy Estate building",
};

export const home: HomeContent = {
  hero: {
    quote:
      "Luxury experiences that celebrate life & the joy of entertaining",
    linkLabel: "Aurora, IL",
    linkHref: "/president/dialogue",
    image: heroImage,
  },
  aboutUs: {
    heading: "About Us",
    body: "The 1908 historic building that was originally the international harvester manufacturing co. has been transformed into a 21st century luxury event space in the Chicago suburbs. Created by Co. 251 - a one of a kind, transformable, luxury event space designed to exist as is or to be specifically curated to meet the aesthetic of any event.",
    images: [
      { src: "/assets/home/lobby.jpeg", alt: "The Poppy Estate lobby" },
      { src: "/assets/home/alley1.jpeg", alt: "The Poppy Estate alley" },
      { src: "/assets/home/bar_view.jpg", alt: "The Poppy Estate bar" },
    ],
  },
  theSpace: {
    heading: "The Space",
    paragraphs: [
      "An early 20th century tractor manufacturing building turned 21st century modern luxury event space. We personally craft a luxury experience that celebrates life and the joy of entertaining.",
      "COMPANY 251 is an event venue open to private events, concerts, productions, exhibition and corporate and private parties. Featuring architectural and historical elements merging past with present and historic with modern making this an unparalleled backdrop for your event.",
    ],
    image: spaceImage,
    amenities: {
      heading: "Amenities",
      items: [
        "20,000 sq. ft. (2 floors / 10,000 sq.ft each) of flexible interior space",
        "Exclusive use of the venue for Ceremony + Reception",
        "Event manager on site",
        "Black cross back chairs",
        "Use of reception tables + bistro tables/chairs",
        "Lounge space",
        "Two grand marble bars",
        "Private bridal suite featuring an antique wood and marble 3 chair barber shop cabinet imported from Italy for entire bridal party to get ready together",
        "Private groom suite featuring tv, whiskey bar + vintage games",
        "Wifi",
        "Coat check",
        "Elevator use",
        "Private parking lot available to bride and grooms immediate family or for handicap and elderly drivers.",
        "Ample public parking",
        "Capacity // 350 seated",
      ],
    },
  },
  ourTeam: {
    heading: "Our Team",
    lead: {
      name: "Rachel Adams",
      image: { src: "/assets/team/rachel_adams.jpeg", alt: "Rachel Adams" },
    },
    members: [
      {
        name: "Ashley Bowling",
        image: { src: "/assets/team/ashley_bowling.jpeg", alt: "Ashley Bowling" },
      },
      {
        name: "Ashton Harks",
        image: { src: "/assets/team/ashton_harks.jpeg", alt: "Ashton Harks" },
      },
      {
        name: "Alyse Holzkopf",
        image: { src: "/assets/team/alyse_holzkopf.jpeg", alt: "Alyse Holzkopf" },
      },
      {
        name: "Brenna Fitzpatrick",
        image: { src: "/assets/team/brenna_fitzpatrick.jpeg", alt: "Brenna Fitzpatrick" },
      },
    ],
  },
  getDirections: {
    heading: "Get Directions",
    intro:
      "We are located in the center of the middle avenue historic district in downtown Aurora, IL, only minutes from the metra + I-88",
    directions:
      "I-190 E to I-294 S to I-88 W to IL 31 toward Aurora/Batavia exit / Left on Gale Street / Left on River Street",
    airportNote: "Chicago O'Hare Airport - 50 minutes / 38 miles",
    mapAddress: "251 South River Street, Aurora, IL 60506",
    hotelsHeading: "Nearby Hotels",
    hotels: [
      { name: "Holiday Inn Express & Suites Aurora / Naperville", distance: "1.2 miles away", phone: "877-859-5095" },
      { name: "Hampton Inn + Suites", distance: "4.9 miles away", phone: "630-907-2600" },
      { name: "Hotel Indigo", distance: "9.4 miles away", phone: "630-778-9676" },
      { name: "Hotel Arista at City Gate", distance: "11 miles away", phone: "630-579-4100" },
      { name: "Hilton Garden Inn Naperville / Warrenville", distance: "12.3 miles away", phone: "630-393-3223" },
      { name: "Hyatt House", distance: "13 miles away", phone: "630-836-2960" },
      { name: "Hyatt Place", distance: "13 miles away", phone: "630-836-9800" },
    ],
  },
};
