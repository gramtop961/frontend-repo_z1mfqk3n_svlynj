const services = [
  "Digital Marketing",
  "Software Development",
  "AI/ML Projects & Custom Software",
  "Customized Web Design",
  "SEO Optimization",
  "ML Architecture & Model Designing",
  "AI Automation Workflows",
  "N8N workflow (build ai agent)",
  "CAD Designing",
];

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Services
        </h2>
        <p className="text-blue-200/80 mt-2">
          NEAHXp delivers a focused suite of offerings across web, software, and AI.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="text-white font-medium">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
