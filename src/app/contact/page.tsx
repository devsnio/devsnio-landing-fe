import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MessageSquare, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — devsnio",
  description:
    "Get in touch with devsnio. Tell us about your project and we'll respond within 24 hours.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@devsnio.com",
    href: "mailto:hello@devsnio.com",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+880 — contact for number",
    href: "https://wa.me/880",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Dhaka, Bangladesh (Remote-first)",
    href: null,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
    href: null,
  },
];

const services = [
  "AI Automation",
  "AI Development",
  "Custom Software",
  "SaaS Building",
  "Web Application",
  "API Development",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-24">
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

          <div className="grid lg:grid-cols-[1fr_400px] gap-12">
            {/* Form */}
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
                        <span className="inline-block px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 peer-checked:bg-black peer-checked:text-white peer-checked:border-black transition select-none">
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

            {/* Contact info sidebar */}
            <div className="space-y-6">
              {/* Info cards */}
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex gap-4 p-5 rounded-2xl border border-zinc-100 bg-zinc-50"
                  >
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#FF751F]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-black hover:text-[#FF751F] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-black">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* FAQ card */}
              <div className="rounded-2xl bg-zinc-950 p-6">
                <h3 className="text-white font-bold mb-3">Before you reach out</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex gap-2">
                    <span className="text-[#FF751F] font-bold">→</span>
                    We work with startups and growing companies
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF751F] font-bold">→</span>
                    Projects typically start at $3,000
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF751F] font-bold">→</span>
                    We work remotely across all timezones
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF751F] font-bold">→</span>
                    MVP builds take 4–8 weeks on average
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
