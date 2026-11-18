import { Briefcase, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

const links = [
  { label: "Email", href: `mailto:${personal.email}`, icon: Mail },
  { label: "GitHub", href: personal.github, icon: Github },
  { label: "LinkedIn", href: personal.linkedin, icon: Linkedin },
  { label: "Upwork profile", href: personal.upwork, icon: Briefcase },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-7 sm:px-8 lg:px-12">
      <div className="container-x flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="brand-mark" aria-hidden="true">HD</span>
          <p className="text-sm leading-relaxed text-fg-muted">
            © {new Date().getFullYear()} {personal.name}. Built with Next.js, Tailwind, and Framer Motion.
          </p>
        </div>
        <div className="flex gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} aria-label={label} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"} className="icon-action">
              <Icon aria-hidden="true" className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
