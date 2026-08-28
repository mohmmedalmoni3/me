import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { contactLinks } from '../data/content';
import { DiscordIcon, InstagramIcon } from './icons/BrandIcons';

export default function ContactSection() {
  const { dict } = useLang();
  const [sent, setSent] = useState(false);

  const links = [
    { icon: Mail, label: dict.contact.email, value: contactLinks.email, href: `mailto:${contactLinks.email}` },
    { icon: DiscordIcon, label: dict.contact.discord, value: '@mohammed.dev', href: contactLinks.discordUrl },
    { icon: MessageCircle, label: dict.contact.whatsapp, value: contactLinks.whatsapp, href: contactLinks.whatsappUrl },
    { icon: InstagramIcon, label: dict.contact.instagram, value: contactLinks.instagram, href: contactLinks.instagramUrl },
  ];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="relative z-10 bg-bg py-28 md:py-36 border-t border-line">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-display text-xs uppercase tracking-[0.24em] text-mist">{dict.contact.label}</div>
          <h2 className="mt-4 hero-heading font-display text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.95]">
            {dict.contact.title}
          </h2>
          <p className="mt-5 max-w-md text-[0.95rem] text-ink/60 leading-relaxed">{dict.contact.sub}</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-11 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-display text-xl font-bold text-ink">{dict.contact.ready}</h3>
            <p className="mt-3 text-[0.9rem] text-ink/55 leading-relaxed">{dict.contact.desc}</p>

            <div className="mt-7 flex flex-col gap-2.5">
              {links.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="group flex items-center gap-4 rounded-xl border border-line bg-panel px-5 py-4 transition-all duration-200 hover:border-line-hi hover:translate-x-1 rtl:hover:-translate-x-1"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line-hi text-ink">
                      <Icon size={16} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[10px] uppercase tracking-[0.08em] text-mist">
                        {l.label}
                      </span>
                      <span className="block truncate font-display text-sm font-semibold text-ink">{l.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-panel p-6 md:p-7"
          >
            <div className="mb-4">
              <label htmlFor="f-name" className="mb-1.5 block font-display text-xs uppercase tracking-[0.08em] text-mist">
                {dict.contact.formName}
              </label>
              <input
                id="f-name"
                type="text"
                required
                className="w-full rounded-lg border border-line bg-black/30 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-line-hi"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="f-email" className="mb-1.5 block font-display text-xs uppercase tracking-[0.08em] text-mist">
                {dict.contact.formEmail}
              </label>
              <input
                id="f-email"
                type="email"
                required
                className="w-full rounded-lg border border-line bg-black/30 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-line-hi"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="f-message" className="mb-1.5 block font-display text-xs uppercase tracking-[0.08em] text-mist">
                {dict.contact.formMessage}
              </label>
              <textarea
                id="f-message"
                rows={5}
                required
                className="w-full rounded-lg border border-line bg-black/30 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-line-hi"
              />
            </div>
            <button
              type="submit"
              data-cursor="cta"
              className="w-full rounded-full bg-ink py-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-bg transition-opacity duration-200 hover:opacity-85"
            >
              {dict.contact.formSend}
            </button>
            {sent && <p className="mt-3 text-center text-[0.82rem] text-ink/70">{dict.contact.formSent}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
