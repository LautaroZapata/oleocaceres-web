import { useEffect, useState } from 'react'

/** Thin reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 z-[90] h-0.5 bg-gradient-to-r from-hydra-600 to-hydra-300 transition-[width] duration-100 ease-linear"
      style={{ width: `${progress}%` }}
    />
  )
}
