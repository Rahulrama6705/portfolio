import { motion } from 'framer-motion'
import { skills } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="relative z-[1] mx-auto max-w-[1100px] px-[6vw] py-[100px]">
      <SectionHeading index="04 —" title="Skills" />

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.name} direction={i % 2 === 0 ? 'left' : 'right'} distance={50}>
            <motion.div
              whileHover={{ scale: 1.03, borderColor: 'rgba(162,155,254,0.4)' }}
              transition={{ duration: 0.25 }}
              className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="mb-3.5 font-mono text-xs tracking-[0.06em] text-accent-pink">{g.name}</p>
              <div className="flex flex-wrap gap-[9px]">
                {g.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    className="inline-block rounded-[10px] border border-white/10 bg-white/5 px-3.5 py-1.5 text-[13.5px] text-paper/85 transition-colors hover:border-accent-light hover:text-accent-light"
                  >
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
