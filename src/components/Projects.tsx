"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Target, Wrench, TrendingUp } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { TiltCard } from "./ui/TiltCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Case studies, not screenshots."
          description="Each project below is broken down into the problem it solved, the architecture I chose, and the impact it had on the business."
        />

        <div className="space-y-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
            >
              <TiltCard max={3} className="rounded-2xl">
                <GlassCard className="overflow-hidden p-0">
                  <div className="grid lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-5 relative p-7 md:p-9 border-b lg:border-b-0 lg:border-r border-border/60 bg-gradient-to-br from-sage-100/50 via-transparent to-transparent dark:from-sage-800/30">
                      <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-sage-300/30 dark:bg-sage-500/15 blur-3xl" />
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-mono uppercase tracking-[0.2em] text-fg-subtle">
                            0{idx + 1} · {p.domain}
                          </div>
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sage-500/10 dark:bg-sage-300/10 text-sage-600 dark:text-sage-200 transition-transform group-hover:rotate-45">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>
                        <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-fg leading-tight tracking-tight">
                          {p.name}
                        </h3>
                        <p className="mt-3 text-sm md:text-base text-fg-muted leading-relaxed">
                          {p.summary}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <Badge key={s}>{s}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 p-7 md:p-9 space-y-6">
                      <Block icon={Target} label="Problem" body={p.problem} />
                      <Block icon={Wrench} label="Solution" body={p.solution} />
                      <Block
                        icon={TrendingUp}
                        label="Impact"
                        body={
                          <ul className="mt-2 space-y-2">
                            {p.impact.map((i) => (
                              <li
                                key={i}
                                className="flex gap-2.5 text-sm text-fg-muted leading-relaxed"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage-400" />
                                <span>{i}</span>
                              </li>
                            ))}
                          </ul>
                        }
                      />
                    </div>
                  </div>
                </GlassCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Block({
  icon: Icon,
  label,
  body,
}: {
  icon: typeof Target;
  label: string;
  body: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-fg-subtle">
        <Icon className="h-3.5 w-3.5 text-sage-500 dark:text-sage-300" />
        {label}
      </div>
      {typeof body === "string" ? (
        <p className="mt-2 text-sm md:text-[0.95rem] text-fg leading-relaxed">
          {body}
        </p>
      ) : (
        body
      )}
    </div>
  );
}
