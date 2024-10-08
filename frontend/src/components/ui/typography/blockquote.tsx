import { cn } from "@/lib/utils";
import { type TypographyProps } from "@/types/typography";

export default function TypographyBlockquote({
  className,
  children,
}: Readonly<TypographyProps>) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}
