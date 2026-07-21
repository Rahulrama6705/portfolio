import { certifications, education, profile } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="relative z-[1] mx-auto max-w-[1100px] px-[6vw] py-20">
      <SectionHeading index="01 · About" title="About" />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal direction="left">
          <p className="font-sans text-[22px] leading-[1.8] text-ink/75">{profile.bio}</p>
        </Reveal>

        <Reveal direction="right">
          <div className="flex flex-col gap-5">
            <div className="rounded-xl border border-ink/10 bg-white/40 p-6 shadow-[0_1px_2px_rgba(36,31,25,0.04)]">
              <p className="mb-3 font-sans text-[16px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                Education
              </p>
              <p className="mb-1 font-serif text-xl font-semibold text-ink">{education.school}</p>
              <p className="mb-1 font-sans text-[19px] text-ink/65">{education.degree}</p>
              <p className="font-sans text-[16px] text-ink/45">
                {education.dates} · CGPA {education.cgpa}
              </p>
            </div>

            <div className="rounded-xl border border-ink/10 bg-white/40 p-6 shadow-[0_1px_2px_rgba(36,31,25,0.04)]">
              <p className="mb-3 font-sans text-[16px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                Certifications
              </p>
              <ul className="flex flex-col gap-2">
                {certifications.map((c) => (
                  <li key={c} className="font-sans text-[18px] leading-snug text-ink/70">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
