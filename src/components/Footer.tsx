import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 px-6 md:px-10 lg:px-16 py-10">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-fg-muted">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-sage-500 dark:bg-sage-400 text-sage-50 dark:text-sage-950 font-mono text-[11px] font-bold">
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong/60 hover:border-sage-400/60 hover:bg-sage-100/60 dark:hover:bg-sage-800/60 transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={personal.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong/60 hover:border-sage-400/60 hover:bg-sage-100/60 dark:hover:bg-sage-800/60 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personal.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong/60 hover:border-sage-400/60 hover:bg-sage-100/60 dark:hover:bg-sage-800/60 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={personal.website}
            aria-label="Synexis (company)"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong/60 hover:border-sage-400/60 hover:bg-sage-100/60 dark:hover:bg-sage-800/60 transition-colors"
          >
            <Globe className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
