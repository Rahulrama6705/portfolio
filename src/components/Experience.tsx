import { motion } from 'framer-motion'
import { experience } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="relative z-[1] mx-auto max-w-[900px] px-[6vw] py-[100px]">
      <SectionHeading index="02 —" title="Experience" />

      <div className="relative pl-8">
        <div className="absolute bottom-1.5 left-[5px] top-1.5 w-0.5 bg-gradient-to-b from-accent via-accent-light to-accent-pink/30" />

        {experience.map((job, i) => (
          <Reveal key={job.role} direction={i % 2 === 0 ? 'left' : 'right'} distance={80}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="relative mb-11"
            >
              <div className="absolute -left-8 top-1.5 h-3 w-3 rounded-full border-2 border-accent-light bg-ink shadow-[0_0_12px_rgba(162,155,254,0.6)]" />
              <p className="mb-1.5 font-mono text-[12.5px] tracking-[0.04em] text-accent-light">{job.dates}</p>
              <h3 className="mb-0.5 font-display text-[19px] font-semibold text-[#f5f5f9]">{job.role}</h3>
              <p className="mb-3 text-sm text-paper/55">{job.org}</p>
              <ul className="m-0 flex flex-col gap-1.5 pl-[18px]">
                {job.bullets.map((b) => (
                  <li key={b} className="text-[14.5px] leading-[1.7] text-paper/72">
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
