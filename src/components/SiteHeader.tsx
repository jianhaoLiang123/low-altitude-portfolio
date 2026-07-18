import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

/**
 * 顶部导航（sticky，白底半透明 + backdrop-blur）。
 * 注意：路由使用 HashRouter，URL 的 hash 已被路由占用，
 * 因此页内锚点（作品/能力/经历/联系）不能用 href="#id"，
 * 统一用 scrollIntoView 实现平滑滚动。
 */

const NAV_ITEMS = [
  { id: 'works', label: '作品' },
  { id: 'skills', label: '能力' },
  { id: 'experience', label: '经历' },
  { id: 'contact', label: '联系' },
]

/** 键盘可访问性：统一的 focus-visible 高亮 */
const FOCUS_RING = 'focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  /** 滚动到首页的某个锚点区域；不在首页时先跳回首页再滚动 */
  const scrollToSection = (id: string) => {
    setOpen(false)
    const doScroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (location.pathname !== '/') {
      navigate('/')
      // 等待首页渲染完成后再滚动
      window.setTimeout(doScroll, 100)
    } else {
      doScroll()
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between px-6">
        {/* 左侧：站点名 */}
        <Link
          to="/"
          className={`rounded text-base font-bold tracking-tight text-slate-900 ${FOCUS_RING}`}
        >
          梁兼豪 <span className="font-normal text-slate-400">·</span> 作品集
        </Link>

        {/* 右侧：桌面端导航 */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 ${FOCUS_RING}`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="resume-liangjianhao.pdf"
            target="_blank"
            rel="noreferrer"
            className={`ml-3 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 ${FOCUS_RING}`}
          >
            下载简历
          </a>
        </nav>

        {/* 移动端：只保留简历按钮 + 汉堡菜单 */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="resume-liangjianhao.pdf"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 ${FOCUS_RING}`}
          >
            下载简历
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
            className={`rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 ${FOCUS_RING}`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 移动端折叠菜单 */}
      {open && (
        <nav className="border-t border-slate-200 bg-white px-6 py-3 md:hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 ${FOCUS_RING}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
