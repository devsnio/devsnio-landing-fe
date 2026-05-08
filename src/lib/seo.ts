import type { Metadata } from "next";

/* ─────────────────────────────────────────────────────────────
   Single source of truth for site-wide SEO defaults.
   Update once — every page picks it up via buildMetadata().
   ───────────────────────────────────────────────────────────── */
export const SITE = {
  name: "devsnio",
  url: "https://devsnio.com",
  defaultTitle: "devsnio — AI & Software Development Agency",
  titleTemplate: "%s — devsnio",
  description:
    "We build AI-powered software, custom web apps, SaaS products, and automation systems. From idea to launch — fast, clean, and scalable.",
  keywords: [
    "AI development agency",
    "AI automation",
    "custom software development",
    "SaaS development",
    "MVP development",
    "mobile app development",
    "web application development",
    "AI integration",
    "LLM applications",
    "RAG search",
    "Bangladesh software agency",
    "Dhaka software development",
    "devsnio",
  ],
  ogImage: "/og-image.png", // place a 1200×630 image at /public/og-image.png
  twitterHandle: "@devsnio",
  email: "info@devsnio.com",
  phone: "+8801521109475",
  locale: "en_US",
  themeColor: "#FF751F",
} as const;

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;          // e.g. "/contact"  — leave empty for home
  image?: string;         // override OG image
  keywords?: string[];    // additional keywords (merged)
  noIndex?: boolean;      // hide from search engines
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description = SITE.description,
  path = "/",
  image = SITE.ogImage,
  keywords = [],
  noIndex = false,
  type = "website",
}: BuildMetadataInput = {}): Metadata {
  const url = new URL(path, SITE.url).toString();
  const fullTitle = title ?? SITE.defaultTitle;
  const ogImageUrl = image.startsWith("http") ? image : new URL(image, SITE.url).toString();

  return {
    metadataBase: new URL(SITE.url),
    title: title ? { absolute: `${title} — ${SITE.name}` } : SITE.defaultTitle,
    description,
    keywords: [...SITE.keywords, ...keywords],
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      siteName: SITE.name,
      locale: SITE.locale,
      url,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.twitterHandle,
      creator: SITE.twitterHandle,
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
    other: {
      "theme-color": SITE.themeColor,
    },
  };
}

/* ─────────────────────────────────────────────────────────────
   JSON-LD structured data builders
   ───────────────────────────────────────────────────────────── */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gulshan 1",
      addressLocality: "Dhaka",
      postalCode: "1212",
      addressCountry: "BD",
    },
    sameAs: [
      // Add social profiles here when ready
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { "@type": "Organization", name: SITE.name },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).toString(),
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact devsnio",
    url: `${SITE.url}/contact`,
    description: "Get in touch with devsnio. We respond within 24 hours.",
    mainEntity: {
      "@type": "Organization",
      name: SITE.name,
      email: SITE.email,
      telephone: SITE.phone,
      contactPoint: {
        "@type": "ContactPoint",
        email: SITE.email,
        telephone: SITE.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Bengali"],
      },
    },
  };
}

export function servicesSchema() {
  const services = [
    "MVP Development",
    "SaaS Building",
    "Custom Software",
    "AI Development",
    "Mobile Development",
    "AI Automation",
  ];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development",
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: { "@type": "Place", name: "Worldwide" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "devsnio services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
  };
}
