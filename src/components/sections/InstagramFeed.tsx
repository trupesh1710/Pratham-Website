import { HiHeart, HiChatBubbleOvalLeft } from 'react-icons/hi2'
import { FaInstagram } from 'react-icons/fa'
import { Reveal } from '@/components/ui/Reveal'
import { instagramPosts, profile } from '@/data/content'

// NOTE: posts below are placeholders — wire this section up to the Instagram
// Graph API (or a service like Behold/SnapWidget) to pull live posts.
export function InstagramFeed() {
  return (
    <section className="container-px py-24 md:py-32">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Reveal>
          <div className="flex items-center gap-2 text-orange font-data text-xs uppercase tracking-widest">
            <FaInstagram /> Latest on Instagram
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">{profile.handle}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a href="https://www.instagram.com/pratham_in_uk/" target="_blank" rel="noreferrer" className="text-sm font-semibold text-orange hover:underline">
            View profile →
          </a>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
        {instagramPosts.map((post, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="group relative aspect-square rounded-xl overflow-hidden border border-line">
              <img src={post.img} alt="Instagram post" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 text-sm font-semibold">
                <span className="flex items-center gap-1"><HiHeart /> {post.likes}</span>
                <span className="flex items-center gap-1"><HiChatBubbleOvalLeft /> {post.comments}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
