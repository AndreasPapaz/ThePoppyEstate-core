import { PageShell } from "@/components/PageShell";
import { ContactView } from "@/components/ContactView";
import { home } from "@/content/home";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Inquire",
  description: "Inquire today to lock $500 off your next event at The Poppy Estate.",
  path: "/promo-inquire",
});

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
