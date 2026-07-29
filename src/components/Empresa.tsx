import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CARDS = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Planta industrial',
    text: '1100 m² construidos en Montevideo con los equipos de diagnóstico más avanzados del país para atender todas tus necesidades en oleohidráulica.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: 'Banco de pruebas',
    text: 'Banco Hidrosistemas con motores de 60 HP y 5 HP, tres rangos de velocidad y unidad portátil para evaluaciones en campo.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Expertise técnica',
    text: 'Supervisado por un técnico con postgrados internacionales, ex-profesor del Instituto de Capacitación Profesional (COCAP).',
  },
]

const STATS = [
  { value: '20+', label: 'Años de experiencia' },
  { value: '1100', label: 'Metros cuadrados' },
  { value: '13+', label: 'Clientes públicos' },
]

export function Empresa() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
        },
      })
      ScrollTrigger.create({
        trigger: textRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(textRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 })
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="empresa"
      ref={sectionRef}
      className="bg-surface-lighter py-20 md:py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-hydra-400">
              Nuestra empresa
            </span>
            <h2
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white mt-4"
            >
              Empresa
            </h2>

            <div className="w-16 h-0.5 bg-hydra-400 mt-6" />

            <p
              ref={textRef}
              className="mt-6 text-base md:text-lg text-steel-400 leading-relaxed max-w-lg font-light"
            >
              <strong className="text-white font-medium">OLEOHIDRÁULICA CÁCERES</strong>, fundada
              hace más de 20 años, es una empresa nacional especializada en oleohidráulica.
              Nos dedicamos a la <strong className="text-hydra-400 font-medium">importación</strong>,{' '}
              <strong className="text-hydra-400 font-medium">fabricación</strong> y{' '}
              <strong className="text-hydra-400 font-medium">reparación</strong> de máquinas con
              componentes hidráulicos.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-surface-border">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <span className="text-2xl md:text-3xl font-bold text-hydra-400">{stat.value}</span>
                  <p className="text-xs text-steel-500 mt-1 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="group flex gap-5 p-5 rounded-xl bg-surface border border-surface-border hover:border-steel-700 transition-all duration-500"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-hydra-400/10 text-hydra-400 flex items-center justify-center group-hover:bg-hydra-400 group-hover:text-surface transition-all duration-500">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5">{card.title}</h3>
                  <p className="text-sm text-steel-400 leading-relaxed font-light">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
