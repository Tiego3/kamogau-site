import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "../assets/hero.jpg";

const headline = [
  { text: "Industrial", ember: false },
  { text: "Contracting,", ember: false },
  { text: "you", ember: true },
  { text: "can", ember: true },
  { text: "rely", ember: true },
  { text: "on.", ember: true },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={ref} id="top" className="relative h-dvh min-h-[640px] overflow-hidden">
      {/* Parallax image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -top-6 will-change-transform">
        <img
          src={heroImg}
          alt="Industrial construction site at twilight"
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background" />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-vignette)" }} />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 pt-24 sm:px-6 lg:justify-center lg:px-16 lg:pb-28 lg:pt-24"
      >
        <h1 className="text-display max-w-4xl text-[clamp(2.25rem,8.5vw,6.5rem)] text-foreground">
          {headline.map((word, i) => (
            <motion.span
              key={word.text}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="mr-[0.25em] inline-block"
            >
              {word.ember ? <span className="text-ember">{word.text}</span> : word.text}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-ember" />
          <span className="text-eyebrow">Eskom Vendor · BBBEE Level 1 · CSD Registered</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end"
        >
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Construction, engineering, maintenance, and industrial supply.
            Delivered safely, on time, and to specification.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-ember px-7 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground"
            >
              <span className="absolute inset-0 translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
              <span className="relative">Request a quote</span>
              <span className="relative transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 px-2 py-4 text-xs uppercase tracking-[0.22em] text-foreground"
            >
              <span className="relative">
                View our services
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-100 bg-foreground transition-transform duration-500 group-hover:origin-left group-hover:scale-x-0" />
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-eyebrow text-[0.55rem]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-px bg-gradient-to-b from-ember to-transparent"
        />
      </motion.div>
    </section>
  );
}
