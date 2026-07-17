import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineArrowDown } from 'react-icons/hi2'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { profile } from '@/data/content'

function useTypedRoles(roles: string[]) {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex % roles.length]
    const speed = deleting ? 35 : 65
    const pause = 1400

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), pause)
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setRoleIndex((i) => i + 1)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex, roles])

  return text
}

export function Hero() {
  const typed = useTypedRoles(profile.roles)

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24">
      {/* animated gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-orange/25 blur-[110px]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-orange-soft/15 blur-[130px]"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="container-px grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-data uppercase tracking-widest text-fog mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
            Open for Q3 collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black leading-[0.95] text-[15vw] md:text-[6.2vw] tracking-tight"
          >
            {profile.name.split(' ')[0]}
            <br />
            <span className="text-outline">{profile.name.split(' ')[1]} &nbsp;</span>
            <span className="text-outline">{profile.name.split(' ')[2]}</span>
          </motion.h1>

          <div className="h-8 mt-6 font-data text-orange text-lg md:text-xl">
            {typed}
            <span className="animate-pulse">|</span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-fog text-base md:text-lg mt-5 max-w-md leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <p className="mt-4 text-sm md:text-base text-fog/90 leading-relaxed max-w-xl">
            Looking for <strong>Pratham in UK</strong>? I create <strong>Instagram</strong> and <strong>Facebook</strong> content across lifestyle, tech and travel — feed-first, authentic, and made for brand collaborations.
          </p>


          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <a href="#contact" data-cursor className="inline-flex items-center gap-2 rounded-full bg-orange text-ink font-semibold px-6 py-3 glow-btn">
              <FaInstagram /> Follow Me
            </a>
            <a href="#portfolio" data-cursor className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold hover:border-orange transition-colors">
              View Portfolio
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-64 h-64 md:w-80 md:h-80"
        >
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-orange/60 to-orange-soft/10 blur-lg opacity-50" />
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-line">
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          </div>
          <motion.div
            className="absolute -bottom-5 -left-5 bg-surface border border-line rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaFacebookF className="text-orange" />
            <span className="font-data text-xs">11K+</span>
          </motion.div>
          <motion.div
            className="absolute -top-4 -right-4 bg-surface border border-line rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <FaInstagram className="text-orange" />
            <span className="font-data text-xs">30K+</span>
          </motion.div>
        </motion.div>
      </div>

      {/* signature marquee strip */}
      <div className="relative mt-16 md:mt-24 border-y border-line py-4 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {['Lifestyle', 'Tech', 'Travel', 'Fashion', 'Food', 'Brand Deals'].map((tag) => (
                <span key={tag} className="flex items-center gap-4 px-6 font-display font-bold text-2xl md:text-4xl text-fog-dim whitespace-nowrap">
                  {tag} <span className="text-orange">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <motion.a
        href="#about"
        className="hidden md:flex mx-auto mt-8 flex-col items-center gap-2 text-fog text-xs uppercase tracking-widest"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        Scroll
        <HiOutlineArrowDown />
      </motion.a>
    </section>
  )
}
