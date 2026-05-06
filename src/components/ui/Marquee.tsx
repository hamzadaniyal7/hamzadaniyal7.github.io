"use client";

import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  speed?: "slow" | "normal" | "fast";
  className?: string;
};

const durations = {
  slow: "60s",
  normal: "40s",
  fast: "25s",
};

export function Marquee({ items, speed = "normal", className }: Props) {
  return (
    <div className={cn("relative overflow-hidden mask-fade-x", className)}>
      <div
        className="flex w-max items-center gap-10 whitespace-nowrap animate-marquee"
        style={{ animationDuration: durations[speed] }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-3 text-sm md:text-base"
          >
            <span className="text-fg-muted font-medium tracking-tight">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
