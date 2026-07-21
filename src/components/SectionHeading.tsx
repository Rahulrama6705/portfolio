import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function SectionHeading({ index, title }: { index: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'start 55%'],
  })

  const clipRight = useTransform(scrollYProgress, [0, 1], [100, 0])
  const clipPath = useTransform(clipRight, (v) => `inset(0 ${v}% 0 0)`)
  const x = useTransform(scrollYProgress, [0, 1], [18, 0])

  return (
    <div ref={ref} className="mb-8">
      <p className="mb-2.5 font-serif text-lg font-bold tracking-[0.1em] text-accent">{index}</p>
      <h2 className="inline-block font-serif text-[clamp(38px,5vw,54px)] font-bold text-ink">
        <motion.span style={{ clipPath, x }} className="inline-block">
          {title}
        </motion.span>
      </h2>
    </div>
  )
}
