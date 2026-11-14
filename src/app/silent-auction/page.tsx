import { PageShell } from "@/components/PageShell";
import { SilentAuctionView } from "@/components/SilentAuctionView";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Silent Auction",
  description:
    "Bid on The Poppy Estate gift certificate, photography sessions, Candlelit décor, and live piano as part of our silent auction.",
  path: "/silent-auction",
});

export default function SilentAuctionPage() {
  return (
    <PageShell>
      <SilentAuctionView />
    </PageShell>
  );
}
