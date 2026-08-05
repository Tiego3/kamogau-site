import { motion } from "framer-motion";
import Reveal from "./Reveal";

const services = [
  {
    n: "01",
    title: "Construction",
    body: "Steel erection, general building, fabrication and modification for industrial facilities.",
    items: ["Steel Erection", "General Building", "Fabrication & Modification"],
  },
  {
    n: "02",
    title: "Engineering",
    body: "Mechanical, electrical and fire piping installations with compliance focus.",
    items: ["Mechanical Services", "Electrical Installations", "Fire Piping Systems"],
  },
  {
    n: "03",
    title: "Industrial Services",
    body: "Painting, insulation, scaffolding and fencing for large-scale project sites.",
    items: ["Painting & Insulation", "Scaffolding", "Fencing Installation"],
  },
  {
    n: "04",
    title: "Maintenance",
    body: "Building and industrial maintenance — including plumbing and cleaning services.",
    items: ["Building Maintenance", "Industrial Cleaning", "Plumbing Services"],
  },
  {
    n: "05",
    title: "Supply & Delivery",
    body: "Industrial equipment and essential materials supplied and delivered nationwide.",
    items: ["Industrial Equipment", "Valves & Pumps", "PPE & Materials"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-background py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-20 grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-ember" />
              <span className="text-eyebrow">What we do</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display text-[clamp(2rem,5vw,4.5rem)] text-foreground">
              Five disciplines.
              <br />
              <span className="italic text-ember">One standard.</span>
            </h2>
          </Reveal>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <motion.article
                whileHover="hover"
                className="group relative grid gap-6 py-10 lg:grid-cols-[80px_1fr_1fr_auto] lg:items-center lg:gap-10"
              >
                {/* Hover bar */}
                <motion.span
                  variants={{ hover: { scaleX: 1 } }}
                  initial={{ scaleX: 0 }}
                  className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-ember"
                />
                <div className="font-mono text-xs text-ember">{s.n}</div>
                <h3 className="font-display text-3xl tracking-tight text-foreground lg:text-4xl">
                  {s.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <ul className="flex flex-col gap-1 text-xs text-muted-foreground">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-px w-3 bg-ember/60" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
