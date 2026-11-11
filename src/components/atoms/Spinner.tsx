import { cn } from "@/lib/cn";

export default function Spinner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block size-14 animate-spin rounded-full border border-line-strong border-t-accent motion-reduce:animate-none",
        className,
      )}
    />
  );
}
