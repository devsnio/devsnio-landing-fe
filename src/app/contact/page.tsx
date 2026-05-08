import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
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

const services = [
  "AI Automation",
  "AI Development",
  "Custom Software",
  "SaaS Building",
  "Mobile Development",
  "Web Application",
  "API Development",
  "Other",
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
            <div className="bg-zinc-50 rounded-3xl border border-zinc-100 p-8 sm:p-10">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Name <span className="text-[#FF751F]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Email <span className="text-[#FF751F]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Company / Project name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Service needed
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <label key={s} className="cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <span className="inline-block px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-zinc-300 transition select-none">
                          {s}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Budget range
                  </label>
                  <select className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition appearance-none">
                    <option value="">Select a range...</option>
                    <option>Under $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $50,000</option>
                    <option>$50,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Tell us about your project{" "}
                    <span className="text-[#FF751F]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe what you're building, the problem it solves, and any technical requirements..."
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 rounded-full bg-black text-white text-base font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Send Message →
                </button>

                <p className="text-xs text-zinc-400 text-center">
                  By submitting this form you agree to our{" "}
                  <a href="/privacy" className="underline hover:text-black">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
