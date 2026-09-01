import type { Metadata } from "next";
import Link from "next/link";
import { HomeDossier } from "@/components/HomeDossier";
import { SiteNav } from "@/components/SiteNav";
import { CONTACT } from "@/lib/resume";
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

export default function Home() {
  return (
    <article className="space-y-10">
      <HomeDossier />

      <SiteNav className="justify-center" />

      <section className="space-y-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
          About
        </p>
        <p>
          I just ship whatever it takes. I have expertise in building
          production RAGs, scalable system design, and agentic workflows.
          Based out of north India, working with teams globally, mostly
          remote but open to relocate anywhere on this planet — except
          Antarctica and Pakistan.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
          Case notes
        </p>
        <p>
          I&rsquo;m a curious kid trying to escape the matrix because
          I&rsquo;m burdened with glorious purpose.
        </p>
        <p>
          Now building <span className="font-semibold">Enclave</span>,
          sovereign AI infra for regulated industries. Basically, AI that
          runs inside your own walls so your data never leaves.
        </p>
        <p>
          Before this, I was a founding engineer at an EF-backed startup and
          CTO at <span className="font-semibold">YourSizer</span>, where I
          wrote the first line of code and scaled it to 10K daily users
          solo. They call me a cracked engineer. I shipped like a madman,
          and prod occasionally paid the price.
        </p>
      </section>

      <section>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
          Selected work
        </p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>
            <a href="https://github.com/shashank1623/wizard_ai">Wizard.AI</a>{" "}
            — video transcription and summarization with a fine-tuned
            DistilBART model.
          </li>
          <li>
            <a href="https://docsync.shashankbhardwaj.me/">DocSync</a> —
            realtime collaborative document editing over WebSockets.
          </li>
          <li>
            <a href="https://flight-status-system-u755.vercel.app/">
              IndiGo Flight System
            </a>{" "}
            — flight search, arrivals/departures, Redis-backed live gate and
            baggage notifications.
          </li>
          <li>
            <a href="https://retailreadyai.shashankbhardwaj.me/">
              RetailReadyAI
            </a>{" "}
            — marketing site for a YC-backed warehouse ops product.
          </li>
        </ul>
        <p className="mt-2">
          More on the <Link href="/projects">projects</Link> page.
        </p>
      </section>

      <section>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
          Things I believe
        </p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>
            Code that ships beats code that impresses. Products stay honest
            when they stay simple.
          </li>
          <li>
            Most &ldquo;model&rdquo; problems in AI systems are actually
            data, retrieval, or interface problems. Fix those first.
          </li>
          <li>
            Interfaces should feel calm. Latency, motion, and copy are all
            part of the product — not decoration around it.
          </li>
        </ul>
      </section>

      <section className="space-y-1">
        <p>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
        <p>
          <a href={CONTACT.github}>GitHub</a>{" "}
          <a href={CONTACT.linkedin}>LinkedIn</a>{" "}
          <a href={CONTACT.twitter}>Twitter</a>{" "}
          <a href={CONTACT.leetcode}>LeetCode</a>{" "}
          <a href={CONTACT.calBooking}>Book a call</a>
        </p>
      </section>
    </article>
  );
}
