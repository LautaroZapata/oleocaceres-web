import { useEffect, useState } from 'react'
import { Logotipo } from './Logotipo'
import { NAV_ITEMS } from '../data/site'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-80 w-full border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || menuOpen
          ? 'border-white/10 bg-surface/[0.86] backdrop-blur-lg'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:h-21 lg:px-10">
        <a href="#inicio" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <Logotipo />
        </a>

        <nav className="hidden items-center gap-0.5 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2.5 text-[13.5px] font-normal text-steel-300 transition-all duration-300 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-3.5 rounded-full bg-hydra-400 px-5.5 py-3 text-[13px] font-semibold text-surface shadow-[0_8px_22px_-10px_rgba(212,168,83,0.9)] transition-all duration-300 hover:-translate-y-px hover:bg-hydra-300"
          >
            Contactarnos
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span className="flex flex-col items-center justify-center gap-[5px]">
            <span className={`block h-0.5 w-5 rounded bg-white transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 rounded bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 rounded bg-white transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out md:hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <nav className="flex flex-col gap-1 border-t border-white/10 px-5 py-4 sm:px-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-4 text-base font-normal text-steel-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex min-h-11 items-center justify-center rounded-full bg-hydra-400 px-5 text-sm font-semibold text-surface"
          >
            Contactarnos
          </a>
        </nav>
      </div>
    </header>
  )
}
