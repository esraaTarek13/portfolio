import { Link } from "react-router-dom";
import Image from "@/components/atoms/Image";
import type { MouseEventHandler } from "react";

interface BrandLinkProps {
  label: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function BrandLink({ label, onClick }: BrandLinkProps) {
  return (
    <Link
      to="/"
      className="block h-14 w-14 overflow-hidden rounded-full transition-opacity duration-(--dur-s) ease-brand hover:opacity-85 md:h-16 md:w-16"
      onClick={onClick}
    >
      <Image variant="logo" src="/images/logo.png" alt={label} width={64} height={64} />
    </Link>
  );
}