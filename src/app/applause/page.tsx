import { PageShell } from "@/components/PageShell";
import { ApplauseView } from "@/components/ApplauseView";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Applause",
  description: "See why couples and clients love The Poppy Estate. Read testimonials and reviews from memorable events at our historic Aurora venue.",
  path: "/applause",
});

export default function ApplausePage() {
  return (
    <PageShell>
      <ApplauseView />
    </PageShell>
  );
}
