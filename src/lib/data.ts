export const personal = {
  name: "Hamza Daniyal",
  role: "Frontend & AI Engineer",
  tagline:
    "Building the interfaces behind AI-powered SaaS — agent consoles, streaming conversational UIs, and observability dashboards.",
  email: "hamidaniel007@gmail.com",
  phone: "+92 341 9686727",
  location: "Islamabad, Pakistan",
  github: "https://github.com/hamzadaniyal7",
  linkedin: "https://www.linkedin.com/in/hamzadaniyal7/",
  upwork: "https://www.upwork.com/freelancers/~01c77f559214a85ac0",
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
  { value: 2, suffix: "+", label: "Years Building with LLMs" },
  { value: 11, suffix: "+", label: "Production Platforms" },
  { value: 60, suffix: "+", label: "Charts Migrated" },
];

export const marqueeStack = [
  "Angular 18",
  "React",
  "Next.js",
  "TypeScript",
  "RxJS",
  "NgRx",
  "Signals",
  "LLM Applications",
  "AI Agents",
  "RAG",
  "SSE Streaming",
  "Claude Code",
  "Gemini",
  "Tailwind CSS",
  "Apache ECharts",
  "Chart.js",
  "Firebase",
  "Stripe",
];

export const skillGroups = [
  {
    title: "Frontend Engineering",
    description: "Angular and React architecture that stays fast as it grows",
    items: [
      "Angular 18",
      "Signals",
      "RxJS",
      "NgRx",
      "Standalone Components",
      "React",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    title: "AI Engineering",
    description: "LLM applications, agents, and the UIs they live in",
    items: [
      "LLM Applications",
      "AI Agents & Agentic Workflows",
      "RAG Pipelines",
      "SSE Streaming Chat",
      "Prompt & Agent Configuration",
      "Adaptive / Model-Generated UI",
    ],
  },
  {
    title: "AI-Assisted Development",
    description: "Shipping production code with AI in the loop",
    items: [
      "Claude Code",
      "Gemini",
      "Cursor",
      "Spec → Scaffold → Review",
      "AI Pair Programming",
    ],
  },
  {
    title: "Full-Stack & Integrations",
    description: "Owning a feature from API contract to pixel",
    items: [
      "REST APIs",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "Firebase",
      "Multi-Tenant SaaS",
      "RBAC",
      "Stripe",
      "Twilio",
      "Google Maps",
    ],
  },
  {
    title: "Data Visualization",
    description: "Real-time, interactive analytics at scale",
    items: ["Apache ECharts", "Chart.js", "Custom SVG Charts", "D3 fundamentals"],
  },
  {
    title: "Architecture & Performance",
    description: "Engineering decisions that move the needle",
    items: [
      "Module Boundaries",
      "Lazy Loading",
      "Code Splitting",
      "Change Detection Optimization",
      "Virtualization",
      "Reactive Programming",
    ],
  },
];

export const experience = [
  {
    company: "Z-Axiss",
    role: "Frontend & AI Engineer",
    period: "Jul 2022 — Present",
    location: "Islamabad, Pakistan · On-site",
    summary:
      "Building enterprise SaaS and AI-powered products for Z-Axiss clients and partners. Since ~2024, working with Trillo (Trillo.ai) on its AI agent platform — agent management, Adaptive UI, conversational interfaces, and agent observability.",
    highlights: [
      {
        metric: "AI Platform",
        text: "Frontend for Trillo's agent platform: Adaptive UI rendered from model-generated JSON specs, SSE-streamed conversational UI, agent configuration, and multi-tenant observability consoles.",
      },
      {
        metric: "60+",
        text: "Looker Studio charts across 15+ reports migrated to a native Angular analytics product built on Chart.js and Apache ECharts.",
      },
      {
        metric: "Full-Stack",
        text: "Built the Employee Management Portal and Project Management Portal end-to-end for Z-Axiss — React + TypeScript over FastAPI and PostgreSQL, owned from API contract to pixel.",
      },
      {
        metric: "Angular 18",
        text: "Drove team adoption of Signals, standalone components, lazy loading, and OnPush — cutting boilerplate and change-detection cost across active projects.",
      },
    ],
    stack: [
      "Angular 18",
      "Signals",
      "RxJS",
      "NgRx",
      "React",
      "Next.js",
      "TypeScript",
      "LLM Applications",
      "Claude Code",
    ],
  },
];

export const projects = [
  {
    name: "Agent Observability Console",
    domain: "AI Platform · Observability",
    summary:
      "Observability and analytics console for fleets of AI agents — ingesting OpenTelemetry-style agent telemetry and turning executions, traces, and spans into reliability, latency, cost, and governance insight.",
    problem:
      "Teams were running dozens of AI agents across many applications and regions with no way to answer basic questions: which agents are failing and why, where latency is coming from, what token spend is being wasted, and whether runs are staying inside policy. Raw traces and logs existed, but nothing turned them into a picture an engineer or an engineering manager could act on.",
    solution:
      "Built the console as the frontend over a Trillo AOS telemetry pipeline: per-agent health and reliability views, failure root-cause clustering, latency breakdowns, token and cost rollups, and policy/audit screens — all multi-tenant with row-level scoping so a provider and its customers see the same product with different data. Charts are hand-built SVG rather than a charting dependency, which keeps bundle size down and gives exact control over dense telemetry views.",
    impact: [
      "Fleet-wide view across ~30 logical agents, 10 applications, and ~210 runtime PODs",
      "Failure clustering turns thousands of individual errors into a handful of root causes",
      "Token and cost rollups surface waste that was previously invisible",
      "Multi-tenant SaaS screens — one codebase serving provider and customer tenants",
    ],
    stack: [
      "React 19",
      "TanStack Start",
      "TanStack Query",
      "Tailwind CSS v4",
      "TypeScript",
      "Custom SVG Charts",
      "OpenTelemetry",
    ],
  },
  {
    name: "Adaptive UI & Conversational AI",
    domain: "AI Platform · LLM Interfaces",
    summary:
      "Frontend for interfaces generated by an AI model as a JSON spec, plus the streaming conversational UI and agent configuration screens around it.",
    problem:
      "The platform needed to render UI that an AI model produces at runtime. The obvious path — executing model-generated code in the browser — is a security and reliability problem: you cannot review what you have not seen, and a bad generation breaks the page. The product also needed conversational interfaces that felt immediate rather than request-response, and a way for non-engineers to configure agents safely.",
    solution:
      "Recommended and built a declarative approach: the model emits a constrained A2UI JSON spec, and a json-render layer maps it to vetted components — so nothing model-generated is ever executed. Paired it with a conversational UI streaming over SSE with follow-ups, attachments, and conversation management, and agent-management screens for prompt editing and role-based access control.",
    impact: [
      "Model-generated interfaces render without executing model-generated code",
      "Streaming responses with follow-ups, attachments, and conversation history",
      "Non-engineers configure agents and prompts behind role-based permissions",
      "Declarative spec keeps the surface auditable as the model changes",
    ],
    stack: [
      "Angular 18",
      "Signals",
      "RxJS",
      "TypeScript",
      "A2UI / JSON Render",
      "SSE Streaming",
      "RBAC",
    ],
  },
  {
    name: "Trillo Backend Workbench",
    domain: "AI Platform · Developer Tools",
    summary:
      "IDE-style backend workbench where developers compose, test, and deploy AI-powered workflows. The same foundation later powered the Trillo File Manager product.",
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
    name: "AI Document Search Engine",
    domain: "AI Search · Climate Tech",
    summary:
      "RAG-based document search for a climate-tech nonprofit — turning a sprawling corpus of policy, program, and incentive documents into instant answers grounded in source passages.",
    problem:
      "The client's research, policy, and program documents had grown into a large, unstructured corpus. Stakeholders were spending hours hunting through PDFs for specific clauses, rebates, and program details. Keyword search wasn't enough — the same concept gets phrased a dozen different ways across documents and revisions.",
    solution:
      "Built the search engine end-to-end behind their existing product UI: document ingestion and chunking, vector embeddings, a semantically indexed retrieval layer, and a clean retrieval API returning ranked passages with grounded citations. Tuned chunking and ranking for the specific shape of policy and incentive content so answers stay precise instead of vaguely on-topic.",
    impact: [
      "Hours of manual document hunting compressed into seconds of semantic search",
      "Citation-backed answers — every result links straight to its source passage",
      "Indexing pipeline ingests a continually growing corpus without manual curation",
      "Drop-in API integrated cleanly with the client's existing product surface",
    ],
    stack: [
      "RAG Pipeline",
      "Vector Embeddings",
      "Semantic Search",
      "Document Indexing",
      "Retrieval API",
      "LLMs",
    ],
  },
  {
    name: "Project Management Portal",
    domain: "Project Management · Z-Axiss",
    summary:
      "Ticket and project tracker for small software teams — Scrum and Kanban boards, backlog and sprints, time logs and timesheets, reports, and an AI assistant that proposes while people confirm.",
    problem:
      "Small teams were either paying enterprise prices for trackers built for enterprises, or living in spreadsheets. They needed boards, sprints, and time tracking without the configuration overhead — and an AI assistant that genuinely helps without quietly taking actions nobody approved.",
    solution:
      "Built end-to-end: a React 19 + TanStack Query frontend with dnd-kit boards over a FastAPI and SQLAlchemy backend. Fine-grained permission sets instead of fixed roles, a setup wizard that makes the first user an admin and seeds a sample project, and per-tenant branding where the brand color drives the whole theme in light and dark mode. The AI assistant sits behind a provider interface and is strictly propose-then-confirm — it never commits a change on its own.",
    impact: [
      "Scrum and Kanban boards with drag-and-drop over a shared backlog and sprint model",
      "Time logs and timesheets feed reports directly instead of a separate tool",
      "Fine-grained permission sets replace rigid, fixed roles",
      "AI assistant proposes and people confirm — no silent writes",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "dnd-kit",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
    ],
  },
  {
    name: "Employee Management Portal",
    domain: "HR Operations · Z-Axiss",
    summary:
      "Multi-tenant HR portal covering attendance, leave, and every approval workflow around them — built so policy lives in configuration rather than code.",
    problem:
      "Attendance and leave ran on spreadsheets and chat messages. Clock-ins carried no record of work location, breaks were self-reported and routinely over-counted, late arrivals had no accountability trail, and leave entitlements differed per employee group with no system able to express the rules. Managers approved by message, so nothing was auditable afterwards.",
    solution:
      "Built the portal end-to-end — a React + TypeScript frontend over a FastAPI and PostgreSQL backend. Modeled leave as configurable kinds and tiers (yearly days, notice periods, document requirements, one-block rules) so a policy change is configuration, not a release. Attendance tracks office vs. WFH with corrections, timed breaks that auto-resume and can't be over-counted, and a late-arrival queue that requires a reason before review. Role-aware surfaces for admin, manager, and employee, with email and chat notifications.",
    impact: [
      "Attendance, leave, and approvals moved from spreadsheets into one auditable system",
      "Leave policy expressed as configurable kinds and tiers — no code change per rule",
      "Compensatory credits earned automatically from attendance, then assigned and tracked",
      "Admin, manager, and employee each get their own role-scoped surface",
    ],
    stack: [
      "React",
      "TypeScript",
      "React Hook Form",
      "Zod",
      "Recharts",
      "FastAPI",
      "PostgreSQL",
      "Docker",
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
    name: "Molecule Hierarchy PMS",
    domain: "Project Management · AI-Built",
    summary:
      "A hierarchical project management platform modeled on molecule-style decomposition, where every node can branch into deeply nested sub-projects.",
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
    ],
  },
];

export const achievements = [
  {
    title: "Delivered 11+ production platforms",
    text: "Across AI platforms and developer tools, logistics, analytics, healthcare, supply chain, climate-tech AI search, project management, and service marketplaces — each running in production with real users.",
  },
  {
    title: "Built the frontend for an AI agent platform",
    text: "Adaptive UI from model-generated specs, SSE-streamed conversational interfaces, agent configuration, and multi-tenant observability — shipped on Trillo's AI platform.",
  },
  {
    title: "Led adoption of Angular 18",
    text: "Drove the team migration to Signals, standalone components, and the new control flow — cutting boilerplate and change-detection cost across active projects.",
  },
  {
    title: "AI-native engineering",
    text: "Two years building with LLMs daily, and two production platforms shipped end-to-end with Claude Code and Gemini — owning the architecture and reviewing every change.",
  },
];

export type Project = (typeof projects)[number];

/**
 * The three case studies shown on the home page — one AI platform build,
 * one LLM interface build, one full-stack product. The rest live on /case-studies.
 */
const featuredNames = [
  "Agent Observability Console",
  "Adaptive UI & Conversational AI",
  "Project Management Portal",
];

export const featuredProjects: Project[] = featuredNames.flatMap(
  (name) => projects.find((project) => project.name === name) ?? [],
);
