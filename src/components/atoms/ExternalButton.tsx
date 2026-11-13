import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export default function ExternalButton({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-[13px] font-bold text-text hover:border-accent hover:text-accent hover:bg-elev-2 hover:-translate-y-0.5 md:px-6.5 md:py-3.5 md:text-sm",
        "transition-all duration-(--dur-s) ease-brand",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
