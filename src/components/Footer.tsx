import { ArrowUp, MessageCircle } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { useLenis } from '../context/SmoothScroll';
import { contactLinks } from '../data/content';
import { GithubIcon, InstagramIcon } from './icons/BrandIcons';

export default function Footer() {
  const { dict } = useLang();
  const lenis = useLenis();

  const socials = [
    { icon: GithubIcon, href: contactLinks.github, label: 'GitHub' },
    { icon: MessageCircle, href: contactLinks.whatsappUrl, label: 'WhatsApp' },
    { icon: InstagramIcon, href: contactLinks.instagramUrl, label: 'Instagram' },
  ];

  function scrollTop() {
    if (lenis) lenis.scrollTo(0, { duration: 1.9 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="relative z-10 border-t border-line bg-bg py-9">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 md:px-10">
        <span className="text-[0.82rem] text-mist">{dict.footer.copy}</span>
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line text-mist transition-colors duration-200 hover:border-line-hi hover:text-ink"
            >
              <s.icon size={16} />
            </a>
          ))}
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-mist transition-colors duration-200 hover:border-line-hi hover:text-ink"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
