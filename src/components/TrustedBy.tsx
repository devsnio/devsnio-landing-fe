const logos = [
  "Stripe", "Vercel", "OpenAI", "Shopify",
  "Notion", "Linear", "Figma", "Supabase",
  "Railway", "PlanetScale",
];

export function TrustedBy() {
  const doubled = [...logos, ...logos];
  return (
    <section className="bg-zinc-50 border-y border-zinc-100 py-12 overflow-hidden">
      <p className="text-center text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-8">
        Trusted by teams building with
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-12 items-center w-max"
          style={{ animation: "marquee-scroll 30s linear infinite" }}
        >
          {doubled.map((name, i) => (
            <span
              key={i}
              className="text-zinc-400 font-bold text-base tracking-tight whitespace-nowrap hover:text-black transition-colors cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
