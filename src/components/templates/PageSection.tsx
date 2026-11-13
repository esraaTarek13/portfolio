import type { ReactNode } from "react";

export default function PageSection({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex gap-5.5 min-h-dvh w-full flex-col justify-center px-(--page-px) p-10 md:py-14 lg:p-16 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 2xl:max-w-330">
      {children}
    </div>
  );
}
