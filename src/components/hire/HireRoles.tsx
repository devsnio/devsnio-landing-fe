import {
  Code2, Server, Layers, Smartphone, Brain, Cloud, Palette, TestTube2,
  Bot, Database, Shield, GitBranch,
} from "lucide-react";

const roles = [
  { icon: Code2,     title: "Frontend Engineers",  stack: "React, Next.js, Vue, TypeScript" },
  { icon: Server,    title: "Backend Engineers",   stack: "Node, Python, Go, Java, Rust" },
  { icon: Layers,    title: "Full-Stack Engineers", stack: "End-to-end product engineers" },
  { icon: Smartphone,title: "Mobile Engineers",    stack: "React Native, Flutter, iOS, Android" },
  { icon: Brain,     title: "AI / ML Engineers",   stack: "LLMs, RAG, fine-tuning, computer vision" },
  { icon: Bot,       title: "AI Automation Devs",  stack: "Agents, LangChain, n8n, workflow automation" },
  { icon: Cloud,     title: "DevOps & SRE",        stack: "AWS, GCP, Kubernetes, Terraform, CI/CD" },
  { icon: Database,  title: "Data Engineers",      stack: "Pipelines, warehouses, dbt, Airflow" },
  { icon: Palette,   title: "Product Designers",   stack: "Figma, design systems, UX research" },
  { icon: TestTube2, title: "QA Engineers",        stack: "Manual + automation, Cypress, Playwright" },
  { icon: Shield,    title: "Security Engineers",  stack: "Pen-testing, OWASP, secure code review" },
  { icon: GitBranch, title: "Engineering Managers", stack: "Tech leads, EMs, delivery managers" },
];

export function HireRoles() {
  return (
    <section className="bg-zinc-50 border-y border-zinc-100 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-14">
          <div data-reveal>
            <p className="text-sm font-semibold text-[#FF751F] uppercase tracking-widest mb-3">
              Roles
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
              Hire Across The
              <br />
              <span className="text-zinc-300">Entire Stack.</span>
            </h2>
          </div>
          <p data-reveal data-reveal-delay="120" className="text-zinc-500 text-lg leading-relaxed lg:max-w-md lg:ml-auto">
            Junior to staff-level — across product, engineering, design, and ops. Don&apos;t see your
            role? Ask, we probably have it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" data-reveal-group>
          {roles.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                data-reveal
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF751F]/10 transition-colors">
                  <Icon size={17} className="text-zinc-700 group-hover:text-[#FF751F] transition-colors" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-zinc-900 leading-tight">{r.title}</h3>
                  <p className="text-xs text-zinc-500 mt-0.5 truncate">{r.stack}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
