import { buttonVariants } from "@/components/ui/button";
import ModeToggle from "@/components/ui/dark-mode-toggle";
import TypographyH4 from "@/components/ui/typography/h4";
import TypographySmall from "@/components/ui/typography/small";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container px-8 flex h-14 max-w-screen-2xl items-center justify-between">
        <TypographyH4 className="font-bold">
          <Link href="/">Personal Finance Tracker</Link>
        </TypographyH4>
        <div className="flex items-center gap-x-4">
          <Link href="/login" className={buttonVariants()}>
            Login
          </Link>
          <TypographySmall className="transition-colors">
            <Link href="/login">Signup</Link>
          </TypographySmall>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
