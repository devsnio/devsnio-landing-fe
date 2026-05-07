"use client";

const logos = [
  { name: "Stripe",      slug: "stripe",      color: "#635BFF" },
  { name: "Vercel",      slug: "vercel",      color: "#000000" },
  { name: "OpenAI",      slug: null,           color: "#412991" },
  { name: "Shopify",     slug: "shopify",     color: "#7AB55C" },
  { name: "Notion",      slug: "notion",      color: "#000000" },
  { name: "Linear",      slug: "linear",      color: "#5E6AD2" },
  { name: "Figma",       slug: "figma",       color: "#F24E1E" },
  { name: "Supabase",    slug: "supabase",    color: "#3ECF8E" },
  { name: "Railway",     slug: "railway",     color: "#0B0D0E" },
  { name: "PlanetScale", slug: "planetscale", color: "#000000" },
];

function LogoBadge({ name, slug, color }: { name: string; slug: string | null; color: string }) {
  return (
    <div className="flex items-center gap-2.5 flex-shrink-0 select-none">
      {slug ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`}
          alt={name}
          width={20}
          height={20}
          className="opacity-50 flex-shrink-0"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      ) : (
        <span
          className="w-5 h-5 rounded flex items-center justify-center text-white text-[9px] font-black flex-shrink-0 opacity-70"
          style={{ background: color }}
        >
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="text-zinc-400 font-semibold text-sm tracking-tight whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function TrustedBy() {
  const doubled = [...logos, ...logos];
  return (
    <section className="bg-zinc-50 border-y border-zinc-100 py-12 overflow-hidden">
      <p className="text-center text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-8">
        Trusted by teams building with
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-10 items-center w-max px-4"
          style={{ animation: "marquee-scroll 30s linear infinite", willChange: "transform" }}
        >
          {doubled.map((logo, i) => (
            <LogoBadge key={i} name={logo.name} slug={logo.slug} color={logo.color} />
          ))}
        </div>
      </div>
    </section>
  );
}
