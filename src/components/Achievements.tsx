import { Trophy, Rocket, Activity, Users } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { achievements } from "@/lib/data";

const icons = [Rocket, Trophy, Activity, Users];

export function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Achievements"
          title="Compounded wins, not vanity metrics."
          description="What I&apos;ve built, modernized, and led — measured by what stayed true after the launch."
        />

        <ul className="grid gap-x-8 border-b border-border sm:grid-cols-2">
          {achievements.map(({ title, text }, index) => {
            const Icon = icons[index] ?? Trophy;
            return (
              <li key={title} className="flex items-start gap-4 border-t border-border py-5 sm:py-6">
                <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold sm:text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:text-base">{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
