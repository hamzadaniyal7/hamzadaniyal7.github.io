"use client";

import { motion } from "framer-motion";
import { Marquee } from "./ui/Marquee";
import { marqueeStack } from "@/lib/data";

export function MarqueeStack() {
  return (
    <section className="relative py-10 md:py-14 border-y border-border/60 bg-bg-subtle/30 backdrop-blur-sm overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container-x"
      >
        <div className="flex items-center gap-6 px-6 md:px-10 lg:px-16">
          <span className="hidden md:inline text-[11px] font-mono uppercase tracking-[0.25em] text-fg-subtle whitespace-nowrap">
            Tech Stack //
          </span>
          <div className="flex-1">
            <Marquee items={marqueeStack} speed="normal" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
