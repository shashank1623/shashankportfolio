export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
  crumbs?: unknown;
  className?: string;
}) {
  return (
    <header className="mb-6">
      <h1 className="text-lg">{title}</h1>
      {subtitle ? <p className="mt-2 text-[color:var(--muted)]">{subtitle}</p> : null}
    </header>
  );
}
