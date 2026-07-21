import { Github } from 'lucide-react'
import { projects } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="relative z-[1] mx-auto max-w-[980px] px-[6vw] py-24">
      <SectionHeading index="03 · Projects" title="Selected projects" />

      <div className="flex flex-col gap-8">
        {projects.map((p) => (
          <Reveal key={p.title} distance={16}>
            <div className="overflow-hidden rounded-lg border border-ink/10 transition-colors duration-200 hover:border-ink/25">
              {p.image && (
                <div className="aspect-video w-full overflow-hidden border-b border-ink/10 bg-ink/[0.03]">
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-7">
                <div className="mb-2.5 flex items-start justify-between gap-3">
                  <h3 className="font-serif text-[23px] font-semibold text-ink">{p.title}</h3>
                  <div className="flex shrink-0 items-center gap-2.5 pt-0.5">
                    <span className="whitespace-nowrap font-sans text-[17px] text-ink/45">{p.dates}</span>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} on GitHub`}
                        className="text-ink/35 transition-colors hover:text-accent"
                      >
                        <Github size={19} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mb-4 font-sans text-[19px] leading-[1.7] text-ink/70">{p.description}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-sans text-[17px] text-ink/45">
                  {p.stack.map((t, i) => (
                    <span key={t}>
                      {t}
                      {i < p.stack.length - 1 && <span className="ml-3 text-ink/20">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
