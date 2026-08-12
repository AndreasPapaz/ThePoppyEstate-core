import Image from "next/image";
import type { PresidentBio } from "@/content/presidentBio";

export function PresidentBioView({ bio }: { bio: PresidentBio }) {
  return (
    <article>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-10 lg:px-16 max-w-[1536px] mx-auto py-16 lg:py-24">
        <div className="relative aspect-[3/4] rounded-md overflow-hidden">
          <Image
            src={bio.portrait.src}
            alt={bio.portrait.alt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div>
          <h1 className="text-display-1 font-seriff-condensed font-light text-burgundy mb-6">
            {bio.title}
          </h1>
          <p className="text-body font-seriff text-ground">{bio.intro}</p>
        </div>
      </div>

      <div className="px-10 lg:px-16 max-w-3xl mx-auto pb-16 lg:pb-24 flex flex-col gap-14">
        {bio.sections.map((section) => (
          <section key={section.heading ?? section.body.slice(0, 20)}>
            {section.heading && (
              <h2 className="text-display-5 font-seriff-condensed font-light text-burgundy mb-4">
                {section.heading}
              </h2>
            )}
            {section.image && (
              <div className="relative aspect-[3/2] rounded-md overflow-hidden mb-6">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </div>
            )}
            <p className="text-body font-seriff text-ground">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="bg-light-gold">
        <div className="px-10 lg:px-16 max-w-3xl mx-auto py-16 lg:py-24">
          <p className="text-display-4 font-seriff-condensed font-light text-burgundy">
            {bio.pullQuote}
          </p>
        </div>
      </div>
    </article>
  );
}
