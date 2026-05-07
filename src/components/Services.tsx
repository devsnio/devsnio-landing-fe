import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI Automation",
    tagline: "Let machines do the repetitive work.",
    description:
      "We map your manual workflows and replace them with intelligent, always-on systems. From data pipelines to multi-step AI agents — we automate work that drains your team.",
    capabilities: [
      "Workflow Automation",
      "AI Agent Development",
      "LLM Integration",
      "Data Pipeline Engineering",
      "RPA & Process Automation",
      "Intelligent Scheduling",
    ],
  },
  {
    number: "02",
    title: "AI Development",
    tagline: "Embed intelligence directly into your product.",
    description:
      "Custom AI features built into your product — not bolted on. From RAG-powered search and AI copilots to computer vision and predictive models that actually ship.",
    capabilities: [
      "Custom LLM Applications",
      "RAG Systems & Vector Search",
      "Fine-tuning & Evaluation",
      "Computer Vision",
      "AI Chatbots & Copilots",
      "Predictive Analytics",
    ],
  },
  {
    number: "03",
    title: "Custom Software",
    tagline: "Clean code. Built to last.",
    description:
      "Performant web apps and APIs built to your exact requirements. TypeScript, React, Next.js, Node — modern stack, zero bloat, and architecture that your team can own and extend.",
    capabilities: [
      "Web Applications",
      "REST & GraphQL APIs",
      "Admin Dashboards",
      "E-commerce Platforms",
      "CMS & Content Tools",
      "Third-party Integrations",
    ],
  },
  {
    number: "04",
    title: "SaaS Building",
    tagline: "From zero to paying users.",
    description:
      "We design and build complete SaaS products — auth, billing, multi-tenancy, dashboards, customer portals. Everything you need to go from idea to revenue.",
    capabilities: [
      "Full-Stack SaaS Architecture",
      "Auth & User Management",
      "Stripe / Billing & Subscriptions",
      "Multi-tenancy & Permissions",
      "Analytics & Reporting",
      "Customer Portal & Onboarding",
    ],
  },
  {
    number: "05",
    title: "MVP Development",
    tagline: "Validate fast. Build what matters.",
    description:
      "We take your idea from whiteboard to working product in weeks, not months. Tight scope, clear milestones, and a launchable MVP you can show investors and real users.",
    capabilities: [
      "Rapid Prototyping",
      "Product Scoping & Roadmap",
      "UI/UX Design & Build",
      "Core Feature Engineering",
      "Launch & Deployment",
      "Post-launch Iteration",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-16 sm:mb-20">
          <div>
            <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
              What We Build
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
              Services That
              <br />
              <span className="text-zinc-300">Drive Results.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-lg leading-relaxed lg:max-w-sm lg:ml-auto">
            Every service is a fully staffed engagement — not a freelancer handoff. We own the outcome.
          </p>
        </div>

        {/* Service rows */}
        <div className="divide-y divide-zinc-100">
          {services.map((service, i) => (
            <div
              key={service.number}
              className="group relative grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-10 py-10 sm:py-12 cursor-default transition-all duration-200 hover:pl-4"
            >
              {/* Hover accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#FF751F] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full" />

              {/* Number */}
              <div className="flex items-start lg:pt-1">
                <span className="text-sm font-black text-zinc-300 group-hover:text-[#FF751F] transition-colors duration-200 tabular-nums">
                  {service.number}
                </span>
              </div>

              {/* Title + tagline + description */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-black mb-2 tracking-tight group-hover:text-zinc-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-semibold text-[#FF751F] mb-4">
                  {service.tagline}
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>

              {/* Capabilities + CTA */}
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                    What&apos;s included
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {service.capabilities.map((cap, j) => (
                      <div key={cap} className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-zinc-300 tabular-nums">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-zinc-600 group-hover:text-zinc-700 transition-colors">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 w-fit"
                >
                  Start this service
                  <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight size={12} className="text-white" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-10 border-t border-zinc-100">
          <p className="text-zinc-500 text-sm max-w-sm">
            Not sure which service fits? Tell us your problem and we&apos;ll figure it out together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#FF751F] transition-colors whitespace-nowrap"
          >
            Talk to us
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
