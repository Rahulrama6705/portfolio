import { motion } from 'framer-motion'
import { profile } from '../data'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const nameWords = ['Rahul', 'Rama']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-[1] flex min-h-[88vh] flex-col items-center justify-center px-[6vw] text-center"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="mb-5 font-sans text-[16px] font-semibold uppercase tracking-[0.2em] text-ink/40"
        >
          Open to opportunities
        </motion.p>

        <h1 className="mb-4 flex justify-center gap-x-5 overflow-hidden font-serif text-[clamp(56px,8vw,108px)] font-bold leading-[1.02] text-ink">
          {nameWords.map((w) => (
            <motion.span
              key={w}
              variants={{
                hidden: { y: '110%' },
                show: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
              }}
              className="inline-block"
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.div variants={item} className="mb-8 flex flex-col items-center">
          <p className="font-serif text-[clamp(26px,3vw,34px)] italic text-clay">{profile.role}</p>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 56 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 h-[2px] rounded-full bg-accent-soft"
          />
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-[600px] font-sans text-[20px] leading-[1.75] text-ink/70"
        >
          {profile.blurb}
        </motion.p>

        <motion.div variants={item} className="mb-10 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-ink px-6 py-3 font-sans text-[17px] font-semibold text-paper no-underline transition-all duration-200 hover:bg-accent hover:-translate-y-0.5"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-ink/20 px-6 py-3 font-sans text-[17px] font-semibold text-ink no-underline transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div variants={item} className="flex justify-center gap-6 font-sans text-[17px] text-ink/50">
          <a href={profile.github} target="_blank" rel="noreferrer" className="no-underline transition-colors hover:text-accent">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="no-underline transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="no-underline transition-colors hover:text-accent">
            Email
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
