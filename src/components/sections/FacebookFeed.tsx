import { FaFacebookF, FaThumbsUp, FaShare, FaRegCommentAlt } from 'react-icons/fa'
import { Reveal } from '@/components/ui/Reveal'
import { facebookPosts, profile } from '@/data/content'

// NOTE: posts below are placeholders — wire this section up to the Facebook
// Graph API (Page Feed endpoint) to pull live posts.
export function FacebookFeed() {
  return (
    <section className="container-px py-24 md:py-32 bg-surface/30 border-y border-line">
      <Reveal>
        <div className="flex items-center gap-2 text-orange font-data text-xs uppercase tracking-widest">
          <FaFacebookF /> Latest on Facebook
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">{profile.name}, Official Page</h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {facebookPosts.map((post, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-line bg-surface overflow-hidden flex flex-col">
              <div className="p-4 flex items-center gap-3">
                <img src={profile.avatar} alt={profile.name} className="w-9 h-9 rounded-full object-cover" />
                <div className="text-sm">
                  <p className="font-semibold">{profile.name}</p>
                  <p className="text-xs text-fog">{post.time} · 🌐</p>
                </div>
              </div>
              <p className="px-4 pb-3 text-sm text-fog leading-relaxed">{post.text}</p>
              <img src={post.img} alt="" loading="lazy" className="w-full aspect-[4/3] object-cover" />
              <div className="p-4 flex items-center justify-between text-xs text-fog mt-auto">
                <span className="flex items-center gap-1.5"><FaThumbsUp className="text-orange" /> {post.likes.toLocaleString()}</span>
                <span className="flex items-center gap-1.5"><FaRegCommentAlt /> {post.comments}</span>
                <span className="flex items-center gap-1.5"><FaShare /> {post.shares}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
