import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="relative rounded-3xl border border-zinc-200 overflow-hidden bg-zinc-950 px-8 py-16 sm:px-16 sm:py-20">

          {/* Background glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF751F]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#7B5CFF]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

            {/* Left — copy */}
            <div className="max-w-xl">
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-5">
                Let's Build Something
                <br />
                <span className="text-[#FF751F]">Remarkable.</span>
              </h2>

              <p className="text-zinc-400 text-base leading-relaxed">
                Have an idea, a problem to solve, or a product to ship?
                Tell us about it — we respond within 24 hours.
              </p>
            </div>

            {/* Right — actions */}
            <div className="flex flex-col gap-4 lg:flex-shrink-0 lg:w-72">
              {/* Contact page CTA */}
              <a
                href="/contact"
                className="group flex items-center justify-between gap-3 bg-[#FF751F] hover:bg-orange-500 transition-colors rounded-2xl px-6 py-5 cursor-pointer"
              >
                <div>
                  <p className="text-white font-black text-base leading-tight">Start a Project</p>
                  <p className="text-white/70 text-xs mt-0.5">Tell us what you're building</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </a>

              {/* Email CTA */}
              <a
                href="mailto:hello@devsnio.com"
                className="group flex items-center justify-between gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all rounded-2xl px-6 py-5 cursor-pointer"
              >
                <div>
                  <p className="text-white font-black text-base leading-tight">Send an Email</p>
                  <p className="text-zinc-500 text-xs mt-0.5">hello@devsnio.com</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <Mail size={15} className="text-zinc-300" />
                </div>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
