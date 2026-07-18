import { Link } from 'react-router-dom'
import HudCorners from './HudCorners'

/**
 * 作品卡片：真实封面（16:9，hover 缓放 1.05）+ 标题 / 标签 / 一句话简介 + 详情链接。
 * hover：卡片上浮 4px + 蓝色发光阴影 + HUD 边角显现。
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
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10">
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

        <Link
          to={to}
          className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        >
          查看详情 <span aria-hidden className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </div>
  )
}
