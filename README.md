# Alex Rivera — Influencer Portfolio

A premium, animated portfolio site for an Instagram/Facebook content creator. Built with
React + TypeScript + Vite, Tailwind CSS v4, Framer Motion, React Icons and Swiper.

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Brand tokens

Colors, fonts and other design tokens live in `src/index.css` under the `@theme` block
(Tailwind v4 style) — change them there and every component picks it up automatically.

- Background `#0A0A0A`, accent `#FF6B00` (your existing black/white/orange brand)
- Display font: Poppins · Body font: Inter · Data/stat font: Space Mono

## Project structure

```
src/
  components/
    layout/     Navbar, Footer, LoadingScreen, CustomCursor, ScrollProgressBar, ScrollToTop
    sections/   Hero, About, Services, Portfolio, Stats, Brands, Gallery,
                Testimonials, Timeline, InstagramFeed, FacebookFeed,
                VideoShowcase, FAQ, Contact
    ui/         Reveal (scroll animation wrapper), SectionHeading
  context/      ThemeContext (dark/light toggle, persisted to localStorage)
  data/         content.ts — every piece of placeholder copy, stats and images
  hooks/        useCountUp — animated number count-up on scroll
```

## Everything is placeholder data

All copy, stats, testimonials, gallery photos and portfolio pieces live in
**`src/data/content.ts`**. Swap the values in that one file to make the whole site yours —
no need to touch component code for content changes. Photos are hot-linked from Unsplash;
replace with your own images before shipping (drop files in `src/assets/` and import them,
or point straight to your CDN URLs).

## Things to wire up before going live

- **Contact form** (`src/components/sections/Contact.tsx`) — currently just shows a success
  state. Point the `handleSubmit` function at Formspree, Resend, or your own API route.
- **Newsletter form** (`src/components/layout/Footer.tsx`) — same idea, currently local-only.
- **Instagram / Facebook feeds** — `InstagramFeed.tsx` and `FacebookFeed.tsx` are built to
  the final layout but use static placeholder posts. Wire them to the Instagram Graph API /
  Facebook Page Feed API (or a widget service like Behold/SnapWidget) once you have API access.
- **Real photos & avatar** — replace every Unsplash URL in `content.ts`.

## Deploying

This is a standard Vite app — works out of the box on Vercel, Netlify, or any static host:

```bash
npm run build
# deploy the generated dist/ folder
```

## Notes on scope

Everything from the original brief is implemented except GSAP and Lenis/Locomotive Scroll —
Framer Motion plus native `scroll-behavior: smooth` and `IntersectionObserver`-driven reveals
cover the same ground (scroll reveals, marquees, parallax blobs, page-load sequence, cursor
glow) with a smaller dependency footprint and no jank from mixing two motion libraries. If you
want buttery custom-easing inertia scrolling specifically, `npm install lenis` and wrap `<App />`
in a Lenis provider — the codebase's motion patterns (all built on scroll position / viewport
detection) will keep working unchanged.
