import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends Omit<ComponentPropsWithoutRef<"input">, "type"> {
  type?: "text" | "email";
}

export default function Input({
  type = "text",
  className,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      dir={type === "email" ? "ltr" : undefined}
      className={cn(
        "w-full border-b-2 border-line-strong py-2.5 text-sm text-text placeholder:text-faint transition-colors duration-(--dur-s) ease-brand hover:border-line focus:border-accent",
        "rtl:text-right",
        className,
      )}
      {...props}
    />
  );
}
