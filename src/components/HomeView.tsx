import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/content/home";

export function HomeView({ content }: { content: HomeContent }) {
  const { hero, aboutUs, theSpace, ourTeam, getDirections } = content;

  return (
    <>
      <section className="px-6 lg:px-8 max-w-[1536px] mx-auto py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-display-4 lg:text-display-2 font-seriff-condensed font-light text-burgundy max-w-3xl">
            {hero.quote}
          </p>
          <Link
            href={hero.linkHref}
            className="inline-block mt-6 text-label-big font-dm-sans text-burgundy border-b border-burgundy hover:text-gold hover:border-gold transition-colors"
          >
            {hero.linkLabel}
          </Link>
        </div>
        <div className="relative aspect-[2/3] rounded-md overflow-hidden w-full md:w-[56.25%] md:ml-auto">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 28vw, 100vw"
          />
        </div>
      </section>

      <section id="about" className="px-6 lg:px-8 max-w-[1536px] mx-auto py-16 lg:py-24 text-center">
        <h2 className="text-display-3 font-seriff-condensed font-light text-burgundy mb-6">
          {aboutUs.heading}
        </h2>
        <p className="text-body font-seriff text-ground max-w-3xl mx-auto">{aboutUs.body}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {aboutUs.images.map((image) => (
            <div key={image.src} className="relative aspect-[4/3] rounded-md overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="the-space" className="px-6 lg:px-8 max-w-[1536px] mx-auto py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative aspect-[5/4] rounded-md overflow-hidden order-1 md:order-2">
            <Image
              src={theSpace.image.src}
              alt={theSpace.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="order-2 md:order-1">
            <h2 className="text-display-3 font-seriff-condensed font-light text-burgundy mb-6">
              {theSpace.heading}
            </h2>
            {theSpace.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body-small font-seriff text-ground mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-display-5 font-seriff-condensed font-light text-burgundy mb-6 text-center">
            {theSpace.amenities.heading}
          </h3>
          <ul>
            {theSpace.amenities.items.map((item) => (
              <li
                key={item}
                className="text-body-small font-seriff text-ground border-b border-gray/20 py-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="our-team" className="bg-light-gold">
        <div className="px-6 lg:px-8 max-w-[1536px] mx-auto py-16 lg:py-24">
          <h2 className="text-display-3 font-seriff-condensed font-light text-burgundy text-center mb-12">
            {ourTeam.heading}
          </h2>

          <div className="flex flex-col items-center mb-16">
            <div className="relative aspect-[2/3] w-[250px] md:w-[333px] rounded-md overflow-hidden mb-4">
              <Image
                src={ourTeam.lead.image.src}
                alt={ourTeam.lead.image.alt}
                fill
                className="object-cover"
                sizes="333px"
              />
            </div>
            <p className="text-label-big font-dm-sans text-burgundy">{ourTeam.lead.name}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ourTeam.members.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="relative aspect-[2/3] w-full rounded-md overflow-hidden mb-4">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                </div>
                <p className="text-label-medium font-dm-sans text-burgundy text-center">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="get-directions" className="px-6 lg:px-8 max-w-[1536px] mx-auto py-16 lg:py-24">
        <h2 className="text-display-3 font-seriff-condensed font-light text-burgundy text-center mb-12">
          {getDirections.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-body-small font-seriff text-ground mb-4">{getDirections.intro}</p>
            <p className="text-body-small font-seriff text-ground mb-4">
              {getDirections.directions}
            </p>
            <p className="text-body-small font-seriff text-ground mb-8">
              {getDirections.airportNote}
            </p>

            <h3 className="text-display-6 font-seriff-condensed font-light text-burgundy mb-4">
              {getDirections.hotelsHeading}
            </h3>
            <ul>
              {getDirections.hotels.map((hotel) => (
                <li key={hotel.name} className="border-b border-gray/20 py-3">
                  <p className="text-label-medium font-dm-sans text-burgundy">{hotel.name}</p>
                  <p className="text-label-small font-dm-sans text-gray">
                    {hotel.distance} · {hotel.phone}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-md overflow-hidden">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(getDirections.mapAddress)}&output=embed`}
              className="absolute inset-0 w-full h-full border-0 grayscale contrast-125 brightness-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company 251 location map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
