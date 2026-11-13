import Badge from "../atoms/Badge";
import Heading from "../atoms/Heading";

interface SectionHeaderProps {
  id: string;
  eyebrow: string;
  title: string;
}

export default function SectionHeader({
  id,
  eyebrow,
  title,
}: SectionHeaderProps) {
  return (
    <header className="mb-4.5">
      <Badge className="mb-3">{eyebrow}</Badge>
      <Heading as="h2" id={id}>
        {title}
      </Heading>
    </header>
  );
}
