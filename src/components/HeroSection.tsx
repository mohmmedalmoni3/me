import { useLang } from '../context/LangContext';
import { useCinematicScroll } from '../hooks/useCinematicScroll';

export default function HeroSection() {
  const { dict } = useLang();
  const { wrapRef, canvasRef, progress } = useCinematicScroll();

  const showEyebrow = progress > 0.08 && progress < 0.85;
  const showName = progress > 0.55 && progress < 0.9;
  const showRole = progress > 0.62 && progress < 0.9;
  const hideHint = progress > 0.04;

  return (
    <div ref={wrapRef} className="relative" style={{ height: '420vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full object-cover" />

        {/* Vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 45%, transparent 40%, rgba(0,0,0,.55) 100%), linear-gradient(180deg, rgba(0,0,0,.4) 0%, transparent 22%, transparent 76%, rgba(0,0,0,.75) 100%)',
          }}
        />

        {/* Minimal top-left eyebrow, editorial */}
        <div className="pointer-events-none absolute inset-0 flex flex-col">
          <div
            className="px-6 md:px-10 pt-28 font-display text-xs tracking-[0.28em] uppercase text-ink/80 transition-all duration-500"
            style={{ opacity: showEyebrow ? 1 : 0, transform: showEyebrow ? 'none' : 'translateY(14px)' }}
          >
            {dict.hero.eyebrow}
          </div>

          <div className="flex-1 flex flex-col items-center justify-end text-center pb-[9vh] px-6">
            <h1
              className="hero-heading font-display font-extrabold uppercase leading-[0.92] tracking-tight transition-all duration-500"
              style={{
                fontSize: 'clamp(2.4rem, 9vw, 7.5rem)',
                opacity: showName ? 1 : 0,
                transform: showName ? 'none' : 'translateY(22px)',
              }}
            >
              Mohammed
              <br />
              Almomani
            </h1>
            <p
              className="mt-5 font-display text-base md:text-xl text-ink/80 transition-all duration-500"
              style={{ opacity: showRole ? 1 : 0, transform: showRole ? 'none' : 'translateY(16px)' }}
            >
              {dict.hero.role}
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-400"
          style={{ opacity: hideHint ? 0 : 1 }}
        >
          <span className="font-display text-[11px] tracking-[0.2em] uppercase text-mist">{dict.hero.scroll}</span>
          <div className="relative h-8 w-5 rounded-full border border-mist">
            <span className="absolute left-1/2 top-1.5 h-1.5 w-[3px] -translate-x-1/2 rounded-full bg-ink animate-[scrolldot_1.6s_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}
