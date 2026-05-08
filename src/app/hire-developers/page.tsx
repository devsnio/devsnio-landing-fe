import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, SITE } from "@/lib/seo";
import { HireHero } from "@/components/hire/HireHero";
import { HireWhyBangladesh } from "@/components/hire/HireWhyBangladesh";
import { HireModels } from "@/components/hire/HireModels";
import { HireRoles } from "@/components/hire/HireRoles";
import { HireProcess } from "@/components/hire/HireProcess";
import { HirePricing } from "@/components/hire/HirePricing";
import { HireFAQ } from "@/components/hire/HireFAQ";
import { HireCTA } from "@/components/hire/HireCTA";

export const metadata: Metadata = buildMetadata({
  path: "/hire-developers",
  title: "Hire Bangladesh Developers — Offshore Engineering Talent",
  description:
    "Hire vetted senior developers from Bangladesh. Save up to 70% on engineering costs vs. US/UK rates. Full-stack, AI/ML, mobile, and DevOps engineers ready to join your team in days.",
  keywords: [
    "hire bangladesh developers",
    "offshore developers",
    "hire offshore engineers",
    "remote developers bangladesh",
    "outsourcing software development",
    "hire react developers",
    "hire ai engineers",
    "staff augmentation",
    "dedicated development team",
    "hire developers from dhaka",
  ],
});

const servicePageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hire Bangladesh Developers",
  serviceType: "Software Development Staffing",
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Place", name: "Europe" },
  ],
  description:
    "Offshore developer staffing from Bangladesh. Vetted full-stack, AI, mobile, and DevOps engineers for US, UK, and EU companies.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "20",
    highPrice: "55",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      unitCode: "HUR",
      unitText: "per hour",
    },
  },
};

export default function HireDevelopersPage() {
  return (
    <>
      <JsonLd
        data={[
          servicePageSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Hire Developers", path: "/hire-developers" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <HireHero />
        <HireWhyBangladesh />
        <HireModels />
        <HireRoles />
        <HireProcess />
        <HirePricing />
        <HireFAQ />
        <HireCTA />
      </main>
      <Footer />
    </>
  );
}
