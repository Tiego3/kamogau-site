import Layout from "./components/Layout";
import Hero from "./components/Hero";

function Section({ id, title, subtitle }) {
  return (
    <section id={id} className="section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="h-1 w-10 rounded-full bg-brand-red" />
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
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-navy">
        <div className="w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            {/* Left: Logo placeholder */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-red text-brand-cream font-heading font-extrabold">
                K
              </div>
              <div className="leading-tight">
                <div className="font-heading font-extrabold tracking-wide">
                  KAMOGAU
                </div>
                <div className="text-xs tracking-widest text-brand-cream/70">
                  TRANSPORT &amp; PROJECTS
                </div>
              </div>
            </div>
            {/* Center nav */}
            <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-brand-cream/85">
              <a className="transition hover:text-brand-cream" href="#services">
                Services
              </a>
              <a className="transition hover:text-brand-cream" href="#about">
                About Us
              </a>
              <a className="transition hover:text-brand-cream" href="#industries">
                Industries
              </a>
              <a className="transition hover:text-brand-cream" href="#contact">
                Contact
              </a>
            </nav>
            {/* Right: phone + CTA */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-brand-cream/80">
                <span aria-hidden="true">📞</span>
                <span className="font-semibold">079 752 7824</span>
              </div>
              <a
                href="#contact"
                className="rounded bg-brand-red px-5 py-2.5 text-sm font-semibold text-brand-cream transition hover:brightness-110"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero */}
      <Hero />
      
      {/* Sections */}
      <Section
        id="services"
        title="Our Services"
        subtitle="We'll convert this placeholder into the card grid from the mockup."
      />
      <Section
        id="about"
        title="About Us"
        subtitle="We'll recreate the split layout and content styling."
      />
      <Section
        id="contact"
        title="Contact"
        subtitle="We'll build the form + contact details section."
      />
      
      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm muted">
          © {new Date().getFullYear()} Kamogau Transport & Projects — Placeholder
          footer.
        </div>
      </footer>
    </Layout>
  );
}