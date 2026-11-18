import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectList } from "@/components/ProjectList";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
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
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="hero px-5 sm:px-8 lg:px-12">
          <div className="container-x">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-fg-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to home
            </Link>

            <p className="section-label mt-6">Case Studies</p>
            <h1 className="section-title mt-3">
              {projects.length} builds, start to finish.
            </h1>
            <p className="mt-5 max-w-[66ch] text-base leading-relaxed text-fg-muted sm:text-lg">
              I&apos;ve shipped 11+ production platforms since 2022. These are the{" "}
              {projects.length} I can write up in detail — the problem each one
              actually solved, the architecture I chose and why, and what changed
              once it was live. Open any one to read the full breakdown.
            </p>

            <dl className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {facts.map(({ value, label }) => (
                <div key={label} className="flex flex-col-reverse justify-end bg-bg px-4 py-4">
                  <dt className="mt-1 text-xs leading-snug text-fg-muted sm:text-sm">{label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-pad bg-bg-subtle">
          <div className="container-x">
            <ProjectList items={projects} />
          </div>
        </section>

        <section className="section-pad">
          <div className="container-x">
            <h2 className="section-title max-w-[20ch]">
              Want one of these built for your team?
            </h2>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-fg-muted sm:text-lg">
              Tell me the problem you&apos;re solving and I&apos;ll tell you what I
              would build, how long it takes, and what I&apos;d leave out.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/#contact" className="action action-primary">
                Get in touch <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a href={personal.resume} download="Hamza-Daniyal-CV.pdf" className="action action-secondary">
                <Download aria-hidden="true" className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
