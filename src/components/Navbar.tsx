"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, personal } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>();
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const pathname = usePathname();
  // Sections live on the home page, so off-home the same links have to point back at it.
  const onHome = pathname === "/";
  const sectionHref = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    if (!onHome) {
      setActive(undefined);
      return;
    }

    const sections = [...navLinks].reverse().map(({ id }) => document.getElementById(id));

    const updateActiveSection = () => {
      const readingLine = Math.max(window.innerHeight * 0.33, 90);
      const section = sections.find((item) => item && item.getBoundingClientRect().top <= readingLine);
      setActive(section?.id);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [onHome]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header ref={header} className="site-header sticky top-0 z-50 border-b border-border bg-bg/95 px-5 backdrop-blur-lg sm:px-8 lg:px-12">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav aria-label="Primary" className="container-x flex min-h-[4.25rem] items-center justify-between gap-3">
        <a href={onHome ? "#top" : "/"} onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap font-semibold tracking-tight">
          <span aria-hidden="true" className="brand-mark">HD</span>
          <span>{personal.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={sectionHref(id)} aria-current={active === id ? "location" : undefined} className="nav-link">{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a href={personal.resume} download="Hamza-Daniyal-CV.pdf" className="action action-secondary hidden sm:inline-flex">
            <Download aria-hidden="true" className="h-4 w-4" /> Resume
          </a>
          <ThemeToggle />
          <button
            ref={menuButton}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="icon-action lg:hidden"
          >
            {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          </button>
        </div>
      </nav>

      <nav id="mobile-navigation" aria-label="Mobile" hidden={!open} className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.25rem-1px)] overflow-y-auto border-y border-border bg-bg px-5 py-3 sm:px-8 lg:hidden">
        <ul>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={sectionHref(id)} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)} className="nav-link w-full">{label}</a>
            </li>
          ))}
          <li>
            <a href={personal.resume} download="Hamza-Daniyal-CV.pdf" onClick={() => setOpen(false)} className="nav-link w-full gap-2">
              <Download aria-hidden="true" className="h-4 w-4" /> Download Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
