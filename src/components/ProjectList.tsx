import { Plus } from "lucide-react";
import { Badge } from "./ui/Badge";
import type { Project } from "@/lib/data";

export function ProjectList({ items }: { items: readonly Project[] }) {
  return (
    <div className="border-t border-border-strong">
      {items.map((project) => (
        <details key={project.name} className="project border-b border-border">
          <summary className="project-summary">
            <span className="section-label project-domain">{project.domain}</span>
            <span className="col-start-1 row-start-2 min-w-0 lg:col-start-2 lg:row-start-1">
              <span role="heading" aria-level={3} className="block text-xl font-semibold tracking-tight sm:text-2xl">
                {project.name}
              </span>
              <span className="mt-2 block max-w-[74ch] text-sm leading-relaxed text-fg-muted sm:text-base">
                {project.summary}
              </span>
            </span>
            <span aria-hidden="true" className="project-toggle"><Plus size={18} /></span>
          </summary>

          <div className="project-detail">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div>
                <h4 className="section-label">Problem</h4>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:text-base">{project.problem}</p>
              </div>
              <div>
                <h4 className="section-label">Solution</h4>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:text-base">{project.solution}</p>
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-5">
              <h4 className="section-label">Impact</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-fg-muted marker:text-accent sm:text-base">
                {project.impact.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => <Badge key={item}>{item}</Badge>)}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
