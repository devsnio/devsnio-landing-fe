import { MessageSquare, FileSearch, Rocket, BarChart2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery & Strategy",
    color: "#FF751F",
    description: "We start with a focused call to understand your goals, users, and constraints — then define a clear product roadmap and the right tech approach.",
    details: ["Requirements", "Tech stack", "Scope","Timeline"],
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Design & Architecture",
    color: "#7B5CFF",
    description: "Before writing a line of code, we design the system architecture and UX flows. Schema, API contracts, and component hierarchy — all agreed upfront.",
    details: ["System design", "UX wireframes", "API contracts"],
  },
  {
    icon: Rocket,
    number: "03",
    title: "Build & Ship Fast",
    color: "#00C6A9",
    description: "Weekly sprints with working demos every Friday. CI/CD ships to staging continuously so you can test with real users as early as week three.",
    details: ["Weekly demos", "CI/CD pipeline", "Staging deploys"],
  },
  {
    icon: BarChart2,
    number: "04",
    title: "Launch & Scale",
    color: "#FF4E9F",
    description: "Go-live is just the start. We monitor, tune performance, and iterate on real user data. Full handoff docs so your team can own it confidently.",
    details: ["Production", "Monitoring", "Handoff & docs"],
  },
];

export function Workflow() {
  return (
    <section id="process" className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
            From Idea to Live
            <br />
            <span className="text-zinc-300">In Weeks.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="bg-white p-8 flex flex-col gap-8">
                {/* Top row: icon + number */}
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

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg font-black text-black mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-loose">
                    {step.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="grid grid-cols-2 gap-2 pt-5 border-t border-zinc-100 mt-auto">
                  {step.details.map((d) => (
                    <span
                      key={d}
                      className="text-[10px] font-semibold px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-center"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer row */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-zinc-100">
          <p className="text-sm text-zinc-400">Typical delivery: concept to production in 6–8 weeks.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#FF751F] transition-colors"
          >
            Start your project
            <span className="text-[#FF751F]">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
