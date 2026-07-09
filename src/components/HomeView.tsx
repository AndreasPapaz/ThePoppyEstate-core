import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/content/home";

export function HomeView({ content }: { content: HomeContent }) {
  const { hero, news, presidentIntro, falcon, bessastadir } = content;

  return (
    <>
      <section className="relative h-hero min-h-[600px] flex items-end">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className="object-cover -z-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent -z-10" />
        <div className="w-full px-6 lg:px-8 pb-16 lg:pb-24 max-w-[1536px] mx-auto">
          <p className="text-display-4 lg:text-display-2 font-seriff-condensed font-light text-white max-w-3xl">
            {hero.quote}
          </p>
          <Link
            href={hero.linkHref}
            className="inline-block mt-6 text-label-big font-dm-sans text-butter border-b border-butter hover:text-bright-gold hover:border-bright-gold transition-colors"
          >
            {hero.linkLabel}
          </Link>
        </div>
      </section>

      <section className="px-6 lg:px-8 max-w-[1536px] mx-auto py-16 lg:py-24">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-display-3 font-seriff-condensed font-light text-burgundy">
            {news.heading}
          </h2>
          <Link
            href={news.moreHref}
            className="hidden md:inline-block text-label-medium font-dm-sans text-burgundy border-b border-burgundy hover:text-gold hover:border-gold transition-colors"
          >
            {news.moreLabel}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.items.map((item) => (
            <Link key={item.href + item.title} href={item.href} className="group block">
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-md bg-light-gold">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <p className="text-label-small font-dm-sans text-gray mb-2">{item.date}</p>
              <h3 className="text-display-6 font-seriff-condensed font-light text-burgundy mb-2">
                {item.title}
              </h3>
              <p className="text-body-small font-seriff text-ground">{item.excerpt}</p>
            </Link>
          ))}
        </div>

        <Link
          href={news.moreHref}
          className="md:hidden inline-block mt-8 text-label-medium font-dm-sans text-burgundy border-b border-burgundy"
        >
          {news.moreLabel}
        </Link>
      </section>

      <section className="px-6 lg:px-8 max-w-[1536px] mx-auto py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[5/4] rounded-md overflow-hidden order-2 md:order-1">
          <Image
            src={presidentIntro.image.src}
            alt={presidentIntro.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-display-5 font-seriff-condensed font-light text-burgundy mb-6">
            {presidentIntro.quote}
          </p>
          <p className="text-label-big font-dm-sans text-ground mb-1">{presidentIntro.name}</p>
          <p className="text-label-medium font-dm-sans text-gray mb-6">{presidentIntro.role}</p>
          <Link
            href={presidentIntro.linkHref}
            className="inline-block text-label-medium font-dm-sans text-burgundy border-b border-burgundy hover:text-gold hover:border-gold transition-colors"
          >
            {presidentIntro.linkLabel}
          </Link>
        </div>
      </section>

      <section className="bg-light-gold">
        <div className="px-6 lg:px-8 max-w-[1536px] mx-auto py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-display-5 font-seriff-condensed font-light text-burgundy mb-4">
              {falcon.body}
            </p>
            <Link
              href={falcon.linkHref}
              className="inline-block text-label-medium font-dm-sans text-burgundy border-b border-burgundy hover:text-gold hover:border-gold transition-colors"
            >
              {falcon.linkLabel}
            </Link>
          </div>
          <div>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden">
              <Image
                src={falcon.image.src}
                alt={falcon.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <p className="text-label-small font-dm-sans text-gray mt-2">{falcon.imageCaption}</p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 max-w-[1536px] mx-auto py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] rounded-md overflow-hidden">
          <Image
            src={bessastadir.image.src}
            alt={bessastadir.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="text-display-5 font-seriff-condensed font-light text-burgundy mb-4">
            {bessastadir.body}
          </p>
          <Link
            href={bessastadir.linkHref}
            className="inline-block text-label-medium font-dm-sans text-burgundy border-b border-burgundy hover:text-gold hover:border-gold transition-colors"
          >
            {bessastadir.linkLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
