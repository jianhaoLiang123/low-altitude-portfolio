import { HelpCircle, Lightbulb, Target, ArrowRight } from 'lucide-react'

/**
 * 「我的角色与成果」三栏：难点 → 思路 → 成果。
 */
export interface TriptychItem {
  label: string
  desc: string
}

const META = [
  { icon: HelpCircle, tint: 'bg-slate-100 text-slate-600' },
  { icon: Lightbulb, tint: 'bg-blue-50 text-blue-600' },
  { icon: Target, tint: 'bg-blue-600 text-white' },
]

export default function RoleTriptych({ items }: { items: [TriptychItem, TriptychItem, TriptychItem] }) {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
      {items.map((item, i) => {
        const meta = META[i]
        const Icon = meta.icon
        return (
          <div key={item.label} className="contents">
            <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className={`rounded-lg p-2 ${meta.tint}`}>
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span className="text-sm font-bold tracking-wide text-slate-900">{item.label}</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </div>
            {i < 2 && (
              <span aria-hidden className="hidden items-center text-blue-300 md:flex">
                <ArrowRight size={20} />
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}
