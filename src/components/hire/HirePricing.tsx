import { Check, X } from "lucide-react";

const comparison = [
  {
    region: "United States",
    flag: "🇺🇸",
    rate: "$120 – $180",
    annual: "$140k – $220k",
    overhead: "$30k+ overhead",
    accent: false,
  },
  {
    region: "United Kingdom",
    flag: "🇬🇧",
    rate: "$95 – $140",
    annual: "$95k – $160k",
    overhead: "$20k+ overhead",
    accent: false,
  },
  {
    region: "Eastern Europe",
    flag: "🇪🇺",
    rate: "$60 – $90",
    annual: "$70k – $110k",
    overhead: "$15k+ overhead",
    accent: false,
  },
  {
    region: "Bangladesh (devsnio)",
    flag: "🇧🇩",
    rate: "$22 – $55",
    annual: "$25k – $60k",
    overhead: "Zero overhead",
    accent: true,
  },
];

const included = [
  "Senior engineer, 40 hrs/week",
  "Equipment & software included",
  "Payroll, taxes, benefits handled",
  "Replacement guarantee",
  "Engineering manager support",
  "Monthly performance reports",
];

const notIncluded = [
  "Hidden recruitment fees",
  "Long-term contract lock-in",
  "Kickoff fees or setup costs",
];

export function HirePricing() {
  return (
    <section className="bg-zinc-50 border-y border-zinc-100 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-14">
          <div data-reveal>
            <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
              The Math
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
              Same Senior Engineer.
              <br />
              <span className="text-zinc-300">A Quarter the Cost.</span>
            </h2>
          </div>
          <p data-reveal data-reveal-delay="120" className="text-zinc-500 text-lg leading-relaxed lg:max-w-md lg:ml-auto">
            Indicative hourly rates for a senior full-stack engineer (5+ yrs). Source: Glassdoor,
            Levels.fyi, Toptal, internal benchmarks.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12" data-reveal-group>
          {comparison.map((c) => (
            <div
              key={c.region}
              data-reveal
              className="relative rounded-2xl p-6 border transition-all"
              style={{
                background: c.accent ? "#1B1F3B" : "#fff",
                borderColor: c.accent ? "#1B1F3B" : "#e4e4e7",
                color: c.accent ? "#fff" : "inherit",
              }}
            >
              {c.accent && (
                <span className="absolute -top-3 right-5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#FF751F] text-white">
                  Best Value
                </span>
              )}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl leading-none">{c.flag}</span>
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: c.accent ? "rgba(255,255,255,0.7)" : "#a1a1aa" }}
                >
                  {c.region}
                </p>
              </div>
              <p
                className="text-3xl font-black tracking-tight tabular-nums leading-none mb-1"
                style={{ color: c.accent ? "#FF751F" : "#000" }}
              >
                {c.rate}
              </p>
              <p
                className="text-xs mb-4"
                style={{ color: c.accent ? "rgba(255,255,255,0.5)" : "#a1a1aa" }}
              >
                per hour
              </p>
              <div className="space-y-1 pt-3 border-t" style={{ borderColor: c.accent ? "rgba(255,255,255,0.1)" : "#f4f4f5" }}>
                <div className="flex justify-between text-xs">
                  <span style={{ color: c.accent ? "rgba(255,255,255,0.5)" : "#a1a1aa" }}>Annual</span>
                  <span className="font-semibold tabular-nums">{c.annual}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span style={{ color: c.accent ? "rgba(255,255,255,0.5)" : "#a1a1aa" }}>Plus</span>
                  <span className="font-semibold">{c.overhead}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What's included / not included */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div data-reveal className="bg-white rounded-2xl border border-zinc-100 p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4">
              ✓ Always included
            </p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-emerald-600" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal data-reveal-delay="120" className="bg-white rounded-2xl border border-zinc-100 p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
              ✗ What you won&apos;t pay for
            </p>
            <ul className="space-y-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
                    <X size={11} className="text-zinc-500" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-zinc-400 mt-5 leading-relaxed">
              We charge a transparent flat hourly rate. No recruitment fees, no setup fees, no
              kickbacks. Cancel any month with 30 days&apos; notice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
