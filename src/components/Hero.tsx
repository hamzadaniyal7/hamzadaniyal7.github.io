"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { GridBackground } from "./ui/GridBackground";
import { LetterReveal } from "./ui/LetterReveal";
import { MagneticButton } from "./ui/MagneticButton";
import { TiltCard } from "./ui/TiltCard";
import { personal } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-32 md:pt-40 pb-24 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <GridBackground />

      <div className="relative container-x grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong/60 bg-bg-subtle/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-fg-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
            </span>
            Available for senior frontend roles & consulting
            <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-teal-500/15 dark:bg-teal-300/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-200">
              <Sparkles className="h-3 w-3" />
              AI-Native
            </span>
          </motion.div>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] font-semibold tracking-tight text-balance">
            <LetterReveal
              as="div"
              text="Ship faster."
              className="block text-fg"
              stagger={0.04}
            />
            <LetterReveal
              as="div"
              text="Scale further."
              className="block gradient-text"
              delay={0.4}
              stagger={0.04}
            />
            <LetterReveal
              as="div"
              text="Lead Frontend Engineer."
              className="block mt-4 text-2xl md:text-3xl lg:text-4xl text-fg-muted font-medium tracking-tight"
              delay={0.85}
              stagger={0.02}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-fg-muted leading-relaxed text-balance"
          >
            {personal.tagline} 4+ years architecting Angular platforms, plus a
            year shipping production-ready apps with{" "}
            <span className="text-teal-600 dark:text-teal-300 font-medium">
              Claude Code, Gemini, and modern vibe-coding workflows
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-300 dark:hover:bg-teal-200 text-teal-50 dark:text-teal-950 px-5 py-3 text-sm font-medium shadow-glow transition-colors"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border-strong/70 bg-bg-subtle/40 hover:bg-bg-subtle backdrop-blur px-5 py-3 text-sm font-medium text-fg transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </MagneticButton>

            <div className="ml-1 flex items-center gap-1.5">
              <a
                href={personal.github}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong/60 bg-bg-subtle/40 hover:bg-bg-subtle hover:border-teal-400/60 transition-all hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={personal.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong/60 bg-bg-subtle/40 hover:bg-bg-subtle hover:border-teal-400/60 transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fg-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {personal.location}
            </span>
            <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-fg-subtle" />
            <span className="font-mono text-xs">{personal.email}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 hidden lg:block"
        >
          <HeroCard />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-fg-subtle">
          Scroll
        </div>
        <div className="h-8 w-px bg-gradient-to-b from-teal-400/60 to-transparent" />
      </motion.div>
    </section>
  );
}

function HeroCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-teal-300/40 via-teal-400/20 to-transparent blur-2xl animate-pulse" />
      <TiltCard max={5} className="relative rounded-3xl glass-strong p-1.5 shadow-soft">
        <div className="rounded-[18px] bg-bg/80 backdrop-blur p-5 font-mono text-[11px] leading-relaxed">
          <div className="flex items-center gap-1.5 pb-3 border-b border-border/60">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-auto text-fg-subtle">~/lead.engineer.ts</span>
          </div>
          <div className="pt-4 space-y-1">
            <div>
              <span className="text-teal-500 dark:text-teal-300">const</span>{" "}
              <span className="text-fg">engineer</span>
              <span className="text-fg-muted"> = </span>
              <span className="text-fg-muted">{"{"}</span>
            </div>
            <div className="pl-4 space-y-1">
              <div>
                <span className="text-fg-muted">name:</span>{" "}
                <span className="text-teal-600 dark:text-teal-300">
                  &apos;Hamza Daniyal&apos;
                </span>
                ,
              </div>
              <div>
                <span className="text-fg-muted">stack:</span>{" "}
                <span className="text-fg">[</span>
                <span className="text-teal-600 dark:text-teal-300">
                  &apos;Angular 18&apos;
                </span>
                ,{" "}
                <span className="text-teal-600 dark:text-teal-300">
                  &apos;RxJS&apos;
                </span>
                ,{" "}
                <span className="text-teal-600 dark:text-teal-300">
                  &apos;NgRx&apos;
                </span>
                <span className="text-fg">]</span>,
              </div>
              <div>
                <span className="text-fg-muted">aiTools:</span>{" "}
                <span className="text-fg">[</span>
                <span className="text-teal-600 dark:text-teal-300">
                  &apos;Claude Code&apos;
                </span>
                ,{" "}
                <span className="text-teal-600 dark:text-teal-300">
                  &apos;Gemini&apos;
                </span>
                <span className="text-fg">]</span>,
              </div>
              <div>
                <span className="text-fg-muted">years:</span>{" "}
                <span className="text-fg">4</span>,
              </div>
              <div>
                <span className="text-fg-muted">shipping:</span>{" "}
                <span className="text-teal-600 dark:text-teal-300">true</span>,
              </div>
            </div>
            <div className="text-fg-muted">{"}"}</div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
