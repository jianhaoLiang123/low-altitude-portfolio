/**
 * HUD 式四角括号装饰（低存在感，父元素需带 group + relative，
 * hover 时括号颜色略微加深）。纯装饰，aria-hidden。
 */
export default function HudCorners() {
  const c =
    'absolute h-3.5 w-3.5 border-blue-400/30 transition-colors duration-300 group-hover:border-blue-400/60'
  return (
    <div aria-hidden className="pointer-events-none absolute inset-2 z-10">
      <span className={`${c} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${c} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${c} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${c} right-0 bottom-0 border-r-2 border-b-2`} />
    </div>
  )
}
