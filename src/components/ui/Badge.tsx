import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "solid";
};

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const styles = {
    default:
      "bg-teal-100/70 text-teal-700 border border-teal-200/80 dark:bg-teal-800/40 dark:text-teal-200 dark:border-teal-700/60",
    outline:
      "border border-border-strong/70 text-fg-muted bg-transparent",
    solid:
      "bg-teal-500 text-teal-50 border border-teal-500 dark:bg-teal-400 dark:text-teal-950 dark:border-teal-400",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-tight transition-colors",
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
