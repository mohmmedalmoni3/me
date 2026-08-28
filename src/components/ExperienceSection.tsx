import { motion } from 'framer-motion';
import { Briefcase, Code2 } from 'lucide-react';
import { useLang } from '../context/LangContext';

const icons = [Briefcase, Code2];

export default function ExperienceSection() {
  const { dict } = useLang();

  return (
    <section id="experience" className="relative z-10 bg-bg py-28 md:py-32 border-t border-line">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <div className="font-display text-xs uppercase tracking-[0.24em] text-mist">{dict.experience.label}</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ink">{dict.experience.title}</h2>
        </motion.div>

        <div className="mt-14 flex flex-col">
          {dict.experience.items.map((item, i) => {
            const Icon = icons[i] ?? Briefcase;
            const isLast = i === dict.experience.items.length - 1;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid grid-cols-[40px_1fr] gap-5 pb-9"
              >
                {!isLast && (
                  <span className="absolute left-5 top-10 bottom-0 w-px bg-line-hi" aria-hidden />
                )}
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-hi text-ink">
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                    <div>
                      <div className="font-display text-base font-bold text-ink">{item.title}</div>
                      {item.company && <div className="text-[0.82rem] text-mist">{item.company}</div>}
                    </div>
                    <span className="font-display text-xs text-ink/50">{item.period}</span>
                  </div>
                  <p className="mt-2.5 text-[0.86rem] leading-relaxed text-ink/55">{item.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="font-display text-[10px] uppercase tracking-[0.08em] text-mist border border-line rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
