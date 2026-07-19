/**
 * 页脚：版权信息。
 */
export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-1.5 px-6 py-10 text-center">
        <p className="text-sm text-slate-600">© 2026 梁兼豪 · 低空经济解决方案工程师</p>
        <p className="text-xs text-slate-400">Designed &amp; Built with React + Tailwind</p>
      </div>
    </footer>
  )
}
