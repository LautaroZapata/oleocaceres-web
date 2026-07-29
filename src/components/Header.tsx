import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#capacidad', label: 'Capacidad' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-20">
        <a href="#inicio" className="flex items-center gap-2 sm:gap-3 group min-h-[44px]">
          <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-hydra-400/10 flex items-center justify-center group-hover:bg-hydra-400/20 transition-colors flex-shrink-0">
            <span className="text-hydra-400 text-xs sm:text-sm font-bold">OC</span>
          </div>
          <div className="hidden sm:block">
            <span className="block text-sm font-semibold text-white leading-tight">OLEOCACERES</span>
            <span className="block text-[10px] text-steel-500 font-medium tracking-wider uppercase">Oleohidráulica</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-2 xl:px-4 py-2 text-sm font-medium text-steel-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/[0.04]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center -mr-1"
          aria-label="Menú"
          style={{ touchAction: 'manipulation' }}
        >
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <span className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <nav className="bg-surface/95 backdrop-blur-md border-t border-surface-border px-5 sm:px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-base font-medium text-steel-400 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors min-h-[44px] flex items-center"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
