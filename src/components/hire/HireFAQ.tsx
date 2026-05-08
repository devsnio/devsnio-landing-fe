"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How do you vet developers before they reach my shortlist?",
    a: "Every developer on our bench passes 4 stages: technical screen (live coding + system design), portfolio review, English communication assessment, and reference checks from past employers. Acceptance rate is under 8%. We re-test annually.",
  },
  {
    q: "What if the developer isn't a good fit?",
    a: "Every hire comes with a 2-week risk-free trial. If they're not the right fit — for any reason — you don't pay for that period and we replace them at no cost. After the trial, you can swap any developer with 7 days' notice.",
  },
  {
    q: "How do timezones work with US and UK teams?",
    a: "Bangladesh is GMT+6. Our developers work shifted hours to overlap with you — typically 4+ hours of live overlap with UK/EU and 2–4 hours with US East Coast. We handle the schedule, you get a teammate who's online when you are.",
  },
  {
    q: "How does billing work? Are there hidden fees?",
    a: "One transparent monthly invoice based on hours worked × your agreed hourly rate. Zero recruitment fees, zero setup fees, zero kickbacks. Equipment, software, payroll, taxes, and benefits are all included in the rate.",
  },
  {
    q: "Who owns the IP and code my developer produces?",
    a: "100% you. Every contract includes full IP assignment to your company on day one. Our developers sign NDAs by default. We can also sign additional NDAs and security agreements if your company requires them.",
  },
  {
    q: "Can I scale my team up or down?",
    a: "Yes — that's one of the main reasons companies choose offshore. Add a developer in 1 week. Pause or downsize with 30 days' notice. No long-term lock-in, no penalty fees.",
  },
  {
    q: "What about communication and project management?",
    a: "We integrate into your existing tools — Slack, Linear, Jira, GitHub, Notion, whatever you use. Our developers join your stand-ups, sprints, and reviews like any other team member. We can also provide an Engineering Manager if you want one point of contact.",
  },
  {
    q: "Do you have experience with my industry?",
    a: "Probably. We've shipped products in fintech, healthtech, e-commerce, SaaS, edtech, and AI/ML. If you have specific compliance requirements (HIPAA, SOC 2, PCI-DSS), we can match you with developers who've worked under those standards.",
  },
];

export function HireFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14" data-reveal>
          <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
            Common Questions.
            <br />
            <span className="text-zinc-300">Honest Answers.</span>
          </h2>
        </div>

        <div className="space-y-3" data-reveal-group>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                data-reveal
                className="rounded-2xl border border-zinc-100 bg-zinc-50 overflow-hidden transition-all"
                style={{ borderColor: isOpen ? "#FF751F40" : undefined }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                >
                  <h3 className="text-base font-bold text-zinc-900 leading-snug pr-2">{faq.q}</h3>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: isOpen ? "#FF751F" : "#fff" }}
                  >
                    {isOpen ? (
                      <Minus size={14} className="text-white" />
                    ) : (
                      <Plus size={14} className="text-zinc-700" />
                    )}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-zinc-600 leading-relaxed px-5 pb-5">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-zinc-500 mt-10">
          Still curious?{" "}
          <a href="/contact" className="text-black font-semibold hover:text-[#FF751F] transition-colors underline underline-offset-4">
            Talk to us
          </a>{" "}
          — we&apos;ll answer anything in plain English.
        </p>
      </div>
    </section>
  );
}
