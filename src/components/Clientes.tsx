import { Reveal } from './Reveal'
import { CLIENTES } from '../data/site'

export function Clientes() {
  return (
    <section id="clientes" className="bg-hydra-50 py-20 sm:py-26 lg:py-33">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-[660px] text-center">
          <span className="inline-flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.26em] text-hydra-600">
            <span className="h-px w-[34px] bg-hydra-600/45" />
            Confían en nosotros
            <span className="h-px w-[34px] bg-hydra-600/45" />
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,4vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.032em] text-pretty text-steel-900">
            Proveedores del <span className="text-hydra-700">Estado uruguayo</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-base font-light leading-[1.75] text-pretty text-steel-500">
            Trece organismos públicos y empresas privadas de todo el territorio nacional eligen
            nuestra experiencia y calidad de servicio.
          </p>
        </Reveal>

        <ul className="mx-auto mt-12 grid max-w-[1060px] grid-cols-3 gap-3.5 sm:mt-15 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
          {CLIENTES.map((cliente, i) => (
            <li key={cliente.alt}>
              <Reveal delay={i * 45}>
                <div className="group flex h-20 items-center justify-center rounded-[18px] border border-steel-900/8 bg-white p-4 shadow-[0_1px_2px_rgba(55,59,68,0.03)] transition-[transform,box-shadow,border-color] duration-450 ease-oc hover:-translate-y-1 hover:border-hydra-600/30 hover:shadow-[0_18px_34px_-18px_rgba(55,59,68,0.28)] sm:h-26">
                  <img
                    src={cliente.img}
                    alt={cliente.alt}
                    className="h-full w-full object-contain opacity-60 grayscale transition-all duration-450 group-hover:opacity-100 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
