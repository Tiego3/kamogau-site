import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin fixed bar at the very top of the viewport, filling left-to-right
 * with page scroll progress. Sits above Nav (z-60) so it stays visible
 * even when Nav's own background is transparent at the top of the page.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 z-[60] h-px bg-gradient-ember"
    />
  );
}
