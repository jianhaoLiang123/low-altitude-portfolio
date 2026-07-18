import { useEffect, useRef } from 'react'

/**
 * 页面滚动进度条：2px 蓝色，fixed 顶部。
 * 宽度通过 ref 直接写 style，不触发 React 重渲染。
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const pct = max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0
      if (barRef.current) barRef.current.style.width = `${pct}%`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5">
      <div ref={barRef} className="h-full w-0 bg-blue-600" />
    </div>
  )
}
