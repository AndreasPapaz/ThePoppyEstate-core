import { PageShell } from "@/components/PageShell";
import { HomeView } from "@/components/HomeView";
import { home } from "@/content/home";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Home",
  description: "Historic elegance, reimagined for your most unforgettable moments. A 20,000+ sq. ft. luxury wedding and event venue in Aurora, Illinois.",
});

export default function Home() {
  return (
    <PageShell>
      <HomeView content={home} />
    </PageShell>
  );
}
