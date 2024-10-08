import { cn } from "@/lib/utils";
import { type TypographyProps } from "@/types/typography";

export default function TypographyInlineCode({
  className,
  children,
}: Readonly<TypographyProps>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
}
