import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Trayectoria() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current
      if (!el) return

      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(el.querySelectorAll<HTMLElement>('.reveal-up'), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' })
        },
      })

      ScrollTrigger.create({
        trigger: el.querySelector('.stats-row'),
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(el.querySelectorAll<HTMLElement>('.stat-item'), { y: 30, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="trayectoria" ref={sectionRef} className="bg-surface-lighter py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          <div>
            <span className="reveal-up inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-hydra-400 mb-4 sm:mb-5">
              <span className="w-6 h-px bg-hydra-400/60" />
              Nuestra historia
            </span>
            <h2 className="reveal-up text-[clamp(2rem,6vw,4.5rem)] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
              Más de 20 años de potencia uruguaya
            </h2>
            <div className="reveal-up w-14 h-0.5 bg-hydra-400 mt-5 sm:mt-6 mb-5 sm:mb-6" />
            <p className="reveal-up text-sm sm:text-base md:text-lg text-steel-400 leading-relaxed font-light max-w-lg">
              <strong className="text-white font-medium">OLEOHIDRÁULICA CÁCERES</strong> nació hace
              más de dos décadas en Montevideo como una empresa familiar especializada en
              oleohidráulica. Desde entonces, crecimos junto al país, construyendo relaciones
              de confianza con empresas e instituciones de todo Uruguay.
            </p>
            <p className="reveal-up text-sm sm:text-base md:text-lg text-steel-400 leading-relaxed font-light max-w-lg mt-3 sm:mt-4">
              Hoy somos un referente nacional en{' '}
              <strong className="text-hydra-400 font-medium">importación</strong>,{' '}
              <strong className="text-hydra-400 font-medium">fabricación</strong> y{' '}
              <strong className="text-hydra-400 font-medium">reparación</strong> de máquinas
              con componentes hidráulicos. Nuestra planta de 1100 m² en Montevideo cuenta con
              la tecnología más avanzada del país para diagnóstico y pruebas.
            </p>
          </div>

          <div className="stats-row grid grid-cols-2 gap-3 sm:gap-4 self-center">
            {[
              { value: '20+', label: 'Años de experiencia', desc: 'Desde 2002 al servicio de la industria' },
              { value: '1100', label: 'Metros cuadrados', desc: 'De planta industrial en Montevideo' },
              { value: '3', label: 'Áreas de acción', desc: 'Importación, fabricación y reparación' },
              { value: '13+', label: 'Clientes públicos', desc: 'En todo el territorio nacional' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="stat-item p-4 sm:p-5 md:p-6 rounded-xl bg-surface border border-surface-border"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-hydra-400">{stat.value}</span>
                <p className="text-xs sm:text-sm font-medium text-white mt-1 sm:mt-2">{stat.label}</p>
                <p className="text-[11px] sm:text-xs text-steel-500 mt-1 font-light leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
