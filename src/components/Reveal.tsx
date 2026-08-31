import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * 滚动渐入容器：进入视口时 fade-up（上移 16px + 透明度）。
 * 全站统一的入场动效，尊重 prefers-reduced-motion（命中时直接显示）。
 *
 * @param delay 入场延迟（ms），用于同级元素的 stagger（建议 60–100ms 阶梯）
 */
interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      // threshold 取 0：元素进入视口（含 rootMargin 预留 40px）即触发。
      // 不能用 0.15 之类的比例阈值——「方案全文」这类超高 section（高度超过
      // 视口 ÷ 0.15 ≈ 6.7 倍）永远到不了 15% 可见比例，会永久 opacity-0 占位，
      // 表现为正文与底部导航之间出现巨大空白。
      { threshold: 0, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-500 ease-out will-change-transform',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
