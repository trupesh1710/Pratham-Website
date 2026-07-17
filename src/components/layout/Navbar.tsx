import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineMoon, HiOutlineSun, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'
import { nav, profile } from '@/data/content'
import { useTheme } from '@/context/ThemeContext'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/80 backdrop-blur-xl border-b border-line' : 'bg-transparent'
      } ${theme === 'light' ? 'light:bg-white/80' : ''}`}
    >
      <div className="container-px flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-display font-extrabold text-lg tracking-tight" data-cursor>
          {profile.name.split(' ')[0].toUpperCase()}
          <span className="text-orange">.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-cursor
              className="relative text-sm font-medium text-fog hover:text-paper transition-colors py-2"
            >
              {item.label}
              {active === item.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-orange rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            data-cursor
            className="w-9 h-9 rounded-full border border-line flex items-center justify-center hover:border-orange transition-colors"
          >
            {theme === 'dark' ? <HiOutlineSun size={16} /> : <HiOutlineMoon size={16} />}
          </button>
          <a
            href="#contact"
            data-cursor
            className="hidden md:inline-flex items-center rounded-full bg-orange text-ink text-sm font-semibold px-5 py-2.5 glow-btn"
          >
            Let's talk
          </a>
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineXMark size={22} /> : <HiOutlineBars3 size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-ink border-b border-line"
          >
            <div className="container-px py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-fog hover:text-orange border-b border-line/60 last:border-none"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
