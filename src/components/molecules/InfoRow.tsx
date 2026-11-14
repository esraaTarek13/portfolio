import type { ReactNode } from "react";
import Badge from "../atoms/Badge";

interface InfoRowProps {
  label: string;
  children: ReactNode;
}

export default function InfoRow({ label, children }: InfoRowProps) {
  return (
    <div className="space-y-1.5">
      <Badge as="dt" variant="plain" className="text-muted">
        {label}
      </Badge>
      <dd className="text-base text-text">{children}</dd>
    </div>
  );
}
