"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full",
        "border border-border-strong/60 bg-bg-subtle/60 backdrop-blur",
        "hover:border-teal-400/60 hover:bg-teal-100/60 dark:hover:bg-teal-800/40",
        "transition-colors",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex"
          >
            {isDark ? (
              <Moon className="h-4 w-4 text-teal-200" />
            ) : (
              <Sun className="h-4 w-4 text-teal-600" />
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
