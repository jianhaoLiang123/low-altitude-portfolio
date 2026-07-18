/**
 * 项目信息栏：角色 / 周期 / 客户类型 / 方案类型 等键值对横排。
 */
export interface InfoItem {
  label: string
  value: string
}

export default function InfoGrid({ items }: { items: InfoItem[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-sm lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1 bg-white px-5 py-4">
          <dt className="text-xs text-slate-500">{item.label}</dt>
          <dd className="text-sm font-semibold text-slate-900">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
