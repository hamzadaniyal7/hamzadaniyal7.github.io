"use client";

import { motion } from "framer-motion";
import { Trophy, Rocket, Activity, Users } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { achievements } from "@/lib/data";

const icons = [Rocket, Trophy, Activity, Users];

export function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Achievements"
          title="Compounded wins, not vanity metrics."
          description="What I&apos;ve built, modernized, and led — measured by what stayed true after the launch."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, idx) => {
            const Icon = icons[idx] ?? Trophy;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
              >
                <GlassCard interactive className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 text-teal-600 dark:from-teal-300/20 dark:to-teal-300/5 dark:text-teal-200 ring-1 ring-teal-500/10 dark:ring-teal-300/15 transition-all duration-500 group-hover:ring-teal-400/40 group-hover:from-teal-500/30 group-hover:scale-110">
                      <Icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-6" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-fg">
                        {a.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-fg-muted leading-relaxed">
                        {a.text}
                      </p>
                    </div>
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
