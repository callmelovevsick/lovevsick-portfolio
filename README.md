# lovevsick

A personal digital garden / developer portfolio. Dark purple, C++-flavored,
built with Next.js App Router + TypeScript + Tailwind + Framer Motion.

## Stack

- Next.js 14 (App Router, Server Components by default)
- TypeScript
- Tailwind CSS (design tokens driven by CSS variables in `app/globals.css`)
- Framer Motion for scroll reveals, page transitions, and the command palette
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required.
4. Deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Project structure

```
app/
  page.tsx            → home (hero + about preview)
  about/page.tsx       → full about page
  projects/page.tsx    → project grid
  garden/page.tsx       → digital garden (currently an empty state)
  lab/page.tsx         → placeholder lab directory
data/
  profile.ts           → identity, bio, tech stack, interests
  projects.ts           → project list — add a new project here and it
                          shows up on / and /projects automatically
components/
  layout/               → navbar, footer, command palette, page transitions
  code/                 → the animated C++ editor hero
  ui/                   → background, custom cursor, magnetic button, reveal
  projects/, garden/, lab/, about/
```

## Extending the garden

`/garden` is intentionally an empty state right now. When there's real
content to publish, the natural next step is MDX-backed posts at
`/garden/[slug]`, reading from a `content/garden/` directory — the data
layer (`data/`) is already separated from the UI so this drops in without
touching existing components.

## Notes

- No fabricated GitHub stats (stars/forks/commits) — the project cards only
  show what's in `data/projects.ts`.
- `prefers-reduced-motion` is respected globally (see `app/globals.css`);
  the custom cursor and hero typing animation both check for it directly.
- The custom cursor and floating background symbols are disabled on
  touch/mobile devices for performance.
