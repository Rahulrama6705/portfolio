import { certifications, education, profile } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="relative z-[1] mx-auto max-w-[1100px] px-[6vw] py-24">
      <SectionHeading index="01 · About" title="About" />

      <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr]">
        <Reveal direction="left">
          <p className="font-serif text-[22px] leading-[1.85] text-ink/75">{profile.bio}</p>
        </Reveal>

        <Reveal direction="right">
          <div className="flex flex-col gap-10">
            <div>
              <p className="mb-3 font-serif text-[17px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                Education
              </p>
              <p className="mb-1 font-serif text-xl font-semibold text-ink">{education.school}</p>
              <p className="mb-1 font-serif text-[19px] text-ink/65">{education.degree}</p>
              <p className="font-serif text-[17px] text-ink/45">
                {education.dates} · CGPA {education.cgpa}
              </p>
            </div>

            <div>
              <p className="mb-3 font-serif text-[17px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                Certifications
              </p>
              <ul className="flex flex-col gap-2">
                {certifications.map((c) => (
                  <li key={c} className="font-serif text-[18.5px] leading-snug text-ink/70">
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
