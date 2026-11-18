import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectList } from "@/components/ProjectList";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { GridBackground } from "@/components/ui/GridBackground";
import { personal, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies — Hamza Daniyal",
  description:
    "Ten production builds written up in full: AI agent observability, model-generated UI, developer tooling, RAG document search, project and HR platforms, analytics, and real-time logistics.",
  openGraph: {
    title: "Case Studies — Hamza Daniyal",
    description:
      "Ten production builds, each broken down into the problem it solved, the architecture behind it, and what changed for the business.",
    type: "article",
  },
};

const facts = [
  { value: `${projects.length}`, label: "Case studies here" },
  { value: "11+", label: "Production platforms shipped" },
  { value: "4+", label: "Years shipping to production" },
  { value: "2+", label: "Years building with LLMs" },
];

export default function CaseStudies() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />

      <section className="relative pt-32 md:pt-44 pb-12 md:pb-16 px-6 md:px-10 lg:px-16 overflow-hidden">
        <GridBackground />

        <div className="relative container-x">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className="font-mono text-[11px] text-gold-600 dark:text-gold-400 tracking-[0.3em]">
              ALL
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-gold-500/60 via-gold-500/30 to-transparent" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-fg-muted">
              Case Studies
            </span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
            {projects.length} builds,{" "}
            <span className="gradient-text">start to finish.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-lg text-fg-muted leading-relaxed">
            I&apos;ve shipped 11+ production platforms since 2022. These are the{" "}
            {projects.length} I can write up in detail — the problem each one
            actually solved, the architecture I chose and why, and what changed
            once it was live.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {facts.map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text">
                  {value}
                </div>
                <div className="mt-1 text-xs md:text-sm text-fg-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative pt-4 md:pt-8">
        <div className="container-x">
          <ProjectList items={projects} />
        </div>
      </section>

      <section className="section-pad relative">
        <div className="container-x">
          <h2 className="max-w-[20ch] text-3xl md:text-4xl font-semibold tracking-tight leading-[1.08] text-balance">
            Want one of these built for{" "}
            <span className="gradient-text">your team?</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-fg-muted leading-relaxed">
            Tell me the problem you&apos;re solving and I&apos;ll tell you what I
            would build, how long it takes, and what I&apos;d leave out.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-600 dark:bg-gold-500 dark:hover:bg-gold-600 text-grey-950 px-5 py-3 text-sm font-medium shadow-glow transition-colors"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={personal.resume}
              download="Hamza-Daniyal-CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong/60 bg-bg-subtle/40 hover:bg-bg-subtle px-5 py-3 text-sm font-medium text-fg-muted hover:text-fg transition-colors"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
