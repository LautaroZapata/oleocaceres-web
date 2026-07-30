export const EASE_OC = 'cubic-bezier(0.16, 1, 0.3, 1)'

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
