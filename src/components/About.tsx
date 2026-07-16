import { motion } from 'framer-motion'
import { certifications, education, profile } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="relative z-[1] mx-auto max-w-[1100px] px-[6vw] py-[100px]">
      <SectionHeading index="01 —" title="About" />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal direction="left" distance={70}>
          <motion.p
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="text-[16.5px] leading-[1.85] text-paper/75"
          >
            {profile.bio}
          </motion.p>
        </Reveal>

        <div className="flex flex-col gap-5">
          <Reveal direction="right" distance={70}>
            <motion.div
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.25 }}
              className="rounded-[20px] border border-white/10 bg-white/[0.03] px-6 py-[22px] transition-colors hover:border-accent-light/50"
            >
              <p className="mb-2 font-mono text-[11px] tracking-[0.06em] text-accent-light">EDUCATION</p>
              <p className="mb-1 font-display text-base font-semibold text-[#f2f2f7]">{education.school}</p>
              <p className="mb-1 text-sm text-paper/65">{education.degree}</p>
              <p className="font-mono text-[12.5px] text-paper/45">{education.dates}</p>
            </motion.div>
          </Reveal>

          <Reveal direction="bottom" distance={60}>
            <motion.div
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.25 }}
              className="rounded-[20px] border border-white/10 bg-white/[0.03] px-6 py-[22px] transition-colors hover:border-accent-light/50"
            >
              <p className="mb-3 font-mono text-[11px] tracking-[0.06em] text-accent-light">CERTIFICATIONS</p>
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
                    className="relative mb-2 pl-3.5 text-sm text-paper/75"
                  >
                    <span className="absolute left-0 text-accent-pink">·</span>
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
