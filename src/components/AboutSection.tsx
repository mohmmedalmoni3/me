import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function AboutSection() {
  const { dict } = useLang();
  const stats = [
    { num: '40+', label: dict.about.statProjects },
    { num: '3yr', label: dict.about.statExperience },
    { num: '100%', label: dict.about.statSatisfaction },
  ];

  return (
    <section id="about" className="relative z-10 bg-bg py-28 md:py-36">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <div className="font-display text-xs uppercase tracking-[0.24em] text-mist">{dict.about.label}</div>
          <h2
            className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-ink"
            dangerouslySetInnerHTML={{ __html: dict.about.title }}
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-5"
          >
            <p className="text-[0.98rem] leading-[1.85] text-ink/70">{dict.about.p1}</p>
            <p className="text-[0.98rem] leading-[1.85] text-ink/70">{dict.about.p2}</p>
            <p className="text-[0.98rem] leading-[1.85] text-ink/70">{dict.about.p3}</p>

            <div className="flex flex-wrap gap-9 pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-ink">{s.num}</div>
                  <div className="mt-1 font-display text-[11px] uppercase tracking-[0.1em] text-mist">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line bg-panel"
            style={{ background: 'linear-gradient(135deg, rgba(215,226,234,0.08), rgba(215,226,234,0.02))' }}
          >
            <img
              src="/portrait.jpg"
              alt="Mohammed Almomani"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 border-t border-line bg-bg/40 backdrop-blur-sm">
              <p className="font-display text-xs uppercase tracking-[0.16em] text-mist">Status</p>
              <p className="mt-1 font-display text-lg text-ink">Open to Freelance Work</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
