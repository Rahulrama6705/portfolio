import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Direction = 'up' | 'left' | 'right'

const AXIS: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 1 },
  left: { x: 1 },
  right: { x: -1 },
}

export default function Reveal({
  children,
  direction = 'up',
  distance = 24,
  className,
}: {
  children: ReactNode
  direction?: Direction
  distance?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 92%', 'start 65%'],
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true })
  const eased = useTransform(progress, (p) => 1 - Math.pow(1 - p, 3))

  const axis = AXIS[direction]
  const y = useTransform(eased, [0, 1], [axis.y ? axis.y * distance : 0, 0])
  const x = useTransform(eased, [0, 1], [axis.x ? axis.x * distance : 0, 0])

  return (
    <motion.div ref={ref} style={{ x, y, opacity: eased }} className={className}>
      {children}
    </motion.div>
  )
}
