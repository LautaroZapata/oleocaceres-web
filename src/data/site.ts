/**
 * Canonical origin, no trailing slash. Also hardcoded in `index.html`
 * (og:url, og:image, canonical) — update both when a custom domain lands.
 */
export const SITE_URL = 'https://oleocaceres-web.vercel.app'

export const CONTACTO = {
  calle: 'Benito Álvarez 815',
  ciudad: 'Montevideo, Uruguay',
  telefono: '(+598) 2308 3584',
  telefonoHref: 'tel:+59823083584',
  email: 'oleocaceres@hotmail.com',
  emailHref: 'mailto:oleocaceres@hotmail.com',
  mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.581479460541!2d-56.2132238840928!3d-34.84161388039842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1d52e5b2867fb%3A0x35a367bf544cf159!2sCalle%20Benito%20Alvarez%20815%2C%2012900%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1642876334783!5m2!1ses-419!2suy',
} as const

export const NAV_ITEMS = [
  { href: '#empresa', label: 'La empresa' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#clientes', label: 'Clientes' },
] as const

/** Subset shown in the hero strip. */
export const HERO_LOGOS = [
  { img: '/logoANCAP.webp', alt: 'ANCAP' },
  { img: '/ute.webp', alt: 'UTE' },
  { img: '/anp.webp', alt: 'ANP' },
  { img: '/logoArmadaNacional.webp', alt: 'Armada Nacional' },
  { img: '/logoIM.webp', alt: 'Intendencia de Montevideo' },
  { img: '/bomberos.webp', alt: 'Bomberos' },
  { img: '/logoicanelones.webp', alt: 'Intendencia de Canelones' },
  { img: '/logoiMaldonado.webp', alt: 'Intendencia de Maldonado' },
] as const

export const CLIENTES = [
  { img: '/logoANCAP.webp', alt: 'ANCAP' },
  { img: '/ute.webp', alt: 'UTE' },
  { img: '/anp.webp', alt: 'ANP' },
  { img: '/logoafe.webp', alt: 'AFE' },
  { img: '/logoArmadaNacional.webp', alt: 'Armada Nacional' },
  { img: '/bomberos.webp', alt: 'Bomberos' },
  { img: '/logoInstitutoAntartico.webp', alt: 'Instituto Antártico' },
  { img: '/logoIM.webp', alt: 'Intendencia de Montevideo' },
  { img: '/logoicanelones.webp', alt: 'Intendencia de Canelones' },
  { img: '/logoiColonia.webp', alt: 'Intendencia de Colonia' },
  { img: '/logoiMaldonado.webp', alt: 'Intendencia de Maldonado' },
  { img: '/logoiPaysandu.webp', alt: 'Intendencia de Paysandú' },
  { img: '/logoiSalto.webp', alt: 'Intendencia de Salto' },
] as const

export const STATS = [
  { value: 20, suffix: '+', label: 'Años de experiencia', desc: 'Desde 2002 al servicio de la industria' },
  { value: 1100, suffix: ' m²', label: 'Metros cuadrados', desc: 'De planta industrial en Montevideo' },
  { value: 3, suffix: '', label: 'Áreas de acción', desc: 'Importación, fabricación y reparación' },
  { value: 13, suffix: '+', label: 'Clientes públicos', desc: 'En todo el territorio nacional' },
] as const

export const SPECS = [
  { label: 'Superficie de planta', value: '1.100 m² · Montevideo' },
  { label: 'Banco de pruebas', value: 'Hidrosistemas · 60 HP / 5 HP' },
  { label: 'Rangos de velocidad', value: '850 / 1.050 / 1.450 rpm' },
  { label: 'Unidad portátil', value: 'Evaluaciones en campo' },
  { label: 'Supervisión técnica', value: 'Postgrados int. · ex-COCAP' },
] as const

export const SERVICIOS = [
  {
    numero: '01',
    titulo: 'Importación',
    img: '/img005.webp',
    descripcion:
      'Traemos al país componentes y repuestos hidráulicos de fabricantes internacionales. Gestionamos la cadena de suministro para que tu industria nunca se detenga.',
  },
  {
    numero: '02',
    titulo: 'Fabricación',
    img: '/img004.webp',
    descripcion:
      'Diseñamos y fabricamos componentes hidráulicos a medida. Desde piezas personalizadas hasta sistemas completos, con la precisión que exige la industria moderna.',
  },
  {
    numero: '03',
    titulo: 'Reparación',
    img: '/img006.webp',
    descripcion:
      'Diagnosticamos, reparamos y probamos cilindros y equipos hidráulicos de todo tipo y tamaño. Nuestro banco de pruebas garantiza resultados con estándares internacionales.',
  },
] as const

export const SERVICIO_OPCIONES = ['Importación', 'Fabricación', 'Reparación'] as const
