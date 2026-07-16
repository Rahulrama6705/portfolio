const links = ['about', 'experience', 'projects', 'skills', 'contact']

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/[0.08] bg-ink/70 px-[6vw] py-[18px] backdrop-blur-md">
      <a href="#hero" className="font-display text-lg font-bold tracking-tight text-[#f2f2f7] no-underline">
        Rahul Rama
      </a>
      <div className="flex gap-7 font-mono text-[13px]">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            className="text-paper/65 no-underline transition-colors hover:text-accent-light"
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  )
}
