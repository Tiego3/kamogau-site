import { Icon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 bg-gradient-ember grid place-items-center font-display text-lg text-primary-foreground">
                K
              </div>
              <div className="leading-none">
                <div className="font-display text-base text-foreground">Kamogau</div>
                <div className="text-eyebrow text-[0.55rem] mt-0.5">Transport &amp; Projects</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Industrial contracting with the operational strength, compliance,
              and professionalism for large-scale projects.
            </p>
          </div>

          <div>
            <div className="text-eyebrow mb-5">Services</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Construction</li>
              <li>Engineering</li>
              <li>Industrial Services</li>
              <li>Maintenance</li>
              <li>Supply &amp; Delivery</li>
            </ul>
          </div>

          <div>
            <div className="text-eyebrow mb-5">Quick Links</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-ember transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-ember transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-ember transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-ember transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-eyebrow mb-5">Contact</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Icon name="phone" className="h-4 w-4 mt-0.5" />
                <a href="tel:+27797527824" className="hover:text-ember transition-colors">
                  +27 (0)79 752 7824
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="mail" className="h-4 w-4 mt-0.5" />
                <a href="mailto:mathobelast@gmail.com" className="hover:text-ember transition-colors">
                  mathobelast@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="pin" className="h-4 w-4 mt-0.5" />
                <span>eMalahleni, Mpumalanga</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {year} Kamogau Transport &amp; Projects (Pty) Ltd. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>Reg: 2018/203605/07</span>
            <span>CSD: MAAA0601904</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ember animate-ember-pulse" />
              BBBEE Level 1
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
