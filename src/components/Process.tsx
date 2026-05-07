const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your idea, constraints, and goals. No forms — just a real conversation to see if we're a fit.",
  },
  {
    number: "02",
    title: "Scope & Plan",
    description:
      "We define exactly what we're building, the tech stack, timeline, and milestones. Full transparency, no surprises.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "We ship working software fast. Weekly demos, tight feedback loops, and constant delivery — never dark for weeks.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We don't drop you at go-live. We support the launch, monitor systems, and help you iterate based on real user data.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-zinc-50 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
            Simple Process.
            <br />
            <span className="text-zinc-400">Zero Surprises.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-zinc-200 z-0 -translate-x-1/2" />
              )}
              <div className="relative z-10 bg-white rounded-2xl border border-zinc-200 p-6 hover:shadow-md transition-shadow">
                <span className="inline-block text-xs font-black text-[#FF751F] bg-orange-50 rounded-full px-3 py-1 mb-4">
                  {step.number}
                </span>
                <h3 className="font-bold text-black mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
