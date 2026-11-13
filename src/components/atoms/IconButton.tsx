import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function IconButton({
  label,
  className,
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={twMerge(
        "grid size-9.5 place-items-center rounded-full border border-line-strong bg-elev text-text transition-colors duration-(--dur-s) ease-brand hover:border-accent hover:text-accent",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
