import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CONTACT } from "@/lib/resume";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-canvas py-12 text-muted sm:py-14">
      <div className="mx-auto flex w-full max-w-site flex-col items-center justify-between gap-6 px-4 sm:px-8 md:flex-row lg:px-12">
        <p className="text-center text-sm md:text-left">
          &copy; {new Date().getFullYear()} {CONTACT.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a
            href={CONTACT.github}
            className="text-ink transition hover:text-accent"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={CONTACT.leetcode}
            className="text-ink transition hover:text-accent"
            aria-label="LeetCode"
          >
            <SiLeetcode size={22} />
          </a>
          <a
            href={CONTACT.linkedin}
            className="text-ink transition hover:text-accent"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href={CONTACT.twitter}
            className="text-ink transition hover:text-accent"
            aria-label="Twitter"
          >
            <FaTwitter size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
