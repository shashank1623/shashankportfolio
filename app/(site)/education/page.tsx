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
      <PageHeader title="Education & achievements" />

      <section className="space-y-1">
        <p className="font-semibold">Education</p>
        <p>
          {EDUCATION.school} — {EDUCATION.location}
        </p>
        <p>{EDUCATION.degree}</p>
        <p className="text-[color:var(--muted)]">
          CGPA {EDUCATION.cgpa} · {EDUCATION.start} – {EDUCATION.end}
        </p>
      </section>

      <section className="mt-8">
        <p className="font-semibold">Achievements</p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          {ACHIEVEMENTS.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
