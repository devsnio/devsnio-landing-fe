import { MessageSquare, ListChecks, Handshake, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell us what you need",
    desc: "Share your stack, role, seniority, and timezone preferences. A 30-min call to understand fit.",
    duration: "Day 1",
    color: "#FF751F",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "We shortlist 3–5 candidates",
    desc: "From our pre-vetted bench. Each has been technically tested, reference-checked, and English-screened.",
    duration: "Days 2–4",
    color: "#7B5CFF",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Interview & select",
    desc: "Meet the shortlist. Run your own tech interview, take-home, or pair-programming session. Pick your favorite.",
    duration: "Days 4–6",
    color: "#00C6A9",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Onboard & ship",
    desc: "Day 7 onward — they're in your Slack, your sprint, your codebase. We handle contracts, payroll, and equipment.",
    duration: "Day 7+",
    color: "#FF4E9F",
  },
];

export function HireProcess() {
  return (
    <section id="process" className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 max-w-xl" data-reveal>
          <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
            From Brief to Hire
            <br />
            <span className="text-zinc-300">In One Week.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100" data-reveal-group>
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} data-reveal className="bg-white p-8 flex flex-col gap-8">
                <div className="flex items-start justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: step.color }}
                  >
                    <Icon size={24} className="text-white" strokeWidth={1.6} />
                  </div>
                  <span
                    className="text-5xl font-black leading-none tabular-nums select-none"
                    style={{ color: step.color, opacity: 0.15 }}
                  >
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-black text-zinc-900 text-lg leading-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-loose">{step.desc}</p>
                </div>

                <div className="mt-auto">
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600"
                  >
                    {step.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm max-w-md">
            <strong className="text-black">2-week risk-free trial</strong> on every hire. If
            they&apos;re not the right fit, swap them — no questions asked.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#FF751F] transition-colors whitespace-nowrap"
          >
            Start hiring →
          </a>
        </div>
      </div>
    </section>
  );
}
