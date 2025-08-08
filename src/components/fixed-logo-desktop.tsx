import Link from "next/link";
import BasixLogoFull from "./basix-logo-full";

export function FixedLogoDesktop() {
  return (
    <Link
      href="/"
      className="hidden md:flex fixed top-6 left-6 z-40 items-center"
      aria-label="Basix Digital"
    >
      <BasixLogoFull className="!h-16 w-auto text-neutral-100 dark:text-white" />
    </Link>
  );
}
