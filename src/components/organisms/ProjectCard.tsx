import Image from "../atoms/Image";
import TitleBlock from "../molecules/TitleBlock";

interface ProjectCardProps {
  name: string;
  category: string;
  image: string;
  alt: string;
  onSelect: () => void;
}

export default function ProjectCard({
  name,
  category,
  image,
  alt,
  onSelect,
}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-md border border-line-strong text-start transition-[translate,border-color] duration-(--dur-s) ease-brand hover:-translate-y-1 hover:border-accent has-focus-visible:-translate-y-1 has-focus-visible:border-accent">
      <div className="aspect-4/3 overflow-hidden">
        <Image
          variant="photo"
          src={image}
          alt={alt}
          width={385}
          height={306}
          loading="lazy"
          className="transition-[scale] duration-(--dur-m) ease-brand group-hover:scale-105"
        />
      </div>
      <div className="bg-elev p-4">
        <TitleBlock
          badge={category}
          title={name}
          as="h2"
          headingVariant="project"
          badgeVariant="plain"
          className="space-y-1.5"
        />
      </div>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={name}
        onClick={onSelect}
        className="absolute inset-0 cursor-pointer rounded-md focus-visible:outline-offset-0"
      />
    </article>
  );
}
