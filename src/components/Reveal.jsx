import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] },
  },
};

/**
 * Wraps children in a blur/rise-in animation that plays once, the first
 * time the element scrolls into view. Pass `as` to change the rendered tag
 * (e.g. as="h2") so headings stay semantically correct.
 */
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
