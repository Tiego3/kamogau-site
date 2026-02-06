import Layout from "./components/Layout";
import Hero from "./components/Hero";

function Section({ id, title, subtitle }) {
  return (
    <section id={id} className="section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="h-1 w-10 rounded-full bg-red-500" />
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
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
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="container-x flex items-center justify-between py-4">
          <div className="font-bold tracking-tight">Kamogau</div>

          <nav className="hidden items-center gap-6 text-sm text-slate-200/90 md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-400"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero (replaces old hero placeholder entirely) */}
      <Hero />

      {/* Sections */}
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

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container-x py-10 text-sm text-slate-300/80">
          © {new Date().getFullYear()} Kamogau Transport & Projects — Placeholder
          footer.
        </div>
      </footer>
    </Layout>
  );
}
