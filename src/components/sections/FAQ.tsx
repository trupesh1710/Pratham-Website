import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiPlus } from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { faqs } from '@/data/content'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="container-px py-24 md:py-32 max-w-3xl mx-auto">
      <SectionHeading eyebrow="FAQ" title="Good to know before reaching out" align="center" />

      <div className="mt-12 divide-y divide-line border-y border-line">
        {faqs.map((item, i) => {
          const open = openIndex === i
          return (
            <Reveal key={item.q} delay={i * 0.04}>
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display font-semibold text-base md:text-lg">{item.q}</span>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center text-orange"
                >
                  <HiPlus size={16} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-fog leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
