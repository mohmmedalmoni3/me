# Mohammed Almomani — Portfolio

Premium, cinematic developer portfolio built with **React + TypeScript + Tailwind CSS + Framer Motion**.

## Stack

- React 19 + TypeScript
- Tailwind CSS
- Framer Motion (interface animation only)
- Lucide React (functional icons) + custom minimal SVGs (brand icons)
- Native `<canvas>` + `requestAnimationFrame` for the cinematic scroll sequence — **not** Framer Motion, by design, so it stays independent and buttery smooth

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Adding your cinematic frames

The hero's scroll-scrubbed cinematic sequence expects 120 WebP frames at:

```
public/frames/frame_0001.webp
public/frames/frame_0002.webp
...
public/frames/frame_0120.webp
```

Drop your frame sequence into `public/frames/` (a placeholder `README.txt` is there — delete it once your frames are in). The canvas system in `src/hooks/useCinematicScroll.ts` maps scroll position to frame index and targets 60fps via `requestAnimationFrame` + passive scroll listeners.

## Structure

```
src/
  components/
    HeroSection.tsx        cinematic canvas + editorial headline
    MarqueeSection.tsx      two opposite-direction scrolling rows
    AboutSection.tsx
    ServicesSection.tsx
    SkillsSection.tsx       tabbed skill categories
    ProjectsSection.tsx
    ExperienceSection.tsx   timeline
    ContactSection.tsx      large-type CTA + real contact links + form
    Footer.tsx
    CustomCursor.tsx        desktop-only, disabled on touch/reduced-motion
    icons/BrandIcons.tsx    custom SVGs (no Font Awesome)
  context/LangContext.tsx  EN/AR toggle, sets <html dir>/<html lang>
  data/content.ts          all real bilingual copy + project/experience data
  hooks/useCinematicScroll.ts
```

## Design tokens

- Background: `#0C0C0C`
- Primary text: `#D7E2EA`
- Hero/contact headline gradient: `linear-gradient(180deg, #646973 0%, #BBCCD7 100%)` clipped to text
- Typeface: Kanit (300–900), Cairo for Arabic
- No neon, no glassmorphism, no cyan/orange — restrained cool-grey palette throughout

## Notes

- Arabic mode flips `dir="rtl"` and swaps to Cairo; layout spacing was adapted, not mirrored blindly.
- `prefers-reduced-motion` disables decorative Framer Motion transitions site-wide while keeping the cinematic canvas functional.
- The contact form is client-side only (no backend wired up) — hook up your own endpoint or a service like Formspree in `ContactSection.tsx`'s `handleSubmit`.
