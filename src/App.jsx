import Layout from "./components/Layout";

function Section({ id, title, subtitle }) {
  return (
    <section id={id} className="section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="h-1 w-10 bg-red-500 rounded-full" />
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight">
            {title}
          </h2>
          {subtitle ? <p className="mt-3 muted">{subtitle}</p> : null}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          Placeholder content for <span className="font-semibold">{id}</span>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Layout>
      {/* Header placeholder */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="container-x py-4 flex items-center justify-between">
          <div className="font-bold tracking-tight">Kamogau</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200/90">
            <a className="hover:text-white transition" href="#services">
              Services
            </a>
            <a className="hover:text-white transition" href="#about">
              About
            </a>
            <a className="hover:text-white transition" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-400 transition"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero placeholder */}
      <section id="hero" className="section-y">
        <div className="container-x">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 sm:p-12">
            <div className="max-w-3xl">
              <div className="h-1 w-10 bg-red-500 rounded-full" />
              <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
                Industrial services, engineering & contracting
              </h1>
              <p className="mt-4 muted text-base sm:text-lg">
                Placeholder hero copy. Next step we’ll recreate the hero layout,
                typography, and background treatment to match the mockup.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white hover:bg-red-400 transition"
                >
                  Request a Quote
                </a>
                <a
                  href="#services"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="services"
        title="Our Services"
        subtitle="We’ll convert this placeholder into the card grid from the mockup."
      />
      <Section
        id="about"
        title="About Us"
        subtitle="We’ll recreate the split layout and content styling."
      />
      <Section
        id="contact"
        title="Contact"
        subtitle="We’ll build the form + contact details section."
      />

      {/* Footer placeholder */}
      <footer className="border-t border-white/10">
        <div className="container-x py-10 text-sm text-slate-300/80">
          © {new Date().getFullYear()} Kamogau Transport & Projects — Placeholder
          footer.
        </div>
      </footer>
    </Layout>
  );
}
