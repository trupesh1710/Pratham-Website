import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  desc?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, desc, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}>
      <Reveal>
        <span className="font-data text-xs tracking-[0.3em] uppercase text-orange">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 leading-[1.1]">{title}</h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.16}>
          <p className="text-fog mt-4 text-base md:text-lg leading-relaxed">{desc}</p>
        </Reveal>
      )}
    </div>
  )
}
