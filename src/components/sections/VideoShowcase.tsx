import { motion } from 'framer-motion'
import { HiPlay } from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { videos } from '@/data/content'

export function VideoShowcase() {
  return (
    <section className="container-px py-24 md:py-32">
      <SectionHeading eyebrow="Video" title="Reels &amp; showcase edits" />

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {videos.map((video, i) => (
          <Reveal key={video.title} delay={i * 0.08}>
            <motion.div whileHover={{ y: -6 }} className="group relative rounded-2xl overflow-hidden border border-line aspect-[9/12]">
              <img src={video.thumb} alt={video.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-orange/90 flex items-center justify-center text-ink group-hover:scale-110 transition-transform">
                  <HiPlay size={24} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <h3 className="font-display font-semibold text-sm">{video.title}</h3>
                <span className="font-data text-xs text-fog">{video.duration}</span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
