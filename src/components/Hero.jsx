import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100 backdrop-blur">
            NEAHXp • Web & AI Solutions
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Build smart, beautiful products with speed and clarity
          </h1>
          <p className="mt-5 text-lg text-blue-200/90 max-w-2xl mx-auto">
            From bespoke websites to production-grade AI automation, NEAHXp crafts end‑to‑end solutions that move your business forward.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition">
              Start a project <ArrowRight size={18} />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-blue-100 hover:bg-white/5 transition">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
