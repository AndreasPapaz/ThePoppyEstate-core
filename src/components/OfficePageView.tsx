import Image from "next/image";
import type { OfficePage } from "@/content/officePage";

export function OfficePageView({ page }: { page: OfficePage }) {
  return (
    <article>
      <div className="relative h-[45vh] min-h-[320px]">
        <Image
          src={page.heroImage.src}
          alt={page.heroImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="px-10 lg:px-16 max-w-3xl mx-auto py-12 lg:py-16 flex flex-col gap-14">
        <div>
          <h1 className="text-display-2 font-seriff-condensed font-light text-burgundy mb-6">
            {page.title}
          </h1>
          <p className="text-body font-seriff text-ground">{page.intro}</p>
        </div>

        <section>
          <h2 className="text-display-5 font-seriff-condensed font-light text-burgundy mb-4">
            {page.historyHeading}
          </h2>
          <p className="text-body font-seriff text-ground">{page.historyBody}</p>
        </section>

        <section>
          <h2 className="text-display-5 font-seriff-condensed font-light text-burgundy mb-6">
            {page.staffHeading}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {page.staff.map((person) => (
              <li key={person.email} className="border-b border-black/10 pb-4">
                <p className="text-label-big font-dm-sans text-burgundy">{person.name}</p>
                <p className="text-label-medium font-dm-sans text-gray">{person.role}</p>
                <a
                  href={`mailto:${person.email}`}
                  className="text-label-small font-dm-sans text-pink hover:text-pink transition-colors"
                >
                  {person.email}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
