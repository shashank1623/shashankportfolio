import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import {
  FEATURED_PROJECT,
  MORE_PROJECTS,
  SECONDARY_PROJECTS,
} from "@/lib/projects-data";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Projects | ${SITE_NAME}`,
  description: `${SITE_TAGLINE} — selected portfolio work including AI SaaS, realtime apps, and Next.js frontends.`,
  openGraph: {
    title: `Projects | ${SITE_NAME}`,
    description:
      "Portfolio highlights: Wizard.ai, DocSync, flight tooling, and more.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" />

      <div className="space-y-6">
        <section>
          <p>
            <a href={FEATURED_PROJECT.href}>{FEATURED_PROJECT.title}</a>{" "}
            <span className="text-[color:var(--muted)]">
              — {FEATURED_PROJECT.subtitle}
            </span>
          </p>
          <p>{FEATURED_PROJECT.description}</p>
          <p className="text-[color:var(--muted)]">
            {FEATURED_PROJECT.techStack.join(" · ")}
          </p>
        </section>

        {SECONDARY_PROJECTS.map((p) => (
          <section key={p.title}>
            <p>
              <a href={p.href}>{p.title}</a>{" "}
              <span className="text-[color:var(--muted)]">— {p.subtitle}</span>
            </p>
            <p>{p.description}</p>
            <p className="text-[color:var(--muted)]">
              {p.techStack.join(" · ")}
            </p>
          </section>
        ))}

        <section className="pt-2">
          <p className="font-semibold">More</p>
          <ul className="ml-5 mt-2 list-disc space-y-1">
            {MORE_PROJECTS.map((p) => (
              <li key={p.title}>
                <a href={p.href}>{p.title}</a> — {p.description}{" "}
                <span className="text-[color:var(--muted)]">
                  ({p.techStack.join(", ")})
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
