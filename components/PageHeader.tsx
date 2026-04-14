import Link from "next/link";

type Crumb = { label: string; href?: string };

export function PageHeader({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  const trail: Crumb[] = crumbs ?? [{ label: "Home", href: "/" }, { label: title }];

  return (
    <header className="border-b border-white/[0.06] bg-canvas pb-12 pt-28 sm:pb-14 sm:pt-32 md:pb-16">
      <div className="mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            {trail.map((c, i) => (
              <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                {i > 0 ? <span className="text-white/15" aria-hidden>/</span> : null}
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-accent">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </header>
  );
}
