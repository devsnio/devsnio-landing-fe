import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, Users, Briefcase, Quote } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { buildMetadata, breadcrumbSchema, SITE } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return buildMetadata({ title: "Case Study", noIndex: true });

  return buildMetadata({
    path: `/case-studies/${cs.slug}`,
    title: `${cs.name} — ${cs.tagline}`,
    description: cs.description,
    keywords: [
      cs.name,
      ...cs.industry.split(/[·,]/).map((s) => s.trim()).filter(Boolean),
      ...cs.stack,
    ],
  });
}

export default async function CaseStudyDetail({ params }: Params) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const Icon = cs.icon;
  const currentIdx = caseStudies.findIndex((c) => c.slug === slug);
  const nextCs = caseStudies[(currentIdx + 1) % caseStudies.length];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${cs.name} — ${cs.tagline}`,
    description: cs.description,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name },
    datePublished: cs.year,
    articleSection: cs.industry,
    keywords: cs.stack.join(", "),
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: cs.name, path: `/case-studies/${cs.slug}` },
          ]),
        ]}
      />
      <Navbar />
      <main className="bg-white">

        {/* ── Hero ── */}
        <section
          className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden"
          style={{ background: cs.color }}
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none opacity-30 bg-[#FF751F]" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            {/* Back link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={13} /> All case studies
            </Link>

            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
              <div>
                <p className="text-xs font-bold text-[#FF751F] uppercase tracking-widest mb-4">
                  {cs.industry}
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5">
                  {cs.name}
                </h1>
                <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
                  {cs.tagline}
                </p>
              </div>

              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <Icon size={32} strokeWidth={1.4} className="text-white" />
              </div>
            </div>

            {/* Project meta strip */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {cs.client && (
                <div className="bg-transparent p-5">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">
                    <Briefcase size={11} /> Client
                  </div>
                  <p className="text-sm font-semibold text-white leading-tight">{cs.client}</p>
                </div>
              )}
              {cs.duration && (
                <div className="bg-transparent p-5">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">
                    <Calendar size={11} /> Duration
                  </div>
                  <p className="text-sm font-semibold text-white leading-tight">{cs.duration}</p>
                </div>
              )}
              {cs.team && (
                <div className="bg-transparent p-5">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">
                    <Users size={11} /> Team
                  </div>
                  <p className="text-sm font-semibold text-white leading-tight">{cs.team}</p>
                </div>
              )}
              <div className="bg-transparent p-5">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">
                  Year
                </div>
                <p className="text-sm font-semibold text-white tabular-nums leading-tight">{cs.year}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Metrics strip ── */}
        <section className="bg-white border-b border-zinc-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-zinc-100 -mt-12 relative z-10 rounded-2xl overflow-hidden border border-zinc-100 shadow-lg" data-reveal-group>
              {cs.metrics.map((m) => (
                <div key={m.label} data-reveal className="bg-white p-7 text-center">
                  <p
                    className="text-3xl sm:text-4xl font-black tabular-nums tracking-tight"
                    style={{ color: cs.color }}
                  >
                    {m.value}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500 mt-2">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Overview / About ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p data-reveal className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
              Overview
            </p>
            <p data-reveal className="text-xl sm:text-2xl text-zinc-700 leading-relaxed font-medium">
              {cs.description}
            </p>
          </div>
        </section>

        {/* ── Challenge / Solution / Outcome ── */}
        <section className="bg-zinc-50 border-y border-zinc-100 py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-px bg-zinc-200 rounded-2xl overflow-hidden" data-reveal-group>
            {[
              { label: "The Challenge", items: cs.challenge },
              { label: "Our Approach", items: cs.solution },
              { label: "The Outcome", items: cs.outcome },
            ].map((block) => (
              <div key={block.label} data-reveal className="bg-white p-8">
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-5"
                  style={{ color: cs.color }}
                >
                  {block.label}
                </p>
                <ul className="space-y-4">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: cs.color }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features (if any) ── */}
        {cs.features && cs.features.length > 0 && (
          <section className="py-20 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start mb-10">
                <div data-reveal>
                  <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
                    What We Built
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight leading-tight">
                    Key features
                    <br />
                    <span className="text-zinc-300">shipped to production.</span>
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" data-reveal-group>
                {cs.features.map((f) => (
                  <div key={f} data-reveal className="rounded-xl border border-zinc-100 bg-white p-4">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: cs.color }}
                      />
                      <p className="text-sm font-semibold text-zinc-800 leading-snug">{f}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Tech stack ── */}
        <section className="bg-zinc-50 border-y border-zinc-100 py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
              <div data-reveal>
                <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
                  Tech Stack
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight leading-tight">
                  Built with the
                  <br />
                  <span className="text-zinc-300">right tools.</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-2" data-reveal data-reveal-delay="120">
                {cs.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-4 py-2 text-sm font-semibold text-zinc-700"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: cs.color }}
                    />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonial (if any) ── */}
        {cs.testimonial && (
          <section className="py-20 sm:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" data-reveal>
              <Quote size={32} className="mx-auto mb-6" style={{ color: cs.color }} />
              <blockquote className="text-2xl sm:text-3xl font-medium text-black leading-snug tracking-tight mb-6">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </blockquote>
              <p className="text-sm text-zinc-500">
                <strong className="text-black">{cs.testimonial.author}</strong> · {cs.testimonial.role}
              </p>
            </div>
          </section>
        )}

        {/* ── Next case study ── */}
        <section className="bg-zinc-50 border-y border-zinc-100 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link
              href={`/case-studies/${nextCs.slug}`}
              className="group flex items-center justify-between gap-6 py-6 transition-colors"
            >
              <div>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                  Next case study
                </p>
                <p className="text-2xl sm:text-3xl font-black text-black tracking-tight group-hover:text-[#FF751F] transition-colors">
                  {nextCs.name}
                </p>
                <p className="text-sm text-zinc-500 mt-1">{nextCs.tagline}</p>
              </div>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ background: nextCs.color }}
              >
                <ArrowUpRight size={18} className="text-white" />
              </div>
            </Link>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
