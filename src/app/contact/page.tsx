import { PageShell } from "@/components/PageShell";
import { ContactView } from "@/components/ContactView";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Contact",
  description: "Get in touch with The Poppy Estate to book your dream wedding or event. Contact our team to schedule a tour of our historic venue.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <ContactView />
    </PageShell>
  );
}
