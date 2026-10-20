export type VendorLink = {
  label: string;
  href: string;
  kind: "email" | "website" | "instagram" | "phone";
};

export type PreferredVendor = {
  name: string;
  category: string;
  description: string;
  images: { src: string; alt: string }[];
  links: VendorLink[];
};

export const preferredVendorsContent = {
  eyebrow: "The Poppy Estate",
  heading: "Preferred Vendors",
  year: "2026",
  introduction:
    "At The Poppy Estate, we are dedicated to delivering exceptional experiences, timeless style, and seamless service in a setting that feels as special as the memories made within it. That commitment extends beyond our venue to the talented professionals we choose to recommend.",
  introductionSecondary:
    "Rather than overwhelming you with a long list, we have intentionally curated a small group of trusted partners who consistently provide exceptional service and know our venue inside and out. These relationships are built on years of collaboration, shared standards of excellence, and a genuine passion for creating unforgettable celebrations.",
  vendors: [
    {
      name: "Moveable Feast",
      category: "Catering",
      images: [
        { src: "/assets/vendors/moveable_feast/Preferred Vendor Packet.png", alt: "Moveable Feast tiered wedding appetizer display" },
        { src: "/assets/vendors/moveable_feast/Preferred Vendor Packet (1).png", alt: "Moveable Feast wedding buffet with seasonal dishes" },
        { src: "/assets/vendors/moveable_feast/Preferred Vendor Packet copy.png", alt: "Moveable Feast team serving wedding guests" },
      ],
      description:
        "Moveable Feast is a neighborhood café and catering company that brings artisanal cooking from their kitchen to your table. They responsibly source ingredients from local growers and their own farm to create seasonal salads, sandwiches, meals to-go, and fresh-baked pastries. Every dish is made from scratch daily using foods that nourish and support the community, with non-inflammatory oils and no MSG or refined sugars.",
      links: [
        { label: "info@moveablefeastandco.com", href: "mailto:info@moveablefeastandco.com", kind: "email" },
        { label: "moveablefeastandco.com", href: "https://moveablefeastandco.com", kind: "website" },
        { label: "@moveablefeastco", href: "https://www.instagram.com/moveablefeastco", kind: "instagram" },
        { label: "(630) 868-3777", href: "tel:+16308683777", kind: "phone" },
      ],
    },
    {
      name: "Mary Rose Photography",
      category: "Photography",
      images: [
        { src: "/assets/vendors/mary_rose_photography/Preferred Vendor Packet.png", alt: "Bride with her wedding party photographed by Mary Rose Photography" },
        { src: "/assets/vendors/mary_rose_photography/Preferred Vendor Packet (1).png", alt: "Bride photographed outside The Poppy Estate" },
      ],
      description:
        "Mary Rose has been living her dream since 2013, spending her weekends laughing and crying at weddings. The Poppy Estate has long been one of her favorite venues, and she has joyfully captured many incredible moments and beautiful details here over the years. Reach out to see if she is available to photograph your wedding day.",
      links: [
        { label: "maryrose@maryrosephotos.com", href: "mailto:maryrose@maryrosephotos.com", kind: "email" },
        { label: "maryrosephotos.com", href: "https://www.maryrosephotos.com", kind: "website" },
        { label: "The Luxe Photo Booth", href: "https://www.theluxephotobooth.com", kind: "website" },
        { label: "@mary_rose_photography", href: "https://www.instagram.com/mary_rose_photography", kind: "instagram" },
      ],
    },
    {
      name: "Joe Nowak Photography",
      category: "Photography",
      images: [
        { src: "/assets/vendors/joe_nowak/Preferred Vendor Packet.png", alt: "Newlyweds celebrating during their outdoor ceremony" },
        { src: "/assets/vendors/joe_nowak/Preferred Vendor Packet (1).png", alt: "Newlyweds sharing a quiet moment beneath green foliage" },
        { src: "/assets/vendors/joe_nowak/Preferred Vendor Packet (2).png", alt: "Candlelit wedding reception photographed by Joe Nowak Photography" },
      ],
      description:
        "For more than 20 years, Joe has photographed weddings with a simple goal: create incredible photographs while making the experience feel effortless. With more than 500 weddings behind him, Joe is known for being the calm in the room. He knows when to step in, when to step back, and how to capture the moments that matter without making you feel like you are constantly being photographed.",
      links: [
        { label: "www.joenowakphotography.com", href: "https://www.joenowakphotography.com", kind: "website" },
        { label: "joenowakphotography@gmail.com", href: "mailto:joenowakphotography@gmail.com", kind: "email" },
        { label: "312.860.4576", href: "tel:+13128604576", kind: "phone" },
        { label: "@joenowakphotography.com", href: "https://www.instagram.com/joenowakphotography.com", kind: "instagram" },
      ],
    },
    {
      name: "Viator Coffee Co.",
      category: "Coffee",
      images: [
        { src: "/assets/vendors/viator_coffee_co/Preferred Vendor Packet.png", alt: "Viator Coffee Co. latte with custom wedding artwork" },
        { src: "/assets/vendors/viator_coffee_co/Preferred Vendor Packet (1).png", alt: "Viator Coffee Co. mobile coffee cart at The Poppy Estate" },
      ],
      description:
        "Viator's professional baristas serve a coffee menu curated just for your celebration. Coffee Cart packages offer bottomless craft coffee, freshly roasted for your event, including espresso, cappuccino, latte, cortado, Americano, matcha latte, chai latte, cold brew, and more - all hot or iced. Wedding packages also include a complimentary drink tasting.",
      links: [
        { label: "austin@viatorcoffeeco.com", href: "mailto:austin@viatorcoffeeco.com", kind: "email" },
        { label: "Coffee cart packages", href: "https://www.viatorcoffeeco.com/coffee-cart", kind: "website" },
        { label: "(847) 380-6046", href: "tel:+18473806046", kind: "phone" },
      ],
    },
    {
      name: "Maggie Speaks, Inc.",
      category: "Music",
      images: [
        { src: "/assets/vendors/maggie_speaks_inc/Preferred Vendor Packet.png", alt: "Maggie Speaks wedding band" },
        { src: "/assets/vendors/maggie_speaks_inc/Preferred Vendor Packet (1).png", alt: "Maggie Speaks trumpet player performing outdoors" },
        { src: "/assets/vendors/maggie_speaks_inc/Preferred Vendor Packet (2).png", alt: "Maggie Speaks musicians performing at a reception" },
      ],
      description:
        "Maggie Speaks updates the traditional wedding-band experience, blending sophistication and high energy so every moment - from the first dance to the last song - is unforgettable. Choose the playlist, band size, and number of singers to fit your vision, or work with the team to create something completely bespoke.",
      links: [
        { label: "nicole@magevents.com", href: "mailto:nicole@magevents.com", kind: "email" },
        { label: "maggiespeaks.com", href: "https://www.maggiespeaks.com", kind: "website" },
        { label: "@maggiespeaksband", href: "https://www.instagram.com/maggiespeaksband", kind: "instagram" },
        { label: "(815) 230-3770 ext. 704", href: "tel:+18152303770;ext=704", kind: "phone" },
      ],
    },
    {
      name: "Music by Design",
      category: "Music",
      images: [
        { src: "/assets/vendors/music_by_design/Preferred Vendor Packet.png", alt: "Wedding guests dancing to Music by Design" },
        { src: "/assets/vendors/music_by_design/Preferred Vendor Packet (1).png", alt: "Newlyweds sharing their first dance" },
        { src: "/assets/vendors/music_by_design/Preferred Vendor Packet (2).png", alt: "Music by Design DJ equipment during a reception" },
      ],
      description:
        "For over 30 years, couples have trusted Music by Design to craft seamless, stress-free celebrations where every moment feels intentional, personal, and perfectly timed. From custom first-dance mixes and curated playlists to a high-energy reception, the team brings each couple's vision to life with precision and care.",
      links: [
        { label: "hello@mbdstudios.com", href: "mailto:hello@mbdstudios.com", kind: "email" },
        { label: "musicbydesign.com", href: "https://musicbydesign.com", kind: "website" },
        { label: "@musicbydesign", href: "https://www.instagram.com/musicbydesign", kind: "instagram" },
        { label: "(630) 549-7782", href: "tel:+16305497782", kind: "phone" },
      ],
    },
    {
      name: "Matt Peterson",
      category: "Music",
      images: [
        { src: "/assets/vendors/matt_peterson/Preferred Vendor Packet.png", alt: "Pianist Matt Peterson" },
        { src: "/assets/vendors/matt_peterson/Preferred Vendor Packet (1).png", alt: "Matt Peterson performing at a grand piano" },
        { src: "/assets/vendors/matt_peterson/Preferred Vendor Packet (2).png", alt: "Matt Peterson performing under a spotlight" },
      ],
      description:
        "Matt Peterson is a Chicago-area pianist with over two decades of professional performance experience spanning jazz, classical, contemporary, and everything in between. With a master's in jazz piano from Indiana University, he brings versatility, musicality, and genuine warmth to every event, with a goal of making your wedding sound exactly as you imagined it.",
      links: [
        { label: "matt@mattpetersonmusic.com", href: "mailto:matt@mattpetersonmusic.com", kind: "email" },
        { label: "mattpetersonmusic.com", href: "https://mattpetersonmusic.com", kind: "website" },
        { label: "@mattpetersonmusic", href: "https://www.instagram.com/mattpetersonmusic", kind: "instagram" },
        { label: "(206) 818-8094", href: "tel:+12068188094", kind: "phone" },
      ],
    },
    {
      name: "Harpist Nichole Young",
      category: "Music",
      images: [
        { src: "/assets/vendors/harpist_nichole_young/Preferred Vendor Packet.png", alt: "Nichole Young performing harp at The Poppy Estate" },
        { src: "/assets/vendors/harpist_nichole_young/Preferred Vendor Packet (1).png", alt: "Portrait of harpist Nichole Young" },
        { src: "/assets/vendors/harpist_nichole_young/Preferred Vendor Packet (2).png", alt: "Nichole Young seated beside her harp" },
      ],
      description:
        "Nichole Young is a professional harpist who loves making special occasions feel magical. With a master's degree in Harp Performance from Northwestern University and decades of experience, she brings elegance, warmth, and a little fun to every occasion. Her repertoire ranges from classical melodies and jazz to movie themes, classic rock, and today's favorite pop songs.",
      links: [
        { label: "nichole.harpmelodies@gmail.com", href: "mailto:nichole.harpmelodies@gmail.com", kind: "email" },
        { label: "harpmelodies.com", href: "https://www.harpmelodies.com", kind: "website" },
        { label: "(815) 440-4099", href: "tel:+18154404099", kind: "phone" },
      ],
    },
    {
      name: "Candlelit",
      category: "Décor",
      images: [
        { src: "/assets/vendors/candlelit/Preferred Vendor Packet.png", alt: "Candlelit wedding table glowing with candlelight" },
        { src: "/assets/vendors/candlelit/Preferred Vendor Packet (1).png", alt: "Candle-lined ceremony aisle at The Poppy Estate" },
        { src: "/assets/vendors/candlelit/Preferred Vendor Packet (2).png", alt: "Outdoor dinner table illuminated by candles" },
      ],
      description:
        "Soft glow, warmth, and intimacy are at the heart of Candlelit. The team designs and installs candle-forward celebrations, using candlelight as a primary design element throughout the space. Every placement is intentional, from reception tables and ceremony spaces to architectural focal points, with design, setup, venue requirements, and removal all handled for you.",
      links: [
        { label: "hello@candlelitdesign.com", href: "mailto:hello@candlelitdesign.com", kind: "email" },
        { label: "candlelitdesign.com", href: "https://candlelitdesign.com", kind: "website" },
        { label: "(630) 895-4774", href: "tel:+16308954774", kind: "phone" },
      ],
    },
    {
      name: "Alpha-Lit Marquee Letters",
      category: "Décor",
      images: [
        { src: "/assets/vendors/alpha_lit_marquee_letters/Preferred Vendor Packet.png", alt: "Newlyweds dancing beside illuminated marquee letters" },
        { src: "/assets/vendors/alpha_lit_marquee_letters/Preferred Vendor Packet copy.png", alt: "Custom Alpha-Lit marquee letters at a wedding reception" },
        { src: "/assets/vendors/alpha_lit_marquee_letters/Preferred Vendor Packet copy 2.png", alt: "Personalized marquee letters glowing at The Poppy Estate" },
      ],
      description:
        "Alpha-Lit Chicago is a locally owned and operated premier marquee-letter business offering high-quality letters, numbers, and symbols. As part of a family of companies serving more than 100 cities throughout the United States and Canada, the team can help bring nearly any custom marquee idea to life.",
      links: [
        { label: "chicago@alphalitletters.com", href: "mailto:chicago@alphalitletters.com", kind: "email" },
        { label: "Alpha-Lit Chicago", href: "https://alphalitletters.com/chicago", kind: "website" },
        { label: "@alphalitchicago", href: "https://www.instagram.com/alphalitchicago", kind: "instagram" },
      ],
    },
    {
      name: "Atmosphere Events",
      category: "Décor",
      images: [
        { src: "/assets/vendors/atmosphere_events/Preferred Vendor Packet.png", alt: "Floral seating display designed by Atmosphere Events" },
        { src: "/assets/vendors/atmosphere_events/Preferred Vendor Packet (1).png", alt: "Newlyweds beneath a floral installation" },
        { src: "/assets/vendors/atmosphere_events/Preferred Vendor Packet (2).png", alt: "Reception ceiling installation with greenery and disco balls" },
      ],
      description:
        "Through thoughtful collaboration, Atmosphere Events Group transforms ideas into artful, captivating experiences. From early concept to the final reveal, every detail is designed, produced, and installed with floral artistry, innovative lighting, and curated décor leading the way. Each space is shaped to feel deeply personal and visually striking.",
      links: [
        { label: "hello@aegproduction.com", href: "mailto:hello@aegproduction.com", kind: "email" },
        { label: "aegproduction.com", href: "https://aegproduction.com", kind: "website" },
        { label: "@atmosphereeventsgroup", href: "https://www.instagram.com/atmosphereeventsgroup", kind: "instagram" },
        { label: "(847) 378-8586", href: "tel:+18473788586", kind: "phone" },
      ],
    },
    {
      name: "Floral Wonders",
      category: "Floral",
      images: [
        { src: "/assets/vendors/floral_wonders/Preferred Vendor Packet.png", alt: "Colorful wedding tablescape by Floral Wonders" },
        { src: "/assets/vendors/floral_wonders/Preferred Vendor Packet (1).png", alt: "Wedding ceremony floral arrangements by Floral Wonders" },
        { src: "/assets/vendors/floral_wonders/Preferred Vendor Packet (2).png", alt: "Bride and wedding party holding floral bouquets" },
      ],
      description:
        "Floral Wonders creates distinctive floral and event designs for weddings, corporate events, and celebrations of every kind. Beyond floral design, the team offers planning and coordination, lighting, draping, furniture and décor rental, and custom graphic elements, creating a cohesive look and feel from concept to celebration.",
      links: [
        { label: "sales@floral-wonders.com", href: "mailto:sales@floral-wonders.com", kind: "email" },
        { label: "floral-wonders.com", href: "https://floral-wonders.com", kind: "website" },
        { label: "@floralwondersevents", href: "https://www.instagram.com/floralwondersevents", kind: "instagram" },
        { label: "(630) 945-6559", href: "tel:+16309456559", kind: "phone" },
      ],
    },
    {
      name: "Bloome",
      category: "Floral",
      images: [
        { src: "/assets/vendors/bloome/Preferred Vendor Packet.png", alt: "Soft pink floral arrangements by Bloome" },
        { src: "/assets/vendors/bloome/Preferred Vendor Packet (1).png", alt: "Bloome table flowers and taper candles" },
        { src: "/assets/vendors/bloome/Preferred Vendor Packet (2).png", alt: "Dramatic hanging floral installation by Bloome" },
      ],
      description:
        "Head over heels for their clients and crazy for creativity, the Bloome team knows flowers - and, more importantly, knows how to listen so the blooms sing each couple's unique song. Bloome accepts a limited number of events each year in order to provide deliberate design and intentional service.",
      links: [
        { label: "info@thebloome.com", href: "mailto:info@thebloome.com", kind: "email" },
        { label: "thebloome.com", href: "https://www.thebloome.com", kind: "website" },
      ],
    },
    {
      name: "Golden Floral Studio",
      category: "Floral",
      images: [
        { src: "/assets/vendors/golden_floral_studio/Preferred Vendor Packet.png", alt: "Champagne cart styled by Golden Floral Studio" },
        { src: "/assets/vendors/golden_floral_studio/Preferred Vendor Packet copy.png", alt: "Colorful floral vignette by Golden Floral Studio" },
        { src: "/assets/vendors/golden_floral_studio/Preferred Vendor Packet (3).png", alt: "Greenery and disco ball installation by Golden Floral Studio" },
      ],
      description:
        "Golden Floral Studio transforms weddings and special events into beautiful, unforgettable experiences. Believing that flowers tell a story and bring a vision to life, the studio curates thoughtful designs that reflect each client's style and personality, with an eye for detail, a passion for creativity, and a commitment to excellence.",
      links: [
        { label: "Golden Floral Studio", href: "https://goldenfloralstudio.weebly.com", kind: "website" },
        { label: "@goldenfloralstudio", href: "https://www.instagram.com/goldenfloralstudio", kind: "instagram" },
      ],
    },
    {
      name: "Dream Event Creations",
      category: "Planning",
      images: [
        { src: "/assets/vendors/dream_event_creations/Preferred Vendor Packet.png", alt: "Wedding details styled by Dream Event Creations" },
        { src: "/assets/vendors/dream_event_creations/Preferred Vendor Packet (1).png", alt: "Memorial candle display planned by Dream Event Creations" },
        { src: "/assets/vendors/dream_event_creations/Preferred Vendor Packet (2).png", alt: "Wedding escort cards arranged by Dream Event Creations" },
      ],
      description:
        "Dream Event Creations customizes packages to suit each client's needs and budget while easing the stress of planning. Founder Shelly Gunnison has spent more than 25 years planning and hosting events for community organizations and local universities, including celebrations, banquets, golf outings, and fundraisers.",
      links: [
        { label: "shellyg.dec@comcast.net", href: "mailto:shellyg.dec@comcast.net", kind: "email" },
        { label: "(312) 405-3731", href: "tel:+13124053731", kind: "phone" },
      ],
    },
    {
      name: "Waterlemon",
      category: "Little Guests Wedding Club",
      images: [
        { src: "/assets/vendors/waterlemon/Preferred Vendor Packet.png", alt: "Waterlemon art activity for young wedding guests" },
        { src: "/assets/vendors/waterlemon/Preferred Vendor Packet (1).png", alt: "Children enjoying a Waterlemon wedding celebration" },
        { src: "/assets/vendors/waterlemon/Preferred Vendor Packet (2).png", alt: "Young wedding guests playing in a curated Waterlemon space" },
      ],
      description:
        "Waterlemon brings beautiful design, thoughtful details, and kid-approved fun to weddings. The Waterlemon Wedding Club transforms a dedicated space into a curated children's experience with styled tables, crafts, imaginative play, games, a bouncy house, and kid-friendly meals - all managed by the Waterlemon team from setup to cleanup.",
      links: [
        { label: "waterlemonkids.com", href: "https://www.waterlemonkids.com", kind: "website" },
        { label: "@waterlemon_kids", href: "https://www.instagram.com/waterlemon_kids", kind: "instagram" },
        { label: "(708) 286-6747", href: "tel:+17082866747", kind: "phone" },
      ],
    },
  ] satisfies PreferredVendor[],
};
