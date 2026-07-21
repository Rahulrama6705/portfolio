import { motion } from 'framer-motion'
import { useState, type MouseEvent } from 'react'
import { profile } from '../data'
import TypewriterText from './TypewriterText'

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
  const [glow, setGlow] = useState({ x: 50, y: 40 })

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <section
      id="hero"
      onMouseMove={onMouseMove}
      className="relative z-[1] flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-[6vw] text-center"
    >
      <div
        className="pointer-events-none absolute h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[10px] transition-[left,top] duration-300 ease-out"
        style={{
          left: `${glow.x}%`,
          top: `${glow.y}%`,
          background: 'radial-gradient(circle, rgba(124,92,255,0.16), transparent 70%)',
        }}
      />

      <motion.div variants={container} initial="hidden" animate="show" className="relative">
        <motion.p
          variants={item}
          className="mb-5 font-sans text-[15px] font-semibold uppercase tracking-[0.24em] text-ink/40"
        >
          Open to opportunities
        </motion.p>

        <h1 className="mb-4 flex justify-center gap-x-5 overflow-hidden font-serif text-[clamp(52px,8vw,102px)] font-bold leading-[1.02] tracking-tight text-ink">
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

        <motion.div variants={item} className="mb-8 h-10">
          <p className="font-serif text-[clamp(22px,2.6vw,30px)] font-medium text-ink/85">
            <TypewriterText words={['AI/ML Engineer', 'LLM Builder', 'Deep Learning Researcher']} />
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-[600px] font-sans text-[18px] leading-[1.75] text-ink/60"
        >
          {profile.blurb}
        </motion.p>

        <motion.div variants={item} className="mb-10 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 font-sans text-[16px] font-semibold text-white no-underline shadow-[0_0_24px_rgba(124,92,255,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(124,92,255,0.5)]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-ink/15 px-6 py-3 font-sans text-[16px] font-semibold text-ink no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-light hover:text-accent-light"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div variants={item} className="flex justify-center gap-6 font-sans text-[15px] text-ink/45">
          <a href={profile.github} target="_blank" rel="noreferrer" className="no-underline transition-colors hover:text-accent-light">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="no-underline transition-colors hover:text-accent-light">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="no-underline transition-colors hover:text-accent-light">
            Email
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
