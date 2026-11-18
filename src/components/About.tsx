import { Cpu, Layers, Bot } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { stats } from "@/lib/data";

const pillars = [
  {
    icon: Layers,
    title: "Frontend Engineering",
    text: "Angular (Signals, RxJS, NgRx, standalone components), React and Next.js — module boundaries, state ownership, and change-detection cost kept under control so large apps stay fast and easy to change.",
  },
  {
    icon: Bot,
    title: "AI Engineering",
    text: "LLM applications, AI agents and agentic workflows — streaming chat over SSE, UI generated from a JSON spec, prompt and agent configuration, and RAG document search with cited answers.",
  },
  {
    icon: Cpu,
    title: "Full-Stack Development",
    text: "REST APIs and FastAPI/PostgreSQL backends, Firebase, Stripe, Twilio, and multi-tenant SaaS with role-based access control. Comfortable owning a feature from API contract to pixel.",
  },
];

export function About() {
  return (
    <section id="about" className="section-pad border-t-0">
      <div className="container-x">
        <SectionHeading
          eyebrow="About"
          title="I build the interfaces behind AI-powered products."
          description="Since graduating in Computer Science in 2022, I&apos;ve spent 4+ years at Z-Axiss shipping production web platforms across logistics, analytics, healthcare, climate-tech and developer tools. For the last ~2 years I&apos;ve worked closely with Trillo on its AI platform — building frontend for agent management, Adaptive UI and agent observability."
        />

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12">
          <div className="py-2">
            <h3 className="max-w-[28ch] text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              AI-powered products deserve interfaces that{" "}
              <span className="text-accent">keep up with them.</span>
            </h3>
            <p className="mt-4 max-w-[60ch] leading-relaxed text-fg-muted">
              I build agent consoles, streaming conversational UIs, and
              observability dashboards on <strong className="font-semibold text-fg">Angular, React and TypeScript</strong>{" "}
              — turning loose requirements into shipped software that feels
              fast, scales cleanly, and stays easy to evolve.
            </p>
            <p className="mt-3 max-w-[60ch] leading-relaxed text-fg-muted">
              LLMs and AI agents are what I build for — and I own the
              architecture decisions behind every surface I ship.
            </p>
          </div>

          <GlassCard>
            <h3 className="section-label">By the numbers</h3>
            <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
              {stats.map(({ label, value, suffix }) => (
                <div key={label} className="flex flex-col-reverse justify-end bg-bg px-3 py-4 sm:px-4">
                  <dt className="mt-1 text-xs leading-snug text-fg-muted sm:text-sm">{label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">{value}{suffix}</dd>
                </div>
              ))}
            </dl>
            <dl className="mt-5 space-y-3 text-sm leading-relaxed">
              <Fact label="Domains" value="Healthcare · AI · Climate · Logistics · Supply Chain · Dev Tools" />
              <Fact label="Currently" value="Z-Axiss (SMC - Pvt Ltd)" />
              <Fact label="Open to" value="Remote · Frontend · AI · Full-Stack" />
            </dl>
          </GlassCard>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <GlassCard key={title}>
              <Icon aria-hidden="true" className="h-5 w-5 text-accent" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[5rem_minmax(0,1fr)] gap-2">
      <dt className="font-medium">{label}</dt>
      <dd className="text-fg-muted">{value}</dd>
    </div>
  );
}
