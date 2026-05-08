"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Clock4, Users, Sparkles, TrendingDown } from "lucide-react";

const rotatingWords = ["Engineers", "Designers", "AI Experts", "Mobile Devs", "DevOps"];

const stats = [
  { value: "70%", label: "Cost savings vs. US/UK" },
  { value: "Top 8%", label: "Acceptance rate" },
  { value: "7 days", label: "From brief to start" },
  { value: "2-week", label: "Risk-free trial" },
];

export function HireHero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % rotatingWords.length);
        setVisible(true);
      }, 280);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white pt-28 pb-20 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* ── Background layers ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.5)_50%,transparent_100%)]" />
      <div
        className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(255,117,31,0.25) 0%, transparent 70%)",
          animation: "hero-float-slow 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(123,92,255,0.25) 0%, transparent 70%)",
          animation: "hero-float-mid 11s ease-in-out infinite",
          animationDelay: "1.5s",
        }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Live status pill */}
        <div className="inline-flex items-center gap-2 bg-zinc-950 rounded-full pl-2 pr-4 py-1.5 mb-8">
          <span className="inline-flex items-center gap-1.5 bg-[#FF751F] rounded-full px-2 py-0.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live</span>
          </span>
          <span className="text-xs font-medium text-zinc-300">
            <strong className="text-white">23</strong> engineers browsing this page
          </span>
        </div>

        {/* Headline + decorative chips wrapper (relative for positioning) */}
        <div className="relative mb-7">
          {/* Decorative floating chips — siblings of h1, no inherited tracking */}
          <span
            className="hidden md:inline-flex absolute left-2 lg:-left-4 -top-2 lg:top-2 z-20 items-center gap-1.5 bg-white border border-zinc-200 rounded-full px-3 py-1.5 shadow-md text-xs font-semibold text-zinc-700 tracking-normal"
            style={{ animation: "hero-float-mid 5.5s ease-in-out infinite", transform: "rotate(-8deg)" }}
          >
            <Sparkles size={11} className="text-[#FF751F]" />
            Top 8%
          </span>
          <span
            className="hidden md:inline-flex absolute right-2 lg:-right-2 top-12 lg:top-16 z-20 items-center gap-1.5 bg-zinc-950 rounded-full px-3 py-1.5 shadow-lg text-xs font-bold text-white tracking-normal"
            style={{ animation: "hero-float-slow 6.5s ease-in-out infinite", animationDelay: "0.6s", transform: "rotate(6deg)" }}
          >
            <TrendingDown size={11} className="text-emerald-400" />
            Save $98k / yr
          </span>
          <span
            className="hidden md:inline-flex absolute left-1 lg:-left-2 bottom-2 z-20 items-center gap-1.5 bg-[#FF751F] rounded-full px-3 py-1.5 shadow-lg text-xs font-bold text-white tracking-normal"
            style={{ animation: "hero-float-fast 5s ease-in-out infinite", animationDelay: "1.2s", transform: "rotate(-4deg)" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            Available now
          </span>
          <span
            className="hidden lg:inline-flex absolute -right-4 bottom-4 z-20 items-center gap-1.5 bg-white border border-zinc-200 rounded-full px-3 py-1.5 shadow-md text-xs font-semibold text-zinc-700 tracking-normal"
            style={{ animation: "hero-float-slow 7s ease-in-out infinite", animationDelay: "0.3s", transform: "rotate(5deg)" }}
          >
            <span className="text-base leading-none">🇧🇩</span>
            Dhaka, BD
          </span>

          {/* Headline — always 2 lines via whitespace-nowrap on each line */}
          <h1 className="text-[40px] sm:text-6xl lg:text-[80px] font-black tracking-tight leading-[1.05] text-black">
            <span className="block whitespace-nowrap">
              Build with{" "}
              <span className="relative inline-block align-baseline">
                <span
                  className="relative z-10 text-white px-2 sm:px-3 py-0.5 sm:py-1 inline-block transition-all duration-280 tracking-tight"
                  style={{
                    background: "#FF751F",
                    transform: "rotate(-1.2deg)",
                    display: "inline-block",
                    opacity: visible ? 1 : 0,
                    translate: visible ? "0 0" : "0 -8px",
                  }}
                >
                  {rotatingWords[wordIdx]}
                </span>
              </span>
            </span>
            <span className="block whitespace-nowrap">
              at a third the <span className="text-zinc-300">price.</span>
            </span>
          </h1>
        </div>

        {/* Body */}
        <p className="text-zinc-500 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Pre-vetted senior engineers from Bangladesh. UK & US timezone overlap.
          Start in <strong className="text-black">7 days</strong>, scale anytime,
          cancel anytime — zero hiring overhead.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-black text-white text-base font-semibold hover:bg-zinc-800 transition-colors cursor-pointer group"
          >
            Hire a Developer
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#process"
            className="h-14 px-6 inline-flex items-center text-base font-semibold text-zinc-500 hover:text-black transition-colors cursor-pointer"
          >
            See how it works →
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[#FF751F]" />
            <span>2-week trial</span>
          </div>
          <span className="text-zinc-300">·</span>
          <div className="flex items-center gap-1.5">
            <Clock4 size={14} className="text-[#FF751F]" />
            <span>Start in 7 days</span>
          </div>
          <span className="text-zinc-300">·</span>
          <div className="flex items-center gap-1.5">
            <Users size={14} className="text-[#FF751F]" />
            <span>Top 8% acceptance rate</span>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-100" data-reveal-group>
          {stats.map((s) => (
            <div key={s.label} data-reveal className="bg-white p-6 text-center">
              <p className="text-2xl sm:text-3xl font-black text-black tracking-tight tabular-nums">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
