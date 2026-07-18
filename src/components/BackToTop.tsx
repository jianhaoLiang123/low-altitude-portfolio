import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * 「回到顶部」悬浮按钮：滚动超过 600px 才出现（用于内容较长的详情页）。
 */
export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <button
      onClick={toTop}
      aria-label="回到顶部"
      tabIndex={show ? 0 : -1}
      className={cn(
        'fixed right-6 bottom-6 z-40 rounded-full border border-slate-200 bg-white p-3 text-slate-600 shadow-lg transition-all duration-300 ease-out hover:border-blue-300 hover:text-blue-600 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <ArrowUp size={18} />
    </button>
  )
}
