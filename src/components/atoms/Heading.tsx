import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Level = "h1" | "h2" | "h3";
type Variant = "display" | "section";

interface HeadingProps {
  as?: Level;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  display: "text-[clamp(44px,6.25vw,90px)] leading-[0.98] text-accent",
  section: "text-[clamp(26px,3.4vw,40px)] leading-[1.2]",
};

export default function Heading({
  as: Tag = "h2",
  variant = "section",
  className,
  children,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display tracking-[-0.01em] rtl:tracking-normal rtl:leading-[1.4] text-balance",
        variants[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
