import type { ImgHTMLAttributes } from "react";
import clsx from "clsx";

const variants = {
  logo: "object-contain",
  photo: "object-cover object-center",
} as const;

type Variant = keyof typeof variants;

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: Variant;
}

export default function Image({
  variant = "photo",
  alt = "",
  className,
  ...rest
}: ImageProps) {
  return (
    <img
      alt={alt}
      decoding="async"
      className={clsx("h-full w-full", variants[variant], className)}
      {...rest}
    />
  );
}