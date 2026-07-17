# Senuka Rodrigo — Portfolio

Personal portfolio site. Dark "aurora glass" aesthetic with scroll and pointer-driven
motion throughout.

Built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4** and
**Motion** (the library formerly published as Framer Motion).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build
npx tsc --noEmit # typecheck
npx eslint .     # lint
```

## Editing content

All copy — profile, projects, skills, education, achievements — lives in
[`lib/data.ts`](lib/data.ts). The sections read from it and never hardcode text, so
that file is the only one you need to touch to update the CV content.

Two things in there are worth a look:

- `profile.github` / `profile.linkedin` and each project's `github` URL currently point
  at profile-level links rather than the individual repos. Swap in the real repo URLs.
- `projects[0].live` (ReViveX) is `"#"` as a placeholder. The live link only renders
  once it is a real URL.

Your phone number is deliberately **not** on the site — a public page invites scraping
and spam. Add it to `lib/data.ts` and surface it in `Contact.tsx` if you want it.
Referee names and contact details are also omitted; the page says "References available
on request" instead, since publishing someone else's phone and email needs their consent.

## Structure

```
app/
  layout.tsx        fonts, metadata, MotionProvider
  page.tsx          composes the sections
  globals.css       design tokens, glass/gradient utilities, reduced-motion rules
components/
  background/       AuroraBackground — drifting blobs, grid, cursor spotlight
  sections/         Hero, About, Projects, Skills, Education, Contact
  ui/               Reveal, TiltCard, MagneticLink, RotatingWord, ScrollProgress …
lib/data.ts         all site content
```

## Motion and accessibility

`app/layout.tsx` wraps the tree in `<MotionConfig reducedMotion="user">`, so when the OS
asks for reduced motion, Motion drops transform animations and animates opacity only.

Components therefore **must not** branch on `useReducedMotion()` while rendering — the
server can't know the user's preference, so doing so makes the server HTML disagree with
the client's first render and throws a hydration error. Where the preference genuinely
has to change what's rendered (the scroll-linked `style` bindings in `Hero` and
`Education`, which `MotionConfig` can't disable), use `useSafeReducedMotion()` from
`components/ui/use-safe-reduced-motion.ts`. It reports `false` until after mount so both
renders agree.

## Deploying

The site is fully static (`next build` prerenders `/`). Vercel needs no configuration.
For GitHub Pages you'd need `output: "export"` in `next.config.ts` plus `basePath`, and
`images.unoptimized = true`.
