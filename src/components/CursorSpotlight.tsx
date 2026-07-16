import { useEffect, useState } from 'react'

export default function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    let raf = 0
    const onMove = (e: MouseEvent) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY })
        setActive(true)
        raf = 0
      })
    }
    const onLeave = () => setActive(false)

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
      style={{
        opacity: active ? 1 : 0,
        background: `radial-gradient(circle 260px at ${pos.x}px ${pos.y}px, rgba(178,150,255,0.16), rgba(253,121,168,0.07) 45%, transparent 70%)`,
        mixBlendMode: 'screen',
      }}
    />
  )
}
