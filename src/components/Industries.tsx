"use client";

import { useRef, useState } from "react";
import {
  ChevronLeft, ChevronRight, ArrowUpRight,
  ShoppingBag, CreditCard, Cpu, Heart, Building2, GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  { name: "E-Commerce",      bg: "#FF6B35", dark: false, icon: ShoppingBag,   tag: "Retail & DTC",       desc: "Storefronts, cart flows, and product catalogues built to scale — from 10 to 10,000 SKUs." },
  { name: "FinTech",         bg: "#1B1F3B", dark: false, icon: CreditCard,    tag: "Payments & Finance", desc: "Secure, compliant financial tools — from payment gateways to investment dashboards." },
  { name: "SaaS & Startups", bg: "#C3F53C", dark: true,  icon: Cpu,           tag: "Zero to One",        desc: "Zero to one, fast. Auth, billing, and real traction built in from day one." },
  { name: "HealthTech",      bg: "#7B5CFF", dark: false, icon: Heart,         tag: "Patient Platforms",  desc: "Patient-first platforms that clinicians and patients genuinely love." },
  { name: "Corporate",       bg: "#FF4E9F", dark: false, icon: Building2,     tag: "Enterprise Tools",   desc: "Internal tools and AI automations that make large organisations move faster." },
  { name: "EdTech",          bg: "#00C6A9", dark: false, icon: GraduationCap, tag: "Future Learning",    desc: "LMS, live classrooms, and AI tutors built for modern learners." },
];

const VISIBLE = 3.5; // 3 full cards + half of 4th as scroll hint
const GAP = 20;
const MAX_PAGE = industries.length - Math.floor(VISIBLE); // 3

type Industry = typeof industries[number];

function IndustryCard({ ind, index }: { ind: Industry; index: number }) {
  const Icon = ind.icon;
  const tc = ind.dark ? "#0f0f0f" : "#fff";
  const num = String(index + 1).padStart(2, "0");
  const glassAlpha = ind.dark ? "0,0,0" : "255,255,255";

  return (
    <div
      className="relative flex-none rounded-3xl overflow-hidden h-96"
      style={{ background: ind.bg, width: "calc(min(100vw, 72rem) / 3.5 - 17px)" }}
    >
      {/* Big faded number — background texture */}
      <div
        className="absolute -bottom-6 -right-3 text-[128px] font-black leading-none select-none pointer-events-none"
        style={{ color: tc, opacity: 0.07, letterSpacing: "-0.04em" }}
      >
        {num}
      </div>

      {/* Subtle radial glow at top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(${glassAlpha},0.18) 0%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col p-6">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: `rgba(${glassAlpha},0.14)` }}
          >
            <Icon size={20} strokeWidth={1.8} style={{ color: tc }} />
          </div>
          <span
            className="text-xs font-bold tabular-nums tracking-widest uppercase"
            style={{ color: tc, opacity: 0.35 }}
          >
            {num}
          </span>
        </div>

        {/* Tag chip */}
        <div className="mt-4">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{
              background: `rgba(${glassAlpha},0.14)`,
              color: tc,
              opacity: 0.85,
            }}
          >
            {ind.tag}
          </span>
        </div>

        {/* Bottom text + arrow */}
        <div className="mt-auto">
          <p className="text-2xl font-black leading-tight mb-2" style={{ color: tc }}>
            {ind.name}
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: tc, opacity: 0.72 }}>
            {ind.desc}
          </p>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: `rgba(${glassAlpha},0.18)` }}
          >
            <ArrowUpRight size={16} style={{ color: tc }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Industries() {
  const maskRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [touch, setTouch] = useState(0);

  const getStep = () => {
    // Cap at content width (max-w-6xl = 1152px) so cards stay consistent regardless of viewport
    const w = Math.min(maskRef.current?.offsetWidth ?? 1152, 1152);
    return w / VISIBLE + 2.86;
  };

  const move = (dir: "prev" | "next") => {
    setPage((p) => {
      if (dir === "next") return Math.min(MAX_PAGE, p + 1);
      return Math.max(0, p - 1);
    });
  };

  const offset = page * getStep();

  return (
    <section className="bg-zinc-950 py-24 sm:py-32 overflow-hidden">

      {/* Header — constrained to content width */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
              Our Expertise
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-white">
              Industries
              <br />
              <span className="text-zinc-600">We Excel In.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="text-sm text-zinc-500 font-medium tabular-nums hidden sm:block">
              {String(page + 1).padStart(2, "0")} — {String(MAX_PAGE + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => move("prev")}
                aria-label="Previous"
                disabled={page === 0}
                className={cn(
                  "w-11 h-11 rounded-full border flex items-center justify-center transition-all cursor-pointer",
                  page === 0
                    ? "border-zinc-800 bg-zinc-900 text-zinc-700 cursor-not-allowed"
                    : "border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:border-zinc-600"
                )}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => move("next")}
                aria-label="Next"
                disabled={page === MAX_PAGE}
                className={cn(
                  "w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer",
                  page === MAX_PAGE
                    ? "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                    : "bg-white text-black hover:bg-zinc-200"
                )}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel — left-aligned with content, bleeds to right viewport edge */}
      <div
        ref={maskRef}
        className="overflow-visible"
        style={{ paddingLeft: "max(calc((100vw - 72rem) / 2 + 1.5rem), 1rem)" }}
        onTouchStart={(e) => setTouch(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const diff = touch - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) move(diff > 0 ? "next" : "prev");
        }}
      >
        <div
          className="flex gap-5 will-change-transform"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {industries.map((ind, i) => (
            <IndustryCard key={ind.name} ind={ind} index={i} />
          ))}
        </div>
      </div>

      {/* Dots — back in content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: MAX_PAGE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                height: "6px",
                width: i === page ? "24px" : "6px",
                background: i === page ? "#FF751F" : "#3f3f46",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
