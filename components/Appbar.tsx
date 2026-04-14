"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import BookACall from "./BookACall";

const ROUTES = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Stack", href: "/expertise" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;

const HOME_SECTION_IDS = ["home", "about", "skills", "contact"] as const;

export function Appbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isHome) {
      setNavbarVisible(true);
      return;
    }
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      setNavbarVisible(latest < aboutSection.offsetTop);
    }
  });

  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const current = HOME_SECTION_IDS.find((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const linkActive = (href: string) => {
    if (href === "/") return isHome && activeSection === "home";
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      return isHome && activeSection === id;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-canvas/90 backdrop-blur-md"
        animate={{ y: navbarVisible ? 0 : -100 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="mx-auto flex w-full max-w-site items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-8 sm:py-4 lg:px-12">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            <span className="text-accent">The</span>
            <span className="text-ink">Ghost</span>
          </Link>

          <ul className="hidden items-center gap-3 lg:flex lg:gap-4 xl:gap-6">
            {ROUTES.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`whitespace-nowrap text-[0.65rem] uppercase tracking-[0.12em] transition-colors lg:text-xs lg:tracking-[0.16em] ${
                    linkActive(item.href) ? "text-accent" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:block">
              <BookACall title="Book a call" />
            </div>
            <a
              href="mailto:shashankbhardwaj16apr@gmail.com"
              className="hidden rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-ink transition hover:border-accent/40 hover:text-accent sm:inline-flex sm:px-4 sm:text-sm lg:hidden"
            >
              Email
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink lg:hidden"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={closeMobile}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-border bg-canvas px-5 pb-8 pt-20 shadow-2xl">
            <nav className="flex flex-col gap-1">
              {ROUTES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className={`rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-wide ${
                    linkActive(item.href) ? "bg-surface text-accent" : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 border-t border-border pt-6">
              <BookACall title="Book a call" />
            </div>
            <a
              href="mailto:shashankbhardwaj16apr@gmail.com"
              className="mt-4 block rounded-full border border-border px-4 py-3 text-center text-sm text-ink"
              onClick={closeMobile}
            >
              shashankbhardwaj16apr@gmail.com
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
