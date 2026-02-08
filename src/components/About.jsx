export default function About() {
  return (
    <section id="about" className="bg-brand-cream">
      <div className="container-x section-y">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
          <div>
            <div className="h-1 w-16 rounded-full bg-brand-red" />
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              About Kamogau Transport &amp; Projects
            </h2>
            <div className="mt-6 space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                Established in 2018, Kamogau Transport &amp; Projects (Pty) Ltd is a wholly
                South African-owned industrial contracting company based in eMalahleni,
                Mpumalanga.
              </p>
              <p>
                We provide comprehensive construction, engineering, industrial services,
                maintenance, and supply solutions to South Africa’s energy, mining,
                manufacturing, and infrastructure sectors.
              </p>
              <p>
                As a BBBEE Level 1 contributor and registered Eskom vendor, we meet the
                highest standards of compliance, quality, and operational excellence
                required for government and enterprise contracts.
              </p>
            </div>

            {/* Details */}
            <div className="mt-8 pt-8 border-t border-black/10">
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <Info label="Registration" value="2018/203605/07" />
                <Info label="CSD Number" value="MAAA0601904" />
                <Info label="Eskom Vendor" value="11088726" />
                <Info label="BBBEE Status" value={<span className="text-brand-red font-extrabold">Level 1</span>} />
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-3 text-sm font-semibold text-brand-cream shadow-card hover:brightness-110 transition"
            >
              Get in Touch <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Brand card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl bg-brand-navy shadow-soft">
              <div className="aspect-square p-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-6 h-20 w-20 rounded-lg bg-brand-red flex items-center justify-center">
                    <span className="font-heading font-extrabold text-4xl text-brand-cream">K</span>
                  </div>
                  <div className="font-heading font-extrabold tracking-wide text-3xl text-brand-cream">
                    KAMOGAU
                  </div>
                  <div className="mt-2 text-xs tracking-[0.22em] uppercase text-brand-cream/70">
                    Transport &amp; Projects
                  </div>
                </div>
              </div>
            
              <svg
                className="absolute bottom-0 left-0 right-0 text-brand-red"
                viewBox="0 0 600 160"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  opacity="0.18"
                  d="M0,160 C210,40 360,190 600,60 L600,160 Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-neutral-500">{label}</div>
      <div className="mt-1 font-heading font-extrabold text-brand-navy">
        {value}
      </div>
    </div>
  );
}
