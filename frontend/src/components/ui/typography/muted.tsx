import { cn } from "@/lib/utils";
import { type TypographyProps } from "@/types/typography";

export default function TypographyMuted({
  className,
  children,
}: Readonly<TypographyProps>) {
  return (
    <p className={cn("text-sm text-slate-500 dark:text-slate-400", className)}>
      {children}
    </p>
  );
}
