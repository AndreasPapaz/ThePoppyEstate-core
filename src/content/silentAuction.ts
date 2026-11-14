export type SilentAuctionLot = {
  title: string;
  startingBid: string;
  paragraphs: string[];
  image: { src: string; alt: string };
};

export type SilentAuctionContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  lots: SilentAuctionLot[];
};

export const silentAuction: SilentAuctionContent = {
  eyebrow: "Silent Auction",
  heading: "Bid on an unforgettable experience",
  intro:
    "Explore an exclusive collection of experiences offered through The Poppy Estate silent auction. Each offering can be applied toward a celebration, portrait session, or live performance, with starting bids listed below.",
  lots: [
    {
      title: "The Poppy Estate Gift Certificate",
      startingBid: "$2,500",
      paragraphs: [
        "Make your next unforgettable event even more special with a $3,000 gift certificate to The Poppy Estate, a beautiful wedding and event venue designed for life's most memorable moments.",
        "Whether you're planning the wedding of your dreams, a milestone celebration, or another special gathering, this generous gift certificate can be applied toward any booking at The Poppy Estate!",
        'From saying "I do" to celebrating life\'s biggest moments, let The Poppy Estate help bring your vision to life.',
      ],
      image: {
        src: "/assets/silent-auction/poppy-estate-gift-certificate.jpg",
        alt: "The Poppy Estate $3,000 gift certificate",
      },
    },
    {
      title: "Photography Session",
      startingBid: "$500",
      paragraphs: [
        "Capture life's beautiful memories with a professional photography session by Katie Michelle Photography.",
        "Whether you're celebrating a special milestone, updating family photos, capturing precious moments with your little ones, or simply wanting beautiful portraits to treasure, this photography experience is the perfect opportunity to create lasting memories.",
        "With a creative eye and a passion for capturing meaningful moments, Katie Michelle will help turn your special memories into beautiful keepsakes.",
      ],
      image: {
        src: "/assets/silent-auction/katie-michelle-photography.jpg",
        alt: "Katie Michelle Photography gift certificate",
      },
    },
    {
      title: "The Candlelit Gathering Gift Certificate",
      startingBid: "$500",
      paragraphs: [
        "Transform your next special occasion into a breathtaking experience with a $650 gift certificate to Candlelit!",
        "Specializing in beautifully curated candlelight installations, Candlelit brings warmth, romance, and sophistication to life's most memorable celebrations.",
        "From dreamy weddings and intimate gatherings to elegant milestone celebrations, Candlelit creates a magical atmosphere through thoughtfully placed candles and layers of soft, glowing light.",
        "With an eye for detail and a commitment to beauty, professionalism, and care, Candlelit helps set the perfect mood for an unforgettable event.",
      ],
      image: {
        src: "/assets/silent-auction/candlelit-design-gift-card.jpg",
        alt: "Candlelit Design gift card",
      },
    },
    {
      title: "Joe Nowak Photography Session",
      startingBid: "$500",
      paragraphs: [
        "Enjoy a professional photography session designed to preserve the smiles, connections, and special memories that mean the most.",
        "Whether you're updating family portraits, celebrating a milestone, capturing precious moments with loved ones, or simply creating beautiful keepsakes, this photography experience is the perfect opportunity to make memories that will last a lifetime.",
      ],
      image: {
        src: "/assets/silent-auction/joe-nowak-photography.jpg",
        alt: "Joe Nowak Photography gift card",
      },
    },
    {
      title: "Matt Peterson on Piano",
      startingBid: "$350",
      paragraphs: [
        "Elevate your next special occasion with two hours of beautiful live piano music performed by Matt Peterson, a multi-award-winning composer and accomplished classical and jazz pianist.",
        "An accompanist for Chicago's prestigious Joffrey Ballet, Matt has performed alongside world-renowned musicians and entertained corporate clients including Google, Goldman Sachs, and Netflix.",
      ],
      image: {
        src: "/assets/silent-auction/matt-peterson-piano.jpg",
        alt: "Matt Peterson on Piano gift card",
      },
    },
  ],
};
