import Image from "next/image";
import type { ReactNode } from "react";
import portrait from "@/components/assets/IMG_5115.jpeg";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-b border-[#3b2510]/25 py-1.5 last:border-b-0">
      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#3b2510]">
        {label}
      </p>
      <p className="mt-0.5 text-[15px] leading-tight text-[#1a1408]">
        {children}
      </p>
    </div>
  );
}

function Paperclip() {
  return (
    <svg
      viewBox="0 0 40 100"
      className="absolute right-8 top-[-14px] h-24 w-9 -rotate-6 text-[#8a7b5a] drop-shadow-[0_2px_2px_rgba(30,20,5,0.35)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M8 10 L8 74 Q8 90 20 90 Q32 90 32 74 L32 22 Q32 12 22 12 Q12 12 12 22 L12 68" />
    </svg>
  );
}

function EncSeal() {
  return (
    <div className="flex items-baseline gap-[2px] font-black leading-none tracking-[-0.02em] text-[#1a1408]">
      <span className="text-[44px]">E</span>
      <span className="relative text-[44px]">
        <span className="absolute inset-0 -skew-x-[16deg]">N</span>
        <span className="invisible">N</span>
      </span>
      <span className="text-[44px]">C</span>
    </div>
  );
}

export function HomeDossier() {
  return (
    <div className="relative mx-auto w-full max-w-[50rem] -rotate-[0.6deg]">
      <div className="relative bg-[#f6ecd1] px-6 py-6 shadow-[0_20px_50px_-18px_rgba(50,25,5,0.55),0_2px_0_rgba(50,25,5,0.08)] ring-1 ring-[#7a5a2a]/30 sm:px-8 sm:py-8">
        <Paperclip />

        <div className="mb-3 flex items-start justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3b2510]">
          <span>SB-BUILDER 442.47</span>
          <span>ENC · SB-1623</span>
        </div>

        <div className="grid grid-cols-[9rem_1fr] gap-4 sm:grid-cols-[22rem_1fr] sm:gap-8">
          <figure className="pt-1">
            <div className="border border-[#3b2510]/40 bg-[#efe2c0] p-1">
              <Image
                src={portrait}
                alt="Shashank Bhardwaj"
                width={288}
                height={384}
                placeholder="blur"
                sizes="(max-width: 640px) 144px, 352px"
                className="block h-auto w-full"
                priority
              />
            </div>
            <figcaption className="mt-1 text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-[#3b2510]">
              Variant Photo · Rev 4
            </figcaption>
          </figure>

          <dl>
            <Field label="Variant ID">SB-1623</Field>
            <Field label="Race">
              Human ·{" "}
              <span className="line-through decoration-[#7a2018]/70 decoration-[1.5px]">
                Cracked
              </span>{" "}
              Engineer
            </Field>
            <Field label="Height">5&prime; 10&Prime; (1.78 m)</Field>
            <Field label="Eye Color">Brown</Field>
            <Field label="Sex">Male</Field>
            <Field label="Birthplace">Dehradun, India</Field>
            <Field label="Current Location">Hyderabad, India</Field>
            <Field label="Alias">
              The Ghost ·{" "}
              <span className="line-through decoration-[#7a2018]/70 decoration-[1.5px]">
                God of Mischief
              </span>{" "}
              God of Shipping
            </Field>
          </dl>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_10.5rem] gap-x-6">
          <div>
            <Field label="Variant Name">Shashank Bhardwaj</Field>
            <Field label="Occupation">Building Enclave</Field>
            <Field label="Prior">
              CTO · YourSizer &nbsp;·&nbsp; Founding Eng · EF-backed startup
            </Field>
          </div>
          <div className="border-l border-[#3b2510]/25 pl-6">
            <div className="grid grid-cols-2 gap-x-4">
              <Field label="Class">A</Field>
              <Field label="Type">7</Field>
            </div>
            <Field label="Sector">2020 — 2026</Field>
            <Field label="Arrest ID">J098235</Field>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <EncSeal />
        </div>

        <div className="mt-3 flex justify-between text-[8px] uppercase tracking-[0.2em] text-[#3b2510]/70">
          <span>VAR-24-B</span>
          <span>ARC · STROKE 22</span>
        </div>

        <Stamp />
      </div>
    </div>
  );
}

function Stamp() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <div className="relative -rotate-[14deg]">
        <span
          className="block text-[3.4rem] font-black uppercase leading-none tracking-[0.03em] text-[#7a2018]/85 mix-blend-multiply sm:text-[4rem]"
          style={{
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace',
            textShadow: "1px 0 0 #5a140f, -1px 0 0 #5a140f",
          }}
        >
          Apprehended
        </span>
        <span
          aria-hidden
          className="absolute left-[-6%] top-[46%] block h-[3px] w-[112%] rotate-[6deg] bg-[#7a2018]/70 mix-blend-multiply"
        />
        <span
          aria-hidden
          className="absolute left-[-6%] top-[54%] block h-[3px] w-[112%] -rotate-[6deg] bg-[#7a2018]/70 mix-blend-multiply"
        />
      </div>
    </div>
  );
}
