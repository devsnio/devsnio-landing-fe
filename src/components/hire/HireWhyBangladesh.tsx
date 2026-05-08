import { DollarSign, GraduationCap, Globe2, Clock, MessagesSquare, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "60–70% Cost Savings",
    desc: "Senior engineers at a fraction of US/UK rates. Reinvest savings into faster roadmap and runway.",
  },
  {
    icon: GraduationCap,
    title: "Strong Engineering Culture",
    desc: "Top universities (BUET, NSU, IUT) graduate ~25,000 CS students yearly. Engineering-first mindset.",
  },
  {
    icon: MessagesSquare,
    title: "English-Fluent Teams",
    desc: "Business-level English across the board. Daily standups, async docs, and code reviews — no friction.",
  },
  {
    icon: Clock,
    title: "Friendly Timezone",
    desc: "GMT+6 — overlaps 4+ hours with UK/EU and 2–4 hours with US East Coast. We adjust shifts to your hours.",
  },
  {
    icon: Globe2,
    title: "Modern Stack Ready",
    desc: "React, Next.js, Node, Python, Go, Rust, Flutter, AWS, GCP, Kubernetes — all the tools you actually use.",
  },
  {
    icon: ShieldCheck,
    title: "IP & NDA Protected",
    desc: "Watertight contracts, NDA-by-default, full IP transfer to you. ISO-aligned security practices.",
  },
];

export function HireWhyBangladesh() {
  return (
    <section className="bg-zinc-50 border-y border-zinc-100 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-14">
          <div data-reveal>
            <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
              Why Bangladesh
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
              The Talent Without
              <br />
              <span className="text-zinc-300">The Tag.</span>
            </h2>
          </div>
          <p data-reveal data-reveal-delay="120" className="text-zinc-500 text-lg leading-relaxed lg:max-w-md lg:ml-auto">
            US and UK companies have quietly built world-class engineering teams in Bangladesh for
            over a decade. Here&apos;s why it works.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-100" data-reveal-group>
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} data-reveal className="bg-white p-7 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FF751F]/10 flex items-center justify-center">
                  <Icon size={18} className="text-[#FF751F]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-base mb-2 leading-tight">{r.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
