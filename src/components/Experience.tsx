import { MapPin } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work has actually shipped."
          description="Roles measured by what was delivered, what changed, and what the team carried forward."
        />

        <div className="space-y-5">
          {experience.map((role) => (
            <GlassCard key={role.company} className="grid gap-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-8">
              <div>
                <p className="section-label">{role.period}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{role.role}</h3>
                <p className="mt-1 font-medium text-fg-muted">{role.company}</p>
                <p className="mt-3 flex items-start gap-1.5 text-sm text-fg-muted">
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {role.location}
                </p>
              </div>

              <div>
                <p className="max-w-[72ch] leading-relaxed text-fg-muted">{role.summary}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {role.highlights.map(({ metric, text }) => (
                    <li key={metric} className="rounded-lg border border-border bg-bg p-4">
                      <h4 className="section-label">{metric}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{text}</p>
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.stack.map((item) => <li key={item}><Badge>{item}</Badge></li>)}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
