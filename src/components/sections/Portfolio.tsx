import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineXMark } from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { portfolioItems } from '@/data/content'

export function Portfolio() {
  const [active, setActive] = useState<(typeof portfolioItems)[number] | null>(null)

  return (
    <section id="portfolio" className="container-px py-24 md:py-32">
      <SectionHeading eyebrow="Featured Portfolio" title="Campaigns worth a second look" />

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 mt-14 [column-fill:_balance]">
        {portfolioItems.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
            <button
              onClick={() => setActive(item)}
              data-cursor
              className={`group relative w-full rounded-2xl overflow-hidden border border-line block ${
                item.h === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <span className="font-data text-[11px] uppercase tracking-widest text-orange">{item.category}</span>
                <h3 className="font-display font-semibold text-lg mt-1">{item.title}</h3>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-ink/90 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 max-w-3xl w-full bg-surface border border-line rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-ink/70 border border-line flex items-center justify-center hover:border-orange"
              >
                <HiOutlineXMark />
              </button>
              <img src={active.img} alt={active.title} className="w-full max-h-[60vh] object-cover" />
              <div className="p-6 md:p-8">
                <span className="font-data text-xs uppercase tracking-widest text-orange">{active.category}</span>
                <h3 className="font-display font-bold text-2xl mt-2">{active.title}</h3>
                {/* <p className="text-fog mt-3 leading-relaxed">
                  A short-form campaign built around native storytelling — shot on location, edited for the feed,
                  and delivered with a full performance report inside two weeks of going live.
                </p> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
