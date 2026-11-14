import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export default function Label({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"label">) {
  return (
    <label
      className={cn(
        "block text-xs font-bold uppercase tracking-[0.2em] text-muted mb-1",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
}