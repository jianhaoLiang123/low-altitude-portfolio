import CountUp from './CountUp'

/**
 * 亮点数据卡网格：与首页统计条风格统一的大数字卡片。
 * countTo 存在时用 CountUp 滚动数字，否则渲染静态文本。
 */
export interface StatCardItem {
  /** 数字目标值（提供时启用 count-up） */
  countTo?: number
  /** 静态文本（countTo 缺省时使用），如 "100%" */
  text?: string
  prefix?: string
  suffix?: string
  label: string
  /** 可选补充小字 */
  sub?: string
}

export default function StatCards({ items }: { items: StatCardItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col gap-1.5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-600/10"
        >
          <span className="text-2xl font-bold text-blue-600 md:text-3xl">
            {item.countTo !== undefined ? (
              <CountUp to={item.countTo} prefix={item.prefix} suffix={item.suffix} />
            ) : (
              <>
              {item.prefix}
              {item.text}
              {item.suffix}
              </>
            )}
          </span>
          <span className="text-sm font-medium text-slate-700">{item.label}</span>
          {item.sub && <span className="text-xs text-slate-400">{item.sub}</span>}
        </div>
      ))}
    </div>
  )
}
