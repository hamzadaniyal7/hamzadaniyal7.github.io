# hamzadaniyal7.github.io

Portfolio of **Hamza Daniyal** — Frontend & AI Engineer, Islamabad.

🌐 **Live:** <https://hamzadaniyal7.github.io>
📂 **Case studies:** <https://hamzadaniyal7.github.io/case-studies/>
📄 **CV:** <https://hamzadaniyal7.github.io/Hamza-Daniyal-CV.pdf>

---

## What's here

A static site with two pages. The home page covers positioning, skills,
experience and three featured case studies; `/case-studies/` has all ten in
full — the problem each one solved, the architecture behind it, and what
changed once it shipped.

Every project write-up is real production work: AI agent platforms,
model-generated UI, analytics, real-time logistics, HR and project
management portals.

## Stack

Next.js 15 (static export) · React 19 · TypeScript · Tailwind CSS · Framer
Motion · deployed to GitHub Pages by Actions on every push to `main`.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

## The CV

The PDF the site serves is generated from `cv/cv.html` with headless Chrome,
so it stays in step with the site rather than drifting in a separate file:

```bash
npm run cv      # -> public/Hamza-Daniyal-CV.pdf
```

## Content

Projects, skills, experience and stats all come from `src/lib/data.ts` —
edit there, not in the components.

---

Built in the open. Issues and suggestions welcome.
