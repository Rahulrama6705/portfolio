import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-[1] flex min-h-[88vh] flex-col items-center justify-center px-[6vw] text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-5 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-ink/45">
          {profile.location} · Open to opportunities
        </p>

        <h1 className="mb-3 font-serif text-[clamp(52px,8vw,104px)] font-bold leading-[1.02] text-ink">
          {profile.name}
        </h1>

        <p className="mb-8 font-serif text-[clamp(24px,3vw,32px)] italic text-accent">{profile.role}</p>

        <p className="mx-auto mb-10 max-w-[560px] font-sans text-[17px] leading-[1.75] text-ink/70">
          {profile.blurb}
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-ink px-6 py-3 font-sans text-[14px] font-semibold text-paper no-underline transition-colors duration-200 hover:bg-accent"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-ink/20 px-6 py-3 font-sans text-[14px] font-semibold text-ink no-underline transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        <div className="flex justify-center gap-6 font-sans text-[14px] text-ink/50">
          <a href={profile.github} target="_blank" rel="noreferrer" className="no-underline transition-colors hover:text-accent">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="no-underline transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="no-underline transition-colors hover:text-accent">
            Email
          </a>
        </div>
      </motion.div>
    </section>
  )
}
