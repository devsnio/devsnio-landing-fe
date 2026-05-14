import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  path: "/terms",
  title: "Terms of Service",
  description: "The terms governing use of devsnio services and website.",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-black text-black mb-4">Terms of Service</h1>
            <p className="text-zinc-500">Last updated: January 1, 2025</p>
          </div>

          <div className="space-y-8 text-zinc-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-black mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing devsnio.com or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">2. Services</h2>
              <p>
                devsnio provides software development services including AI automation, AI development, custom software development, and SaaS product building. The specific scope, deliverables, timeline, and pricing for each project are defined in a separate Statement of Work (SOW) or project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">3. Project Agreements</h2>
              <p>Each project engagement is governed by a separate written agreement that includes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Scope of work and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Pricing and payment schedule</li>
                <li>Intellectual property ownership</li>
                <li>Revision and change request process</li>
              </ul>
              <p className="mt-3">In the event of any conflict between a project agreement and these Terms, the project agreement prevails.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">4. Payments</h2>
              <p>
                Payment terms are specified in each project agreement. Generally, projects require a deposit before work commences, with remaining payments tied to milestones. All fees are non-refundable once the agreed milestone has been delivered and approved.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">5. Intellectual Property</h2>
              <p>
                Upon receipt of full payment, devsnio transfers ownership of all custom code and deliverables created specifically for your project to you. We retain the right to reference the project in our portfolio unless otherwise agreed in writing.
              </p>
              <p className="mt-3">
                Third-party libraries, frameworks, and open-source components remain subject to their respective licenses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">6. Client Responsibilities</h2>
              <p>To ensure timely delivery, clients are expected to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide timely feedback and approvals (within 3 business days unless agreed otherwise)</li>
                <li>Supply necessary assets, credentials, and access on schedule</li>
                <li>Have an authorized representative available for key decisions</li>
                <li>Make payments on the agreed schedule</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">7. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any non-public information shared during the engagement. We will not disclose your proprietary business information to third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, devsnio&apos;s total liability for any claim arising from our services shall not exceed the total fees paid by the client in the 3 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">9. Website Use</h2>
              <p>
                You may use devsnio.com for lawful purposes only. You must not use our site in any way that violates applicable laws, infringes intellectual property rights, or transmits harmful or malicious content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be posted to this page with an updated date. Your continued use of our website or services after changes are posted constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">11. Governing Law</h2>
              <p>
                These Terms are governed by the laws of Bangladesh. Any disputes shall be resolved through good-faith negotiation, and if unresolved, through the courts of Dhaka, Bangladesh.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">12. Contact</h2>
              <p>
                Questions about these Terms? Reach us at{" "}
                <a href="mailto:info@devsnio.com" className="text-black underline font-medium">
                  info@devsnio.com
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
