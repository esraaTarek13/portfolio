import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import Heading from "../atoms/Heading";
import Badge from "../atoms/Badge";

type HeadingProps = ComponentProps<typeof Heading>;

interface ProjectTitleProps {
  name: string;
  category: string;
  as?: HeadingProps["as"];
  variant?: HeadingProps["variant"];
  id?: string;
  className?: string;
  categoryClassName?: string;
}

export default function ProjectTitle({
  name,
  category,
  as = "h3",
  variant = "project",
  id,
  className,
  categoryClassName,
}: ProjectTitleProps) {
  return (
    <div className={twMerge("space-y-1.5", className)}>
      <Badge variant="plain" className={categoryClassName}>
        {category}
      </Badge>
      <Heading as={as} variant={variant} id={id}>
        {name}
      </Heading>
    </div>
  );
}
