"use client";

import { useState, useEffect, useRef } from "react";
import { Zap, Target, ShieldCheck, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    number: "01",
    title: "We Ship Fast",
    label: "Speed",
    description:
      "MVPs in weeks, not months. We use AI-assisted development and lean processes to move at speed without sacrificing quality.",
    stat: "4–6 wks",
    statLabel: "avg. time to MVP",
    color: "#FF751F",
  },
  {
    icon: Target,
    number: "02",
    title: "Outcome-Focused",
    label: "Results",
    description:
      "We don't bill by the hour and disappear. We care about your metrics — user growth, revenue, and retention.",
    stat: "2×",
    statLabel: "faster growth for clients",
    color: "#7B5CFF",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Built to Scale",
    label: "Quality",
    description:
      "Clean architecture, proper testing, and cloud-native infrastructure from day one. No re-writes six months later.",
    stat: "0",
    statLabel: "critical re-writes",
    color: "#00C6A9",
  },
];

export function WhyUs() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const current = reasons[active];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % reasons.length);
    }, 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleTabClick = (i: number) => {
    setActive(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % reasons.length);
    }, 3500);
  };

  return (
    <section id="why-us" className="bg-white py-24 sm:py-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16">
          <p data-reveal className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
            Why devsnio
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 data-reveal className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
              Not Just Devs.
              <br />
              <span className="text-zinc-300">Product Partners.</span>
            </h2>
            <p data-reveal data-reveal-delay="160" className="text-zinc-500 text-base leading-relaxed max-w-xs">
              Most agencies write code. We think about your users, your market,
              and your growth — then write the code that moves those numbers.
            </p>
          </div>
        </div>

        {/* Main interactive area */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Left — tab list */}
          <div className="flex flex-col gap-3">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              const isActive = active === i;
              return (
                <button
                  key={r.number}
                  onClick={() => handleTabClick(i)}
                  className="group text-left rounded-2xl border transition-all duration-300 cursor-pointer"
                  style={{
                    borderColor: isActive ? r.color + "40" : "#f4f4f5",
                    background: isActive ? r.color + "08" : "#fff",
                    padding: isActive ? "24px" : "20px 24px",
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon circle */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: isActive ? r.color : "#f4f4f5",
                      }}
                    >
                      <Icon
                        size={18}
                        style={{ color: isActive ? "#fff" : "#a1a1aa" }}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Title + number */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className="text-xs font-bold tabular-nums"
                          style={{ color: isActive ? r.color : "#a1a1aa" }}
                        >
                          {r.number}
                        </span>
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                          style={{
                            background: isActive ? r.color + "18" : "#f4f4f5",
                            color: isActive ? r.color : "#a1a1aa",
                          }}
                        >
                          {r.label}
                        </span>
                      </div>
                      <p
                        className="font-black text-base transition-colors duration-200"
                        style={{ color: isActive ? "#0f0f0f" : "#71717a" }}
                      >
                        {r.title}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight
                      size={16}
                      className="flex-shrink-0 transition-all duration-200"
                      style={{
                        color: isActive ? r.color : "#d4d4d8",
                        transform: isActive ? "translateX(2px)" : "translateX(0)",
                      }}
                    />
                  </div>

                  {/* Expanded body */}
                  {isActive && (
                    <p className="text-sm text-zinc-500 leading-relaxed mt-4 pl-[60px]">
                      {r.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right — stat panel */}
          <div
            className="rounded-3xl flex flex-col justify-between p-8 sm:p-10 min-h-[320px] relative overflow-hidden transition-all duration-500"
            style={{ background: current.color }}
          >
            {/* Subtle radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.18) 0%, transparent 70%)",
              }}
            />

            {/* Big faded number */}
            <div
              className="absolute -bottom-6 -right-4 font-black leading-none select-none pointer-events-none"
              style={{ fontSize: "160px", color: "#fff", opacity: 0.07, letterSpacing: "-0.04em" }}
            >
              {current.number}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <current.icon size={22} strokeWidth={1.8} className="text-white" />
              </div>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-1">
                {current.label}
              </p>
              <p className="text-white text-xl font-black leading-snug max-w-[220px]">
                {current.title}
              </p>
            </div>

            {/* Stat */}
            <div className="relative z-10">
              <p
                className="font-black text-white leading-none mb-1"
                style={{ fontSize: "clamp(48px, 8vw, 72px)" }}
              >
                {current.stat}
              </p>
              <p className="text-white/60 text-sm font-medium">{current.statLabel}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
