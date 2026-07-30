import { Logotipo } from './Logotipo'
import { CONTACTO, NAV_ITEMS } from '../data/site'

const FOOTER_NAV = [{ href: '#inicio', label: 'Inicio' }, ...NAV_ITEMS, { href: '#contacto', label: 'Contacto' }]

export function Footer() {
  return (
    <footer className="bg-surface text-steel-300">
      <div className="mx-auto max-w-[1200px] px-5 pt-16 pb-8 sm:px-8 lg:px-10 lg:pt-19">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          <div>
            <Logotipo className="mb-5.5" />
            <p className="max-w-[320px] text-sm font-light leading-[1.75] text-steel-500">
              Especialistas en oleohidráulica. Desde Montevideo, más de 20 años al servicio de la
              industria nacional.
            </p>
          </div>

          <div>
            <h4 className="mb-4.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm font-light text-steel-400 transition-colors duration-300 hover:text-hydra-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-light text-steel-400">
              <li>{CONTACTO.calle}</li>
              <li>{CONTACTO.ciudad}</li>
              <li>
                <a href={CONTACTO.telefonoHref} className="transition-colors duration-300 hover:text-hydra-300">
                  {CONTACTO.telefono}
                </a>
              </li>
              <li>
                <a
                  href={CONTACTO.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hydra-300 transition-colors duration-300 hover:text-hydra-200"
                >
                  {CONTACTO.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-13 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6.5 sm:flex-row">
          <p className="text-xs font-light text-steel-600">
            © {new Date().getFullYear()} OLEOHIDRÁULICA CÁCERES. Todos los derechos reservados.
          </p>
          <div className="flex gap-6.5 text-xs font-light">
            <a href="#" className="text-steel-600 transition-colors duration-300 hover:text-steel-300">Privacidad</a>
            <a href="#" className="text-steel-600 transition-colors duration-300 hover:text-steel-300">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
