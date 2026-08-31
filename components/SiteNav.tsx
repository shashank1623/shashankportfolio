import Link from "next/link";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  // { label: "Stack", href: "/expertise" },
  // { label: "Blog", href: "/blog" },
];

export function SiteNav({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Primary"
      className={`flex flex-wrap gap-x-4 gap-y-1 ${className ?? ""}`}
    >
      {NAV.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
