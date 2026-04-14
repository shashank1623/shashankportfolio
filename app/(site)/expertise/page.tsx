import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TECHNICAL_SKILLS } from "@/lib/resume";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Technical skills | ${SITE_NAME}`,
  description:
    "Languages, frameworks, databases, and platform skills across the TypeScript, Python, and cloud ecosystem.",
};

export default function ExpertisePage() {
  return (
    <>
      <PageHeader
        title="Technical skills"
        subtitle="Stack I use in production for AI products, web platforms, and data-heavy services."
        crumbs={[{ label: "Home", href: "/" }, { label: "Expertise" }]}
      />
      <div className="mx-auto w-full max-w-site px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {TECHNICAL_SKILLS.map((group) => (
            <section
              key={group.category}
              className="rounded-2xl border border-border bg-surface p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
            >
              <h2 className="font-display text-lg font-semibold text-accent">{group.category}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-elevated px-3 py-1 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
