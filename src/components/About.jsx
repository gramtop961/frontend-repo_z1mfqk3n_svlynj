export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About NEAHXp</h2>
          <p className="mt-4 text-blue-200/85 leading-relaxed">
            We are a multidisciplinary studio building modern web experiences and intelligent systems. Our work blends clean design, solid engineering, and practical AI to deliver solutions that are fast, reliable, and a joy to use.
          </p>
          <p className="mt-3 text-blue-200/80">
            Whether you need a brand new product, to automate internal workflows, or to level‑up your existing platform with ML, we can help from idea to launch.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-6">
          <ul className="space-y-3 text-blue-100/90">
            <li>• End‑to‑end delivery: strategy, design, build, iterate</li>
            <li>• Responsible AI: privacy‑aware, transparent, measurable</li>
            <li>• Modern stack: React, FastAPI, vector search, automations</li>
            <li>• Flexible engagement: sprint‑based or ongoing support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
