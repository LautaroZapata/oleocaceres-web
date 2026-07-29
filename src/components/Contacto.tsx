import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export function Contacto() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!formRef.current) return
    setLoading(true)
    try {
      await emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', formRef.current, 'TU_PUBLIC_KEY')
      setSent(true)
    } catch {
      setError('Hubo un error al enviar el mensaje. Intentalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="bg-surface-lighter py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-hydra-400 mb-4 sm:mb-5">
            <span className="w-6 h-px bg-hydra-400/60" />
            Hablá con nosotros
          </span>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
            Contacto
          </h2>
          <div className="w-14 h-0.5 bg-hydra-400 mt-5 sm:mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-60 sm:h-72 rounded-xl bg-surface border border-surface-border">
                <svg className="w-12 sm:w-14 h-12 sm:h-14 text-hydra-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-hydra-400 text-lg sm:text-xl font-semibold">Mensaje enviado</p>
                <p className="text-steel-500 text-xs sm:text-sm mt-1 px-4 text-center">Gracias por contactarnos. Te responderemos a la brevedad.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-steel-400 mb-1.5">Nombre</label>
                    <input id="name" type="text" name="user_name" required
                      className="w-full bg-surface border border-surface-border rounded-lg px-4 py-[13px] sm:py-3 text-sm text-white placeholder-steel-600 focus:outline-none focus:border-hydra-400/50 transition-colors"
                      placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-steel-400 mb-1.5">Email</label>
                    <input id="email" type="email" name="user_email" required
                      className="w-full bg-surface border border-surface-border rounded-lg px-4 py-[13px] sm:py-3 text-sm text-white placeholder-steel-600 focus:outline-none focus:border-hydra-400/50 transition-colors"
                      placeholder="tu@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-steel-400 mb-1.5">Mensaje</label>
                  <textarea id="message" name="message" required rows={4}
                    className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-sm text-white placeholder-steel-600 focus:outline-none focus:border-hydra-400/50 transition-colors resize-none"
                    placeholder="Contanos en qué podemos ayudarte..." />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button type="submit" disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-hydra-400 text-surface font-semibold px-7 py-[13px] sm:py-3 rounded-lg text-sm hover:bg-hydra-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      Enviar mensaje
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="p-5 sm:p-6 md:p-8 rounded-xl bg-surface border border-surface-border">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-5 sm:mb-6">Información de contacto</h3>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-hydra-400/10 text-hydra-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-steel-500 font-medium uppercase tracking-wider">Dirección</p>
                    <p className="text-xs sm:text-sm text-white font-medium mt-0.5">Benito Álvarez 815</p>
                    <p className="text-[11px] sm:text-xs text-steel-400">Montevideo, Uruguay</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-hydra-400/10 text-hydra-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-steel-500 font-medium uppercase tracking-wider">Teléfono</p>
                    <p className="text-xs sm:text-sm text-white font-medium mt-0.5">(+598) 2305 3584</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-hydra-400/10 text-hydra-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-steel-500 font-medium uppercase tracking-wider">Redes</p>
                    <a href="https://www.instagram.com/oleocaceres" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-hydra-400 hover:text-hydra-300 transition-colors font-medium mt-0.5 inline-block">@oleocaceres</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-surface-border h-52 sm:h-56 lg:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.581479460541!2d-56.2132238840928!3d-34.84161388039842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1d52e5b2867fb%3A0x35a367bf544cf159!2sCalle%20Benito%20Alvarez%20815%2C%2012900%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1642876334783!5m2!1ses-419!2suy"
                width="100%" height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.85)' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación OLEOCACERES"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
