import { PageShell } from "@/components/PageShell";
import { HomeView } from "@/components/HomeView";
import { home } from "@/content/home";

export default function Home() {
  return (
    <PageShell>
      <HomeView content={home} />
    </PageShell>
  );
}
