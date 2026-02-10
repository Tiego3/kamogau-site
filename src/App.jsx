import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Layout>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-navy">
        <div className="w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            {/* Logo placeholder */}
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
                <span aria-hidden="true"></span>
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
      
      {/* Page sections */}
      <Services />
      <About />
      <WhyChoose />
      <Industries />
      <Contact />
    
      {/* Footer */}
      <Footer />
    </Layout>
  );
}