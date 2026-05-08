import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Stats } from "@/components/Stats";
import { WhyUs } from "@/components/WhyUs";
import { Workflow } from "@/components/Workflow";
import { TechStack } from "@/components/TechStack";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, servicesSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  path: "/",
  title: "AI & Software Development Agency",
  description:
    "devsnio builds AI-powered software, SaaS products, mobile apps, and automation systems. From MVP to scale — we ship fast, clean, production-ready code.",
});

export default function Home() {
  return (
    <>
      <JsonLd data={servicesSchema()} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Stats />
        <WhyUs />
        <Workflow />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
