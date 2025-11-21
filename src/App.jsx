import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <header className="sticky top-0 z-20 backdrop-blur border-b border-white/10 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-blue-500 to-cyan-400" />
            <span className="font-semibold tracking-tight">NEAHXp</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-100/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="about"><About /></div>
        <Services />
        <CTA />
      </main>

      <footer className="py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/60 text-sm">© {new Date().getFullYear()} NEAHXp. All rights reserved.</p>
          <div className="text-blue-200/60 text-sm">Web & AI Solutions</div>
        </div>
      </footer>
    </div>
  )
}

export default App
