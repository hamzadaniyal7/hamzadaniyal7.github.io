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
      "bg-gold-500/10 text-gold-700 border border-gold-500/30 dark:bg-gold-500/12 dark:text-gold-300 dark:border-gold-500/25",
    outline:
      "border border-border-strong/70 text-fg-muted bg-transparent",
    solid:
      "bg-gold-500 text-grey-950 border border-gold-500 dark:bg-gold-400 dark:text-grey-950 dark:border-gold-400",
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
