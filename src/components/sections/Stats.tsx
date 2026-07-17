import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { useCountUp } from '@/hooks/useCountUp'
import { stats } from '@/data/content'

function StatCard({ stat, i }: { stat: (typeof stats)[number]; i: number }) {
  const { ref, value } = useCountUp(stat.value)
  const display = stat.isDecimal ? value.toFixed(1) : Math.round(value).toLocaleString()

  return (
    <Reveal delay={i * 0.05} className="h-full">
      <div
        ref={ref}
        className="h-full rounded-2xl border border-line bg-surface/60 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-orange/50 transition-colors"
      >
        <span className="font-data text-[11px] uppercase tracking-widest text-fog">{stat.label}</span>
        <span className="font-data tabular font-bold text-3xl md:text-4xl mt-4 text-paper">
          {display}
          <span className="text-orange">{stat.suffix}</span>
        </span>
      </div>
    </Reveal>
  )
}

export function Stats() {
  return (
    <section id="stats" className="container-px py-24 md:py-32 bg-surface/30 border-y border-line">
      <SectionHeading
        eyebrow="Statistics"
        title="The numbers a brand deal actually runs on"
        desc="Updated monthly — full media kit available on request."
        align="center"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} i={i} />
        ))}
      </div>
    </section>
  )
}
