import { useEffect, useRef, useState } from 'react'

const links = ['about', 'experience', 'projects', 'skills', 'contact']

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [progress, setProgress] = useState(0)
  const lastY = useRef(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const doc = document.documentElement
        const scrollable = doc.scrollHeight - window.innerHeight
        const y = window.scrollY
        setProgress(scrollable > 0 ? Math.max(0, Math.min(1, y / scrollable)) : 0)
        setHidden(y > 140 && y > lastY.current)
        lastY.current = y
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between overflow-hidden border-b border-[rgba(30,25,15,0.1)] bg-[rgba(239,234,245,0.75)] px-[6vw] py-[18px] backdrop-blur-md transition-transform duration-300 ease-out"
      style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}
    >
      <div
        className="absolute -bottom-px left-0 h-0.5 bg-gradient-to-r from-accent via-accent-light to-accent-soft transition-[width] duration-100 ease-linear"
        style={{ width: `${progress * 100}%` }}
      />
      <a href="#hero" className="font-serif text-2xl text-ink no-underline">
        Rahul Rama
      </a>
      <div className="flex gap-7 font-serif text-[19px] font-bold">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            className="bg-[linear-gradient(#3f8a83,#3f8a83)] bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] pb-0.5 text-ink/70 no-underline transition-[background-size,color] duration-300 ease-out hover:bg-[length:100%_1px] hover:text-accent-light"
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  )
}
