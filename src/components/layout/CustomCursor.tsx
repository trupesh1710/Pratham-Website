import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
      document.documentElement.style.setProperty('--x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--y', `${e.clientY}px`)
    }

    const onEnterInteractive = () => dotRef.current?.classList.add('scale-[3]', 'bg-transparent', 'border', 'border-orange')
    const onLeaveInteractive = () => dotRef.current?.classList.remove('scale-[3]', 'bg-transparent', 'border', 'border-orange')

    window.addEventListener('mousemove', move)
    const interactive = document.querySelectorAll('a, button, [data-cursor]')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-glow hidden md:block" ref={glowRef} />
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full bg-orange pointer-events-none z-[60] transition-transform duration-150 ease-out"
      />
    </>
  )
}
