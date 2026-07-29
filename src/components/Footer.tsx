export function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-hydra-400/10 flex items-center justify-center">
                <span className="text-hydra-400 text-sm font-bold">OC</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-white leading-tight">OLEOCACERES</span>
                <span className="block text-[10px] text-steel-500 font-medium tracking-wider uppercase">Oleohidráulica</span>
              </div>
            </div>
            <p className="text-sm text-steel-500 leading-relaxed max-w-xs font-light">
              Especialistas en oleohidráulica. Desde Montevideo,
              más de 20 años al servicio de la industria nacional.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Navegación</h4>
            <ul className="space-y-2.5">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#trayectoria', label: 'Trayectoria' },
                { href: '#servicios', label: 'Servicios' },
                { href: '#capacidad', label: 'Capacidad' },
                { href: '#clientes', label: 'Clientes' },
                { href: '#contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-steel-400 hover:text-hydra-400 transition-colors font-light">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-sm text-steel-400 font-light">
              <li>Benito Álvarez 815</li>
              <li>Montevideo, Uruguay</li>
              <li>(+598) 2305 3584</li>
              <li>
                <a href="https://www.instagram.com/oleocaceres" target="_blank" rel="noopener noreferrer" className="text-hydra-400 hover:text-hydra-300 transition-colors">@oleocaceres</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-border mt-8 sm:mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[11px] sm:text-xs text-steel-600 font-light text-center sm:text-left">
            &copy; {new Date().getFullYear()} OLEOHIDRÁULICA CÁCERES. Todos los derechos reservados.
          </p>
          <div className="flex gap-5 sm:gap-6 text-[11px] sm:text-xs text-steel-600 font-light">
            <a href="#" className="hover:text-steel-400 transition-colors min-h-[44px] flex items-center">Privacidad</a>
            <a href="#" className="hover:text-steel-400 transition-colors min-h-[44px] flex items-center">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
