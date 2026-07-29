import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICIOS = [
  {
    numero: '01',
    titulo: 'Importación',
    descripcion: 'Traemos al país componentes y repuestos hidráulicos de fabricantes internacionales. Gestionamos la cadena de suministro para que tu industria nunca se detenga.',
    img: '/img005.jpg',
  },
  {
    numero: '02',
    titulo: 'Fabricación',
    descripcion: 'Diseñamos y fabricamos componentes hidráulicos a medida. Desde piezas personalizadas hasta sistemas completos, con la precisión que exige la industria moderna.',
    img: '/img004.jpg',
  },
  {
    numero: '03',
    titulo: 'Reparación',
    descripcion: 'Diagnosticamos, reparamos y probamos cilindros y equipos hidráulicos de todo tipo y tamaño. Nuestro banco de pruebas garantiza resultados con estándares internacionales.',
    img: '/img006.jpg',
  },
]

export function Servicios() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current
      if (!el) return

      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(el.querySelectorAll<HTMLElement>('.sv-header'), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="servicios" ref={sectionRef} className="bg-surface py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="sv-header max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-hydra-400 mb-4 sm:mb-5">
            <span className="w-6 h-px bg-hydra-400/60" />
            Qué hacemos
          </span>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
            Servicios
          </h2>
          <div className="w-14 h-0.5 bg-hydra-400 mt-5 sm:mt-6" />
        </div>

        <div className="mt-12 sm:mt-14 md:mt-20 flex flex-col gap-12 md:gap-16 lg:gap-20">
          {SERVICIOS.map((servicio, index) => (
            <div
              key={servicio.titulo}
              className="group grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center"
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <span className="text-[clamp(3rem,10vw,6rem)] sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white/[0.03] select-none leading-none block overflow-hidden">
                  {servicio.numero}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-0.5 sm:mt-1 leading-tight">
                  {servicio.titulo}
                </h3>
                <div className="w-10 h-0.5 bg-hydra-400 mt-3 sm:mt-4 mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base text-steel-400 leading-relaxed max-w-md font-light">
                  {servicio.descripcion}
                </p>
              </div>

              <div className={`${index % 2 === 1 ? 'md:order-1' : ''} overflow-hidden rounded-xl bg-surface-light`}>
                <img
                  src={servicio.img}
                  alt={servicio.titulo}
                  className="w-full h-52 sm:h-56 md:h-80 object-cover transition-all duration-700 group-hover:scale-105"
                  style={{ filter: 'grayscale(0.4)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
