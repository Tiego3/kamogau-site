import { motion } from "framer-motion";
import Reveal from "./Reveal";
import energy from "../assets/industry-energy.jpg";
import mining from "../assets/industry-mining.jpg";
import manufacturing from "../assets/industry-manufacturing.jpg";

const industries = [
  {
    title: "Energy & Utilities",
    desc: "Power generation, transmission, and substation infrastructure.",
    img: energy,
  },
  {
    title: "Mining",
    desc: "Surface and underground mining facility construction and maintenance.",
    img: mining,
  },
  {
    title: "Manufacturing",
    desc: "Industrial plant construction, upgrades, and ongoing support.",
    img: manufacturing,
  },
  {
    title: "Commercial",
    desc: "Large-scale commercial building and facility development.",
    img: manufacturing,
  },
  {
    title: "Government",
    desc: "Public infrastructure and government facility projects.",
    img: energy,
  },
  {
    title: "Infrastructure",
    desc: "Roads, bridges, and public works construction support.",
    img: mining,
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative bg-background py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-20 grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-ember" />
              <span className="text-eyebrow">Industries we serve</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display text-foreground text-[clamp(2rem,5vw,4.5rem)] mb-6">
              Industries We
              <br />
              <span className="italic text-ember">Serve.</span>
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              Trusted by factories, utilities, mining operations, and large
              commercial enterprises across South Africa.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px bg-border-strong border border-border-strong md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover="hover"
                className="group relative bg-background overflow-hidden h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={ind.img}
                    alt={ind.title}
                    loading="lazy"
                    width={1280}
                    height={900}
                    className="h-full w-full object-cover opacity-50 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-90 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="relative p-8">
                  <motion.div
                    variants={{ hover: { width: "100%" } }}
                    initial={{ width: "1.5rem" }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    className="h-px bg-ember mb-6"
                  />
                  <h3 className="font-display text-2xl mb-3 text-foreground">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
