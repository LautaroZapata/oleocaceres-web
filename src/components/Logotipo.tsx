type LogotipoProps = {
  className?: string
}

/** Wordmark + hairline divider + the two-line locality lockup. */
export function Logotipo({ className }: LogotipoProps) {
  return (
    <span className={`flex items-center gap-3.5 ${className ?? ''}`}>
      <img
        src="/logo-oleocaceres.png"
        alt="Oleohidráulica Cáceres — Soluciones en hidráulica"
        width={1000}
        height={360}
        className="block h-[46px] w-auto rounded-[5px]"
      />
      {/* The tagline would overflow next to the 128px-wide wordmark on small phones. */}
      <span className="hidden h-[26px] w-px bg-white/15 sm:block" />
      <span className="hidden sm:block">
        <span className="block text-[9.5px] font-medium uppercase tracking-[0.22em] text-steel-300">
          Soluciones en hidráulica
        </span>
        <span className="mt-1 block text-[9.5px] font-medium uppercase tracking-[0.22em] text-steel-500">
          Montevideo · Uruguay
        </span>
      </span>
    </span>
  )
}
