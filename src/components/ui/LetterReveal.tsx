"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "div";
};

const container = (delay: number, stagger: number): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

const letter: Variants = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function LetterReveal({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  as: Tag = "span",
}: Props) {
  const MotionTag = Tag === "div" ? motion.div : motion.span;
  return (
    <MotionTag
      variants={container(delay, stagger)}
      initial="hidden"
      animate="show"
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          variants={letter}
          aria-hidden
          className="inline-block whitespace-pre"
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </MotionTag>
  );
}
