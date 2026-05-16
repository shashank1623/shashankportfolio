"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/resume";
import { cn } from "@/lib/utils";

const CAL_EMBED_URL = `${CONTACT.calBooking}?embed=true`;

export type BookACallProps = {
  title: string;
  className?: string;
  showArrow?: boolean;
};

export default function BookACall({ title, className, showArrow }: BookACallProps) {
  const [showBooking, setShowBooking] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeBooking = useCallback(() => {
    setShowBooking(false);
  }, []);

  const openBooking = () => {
    setShowBooking(true);
    setLoading(true);
  };

  useEffect(() => {
    if (!showBooking) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showBooking, closeBooking]);

  const modal =
    showBooking && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Book a call"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              aria-label="Close booking"
              onClick={closeBooking}
            />
            <div className="relative z-10 flex h-[min(88vh,760px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-canvas shadow-2xl shadow-black/50 sm:max-w-4xl">
              {loading && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-canvas/90">
                  <Loader2 className="h-10 w-10 animate-spin text-accent" />
                </div>
              )}
              <button
                type="button"
                className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-surface/90 text-ink transition hover:border-accent/40 hover:text-accent"
                aria-label="Close booking"
                onClick={closeBooking}
              >
                <X className="h-5 w-5" />
              </button>
              <iframe
                src={CAL_EMBED_URL}
                title="Book a call with Shashank Bhardwaj"
                className="h-full w-full flex-1 border-0 bg-canvas"
                onLoad={() => setLoading(false)}
              />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "inline-flex items-center gap-2 rounded-full border-border bg-surface px-5 py-2 text-sm font-medium text-ink hover:border-accent/40 hover:text-accent",
          className
        )}
        onClick={openBooking}
      >
        {title}
        {showArrow ? <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden /> : null}
      </Button>
      {modal}
    </>
  );
}
