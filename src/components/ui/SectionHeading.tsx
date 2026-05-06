"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {(index || eyebrow) && (
        <div
          className={cn(
            "flex items-center gap-3 mb-5",
            align === "center" && "justify-center",
          )}
        >
          {index && (
            <span className="font-mono text-[11px] text-gold-600 dark:text-gold-400 tracking-[0.3em]">
              {index}
            </span>
          )}
          {index && eyebrow && (
            <span className="h-px w-10 bg-gradient-to-r from-gold-500/60 via-gold-500/30 to-transparent" />
          )}
          {eyebrow && (
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-fg-muted">
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance leading-[1.08]">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "mt-5 h-px w-20 origin-left bg-gradient-to-r from-gold-500 via-gold-400/70 to-transparent",
          align === "center" && "mx-auto origin-center",
        )}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-base md:text-lg text-fg-muted leading-relaxed text-balance"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
