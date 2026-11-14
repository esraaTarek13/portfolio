import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline";

interface LinkButtonProps extends LinkProps {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: "border-accent bg-accent text-accent-ink hover:bg-bg",
  outline: "border-line-strong bg-transparent text-text",
};

export default function LinkButton({
  variant = "primary",
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-5 md:px-6.5 py-2.5 md:py-3.5 font-bold text-[13px] md:text-sm hover:text-accent hover:border-accent hover:-translate-y-0.5 transition-all duration-(--dur-s) ease-brand",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
