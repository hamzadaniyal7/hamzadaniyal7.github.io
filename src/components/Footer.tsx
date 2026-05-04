import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 px-6 md:px-10 lg:px-16 py-10">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-fg-muted">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-teal-500 dark:bg-teal-400 text-teal-50 dark:text-teal-950 font-mono text-[11px] font-bold">
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong/60 hover:border-teal-400/60 hover:bg-teal-100/40 dark:hover:bg-teal-800/40 transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={personal.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong/60 hover:border-teal-400/60 hover:bg-teal-100/40 dark:hover:bg-teal-800/40 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personal.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong/60 hover:border-teal-400/60 hover:bg-teal-100/40 dark:hover:bg-teal-800/40 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
