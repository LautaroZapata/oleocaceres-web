import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Reveal } from './Reveal'
import { CONTACTO, SERVICIO_OPCIONES } from '../data/site'

const FIELD =
  'w-full rounded-xl border border-steel-900/15 bg-white px-4 py-3.5 text-[14.5px] text-steel-900 outline-none transition-all duration-300 placeholder:text-steel-400 focus:border-hydra-400 focus:ring-4 focus:ring-hydra-400/15'

const LABEL = 'mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-steel-500'

/** Set in `.env` (see `.env.example`) and in Vercel → Environment Variables. */
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

export function Contacto() {
  const formRef = useRef<HTMLFormElement>(null)
  const [servicio, setServicio] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!formRef.current) return

    if (!servicio) {
      setError('Elegí qué necesitás para que podamos derivar tu consulta.')
      return
    }

    if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
      console.error('Faltan las variables VITE_EMAILJS_* — la consulta no se envió.')
      setError(`No pudimos enviar la consulta. Escribinos a ${CONTACTO.email} o llamanos al ${CONTACTO.telefono}.`)
      return
    }

    setLoading(true)
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, formRef.current, EMAILJS.publicKey)
      setSent(true)
    } catch (err) {
      console.error('EmailJS sendForm falló:', err)
      setError('Hubo un error al enviar la consulta. Intentalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="bg-white py-20 sm:py-26 lg:py-33">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-18">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.26em] text-hydra-600">
              <span className="h-px w-[34px] bg-hydra-600/45" />
              Hablá con un técnico
            </span>
            <h2 className="mt-5 font-display text-[clamp(2.1rem,4vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.032em] text-pretty text-steel-900">
              Contanos qué equipo <span className="text-hydra-700">necesitás resolver</span>
            </h2>
            <p className="mt-5 max-w-[440px] text-base font-light leading-[1.75] text-pretty text-steel-500">
              Respondemos cada consulta con un diagnóstico preliminar y un plazo estimado de trabajo.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-5 rounded-3xl border border-hydra-600/15 bg-hydra-50 px-6 py-8 sm:px-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className={LABEL}>Nombre</label>
                  <input id="nombre" name="name" type="text" required placeholder="Tu nombre" className={FIELD} />
                </div>
                <div>
                  <label htmlFor="email" className={LABEL}>Email</label>
                  <input id="email" name="email" type="email" required placeholder="tu@email.com" className={FIELD} />
                </div>
              </div>

              <fieldset>
                <legend className={LABEL}>Qué necesitás</legend>
                <div className="flex flex-col gap-2.5 sm:flex-row">
                  {SERVICIO_OPCIONES.map((opcion) => {
                    const activo = servicio === opcion
                    return (
                      <button
                        key={opcion}
                        type="button"
                        aria-pressed={activo}
                        onClick={() => {
                          setServicio(activo ? '' : opcion)
                          setError('')
                        }}
                        className={`min-h-11 flex-1 rounded-xl border px-2.5 py-3 text-[13.5px] font-medium transition-all duration-300 ${
                          activo
                            ? 'border-hydra-400 bg-hydra-400/15 text-hydra-700'
                            : 'border-steel-900/15 bg-white text-steel-500 hover:border-hydra-600/55 hover:text-hydra-700'
                        }`}
                      >
                        {opcion}
                      </button>
                    )
                  })}
                </div>
                <input type="hidden" name="servicio" value={servicio} />
              </fieldset>

              <div>
                <label htmlFor="mensaje" className={LABEL}>Mensaje</label>
                <textarea
                  id="mensaje"
                  name="message"
                  rows={4}
                  required
                  placeholder="Marca y modelo del equipo, falla observada, urgencia…"
                  className={`${FIELD} resize-none leading-relaxed`}
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={loading || sent}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2.5 rounded-full bg-steel-900 px-7 py-4.5 text-[14.5px] font-semibold text-white shadow-[0_14px_30px_-14px_rgba(55,59,68,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden>
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando…
                  </>
                ) : sent ? (
                  'Consulta enviada'
                ) : (
                  <>
                    Enviar consulta
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              <p
                aria-live="polite"
                className={`text-center text-xs font-light ${sent ? 'text-hydra-700' : 'text-steel-400'}`}
              >
                {sent
                  ? 'Consulta registrada. Te respondemos dentro de las próximas 24 horas hábiles.'
                  : 'Te respondemos dentro de las próximas 24 horas hábiles.'}
              </p>
            </form>
          </Reveal>

          <Reveal delay={140}>
            <div className="rounded-3xl bg-steel-900 p-8 shadow-[0_30px_60px_-30px_rgba(55,59,68,0.5)] sm:p-9">
              <h3 className="mb-6.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-300">
                Información de contacto
              </h3>
              <div className="flex flex-col gap-5.5">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-xl bg-hydra-400/15 text-hydra-300">
                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-steel-400">Dirección</p>
                    <p className="mt-1 text-[15px] font-medium text-white">{CONTACTO.calle}</p>
                    <p className="mt-0.5 text-[13.5px] font-light text-steel-300">{CONTACTO.ciudad}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-xl bg-hydra-400/15 text-hydra-300">
                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-steel-400">Teléfono</p>
                    <a
                      href={CONTACTO.telefonoHref}
                      className="mt-1 inline-block text-[15px] font-medium text-white transition-colors hover:text-hydra-300"
                    >
                      {CONTACTO.telefono}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-xl bg-hydra-400/15 text-hydra-300">
                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 6.5l8.5 6 8.5-6" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-steel-400">Email</p>
                    <a
                      href={CONTACTO.emailHref}
                      className="mt-1 inline-block text-[15px] font-medium text-white transition-colors hover:text-hydra-300"
                    >
                      {CONTACTO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 h-[262px] overflow-hidden rounded-3xl border border-steel-900/12 shadow-[0_2px_3px_rgba(55,59,68,0.03)]">
              <iframe
                src={CONTACTO.mapa}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.9) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Oleohidráulica Cáceres"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
