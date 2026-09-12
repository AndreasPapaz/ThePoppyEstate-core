export type ApplauseContent = {
  hero: { src: string; alt: string };
  heading: string;
  testimonials: { quote: string; author: string }[];
  reviewsCta: { label: string; href: string };
  awardsHeading: string;
  awards: { name: string; href: string; image: { src: string; alt: string } }[];
};

export const applauseContent: ApplauseContent = {
  hero: {
    src: "/assets/home/party.jpeg",
    alt: "Newlyweds dancing under disco balls at The Poppy Estate",
  },
  heading: `Kind words from those who said "I Do"`,
  testimonials: [
    {
      quote:
        `From start to finish, Company 251 was an amazing choice for our special wedding day. From the very first tour of the venue, we had a very enjoyable experience and felt very confident choosing them. The communication with staff, specifically Rachel, once we booked was fantastic! Every little question was answered and there was constant communication from day one. Food was delicious, catering staff was fantastic, bartenders were friendly. We received so many compliments from our guests about the venue, the food, the desserts, the decor. We were also very impressed with how flawlessly the day went, transitioning from ceremony, cocktail hour, to reception, everything went off without a single stressor. Even at the end of the evening, our day of coordinator Ashley, gathered and packed up all our decor and made sure we didn't forget anything! My husband and I were just throughly impressed with everything that this venue offered us & we are still beaming with happiness!`,
      author: "Natlie & Jeff",
    },
    {
      quote:
        `From the very beginning, Company 251 felt like the perfect place to host our wedding. Rachel was incredibly responsive and helpful throughout the entire planning process. The venue itself is stunning. It has a both classical and modern feel which is exactly what we were looking for. Our day-of coordinator, Ashton, was absolutely phenomenal. She went above and beyond, handling every little detail—from setting out our place cards and favors to surprising us with cocktails right after the ceremony so we could take a quiet moment together before joining our guests. She also made sure all of our vendors were cared for so that we could enjoy our day without worry. The food was another one of the reasons we chose Company 251 in the first place. We found that many venues stick to more "traditional" menus and Company 251 offered a few extra creative options that we felt were more in line with us! And all of the serving staff/bartenders were amazing too. We couldn't be happier with our experience and wholeheartedly recommend Company 251 to any couple looking for a beautiful, well-run venue that makes your wedding day unforgettable!`,
      author: "Alicia & Jake",
    },
    {
      quote:
        `Me and my wife just hosted an event here and it was everything we could've asked for. Food was amazing, Staff was very accommodating and also helped us set up and clean up at the end. If you're looking for a venue this is the one no doubt`,
      author: "Sherina & Jamir",
    },
    {
      quote:
        `From the moment I spoke with our planner Rachel, I knew this venue was the one. This venue is stunning but the people here truly made this experience so special and easy. They cared and attention to detail and guidance on the planning process was wonderful. The food was amazing— catered by Moveable Feast & Co…we got so many compliments from our guests and of course had to visit the restaurant leading up to the wedding to get more! Day of the wedding of course comes with challenges but Brenna our day of coordinator took charge and made sure the day was perfect. From the beauty of the venue, the great food, ease with vendors & support from the team — our special day was perfect.`,
      author: "Kassandra & Jake",
    },
    {
      quote:
        `Company 251 was everything and more that I dreamed of for my wedding day! Each and every detail was tailored to the couple and their preferences. The entire staff was so easy to work with, communicated quickly, and brought my visions to life. Guests LOVED how unique the space was, the layout, and how yummy the food was!! I would highly recommend doing a walk through of the venue and trust me- you'll fall in love !`,
      author: "Katie & Collin",
    },
    {
      quote:
        `We hosted our parents' 50th wedding anniversary at Company 251, and it couldn't have gone more smoothly. From the initial planning meetings to the final walk-through, the staff was knowledgeable, attentive, and incredibly welcoming. The space is expansive and offered the perfect blank canvas for our vision. We featured (3) mini documentaries of our parent's marriage on the screens, and hosted a brunch that included standout dishes like the deep-dish quiche and an unforgettable dessert spread of brownies and krispy swirls. The entire event flowed seamlessly, thanks in large part to the professionalism of the Company 251 team and Moveable Feast. The bar and champagne cart were definite highlights, and our parents are still raving about the day. Highly recommend this venue for anyone looking to create a memorable event.`,
      author: "Nicole Newsome",
    },
    {
      quote:
        `Company 251 has been my dream wedding venue for years! From the moment we entered the venue, we knew it was where we wanted to have our wedding. Emily, the wedding coordinator worked so hard to make our vision come to life, and no detail was left unplanned. Any email or call I made was responded to almost immediately, so I always felt at ease with planning. Everyone told us how beautiful everything was, AND how incredible the food was. You will not find a better quality of service, friendlier staff, or more attention to detail anywhere else! Can't praise them enough. Thank you Emily and Company 251 for everything, down to the smallest, most thoughtful details. You will always have a special place in our hearts!`,
      author: "Tiffany & Tyler",
    },
    {
      quote:
        `We recently celebrated our wedding reception at Company 251 and am still in awe of how everything came together. My husband and I were so impressed with the space, staff, and food. Emily, the event director and our day of coordinator was an absolute dream to work with. She made everything go seamlessly so that we could fully enjoy our reception and took care of everything. She is super knowledgeable, responsive to any question, and goes above and beyond at every point of your wedding! On another note, the food is incredible and our guests were so impressed with the presentation and how tasty everything was. The space is gorgeous - I wish we could relive this day and we would recommend this space for anyone getting married in the Chicago suburbs!`,
      author: "Lauren & Dave",
    },
    {
      quote:
        `This venue is the complete package. Not only is the venue unique, modern, rustic, minimal, and breath-taking - but their catering company, Moveable Feast Co., is some of the best tasting food I have ever had. One of our biggest compliments from our guests was how unique the venue was and the food! Company 251 made our lives so easy this past year and worked with all of our vendors to make our day run as smooth as possible. Emily and Chrissy were incredible to work with throughout the planning process! It was the best day of our lives and we are forever grateful to have found this gem. It is pure magic.`,
      author: "Shelby & Will",
    },
    {
      quote:
        `When my Husband and I were planning our wedding, we decided that the most important thing (behind our vows!) was to pick the right team of people to help us put it all together. Molly, the event manager, is AMAZING and not only brought infinite joy to the planning process but also made our entire day seamless from start to finish! She provided creative ideas, suggested the best vendors, and was always available to help with any request! She is truly one of a kind! The caterer, Moveable Feast, was equally as amazing! There was not a single person on staff we didn't love! Chrissy, the director, was equally as fun and knowledgable to work with, even during our very last minute changes and requests! There are not enough words to describe the immense amount of gratitude we have for Company 251 and Moveable Feast for their incredible vision, talent, and passion to make our wedding beyond our wildest dreams! Any future couple would be THE LUCKIEST to work with these amazing folks! We look forward to visiting Co251 and MF for many years to come!`,
      author: "Lauren & Jimmy",
    },
    {
      quote:
        `I fell in love with their vision and booked right away! Molly was an awesome event coordinator and Chrissy helped us create the most amazing custom menu with Moveable Feast + Co. I had several guests tell me it was the best wedding meal they ever had, and I would agree with them! Our guests also couldn't stop raving about the space and how it created such a fun and beautiful atmosphere. The owners, Matt + Ashley were also incredible to work with and their vision come to life was so amazing. I highly recommend Co251 to any bride looking for a modern and elegant venue. Co251 and MF+Co can do it all and can really help you throw your dream wedding!`,
      author: "Jackie & Kevin",
    },
    {
      quote:
        `Company 251 was by far one of the best decisions we made while wedding planning. Not only is it one of the only venues that will fit 300+ in the Chicagoland area, but its BEAUTIFUL architecture and stunning decor made it the perfect spot for our fall wedding. The whole company 251 team made every effort to make sure our day was perfect. They were attentive, detailed and went above and beyond for every request we had. The other thing fantastic about this venue is the catering that pairs with it. My husband and I still hear from our guests about how good our food was at our wedding. The menu they created for us was delicious and very unique to us as a couple! We would 100% recommend company 251 to any future couples! They will make your wedding day perfect!`,
      author: "Jordan & Jack",
    },
  ],
  reviewsCta: {
    label: "Read more reviews on The Knot",
    href: "https://www.theknot.com/marketplace/company-251-aurora-il-1023969",
  },
  awardsHeading: "Awards",
  awards: [
    {
      name: "Here Comes the Guide",
      href: "https://www.herecomestheguide.com/real-wedding/company-251-real-wedding",
      image: { src: "/assets/awards/here-comes-the-guide.png", alt: "Here Comes the Guide badge" },
    },
    {
      name: "The Perfect Palette",
      href: "http://www.theperfectpalette.com/2019/06/whimsical-meets-modern-at-company-251.html",
      image: { src: "/assets/awards/perfect-palette.png", alt: "Featured on The Perfect Palette badge" },
    },
    {
      name: "Chi The Wed",
      href: "https://chitheewed.com/blog-1/2020/7/10/sweet-sunday-nuptials-at-company-251",
      image: { src: "/assets/awards/chi-the-wed.png", alt: "Chi The Wed featured badge" },
    },
    {
      name: "Wedding Chicks",
      href: "https://www.weddingchicks.com/blog/from-warehouse-minimalism-to-a-mid-century-modern-masterpiece-l-17781-l-41.html",
      image: { src: "/assets/awards/wedding-chicks-2020.png", alt: "2020 Wedding Chicks badge" },
    },
    {
      name: "Chicago Style Weddings",
      href: "https://www.chicagostyleweddings.com/event-wrap-up-big-fake-wedding-chicago-2019/",
      image: { src: "/assets/awards/chicago-style-weddings.jpg", alt: "Chicago Style Weddings featured badge" },
    },
    {
      name: "WeddingWire Couples' Choice Awards",
      href: "https://www.weddingwire.com/biz/company-251-aurora/4e41f0db82e3c8db.html",
      image: { src: "/assets/awards/weddingwire-couples-choice.png", alt: "WeddingWire Couples' Choice Awards badge" },
    },
    {
      name: "100 Layer Cake",
      href: "https://www.100layercake.com/elopements/chic-elopement-inspiration-with-a-gorgeous-hayley-paige-gown/",
      image: { src: "/assets/awards/100-layer-cake.png", alt: "100 Layer Cake featured badge" },
    },
    {
      name: "Bespoke Bride",
      href: "https://www.bespoke-bride.com/2021/01/10/rustic-glam-inspo-for-a-fall-winter-wedding-in-2021/",
      image: { src: "/assets/awards/bespoke-bride.jpeg", alt: "Bespoke Bride featured badge" },
    },
    {
      name: "The Celebration Society",
      href: "https://www.thecelebrationsociety.com/weddings/bold-feminine-red-wedding-inspiration/",
      image: { src: "/assets/awards/celebration-society.webp", alt: "The Celebration Society featured badge" },
    },
    {
      name: "The Big Fake Wedding",
      href: "https://thebigfakewedding.com/2019/08/30/moody-mid-century-modern-inspiration-from-chicago/",
      image: { src: "/assets/awards/big-fake-wedding-2019.png", alt: "The Big Fake Wedding 2019 featured badge" },
    },
  ],
};
