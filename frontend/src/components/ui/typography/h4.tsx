import { cn } from "@/lib/utils";
import { type TypographyProps } from "@/types/typography";

export default function TypographyH4({
  className,
  children,
}: Readonly<TypographyProps>) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}
