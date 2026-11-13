import Chip from "../atoms/Chip";

interface StackListProps {
  items: readonly string[];
  label: string;
}

export default function StackList({ items, label }: StackListProps) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </ul>
  );
}
