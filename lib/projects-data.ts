import type { StaticImageData } from "next/image";
import wizardAi from "@/components/assets/WizardAI.png";
import Docsync from "@/components/assets/DocSync.png";
import flightStatus from "@/components/assets/IndigoFlight.png";
import RetailReadyAI from "@/components/assets/RetailReadyAI.png";

export type PortfolioProject = {
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  tags: string[];
  detailedDescription: string;
  techStack: string[];
  websiteUrl: string;
  period?: string;
};

export const PROJECTS: PortfolioProject[] = [
  {
    title: "Wizard.ai",
    description: "Video transcription and summarization with fine-tuned summarization models.",
    imageUrl: wizardAi,
    tags: ["AI", "Flask", "LLM", "CI/CD"],
    period: "Jul 2023 – Feb 2024",
    detailedDescription:
      "Implemented a scalable web application for video transcription and summarization using Flask.\n\nFine-tuned Facebook DistilBART for summarization, improving accuracy by about 40% and cutting manual summarization time by roughly half.\n\nOwned deployment with CI/CD and backend operations for a smooth user experience.",
    techStack: [
      "Python",
      "Flask",
      "DistilBART",
      "CI/CD",
      "Whisper",
      "JavaScript",
      "Tailwind CSS",
    ],
    websiteUrl: "https://github.com/shashank1623/wizard_ai",
  },
  {
    title: "DocSync",
    description: "Collaborative document editing with real-time sync.",
    imageUrl: Docsync,
    tags: ["React", "Node.js", "PostgreSQL"],
    detailedDescription:
      "Real-time collaborative editing with multi-user updates and lower latency.\n\nJWT auth, Node, Express, Prisma, and PostgreSQL for concurrent usage at scale.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Zod", "Zustand", "WebSockets", "PostgreSQL"],
    websiteUrl: "https://docsync.shashankbhardwaj.me/",
  },
  {
    title: "Flight Status System",
    description: "Flight search, live status, and Redis-backed notifications.",
    imageUrl: flightStatus,
    tags: ["React", "Flask", "Redis"],
    detailedDescription:
      "Microservices-style app for search, arrivals and departures, and live notifications.\n\nRedis-backed updates for gates and baggage information.",
    techStack: ["React", "Flask", "MongoDB", "AWS", "Redis", "Git"],
    websiteUrl: "https://flight-status-system-u755.vercel.app/",
  },
  {
    title: "RetailReadyAI",
    description: "Marketing UI for a YC-backed warehouse operations product.",
    imageUrl: RetailReadyAI,
    tags: ["Next.js", "React", "CI/CD"],
    detailedDescription:
      "Responsive UI with a calm layout focused on clarity and engagement.\n\nNext.js with TypeScript, Tailwind, reusable components, and strong cross-browser behavior.",
    techStack: ["Next.js", "React", "Tailwind CSS", "AWS", "CI/CD", "Git", "Framer Motion"],
    websiteUrl: "https://retailreadyai.shashankbhardwaj.me/",
  },
];
