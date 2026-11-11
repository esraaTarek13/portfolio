import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "lead" | "body";

interface ParagraphProps extends ComponentPropsWithoutRef<"p"> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  lead: "text-[clamp(15px,1.7vw,19px)] leading-[1.6] rtl:leading-[2]",
  body: "text-[clamp(12px,1.7vw,15px)] leading-[1.75] rtl:leading-[2]",
};

export default function Paragraph({
  variant = "body",
  className,
  children,
}: ParagraphProps) {
  return (
    <p className={cn("text-muted max-w-140", variants[variant], className)}>
      {children}
    </p>
  );
}
