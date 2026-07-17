import { SectionHeading } from '@/components/ui/SectionHeading'
import { brands } from '@/data/content'

export function Brands() {
  return (
    <section id="brands" className="py-24 md:py-32 overflow-hidden">
      <div className="container-px">
        <SectionHeading eyebrow="Brands" title="Trusted by teams who care about fit" align="center" />
      </div>

      <div className="relative mt-14 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track" style={{ animationDuration: '32s' }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0 gap-5 pr-5">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="px-8 py-6 rounded-2xl border border-line bg-surface/40 hover:border-orange/60 hover:shadow-[0_0_28px_rgba(255,107,0,0.18)] transition-all whitespace-nowrap"
                >
                  <span className="font-display font-bold text-xl text-fog hover:text-paper transition-colors">{brand}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
