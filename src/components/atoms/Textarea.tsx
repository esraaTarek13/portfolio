import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export default function Textarea({
  className,
  rows = 5,
  ...props
}: ComponentPropsWithoutRef<"textarea">) {
  return (
    <textarea
      rows={rows}
      className={cn(
        "w-full border-b-2 border-line-strong py-2.5 text-sm text-text placeholder:text-faint transition-colors duration-(--dur-s) ease-brand hover:border-line focus:border-accent",
        "rtl:text-right",
        "min-h-25 resize-none",
        className,
      )}
      {...props}
    />
  );
}
