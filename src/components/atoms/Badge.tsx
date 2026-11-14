import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type Tag = "p" | "dt";
type Variant = "muted" | "primary" | "plain";

interface BadgeProps extends HTMLAttributes<HTMLElement> {
  as?: Tag | undefined;
  variant?: Variant | undefined;
}

const variants: Record<Variant, string> = {
  muted:
    "gap-2 text-muted before:size-1.75 before:rounded-full before:bg-accent before:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_25%,transparent)]",
  primary:
    "gap-2.5 text-accent-2 font-extrabold before:h-px before:w-6.5 before:bg-accent-2",
  plain: "text-accent-2 font-semibold",
};

export default function Badge({
  as: Component = "p",
  variant = "primary",
  className,
  ...rest
}: BadgeProps) {
  return (
    <Component
      className={cn(
        "inline-flex items-center font-mono text-[10px] uppercase tracking-widest before:shrink-0 md:text-[11px] rtl:tracking-normal",
        variants[variant],
        className,
      )}
      {...rest}
    />
  );
}