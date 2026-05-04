"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  BarChart3,
  Plug,
  Wrench,
  Gauge,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { skillGroups } from "@/lib/data";

const icons = [Code2, Sparkles, Palette, BarChart3, Plug, Gauge, Wrench];

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built around shipping production Angular at scale."
          description="Grouped by what they actually do, not by buzzword count. Every item below has been used in production code that real users depend on."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, idx) => {
            const Icon = icons[idx] ?? Code2;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard interactive className="h-full">
                  <div className="flex items-start justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal-500/15 text-teal-600 dark:bg-teal-300/15 dark:text-teal-200 transition-all duration-500 group-hover:bg-teal-500/25 group-hover:rotate-[-6deg] group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="relative h-6 w-10 overflow-hidden">
                      <span className="absolute inset-y-0 right-0 inline-flex items-center text-xs font-mono text-fg-subtle transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                        0{idx + 1}
                      </span>
                      <span className="absolute inset-y-0 right-0 inline-flex items-center translate-y-full opacity-0 text-teal-600 dark:text-teal-200 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-fg">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-sm text-fg-muted leading-relaxed">
                    {group.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
