import { Link } from "react-router-dom";
import Logo from "@/components/atoms/Logo";
import type { MouseEventHandler } from "react";

interface BrandLinkProps {
  label: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function BrandLink({ label, onClick }: BrandLinkProps) {
  return (
    <Link
      to="/"
      aria-label={label}
      className="block w-14 md:w-16 h-14 md:h-16 overflow-hidden rounded-full transition-opacity duration-(--dur-s) ease-brand hover:opacity-85"
      onClick={onClick}
    >
      <Logo alt={label} src="/images/logo.png" />
    </Link>
  );
}
