import { useState } from 'react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { profile } from '@/data/content'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire this up to a form service (Formspree, Resend, etc.) before going live.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="container-px py-24 md:py-32">
      <SectionHeading eyebrow="Contact" title="Have a campaign in mind?" desc="Fill out the form or reach out directly — replies within 48 hours." />

      <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 mt-14">
        <Reveal>
          {submitted ? (
            <div className="rounded-2xl border border-orange/40 bg-orange/5 p-8 text-center">
              <h3 className="font-display font-semibold text-xl">Message sent 🎉</h3>
              <p className="text-fog mt-2">Thanks for reaching out — expect a reply within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <input required type="text" placeholder="Your name" className="w-full rounded-xl bg-surface border border-line px-4 py-3 text-sm focus:border-orange outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input required type="email" placeholder="you@brand.com" className="w-full rounded-xl bg-surface border border-line px-4 py-3 text-sm focus:border-orange outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <input required type="text" placeholder="What's this about?" className="w-full rounded-xl bg-surface border border-line px-4 py-3 text-sm focus:border-orange outline-none transition-colors" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea required rows={5} placeholder="Tell me a bit about the campaign..." className="w-full rounded-xl bg-surface border border-line px-4 py-3 text-sm focus:border-orange outline-none transition-colors resize-none" />
              </div>
              <button type="submit" data-cursor className="inline-flex items-center rounded-full bg-orange text-ink font-semibold px-7 py-3 glow-btn">
                Send Message
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-line bg-surface/50 p-7 space-y-5">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center text-orange"><HiOutlineEnvelope /></span>
              <span className="text-sm group-hover:text-orange transition-colors">{profile.email}</span>
            </a>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center text-orange"><HiOutlineMapPin /></span>
              <span className="text-sm">{profile.location}</span>
            </div>
            {/* <a href="https://wa.me/15550102024" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center text-orange"><FaWhatsapp /></span>
              <span className="text-sm group-hover:text-orange transition-colors">{profile.whatsapp}</span>
            </a> */}
            <div className="flex gap-3 pt-2">
              <a href="https://www.instagram.com/pratham_in_uk/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-orange hover:text-orange transition-colors"><FaInstagram /></a>
              <a href="https://www.facebook.com/profile.php?id=61585796944714" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-orange hover:text-orange transition-colors"><FaFacebookF /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
