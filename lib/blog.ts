import { getSiteUrl } from "@/lib/site";

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  keywords: string[];
  sections: BlogSection[];
};

const POSTS: BlogPost[] = [
  {
    slug: "websockets-for-realtime-products",
    title: "WebSockets for real-time products: a practical mental model",
    description:
      "When to use WebSockets, how they differ from HTTP, and patterns that keep realtime features reliable in production.",
    datePublished: "2025-11-08",
    dateModified: "2025-11-08",
    author: "Shashank Bhardwaj",
    keywords: ["WebSockets", "real-time", "Next.js", "Node.js", "engineering"],
    sections: [
      {
        paragraphs: [
          "Most product surfaces start as request–response: the browser asks, the server answers, and the connection is done. That model is simple and cache-friendly, but it breaks down when users expect live cursors, presence, delivery receipts, or dashboards that update without a refresh. WebSockets exist to keep a bidirectional channel open so both sides can push messages when state changes.",
          "The first design question is not “WebSockets or HTTP?” but “who needs to learn about a change, and how fast?” If the answer is many clients within milliseconds, a socket path is usually appropriate. If the answer is “eventually, and only after a user action,” polling or server-sent events may be cheaper to operate.",
        ],
      },
      {
        heading: "Connection lifecycle and backpressure",
        paragraphs: [
          "A production socket layer needs explicit connection lifecycle handling: authenticate after the upgrade, heartbeat to detect half-open connections, and bounded queues so a slow consumer cannot exhaust memory. In browser clients, tab backgrounding and network changes will churn connections; the server should treat reconnect as normal and make resume idempotent with versioned state.",
          "Backpressure matters the moment you broadcast. Prefer small, typed messages, avoid giant payloads on the hot path, and shard high-traffic topics rather than fanning out megabytes to every subscriber.",
        ],
      },
      {
        heading: "Where WebSockets fit in a Next.js stack",
        paragraphs: [
          "Next.js server components are great for static and cached UI, but the socket endpoint typically lives on a long-lived Node process or a dedicated gateway. Keep authorization consistent with your REST or tRPC layer—issue short-lived tokens or signed cookies that the socket handler validates on connect.",
          "If you are early in a product, ship a thin vertical slice: one room, one event schema, metrics on connect rate, message rate, and error rate. Once that slice is stable, expand to richer features. WebSockets are not magic; they trade operational complexity for latency. Used intentionally, they are the backbone of collaborative and monitoring experiences users notice immediately.",
        ],
      },
    ],
  },
  {
    slug: "rag-retrieval-that-survives-production",
    title: "RAG retrieval that survives production traffic",
    description:
      "Notes on improving retrieval quality, measuring relevance, and keeping latency predictable when search becomes part of the product path.",
    datePublished: "2025-12-01",
    author: "Shashank Bhardwaj",
    keywords: ["RAG", "vector search", "LLM", "latency", "evaluation"],
    sections: [
      {
        paragraphs: [
          "Retrieval-augmented generation fails in two common ways: the model hallucinates confidently when context is missing, or latency balloons when every query fans out to multiple stores. Production RAG needs evaluation harnesses the same way shipping APIs needs integration tests—without metrics, tuning embeddings is guesswork.",
        ],
      },
      {
        heading: "Measure before you rewrite",
        paragraphs: [
          "Start with offline sets: query, expected document ids, and graded relevance. Track precision@k and nDCG, but also measure end-to-end latency percentiles because users experience both quality and speed.",
          "When accuracy is low, inspect failure buckets: wrong domain retrieved, duplicate chunks, stale documents, or formatting that models parse poorly. Many “model” issues are actually chunking and metadata issues.",
        ],
      },
      {
        heading: "Operational guardrails",
        paragraphs: [
          "Cache stable retrievals where safe, deduplicate overlapping chunks, and cap retrieved tokens. Add circuit breakers so search outages degrade to a safe message instead of hanging the assistant path.",
          "These practices mirror what you would do for any high-traffic dependency—except the product now depends on search in every answer. Treat retrieval as a tier-one service with dashboards, alerts, and owners.",
        ],
      },
    ],
  },
  {
    slug: "shipping-voice-ai-with-quality-gates",
    title: "Shipping Voice AI with quality gates and durable storage",
    description:
      "Patterns for voice capture, streaming transcripts, and persisting conversational analytics without sacrificing privacy or reliability.",
    datePublished: "2026-01-18",
    author: "Shashank Bhardwaj",
    keywords: ["Voice AI", "streaming", "Spanner", "privacy", "observability"],
    sections: [
      {
        paragraphs: [
          "Voice products add constraints audio pipelines do not share with text chat: codecs, packet loss, partial transcripts, and sensitive biometric-adjacent data. A robust design separates capture, transcription, downstream reasoning, and persistence so each stage can be retried, audited, and scaled independently.",
        ],
      },
      {
        heading: "Quality gates before the LLM",
        paragraphs: [
          "Run lightweight checks on audio and transcript quality—signal-to-noise heuristics, language detection, and profanity or PII filters—before expensive model calls. Pair that with explicit user consent flows and retention policies that are easy to explain in the UI.",
        ],
      },
      {
        heading: "Analytics without losing trust",
        paragraphs: [
          "When conversational data lands in systems like Spanner, partition by tenant, encrypt at rest, and minimize fields stored for analytics. Event schemas should be versioned so downstream dashboards do not break when the assistant adds new tools or intents.",
          "Observability for voice is end-to-end: time-to-first-token, word error rate sampling, and drop-off after mic permission. Those metrics tell you whether the problem is UX, network, or model—and they keep launches honest.",
        ],
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...POSTS].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

export function getCanonicalPostUrl(slug: string): string {
  return `${getSiteUrl()}/blog/${slug}`;
}
