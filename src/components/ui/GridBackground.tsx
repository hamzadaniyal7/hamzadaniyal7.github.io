"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function GridBackground({ className }: Props) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -140]);
  const y2 = useTransform(scrollY, [0, 800], [0, 90]);
  const y3 = useTransform(scrollY, [0, 800], [0, -70]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.4]);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <motion.div
        style={{ opacity }}
        className={cn(
          "absolute inset-0 bg-grid-light dark:bg-grid-dark",
          "[background-size:40px_40px]",
          "[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]",
          "[-webkit-mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]",
        )}
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-sage-300/25 dark:bg-sage-500/10 blur-3xl animate-blob-1"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -left-32 h-[400px] w-[400px] rounded-full bg-sage-400/20 dark:bg-sage-600/10 blur-3xl animate-blob-2"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-sage-200/40 dark:bg-sage-700/15 blur-3xl animate-blob-1"
      />
    </div>
  );
}
