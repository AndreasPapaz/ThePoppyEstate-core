import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ContactView } from "@/components/ContactView";
import { home } from "@/content/home";

export const metadata: Metadata = {
  title: "Inquire | The Poppy Estate",
  description: "Inquire today to lock $500 off your next event at The Poppy Estate.",
};

export default function PromoInquirePage() {
  return (
    <PageShell>
      <ContactView
        introNote="Inquire today to lock $500 off your next event!"
        images={home.aboutUs.images}
      />
    </PageShell>
  );
}
