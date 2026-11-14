import type { ComponentProps, ElementType } from "react";
import Badge from "../atoms/Badge";
import Heading from "../atoms/Heading";

type HeadingProps = ComponentProps<typeof Heading>;
type BadgeProps = ComponentProps<typeof Badge>;

interface TitleBlockProps {
  badge: string;
  title: string;
  id?: string;
  as?: HeadingProps["as"];
  wrapper?: ElementType;
  headingVariant?: HeadingProps["variant"];
  badgeVariant?: BadgeProps["variant"];
  className?: string;
  badgeClassName?: string;
  headingClassName?: string;
}

export default function TitleBlock({
  badge,
  title,
  id,
  as = "h1",
  wrapper: Wrapper = "div",
  headingVariant,
  badgeVariant,
  className,
  badgeClassName,
  headingClassName,
}: TitleBlockProps) {
  return (
    <Wrapper className={className}>
      <Badge variant={badgeVariant} className={badgeClassName}>
        {badge}
      </Badge>
      <Heading
        as={as}
        variant={headingVariant}
        id={id}
        className={headingClassName}
      >
        {title}
      </Heading>
    </Wrapper>
  );
}
