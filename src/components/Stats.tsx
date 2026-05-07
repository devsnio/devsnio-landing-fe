const stats = [
  { value: "40+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "2×", label: "Faster Than Average" },
  { value: "24/7", label: "AI Systems Running" },
];

export function Stats() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-black text-[#FF751F] mb-2 tabular-nums">
                {s.value}
              </p>
              <p className="text-sm font-medium text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
