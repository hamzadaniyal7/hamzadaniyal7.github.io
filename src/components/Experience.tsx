"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where the work has actually shipped."
          description="Roles measured by what was delivered, what changed, and what the team carried forward."
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-gold-400/0 via-gold-400/40 to-gold-400/0"
          />

          <div className="space-y-6">
            {experience.map((role, idx) => (
              <motion.div
                key={role.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-0 md:left-2 top-6 grid h-9 w-9 place-items-center rounded-full bg-gold-500 dark:bg-gold-400 text-grey-950 shadow-glow">
                  <Briefcase className="h-4 w-4" />
                </div>

                <GlassCard>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-[0.2em] text-fg-subtle">
                        {role.period}
                      </div>
                      <h3 className="mt-2 text-xl md:text-2xl font-semibold text-fg">
                        {role.role}
                      </h3>
                      <div className="mt-1 flex items-center gap-3 text-sm text-fg-muted">
                        <span className="text-gold-600 dark:text-gold-300 font-medium">
                          {role.company}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs">
                          <MapPin className="h-3 w-3" />
                          {role.location}
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-wrap justify-end gap-1.5 max-w-sm">
                      {role.stack.slice(0, 5).map((s) => (
                        <Badge key={s} variant="outline">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="mt-5 text-sm md:text-base text-fg-muted leading-relaxed">
                    {role.summary}
                  </p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {role.highlights.map((h) => (
                      <div
                        key={h.text}
                        className="flex items-start gap-3 rounded-xl border border-border/60 bg-bg-subtle/40 p-4"
                      >
                        <div className="shrink-0 rounded-lg bg-gold-500/10 dark:bg-gold-300/10 px-2 py-1 text-sm font-mono font-semibold text-gold-600 dark:text-gold-200">
                          {h.metric}
                        </div>
                        <div className="text-sm text-fg-muted leading-relaxed">
                          {h.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex md:hidden flex-wrap gap-1.5">
                    {role.stack.map((s) => (
                      <Badge key={s} variant="outline">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
