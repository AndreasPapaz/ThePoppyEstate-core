import type { Metadata } from "next";
import { dmSans, serriff, serriffCondensed } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Poppy Estate",
  description: "The Poppy Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${serriff.variable} ${serriffCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-mobile-cta lg:pb-0">{children}</body>
    </html>
  );
}
