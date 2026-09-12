import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { applauseContent } from "@/content/applause";

export function ApplauseView() {
  const { hero, heading, testimonials, reviewsCta, awardsHeading, awards } = applauseContent;

  return (
    <>
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <section className="py-16 lg:py-24">
        <Container>
          <h1 className="text-display-2 font-seriff-condensed font-light text-burgundy text-center mb-16">
            {heading}
          </h1>

          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.author} className="border-b border-gray/20 pb-12 last:border-b-0">
                <p className="text-body-small font-seriff text-ground mb-4 whitespace-pre-line">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="text-label-medium font-dm-sans text-burgundy">
                  {testimonial.author}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link
              href={reviewsCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-label-medium font-dm-sans text-white bg-[#435245] hover:bg-burgundy rounded-full px-10 py-4 transition-colors"
            >
              {reviewsCta.label.toUpperCase()}
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-light-gold/40">
        <Container>
          <h2 className="text-display-3 font-seriff-condensed font-light text-burgundy text-center mb-12">
            {awardsHeading}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center max-w-5xl mx-auto">
            {awards.map((award) => (
              <Link
                key={award.name}
                href={award.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={award.image.src}
                  alt={award.image.alt}
                  width={120}
                  height={120}
                  className="object-contain w-full h-auto max-w-[120px]"
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
