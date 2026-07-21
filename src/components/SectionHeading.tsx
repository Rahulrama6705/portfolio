import Reveal from './Reveal'

export default function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <p className="mb-2 font-serif text-[17px] font-semibold uppercase tracking-[0.18em] text-accent">{index}</p>
      <h2 className="font-serif text-[clamp(36px,4.2vw,50px)] font-bold text-ink">{title}</h2>
    </Reveal>
  )
}
