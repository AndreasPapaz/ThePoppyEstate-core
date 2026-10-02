import type { Metadata } from "next";

export const siteConfig = {
  name: "The Poppy Estate",
  description: "Historic elegance, reimagined for your most unforgettable moments. A luxury wedding and event venue at 251 South River Street, Aurora, Illinois.",
  url: "https://thepoppyestate.com",
  ogImage: "/assets/home/home.webp",
  address: {
    street: "251 South River Street",
    city: "Aurora",
    state: "IL",
    zip: "60506",
  },
};

export function getMetadata({
  title,
  description,
  path = "",
  ogImage = siteConfig.ogImage,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const fullDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventVenue"],
    name: siteConfig.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
  };
}
