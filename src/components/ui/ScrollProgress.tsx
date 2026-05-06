"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-sage-300 via-sage-500 to-sage-400 dark:from-sage-200 dark:via-sage-300 dark:to-sage-400 shadow-[0_0_10px_rgba(122,138,112,0.7)]"
    />
  );
}
