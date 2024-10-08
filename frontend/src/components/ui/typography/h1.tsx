import { cn } from "@/lib/utils";
import { type TypographyProps } from "@/types/typography";

export default function TypographyH1({
  className,
  children,
}: Readonly<TypographyProps>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
