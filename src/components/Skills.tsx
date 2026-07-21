import { skills } from '../data'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const SKILL_ICONS: Record<string, string> = {
  Python: 'python',
  Java: 'openjdk',
  HTML: 'html5',
  TensorFlow: 'tensorflow',
  FastAPI: 'fastapi',
  Pandas: 'pandas',
  'Scikit-learn': 'scikitlearn',
  Git: 'git',
  'IntelliJ IDEA': 'intellijidea',
  Streamlit: 'streamlit',
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-[1] mx-auto max-w-[900px] px-[6vw] py-20">
      <SectionHeading index="04 · Skills" title="Skills" />

      <div className="flex flex-col gap-4">
        {skills.map((g) => (
          <Reveal key={g.name} distance={12}>
            <div className="grid gap-3 rounded-xl border border-ink/10 bg-white/[0.03] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.3)] sm:grid-cols-[190px_1fr]">
              <p className="font-sans text-[16px] font-semibold uppercase tracking-[0.12em] text-ink/45">{g.name}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 font-sans text-[18px] text-ink/80"
                  >
                    {SKILL_ICONS[item] && (
                      <img
                        src={`https://cdn.simpleicons.org/${SKILL_ICONS[item]}/a68bff`}
                        alt=""
                        className="h-4 w-4 opacity-80"
                        onError={(e) => {
                          ;(e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                    )}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
