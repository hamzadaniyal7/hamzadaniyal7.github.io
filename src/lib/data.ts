export const personal = {
  name: "Hamza Daniyal",
  role: "Lead Frontend Engineer",
  tagline:
    "Building scalable, high-performance Angular applications with modern architecture.",
  email: "hamidaniel007@gmail.com",
  phone: "+92 341 9686727",
  location: "Pakistan",
  github: "https://github.com/hamzadaniyal7",
  linkedin: "https://www.linkedin.com/in/hamzadaniyal7/",
  resume: "/Hamza-Daniyal-CV.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 1, suffix: "+", label: "Year AI-Assisted Builds" },
  { value: 9, suffix: "+", label: "Production Platforms" },
  { value: 60, suffix: "+", label: "Charts Migrated" },
];

export const marqueeStack = [
  "Angular 18",
  "RxJS",
  "NgRx",
  "Signals",
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Chart.js",
  "Apache ECharts",
  "Firebase",
  "Stripe",
  "Twilio",
  "TalkJS",
  "Google Maps",
  "Claude Code",
  "Gemini",
  "Cursor",
];

export const skillGroups = [
  {
    title: "Frontend Core",
    description: "Modern Angular architecture and reactive patterns",
    items: [
      "Angular 18",
      "RxJS",
      "NgRx",
      "Angular Signals",
      "TypeScript",
      "JavaScript (ES2022+)",
    ],
  },
  {
    title: "AI-Assisted Development",
    description: "Shipping production code at AI speed",
    items: [
      "Claude Code",
      "Gemini",
      "Cursor",
      "Vibe Coding",
      "Prompt Engineering",
      "AI Pair Programming",
    ],
  },
  {
    title: "UI & Styling",
    description: "Pixel-perfect, accessible interfaces",
    items: ["HTML5", "CSS3", "SCSS", "Angular Material", "Tailwind CSS"],
  },
  {
    title: "Data Visualization",
    description: "Real-time, interactive analytics",
    items: ["Chart.js", "Apache ECharts", "D3 fundamentals"],
  },
  {
    title: "Integrations",
    description: "Production-grade third-party services",
    items: ["Stripe", "Firebase", "Twilio", "TalkJS", "Google Maps"],
  },
  {
    title: "Architecture & Performance",
    description: "Engineering decisions that move the needle",
    items: [
      "Lazy Loading",
      "Code Splitting",
      "Change Detection Optimization",
      "Micro-Frontends",
      "Reactive Programming",
    ],
  },
];

export const experience = [
  {
    company: "Z-Axiss SMC Pvt Ltd",
    role: "Lead Frontend Engineer",
    period: "Jun 2022 — Present",
    location: "Remote",
    summary:
      "Owning frontend architecture, mentoring engineers, and delivering enterprise-grade platforms across healthcare, AI governance, supply chain, climate-tech, logistics, and AI dev-tooling domains.",
    highlights: [
      {
        metric: "15+",
        text: "Reports and 60+ interactive graphs migrated from Looker Studio to a fully native Angular stack.",
      },
      {
        metric: "↓ 40%",
        text: "Initial load time reduction via lazy loading, route-level code splitting, and OnPush change detection.",
      },
      {
        metric: "7+",
        text: "Production platforms shipped — fleet tracking, healthcare, AI governance, supply chain, climate-tech (Rewiring America), and the Trillo backend workbench + file manager.",
      },
      {
        metric: "Lead",
        text: "Drove architecture decisions, code review culture, and adoption of Angular 18 Signals + Standalone Components.",
      },
    ],
    stack: [
      "Angular 18",
      "RxJS",
      "NgRx",
      "Signals",
      "Firebase",
      "Stripe",
      "Twilio",
      "Chart.js",
      "ECharts",
    ],
  },
  {
    company: "Independent · AI-Assisted Builds",
    role: "Full-Stack Engineer",
    period: "2025 — Present",
    location: "Remote",
    summary:
      "Shipping production-ready web apps with Claude Code, Gemini, and modern vibe-coding workflows — moving from spec to launch in weeks, not months, without compromising on architecture.",
    highlights: [
      {
        metric: "2",
        text: "Production platforms launched end-to-end: a molecule-hierarchy project management system and a client–concierge service marketplace.",
      },
      {
        metric: "↓ 70%",
        text: "Time-to-launch versus traditional builds, by pairing AI tooling with strong architectural judgment and review.",
      },
      {
        metric: "AI-Native",
        text: "Workflows built around Claude Code & Gemini — spec → scaffold → review → ship, with humans owning the architecture decisions.",
      },
      {
        metric: "Quality",
        text: "Production-ready output: typed end-to-end, accessible, performance-budgeted, and code-reviewed before merge.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Claude Code",
      "Gemini",
      "Cursor",
    ],
  },
];

export const projects = [
  {
    name: "Fleet Management System",
    domain: "Logistics · USA",
    summary:
      "Real-time tracking platform for a 15+ vehicle fleet with live telemetry, geofencing, alerts, and scheduling.",
    problem:
      "The operations team had no centralized way to monitor vehicles in real time. Dispatch ran on phone calls and spreadsheets, route deviations went unnoticed, and incidents were reconstructed after the fact instead of caught live.",
    solution:
      "Architected an Angular dashboard backed by Firebase Realtime Database, integrated Google Maps with custom layers for live tracking and heatmaps, and built a rules engine for proactive alerts. Designed an event-driven scheduling module with optimistic updates so dispatchers stay in flow even on flaky networks.",
    impact: [
      "Live visibility across 15+ vehicles with sub-second telemetry updates",
      "Heatmaps surfacing route hotspots and dwell-time anomalies",
      "Alert pipeline cut incident response time dramatically",
      "Scheduling system replaced manual spreadsheets for daily dispatch",
    ],
    stack: [
      "Angular",
      "RxJS",
      "Firebase Realtime DB",
      "Google Maps API",
      "TypeScript",
      "SCSS",
    ],
  },
  {
    name: "Rewiring America — AI Document Search",
    domain: "AI Search · Climate Tech",
    summary:
      "AI-powered document search and retrieval engine for Rewiring America — turning a sprawling corpus of policy, program, and incentive documents into instant, semantic answers grounded in source passages.",
    problem:
      "Rewiring America's research, policy, and program documents had grown into a large, unstructured corpus. Stakeholders were spending hours hunting through PDFs and pages for specific clauses, rebates, and program details. Keyword search wasn't enough — the same concept gets phrased a dozen different ways across documents and revisions.",
    solution:
      "Built the search engine end-to-end behind their existing product UI: document ingestion and chunking, vector embeddings, a semantically indexed retrieval layer, and a clean retrieval API that returned ranked passages with grounded citations to the client app. Tuned chunking and ranking for the specific shape of policy and incentive content so answers stay precise instead of vaguely on-topic.",
    impact: [
      "Hours of manual document hunting compressed into seconds of semantic search",
      "Citation-backed answers — every result links straight to its source passage",
      "Indexing pipeline ingests a continually growing corpus without manual curation",
      "Drop-in API integrated cleanly with Rewiring America's existing product surface",
    ],
    stack: [
      "AI Models",
      "Vector Embeddings",
      "Document Indexing",
      "RAG Pipeline",
      "Semantic Search",
      "Retrieval API",
    ],
  },
  {
    name: "Data Visualization Platform",
    domain: "Analytics · Enterprise",
    summary:
      "Migration of 60+ Looker Studio charts into a fully owned, performant Angular analytics product.",
    problem:
      "The business depended on 15+ Looker Studio reports that were slow to load, expensive to license, and impossible to extend. Stakeholders needed deep customization, embeddable views, and tighter integration with internal data — none of which the legacy tooling supported.",
    solution:
      "Designed a modular charting layer wrapping Chart.js and Apache ECharts behind a unified Angular API, with lazy-loaded report modules, virtualized lists for large datasets, and OnPush + Signals to keep change detection cheap. Reused configuration primitives to drop new chart types in days instead of weeks.",
    impact: [
      "60+ charts across 15+ reports migrated with feature parity",
      "Significant load-time and interactivity improvements over the legacy stack",
      "Eliminated recurring Looker Studio licensing dependency",
      "Unified chart API let new report types ship in days, not weeks",
    ],
    stack: [
      "Angular 18",
      "Signals",
      "RxJS",
      "Chart.js",
      "Apache ECharts",
      "TypeScript",
    ],
  },
  {
    name: "Trillo Backend Workbench",
    domain: "AI Platform · Developer Tools",
    summary:
      "IDE-style backend workbench for Trillo.ai — where developers compose, test, and deploy AI-powered workflows. The same foundation later powered the Trillo File Manager product.",
    problem:
      "Trillo's customers were context-switching between editors, runtime logs, AI prompt tools, and admin consoles. The product needed a unified workspace that felt as responsive as a desktop IDE — without ballooning bundle size or fighting Angular change detection at scale.",
    solution:
      "Architected the workbench around lazy-loaded feature modules, Signals + OnPush for surgical re-renders, and a virtualized log/console layer that holds tens of thousands of entries without dropping frames. Reusable layout primitives let new editor surfaces ship in days. The same architecture was extended into the Trillo File Manager product with minimal duplication.",
    impact: [
      "IDE-style UX — split panes, live logs, AI tooling — without lag at scale",
      "New feature surfaces shipped in days, not weeks",
      "Core product surface for Trillo's developer customers",
      "Architecture reused end-to-end for the Trillo File Manager spin-off",
    ],
    stack: [
      "Angular 18",
      "Signals",
      "RxJS",
      "NgRx",
      "TypeScript",
      "Virtualization",
    ],
  },
  {
    name: "Molecule Hierarchy PMS",
    domain: "Project Management · AI-Built",
    summary:
      "A complex hierarchical project management platform modeled on molecule-style decomposition, where every node can branch into deeply nested sub-projects.",
    problem:
      "Teams running multi-layered programs were juggling spreadsheets and flat task lists that hid critical relationships. They needed to see how parent goals decomposed into child workstreams — and back — without losing context across hundreds of nodes.",
    solution:
      "Built end-to-end with Claude Code as the pair-programming engine: a Next.js + TypeScript app with a virtualized hierarchy renderer, drag-and-drop reorganization, role-based permissions, and real-time collaboration. Architecture was human-driven; AI handled scaffolding, refactors, and accelerated iteration cycles.",
    impact: [
      "Production launch in a fraction of the typical timeline",
      "Hundreds of hierarchical nodes rendered smoothly via virtualization",
      "Drag-and-drop reorg with optimistic updates and conflict resolution",
      "Replaced spreadsheet-driven workflows with a single source of truth",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Claude Code",
    ],
  },
  {
    name: "Client–Concierge Service Platform",
    domain: "Service Marketplace · AI-Built",
    summary:
      "Two-sided service-provider marketplace connecting clients with concierges for on-demand requests, scheduling, real-time chat, and payments.",
    problem:
      "A traditional concierge operation was being run on calls, messaging apps, and manual coordination. They needed a unified product that could onboard providers, route client requests, handle scheduling, and capture payments — without years of build time.",
    solution:
      "Designed and shipped with a Claude Code + Gemini workflow: role-based dashboards for clients and concierges, a request lifecycle engine, real-time chat, calendar-aware scheduling, and integrated payments. AI accelerated build-out; architecture decisions stayed with the engineer.",
    impact: [
      "End-to-end production launch on a compressed timeline",
      "Unified client + provider experience replaced fragmented tooling",
      "Real-time messaging and scheduling baked in from day one",
      "Payments and request lifecycle wired in cleanly for scale",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Realtime DB",
      "Stripe",
      "Claude Code",
      "Gemini",
    ],
  },
];

export const achievements = [
  {
    title: "Delivered 9+ production platforms",
    text: "Across healthcare, AI governance, supply chain, fleet & logistics, climate-tech (Rewiring America), AI dev tools (Trillo), analytics, project management, and service marketplaces — each running in production with real users.",
  },
  {
    title: "Led adoption of Angular 18",
    text: "Drove the team migration to Signals, Standalone Components, and the new control flow — modernizing the codebase.",
  },
  {
    title: "Measurable performance wins",
    text: "Reduced load times and runtime latency through lazy loading, code splitting, and change detection tuning.",
  },
  {
    title: "AI-native engineering",
    text: "Shipped two production platforms in a fraction of the typical timeline using Claude Code, Gemini, and disciplined vibe-coding workflows.",
  },
];
