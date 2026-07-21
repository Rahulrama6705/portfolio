import { experience } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="relative z-[1] mx-auto max-w-[820px] px-[6vw] py-24">
      <SectionHeading index="02 · Experience" title="Experience" />

      <div className="flex flex-col">
        {experience.map((job, i) => (
          <Reveal key={job.role} distance={16}>
            <div className={`border-t border-ink/10 py-8 ${i === experience.length - 1 ? 'border-b' : ''}`}>
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-xl font-semibold text-ink">{job.role}</h3>
                <span className="font-sans text-[13px] font-medium text-ink/45">{job.dates}</span>
              </div>
              <p className="mb-3 font-sans text-[14.5px] font-medium text-accent">{job.org}</p>
              <ul className="flex flex-col gap-1.5">
                {job.bullets.map((b) => (
                  <li key={b} className="font-sans text-[15px] leading-[1.7] text-ink/70">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
