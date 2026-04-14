export type ExperienceItem = {
  company: string;
  role: string;
  contract?: boolean;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Allude Inc",
    role: "Full Stack AI Engineer",
    contract: true,
    location: "Paris, France (Remote)",
    start: "Jan 2026",
    end: "Present",
    highlights: [
      "Resolved critical issues in the RAG-based search retrieval pipeline, improving response accuracy by about 40% and system efficiency.",
      "Designed and implemented end-to-end Voice AI infrastructure with integrations into Allude’s quality engine; conversational data flows into Google Cloud Spanner for scalable storage and analysis.",
      "Scaled the video processing pipeline from a single-instance setup to a distributed cluster architecture for parallel chunk processing and higher throughput.",
    ],
  },
  
  {
    company: "YourSizer",
    role: "Software Development Engineer",
    contract: true,
    location: "Istanbul, Turkey (Remote)",
    start: "Mar 2025",
    end: "Jan 2026",
    highlights: [
      "Shipped distribution via Shopify App Store, npm, and script using React, Three.js, and Webpack for real-time 3D size simulations.",
      "Built a real-time analytics dashboard with PostgreSQL, AWS S3, and Node.js so brands could monitor streaming KPIs—supporting lower return rates and revenue lift.",
      "Streamlined CI/CD with GitHub Actions, Jenkins, and Docker for repeatable, scalable releases.",
    ],
  },
  {
    company: "Agreed Pro",
    role: "Full Stack AI Engineer",
    contract: true,
    location: "New York, USA (Remote)",
    start: "May 2025",
    end: "Aug 2025",
    highlights: [
      "Enhanced the SaaS UI with Next.js and integrated Stripe, improving checkout conversion and reducing support load.",
      "Refactored the Word plugin UI with React, Align UI, and Webpack to pixel-perfect specs while fixing major bugs and improving engagement.",
      "Optimized FastAPI services, cutting average API latency and improving reliability.",
    ],
  },
  {
    company: "Upwork",
    role: "Full Stack Engineer",
    contract: true,
    location: "Freelance · Remote",
    start: "Jul 2024",
    end: "Feb - 2025",
    highlights: [
      "Developed a web automation platform for a startup using Next.js, Prisma, PostgreSQL, and Stripe, integrating AI-driven workflows with social platforms and boosting client engagement efficiency by about 40%.",
      "Revamped booking software and the website for Misha Multi-specialty Hospital, reducing latency by about 45% and improving UX; migrated workloads to AWS Lambda and cut operational cost by about 80%.",
      "Designed and delivered a scalable, responsive UI with Next.js for a gaming platform supporting 25k+ daily visitors, increasing user engagement by about 30%.",
    ],
  },
];

export const EDUCATION = {
  school: "Graphic Era University",
  location: "Dehradun, Uttarakhand",
  degree: "B.Tech in Artificial Intelligence and Data Science",
  cgpa: "8.66 / 10.0",
  start: "Aug 2020",
  end: "Jun 2024",
};

export const ACHIEVEMENTS = [
  "Secured 6th place out of 7,700 teams in UST D3CODE Campus Hackathon 2023.",
  "Ranked 18th in APAC and 49th worldwide at Meta Global Hackathon 2022 (Facebook).",
];

export const TECHNICAL_SKILLS: { category: string; items: string[] }[] = [
  {
    category: "Programming languages",
    items: ["C/C++", "Java", "JavaScript", "TypeScript", "Shell scripting"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS", "Flask"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "RDBMS concepts"],
  },
  {
    category: "Practices & platforms",
    items: [
      "Agile",
      "OOP",
      "Linux (Ubuntu)",
      "Bash",
      "Git",
      "Docker",
      "WebSockets",
      "LangChain",
    ],
  },
];

export const CONTACT = {
  name: "Shashank Bhardwaj",
  phone: "+91 7017543269",
  email: "shashankbhardwaj16apr@gmail.com",
  github: "https://github.com/shashank1623",
  leetcode: "https://leetcode.com/u/theghost16/",
  linkedin: "https://www.linkedin.com/in/shashank-bhardwaj-1a92b9213/",
  twitter: "https://x.com/theghost1623",
};
