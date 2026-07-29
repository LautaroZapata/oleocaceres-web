import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CLIENTES = [
  { img: '/anp.png', alt: 'ANP' },
  { img: '/bomberos.png', alt: 'Bomberos' },
  { img: '/logoafe.png', alt: 'AFE' },
  { img: '/logoANCAP.png', alt: 'ANCAP' },
  { img: '/logoArmadaNacional.png', alt: 'Armada Nacional' },
  { img: '/logoicanelones.png', alt: 'Canelones' },
  { img: '/logoiColonia.png', alt: 'Colonia' },
  { img: '/logoIM.png', alt: 'Intendencia de Montevideo' },
  { img: '/logoiMaldonado.png', alt: 'Maldonado' },
  { img: '/logoInstitutoAntartico.png', alt: 'Instituto Antártico' },
  { img: '/logoiPaysandu.png', alt: 'Paysandú' },
  { img: '/logoiSalto.png', alt: 'Salto' },
  { img: '/ute.png', alt: 'UTE' },
]

export function Clientes() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current
      if (!el) return

      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(el.querySelectorAll<HTMLElement>('.cl-header'), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
        },
      })

      ScrollTrigger.create({
        trigger: el.querySelector('.cl-grid'),
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(el.querySelectorAll<HTMLElement>('.cl-item'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.03, ease: 'power3.out' })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="clientes" ref={sectionRef} className="bg-surface py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="cl-header text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-hydra-400 mb-4 sm:mb-5">
            <span className="w-6 h-px bg-hydra-400/60" />
            Confían en nosotros
          </span>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
            Clientes
          </h2>
          <div className="w-14 h-0.5 bg-hydra-400 mx-auto mt-5 sm:mt-6" />
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-steel-500 font-light max-w-lg mx-auto leading-relaxed">
            Empresas e instituciones públicas y privadas que confían en nuestra experiencia
            y calidad de servicio en todo Uruguay.
          </p>
        </div>

        <div className="cl-grid grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4 mt-10 sm:mt-12 md:mt-16 max-w-5xl mx-auto">
          {CLIENTES.map((cliente, i) => (
            <div
              key={i}
              className="cl-item flex items-center justify-center h-16 sm:h-20 md:h-24 rounded-lg bg-surface-light border border-surface-border p-3 sm:p-4 hover:bg-surface-elevated hover:border-steel-700 transition-all duration-300"
            >
              <img
                src={cliente.img}
                alt={cliente.alt}
                className="w-full h-full object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
