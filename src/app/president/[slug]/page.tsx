import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { PresidentBioView } from "@/components/PresidentBioView";
import { getPresidentBio } from "@/content/presidentBio";

export default async function PresidentBio({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bio = getPresidentBio(slug);
  if (!bio) notFound();

  return (
    <PageShell>
      <PresidentBioView bio={bio} />
    </PageShell>
  );
}
