import { useEffect, useRef, useState } from 'react'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > 8)
        setHidden(y > 160 && y > lastY.current)
        lastY.current = y
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-[6vw] py-4 backdrop-blur-md transition-all duration-300 ease-out"
      style={{
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        backgroundColor: scrolled ? 'rgba(250,247,241,0.85)' : 'rgba(250,247,241,0)',
        borderBottom: scrolled ? '1px solid rgba(38,33,27,0.08)' : '1px solid transparent',
      }}
    >
      <a href="#hero" className="flex items-center gap-2.5 no-underline">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent font-serif text-[15px] font-semibold italic text-paper">
          R
        </span>
        <span className="font-serif text-[20px] font-semibold text-ink">Rahul Rama</span>
      </a>
      <div className="flex gap-8 font-sans text-[17px] font-medium text-ink/60">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="no-underline transition-colors duration-200 hover:text-accent"
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  )
}
