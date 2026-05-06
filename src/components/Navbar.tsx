"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, personal } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:pt-6">
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 md:px-6 py-3",
          "transition-all duration-300",
          scrolled
            ? "bg-bg/70 backdrop-blur-xl border border-border-strong/60 shadow-soft"
            : "bg-transparent border border-transparent",
        )}
      >
        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-sage-500 text-sage-50 dark:bg-sage-400 dark:text-sage-950 font-mono font-bold shadow-glow group-hover:scale-105 transition-transform">
            HD
          </span>
          <span className="hidden sm:inline text-fg">Hamza Daniyal</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "relative px-3 py-2 rounded-full transition-colors",
                  active === link.id
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg",
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-sage-200/70 dark:bg-sage-800/70"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={personal.resume}
            download
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-sage-400/40 bg-sage-500/10 hover:bg-sage-500/20 dark:bg-sage-400/10 dark:hover:bg-sage-400/20 text-sage-700 dark:text-sage-200 px-3.5 py-1.5 text-xs font-medium transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong/60 bg-bg-subtle/60"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-auto mt-2 max-w-6xl rounded-2xl bg-bg/90 backdrop-blur-xl border border-border-strong/60 p-2 shadow-soft"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      active === link.id
                        ? "bg-sage-200/70 dark:bg-sage-800/70 text-fg"
                        : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personal.resume}
                  download
                  className="mt-1 flex items-center gap-2 rounded-xl bg-sage-500 dark:bg-sage-400 dark:text-sage-950 text-sage-50 px-4 py-3 text-sm font-medium"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
