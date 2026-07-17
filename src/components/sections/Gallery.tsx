import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineXMark } from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { galleryCategories, galleryItems } from '@/data/content'

export function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>('All')
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[number] | null>(null)

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter)

  return (
    <section id="gallery" className="container-px py-24 md:py-32 bg-surface/30 border-y border-line">
      <SectionHeading eyebrow="Gallery" title="A closer look at the work" align="center" />

      <div className="flex flex-wrap justify-center gap-2 mt-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            data-cursor
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              filter === cat ? 'bg-orange text-ink border-orange' : 'border-line text-fog hover:border-orange/50 hover:text-paper'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.button
              key={item.img + item.caption}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              onClick={() => setLightbox(item)}
              data-cursor
              className="group relative aspect-square rounded-xl overflow-hidden border border-line"
            >
              <img src={item.img} alt={item.caption} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors flex items-end p-3 opacity-0 group-hover:opacity-100">
                <span className="text-xs font-medium text-left">{item.caption}</span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0 bg-ink/90 backdrop-blur-md" />
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={lightbox.img}
              alt={lightbox.caption}
              className="relative z-10 max-h-[80vh] max-w-3xl w-auto rounded-2xl object-contain"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-ink/70 border border-line flex items-center justify-center hover:border-orange"
            >
              <HiOutlineXMark />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
