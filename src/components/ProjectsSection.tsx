import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '../context/LangContext';

function ProjectThumb({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="h-40 md:h-52 w-full"
        style={{ background: 'linear-gradient(135deg, rgba(215,226,234,0.10), rgba(215,226,234,0.02))' }}
      />
    );
  }

  return (
    <div className="h-40 md:h-52 w-full overflow-hidden bg-black/30">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
    </div>
  );
}

export default function ProjectsSection() {
  const { dict } = useLang();

  return (
    <section id="work" className="relative z-10 bg-bg py-28 md:py-32 border-t border-line">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <div className="font-display text-xs uppercase tracking-[0.24em] text-mist">{dict.projects.label}</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ink">{dict.projects.title}</h2>
          <p className="mt-4 text-[0.95rem] text-ink/60 leading-relaxed">{dict.projects.sub}</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {dict.projects.items.map((p, i) => (
            <motion.article
              key={p.title}
              data-cursor={p.link ? 'project' : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-line bg-panel transition-colors duration-200 hover:border-line-hi ${
                p.featured ? 'md:col-span-2' : ''
              }`}
            >
              <ProjectThumb src={p.image} alt={p.title} />
              <div className="p-6 md:p-7">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-display text-[10px] uppercase tracking-[0.08em] text-mist border border-line rounded-full px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-xl md:text-2xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-ink/55">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="font-display text-[10px] uppercase tracking-[0.08em] text-ink/50">
                      {t}
                      {t !== p.stack[p.stack.length - 1] && <span className="mx-1.5 text-mist">/</span>}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-medium text-ink transition-opacity duration-200 hover:opacity-70"
                  >
                    {dict.projects.viewLive} <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
