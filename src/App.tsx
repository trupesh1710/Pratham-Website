import { useEffect, useState } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { CustomCursor } from '@/components/layout/CustomCursor'
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Stats } from '@/components/sections/Stats'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { Gallery } from '@/components/sections/Gallery'
import { Brands } from '@/components/sections/Brands'
import { Testimonials } from '@/components/sections/Testimonials'
import { Timeline } from '@/components/sections/Timeline'
import { InstagramFeed } from '@/components/sections/InstagramFeed'
import { FacebookFeed } from '@/components/sections/FacebookFeed'
import { VideoShowcase } from '@/components/sections/VideoShowcase'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <LoadingScreen show={loading} />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Stats />
        <Brands />
        <Gallery />
        <Testimonials />
        <Timeline />
        <InstagramFeed />
        <FacebookFeed />
        <VideoShowcase />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}

export default App
