import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Variant = "muted" | "primary" | "plain";

interface BadgeProps {
  variant?: Variant;
  className?: string | undefined;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  muted:
    "gap-2 text-muted before:size-1.75 before:rounded-full before:bg-accent before:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_25%,transparent)]",
  primary: "gap-2.5 text-accent-2 font-extrabold before:h-px before:w-6.5 before:bg-accent-2",
  plain: "text-accent-2 font-semibold",
};

export default function Badge({
  variant = "primary",
  className,
  children,
}: BadgeProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center font-mono text-[10px] uppercase tracking-widest before:shrink-0 md:text-[11px] rtl:tracking-normal",
        variants[variant],
        className,
      )}
    >
      {children}
    </p>
  );
}