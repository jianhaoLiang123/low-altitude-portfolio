import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * 数字滚动（count-up）：进入视口时触发一次，ease-out cubic。
 * 尊重 prefers-reduced-motion（命中时直接显示终值）。
 */
interface CountUpProps {
  /** 目标数值 */
  to: number
  /** 前缀，如 "≥" / "约 " */
  prefix?: string
  /** 后缀，如 " 年" / "+" / " 分" */
  suffix?: string
  /** 动画时长（ms），默认 1200 */
  duration?: number
  className?: string
}

export default function CountUp({ to, prefix = '', suffix = '', duration = 1200, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return
        started.current = true
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3) // ease-out cubic
          setValue(Math.round(eased * to))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}
