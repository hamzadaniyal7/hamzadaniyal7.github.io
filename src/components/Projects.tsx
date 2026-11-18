"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectList } from "./ProjectList";
import { featuredProjects, projects } from "@/lib/data";

const remaining = projects.length - featuredProjects.length;

export function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Selected Projects"
          title="Case studies, not screenshots."
          description="Each project below is broken down into the problem it solved, the architecture I chose, and the impact it had on the business. Three of them are here — the full set is one click away."
        />

        <ProjectList items={featuredProjects} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-[52ch] text-sm md:text-base text-fg-muted leading-relaxed">
            {remaining} more case studies — analytics, logistics, HR operations,
            developer tools, RAG search and AI-built products.
          </p>
          <Link
            href="/case-studies"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-600 dark:bg-gold-500 dark:hover:bg-gold-600 text-grey-950 px-5 py-3 text-sm font-medium shadow-glow transition-colors"
          >
            All {projects.length} case studies
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
