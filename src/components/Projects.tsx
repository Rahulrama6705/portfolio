import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { projects } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="relative z-[1] mx-auto max-w-[1200px] px-[6vw] py-[100px]">
      <SectionHeading index="03 —" title="Projects" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} direction={i % 2 === 0 ? 'left' : 'right'} distance={70}>
            <motion.div
              whileHover={{ scale: 1.04, borderColor: 'rgba(162,155,254,0.5)' }}
              transition={{ duration: 0.3 }}
              className="flex h-full flex-col gap-3.5 rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:shadow-[0_16px_40px_rgba(108,92,231,0.18)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-[#f5f5f9]">{p.title}</h3>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="whitespace-nowrap font-mono text-[11.5px] text-paper/45">{p.dates}</span>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="text-paper/40 transition-colors hover:text-accent-light"
                    >
                      <Github size={15} />
                    </a>
                  )}
                </div>
              </div>
              <p className="flex-1 text-[14.5px] leading-[1.7] text-paper/70">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.1 }}
                    className="inline-block rounded-lg border border-accent/30 bg-accent/[0.12] px-2.5 py-1 font-mono text-[11.5px] text-[#c8c3fb]"
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
