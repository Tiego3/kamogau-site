import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 2018, label: "Established", suffix: "", prefix: "" },
  { value: 1, label: "BBBEE Level", suffix: "", prefix: "" },
  { value: 5, label: "Service Categories", suffix: "+", prefix: "" },
  { value: 100, label: "Compliance Rate", suffix: "%", prefix: "" },
];

function Counter({ to, suffix = "", prefix = "", inView }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => prefix + Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2, ease: [0.25, 1, 0.5, 1] });
    }
  }, [inView, to, count]);

  return <motion.span>{rounded}</motion.span>;
}

function StatItem({ stat, delay }) {
  // Single viewport check drives both the fade-in and the count-up, so
  // they can't fall out of sync — the previous version used two separate
  // useInView hooks with different margins, which on short mobile
  // viewports meant most items entered view enough to fade in but never
  // enough to satisfy the counter's stricter margin, so they stayed at 0.
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
      className="border-l border-border-strong pl-6"
    >
      <div className="font-display text-5xl lg:text-6xl text-ember mb-3">
        <Counter to={stat.value} suffix={stat.suffix} prefix={stat.prefix} inView={inView} />
      </div>
      <div className="text-eyebrow">{stat.label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-background border-y border-border py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
