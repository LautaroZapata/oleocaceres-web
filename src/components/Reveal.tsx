import { useEffect, useRef, useState, type ReactNode } from 'react'
import { EASE_OC, prefersReducedMotion } from '../lib/motion'

type RevealProps = {
  /** Stagger in ms, applied to the transition delay. */
  delay?: number
  className?: string
  children: ReactNode
}

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({ delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        io.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )
    io.observe(el)

    // Safety net: never leave content invisible if the observer never fires.
    const timer = window.setTimeout(() => setShown(true), 4000)

    return () => {
      io.disconnect()
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(30px)',
        transition: `opacity .95s ${EASE_OC} ${delay}ms, transform .95s ${EASE_OC} ${delay}ms`,
        willChange: shown ? undefined : 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
