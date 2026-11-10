import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface SocialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
}

export default function SocialLink({
  label,
  className,
  children,
  ...props
}: SocialLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "grid size-10 md:size-11.5 place-items-center rounded-full border border-line-strong text-muted hover:border-accent",
        "transition-[border-color,color,background-color] duration-(--dur-s) ease-brand hover:bg-elev-2 hover:text-text",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
