import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ACHIEVEMENTS, EDUCATION } from "@/lib/resume";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Education & achievements | ${SITE_NAME}`,
  description: `B.Tech AI & Data Science at ${EDUCATION.school}. Hackathon placements including UST D3CODE and Meta Global Hackathon.`,
};

export default function EducationPage() {
  return (
    <>
      <PageHeader
        title="Education & achievements"
        subtitle="Formal training plus competitive validation from large global hackathons."
        crumbs={[{ label: "Home", href: "/" }, { label: "Education" }]}
      />
      <div className="mx-auto w-full max-w-site space-y-20 px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
        <section aria-labelledby="edu-heading">
          <h2 id="edu-heading" className="font-display text-2xl font-semibold text-ink">
            Education
          </h2>
          <div className="mt-6 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-ink">{EDUCATION.school}</h3>
            <p className="mt-1 text-muted">{EDUCATION.location}</p>
            <p className="mt-4 text-lg text-ink">{EDUCATION.degree}</p>
            <dl className="mt-4 flex flex-wrap gap-6 text-sm text-muted">
              <div>
                <dt className="uppercase tracking-wider text-xs text-muted">CGPA</dt>
                <dd className="mt-1 font-medium text-ink">{EDUCATION.cgpa}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-wider text-xs text-muted">Duration</dt>
                <dd className="mt-1 font-medium text-ink">
                  {EDUCATION.start} – {EDUCATION.end}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section aria-labelledby="ach-heading">
          <h2 id="ach-heading" className="font-display text-2xl font-semibold text-ink">
            Achievements
          </h2>
          <ul className="mt-6 list-disc space-y-4 pl-5 text-muted">
            {ACHIEVEMENTS.map((a) => (
              <li key={a} className="leading-relaxed">
                {a}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
