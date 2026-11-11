import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import type { IconType } from "react-icons";

interface SocialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  Icon: IconType;
}

export default function SocialLink({
  label,
  className,
  Icon,
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
      <Icon aria-hidden="true" className="size-3.5 md:size-4.5" />
    </a>
  );
}
