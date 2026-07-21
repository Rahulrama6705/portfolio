import { motion } from 'framer-motion'
import { certifications, education, profile } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import DockText from './DockText'

export default function About() {
  return (
    <section id="about" className="relative z-[1] mx-auto max-w-[1100px] px-[6vw] py-[100px]">
      <SectionHeading index="01 — ABOUT" title="About" />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal direction="left" distance={70}>
          <motion.p
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-medium leading-[1.9] text-ink/[0.88]"
          >
            <DockText text={profile.bio} />
          </motion.p>
        </Reveal>

        <div className="flex flex-col gap-5">
          <Reveal direction="right" distance={70}>
            <motion.div
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.25 }}
              className="rounded-md border border-ink/10 border-l-2 border-l-accent bg-[rgba(120,90,50,0.045)] px-[26px] py-6 transition-colors hover:border-accent-light/50"
            >
              <p className="mb-2 font-serif text-base font-bold tracking-[0.08em] text-accent">EDUCATION</p>
              <p className="mb-1 font-serif text-xl font-bold text-ink">{education.school}</p>
              <p className="mb-1 text-lg font-medium text-ink/70">{education.degree}</p>
              <p className="font-serif text-base font-bold text-ink/65">{education.dates}</p>
            </motion.div>
          </Reveal>

          <Reveal direction="bottom" distance={60}>
            <motion.div
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.25 }}
              className="rounded-md border border-ink/10 border-l-2 border-l-accent bg-[rgba(120,90,50,0.045)] px-[26px] py-6 transition-colors hover:border-accent-light/50"
            >
              <p className="mb-3 font-serif text-base font-bold tracking-[0.08em] text-accent">CERTIFICATIONS</p>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.06 }}
              >
                {certifications.map((c) => (
                  <motion.p
                    key={c}
                    variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                    className="relative mb-2 pl-3.5 text-lg text-ink/[0.88]"
                  >
                    <span className="absolute left-0 text-accent-soft">·</span>
                    {c}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
