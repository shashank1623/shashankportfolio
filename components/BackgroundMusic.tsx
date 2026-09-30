"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Drop a track you have the rights to at public/audio/bg-music.mp3.
const SRC = "/audio/bg-music.mp3";
const STORAGE_KEY = "bg-music-muted";
const VOLUME = 0.2;

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = VOLUME;

    let mutedByUser = false;
    try {
      mutedByUser = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (mutedByUser) return;

    // Browsers block sound until the visitor interacts, so if autoplay is
    // refused, start on the first gesture anywhere on the page. Only these
    // events count as user activation across Chrome, Safari and Firefox.
    const GESTURES = ["click", "touchend", "keydown"] as const;
    const stopListening = () =>
      GESTURES.forEach((g) => window.removeEventListener(g, start));
    const start = () => {
      audio
        .play()
        .then(() => {
          setPlaying(true);
          stopListening();
        })
        .catch(() => {});
    };
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => GESTURES.forEach((g) => window.addEventListener(g, start)));
    return stopListening;
  }, []);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {}
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={SRC}
        loop
        preload="auto"
        onError={() => setAvailable(false)}
      />
      {available ? (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Mute background music" : "Play background music"}
          aria-pressed={playing}
          className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--rule)] bg-[var(--bg-deep)] text-[var(--link)] shadow-sm transition-colors hover:text-[var(--link-hover)]"
        >
          {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      ) : null}
    </>
  );
}
