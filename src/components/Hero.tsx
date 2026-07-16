import { motion } from 'framer-motion'
import { useState, type MouseEvent } from 'react'
import { profile } from '../data'
import MagneticLink from './MagneticLink'

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
      className="relative z-[1] flex min-h-[92vh] flex-col items-center justify-center px-[6vw] text-center"
    >
      <div
        className="pointer-events-none absolute h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[left,top] duration-[400ms] ease-out"
        style={{
          left: `${glow.x}%`,
          top: `${glow.y}%`,
          background: 'radial-gradient(circle, rgba(108,92,231,0.16), transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-[18px] font-mono text-[15px] tracking-[0.06em] text-accent-light">Hi, I&apos;m</p>

        <motion.h1
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="mb-5 inline-block font-display text-[clamp(48px,8vw,96px)] font-bold leading-none text-[#f5f5f9]"
        >
          {profile.name}
        </motion.h1>

        <p className="gradient-text mb-7 font-display text-[clamp(22px,3vw,32px)] font-semibold">
          {profile.role}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="mx-auto mb-10 max-w-[640px] text-[17px] leading-[1.7] text-paper/70">
            {profile.blurb}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-9 flex flex-wrap justify-center gap-4"
        >
          <MagneticLink
            href="#projects"
            className="rounded-xl bg-gradient-to-r from-accent to-accent-light px-[26px] py-[13px] font-display text-[15px] font-semibold text-white no-underline shadow-[0_8px_24px_rgba(108,92,231,0.3)]"
          >
            View my work
          </MagneticLink>
          <MagneticLink
            href="#contact"
            className="rounded-xl border border-white/[0.18] px-[26px] py-[13px] font-display text-[15px] font-semibold text-[#f2f2f7] no-underline transition-colors hover:border-accent-light hover:text-accent-light"
          >
            Get in touch
          </MagneticLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex justify-center gap-5"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-paper/60 transition-colors hover:text-accent-light"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-paper/60 transition-colors hover:text-accent-light"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-paper/60 transition-colors hover:text-accent-light"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
              <path d="M3 6.5l9 6.5 9-6.5" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
