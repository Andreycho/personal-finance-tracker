import { cn } from "@/lib/utils";
import { type TypographyProps } from "@/types/typography";

export default function TypographyH3({
  className,
  children,
}: Readonly<TypographyProps>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}
