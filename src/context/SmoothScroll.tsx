import Lenis from 'lenis';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

const LenisContext = createContext<Lenis | null>(null);

/**
 * Wraps the app and drives ONE shared Lenis instance.
 *
 * Why a manual rAF loop instead of Lenis's built-in autoRaf?
 * Because our cinematic hero (`useCinematicScroll`) already listens to the
 * native `scroll` event via `window.addEventListener('scroll', ...)`. Lenis
 * scrolls the *real* document (it doesn't fake a virtual scrollbar unless you
 * pass a custom wrapper/content), so native `scroll` events keep firing on
 * every Lenis-driven frame — the canvas sequence stays perfectly in sync
 * without any extra code.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return; // respect OS-level accessibility preference — no smoothing at all

    const instance = new Lenis({
      // ── "WEIGHT" DIAL #1: duration ───────────────────────────────────────
      // How long (in seconds) it takes the scroll to settle after input stops.
      // Lower (0.6–0.9)  = snappy / light, feels closer to native scroll.
      // Higher (1.2–2.0) = heavy, syrupy, luxury-editorial-site feel.
      // Bumped up from 1.35 → 1.8 for a noticeably heavier, more "syrupy" feel.
      duration: 1.8,

      // ── "WEIGHT" DIAL #2: easing ──────────────────────────────────────────
      // This is a custom exponential ease-out — fast start, long soft tail.
      // That long tail is what reads as "weight"/momentum rather than a
      // linear slide. Swap the exponent (14 below) for a snappier (6-8) or
      // heavier (16-20) stop. Raised from 10 → 14 to stretch the tail further,
      // reinforcing the heavier duration above.
      easing: (t: number) => 1 - Math.pow(2, -14 * t),

      orientation: 'vertical',
      gestureOrientation: 'vertical',

      // Desktop mouse wheel gets the smoothing.
      smoothWheel: true,
      // How many wheel "ticks" translate to scroll distance — lower = heavier/slower per tick.
      // Nudged down slightly so each wheel notch covers less distance, which
      // reads as more resistance/weight under the cursor.
      wheelMultiplier: 0.9,

      // ── MOBILE SAFETY ─────────────────────────────────────────────────────
      // `syncTouch: false` (the default) means touch/swipe scrolling stays
      // 100% native — no Lenis interpolation is applied on touch input at
      // all. This is intentional: iOS/Android already have excellent native
      // momentum scrolling, and fighting it with a JS-driven inertia layer is
      // the #1 cause of janky, laggy-feeling mobile portfolios. Do not flip
      // this to `true` unless you've tested extensively on real devices.
      syncTouch: false,

      touchMultiplier: 1,
    });

    setLenis(instance);

    // Manual rAF loop (recommended by Lenis) instead of `autoRaf: true` —
    // keeps us in control if we ever add GSAP ScrollTrigger or need to pause
    // the loop entirely (see `lenis.stop()` / `lenis.start()` below).
    let rafId: number;
    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

/**
 * Returns the shared Lenis instance (or null if reduced-motion / not yet
 * mounted). Use `lenis?.scrollTo(target)` for anchor links, and
 * `lenis?.stop()` / `lenis?.start()` to pause smoothing while a modal,
 * mobile menu, or any full-screen overlay is open.
 */
export function useLenis() {
  return useContext(LenisContext);
}
