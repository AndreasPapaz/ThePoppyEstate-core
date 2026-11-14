import Image from "next/image";
import { Container } from "./Container";
import { silentAuction } from "@/content/silentAuction";

export function SilentAuctionView() {
  const { eyebrow, heading, intro, lots } = silentAuction;

  return (
    <>
      <section className="pb-12 pt-8 lg:pb-16 lg:pt-14">
        <Container>
          <div className="grid gap-10 border-b border-burgundy/15 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-16">
            <div>
              <p className="mb-7 text-label-small font-dm-sans uppercase tracking-[0.28em] text-[#435245]">
                {eyebrow}
              </p>
              <h1 className="max-w-3xl text-display-3 font-seriff-condensed font-light leading-[0.95] text-burgundy sm:text-display-2">
                {heading}
              </h1>
            </div>
            <div className="lg:pb-2">
              <div className="mb-7 h-px w-24 bg-pink" aria-hidden="true" />
              <p className="max-w-xl text-body font-seriff leading-relaxed text-ground">{intro}</p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Auction experiences" className="pb-24 lg:pb-32">
        <Container>
          <ul className="flex flex-col gap-16 lg:gap-24">
            {lots.map((lot, index) => (
              <li
                key={lot.title}
                className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-md bg-[#eae3cc]/40 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={lot.image.src}
                    alt={lot.image.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="mb-5 flex items-center gap-4">
                    <p className="text-label-small font-dm-sans uppercase tracking-[0.22em] text-[#435245]">
                      Experience {String(index + 1).padStart(2, "0")}
                    </p>
                    <span className="h-px flex-1 bg-pink" aria-hidden="true" />
                  </div>
                  <h2 className="text-display-5 font-seriff-condensed font-light leading-tight text-burgundy sm:text-display-4">
                    {lot.title}
                  </h2>
                  <p className="mt-3 font-dm-sans">
                    <span className="text-display-6 text-burgundy">{lot.startingBid}</span>
                    <span className="ml-2 text-label-medium text-gray">Starting bid</span>
                  </p>
                  <div className="mt-6 space-y-4">
                    {lot.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-body-small font-seriff leading-relaxed text-ground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
