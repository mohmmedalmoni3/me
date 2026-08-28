import { motion } from 'framer-motion';
import { Layers, Server, Gamepad2, Gauge } from 'lucide-react';
import { useLang } from '../context/LangContext';

const icons = [Layers, Server, Gamepad2, Gauge];

export default function ServicesSection() {
  const { dict } = useLang();

  return (
    <section id="services" className="relative z-10 bg-bg py-28 md:py-32 border-t border-line">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <div className="font-display text-xs uppercase tracking-[0.24em] text-mist">{dict.services.label}</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ink">{dict.services.title}</h2>
          <p className="mt-4 text-[0.95rem] text-ink/60 leading-relaxed">{dict.services.sub}</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {dict.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 rounded-2xl border border-line bg-panel p-6 transition-colors duration-200 hover:border-line-hi"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line-hi text-ink">
                  <Icon size={19} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-[0.86rem] leading-relaxed text-ink/55">{item.desc}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
