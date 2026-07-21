import { motion } from 'framer-motion'
import { skills } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const SKILL_ICONS: Record<string, string> = {
  Python: 'python',
  Java: 'openjdk',
  HTML: 'html5',
  TensorFlow: 'tensorflow',
  FastAPI: 'fastapi',
  Pandas: 'pandas',
  'Scikit-learn': 'scikitlearn',
  Git: 'git',
  'IntelliJ IDEA': 'intellijidea',
  Streamlit: 'streamlit',
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-[1] mx-auto max-w-[1100px] px-[6vw] py-[100px]">
      <SectionHeading index="04 — SKILLS" title="Skills" />

      <div className="flex flex-col gap-6">
        {skills.map((g, i) => (
          <Reveal key={g.name} direction={i % 2 === 0 ? 'left' : 'right'} distance={50}>
            <motion.div
              whileHover={{ scale: 1.015, borderColor: 'rgba(63,138,131,0.4)' }}
              transition={{ duration: 0.25 }}
              className="rounded-md border border-ink/10 border-l-2 border-l-accent bg-[rgba(120,90,50,0.045)] px-7 py-[26px]"
            >
              <p className="mb-3.5 font-serif text-lg font-bold tracking-[0.06em] text-accent">{g.name}</p>
              <div className="flex flex-wrap gap-[9px]">
                {g.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center gap-2 rounded border border-ink/10 bg-[rgba(120,90,50,0.05)] px-[15px] py-2 text-lg font-bold text-ink/90 transition-colors hover:border-accent-light hover:text-accent-light"
                  >
                    {SKILL_ICONS[item] && (
                      <img
                        src={`https://cdn.simpleicons.org/${SKILL_ICONS[item]}/1c4a46`}
                        alt=""
                        className="h-4 w-4"
                        onError={(e) => {
                          ;(e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                    )}
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
