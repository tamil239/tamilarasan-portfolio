# Tamilarasan S — Portfolio

A dark, cinematic personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, GSAP, and Lenis smooth scrolling.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Before you deploy — replace these placeholders

| Placeholder | Location | What to do |
|---|---|---|
| Resume PDF | `public/resume/tamilarasan-s-resume.pdf` | Replace with your real resume (keep the same filename, or update the link in `components/Hero.tsx`) |
| Project live demo / GitHub URLs | `lib/data.ts` → `projects` | Add `liveUrl` / `githubUrl` to each project object once available |
| Open Graph image | `public/og-image.png` | Replace with a final 1200×630 image |
| Portfolio domain | `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` | Replace `SITE_URL` / `metadataBase` with your real domain |
| Certification completion dates | `lib/data.ts` → `certifications` | Fill in actual completion dates |
| Favicon | `app/icon.png` | Replace with a final brand mark if desired |

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger for reveal/hero animations
- Lenis for smooth scrolling
- Lucide React icons

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (disables Lenis, GSAP animation, and canvas particle motion)
- Semantic landmarks (`header`, `main`, `section`, `footer`) and visible focus states throughout
- Contact form does client-side validation before building the `mailto:` link
- Ambient background/particles run on canvas and are excluded from the accessibility tree (`aria-hidden`)
