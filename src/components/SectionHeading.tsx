import Reveal from './Reveal'

export default function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <p className="mb-2 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-accent">{index}</p>
      <h2 className="font-serif text-[clamp(32px,4.2vw,46px)] font-bold text-ink">{title}</h2>
    </Reveal>
  )
}
