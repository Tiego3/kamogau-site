import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 2018, label: "Established", suffix: "", prefix: "" },
  { value: 1, label: "BBBEE Level", suffix: "", prefix: "" },
  { value: 5, label: "Service Categories", suffix: "+", prefix: "" },
  { value: 100, label: "Compliance Rate", suffix: "%", prefix: "" },
];

function Counter({ to, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => prefix + Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2, ease: [0.25, 1, 0.5, 1] });
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  return (
    <section className="relative bg-background border-y border-border py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="border-l border-border-strong pl-6"
            >
              <div className="font-display text-5xl lg:text-6xl text-ember mb-3">
                <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <div className="text-eyebrow">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
