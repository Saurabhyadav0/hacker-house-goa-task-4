export type Category = "AI" | "FULL-STACK" | "FRONTEND";

export type Project = {
  name: string;
  tagline: string;
  stack: string[];
  repo: string;
  live?: string;
  // Screenshot of the project's home page, captured from the live site (or a local run).
  image?: string;
  category: Category;
};

export type HHProject = Project & { task: string; highlights: string[] };

const GH = "https://github.com/Saurabhyadav0";

// The Hacker House Goa 2026 builds that live in this workspace.
export const HH_PROJECTS: HHProject[] = [
  {
    task: "01",
    name: "Frame in Goa",
    tagline:
      "Upload a photo, get a branded HH Goa 2026 Builder ID card or X profile frame in seconds. No login, no wait.",
    highlights: [
      "Drag-to-reframe, pinch-to-zoom cropper",
      "HEIC support, client-side canvas rendering",
      "One-tap share to X with #FrameInGoa",
    ],
    stack: ["React", "TanStack Start", "Tailwind", "Canvas"],
    repo: `${GH}/frame-my-goa-pic`,
    image: "/shots/frame-in-goa.jpg",
    live: "https://frame-my-goa-pic.vercel.app",
    category: "FRONTEND",
  },
  {
    task: "02",
    name: "Voice RAG",
    tagline:
      "Speak or type a question in English or an Indic language and get a grounded answer — or an honest refusal.",
    highlights: [
      "Sarvam AI speech-to-text",
      "Hybrid FAISS + BM25 retrieval over MSMARCO-XI",
      "Three-stage guardrails",
    ],
    stack: ["FastAPI", "FAISS", "BM25", "Sarvam AI", "Fly.io"],
    repo: `${GH}/hh_rag_project`,
    image: "/shots/voice-rag.jpg",
    live: "https://hh-rag-project.fly.dev",
    category: "AI",
  },
  {
    task: "03",
    name: "Face → Chain",
    tagline:
      "Face scan in, matching public post found on the web, tamper-evident record written on-chain and re-verified.",
    highlights: [
      "YuNet + SFace detection and identity match",
      "Live reverse-image search via SerpApi / Vision",
      "FaceRegistry.sol keccak256 verification",
    ],
    stack: ["Python", "OpenCV", "Solidity", "web3.py"],
    repo: `${GH}/HHGOA_task3`,
    image: "/shots/face-chain.jpg",
    category: "AI",
  },
  {
    task: "04",
    name: "TigerGraph Fraud Agent",
    tagline:
      "An agent that investigates fraud alerts over 590K real transactions and writes every case into TigerGraph as memory.",
    highlights: [
      "Live GSQL traversal for similar closed cases",
      "Policy-routed next-best-actions + SAR decisions",
      "MCP server exposing the graph tools",
    ],
    stack: ["Python", "TigerGraph", "GSQL", "MCP", "Claude"],
    repo: `${GH}/tigergraph-fraud-agent`,
    category: "AI",
  },
];

// Other shipped repos on GitHub that have a deployment.
export const PROJECTS: Project[] = [
  {
    name: "AeroKisan",
    tagline: "Drone-as-a-service for smart farming — connects farmers with nearby agri-drone operators.",
    stack: ["React", "TypeScript", "Vite"],
    repo: `${GH}/aerokisan`,
    image: "/shots/aerokisan.jpg",
    live: "https://aerokisan.vercel.app",
    category: "FRONTEND",
  },
  {
    name: "Exam Signal Board",
    tagline: "Personalised government-exam deadline alerts on WhatsApp and email before every cutoff.",
    stack: ["Next.js", "TypeScript"],
    repo: `${GH}/exam-signal-board`,
    image: "/shots/exam-signal-board.jpg",
    live: "https://exam-signal-board.vercel.app",
    category: "FULL-STACK",
  },
  {
    name: "ePark",
    tagline: "Find, book and list parking spaces in Tier 2 and Tier 3 Indian cities.",
    stack: ["Next.js", "Prisma", "TypeScript"],
    repo: `${GH}/ncc-epark`,
    image: "/shots/epark.jpg",
    live: "https://ncc-epark.vercel.app",
    category: "FULL-STACK",
  },
  {
    name: "Saarthi TaskEngine",
    tagline: "Async task automation and job processing platform built as a micro-SaaS module.",
    stack: ["Next.js", "Express", "PostgreSQL", "Redis", "BullMQ"],
    repo: `${GH}/sarthi-assingment`,
    image: "/shots/saarthi.jpg",
    live: "https://sarthi-assingment.vercel.app",
    category: "FULL-STACK",
  },
  {
    name: "GrowEasy CSV Importer",
    tagline: "AI maps, cleans and extracts CRM leads from any messy CSV export.",
    stack: ["Next.js", "OpenAI", "Gemini"],
    repo: `${GH}/sy-assignment`,
    image: "/shots/groweasy.jpg",
    live: "https://sy-assignment-frontend.vercel.app",
    category: "AI",
  },
  {
    name: "Travel Sathi",
    tagline: "Travel marketplace connecting travellers with tour vendors.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    repo: `${GH}/Travel-sathi-nextjs`,
    image: "/shots/travel-sathi.jpg",
    live: "https://travel-sathi-nextjs.vercel.app",
    category: "FULL-STACK",
  },
  {
    name: "Activerse",
    tagline: "Booking system for an arcade venue with live slot availability and an admin dashboard.",
    stack: ["Next.js", "MongoDB", "TypeScript"],
    repo: `${GH}/activerse-nextjs`,
    image: "/shots/activerse.jpg",
    live: "https://activerse-nextjs.vercel.app",
    category: "FULL-STACK",
  },
  {
    name: "Mini Drive",
    tagline: "File manager with uploads, permissioned sharing and email notifications.",
    stack: ["MongoDB", "Express", "React", "Node"],
    repo: `${GH}/avni-task`,
    live: "https://avni-task.vercel.app",
    category: "FULL-STACK",
  },
  {
    name: "ShopEase",
    tagline: "Online storefront with product browsing and checkout.",
    stack: ["Next.js", "TypeScript"],
    repo: `${GH}/ease-shop`,
    image: "/shots/shopease.jpg",
    live: "https://shop-ease-omega.vercel.app",
    category: "FULL-STACK",
  },
  {
    name: "Portfolio OS",
    tagline: "A macOS-style interactive portfolio — dock, draggable windows, Spotlight and Finder.",
    stack: ["React", "TypeScript"],
    repo: `${GH}/saurabh-portfolio-os`,
    image: "/shots/portfolio-os.jpg",
    live: "https://saurabh-portfolio-os.vercel.app",
    category: "FRONTEND",
  },
  {
    name: "TasteBite",
    tagline: "Responsive restaurant website with dark/light mode.",
    stack: ["React", "Vite", "Tailwind", "shadcn/ui"],
    repo: `${GH}/zyrix-craft-task`,
    image: "/shots/tastebite.jpg",
    live: "https://zyrix-craft-task.vercel.app",
    category: "FRONTEND",
  },
  {
    name: "CampusCode",
    tagline: "Campus blog with placement stories and interview tips.",
    stack: ["Next.js", "TypeScript"],
    repo: `${GH}/campuscode`,
    image: "/shots/campuscode.jpg",
    live: "https://campuscode-wine.vercel.app",
    category: "FRONTEND",
  },
  {
    // Deployment (champions-ui.vercel.app) currently returns 500.
    name: "Champions UI",
    tagline: "Browse framework info, submit inquiries and track their status.",
    stack: ["React", "Tailwind", "React Router"],
    repo: `${GH}/champions-ui-1`,
    category: "FRONTEND",
  },
  {
    // Deployment (influex-ui.vercel.app) currently returns 404.
    name: "Influex UI",
    tagline: "Creator-platform frontend.",
    stack: ["React", "TypeScript", "Vite"],
    repo: `${GH}/influex-ui`,
    category: "FRONTEND",
  },
];

// This site's own repository.
export const SITE_REPO = `${GH}/hacker-house-goa-task-4`;
export const GITHUB_PROFILE = GH;
