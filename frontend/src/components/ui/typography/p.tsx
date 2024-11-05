import { cn } from "@/lib/utils";
import { type TypographyProps } from "@/types/typography";

export default function TypographyP({
  className,
  children,
}: Readonly<TypographyProps>) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}
