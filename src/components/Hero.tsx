import { HERO_LOGOS } from '../data/site'

/** Entrance stagger, in seconds, matching the design's cascade. */
const rise = (delay: number) => ({ animationDelay: `${delay}s` })

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-surface pt-28 sm:pt-32 lg:pt-42">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(105deg,#0a0a0a_8%,rgba(10,10,10,0.86)_44%,rgba(10,10,10,0.55)_100%)]" />
        <div className="bg-grid-hero absolute inset-0" />
        <div className="absolute -top-[16%] -right-[8%] h-[760px] w-[760px] animate-drift rounded-full bg-[radial-gradient(circle,rgba(212,168,83,0.13)_0%,rgba(212,168,83,0)_66%)] blur-[24px]" />
        <div className="absolute -bottom-[24%] -left-[10%] h-[520px] w-[520px] animate-drift-reverse rounded-full bg-[radial-gradient(circle,rgba(212,168,83,0.07)_0%,rgba(212,168,83,0)_70%)] blur-[20px]" />
      </div>

      <div className="relative z-1 mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-[940px] pb-10 sm:pb-11">
          <span className="oc-rise inline-flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.26em] text-hydra-400">
            <span className="h-px w-[34px] bg-hydra-400/55" />
            Especialistas en oleohidráulica
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,11vw,7rem)] font-bold leading-[0.95] tracking-[-0.038em] text-white sm:mt-7 sm:text-[clamp(3rem,7vw,7rem)]">
            <span className="oc-rise block" style={rise(0.06)}>OLEO</span>
            <span className="oc-rise block text-hydra-300" style={rise(0.16)}>HIDRÁULICA</span>
            <span className="oc-rise block" style={rise(0.26)}>CÁCERES</span>
          </h1>

          <p
            className="oc-rise mt-7 max-w-[620px] text-base font-light leading-relaxed text-pretty text-steel-300 sm:text-lg"
            style={rise(0.36)}
          >
            Desde Montevideo, más de 20 años importando, fabricando y reparando componentes
            hidráulicos al servicio de la industria nacional.
          </p>

          <div
            className="oc-rise mt-9 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center"
            style={rise(0.46)}
          >
            <a
              href="#contacto"
              className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full bg-hydra-400 px-7 py-4 text-[14.5px] font-semibold text-surface shadow-[0_14px_34px_-14px_rgba(212,168,83,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-hydra-300 hover:shadow-[0_20px_42px_-14px_rgba(212,168,83,0.95)]"
            >
              Ponerse en contacto
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-[14.5px] font-medium text-steel-100 transition-all duration-300 hover:border-hydra-400/60 hover:bg-hydra-400/[0.07] hover:text-white"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-1 mt-6 border-t border-white/8 bg-surface/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:gap-9 lg:px-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] whitespace-nowrap text-steel-600">
            Trabajamos para
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
            {HERO_LOGOS.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-[30px] w-13 items-center justify-center opacity-35 grayscale brightness-190 transition-all duration-400 hover:opacity-85 hover:grayscale-0 hover:brightness-100"
              >
                <img src={logo.img} alt={logo.alt} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
