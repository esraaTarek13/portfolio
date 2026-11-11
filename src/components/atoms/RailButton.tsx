import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export default function RailButton({
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={cn(
        "grid size-10 md:size-11.5 place-items-center rounded-full border border-line-strong text-muted ",
        "transition-colors duration-(--dur-s) ease-brand hover:bg-elev-2 hover:text-text",
        className,
      )}
      {...props}
    />
  );
}
