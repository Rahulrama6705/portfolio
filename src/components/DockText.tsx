import { useRef, type MouseEvent } from 'react'

export default function DockText({ text, className }: { text: string; className?: string }) {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const words = text.split(' ')

  const handleMove = (e: MouseEvent<HTMLSpanElement>) => {
    const mouseX = e.clientX
    wordRefs.current.forEach((el) => {
      if (!el) return
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const dist = Math.abs(mouseX - cx)
      const max = 40
      const scale = dist < max ? 1 + 0.3 * (1 - dist / max) : 1
      el.style.transform = `scale(${scale})`
    })
  }

  const handleLeave = () => {
    wordRefs.current.forEach((el) => {
      if (el) el.style.transform = 'scale(1)'
    })
  }

  return (
    <span onMouseMove={handleMove} onMouseLeave={handleLeave} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          ref={(el) => {
            wordRefs.current[i] = el
          }}
          className="dock-word"
        >
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  )
}
