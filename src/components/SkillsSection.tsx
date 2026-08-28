import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LangContext';
import { skillsData } from '../data/content';

type Tab = 'frontend' | 'backend' | 'other';

export default function SkillsSection() {
  const { dict } = useLang();
  const [tab, setTab] = useState<Tab>('frontend');

  const tabs: Tab[] = ['frontend', 'backend', 'other'];

  return (
    <section id="skills" className="relative z-10 bg-bg py-28 md:py-32 border-t border-line">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <div className="font-display text-xs uppercase tracking-[0.24em] text-mist">{dict.skills.label}</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ink">{dict.skills.title}</h2>
          <p className="mt-4 text-[0.95rem] text-ink/60 leading-relaxed">{dict.skills.sub}</p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2.5 font-display text-sm font-medium transition-colors duration-200 ${
                tab === t ? 'bg-ink text-bg' : 'bg-panel text-mist border border-line hover:text-ink'
              }`}
            >
              {dict.skills.tabs[t]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {skillsData[tab].map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center rounded-xl border border-line bg-panel px-4 py-5 text-center transition-colors duration-200 hover:border-line-hi"
              >
                <span className="font-display text-sm font-medium text-ink/85">{skill}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
