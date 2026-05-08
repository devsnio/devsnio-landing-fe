import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  path: "/cookies",
  title: "Cookie Policy",
  description: "What cookies devsnio uses and how to manage them.",
  noIndex: true,
});

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "Required for the website to function. These cannot be disabled.",
    examples: ["Session management", "Security tokens", "Load balancing"],
    required: true,
  },
  {
    name: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website so we can improve it.",
    examples: ["Google Analytics", "Page view tracking", "User behaviour analysis"],
    required: false,
  },
  {
    name: "Preference Cookies",
    description: "Remember your settings and preferences to improve your experience.",
    examples: ["Language preferences", "Theme settings"],
    required: false,
  },
];

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-black text-black mb-4">Cookie Policy</h1>
            <p className="text-zinc-500">Last updated: January 1, 2025</p>
          </div>

          <div className="space-y-8 text-zinc-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-black mb-3">What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use it. We use cookies to improve your experience on devsnio.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-5">Cookies We Use</h2>
              <div className="space-y-4">
                {cookieTypes.map((type) => (
                  <div key={type.name} className="rounded-2xl border border-zinc-100 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-black">{type.name}</h3>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          type.required
                            ? "bg-zinc-900 text-white"
                            : "bg-zinc-100 text-zinc-600"
                        }`}
                      >
                        {type.required ? "Required" : "Optional"}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 mb-4">{type.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((e) => (
                        <span key={e} className="text-xs bg-zinc-50 border border-zinc-100 rounded-full px-3 py-1 text-zinc-500">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Managing Cookies</h2>
              <p>You can control and manage cookies in several ways:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-black">Browser settings</strong> — Most browsers allow you to refuse or delete cookies through their settings menu.</li>
                <li><strong className="text-black">Opt-out tools</strong> — You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-black underline">Google Analytics Opt-out Browser Add-on</a>.</li>
                <li><strong className="text-black">Cookie banner</strong> — You can update your preferences at any time via the cookie settings on our website.</li>
              </ul>
              <p className="mt-4 text-sm bg-zinc-50 border border-zinc-100 rounded-xl p-4">
                <strong className="text-black">Note:</strong> Disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Third-Party Cookies</h2>
              <p>
                Some cookies on our site are set by third-party services. We do not have control over these cookies. Please refer to the relevant third-party privacy policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy periodically. Changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Questions?</h2>
              <p>
                For any questions about our use of cookies, contact us at{" "}
                <a href="mailto:privacy@devsnio.com" className="text-black underline font-medium">
                  privacy@devsnio.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
