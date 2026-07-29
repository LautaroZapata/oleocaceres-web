import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CAPACIDADES = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    titulo: 'Planta industrial',
    descripcion: 'Nuestras instalaciones en Montevideo cuentan con 1100 m² construidos y los equipos de diagnóstico más avanzados del país para atender todo tipo de necesidades en oleohidráulica.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    titulo: 'Banco de pruebas',
    descripcion: 'Banco Hidrosistemas con motores de 60 HP y 5 HP, tres rangos de velocidad (850, 1050 y 1450 rpm) y banco portátil para evaluaciones en campo. Capacidad para analizar casi la totalidad de la maquinaria del mercado nacional.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    titulo: 'Expertise certificada',
    descripcion: 'Nuestro equipo es supervisado por un técnico especializado en oleohidráulica con postgrados internacionales, ex-profesor del Instituto de Capacitación Profesional (COCAP) a nivel nacional.',
  },
]

export function Capacidad() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current
      if (!el) return

      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(el.querySelectorAll<HTMLElement>('.cap-header'), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
        },
      })

      ScrollTrigger.create({
        trigger: el.querySelector('.cap-grid'),
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(el.querySelectorAll<HTMLElement>('.cap-card'), { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out' })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="capacidad" ref={sectionRef} className="bg-surface-lighter py-20 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="cap-header max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-hydra-400 mb-4 sm:mb-5">
            <span className="w-6 h-px bg-hydra-400/60" />
            Nuestra capacidad técnica
          </span>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
            Capacidad técnica
          </h2>
          <div className="w-14 h-0.5 bg-hydra-400 mt-5 sm:mt-6" />
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-steel-400 leading-relaxed font-light max-w-xl">
            Lo que nos diferencia no es solo lo que hacemos, sino cómo lo hacemos. Contamos con la
            infraestructura, el equipamiento y el conocimiento para ofrecer soluciones hidráulicas
            de nivel internacional desde Uruguay.
          </p>
        </div>

        <div className="cap-grid grid md:grid-cols-3 gap-5 mt-14 md:mt-20">
          {CAPACIDADES.map((cap) => (
            <div
              key={cap.titulo}
              className="cap-card p-6 md:p-8 rounded-xl bg-surface border border-surface-border hover:border-steel-700 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-hydra-400/10 text-hydra-400 flex items-center justify-center mb-5">
                {cap.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{cap.titulo}</h3>
              <p className="text-sm text-steel-400 leading-relaxed font-light">{cap.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
