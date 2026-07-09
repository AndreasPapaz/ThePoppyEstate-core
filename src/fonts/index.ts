import localFont from "next/font/local";

export const dmSans = localFont({
  src: "./dm-sans.ttf",
  variable: "--font-dm-sans",
  weight: "100 1000",
  display: "swap",
});

export const serriff = localFont({
  src: [
    { path: "./serriff-regular.woff2", weight: "400", style: "normal" },
    { path: "./serriff-regular-italic.woff2", weight: "400", style: "italic" },
    { path: "./serriff-bold.woff2", weight: "700", style: "normal" },
    { path: "./serriff-bold-italic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-serriff",
  display: "swap",
});

export const serriffCondensed = localFont({
  src: [
    { path: "./serriff-condensed-light.woff2", weight: "300", style: "normal" },
  ],
  variable: "--font-serriff-condensed",
  display: "swap",
});
