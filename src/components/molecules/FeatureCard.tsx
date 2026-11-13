import type { ReactNode } from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="rounded-md border border-line p-4 transition-[translate,border-color] duration-(--dur-s) ease-brand hover:-translate-y-1 hover:border-accent">
      <div className="mb-2.5 text-accent">{icon}</div>
      <Heading as="h3" variant="card" className="mb-1">
        {title}
      </Heading>
      <Paragraph variant="small">{description}</Paragraph>
    </article>
  );
}
