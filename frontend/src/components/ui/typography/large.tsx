import { cn } from "@/lib/utils";
import { type TypographyProps } from "@/types/typography";

export default function TypographyLarge({
  className,
  children,
}: Readonly<TypographyProps>) {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
}
