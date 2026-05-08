import { ArrowUpRight } from "lucide-react";

export function HireCTA() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          data-reveal="scale"
          className="relative rounded-3xl overflow-hidden px-8 py-14 sm:px-14 sm:py-16"
          style={{ background: "#0A2D3D" }}
        >
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FF751F]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#0CC1A8]/15 rounded-full blur-3xl pointer-events-none" />

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF751F] mb-4">
                Start Hiring
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.1] mb-5">
                Your next senior engineer
                <br />
                is one call away.
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed max-w-md">
                Tell us what you&apos;re building. We&apos;ll send 3–5 vetted profiles within
                72 hours — and you can hire someone in under a week.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 lg:flex-shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-[#FF751F] hover:bg-orange-500 text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Hire a Developer
              </a>
              <a
                href="mailto:info@devsnio.com"
                className="group inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 text-white text-sm font-semibold transition-all cursor-pointer whitespace-nowrap"
              >
                Email us
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
