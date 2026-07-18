import { useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryItem } from './ImageGallery'

/**
 * 图片灯箱：全屏遮罩看大图。
 * - 点击遮罩 / ESC 关闭
 * - 左右箭头（按钮 + 键盘 ←/→）切换同组图片
 * - 打开时锁定页面滚动；动画由全局 CSS 控制，reduced-motion 时自动关闭
 */
interface LightboxProps {
  images: GalleryItem[]
  /** 当前打开的图片下标；null 表示关闭 */
  index: number | null
  onClose: () => void
  onIndexChange: (i: number) => void
}

export default function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const open = index !== null
  const total = images.length

  const prev = useCallback(() => {
    if (index !== null) onIndexChange((index - 1 + total) % total)
  }, [index, total, onIndexChange])
  const next = useCallback(() => {
    if (index !== null) onIndexChange((index + 1) % total)
  }, [index, total, onIndexChange])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    // 锁定背景滚动
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = original
    }
  }, [open, onClose, prev, next])

  if (!open) return null
  const current = images[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`图片查看器：${current.title}`}
      className="fixed inset-0 z-[60] flex flex-col bg-slate-950/90"
      onClick={onClose}
    >
      {/* 顶栏：计数 + 关闭 */}
      <div className="flex items-center justify-between px-5 py-4" onClick={(e) => e.stopPropagation()}>
        <span className="text-sm text-slate-300 tabular-nums">
          {index + 1} / {total}
        </span>
        <button
          onClick={onClose}
          aria-label="关闭"
          className="rounded-full p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
        >
          <X size={22} />
        </button>
      </div>

      {/* 主图区 */}
      <div className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-16">
        <img
          key={current.src}
          src={current.src}
          alt={current.title}
          className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {total > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="上一张"
              className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur transition-colors hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none md:left-6"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="下一张"
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur transition-colors hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none md:right-6"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* 底部标题与说明 */}
      <div
        className="mx-auto w-full max-w-3xl px-6 pb-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-base font-semibold text-white">{current.title}</p>
        <p className="mt-1 text-sm text-slate-300">{current.caption}</p>
      </div>
    </div>
  )
}
