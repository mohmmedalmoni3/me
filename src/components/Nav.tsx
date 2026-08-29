import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { useLenis } from '../context/SmoothScroll';

export default function Nav() {
  const { dict, lang, toggle } = useLang();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('');
  const rafRef = useRef<number | null>(null);

  const links = [
    { href: '#about', label: dict.nav.about },
    { href: '#services', label: dict.nav.services },
    { href: '#work', label: dict.nav.work },
    { href: '#contact', label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);

        let current = '';
        for (const l of links) {
          const el = document.querySelector(l.href);
          if (el && el.getBoundingClientRect().top <= 140) current = l.href;
        }
        setActive(current);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  // Lock background scrolling (and pause Lenis's own smoothing) while the
  // mobile menu overlay is open — otherwise the page behind it keeps
  // scrolling under the user's thumb.
  useEffect(() => {
    if (open) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, lenis]);

  function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    // `offset` pulls the target up so it doesn't land hidden under the fixed nav bar.
    if (lenis) {
      lenis.scrollTo(el as HTMLElement, { offset: -84, duration: 1.6 });
    } else {
      // Fallback for prefers-reduced-motion users (Lenis is never
      // instantiated in that case — see SmoothScroll.tsx).
      (el as HTMLElement).scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] h-[var(--nav-h)] transition-colors duration-300 ${
        scrolled ? 'bg-bg/85 border-b border-line backdrop-blur-md' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-[2px] bg-ink/70 origin-left transition-transform duration-150 ease-linear"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <div className="container mx-auto flex h-full items-center justify-between px-6 md:px-10">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (lenis) lenis.scrollTo(0, { duration: 1.6 });
            else window.scrollTo({ top: 0 });
          }}
          className="font-display text-sm font-semibold tracking-wide text-ink"
        >
          M. ALMOMANI
        </a>

        <div className="hidden md:flex items-center gap-8 pt-0">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollToSection(e, l.href)}
              data-cursor="link"
              aria-current={active === l.href ? 'true' : undefined}
              className={`font-display text-sm md:text-base lg:text-[1rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 ${
                active === l.href ? 'text-ink opacity-100 underline underline-offset-8 decoration-line-hi' : 'text-ink/90'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            data-cursor="cta"
            className="font-display text-sm font-medium uppercase tracking-wider text-ink border border-line-hi rounded-full px-5 py-2 transition-opacity duration-200 hover:opacity-70"
          >
            {dict.nav.hire}
          </a>
          <button
            onClick={toggle}
            className="font-display text-xs font-semibold tracking-widest text-mist border border-line rounded-full w-9 h-9 grid place-items-center transition-colors hover:text-ink hover:border-line-hi"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="font-display text-xs font-semibold tracking-widest text-mist border border-line rounded-full w-9 h-9 grid place-items-center"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="text-ink"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-bg/97 border-b border-line px-6 pb-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollToSection(e, l.href)}
              className="font-display text-base font-medium uppercase tracking-wider text-ink/90 py-3"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="font-display text-base font-medium uppercase tracking-wider text-ink py-3"
          >
            {dict.nav.hire}
          </a>
        </div>
      )}
    </nav>
  );
}
