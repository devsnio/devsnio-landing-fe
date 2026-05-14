import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/ContactForm";
import { buildMetadata, contactPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  path: "/contact",
  title: "Contact Us",
  description:
    "Get in touch with devsnio. Tell us about your project — we read every message and reply within 24 hours.",
  keywords: ["contact devsnio", "hire AI agency", "software development inquiry"],
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@devsnio.com",
    href: "mailto:info@devsnio.com",
    accent: "#FF751F",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1521 109 475",
    href: "tel:+8801521109475",
    accent: "#00C6A9",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gulshan 1, Dhaka, Bangladesh 1212",
    href: null,
    accent: "#7B5CFF",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
              Contact Us
            </p>
            <h1 className="text-5xl sm:text-6xl font-black text-black tracking-tight leading-tight mb-4">
              Let&apos;s Build
              <br />
              <span className="text-zinc-300">Something Great.</span>
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Tell us about your project. We read every message and reply within
              24 hours — no sales calls, no spam.
            </p>
          </div>

          <div className="grid lg:grid-cols-[420px_1fr] gap-8">

            {/* ── Left — info ── */}
            <div className="space-y-4">
              {/* Info cards */}
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className={`group flex gap-4 p-5 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-sm transition-all ${item.href ? "cursor-pointer" : ""}`}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ background: item.accent + "12" }}
                    >
                      <Icon size={17} style={{ color: item.accent }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-black truncate group-hover:text-[#FF751F] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* ── Right — form ── */}
            <ContactForm />

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
