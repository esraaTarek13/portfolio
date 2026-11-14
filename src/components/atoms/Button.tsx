import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type BaseProps = Omit<ComponentPropsWithoutRef<"button">, "aria-label">;

type TextButtonProps = BaseProps & {
  variant?: "primary";
  label?: never;
};

type IconButtonProps = BaseProps & {
  variant: "icon" | "rail";
  label: string;
};

type ButtonProps = TextButtonProps | IconButtonProps;

const variants = {
  primary:
    "border-accent bg-accent px-5 py-2.5 text-[13px] font-bold text-accent-ink transition-[border-color,color,background-color,translate] hover:-translate-y-0.5 hover:bg-bg hover:text-accent md:px-6.5 md:py-3.5 md:text-sm",
  icon: "size-9.5 border-line-strong bg-elev text-text transition-[border-color,color] hover:border-accent hover:text-accent",
  rail: "size-10 border-line-strong text-muted transition-colors hover:bg-elev-2 hover:text-text md:size-11.5",
} as const;

export default function Button({
  variant = "primary",
  type = "button",
  label,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center rounded-full border duration-(--dur-s) ease-brand",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
