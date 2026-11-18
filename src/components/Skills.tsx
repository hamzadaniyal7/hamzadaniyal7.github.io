import { BarChart3, Code2, Gauge, Plug, Sparkles, Wrench } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { skillGroups } from "@/lib/data";

const icons = [Code2, Sparkles, Wrench, Plug, BarChart3, Gauge];

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-bg-subtle">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built around shipping AI-powered products."
          description="Three areas I work across — frontend engineering, AI engineering, and full-stack development. Every item below has been used in production code that real users depend on."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, description, items }, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <GlassCard key={title} className="bg-bg">
                <Icon aria-hidden="true" className="h-5 w-5 text-accent" />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-fg-muted">{description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => <li key={item}><Badge>{item}</Badge></li>)}
                </ul>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
