import { useEffect, useRef, useState } from 'react'
import { Briefcase } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

/**
 * 首页「盖洛普优势测评 · TOP 10 才干」板块。
 * 数据全部用数组声明，改文案只需动本文件数据区。
 */

/* ── 数据 ──────────────────────────────────────────── */

type Domain = 'strategic' | 'executing' | 'influencing'

const DOMAIN_META: Record<
  Domain,
  { label: string; bar: string; pill: string; count: string }
> = {
  strategic: {
    label: '战略思维',
    bar: 'bg-blue-600',
    pill: 'bg-blue-50 text-blue-700',
    count: 'text-blue-700',
  },
  executing: {
    label: '执行力',
    bar: 'bg-emerald-600',
    pill: 'bg-emerald-50 text-emerald-700',
    count: 'text-emerald-700',
  },
  influencing: {
    label: '影响力',
    bar: 'bg-violet-600',
    pill: 'bg-violet-50 text-violet-700',
    count: 'text-violet-700',
  },
}

/** 领域分布（条形比例即数量占比） */
const DOMAIN_STATS: { domain: Domain; count: number; pct: number }[] = [
  { domain: 'strategic', count: 4, pct: 40 },
  { domain: 'executing', count: 4, pct: 40 },
  { domain: 'influencing', count: 2, pct: 20 },
]

interface Strength {
  rank: string
  nameZh: string
  nameEn: string
  domain: Domain
  /** 官方描述 */
  desc: string
  /** 岗位体现（定制文案） */
  job: string
}

const STRENGTHS: Strength[] = [
  { rank: '01', nameZh: '分析', nameEn: 'Analytical', domain: 'strategic', desc: '喜欢探究事物的来龙去脉，能思考影响局面的诸多因素。', job: '把模糊需求梳理成可执行的行动计划' },
  { rank: '02', nameZh: '搜集', nameEn: 'Input', domain: 'strategic', desc: '喜欢搜集和整理，积累信息、观点与资源。', job: '政策、案例、产品参数的随身知识库' },
  { rank: '03', nameZh: '审慎', nameEn: 'Deliberative', domain: 'executing', desc: '做决定慎之又慎，会设想所有可能遇到的困难。', job: '报价、空域、合规风险提前识别' },
  { rank: '04', nameZh: '回顾', nameEn: 'Context', domain: 'strategic', desc: '喜欢追溯从前，通过思考过去来了解现状。', job: '从过往项目中提炼可复用的方法论' },
  { rank: '05', nameZh: '专注', nameEn: 'Focus', domain: 'executing', desc: '确定方向，贯彻始终，先确定重点再着手行动。', job: '锁定关键目标，排除干扰持续交付' },
  { rank: '06', nameZh: '纪律', nameEn: 'Discipline', domain: 'executing', desc: '做事井然有序，建立规程，遵章守纪。', job: '投标文档与流程规范有序' },
  { rank: '07', nameZh: '责任', nameEn: 'Responsibility', domain: 'executing', desc: '言而有信，恪守诚实、忠诚的价值观。', job: '对客户承诺的交付说到做到' },
  { rank: '08', nameZh: '自信', nameEn: 'Self-Assurance', domain: 'influencing', desc: '对应对生活的能力充满信心，做决定成竹在胸。', job: '面对客户与评委笃定表达方案' },
  { rank: '09', nameZh: '思维', nameEn: 'Intellection', domain: 'strategic', desc: '善于深入思考，勤于自省，敏于探讨。', job: '复杂问题想清楚再动手' },
  { rank: '10', nameZh: '追求', nameEn: 'Significance', domain: 'influencing', desc: '希望产生巨大影响，按影响力排序工作优先级。', job: '把项目做成有影响力的标杆' },
]

/* ── 进入视口触发（条形生长动画用，尊重 reduced-motion） ── */

function useInViewOnce() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, inView }
}

/* ── 组件 ──────────────────────────────────────────── */

export default function Strengths() {
  const { ref, inView } = useInViewOnce()

  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:py-24">
        <Reveal>
          <SectionHeader
            eyebrow="CLIFTONSTRENGTHS"
            title="盖洛普优势测评 · TOP 10 才干"
            description="前 10 项才干集中于战略思维与执行力——与解决方案工作所需的「深入分析、严谨交付」天然适配。"
          />
        </Reveal>

        {/* 领域分布小图表（条形宽度进入视口后生长） */}
        <Reveal>
          <div
            ref={ref}
            className="mb-10 flex max-w-2xl flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6"
          >
            {DOMAIN_STATS.map((s, i) => {
              const meta = DOMAIN_META[s.domain]
              return (
                <div key={s.domain} className="flex items-center gap-3">
                  <span className="w-16 shrink-0 text-sm font-medium text-slate-700">
                    {meta.label}
                  </span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full rounded-full ${meta.bar} transition-[width] duration-[600ms] ease-out`}
                      style={{
                        width: inView ? `${s.pct}%` : '0%',
                        transitionDelay: `${i * 100}ms`,
                      }}
                    />
                  </div>
                  <span className={`w-10 shrink-0 text-right text-sm font-semibold tabular-nums ${meta.count}`}>
                    {s.count} 项
                  </span>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* 10 张才干卡片 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {STRENGTHS.map((s, i) => {
            const meta = DOMAIN_META[s.domain]
            return (
              <Reveal key={s.rank} delay={Math.min(i * 60, 300)} className="h-full">
                <div className="group flex h-full flex-col gap-2.5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10">
                  <span className="font-mono text-xs text-slate-400">{s.rank}</span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{s.nameZh}</h3>
                    <p className="text-xs text-slate-500">{s.nameEn}</p>
                  </div>
                  <span
                    className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${meta.pill}`}
                  >
                    {meta.label}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  <div className="mt-auto border-t border-slate-100 pt-2.5">
                    <p className="flex items-start gap-1.5 text-sm leading-snug text-blue-600">
                      <Briefcase size={14} className="mt-0.5 shrink-0" />
                      {s.job}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
