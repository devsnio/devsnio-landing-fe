import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { CTA } from "@/components/CTA";
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid";
import { caseStudies } from "@/lib/case-studies";
import { buildMetadata, breadcrumbSchema, SITE } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  path: "/case-studies",
  title: "Case Studies — Real Products We've Shipped",
  description:
    "A look at the products we've built — F-commerce platforms, dental clinic SaaS, fintech aggregators, and more. Real shipping, real metrics.",
  keywords: [
    "devsnio case studies",
    "software development portfolio",
    "saas case studies",
    "fintech case study",
    "healthtech case study",
    "ecommerce platform case study",
  ],
});

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "devsnio Case Studies",
  numberOfItems: caseStudies.length,
  itemListElement: caseStudies.map((cs, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: cs.name,
      description: cs.tagline,
      genre: cs.industry,
      author: { "@type": "Organization", name: SITE.name },
      datePublished: cs.year,
    },
  })),
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={[
          portfolioSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ]),
        ]}
      />
      <Navbar />
      <main className="bg-white">

        {/* Hero header */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.5)_60%,transparent_100%)]" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-6 items-end">
              <div data-reveal>
                <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
                  Our Work
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight">
                  Real Products.
                  <br />
                  <span className="text-zinc-300">Real Results.</span>
                </h1>
              </div>
              <p data-reveal data-reveal-delay="120" className="text-zinc-500 text-lg leading-relaxed lg:max-w-md lg:ml-auto">
                A few of our favourite builds — from F-commerce platforms to clinic OSes
                to payment aggregators. Hover any card for the deep dive.
              </p>
            </div>
          </div>
        </section>

        {/* Case studies grid */}
        <section className="pb-24 sm:pb-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <CaseStudiesGrid />

            {/* Footer note */}
            <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-zinc-500 text-sm max-w-md">
                More projects under NDA. Want to see something specific?{" "}
                <strong className="text-black">Just ask.</strong>
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#FF751F] transition-colors whitespace-nowrap"
              >
                Discuss your project <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
