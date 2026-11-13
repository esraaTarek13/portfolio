import Image from "../atoms/Image";
import ProjectTitle from "./ProjectTitle";

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
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={onSelect}
      className="group block w-full overflow-hidden rounded-md border border-line bg-elev text-start transition-[translate,border-color] duration-(--dur-s) ease-brand hover:-translate-y-1 hover:border-accent focus-visible:-translate-y-1 focus-visible:border-accent"
    >
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
      <div className="p-4">
        <ProjectTitle
          name={name}
          category={category}
          categoryClassName="text-accent-2"
        />
      </div>
    </button>
  );
}
