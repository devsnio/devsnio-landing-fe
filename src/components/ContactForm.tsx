"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const services = [
  "AI Automation",
  "AI Development",
  "Custom Software",
  "SaaS Building",
  "Mobile Development",
  "Web Application",
  "API Development",
  "Other",
];

const budgets = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      services: selectedServices,
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? "").trim(),
      hp_field_x9: String(formData.get("hp_field_x9") ?? ""), // honeypot
    };

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setSelectedServices([]);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  // Success state
  if (status === "success") {
    return (
      <div className="bg-zinc-50 rounded-3xl border border-zinc-100 p-8 sm:p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5">
          <CheckCircle2 size={28} className="text-emerald-600" />
        </div>
        <h2 className="text-2xl font-black text-black tracking-tight mb-3">
          Message sent. We&apos;re on it.
        </h2>
        <p className="text-zinc-500 max-w-sm mx-auto mb-6">
          Thanks for reaching out — we&apos;ve got your message and will reply within
          24 hours from <strong className="text-black">info@devsnio.com</strong>.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-bold text-black hover:text-[#FF751F] transition-colors underline underline-offset-4"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 rounded-3xl border border-zinc-100 p-8 sm:p-10">
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        {/* Honeypot — visually hidden + obscure name so browser autofill
            (Chrome was eating real submissions when this was named "website"). */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
          <label htmlFor="hp_field_x9">Leave this blank</label>
          <input
            id="hp_field_x9"
            type="text"
            name="hp_field_x9"
            tabIndex={-1}
            autoComplete="off"
            data-form-type="other"
            defaultValue=""
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Name <span className="text-[#FF751F]">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Email <span className="text-[#FF751F]">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Company / Project name
          </label>
          <input
            type="text"
            name="company"
            placeholder="Acme Inc."
            className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Service needed
          </label>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => {
              const active = selectedServices.includes(s);
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() =>
                    setSelectedServices((prev) =>
                      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
                    )
                  }
                  className={`inline-block px-3 py-1.5 rounded-full border text-xs font-medium transition select-none cursor-pointer ${
                    active
                      ? "bg-black text-white border-black"
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Budget range
          </label>
          <select
            name="budget"
            defaultValue=""
            className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition appearance-none"
          >
            <option value="">Select a range...</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Tell us about your project <span className="text-[#FF751F]">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            minLength={10}
            placeholder="Describe what you're building, the problem it solves, and any technical requirements..."
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition resize-none"
          />
        </div>

        {/* Error banner */}
        {status === "error" && error && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
            <AlertCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full h-14 rounded-full bg-black text-white text-base font-semibold hover:bg-zinc-800 transition-colors cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending...
            </>
          ) : (
            <>Send Message →</>
          )}
        </button>

        <p className="text-xs text-zinc-400 text-center">
          By submitting this form you agree to our{" "}
          <a href="/privacy" className="underline hover:text-black">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}
