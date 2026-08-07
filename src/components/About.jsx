import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import steel from "../assets/texture-steel.jpg";

const facts = [
  { label: "Registration", value: "2018/203605/07" },
  { label: "CSD Number", value: "MAAA0601904" },
  { label: "Eskom Vendor", value: "11088726" },
  { label: "BBBEE Status", value: "Level 1" },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="about" ref={ref} className="relative bg-surface py-32 lg:py-44 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.img
                style={{ y }}
                src={steel}
                alt="Molten steel"
                className="absolute inset-0 h-[130%] w-full object-cover"
                loading="lazy"
                width={1280}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-eyebrow mb-3">eMalahleni, Mpumalanga</div>
                <div className="text-display text-3xl">Wholly South African owned.</div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-10 bg-ember" />
                <span className="text-eyebrow">About Kamogau</span>
              </div>
            </Reveal>

            <Reveal delay={0.1} as="h2" className="text-display text-foreground text-[clamp(2rem,4.5vw,3.75rem)] mb-10">
              About Kamogau
              <br />
              <span className="text-ember">Transport &amp; Projects</span>
            </Reveal>

            <Reveal delay={0.2} as="p" className="text-muted-foreground leading-relaxed mb-6">
              Established in 2018, Kamogau Transport &amp; Projects (Pty) Ltd is a
              wholly South African-owned industrial contracting company based in
              eMalahleni, Mpumalanga. We provide construction, engineering,
              industrial services, maintenance and supply solutions to the
              energy, mining, manufacturing and infrastructure sectors.
            </Reveal>

            <Reveal delay={0.3} as="p" className="text-muted-foreground leading-relaxed mb-12">
              As a BBBEE Level 1 contributor and registered Eskom vendor, we
              meet the highest standards of compliance, quality and
              operational excellence required for government and enterprise
              contracts.
            </Reveal>

            <Reveal delay={0.4}>
              <dl className="grid grid-cols-2 gap-px bg-border-strong border border-border-strong">
                {facts.map((f) => (
                  <div key={f.label} className="bg-surface p-6">
                    <dt className="text-eyebrow text-[0.6rem] mb-2">{f.label}</dt>
                    <dd className="text-display text-xl text-foreground">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.5}>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 text-eyebrow text-ember hover:gap-3 transition-all"
              >
                Get in Touch <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
