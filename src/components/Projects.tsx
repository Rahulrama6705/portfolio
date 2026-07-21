import { Github } from 'lucide-react'
import { projects } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="relative z-[1] mx-auto max-w-[980px] px-[6vw] py-20">
      <SectionHeading index="03 · Projects" title="Selected projects" />

      <div className="flex flex-col gap-7">
        {projects.map((p) => (
          <Reveal key={p.title} distance={16}>
            <div className="overflow-hidden rounded-xl border border-ink/10 bg-white/[0.03] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-ink/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
              {p.image && (
                <div className="bg-paperDeep px-3 pb-3 pt-3">
                  <div className="mb-2 flex items-center gap-1.5 px-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                  </div>
                  <div className="aspect-video w-full overflow-hidden rounded-md border border-ink/10 bg-ink/[0.03] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]">
                    <img
                      src={p.image}
                      alt={`${p.title} screenshot`}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="font-serif text-[22px] font-semibold text-ink">{p.title}</h3>
                  <div className="flex shrink-0 items-center gap-2.5 pt-0.5">
                    <span className="whitespace-nowrap font-sans text-[16px] text-ink/45">{p.dates}</span>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} on GitHub`}
                        className="text-ink/35 transition-colors hover:text-accent-light"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mb-3.5 font-sans text-[18px] leading-[1.65] text-ink/70">{p.description}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-sans text-[16px] text-ink/45">
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
