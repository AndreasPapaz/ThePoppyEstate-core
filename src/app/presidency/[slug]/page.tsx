import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { OfficePageView } from "@/components/OfficePageView";
import { getOfficePage } from "@/content/officePage";

export default async function OfficePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getOfficePage(slug);
  if (!page) notFound();

  return (
    <PageShell>
      <OfficePageView page={page} />
    </PageShell>
  );
}
