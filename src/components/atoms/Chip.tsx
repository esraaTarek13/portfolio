import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ChipProps {
  children: ReactNode;
  className?: string;
}

export default function Chip({ children, className }: ChipProps) {
  return (
    <li
      className={twMerge(
        "rounded-full border border-line bg-white/5 px-3 py-1 font-mono text-xs text-text/90 hover:border-accent/60 hover:bg-accent/10 hover:text-text transition-all duration-(--dur-s) ease-brand",
        className,
      )}
    >
      {children}
    </li>
  );
}
