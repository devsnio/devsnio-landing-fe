"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft, ChevronRight,
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

const GAP = 20;

type Industry = typeof industries[number];

function IndustryCard({ ind }: { ind: Industry }) {
  const Icon = ind.icon;
  const tc = ind.dark ? "#0f0f0f" : "#fff";
  const glassAlpha = ind.dark ? "0,0,0" : "255,255,255";

  return (
    <div
      className="industry-card relative flex-none rounded-3xl overflow-hidden h-[360px] sm:h-96 w-[82vw] sm:w-[calc((100vw-3rem)/2.2-11px)] lg:w-[calc(min(100vw,72rem)/3.5-17px)] max-w-[400px] sm:max-w-none"
      style={{ background: ind.bg }}
    >
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
        <div className="flex items-start">
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: `rgba(${glassAlpha},0.14)` }}
          >
            <Icon size={20} strokeWidth={1.8} style={{ color: tc }} />
          </div>
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

        {/* Bottom text */}
        <div className="mt-auto">
          <p className="text-2xl font-black leading-tight mb-2" style={{ color: tc }}>
            {ind.name}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: tc, opacity: 0.72 }}>
            {ind.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Industries() {
  const maskRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [touch, setTouch] = useState(0);
  const [visible, setVisible] = useState(3.5);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisible(w < 640 ? 1.15 : w < 1024 ? 2.2 : 3.5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxPage = Math.max(0, industries.length - Math.floor(visible));

  // Clamp page if visible changes (e.g. on resize past breakpoint)
  useEffect(() => {
    setPage((p) => Math.min(p, maxPage));
  }, [maxPage]);

  const getStep = () => {
    const card = maskRef.current?.querySelector(".industry-card") as HTMLElement | null;
    return (card?.offsetWidth ?? 300) + GAP;
  };

  const move = (dir: "prev" | "next") => {
    setPage((p) => {
      if (dir === "next") return Math.min(maxPage, p + 1);
      return Math.max(0, p - 1);
    });
  };

  const offset = page * getStep();

  return (
    <section className="bg-zinc-950 py-24 sm:py-32 overflow-hidden">

      {/* Header — constrained to content width */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-12">
          <div data-reveal>
            <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
              Our Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Industries
              <br />
              <span className="text-zinc-600">We Excel In.</span>
            </h2>
          </div>

          <div data-reveal data-reveal-delay="160" className="flex items-center gap-4 flex-shrink-0">
            <span className="text-sm text-zinc-500 font-medium tabular-nums hidden sm:block">
              {String(page + 1).padStart(2, "0")} — {String(maxPage + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => move("prev")}
                aria-label="Previous"
                disabled={page === 0}
                className={cn(
                  "w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all cursor-pointer",
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
                disabled={page === maxPage}
                className={cn(
                  "w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all cursor-pointer",
                  page === maxPage
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
          {industries.map((ind) => (
            <IndustryCard key={ind.name} ind={ind} />
          ))}
        </div>
      </div>

      {/* Dots — back in content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
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
