import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Variant = "muted" | "primary" | "plain";

interface BadgeProps {
  variant?: Variant;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  muted:
    "gap-2 text-muted before:size-1.75 before:rounded-full before:bg-accent before:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_25%,transparent)]",
  primary: "gap-2.5 text-accent before:h-px before:w-6.5 before:bg-accent",
  plain: "text-muted",
};

export default function Badge({ variant = "primary", children }: BadgeProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] rtl:tracking-normal before:shrink-0",
        variants[variant],
      )}
    >
      {children}
    </p>
  );
}
