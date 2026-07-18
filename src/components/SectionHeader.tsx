import { cn } from '@/lib/utils'

/**
 * 统一的 Section 标题组件：eyebrow 小标签 + 大标题 + 可选描述。
 */
interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <span className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-blue-600 uppercase">
        {/* 小方块装饰（旋转 45° 呈菱形，HUD 感） */}
        <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-blue-600" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-slate-500">{description}</p>
      )}
    </div>
  )
}
