import { Icon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy">
      <div className="container-x py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">        
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-red">
                <span className="font-heading font-extrabold text-xl text-brand-cream">K</span>
              </div>
              <div className="leading-tight">
                <div className="font-heading font-extrabold tracking-wide text-brand-cream">KAMOGAU</div>
                <div className="text-xs tracking-widest text-brand-cream/70">TRANSPORT &amp; PROJECTS</div>
              </div>
            </div>

            <p className="mt-4 text-sm text-brand-cream/70 leading-relaxed">
              Industrial contracting with the operational strength, compliance, and professionalism for large-scale projects.
            </p>
          </div>

          {/* Services */}
          <FooterCol title="Services">
            <li>Construction</li>
            <li>Engineering</li>
            <li>Industrial Services</li>
            <li>Maintenance</li>
            <li>Supply &amp; Delivery</li>
          </FooterCol>

          {/* Links */}
          <FooterCol title="Quick Links">
            <li>
              <a href="#services" className="hover:text-brand-cream transition">
                Our Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-brand-cream transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#industries" className="hover:text-brand-cream transition">
                Industries
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-brand-cream transition">
                Contact
              </a>
            </li>
          </FooterCol>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-extrabold text-brand-cream">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-brand-cream/70">
              <li className="flex items-start gap-2">
                <Icon name="phone" className="h-4 w-4 mt-0.5 text-brand-cream/70" />
                <span>+27 (0)79 752 7824</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="mail" className="h-4 w-4 mt-0.5 text-brand-cream/70" />
                <span>mathobelast@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="pin" className="h-4 w-4 mt-0.5 text-brand-cream/70" />
                <span>eMalahleni, Mpumalanga</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-brand-cream/60">
            <div>© {year} Kamogau Transport &amp; Projects (Pty) Ltd. All rights reserved.</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span>Reg: 2018/203605/07</span>
              <span>CSD: MAAA0601904</span>
              <span>BBBEE Level 1</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="font-heading font-extrabold text-brand-cream">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-brand-cream/70">{children}</ul>
    </div>
  );
}
