import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { dmSans, serriff, serriffCondensed } from "@/fonts";
import { getMetadata, getLocalBusinessJsonLd } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  ...getMetadata({}),
  icons: {
    icon: "/poppyicon.png",
    apple: "/poppyicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${serriff.variable} ${serriffCondensed.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col pb-mobile-cta lg:pb-0">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
