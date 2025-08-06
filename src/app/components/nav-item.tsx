export function NavItem({
  href,
  isScrolled,
  label,
}: {
  href: string;
  isScrolled: boolean;
  label: string;
}) {
  return (
    <a
      href={href}
      className={`transition-colors duration-300 ${
        isScrolled
          ? "text-white hover:text-primary"
          : "text-neutral-800 hover:text-neutral-900"
      }`}
    >
      {label}
    </a>
  );
}
