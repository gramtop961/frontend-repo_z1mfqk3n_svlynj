export default function CTA() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600 to-cyan-500 p-8">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Have a project in mind?</h3>
          <p className="mt-2 text-blue-50/90">Tell us about your goals and we'll propose a clear, pragmatic plan.</p>
          <a href="mailto:hello@neahxp.com" className="inline-block mt-6 rounded-lg bg-white/90 hover:bg-white text-slate-900 font-medium px-6 py-3 transition">
            Contact NEAHXp
          </a>
        </div>
      </div>
    </section>
  );
}
