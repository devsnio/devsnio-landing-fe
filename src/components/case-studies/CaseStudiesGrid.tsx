import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

export function CaseStudiesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-reveal-group>
      {caseStudies.map((cs) => {
        const Icon = cs.icon;

        return (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            data-reveal
            className="group relative flex flex-col rounded-2xl overflow-hidden transition-shadow"
            style={{
              background: "#f3f3f2",
              minHeight: "360px",
              padding: "28px",
            }}
          >
            {/* Industry eyebrow */}
            <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-3">
              {cs.industry}
            </p>

            {/* Title */}
            <h3
              className="text-[22px] font-black leading-tight tracking-tight text-zinc-900 mb-2 max-w-[80%]"
            >
              {cs.name}
            </h3>

            {/* Tagline */}
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[85%] relative z-10">
              {cs.tagline}
            </p>

            {/* Default visual — large faded icon bottom-right */}
            <div className="absolute inset-0 flex items-end justify-end p-6 pointer-events-none">
              <div
                className="w-32 h-32 rounded-3xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{ background: cs.color + "14" }}
              >
                <Icon size={56} strokeWidth={1.4} style={{ color: cs.color }} />
              </div>
            </div>

            {/* Bottom row: year + arrow CTA */}
            <div className="mt-auto flex items-center justify-between relative z-10 pt-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 tabular-nums">
                {cs.year} · Read case study
              </span>
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ background: cs.color }}
              >
                <ArrowUpRight size={14} className="text-white" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
