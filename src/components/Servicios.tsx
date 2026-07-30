import { Reveal } from './Reveal'
import { SERVICIOS } from '../data/site'

export function Servicios() {
  return (
    <section id="servicios" className="bg-white py-20 sm:py-26 lg:py-33">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-[600px]">
            <span className="inline-flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.26em] text-hydra-600">
              <span className="h-px w-[34px] bg-hydra-600/45" />
              Qué hacemos
            </span>
            <h2 className="mt-5 font-display text-[clamp(2.1rem,4vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.032em] text-steel-900">
              Tres frentes, un mismo <span className="text-hydra-700">estándar</span>
            </h2>
          </div>
          <p className="max-w-[340px] text-[15.5px] font-light leading-[1.7] text-pretty text-steel-500">
            Acompañamos a talleres y empresas de maquinaria en todo el ciclo de vida de sus equipos
            hidráulicos.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6.5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((servicio, i) => (
            <Reveal key={servicio.numero} delay={i * 110} className="h-full">
              <article className="group h-full overflow-hidden rounded-3xl border border-steel-900/10 bg-white shadow-[0_1px_2px_rgba(55,59,68,0.04)] transition-[transform,box-shadow,border-color] duration-550 ease-oc hover:-translate-y-2 hover:border-hydra-600/30 hover:shadow-[0_30px_56px_-26px_rgba(55,59,68,0.3)]">
                <div className="h-56 overflow-hidden bg-steel-100">
                  <img
                    src={servicio.img}
                    alt={servicio.titulo}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-oc group-hover:scale-107"
                    loading="lazy"
                  />
                </div>
                <div className="px-7 pt-7 pb-8.5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-hydra-600">
                      {servicio.numero}
                    </span>
                    <span className="h-px flex-1 bg-hydra-600/20" />
                  </div>
                  <h3 className="mt-4 font-display text-[25px] font-semibold leading-[1.15] tracking-[-0.025em] text-steel-900">
                    {servicio.titulo}
                  </h3>
                  <p className="mt-3.5 text-[14.5px] font-light leading-[1.7] text-pretty text-steel-500">
                    {servicio.descripcion}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
