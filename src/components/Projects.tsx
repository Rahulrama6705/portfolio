import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { projects } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import DockText from './DockText'

export default function Projects() {
  return (
    <section id="projects" className="relative z-[1] mx-auto max-w-[1200px] px-[6vw] py-[100px]">
      <SectionHeading index="03 — PROJECTS" title="Projects" />

      <div className="flex flex-col gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} direction={i % 2 === 0 ? 'left' : 'right'} distance={70}>
            <motion.div
              whileHover={{ scale: 1.02, borderColor: 'rgba(63,138,131,0.5)' }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3.5 rounded-md border border-ink/10 border-l-2 border-l-accent bg-[rgba(120,90,50,0.045)] px-8 py-[30px] hover:shadow-[0_16px_40px_rgba(28,74,70,0.18)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-2xl font-bold text-ink">{p.title}</h3>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="whitespace-nowrap font-serif text-base font-bold text-ink/60">{p.dates}</span>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="text-ink/40 transition-colors hover:text-accent-light"
                    >
                      <Github size={17} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-xl font-medium leading-[1.9] text-ink/80">
                <DockText text={p.description} />
              </p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.1 }}
                    className="inline-block rounded border border-accent/30 bg-accent/10 px-[11px] py-1.5 font-serif text-base font-bold text-accent"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
