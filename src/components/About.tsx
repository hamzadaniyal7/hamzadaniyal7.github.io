"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, GitBranch, Sparkles } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { stats } from "@/lib/data";

const pillars = [
  {
    icon: Layers,
    title: "Architecture",
    text: "Module boundaries, state ownership, and reactive data flows that scale past 100k LoC.",
  },
  {
    icon: Cpu,
    title: "Performance",
    text: "Lazy loading, OnPush, Signals, virtualization — measured wins, not micro-tweaks.",
  },
  {
    icon: GitBranch,
    title: "Leadership",
    text: "Code review culture, mentorship, and decisions that compound across the team.",
  },
  {
    icon: Sparkles,
    title: "Craft",
    text: "Pixel-honest UIs, accessibility, and developer experience as first-class concerns.",
  },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="About"
          title="Senior frontend engineering, with a focus on impact."
          description="4+ years shipping Angular platforms across healthcare, AI governance, supply chain, climate-tech (Rewiring America), logistics, and AI dev tools (Trillo). I lead frontend teams, own architecture end-to-end, and care about the things users actually feel — performance, polish, and reliability."
        />

        <div className="grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <GlassCard className="h-full">
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-fg leading-[1.15] text-balance">
                Ambitious products deserve frontends that{" "}
                <span className="gradient-text">don&apos;t slow them down.</span>
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-fg-muted">
                I partner with founders and product teams to architect, build,
                and lead{" "}
                <span className="text-sage-600 dark:text-sage-300 font-medium">
                  Angular and React
                </span>{" "}
                platforms — turning complex requirements into shipped software
                that feels fast, scales cleanly, and stays easy to evolve.
              </p>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-fg-subtle">
                Lead-engineer judgment, hands-on execution, and an obsession
                with the details users actually feel.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {pillars.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-bg-subtle/40 p-4"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sage-500/15 text-sage-600 dark:bg-sage-300/15 dark:text-sage-200">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-fg">{title}</div>
                      <div className="mt-0.5 text-xs text-fg-muted leading-relaxed">
                        {text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <GlassCard className="h-full">
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-fg-subtle">
                By the numbers
              </div>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-4xl md:text-5xl font-semibold tracking-tight gradient-text">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-xs md:text-sm text-fg-muted">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-6 border-t border-border/60 space-y-2 text-sm text-fg-muted">
                <Row label="Domains" value="Healthcare · AI · Climate · Logistics · Supply Chain · Dev Tools" />
                <Row label="Currently" value="Z-Axiss SMC Pvt Ltd" />
                <Row label="Open to" value="Remote · Lead / Staff frontend" />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-xs uppercase tracking-wider text-fg-subtle">
        {label}
      </span>
      <span className="text-right text-fg">{value}</span>
    </div>
  );
}
