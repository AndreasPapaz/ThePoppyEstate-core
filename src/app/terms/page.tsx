import { PageShell } from "@/components/PageShell";
import { TermsView } from "@/components/TermsView";
import { terms } from "@/content/terms";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Terms of Service",
  description: "Terms of Service for The Poppy Estate.",
  path: "/terms",
});

// Add noindex, nofollow
export const robots = {
  index: false,
  follow: false,
};

export default function TermsPage() {
  return (
    <PageShell>
      <TermsView content={terms} />
    </PageShell>
  );
}
