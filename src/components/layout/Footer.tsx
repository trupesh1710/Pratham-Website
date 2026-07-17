import { useState } from 'react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { nav, profile } from '@/data/content'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="border-t border-line pt-20 pb-10">
      <div className="container-px grid md:grid-cols-[1.3fr_1fr_1fr] gap-12">
        <div>
          <span className="font-display font-extrabold text-2xl">
            {profile.name.split(' ')[0].toUpperCase()}<span className="text-orange">.</span>
          </span>
          <p className="text-fog mt-4 max-w-sm leading-relaxed">
            {profile.tagline}
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://www.instagram.com/pratham_in_uk/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-orange hover:text-orange transition-colors"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=61585796944714" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-orange hover:text-orange transition-colors"><FaFacebookF /></a>
            {/* <a href="https://wa.me/15550102024" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-orange hover:text-orange transition-colors"><FaWhatsapp /></a> */}
          </div>
        </div>

        <div>
          <h4 className="font-data text-xs uppercase tracking-widest text-fog mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-fog hover:text-orange transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-data text-xs uppercase tracking-widest text-fog mb-5">Newsletter</h4>
          <p className="text-sm text-fog mb-4">Behind-the-scenes notes and new drops, once a month.</p>
          {subscribed ? (
            <p className="text-sm text-orange">Subscribed — welcome in.</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubscribed(true)
              }}
              className="flex gap-2"
            >
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="min-w-0 flex-1 rounded-full bg-surface border border-line px-4 py-2.5 text-sm focus:border-orange outline-none transition-colors"
              />
              <button type="submit" className="rounded-full bg-orange text-ink text-sm font-semibold px-4 glow-btn shrink-0">Join</button>
            </form>
          )}
        </div>
      </div>

      <div className="container-px flex flex-col sm:flex-row items-center justify-between gap-3 mt-16 pt-6 border-t border-line text-xs text-fog">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Built for brands who care about the feed.</span>
      </div>
    </footer>
  )
}
