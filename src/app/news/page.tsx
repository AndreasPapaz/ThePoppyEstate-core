import { PageShell } from "@/components/PageShell";
import { NewsListView } from "@/components/NewsListView";
import { getNewsList } from "@/content/news";

export default function NewsList() {
  return (
    <PageShell>
      <NewsListView heading="Highlights" articleHrefBase="/news" articles={getNewsList()} />
    </PageShell>
  );
}
