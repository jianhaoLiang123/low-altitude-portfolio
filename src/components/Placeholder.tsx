import { cn } from '@/lib/utils'

/**
 * 占位区块组件 —— 骨架版核心组件。
 * 用虚线框示意「这里将来放什么内容」，方便用户确认框架后逐个填充。
 *
 * @param badge   编号徽标文字，如 "区域 ①"
 * @param title   占位标题，如 "亮点数据卡片"
 * @param description  说明文字：描述这个区域将来放什么内容
 * @param className    可选，用于调整高度/比例等（如 aspect-video、min-h-96）
 */
interface PlaceholderProps {
  badge: string
  title: string
  description: string
  className?: string
}

export default function Placeholder({ badge, title, description, className }: PlaceholderProps) {
  return (
    <div
      className={cn(
        'flex min-h-48 w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center',
        className,
      )}
    >
      <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">
        {badge}
      </span>
      <p className="text-base font-semibold text-slate-700">{title}</p>
      <p className="max-w-xl text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  )
}
