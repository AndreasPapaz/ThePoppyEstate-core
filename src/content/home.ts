export type HomeContent = {
  hero: {
    quote: string;
    linkLabel: string;
    linkHref: string;
    image: { src: string; alt: string };
  };
  aboutUs: {
    heading: string;
    paragraphs: string[];
    images: { src: string; alt: string }[];
  };
  ourHistory: {
    heading: string;
    body: string;
    image: { src: string; alt: string };
  };
  whoWeAre: {
    heading: string;
    paragraphs: string[];
    image: { src: string; alt: string };
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
    lead: { name: string; image: { src: string; alt: string }, title: string}[];
    members: { name: string; image: { src: string; alt: string }, title: string }[];
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
  questionsAndAnswers: {
    heading: string;
    body: string;
    faqs: { question: string; answer: string }[];
    readyToBook: {
      heading: string;
      body: string;
      phone: string;
      email: string;
      checklistLinkLabel: string;
      checklistHref: string;
    };
  };
};

const heroImage = {
  src: "/assets/home/home.jpeg",
  alt: "Wedding ceremony at The Poppy Estate",
};

const spaceImage = {
  src: "/assets/home/east_profile.jpeg",
  alt: "The Poppy Estate building",
};

const historyImage = {
  src: "/assets/home/history-placeholder.jpeg",
  alt: "Historic image of The Poppy Estate warehouse",
};

const whoWeAreImage = {
  src: "/assets/home/who-we-are-placeholder.jpeg",
  alt: "Sasha and Andreas Papazafeiropoulos at The Poppy Estate",
};

export const home: HomeContent = {
  hero: {
    quote:
      "Historic elegance, reimagined for your most unforgettable moments.",
    linkLabel: "",
    linkHref: "/president/dialogue",

    image: heroImage,
  },
  aboutUs: {
    heading: "About Us",
    paragraphs: [
      "Our 1908 historic building was originally the International Harvester Manufacturing Company. It has been transformed into a 21st century luxury event space in the Chicago suburbs. At The Poppy Estate, we are dedicated to delivering exceptional experiences, timeless style, and seamless service in a setting that feels as special as the memories made within it.",
      "This historic building contrasted by modern design spares no expense in creating a luxurious event space boasting an extraordinary level of detail. Marble Hexagon flooring illuminates amidst customized handmade lighting, detailed millwork, and exposed brick walls. Hand chosen brass elements throughout give way to stunning wood columns, towering windows, and an incomparable glass overhead door flooding natural light into this 20,000 sq/ft space. The Poppy Estate creates unforgettable celebrations by offering a high-end, design-driven venue that blends Parisian elegance with modern sophistication, providing couples and clients with a beautifully curated space to host their most meaningful moments.",
    ],
    images:
     [
      { src: "/assets/home/lobby.jpeg", alt: "The Poppy Estate lobby" },
      { src: "/assets/home/alley1.jpeg", alt: "The Poppy Estate alley" },
      { src: "/assets/home/bar_view.jpg", alt: "The Poppy Estate bar" },
    ],
  },
  ourHistory: {
    heading: "Our History",
    body: "The 50,000 square foot warehouse we now call, The Poppy Estate was founded by Cyrus McCormick, who invented the first commercially successful mechanical reaper and in 1851 co-founded the McCormick Reaper Works, which would merge with the Deering Harvester Company in 1906 to become the International Harvester Corporation.",
    image: historyImage,
  },
  whoWeAre: {
    heading: "Who We Are",
    paragraphs: [
      "Sasha and Andreas Papazafeiropoulos purchased the estate, formerly known as Company 251, in May 2026 and soon after rebranded it as The Poppy Estate, bringing a fresh perspective to the space while preserving the character that has always made the venue special.",
      "The Poppy Estate is designed to be a home for life's most unforgettable moments. From weddings and corporate celebrations to community gatherings, the estate's purpose serves as a meaningful hub for Illinois charities. The couple had long held a quiet promise: when they one day had a platform of their own, they would use it to uplift others. With The Poppy Estate, that promise has become a reality.",
    ],
    image: whoWeAreImage,
  },
  theSpace: {
    heading: "The Space",
    paragraphs: [
      "Where historic character meets modern sophistication, The Poppy Estate offers a remarkable setting for celebrations of every kind. Once home to early 20th-century manufacturing, the estate has been thoughtfully transformed into a luxury event destination where original architectural details are balanced by refined, contemporary design.",
      "From weddings and milestone celebrations to corporate events, productions, exhibitions, concerts, and private gatherings, The Poppy Estate offers a versatile setting designed for unforgettable experiences.",
    ],
    image: spaceImage,
    amenities: {
      heading: "Amenities",
      items: [
        "20,000+ sq. ft. (2 floors / 10,000 sq.ft each) of flexible interior space",
        "Exclusive use of the venue for Ceremony and Reception",
        "Event manager on site",
        "Black cross back chairs",
        "Use of reception tables and bistro tables/chairs",
        "Lounge space",
        "Two grand marble bars",
        "Private bridal suite featuring an antique wood and marble 3 chair barber shop cabinet imported from Italy for entire bridal party to get ready together",
        "Private groom suite featuring tv, whiskey bar and vintage games",
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
    lead: [
      {
        name: "Rachel Adams",
        image: { src: "/assets/team/rachel_adams.jpeg", alt: "Rachel Adams" },
        title: "Director of Operations"
      },
      {
        name: "Ashley Bowling",
        image: { src: "/assets/team/ashley_bowling.jpeg", alt: "Ashley Bowling" },
        title: "Lead Wedding Coordinator",
      },
    ],
    members: [
      {
        name: "Ashton Harks",
        image: { src: "/assets/team/ashton_harks.jpeg", alt: "Ashton Harks" },
        title: "Wedding Coordinator",
      },
      {
        name: "Alyse Holzkopf",
        image: { src: "/assets/team/alyse_holzkopf.jpeg", alt: "Alyse Holzkopf" },
        title: "Wedding Coordinator",
      },
      {
        name: "Brenna Fitzpatrick",
        image: { src: "/assets/team/brenna_fitzpatrick.jpeg", alt: "Brenna Fitzpatrick" },
        title: "Wedding Coordinator",
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
  questionsAndAnswers: {
    heading: "Questions & Answers",
    body: "If you don't see an answer to your question, please reach out to us and we will get back to you as soon as possible. hello@thepoppyestate.com or 630-457-5581",
    faqs: [
      {
        question: "Can I get ready and dressed at The Poppy Estate?",
        answer:
          "The bridal suite is designed so that you and your bridal party can all get ready at the space together. Bring in your hair and makeup team or select from our list of preferred vendors that will do it right there for you.\n\nThe groom's suite features a large television, a stocked whiskey bar and vintage games.",
      },
      {
        question: "Do you have a preferred vendor list?",
        answer:
          "We work with incredible people who share the same aesthetic and vision as we do. Contact our event manager for our preferred vendor packet.",
      },
      {
        question: "Is smoking allowed?",
        answer: "We do not allow smoking inside, but we have an outside cocktail area.",
      },
      {
        question: "Can I have rehearsal and rehearsal dinner at The Poppy Estate?",
        answer:
          "Absolutely, if no event is scheduled for the day prior. Please see rates on payment and policy page.",
      },
      {
        question: "When can we start setting up?",
        answer:
          "Setup time begins at the start of your contracted rental time. Additional time can always be added, contact our event manager to learn more.",
      },
      {
        question: "How can we see the space before booking?",
        answer:
          "Please contact our event manager to set up a tour of the space as it is by appointment only.",
      },
      {
        question: "What is your capacity?",
        answer: "We can host 450+ sit down reception, 750+ for a cocktail style reception",
      },
      {
        question: "Do you have heating and air conditioning?",
        answer: "Yes! we have brand new units.",
      },
      {
        question: "Can we only rent 1 floor?",
        answer: "Yes, contact our event manager to learn more.",
      },
      {
        question: "Do you take commission from other vendors?",
        answer: "Absolutely not! We support all of our small businesses and local vendors",
      },
      {
        question: "What is required for clean up?",
        answer:
          "All rentals and décor brought in from client must be removed at the end of your event, unless other arrangements are made with the event manager.",
      },
      {
        question: "Can I provide my own alcohol / food?",
        answer:
          "Yes, you can add the \"BYOB\" package to your event. All alcohol must be served by The Poppy Estate. We do allow outside catering for a small fee, connect with our events team to learn more.",
      },
      {
        question: "Do I have to hire someone from your preferred vendor list?",
        answer:
          "You are welcome to select any vendors you choose. We love and recommend our preferred vendors as they are experts in our space.",
      },
      {
        question: "Can we bring in our own décor?",
        answer:
          "Yes, but the décor should get approval from our event manager. Once approved, client will be responsible for setting it up, tearing it down and having it out by the time your rental is over. Any damage to the property will be billed to you after the event.",
      },
    ],
    readyToBook: {
      heading: "Ready to Book?",
      body:
        "We'd love to help you book your dream event, we're sure you have questions and we're here to help.",
      phone: "630-457-5581",
      email: "hello@thepoppyestate.com",
      checklistLinkLabel: "Wedding Checklist",
      checklistHref:
        "https://static1.squarespace.com/static/597f6b68579fb3656e302eb9/t/5af4a87f352f53789b8c60a7/1525983360102/Wedding+Checklist.pdf",
    },
  },
};
