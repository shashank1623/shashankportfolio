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
      <PageHeader title="Stack" />
      <div className="space-y-6">
        {TECHNICAL_SKILLS.map((group) => (
          <section key={group.category}>
            <p className="font-semibold">{group.category}</p>
            <p>{group.items.join(" · ")}</p>
          </section>
        ))}
      </div>
    </>
  );
}
