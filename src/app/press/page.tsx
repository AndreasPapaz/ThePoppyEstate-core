import { PageShell } from "@/components/PageShell";
import { PressView } from "@/components/PressView";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Press",
  description:
    "Read, watch, and listen to press coverage featuring The Poppy Estate in Aurora, Illinois.",
  path: "/press",
});

export default function PressPage() {
  return (
    <PageShell>
      <PressView />
    </PageShell>
  );
}
