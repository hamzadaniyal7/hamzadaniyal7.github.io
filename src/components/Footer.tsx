import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative px-6 md:px-10 lg:px-16 py-10 border-t border-border/40">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
      />
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-fg-muted">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gold-500 dark:bg-gold-400 text-grey-950 font-mono text-[11px] font-bold">
            HD
          </span>
          <span>
            © {new Date().getFullYear()} {personal.name}. Built with Next.js,
            Tailwind, and Framer Motion.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong/60 hover:border-gold-400/60 hover:bg-grey-200/60 dark:hover:bg-grey-800/60 transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={personal.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong/60 hover:border-gold-400/60 hover:bg-grey-200/60 dark:hover:bg-grey-800/60 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personal.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong/60 hover:border-gold-400/60 hover:bg-grey-200/60 dark:hover:bg-grey-800/60 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={personal.website}
            aria-label="Synexis (company)"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong/60 hover:border-gold-400/60 hover:bg-grey-200/60 dark:hover:bg-grey-800/60 transition-colors"
          >
            <Globe className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
