import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type Level = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Variant = "display" | "section" | "card" | "project";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: Level;
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  display:
    "text-[clamp(44px,6.25vw,90px)] leading-[0.98] tracking-[-0.01em] text-accent font-display",
  section:
    "text-[clamp(26px,3.4vw,40px)] leading-[1.2] tracking-[-0.01em] font-display",
  card: "text-[clamp(12px,2.5vw,14px)] leading-[1.4] tracking-[0.01em] font-sans font-bold",
  project:
    "text-[clamp(16px,2.5vw,19px)] leading-[1.3] tracking-[-0.005em] font-display font-medium",
};

export default function Heading({
  as: Tag = "h2",
  variant = "section",
  className,
  ...rest
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "text-balance rtl:leading-[1.4] rtl:tracking-normal",
        variants[variant],
        className,
      )}
      {...rest}
    />
  );
}
