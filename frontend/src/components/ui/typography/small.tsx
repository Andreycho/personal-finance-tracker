import { cn } from "@/lib/utils";
import { type TypographyProps } from "@/types/typography";

export default function TypographySmall({
  className,
  children,
}: Readonly<TypographyProps>) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  );
}
