import { ArrowUpRight, User, Users, Briefcase } from "lucide-react";

const models = [
  {
    icon: User,
    title: "Dedicated Developer",
    pitch: "One developer, full-time, 100% on your project.",
    description:
      "You direct the work, sprint planning, and priorities. We handle payroll, HR, equipment, and retention.",
    bestFor: "Long-term builds, ongoing product work, embedded engineers",
    starts: "From $25/hr",
    color: "#1B1F3B",
    features: [
      "40 hrs/week, your timezone",
      "Direct Slack/Linear access",
      "You own the IP",
      "Replace anytime, free",
    ],
  },
  {
    icon: Users,
    title: "Team Augmentation",
    pitch: "Plug a full squad into your existing team.",
    description:
      "2–10 engineers, designers, and QA working as one of your pods. Daily standups in your time zone.",
    bestFor: "Scaling sprint capacity, accelerating roadmaps",
    starts: "From $22/hr per dev",
    color: "#FF751F",
    badge: "Most popular",
    features: [
      "Cross-functional pods",
      "Engineering manager included",
      "Flexible team sizing",
      "Weekly demos & reports",
    ],
  },
  {
    icon: Briefcase,
    title: "Project-Based",
    pitch: "Fixed scope, fixed price, fixed timeline.",
    description:
      "We scope, design, and deliver the whole thing. End-to-end ownership with milestone-based billing.",
    bestFor: "MVPs, isolated features, bounded projects",
    starts: "From $5,000",
    color: "#0E3A35",
    features: [
      "Discovery & spec included",
      "Milestone-based payments",
      "Production-ready handoff",
      "30 days post-launch support",
    ],
  },
];

export function HireModels() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-14">
          <div data-reveal>
            <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
              Hiring Models
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
              Pick The Engagement
              <br />
              <span className="text-zinc-300">That Fits.</span>
            </h2>
          </div>
          <p data-reveal data-reveal-delay="120" className="text-zinc-500 text-lg leading-relaxed lg:max-w-md lg:ml-auto">
            Three flexible ways to work with us. Switch between them anytime as your needs change.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" data-reveal-group>
          {models.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                data-reveal
                className="relative flex flex-col gap-5 p-7 rounded-2xl border bg-white"
                style={{ borderColor: m.badge ? m.color : "#e4e4e7" }}
              >
                {m.badge && (
                  <span
                    className="absolute -top-3 left-7 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                    style={{ background: m.color }}
                  >
                    {m.badge}
                  </span>
                )}

                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: m.color + "12" }}
                  >
                    <Icon size={18} strokeWidth={2} style={{ color: m.color }} />
                  </div>
                  <span
                    className="text-[11px] font-semibold tracking-wider uppercase"
                    style={{ color: m.color, opacity: 0.7 }}
                  >
                    {m.starts}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-zinc-900 leading-tight mb-1">{m.title}</h3>
                  <p className="text-sm font-semibold text-zinc-700 leading-snug mb-3">{m.pitch}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{m.description}</p>
                </div>

                <ul className="space-y-2 pt-1">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-zinc-600">
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: m.color }}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                    Best for
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color: m.color }}
                  >
                    Get a quote <ArrowUpRight size={13} />
                  </a>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed -mt-3">{m.bestFor}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
