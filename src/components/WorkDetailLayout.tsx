import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import HudCorners from './HudCorners'
import BackToTop from './BackToTop'

/**
 * 作品详情页通用容器。
 * 页头：封面横幅（深蓝渐变遮罩 + 白字 + HUD 边角）；
 * 内容区：由页面以 children 传入各 section；
 * 底部：下一个作品链接 + 回到顶部悬浮按钮。
 */
interface WorkDetailLayoutProps {
  /** eyebrow 小标签，如 "作品 01 · 水利巡检" */
  eyebrow: string
  /** 页面大标题 */
  title: string
  /** 标签行 */
  tags: string[]
  /** 页头横幅封面（images/*.webp，相对路径） */
  cover: string
  coverAlt: string
  /** 底部下一个作品链接 */
  next: { to: string; label: string }
  children: ReactNode
}

export default function WorkDetailLayout({
  eyebrow,
  title,
  tags,
  cover,
  coverAlt,
  next,
  children,
}: WorkDetailLayoutProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-12 md:py-16">
        {/* 返回首页 */}
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-slate-500 transition-colors hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        >
          <span aria-hidden className="mr-1">←</span> 返回首页
        </Link>

        {/* 页头：封面横幅 + 深蓝渐变遮罩（保证白字可读） */}
        <div className="group relative mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <img
            src={cover}
            alt={coverAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/75 to-slate-900/50"
          />
          <HudCorners />
          <header className="relative flex min-h-64 flex-col justify-end gap-4 p-8 md:min-h-80 md:p-12">
            <span className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-blue-300 uppercase">
              <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-blue-300" />
              {eyebrow}
            </span>
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              {title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
        </div>

        {/* 内容区域 */}
        <div className="flex flex-col gap-16 py-12 md:gap-20">{children}</div>

        {/* 底部：下一个作品 */}
        <Link
          to={next.to}
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-6 py-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        >
          <span className="text-base font-semibold text-slate-900">{next.label}</span>
          <span aria-hidden className="text-xl text-blue-600 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>

      {/* 详情页内容较长：回到顶部悬浮按钮 */}
      <BackToTop />
    </div>
  )
}
