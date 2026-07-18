import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import WorkZeya from './pages/WorkZeya'
import WorkPutuo from './pages/WorkPutuo'

/** 路由切换时回到页面顶部 */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <ScrollToTop />
      <ScrollProgress />
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works/zeya" element={<WorkZeya />} />
          <Route path="/works/putuo" element={<WorkPutuo />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
