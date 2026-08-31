import { Link } from 'react-router-dom'
import HudCorners from './HudCorners'

/**
 * 作品卡片：整卡可点击（Link 包裹封面 + 标题 / 标签 / 简介），跳转作品详情页。
 * 「查看详情 →」为纯视觉引导 span（避免 a 套 a），hover 箭头右移动效保留。
 * hover：卡片上浮 4px + 蓝色发光阴影 + HUD 边角显现 + 封面缓放 1.05。
 */
interface WorkCardProps {
  title: string
  tags: string[]
  summary: string
  to: string
  /** 封面图路径（images/*.webp，相对路径） */
  cover: string
  /** 有意义的封面 alt 文本 */
  coverAlt: string
}

export default function WorkCard({ title, tags, summary, to, cover, coverAlt }: WorkCardProps) {
  return (
    <Link
      to={to}
      aria-label={`查看作品：${title}`}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <HudCorners />

      {/* 16:9 封面（非首屏，懒加载） */}
      <div className="relative aspect-video overflow-hidden border-b border-slate-100 bg-slate-100">
        <img
          src={cover}
          alt={coverAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-lg leading-snug font-bold text-slate-900">{title}</h3>

        {/* 标签行 */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-slate-600">{summary}</p>

        {/* 视觉引导（非链接，整卡已可点击） */}
        <span className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
          查看详情 <span aria-hidden className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  )
}
