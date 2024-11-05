import { cn } from "@/lib/utils";
import { type TypographyProps } from "@/types/typography";

export default function TypographyH2({
  className,
  children,
}: Readonly<TypographyProps>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}
