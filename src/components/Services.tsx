"use client";

import { useState } from "react";
import { ArrowUpRight, Bot, Cpu, Code2, Layers, Rocket, Smartphone } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    color: "#1B1F3B",
    description: "From whiteboard to working product in weeks. Tight scope, clear milestones, and a launchable MVP you can show investors and real users.",
    capabilities: ["Rapid Prototyping", "Product Scoping", "UI/UX Design", "Core Engineering", "Launch & Deploy", "Post-launch Iteration"],
  },
  {
    icon: Layers,
    title: "SaaS Building",
    color: "#3D1733",
    description: "Complete SaaS products — auth, billing, multi-tenancy, dashboards, and customer portals. Everything you need to go from idea to revenue.",
    capabilities: ["Full-Stack Architecture", "Auth & Users", "Billing & Subscriptions", "Multi-tenancy", "Analytics", "Customer Portal"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    color: "#0E3A35",
    description: "Performant web apps and APIs built to your exact requirements. Modern stack, zero bloat, and architecture your team can own and extend.",
    capabilities: ["Web Applications", "REST & GraphQL APIs", "Admin Dashboards", "E-commerce", "CMS & Content Tools", "Integrations"],
  },
  {
    icon: Cpu,
    title: "AI Development",
    color: "#251C4A",
    description: "Custom AI features built into your product — not bolted on. RAG-powered search, AI copilots, computer vision, and predictive models that actually ship.",
    capabilities: ["Custom LLM Apps", "RAG & Vector Search", "Fine-tuning", "Computer Vision", "AI Copilots", "Predictive Analytics"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    color: "#0A2D3D",
    description: "Native and cross-platform mobile apps built for performance and scale. From iOS to Android — polished UX, clean architecture, and ready to ship.",
    capabilities: ["React Native", "Flutter", "iOS & Android", "Push Notifications", "Offline Support", "App Store Launch"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    color: "#3D1E0A",
    description: "We map your manual workflows and replace them with intelligent, always-on systems. From data pipelines to multi-step AI agents — we automate work that drains your team.",
    capabilities: ["Workflow Automation", "AI Agents", "LLM Integration", "Data Pipelines", "RPA", "Intelligent Scheduling"],
  },
];

export function Services() {
  // One card is always open. Hover swaps which one — never closes to "none".
  const [hovered, setHovered] = useState<number>(0);

  return (
    <section id="services" className="bg-white pb-24 sm:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-16">
          <div data-reveal>
            <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
              What We Build
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
              Services That
              <br />
              <span className="text-zinc-300">Drive Results.</span>
            </h2>
          </div>
          <p data-reveal data-reveal-delay="120" className="text-zinc-500 text-lg leading-relaxed lg:max-w-sm lg:ml-auto">
            Every service is a fully staffed engagement — not a freelancer handoff. We own the outcome.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-reveal-group>
          {services.map((s, i) => {
            const Icon = s.icon;
            const isHovered = hovered === i;

            return (
              <div
                key={s.title}
                data-reveal
                className="relative flex flex-col justify-between rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: isHovered ? s.color : "#f3f3f2",
                  height: "360px",
                  padding: "28px",
                  transition: "background 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                tabIndex={0}
              >
                {/* Title — always visible, color switches */}
                <h3
                  className="text-[22px] font-black leading-tight tracking-tight transition-colors duration-300 max-w-[80%]"
                  style={{ color: isHovered ? "#fff" : "#18181b" }}
                >
                  {s.title}
                </h3>

                {/* Default visual — large icon centered */}
                <div
                  className="absolute inset-0 flex items-end justify-end p-6 transition-all duration-300"
                  style={{ opacity: isHovered ? 0 : 1, transform: isHovered ? "scale(0.92)" : "scale(1)" }}
                >
                  <div
                    className="w-32 h-32 rounded-3xl flex items-center justify-center"
                    style={{ background: s.color + "14" }}
                  >
                    <Icon size={56} strokeWidth={1.4} style={{ color: s.color }} />
                  </div>
                </div>

                {/* Hover content — description + chips + CTA */}
                <div
                  className="flex flex-col justify-end gap-5 transition-all duration-300"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  <p className="text-[13px] text-white/80 leading-relaxed">{s.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {s.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 self-start bg-white rounded-full px-5 py-2.5 text-[13px] font-bold transition-opacity hover:opacity-90"
                    style={{ color: s.color }}
                  >
                    Start a Project <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm max-w-sm">
            Not sure which service fits? Tell us your problem and we'll figure it out together.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#FF751F] transition-colors whitespace-nowrap">
            Talk to us <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
