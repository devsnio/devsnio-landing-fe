import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  path: "/privacy",
  title: "Privacy Policy",
  description: "How devsnio collects, uses, and protects your data.",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-black text-black mb-4">Privacy Policy</h1>
            <p className="text-zinc-500">Last updated: January 1, 2025</p>
          </div>

          <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-black mb-3">1. Introduction</h2>
              <p>
                devsnio (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website devsnio.com or engage our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-black">Contact information</strong> — name, email address, phone number, company name when you fill out our contact form.</li>
                <li><strong className="text-black">Project information</strong> — details about your project, budget range, and service requirements that you voluntarily provide.</li>
                <li><strong className="text-black">Usage data</strong> — browser type, IP address, pages visited, time spent, and other analytics collected automatically when you visit our website.</li>
                <li><strong className="text-black">Communication data</strong> — records of our email and messaging correspondence.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Respond to your inquiries and project requests</li>
                <li>Provide and improve our services</li>
                <li>Send you updates about your project (if you are a client)</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">We do <strong className="text-black">not</strong> sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">4. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to improve your browsing experience. Please see our <a href="/cookies" className="text-black underline font-medium">Cookie Policy</a> for full details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">5. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Contact form submissions are retained for up to 24 months. Client project data is retained for the duration of the project and 12 months thereafter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">6. Third-Party Services</h2>
              <p>We may use the following third-party services which have their own privacy policies:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Google Analytics — website analytics</li>
                <li>Vercel — website hosting and edge functions</li>
                <li>Email service providers — for transactional emails</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, email us at <a href="mailto:privacy@devsnio.com" className="text-black underline font-medium">privacy@devsnio.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">8. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">10. Contact</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:<br />
                <strong className="text-black">devsnio</strong><br />
                Email: <a href="mailto:privacy@devsnio.com" className="text-black underline">privacy@devsnio.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
