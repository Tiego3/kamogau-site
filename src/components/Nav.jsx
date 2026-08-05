import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 80], [0, 16]);
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["color-mix(in oklch, oklch(var(--background)), transparent 100%)", "color-mix(in oklch, oklch(var(--background)), transparent 15%)"]
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  return (
    <motion.header
      style={{ backdropFilter: useTransform(blur, (b) => `blur(${b}px)`), backgroundColor: bg }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <div className="relative">
            <div className="grid h-9 w-9 place-items-center bg-gradient-ember font-display text-lg text-primary-foreground">
              K
            </div>
            <div className="pointer-events-none absolute -inset-1 -z-10 bg-ember/30 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
          </div>
          <div className="leading-none">
            <div className="font-display text-base tracking-tight text-foreground">Kamogau</div>
            <div className="text-eyebrow mt-0.5 text-[0.55rem]">Transport &amp; Projects</div>
          </div>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden text-sm font-semibold text-foreground sm:inline">
            079 752 7824
          </span>
          <ThemeToggle />
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden border border-border-strong px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-foreground transition-colors duration-500 hover:text-primary-foreground"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-ember transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" />
            <span className="relative">Request Quote</span>
            <span className="relative">→</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
