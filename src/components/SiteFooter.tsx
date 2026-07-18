/**
 * 页脚：上部为 CAAC 执照验证二维码区块，下部为版权信息。
 */
export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-10">
        {/* 执照验证二维码（左文右码，移动端文字在上） */}
        <div className="mb-8 flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-slate-900">扫描右侧二维码进行执照验证</p>
            <p className="mt-1 text-xs text-slate-500">CAAC 中型多旋翼超视距驾驶员执照</p>
          </div>
          <img
            src="images/caac-qr.png"
            alt="CAAC 无人机执照验证二维码"
            className="h-32 w-32 shrink-0 rounded-lg border border-slate-200 bg-white object-contain p-2"
          />
        </div>

        <div className="flex flex-col items-center gap-1.5 text-center">
          <p className="text-sm text-slate-600">© 2026 梁兼豪 · 低空经济解决方案工程师</p>
          <p className="text-xs text-slate-400">Designed &amp; Built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
