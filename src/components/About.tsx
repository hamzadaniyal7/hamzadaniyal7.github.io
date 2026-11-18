"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Bot } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { stats } from "@/lib/data";

const pillars = [
  {
    icon: Layers,
    title: "Frontend Engineering",
    text: "Angular (Signals, RxJS, NgRx, standalone components), React and Next.js — module boundaries, state ownership, and change-detection cost kept under control so large apps stay fast and easy to change.",
  },
  {
    icon: Bot,
    title: "AI Engineering",
    text: "LLM applications, AI agents and agentic workflows — streaming chat over SSE, UI generated from a JSON spec, prompt and agent configuration, and RAG document search with cited answers.",
  },
  {
    icon: Cpu,
    title: "Full-Stack Development",
    text: "REST APIs and FastAPI/PostgreSQL backends, Firebase, Stripe, Twilio, and multi-tenant SaaS with role-based access control. Comfortable owning a feature from API contract to pixel.",
  },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="I build the interfaces behind AI-powered products."
          description="Since graduating in Computer Science in 2022, I&apos;ve spent 4+ years at Z-Axiss shipping production web platforms across logistics, analytics, healthcare, climate-tech and developer tools. For the last ~2 years I&apos;ve worked closely with Trillo on its AI platform — building frontend for agent management, Adaptive UI and agent observability."
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
                AI-powered products deserve interfaces that{" "}
                <span className="gradient-text">keep up with them.</span>
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-fg-muted">
                I build agent consoles, streaming conversational UIs, and
                observability dashboards on{" "}
                <span className="text-gold-600 dark:text-gold-300 font-medium">
                  Angular, React and TypeScript
                </span>{" "}
                — turning loose requirements into shipped software that feels
                fast, scales cleanly, and stays easy to evolve.
              </p>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-fg-subtle">
                LLMs and AI agents are what I build for — and I own the
                architecture decisions behind every surface I ship.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                {pillars.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-bg-subtle/40 p-4"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold-500/15 text-gold-600 dark:bg-gold-300/15 dark:text-gold-200">
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
                <Row label="Currently" value="Z-Axiss (SMC - Pvt Ltd)" />
                <Row label="Open to" value="Remote · Frontend · AI · Full-Stack" />
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
