import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PreferredVendorsView } from "@/components/PreferredVendorsView";

export const metadata: Metadata = {
  title: "Preferred Vendors | The Poppy Estate",
  description:
    "Meet The Poppy Estate's trusted catering, photography, music, décor, floral, planning, and event partners.",
};

export default function PreferredVendorsPage() {
  return (
    <PageShell>
      <PreferredVendorsView />
    </PageShell>
  );
}
