"use client";

const row1 = [
  { name: "Next.js",      slug: "nextdotjs",         color: "#000000" },
  { name: "NestJS",       slug: "nestjs",             color: "#E0234E" },
  { name: "Java Spring",  slug: "spring",             color: "#6DB33F" },
  { name: "Python",       slug: "python",             color: "#3776AB" },
  { name: "React Native", slug: "react",              color: "#61DAFB" },
  { name: "Flutter",      slug: "flutter",            color: "#02569B" },
  { name: "Swift",        slug: "swift",              color: "#F05138" },
  { name: "Kotlin",       slug: "kotlin",             color: "#7F52FF" },
  { name: "PyTorch",      slug: "pytorch",            color: "#EE4C2C" },
  { name: "TensorFlow",   slug: "tensorflow",         color: "#FF6F00" },
];

const row2 = [
  { name: "Claude AI",    slug: null,                 color: "#FF751F" },
  { name: "OpenAI",       slug: null,                 color: "#412991" },
  { name: "LangChain",    slug: "langchain",          color: "#1C3C3C" },
  { name: "PostgreSQL",   slug: "postgresql",         color: "#4169E1" },
  { name: "MongoDB",      slug: "mongodb",            color: "#47A248" },
  { name: "Redis",        slug: "redis",              color: "#DC382D" },
  { name: "MySQL",        slug: "mysql",              color: "#4479A1" },
  { name: "Firebase",     slug: "firebase",           color: "#FFCA28" },
  { name: "Docker",       slug: "docker",             color: "#2496ED" },
  { name: "Kubernetes",   slug: "kubernetes",         color: "#326CE5" },
  { name: "AWS",          slug: null,                 color: "#FF9900" },
  { name: "Azure",        slug: null,                 color: "#0078D4" },
  { name: "Terraform",    slug: "terraform",          color: "#7B42BC" },
  { name: "Jenkins",      slug: "jenkins",            color: "#D33833" },
];

function Badge({ name, slug, color }: { name: string; slug: string | null; color: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-white border border-zinc-200 rounded-full px-4 py-2 flex-shrink-0">
      {slug ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`}
          alt={name}
          width={16}
          height={16}
          className="flex-shrink-0"
          onError={(e) => {
            const el = e.currentTarget;
            el.style.display = "none";
            const fallback = el.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "flex";
          }}
        />
      ) : null}
      <span
        className="w-5 h-5 rounded flex-shrink-0 items-center justify-center text-white text-[9px] font-black leading-none"
        style={{ background: color, display: slug ? "none" : "flex" }}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
      <span className="text-sm font-semibold text-zinc-700 whitespace-nowrap">{name}</span>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="bg-zinc-50 border-y border-zinc-100 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">Tech Stack</p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight leading-tight">
            Built With the
            <br />
            <span className="text-zinc-300">Best Tools.</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-xs">
            Modern, battle-tested tech across frontend, backend, AI, data, and cloud.
          </p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-3">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />
        <div
          className="flex gap-3 w-max"
          style={{ animation: "marquee-scroll 35s linear infinite" }}
        >
          {[...row1, ...row1].map((tech, i) => (
            <Badge key={i} name={tech.name} slug={tech.slug} color={tech.color} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />
        <div
          className="flex gap-3 w-max"
          style={{ animation: "marquee-scroll-reverse 40s linear infinite" }}
        >
          {[...row2, ...row2].map((tech, i) => (
            <Badge key={i} name={tech.name} slug={tech.slug} color={tech.color} />
          ))}
        </div>
      </div>
    </section>
  );
}
