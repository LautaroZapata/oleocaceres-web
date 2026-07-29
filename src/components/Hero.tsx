import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CLIENTES = [
  { img: '/logoANCAP.png', alt: 'ANCAP' },
  { img: '/ute.png', alt: 'UTE' },
  { img: '/anp.png', alt: 'ANP' },
  { img: '/logoArmadaNacional.png', alt: 'Armada Nacional' },
  { img: '/logoIM.png', alt: 'Intendencia de Montevideo' },
  { img: '/bomberos.png', alt: 'Bomberos' },
  { img: '/logoicanelones.png', alt: 'Canelones' },
  { img: '/logoiMaldonado.png', alt: 'Maldonado' },
]

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = containerRef.current
      if (!el) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      const lines = el.querySelectorAll<HTMLElement>('.hero-line')
      const fades = el.querySelectorAll<HTMLElement>('.hero-fade')
      const logos = el.querySelectorAll<HTMLElement>('.hero-logo')

      if (lines.length) tl.fromTo(lines, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15 })
      if (fades.length) tl.fromTo(fades, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 }, '-=0.3')
      if (logos.length) tl.fromTo(logos, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.03 }, '-=0.1')
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-dvh flex flex-col bg-surface overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-surface/60 via-surface/80 to-surface" />
        <div className="absolute inset-0 bg-grid-pattern-sm" />
        <img
          src="/img006.jpg"
          alt=""
          className="h-full w-full object-cover opacity-25"
          style={{ filter: 'grayscale(0.7) contrast(1.2)' }}
        />
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-hydra-400/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-hydra-400/3 blur-3xl" />
      </div>

      <div className="flex-1 flex items-center min-h-0">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-28 sm:pt-32 pb-6 sm:pb-8 lg:pb-12">
          <div className="max-w-4xl">
            <span className="hero-fade inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-hydra-400 mb-4 sm:mb-6">
              <span className="w-6 h-px bg-hydra-400/60" />
              Especialistas en oleohidráulica
            </span>

            <h1 className="text-[clamp(2.5rem,8vw,7rem)] sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tighter text-white">
              <span className="hero-line block">OLEO</span>
              <span className="hero-line block text-hydra-400">HIDRÁULICA</span>
              <span className="hero-line block">CÁCERES</span>
            </h1>

            <p className="hero-fade mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-steel-400 max-w-xl leading-relaxed font-light">
              Desde Montevideo, más de 20 años importando, fabricando y reparando
              componentes hidráulicos al servicio de la industria nacional.
            </p>

            <div className="hero-fade mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#trayectoria"
                className="inline-flex items-center justify-center gap-2 bg-hydra-400 text-surface font-semibold px-6 py-[13px] sm:py-3 rounded-lg text-sm hover:bg-hydra-300 transition-all duration-300 min-h-[44px]"
              >
                Nuestra historia
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 border border-surface-border text-steel-300 font-medium px-6 py-[13px] sm:py-3 rounded-lg text-sm hover:border-steel-600 hover:text-white transition-all duration-300 min-h-[44px]"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-border bg-surface/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 sm:py-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-steel-600 mb-3">
            Confían en nosotros
          </p>
          <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-2 sm:gap-y-3">
            {CLIENTES.map((cliente, i) => (
              <div
                key={i}
                className="hero-logo h-7 sm:h-8 w-10 sm:w-12 flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity duration-300"
              >
                <img src={cliente.img} alt={cliente.alt} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
