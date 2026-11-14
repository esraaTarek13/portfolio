import type { ComponentPropsWithoutRef } from "react";
import type { IconType } from "react-icons";
import { cn } from "@/lib/cn";

type BaseProps = Omit<ComponentPropsWithoutRef<"a">, "aria-label"> & {
  href: string;
};

type ButtonProps = BaseProps & {
  variant?: "button";
  label?: never;
  Icon?: never;
};

type IconProps = BaseProps & {
  variant: "icon";
  label: string;
  Icon: IconType;
};

type ExternalLinkProps = ButtonProps | IconProps;

const base =
  "rounded-full border border-line-strong hover:border-accent hover:bg-elev-2 ease-brand duration-(--dur-s)";

const variants = {
  button:
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[13px] font-bold text-text transition-[border-color,color,background-color,translate] hover:-translate-y-0.5 hover:text-accent md:px-6.5 md:py-3.5 md:text-sm",
  icon: "grid size-10 place-items-center text-muted transition-[border-color,color,background-color] hover:text-text md:size-11.5",
} as const;

export default function ExternalLink({
  variant = "button",
  label,
  Icon,
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {Icon ? (
        <Icon aria-hidden="true" className="size-3.5 md:size-4.5" />
      ) : (
        children
      )}
    </a>
  );
}
