"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-border-strong/60 bg-bg-subtle/60 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-fg-muted",
            align === "center" && "mx-auto",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sage-400 shadow-[0_0_10px_2px_rgba(122,138,112,0.7)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-fg-muted leading-relaxed text-balance">
          {description}
        </p>
      )}
    </motion.div>
  );
}
