import { motion } from 'framer-motion'
import { profile } from '../data'
import MagneticLink from './MagneticLink'

export default function Contact() {
  return (
    <section id="contact" className="relative z-[1] mx-auto max-w-[800px] px-[6vw] pb-[140px] pt-[100px] text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-2.5 font-serif text-lg font-bold tracking-[0.1em] text-accent"
      >
        05 — CONTACT
      </motion.p>
      <motion.h2
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 inline-block font-serif text-[clamp(40px,6vw,63px)] font-bold text-ink"
      >
        Have something in mind? <span className="text-accent-light">Let&apos;s talk.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <MagneticLink
          href={`mailto:${profile.email}`}
          className="mb-8 inline-block rounded-2xl bg-accent px-[38px] py-[18px] font-serif text-xl font-bold text-white no-underline"
        >
          {profile.email}
        </MagneticLink>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-7 font-serif text-lg font-bold"
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-[7px] text-ink/70 no-underline transition-colors hover:text-accent-light"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
          </svg>
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-[7px] text-ink/70 no-underline transition-colors hover:text-accent-light"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
          LinkedIn
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, '')}`}
          className="flex items-center gap-[7px] text-ink/70 no-underline transition-colors hover:text-accent-light"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 5a2 2 0 0 1 2-2z" />
          </svg>
          {profile.phone}
        </a>
      </motion.div>

      <p className="mt-[70px] font-serif text-xs font-bold text-ink/55">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  )
}
