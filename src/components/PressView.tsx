import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { pressItems, type PressItem } from "@/content/press";

function PressCard({ item, index }: { item: PressItem; index: number }) {
  const published = Boolean(item.href);
  const content = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          priority={index < 2}
          className={`${item.imageFit === "contain" ? "object-contain p-10 sm:p-14" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.025]`}
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 700px"
        />
        {!published && (
          <div className="absolute inset-0 bg-white/35" aria-hidden="true" />
        )}
        <span className="absolute left-5 top-5 rounded-full bg-[#435245] px-4 py-2 text-[11px] font-dm-sans uppercase tracking-[0.18em] text-white">
          {published ? item.format : "Pending"}
        </span>
      </div>

      <div className="flex flex-1 flex-col border-x border-b border-burgundy/15 px-6 pb-7 pt-6 sm:px-8 sm:pb-8">
        <div className="mb-5 flex items-center gap-4">
          <p className="text-label-small font-dm-sans uppercase tracking-[0.22em] text-[#435245]">
            {item.outlet}
          </p>
          <span className="h-px flex-1 bg-pink" aria-hidden="true" />
          <span className="text-label-small font-dm-sans text-ground/45" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h2 className="text-display-5 font-seriff-condensed font-light leading-[1.06] text-burgundy">
          {item.title}
        </h2>
        <p className="mt-auto pt-8 text-label-small font-dm-sans uppercase tracking-[0.18em] text-[#435245]">
          {published ? `${item.format === "Video" ? "Watch" : item.format === "Radio" ? "Listen" : "Read"} feature ↗` : "Link coming soon"}
        </p>
      </div>
    </>
  );

  const classes = "group flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy";

  return item.href ? (
    <Link href={item.href} target="_blank" rel="noopener noreferrer" className={classes}>
      {content}
    </Link>
  ) : (
    <article className={classes}>{content}</article>
  );
}

export function PressView() {
  return (
    <>
      <section className="pb-14 pt-8 lg:pb-20 lg:pt-14">
        <Container>
          <div className="grid gap-10 border-b border-burgundy/15 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-20">
            <div>
              <p className="mb-7 text-label-small font-dm-sans uppercase tracking-[0.28em] text-[#435245]">
                In the news
              </p>
              <h1 className="text-[clamp(4.5rem,10vw,9rem)] font-seriff-condensed font-light leading-[0.78] tracking-[-0.03em] text-burgundy">
                Press
              </h1>
            </div>
            <div className="lg:pb-2">
              <div className="mb-7 h-px w-24 bg-pink" aria-hidden="true" />
              <p className="max-w-xl text-body font-seriff leading-relaxed text-ground">
                Stories, conversations, and local features celebrating a new chapter for The Poppy Estate.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Press coverage" className="pb-24 lg:pb-32">
        <Container>
          <div className="mx-auto grid max-w-[960px] gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-x-20 lg:gap-y-24">
            {pressItems.map((item, index) => (
              <PressCard key={item.outlet} item={item} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-burgundy/15 py-20 text-center lg:py-28">
        <Container className="flex flex-col items-center">
          <p className="mb-4 text-label-small font-dm-sans uppercase tracking-[0.25em] text-[#435245]">
            Media inquiries
          </p>
          <h2 className="max-w-3xl text-display-4 font-seriff-condensed font-light leading-tight text-[#435245] sm:text-display-3">
            Interested in telling our story?
          </h2>
          <Link
            href="/contact"
            className="mt-9 inline-block rounded-full bg-[#435245] px-10 py-4 text-label-medium font-dm-sans text-white transition-colors hover:bg-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#435245]"
          >
            Get in touch
          </Link>
        </Container>
      </section>
    </>
  );
}
