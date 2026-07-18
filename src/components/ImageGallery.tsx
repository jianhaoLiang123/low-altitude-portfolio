import { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import Lightbox from './Lightbox'

/**
 * 项目图集：图片网格 + 点击打开 Lightbox。
 * 每张图配标题 + 一句说明；列表图 lazy 加载。
 */
export interface GalleryItem {
  /** images/*.webp（相对路径，适配子路径部署） */
  src: string
  /** 图片标题（也用作 alt） */
  title: string
  /** 一句说明 */
  caption: string
}

interface ImageGalleryProps {
  items: GalleryItem[]
  /** 图下注释，如「以上地图均在大疆司空 2 平台绘制」 */
  note?: string
  /** 桌面端列数，默认 2 */
  columns?: 2 | 3
}

export default function ImageGallery({ items, note, columns = 2 }: ImageGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      <div className={`grid gap-4 ${columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'}`}>
        {items.map((item, i) => (
          <figure
            key={item.src}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10"
          >
            <button
              onClick={() => setOpenIndex(i)}
              aria-label={`放大查看：${item.title}`}
              className="relative block w-full cursor-zoom-in focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            >
              <span className="block aspect-video overflow-hidden bg-slate-100">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </span>
              <span
                aria-hidden
                className="absolute right-3 bottom-3 rounded-full bg-slate-950/55 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
              >
                <ZoomIn size={16} />
              </span>
            </button>
            <figcaption className="p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      {note && <p className="mt-3 text-xs text-slate-400">{note}</p>}

      <Lightbox
        images={items}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </div>
  )
}
