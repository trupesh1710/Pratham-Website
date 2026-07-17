import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { timeline } from '@/data/content'

export function Timeline() {
  return (
    <section className="container-px py-24 md:py-32">
      <SectionHeading eyebrow="Milestones" title="The path here, year by year" />

      <div className="relative mt-16 max-w-2xl">
        <motion.div
          className="absolute left-[7px] top-1 bottom-1 w-[2px] bg-gradient-to-b from-orange to-transparent origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="space-y-10">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.05} className="relative pl-8">
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-ink border-2 border-orange" />
              <span className="font-data text-xs text-orange uppercase tracking-widest">{item.year}</span>
              <h3 className="font-display font-semibold text-lg mt-1">{item.title}</h3>
              <p className="text-sm text-fog mt-1 leading-relaxed">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
