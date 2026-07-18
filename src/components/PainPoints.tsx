import { AlertCircle, CheckCircle2, ArrowRight, ArrowDown } from 'lucide-react'

/**
 * 「解决了哪些问题」区块：每条「问题 → 解决」一一对应。
 * 左侧红/灰色调问题卡 + 箭头 + 右侧蓝色调解决卡；移动端上下堆叠。
 */
export interface PainPointItem {
  problem: string
  solution: string
}

export default function PainPoints({ items }: { items: PainPointItem[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <div key={i} className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          {/* 问题 */}
          <div className="flex gap-3 rounded-xl border border-red-200 bg-red-50/50 p-5">
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-500" />
            <div>
              <p className="text-xs font-semibold tracking-wide text-red-600">问题</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.problem}</p>
            </div>
          </div>

          {/* 箭头（桌面向右 / 移动向下） */}
          <span aria-hidden className="hidden items-center text-slate-300 md:flex">
            <ArrowRight size={20} />
          </span>
          <span aria-hidden className="flex justify-center text-slate-300 md:hidden">
            <ArrowDown size={20} />
          </span>

          {/* 解决 */}
          <div className="flex gap-3 rounded-xl border border-blue-200 bg-blue-50/60 p-5">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" />
            <div>
              <p className="text-xs font-semibold tracking-wide text-blue-700">解决</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.solution}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
