import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { EXPERIENCE } from "@/lib/resume";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Experience | ${SITE_NAME}`,
  description:
    "Full-stack AI engineering roles: Allude, YourSizer, Agreed Pro — RAG, Voice AI, 3D commerce, and SaaS delivery.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader title="Experience" />
      <div className="space-y-8">
        {EXPERIENCE.map((job) => (
          <section key={`${job.company}-${job.start}`}>
            <p>
              <span className="font-semibold">{job.company}</span>
              {" — "}
              {job.role}
              {job.contract ? " (contract)" : ""}
            </p>
            <p className="text-[color:var(--muted)]">
              {job.start} – {job.end} · {job.location}
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              {job.highlights.map((h) => (
                <li key={h.slice(0, 40)}>{h}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
