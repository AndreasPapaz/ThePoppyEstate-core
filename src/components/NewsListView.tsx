import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/content/news";

export function NewsListView({
  heading,
  articleHrefBase,
  articles,
}: {
  heading: string;
  articleHrefBase: string;
  articles: NewsArticle[];
}) {
  return (
    <section className="px-6 lg:px-8 max-w-[1536px] mx-auto py-16 lg:py-24">
      <h1 className="text-display-2 font-seriff-condensed font-light text-burgundy mb-12">
        {heading}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link key={article.slug} href={`${articleHrefBase}/${article.slug}`} className="group block">
            <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-md bg-light-gold">
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <p className="text-label-small font-dm-sans text-gray mb-2">
              {article.publishedLabel}
            </p>
            <h2 className="text-display-6 font-seriff-condensed font-light text-burgundy">
              {article.title}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
