import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../context/LangContext';

export default function Nav() {
  const { dict, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: dict.nav.about },
    { href: '#services', label: dict.nav.services },
    { href: '#work', label: dict.nav.work },
    { href: '#contact', label: dict.nav.contact },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] h-[var(--nav-h)] transition-colors duration-300 ${
        scrolled ? 'bg-bg/85 border-b border-line backdrop-blur-md' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-6 md:px-10">
        <a href="#" className="font-display text-sm font-semibold tracking-wide text-ink">
          M. ALMOMANI
        </a>

        <div className="hidden md:flex items-center gap-8 pt-0">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor="link"
              className="font-display text-sm md:text-base lg:text-[1rem] font-medium uppercase tracking-wider text-ink/90 transition-opacity duration-200 hover:opacity-70"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
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
              onClick={() => setOpen(false)}
              className="font-display text-base font-medium uppercase tracking-wider text-ink/90 py-3"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-display text-base font-medium uppercase tracking-wider text-ink py-3"
          >
            {dict.nav.hire}
          </a>
        </div>
      )}
    </nav>
  );
}
