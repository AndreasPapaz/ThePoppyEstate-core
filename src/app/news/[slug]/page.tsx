import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { NewsArticleView } from "@/components/NewsArticleView";
import { getNewsArticle } from "@/content/news";

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) notFound();

  return (
    <PageShell>
      <NewsArticleView article={article} />
    </PageShell>
  );
}
