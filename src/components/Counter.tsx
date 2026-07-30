import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../lib/motion'

const DURATION = 1400

type CounterProps = {
  value: number
  suffix?: string
  /** Stagger in ms, matched to the surrounding Reveal. */
  delay?: number
  className?: string
}

/** Counts up to `value` the first time it scrolls into view. */
export function Counter({ value, suffix = '', delay = 0, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [current, setCurrent] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      setCurrent(value)
      setDone(true)
      return
    }

    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now() + delay
        const tick = (now: number) => {
          const p = Math.min(1, Math.max(0, (now - start) / DURATION))
          setCurrent(Math.round(value * (1 - Math.pow(1 - p, 3))))
          if (p < 1) raf = requestAnimationFrame(tick)
          else setDone(true)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, delay])

  return (
    <span ref={ref} className={className}>
      {current.toLocaleString('es-UY')}
      {done ? suffix : ''}
    </span>
  )
}
