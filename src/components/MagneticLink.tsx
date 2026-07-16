import { useRef, type ReactNode, type MouseEvent } from 'react'

export default function MagneticLink({
  href,
  className,
  children,
  target,
  rel,
  ariaLabel,
}: {
  href: string
  className?: string
  children: ReactNode
  target?: string
  rel?: string
  ariaLabel?: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.3}px)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transition: 'transform 0.15s ease-out' }}
    >
      {children}
    </a>
  )
}
