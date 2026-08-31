"use client";

import { usePathname } from "next/navigation";
import { SiteNav } from "./SiteNav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="min-h-dvh w-full">
      <div className="mx-auto w-full max-w-[52rem] px-6 py-10 sm:px-8 sm:py-14">
        {isHome ? null : <SiteNav className="mb-10" />}
        <main>{children}</main>
      </div>
    </div>
  );
}
