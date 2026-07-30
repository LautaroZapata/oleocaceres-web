import { Counter } from './Counter'
import { Reveal } from './Reveal'
import { SPECS, STATS } from '../data/site'

export function Empresa() {
  return (
    <section id="empresa" className="bg-hydra-50 py-20 sm:py-26 lg:py-33">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-22">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.26em] text-hydra-600">
              <span className="h-px w-[34px] bg-hydra-600/45" />
              Nuestra trayectoria
            </span>
            <h2 className="mt-5 font-display text-[clamp(2.1rem,4vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.032em] text-pretty text-steel-900">
              Más de 20 años de <span className="text-hydra-700">potencia uruguaya</span>
            </h2>
            <p className="mt-7 max-w-[480px] text-[17px] font-light leading-[1.75] text-pretty text-steel-600">
              <strong className="font-medium text-steel-900">OLEOHIDRÁULICA CÁCERES</strong> nació hace
              más de dos décadas en Montevideo como una empresa familiar especializada en
              oleohidráulica. Desde entonces crecimos junto al país, construyendo relaciones de
              confianza con empresas e instituciones de todo Uruguay.
            </p>
            <p className="mt-4.5 max-w-[480px] text-[17px] font-light leading-[1.75] text-pretty text-steel-600">
              Hoy somos un referente nacional en{' '}
              <strong className="font-medium text-hydra-700">importación</strong>,{' '}
              <strong className="font-medium text-hydra-700">fabricación</strong> y{' '}
              <strong className="font-medium text-hydra-700">reparación</strong> de máquinas con
              componentes hidráulicos.
            </p>

            <ul className="mt-11 grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-hydra-600/15 bg-hydra-600/15 sm:grid-cols-2">
              {STATS.map((stat) => (
                <li key={stat.label} className="bg-hydra-50 px-6 py-6">
                  <span className="block font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-hydra-700">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <p className="mt-2.5 text-[13px] font-medium text-steel-900">{stat.label}</p>
                  <p className="mt-0.5 text-xs font-light leading-normal text-steel-500">{stat.desc}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-30px_rgba(55,59,68,0.34)]">
              <img
                src="/img007.jpg"
                alt="Planta de Oleohidráulica Cáceres en Montevideo"
                className="block h-[240px] w-full object-cover sm:h-[300px]"
                loading="lazy"
              />
            </div>

            <div className="mt-6 rounded-3xl border border-hydra-600/15 bg-white px-7 py-8 shadow-[0_2px_3px_rgba(55,59,68,0.03),0_22px_44px_-26px_rgba(55,59,68,0.22)] sm:px-9">
              <div className="mb-2 flex items-center gap-3">
                <svg className="h-4.5 w-4.5 text-hydra-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-900">
                  Capacidad técnica certificada
                </h3>
              </div>
              <p className="mb-5.5 text-sm font-light leading-[1.65] text-steel-500">
                Infraestructura, equipamiento y conocimiento para ofrecer soluciones de nivel
                internacional desde Uruguay.
              </p>
              <dl className="flex flex-col">
                {SPECS.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline justify-between gap-6 border-t border-steel-900/10 py-4"
                  >
                    <dt className="shrink-0 text-[13.5px] font-normal text-steel-500">{spec.label}</dt>
                    <dd className="text-right text-[13.5px] font-medium text-steel-900">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
