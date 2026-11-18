"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = Omit<HTMLMotionProps<"div">, "children"> & {
  interactive?: boolean;
  shine?: boolean;
  children?: ReactNode;
};

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    { className, interactive = false, shine = true, children, ...props },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={interactive ? { y: -6 } : undefined}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
        className={cn(
          "group relative rounded-2xl glass-strong p-6 shadow-soft",
          "transition-shadow duration-300",
          interactive && "hover:shadow-glow cursor-pointer",
          className,
        )}
        {...props}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-gold-300/[0.04]" />
        {interactive && shine && <span className="shine-layer" aria-hidden />}
        <div className="relative">{children}</div>
      </motion.div>
    );
  },
);

GlassCard.displayName = "GlassCard";
