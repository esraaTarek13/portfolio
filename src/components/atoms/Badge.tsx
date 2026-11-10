import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Variant = "muted" | "primary";

interface BadgeProps {
  variant?: Variant;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  muted:
    "gap-2 text-muted before:size-1.75 before:rounded-full before:bg-accent-2 before:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent-2)_25%,transparent)]",
  primary: "gap-2.5 text-accent before:h-px before:w-6.5 before:bg-accent",
};

export default function Badge({ variant = "primary", children }: BadgeProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center font-mono text-[11px] uppercase tracking-widest rtl:tracking-normal before:shrink-0",
        variants[variant],
      )}
    >
      {children}
    </p>
  );
}
