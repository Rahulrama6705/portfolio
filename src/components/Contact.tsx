import { profile } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="relative z-[1] mx-auto max-w-[700px] px-[6vw] py-24 pb-32 text-center">
      <Reveal>
        <p className="mb-2 font-sans text-[17px] font-semibold uppercase tracking-[0.18em] text-accent">
          05 · Contact
        </p>
        <h2 className="mb-5 font-serif text-[clamp(34px,4.5vw,50px)] font-bold text-ink">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mb-9 max-w-[480px] font-sans text-[20px] leading-[1.7] text-ink/65">
          Open to internships, research collaborations, and AI/ML engineering roles. Reach out — I usually reply
          within a day.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mb-8 inline-block rounded-md bg-ink px-7 py-3.5 font-sans text-[19px] font-semibold text-paper no-underline transition-colors duration-200 hover:bg-accent"
        >
          {profile.email}
        </a>

        <div className="flex flex-wrap justify-center gap-6 font-sans text-[18px] text-ink/50">
          <a href={profile.github} target="_blank" rel="noreferrer" className="no-underline transition-colors hover:text-accent">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="no-underline transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="no-underline transition-colors hover:text-accent">
            {profile.phone}
          </a>
        </div>
      </Reveal>

      <p className="mt-20 font-sans text-[16px] text-ink/35">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  )
}
