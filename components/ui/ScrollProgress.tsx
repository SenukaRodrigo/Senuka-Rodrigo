"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin gradient bar pinned to the top of the viewport tracking page scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-cyan-400 via-violet-500 to-rose-500"
    />
  );
}
