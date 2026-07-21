const items = [
  'PYTHON',
  'MACHINE LEARNING',
  'DEEP LEARNING',
  'LLMS',
  'AGENTIC AI',
  'CREWAI',
  'LANGCHAIN',
  'OLLAMA',
]

export default function MarqueeStrip() {
  return (
    <div className="relative z-[1] overflow-hidden border-y border-ink/10 bg-paperDeep py-4">
      <div className="flex w-max animate-marquee gap-10">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-10">
            {items.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center gap-10 font-serif text-lg font-semibold tracking-wide text-ink/40"
              >
                {item}
                <span className="text-accent-light">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
