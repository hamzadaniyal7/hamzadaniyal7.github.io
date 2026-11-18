import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectList } from "./ProjectList";
import { featuredProjects, projects } from "@/lib/data";

const remaining = projects.length - featuredProjects.length;

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-bg-subtle">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Case studies, not screenshots."
          description="Every project is broken down into the problem it solved, the architecture I chose, and the impact it had on the business. Three of them are here — the full set is one click away."
        />

        <ProjectList items={featuredProjects} />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[52ch] text-sm leading-relaxed text-fg-muted sm:text-base">
            {remaining} more case studies — analytics, logistics, HR operations,
            developer tools, RAG search and AI-built products.
          </p>
          <Link href="/case-studies" className="action action-primary self-start sm:self-auto">
            All {projects.length} case studies
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
