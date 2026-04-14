import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} · Portfolio`,
  description: SITE_TAGLINE,
  openGraph: {
    title: `${SITE_NAME} · Portfolio`,
    description: SITE_TAGLINE,
    url: "/",
  },
};
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import Service from "@/components/Services";
import SkillsInterface from "@/components/SkillsInterface";
import { BlogPreview } from "@/components/blog/BlogPreview";
import FooterTop from "@/components/FooterTop";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Service />
      <SkillsInterface />
      <BlogPreview />
      <FooterTop />
    </>
  );
}
