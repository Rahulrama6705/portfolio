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
    <div ref={ref} className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent-light">{index}</span>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        <motion.span style={{ clipPath, x }} className="inline-block">
          {title}
        </motion.span>
      </h2>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  )
}
