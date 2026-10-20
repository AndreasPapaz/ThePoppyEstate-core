import { PageShell } from "@/components/PageShell";
import { TermsView } from "@/components/TermsView";
import { terms } from "@/content/terms";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "October 2026 Wedding Venue Giveaway - Official Terms & Conditions",
  description: "Official Terms & Conditions for The Poppy Estate October 2026 Wedding Venue Giveaway. Enter to win a $6,000 venue rental credit.",
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
