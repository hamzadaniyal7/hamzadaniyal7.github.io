import Image from "next/image";
import { ArrowRight, Briefcase, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personal } from "@/lib/data";

const socials = [
  { label: "GitHub", href: personal.github, icon: Github },
  { label: "LinkedIn", href: personal.linkedin, icon: Linkedin },
  { label: "Upwork profile", href: personal.upwork, icon: Briefcase },
];

export function Hero() {
  return (
    <section id="top" className="hero px-5 sm:px-8 lg:px-12">
      <div className="container-x grid items-center gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-20">
        <div className="min-w-0">
          <p className="flex items-center gap-2.5 text-sm font-medium text-fg-muted">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            Open to remote frontend, AI &amp; full-stack roles
          </p>
          <h1 className="hero-title mt-6 font-semibold">
            Engineering at AI&nbsp;speed.
            <span className="block text-accent">Scale further.</span>
          </h1>
          <p className="mt-6 text-xl font-medium tracking-tight sm:text-2xl">
            {personal.role}.
          </p>
          <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-fg-muted sm:text-lg">
            {personal.tagline} 4+ years shipping production web platforms in
            Angular, React and TypeScript — and two years building with{" "}
            <span className="font-medium text-fg">LLMs, AI agents, and Claude Code</span>.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#projects" className="action action-primary">
              View Projects <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href="#contact" className="action action-secondary">
              Contact Me <Mail aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer" className="icon-action">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <figure className="profile-card w-full max-w-md md:justify-self-end">
          <Image
            src="/img/hamza.jpg"
            alt="Portrait of Hamza Daniyal"
            width={512}
            height={512}
            priority
            sizes="(min-width: 1280px) 420px, (min-width: 768px) 39vw, 448px"
            className="aspect-[5/4] w-full rounded-xl object-cover object-top md:aspect-square"
          />
          <figcaption className="px-2 pb-2 pt-4">
            <p className="text-lg font-semibold tracking-tight">{personal.name}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-fg-muted">
              <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
              {personal.location}
            </p>
            <a href={`mailto:${personal.email}`} className="mt-2 inline-block break-all text-sm text-fg-muted underline-offset-4 hover:text-accent hover:underline">
              {personal.email}
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
