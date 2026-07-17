import { motion } from 'framer-motion'
import {
  HiOutlineMegaphone, HiOutlineStar, HiOutlineHomeModern, HiOutlineGlobeAlt,
  HiOutlineCpuChip, HiOutlineSparkles, HiOutlineChartBar, HiOutlineCamera,
} from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { services } from '@/data/content'

const icons = [HiOutlineMegaphone, HiOutlineStar, HiOutlineHomeModern, HiOutlineGlobeAlt, HiOutlineCpuChip, HiOutlineSparkles, HiOutlineChartBar, HiOutlineCamera]

export function Services() {
  return (
    <section id="services" className="container-px py-24 md:py-32">
      <SectionHeading
        eyebrow="Services"
        title="Ways to work together"
        desc="Every engagement starts with a fit check — audience, product, and tone."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
        {services.map((service, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={service.title} delay={(i % 4) * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group h-full rounded-2xl border border-line p-6 bg-surface/40 hover:border-orange/50 hover:bg-surface transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-ink transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg mt-5">{service.title}</h3>
                <p className="text-sm text-fog mt-2 leading-relaxed">{service.desc}</p>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
