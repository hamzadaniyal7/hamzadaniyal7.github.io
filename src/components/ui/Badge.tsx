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
      "bg-sage-100/70 text-sage-700 border border-sage-200/80 dark:bg-sage-800/40 dark:text-sage-200 dark:border-sage-700/60",
    outline:
      "border border-border-strong/70 text-fg-muted bg-transparent",
    solid:
      "bg-sage-500 text-sage-50 border border-sage-500 dark:bg-sage-400 dark:text-sage-950 dark:border-sage-400",
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
