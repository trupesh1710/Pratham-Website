import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { HiStar } from 'react-icons/hi2'
import { FaQuoteLeft } from 'react-icons/fa'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/content'
import 'swiper/css'
import 'swiper/css/pagination'

export function Testimonials() {
  return (
    <section id="testimonials" className="container-px py-24 md:py-32">
      <SectionHeading eyebrow="Testimonials" title="What brand partners say" align="center" />

      <div className="mt-14 testimonial-swiper">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          className="!pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="h-full rounded-3xl border border-line bg-surface/50 backdrop-blur-md p-8 flex flex-col">
                <FaQuoteLeft className="text-orange/50" size={22} />
                <p className="mt-4 text-fog leading-relaxed flex-1">{t.quote}</p>
                <div className="flex items-center gap-3 mt-6">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border border-line" />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-fog">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4 text-orange">
                  {[...Array(5)].map((_, i) => <HiStar key={i} size={14} />)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
