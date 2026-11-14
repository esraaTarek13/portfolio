import { useId, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import Label from "../atoms/Label";

interface FieldControlProps {
  id: string;
  "aria-invalid": true | undefined;
  "aria-describedby": string | undefined;
}

interface FormFieldProps {
  label: string;
  error?: string | undefined;
  className?: string;
  children: (control: FieldControlProps) => ReactNode;
}

export default function FormField({
  label,
  error,
  className,
  children,
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={cn("group", className)}>
      <Label htmlFor={id}>{label}</Label>
      {children({
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
      })}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
