"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

const chartBars = [55, 72, 45, 88, 60, 78, 95, 65, 82, 70];
const rotatingWords = ["MVPs", "SaaS", "Mobile Apps", "AI Tools", "Web Apps"];

const sprintStages = [
  [
    { label: "Auth & onboarding", done: true },
    { label: "Stripe integration", done: false },
    { label: "Admin dashboard", done: false },
  ],
  [
    { label: "Auth & onboarding", done: true },
    { label: "Stripe integration", done: true },
    { label: "Admin dashboard", done: false },
  ],
  [
    { label: "Auth & onboarding", done: true },
    { label: "Stripe integration", done: true },
    { label: "Admin dashboard", done: true },
  ],
];

const revenueValues = ["$124,800", "$126,420", "$128,910", "$131,200"];

const deployVersions = [
  { version: "v2.4.0", build: "12s" },
  { version: "v2.4.1", build: "9s" },
  { version: "v2.5.0", build: "14s" },
];

export function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [stageIdx, setStageIdx] = useState(0);
  const [revenueIdx, setRevenueIdx] = useState(0);
  const [deployIdx, setDeployIdx] = useState(0);

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

  useEffect(() => {
    const id = setInterval(() => setStageIdx((s) => (s + 1) % sprintStages.length), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setRevenueIdx((r) => (r + 1) % revenueValues.length), 3200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setDeployIdx((d) => (d + 1) % deployVersions.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* White fade */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.6)_60%,transparent_100%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left ── */}
          <div className="relative z-10">
            {/* Live badge */}

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.04] mb-6">
              <span className="text-black">We Build</span>
              <br />
              <span className="relative inline-block">
                <span
                  className="relative z-10 text-white px-3 py-1 inline-block transition-all duration-280"
                  style={{
                    background: "#FF751F",
                    transform: "rotate(-1.2deg)",
                    display: "inline-block",
                    opacity: visible ? 1 : 0,
                    translate: visible ? "0 0" : "0 -6px",
                  }}
                >
                  {rotatingWords[wordIdx]}
                </span>
              </span>
              <br />
              <span className="text-black">Software</span>
              <br />
              <span className="text-zinc-300">That Scales.</span>
            </h1>

            {/* Body */}
            <p className="text-zinc-500 text-lg leading-relaxed max-w-md mb-8">
              From intelligent automation to full-stack SaaS — we design, build,
              and launch products that grow with you. No fluff, just results.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-black text-white hover:bg-zinc-800 h-14 px-8 text-base font-semibold inline-flex items-center gap-2 cursor-pointer"
                )}
              >
                Start a Project
                <ArrowRight size={16} />
              </a>
              <a
                href="/#services"
                className="h-14 px-6 inline-flex items-center text-base font-semibold text-zinc-500 hover:text-black transition-colors cursor-pointer gap-2"
              >
                View Services
              </a>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2">
                <Image src="/logo.svg" alt="devsnio" width={72} height={17} className="h-4 w-auto opacity-30" />
              </div>
              <div className="h-8 w-px bg-zinc-200" />
              <div className="flex items-center gap-1.5">
                <Zap size={13} className="text-[#FF751F]" />
                <span className="text-sm text-zinc-500"><strong className="text-black font-bold">40+</strong> projects shipped</span>
              </div>
              <div className="h-8 w-px bg-zinc-200" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#FF751F]" />
                <span className="text-sm text-zinc-500"><strong className="text-black font-bold">100%</strong> client satisfaction</span>
              </div>
            </div>
          </div>

          {/* ── Right — 3D floating UI scene ── */}
          <div
            className="relative hidden md:flex items-center justify-center h-[540px]"
            style={{ perspective: "1000px" }}
          >
            {/* 3D scene */}
            <div
              style={{
                transform: "rotateX(6deg) rotateY(-18deg) rotateZ(1deg)",
                transformStyle: "preserve-3d",
                position: "relative",
                width: "380px",
                height: "440px",
              }}
            >

              {/* ── Central browser window ── */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%) translateZ(0px)",
                  width: "300px",
                }}
              >
                <div
                  className="bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden relative"
                  style={{ animation: "hero-float-slow 6s ease-in-out infinite" }}
                >
                  {/* Shimmer sweep */}
                  <div
                    className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
                    aria-hidden
                  >
                    <div
                      className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      style={{ animation: "hero-shimmer 4.5s ease-in-out infinite" }}
                    />
                  </div>

                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-3 py-2.5 bg-zinc-50 border-b border-zinc-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    <div className="flex-1 ml-2 h-5 bg-white rounded-full border border-zinc-200 flex items-center px-2.5">
                      <span className="text-[9px] text-zinc-400 font-mono">app.client.com/dashboard</span>
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="p-4 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-[9px] text-zinc-400 font-semibold uppercase tracking-wider">Monthly Revenue</p>
                        <p
                          key={revenueIdx}
                          className="text-lg font-black text-black tabular-nums"
                          style={{ animation: "fade-in 0.4s ease-out" }}
                        >
                          {revenueValues[revenueIdx]}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-1">
                        <span className="text-[9px] font-bold text-emerald-600">↑ 18.4%</span>
                      </div>
                    </div>

                    {/* Chart bars */}
                    <div className="flex items-end gap-1 h-20 mb-4">
                      {chartBars.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm origin-bottom"
                          style={{
                            height: `${h}%`,
                            background: i === 6 ? "#FF751F" : i % 2 === 0 ? "#e4e4e7" : "#d4d4d8",
                            animation: `hero-bar-rise 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 60}ms both${i === 6 ? ", hero-pulse-ring 2.4s ease-in-out 800ms infinite" : ""}`,
                            borderRadius: i === 6 ? "3px" : undefined,
                          }}
                        />
                      ))}
                    </div>

                    {/* Mini stats */}
                    <div className="grid grid-cols-3 gap-2">
                      {[["12.4k", "Active users"], ["98ms", "p95 latency"], ["99.9%", "Uptime"]].map(([v, l]) => (
                        <div key={l} className="bg-zinc-50 border border-zinc-100 rounded-xl p-2">
                          <p className="text-xs font-black text-black">{v}</p>
                          <p className="text-[9px] text-zinc-400 mt-0.5">{l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Floating card: Shipped (top-right) ── */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "-10px",
                  transform: "translateZ(80px)",
                }}
              >
                <div
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-3 shadow-2xl min-w-[170px]"
                  style={{ animation: "hero-float-mid 5.5s ease-in-out infinite" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">Shipped</span>
                  </div>
                  <p
                    key={deployIdx}
                    className="text-xs text-zinc-300 font-mono font-semibold"
                    style={{ animation: "fade-in 0.4s ease-out" }}
                  >
                    {deployVersions[deployIdx].version}
                  </p>
                  <p className="text-[10px] text-zinc-500 mt-1">
                    Build {deployVersions[deployIdx].build} · 124/124 tests
                  </p>
                </div>
              </div>

              {/* ── Floating card: Sprint progress (left) ── */}
              <div
                style={{
                  position: "absolute",
                  left: "-20px",
                  top: "50px",
                  transform: "translateZ(60px)",
                }}
              >
                <div
                  className="bg-white border border-zinc-200 rounded-2xl px-4 py-3 shadow-xl min-w-[160px]"
                  style={{ animation: "hero-float-fast 4.5s ease-in-out infinite", animationDelay: "0.6s" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Sprint 18</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF751F] animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    {sprintStages[stageIdx].map((step) => (
                      <div key={step.label} className="flex items-center gap-2 transition-all duration-300">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500"
                          style={{ background: step.done ? "#FF751F" : "#e4e4e7" }}
                        />
                        <span
                          className="text-[10px] font-medium transition-colors duration-500"
                          style={{ color: step.done ? "#3f3f46" : "#d4d4d8" }}
                        >
                          {step.label}
                        </span>
                        {step.done && (
                          <span
                            className="ml-auto text-[9px] text-emerald-500 font-bold"
                            style={{ animation: "fade-in 0.35s ease-out" }}
                          >
                            ✓
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Floating card: App Store rating (bottom-right) ── */}
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  right: "-15px",
                  transform: "translateZ(100px)",
                }}
              >
                <div
                  className="bg-white border border-zinc-100 rounded-2xl px-4 py-3 shadow-xl"
                  style={{ animation: "hero-float-slow 6.5s ease-in-out infinite", animationDelay: "1.2s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF751F] to-[#FF4E9F] flex items-center justify-center flex-shrink-0 relative">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M17.5 12.5c0-1.6.9-3 2.2-3.7-.7-1-1.9-1.7-3.2-1.7-1.4 0-2.5.7-3.5.7-.9 0-2.1-.7-3.5-.7-1.7 0-3.5 1-4.5 2.7C2.6 13.3 4 19 6.5 21.7c.9 1 2 2.2 3.4 2.2 1.3 0 1.8-.8 3.4-.8s2 .8 3.4.8c1.4 0 2.4-1.2 3.3-2.3.7-.8 1.2-1.7 1.5-2.7-3-1.1-3-4.3 0-5.4zM14.4 5.6c.9-1 1.4-2.4 1.3-3.6-1.2.1-2.6.8-3.3 1.7-.7.8-1.3 2.2-1.2 3.5 1.3.1 2.4-.6 3.2-1.6z"/>
                      </svg>
                      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-black flex items-center gap-1">
                        4.9 <span className="text-[#FF751F]">★</span>
                        <span className="text-[9px] text-zinc-400 font-medium">App Store</span>
                      </p>
                      <p className="text-[10px] text-zinc-400 mt-0.5">12k+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Floating card: Performance (bottom-left) ── */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "-10px",
                  transform: "translateZ(50px)",
                }}
              >
                <div
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-3 shadow-xl min-w-[130px]"
                  style={{ animation: "hero-float-mid 5s ease-in-out infinite", animationDelay: "0.3s" }}
                >
                  <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">
                    Lighthouse
                  </p>
                  <div className="flex items-baseline gap-1">
                    <p className="text-2xl font-black text-white tabular-nums">98</p>
                    <p className="text-xs font-bold text-emerald-400">/ 100</p>
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-0.5">Performance score</p>
                  {/* Mini sparkline */}
                  <div className="flex items-end gap-0.5 mt-2 h-3">
                    {[40, 60, 30, 70, 45, 80, 55, 65].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-sm bg-emerald-400/60"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FF751F]/6 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
