import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { EXPERIENCE } from "@/lib/resume";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Experience | ${SITE_NAME}`,
  description: "Full-stack AI engineering roles: Allude, YourSizer, Agreed Pro — RAG, Voice AI, 3D commerce, and SaaS delivery.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        title="Experience"
        subtitle="Contract full-stack and AI engineering across search, voice, 3D commerce, and SaaS."
        crumbs={[{ label: "Home", href: "/" }, { label: "Experience" }]}
      />
      <div className="mx-auto w-full max-w-site px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
        <ol className="relative border-l border-border pl-8 sm:pl-10">
          {EXPERIENCE.map((job) => (
            <li key={`${job.company}-${job.start}`} className="mb-14 last:mb-0">
              <span
                className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-accent bg-canvas sm:-left-[11px]"
                aria-hidden
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                <div>
                  <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">{job.company}</h2>
                  <p className="text-accent">
                    {job.role}
                    {job.contract ? " (Contract)" : ""}
                  </p>
                </div>
                <p className="text-sm text-muted">
                  {job.start} – {job.end}
                </p>
                <p className="w-full text-sm text-muted sm:w-auto sm:text-right">{job.location}</p>
              </div>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted sm:text-base">
                {job.highlights.map((h) => (
                  <li key={h.slice(0, 40)}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
