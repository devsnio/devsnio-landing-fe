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

export default function Home() {
  return (
    <>
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
