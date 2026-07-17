import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skills } from '@/data/content'

export function About() {
  return (
    <section id="about" className="container-px py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Content is the job. Trust is the product."
          />

          <Reveal delay={0.2} className="mt-6 space-y-5 text-fog leading-relaxed">
            <p>
              I started posting daily in 2025 with a phone camera and no plan. One years and one very
              steep learning curve later, that habit turned into a full-time practice across Instagram
              and Facebook — lifestyle, tech and travel content built for an audience that skips ads
              on sight.
            </p>
            <p>
              The mission is simple: make branded content that earns its place in the feed. The vision
              is bigger — build a media business where the audience's trust is the actual asset, and
              every collaboration protects it rather than spends it.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-6 mt-10">
            {[
              { label: 'Mission', body: 'Make branded content people choose to watch, not scroll past.' },
              { label: 'Vision', body: 'Build a media business audiences trust more than the platforms it lives on.' },
            ].map((item, i) => (
              <Reveal key={item.label} delay={0.1 * i}>
                <div className="rounded-2xl border border-line p-5 bg-surface/50 backdrop-blur-sm h-full">
                  <span className="font-data text-xs uppercase tracking-widest text-orange">{item.label}</span>
                  <p className="mt-2 text-sm text-fog leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <span className="font-data text-xs tracking-[0.3em] uppercase text-orange">Skills</span>
            <h3 className="font-display font-bold text-2xl mt-2 mb-8">What the work actually requires</h3>
          </Reveal>
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <Reveal key={skill.label} delay={i * 0.05}>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{skill.label}</span>
                    <span className="font-data text-fog">{skill.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-surface-2 border border-line overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-orange to-orange-soft"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={{ duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
