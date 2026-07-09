import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/content/news";

export function NewsArticleView({ article }: { article: NewsArticle }) {
  return (
    <article>
      <div className="relative h-[50vh] min-h-[360px]">
        <Image
          src={article.heroImage.src}
          alt={article.heroImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="px-6 lg:px-8 max-w-3xl mx-auto py-12 lg:py-16">
        <p className="text-label-small font-dm-sans text-gold uppercase tracking-wide mb-3">
          {article.category}
        </p>
        <h1 className="text-display-2 font-seriff-condensed font-light text-burgundy mb-4">
          {article.title}
        </h1>
        <p className="text-label-medium font-dm-sans text-gray mb-10">
          {article.publishedLabel}
        </p>

        <div className="flex flex-col gap-6">
          {article.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-body font-seriff text-ground">
              {paragraph}
            </p>
          ))}
        </div>

        {article.related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-black/10">
            <h2 className="text-display-6 font-seriff-condensed font-light text-burgundy mb-4">
              Fleiri fréttir
            </h2>
            <ul className="flex flex-col gap-2">
              {article.related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-label-medium font-dm-sans text-burgundy border-b border-burgundy hover:text-gold hover:border-gold transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
