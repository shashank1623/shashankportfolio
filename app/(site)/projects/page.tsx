import type { Metadata } from "next";
import ProjectCatalog from "@/components/ProjectCatalog";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Projects | ${SITE_NAME}`,
  description: `${SITE_TAGLINE} — selected portfolio work including AI SaaS, realtime apps, and Next.js frontends.`,
  openGraph: {
    title: `Projects | ${SITE_NAME}`,
    description: "Portfolio highlights: Wizard.ai, DocSync, flight tooling, and more.",
  },
};

export default function ProjectsPage() {
  return <ProjectCatalog />;
}
