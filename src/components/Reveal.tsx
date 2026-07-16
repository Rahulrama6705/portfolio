import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Direction = 'up' | 'left' | 'right' | 'bottom'

const AXIS: Record<Direction, { x?: [number, number]; y?: [number, number] }> = {
  up: { y: [1, 0] },
  bottom: { y: [-1, 0] },
  left: { x: [1, 0] },
  right: { x: [-1, 0] },
}

export default function Reveal({
  children,
  direction = 'up',
  distance = 60,
  blur = 8,
  className,
}: {
  children: ReactNode
  direction?: Direction
  distance?: number
  blur?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'start 40%'],
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true })
  const eased = useTransform(progress, (p) => 1 - Math.pow(1 - p, 3))

  const axis = AXIS[direction]
  const yRange = axis.y ? [axis.y[0] * distance, 0] : [0, 0]
  const xRange = axis.x ? [axis.x[0] * distance, 0] : [0, 0]

  const y = useTransform(eased, [0, 1], yRange)
  const x = useTransform(eased, [0, 1], xRange)
  const opacity = eased
  const filter = useTransform(eased, (p) => `blur(${(1 - p) * blur}px)`)

  return (
    <motion.div ref={ref} style={{ x, y, opacity, filter }} className={className}>
      {children}
    </motion.div>
  )
}
