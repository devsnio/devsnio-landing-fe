"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

const rotatingWords = ["MVPs", "SaaS", "Mobile Apps", "AI Tools", "Web Apps"];

export function Hero() {
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
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">

      {/* ── Background effects ── */}

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient mesh — slow drifting orbs */}
      <div
        className="absolute -top-40 left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(circle at center, rgba(255,117,31,0.35) 0%, rgba(255,117,31,0) 70%)",
          animation: "hero-float-slow 14s ease-in-out infinite",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute top-[20%] -right-32 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at center, rgba(123,92,255,0.3) 0%, rgba(123,92,255,0) 70%)",
          animation: "hero-float-mid 18s ease-in-out infinite",
          animationDelay: "2s",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute -bottom-40 left-[25%] w-[550px] h-[550px] rounded-full pointer-events-none opacity-35"
        style={{
          background: "radial-gradient(circle at center, rgba(0,198,169,0.25) 0%, rgba(0,198,169,0) 70%)",
          animation: "hero-float-slow 16s ease-in-out infinite",
          animationDelay: "4s",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute bottom-[10%] right-[15%] w-[420px] h-[420px] rounded-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle at center, rgba(255,78,159,0.25) 0%, rgba(255,78,159,0) 70%)",
          animation: "hero-float-fast 12s ease-in-out infinite",
          animationDelay: "1s",
          filter: "blur(20px)",
        }}
      />

      {/* Center radial fade for legibility */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.5)_50%,transparent_100%)]" />

      {/* ── Content ── */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full py-12 lg:py-0 text-center">

        {/* Eyebrow / live badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full pl-2 pr-4 py-1.5 mb-8 shadow-sm">
          <span className="inline-flex items-center gap-1.5 bg-zinc-950 rounded-full px-2 py-0.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Available</span>
          </span>
          <span className="text-xs font-medium text-zinc-600">
            Booking projects for Q3
          </span>
        </div>

        {/* Headline — wraps naturally on mobile, locks to 2 lines on sm+ */}
        <h1 className="relative text-[40px] sm:text-7xl lg:text-[88px] font-black tracking-tight leading-[1.08] sm:leading-[1.02] mb-7">
          <span className="block sm:whitespace-nowrap">
            <span className="text-black">We Build </span>
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
          <span className="block sm:whitespace-nowrap">
            <span className="text-black">that </span>
            <span className="text-zinc-300">scale.</span>
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-zinc-500 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto mb-10">
          From intelligent automation to full-stack SaaS — we design, build,
          and launch products that grow with you. <strong className="text-black">No fluff, just results.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-black text-white hover:bg-zinc-800 h-14 px-8 text-base font-semibold inline-flex items-center gap-2 cursor-pointer group"
            )}
          >
            Start a Project
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="/#services"
            className="h-14 px-6 inline-flex items-center text-base font-semibold text-zinc-500 hover:text-black transition-colors cursor-pointer"
          >
            View Services →
          </a>
        </div>

        {/* Social proof — minimal inline strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-3 bg-white/60 backdrop-blur-sm border border-zinc-100 rounded-full px-5 py-2.5">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="devsnio"
              width={72}
              height={17}
              className="h-3.5 w-auto opacity-50"
            />
          </div>
          <div className="h-4 w-px bg-zinc-200" />
          <div className="flex items-center gap-1.5">
            <Zap size={12} className="text-[#FF751F]" />
            <span className="text-xs text-zinc-500">
              <strong className="text-black font-bold">40+</strong> projects shipped
            </span>
          </div>
          <div className="h-4 w-px bg-zinc-200" />
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-[#FF751F]" />
            <span className="text-xs text-zinc-500">
              <strong className="text-black font-bold">100%</strong> client satisfaction
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
