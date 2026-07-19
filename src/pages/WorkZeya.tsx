import { Download } from 'lucide-react'
import WorkDetailLayout from '../components/WorkDetailLayout'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import InfoGrid from '../components/InfoGrid'
import StatCards from '../components/StatCards'
import ImageGallery, { type GalleryItem } from '../components/ImageGallery'
import RoleTriptych from '../components/RoleTriptych'
import MarkdownView from '../components/MarkdownView'
import PainPoints from '../components/PainPoints'
import content from '../content/zeya.md?raw'

/**
 * 作品 01：温州泽雅水库无人机巡检建设方案（完整内容版）
 */

/** 区域④：人工巡检 vs 无人机巡检 纯 Tailwind 条形对比 */
const COMPARISONS = [
  { label: '单次全库巡检', manual: '2–3 天', drone: '2–3 小时', manualPct: 100, dronePct: 6, note: '效率提升 10 倍以上' },
  { label: '日均覆盖范围', manual: '≤10 公里', drone: '全域 30+ 公里', manualPct: 30, dronePct: 100, note: '覆盖范围扩大 3 倍以上' },
  { label: '巡检频次', manual: '每周 1 次', drone: '每天多次', manualPct: 14, dronePct: 100, note: '频次提升 7 倍以上' },
  { label: '异常响应', manual: '1–3 天', drone: '30 分钟', manualPct: 100, dronePct: 5, note: '时效提升 90% 以上' },
]

const GALLERY: GalleryItem[] = [
  {
    src: 'images/zeya-location.webp',
    title: '项目位置',
    caption: '泽雅水库大坝南侧（坝口）部署点位，紧邻取水口与溢洪道',
  },
  {
    src: 'images/zeya-coverage.webp',
    title: '覆盖测算',
    caption: '机巢布置位置与 5km 巡检半径覆盖范围测算',
  },
  {
    src: 'images/zeya-route.webp',
    title: '巡检路线',
    caption: '大坝取水口 → 一级保护区 → 环库陆域 → 入库支流',
  },
]

export default function WorkZeya() {
  return (
    <WorkDetailLayout
      eyebrow="作品 01 · 水利巡检"
      title="温州泽雅水库无人机巡检建设方案"
      tags={['水利巡检', '建设方案', 'ROI 分析', '大疆司空2']}
      cover="images/cover-zeya.webp"
      coverAlt="泽雅水库无人机巡检建设方案封面横幅"
      next={{ to: '/works/putuo', label: '查看下一个作品：普陀区低空经济岛际物流服务采购项目' }}
    >
      {/* ── 区域① 项目概览 ─────────────────────────── */}
      <Reveal>
        <section>
          <SectionHeader eyebrow="01 · OVERVIEW" title="项目概览" />
          <p className="max-w-3xl text-base leading-relaxed text-slate-600">
            泽雅水库是温州市区重要的饮用水源地，承担温州市区约 20%
            的供水量。客户希望「用无人机代替人工」完成库区巡检，但需求、预算与验收标准均较为模糊——需要一套从硬件选型、机巢选址、空域申报到运营保障的全流程建设方案，把模糊想法落地为可执行、可验收的项目。
          </p>
          <div className="mt-6">
            <InfoGrid
              items={[
                { label: '我的角色', value: '解决方案负责人' },
                { label: '项目周期', value: '2026.4 – 2026.5' },
                { label: '客户类型', value: '水利主管单位 / 国企' },
                { label: '方案类型', value: '建设方案 + ROI 分析' },
              ]}
            />
          </div>
          <div className="mt-6">
            <a
              href="works-zeya.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Download size={16} />
              下载完整方案 PDF
            </a>
          </div>
        </section>
      </Reveal>

      {/* ── 区域② 解决了哪些问题 ────────────────────── */}
      <Reveal>
        <section>
          <SectionHeader eyebrow="02 · PAIN POINTS → SOLUTIONS" title="解决了哪些问题" />
          <PainPoints
            items={[
              {
                problem: '人工巡检日均覆盖 ≤5 公里，20 公里岸线巡查效率低',
                solution: '无人机自动化巡检全域覆盖，单次全库仅 2–3 小时，效率提升 10 倍',
              },
              {
                problem: '库区地形复杂，部分岸线难以到达，存在监控死角',
                solution: '空中视角无死角巡查，坝体巡检覆盖率 100%，热成像识别隐蔽渗漏',
              },
              {
                problem: '隐患依赖人工上报，响应链条长，难以即时预警',
                solution: '5G 实时回传 + AI 自动识别，异常 30 分钟内响应',
              },
              {
                problem: '监控系统与水质数据未整合，缺乏统一分析平台',
                solution: '云平台统一管理，建立全生命周期数字档案与分级预警',
              },
            ]}
          />
        </section>
      </Reveal>

      {/* ── 区域③ 亮点数据卡 ───────────────────────── */}
      <Reveal>
        <section>
          <SectionHeader eyebrow="03 · KEY METRICS" title="亮点数据" />
          <StatCards
            items={[
              { countTo: 5794, suffix: ' 万 m³', label: '总库容' },
              { countTo: 10, suffix: ' 倍', label: '巡检效率提升' },
              { countTo: 15, suffix: ' 分钟', label: '应急响应抵达' },
              { countTo: 30, prefix: '≤', suffix: ' 分钟', label: '异常发现' },
              { countTo: 100, suffix: '%', label: '坝体巡检覆盖率' },
              { countTo: 38, prefix: '约 ', suffix: ' 万', label: '3 年总投入', sub: '脱敏量级' },
            ]}
          />
        </section>
      </Reveal>

      {/* ── 区域④ 人工 vs 无人机 对比 ──────────────── */}
      <Reveal>
        <section>
          <SectionHeader
            eyebrow="04 · COMPARISON"
            title="人工巡检 vs 无人机巡检"
            description="四组核心指标成对对比，条形长度为示意比例"
          />
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            {/* 图例 */}
            <div className="mb-6 flex flex-wrap items-center gap-5 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" /> 人工巡检
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600" /> 无人机巡检
              </span>
              <span className="ml-auto">* 条形长度为示意比例</span>
            </div>
            <div className="flex flex-col gap-7">
              {COMPARISONS.map((c) => (
                <div key={c.label}>
                  <p className="mb-2 text-sm font-semibold text-slate-900">{c.label}</p>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-2.5 rounded-full bg-slate-300"
                        style={{ width: `${c.manualPct}%` }}
                      />
                      <span className="shrink-0 text-xs text-slate-500 tabular-nums">{c.manual}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="h-2.5 rounded-full bg-blue-600"
                        style={{ width: `${c.dronePct}%` }}
                      />
                      <span className="shrink-0 text-xs font-medium text-blue-700 tabular-nums">
                        {c.drone}
                      </span>
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-400">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── 区域⑤ 项目图集 ─────────────────────────── */}
      <Reveal>
        <section>
          <SectionHeader
            eyebrow="05 · GALLERY"
            title="项目图集"
            description="在大疆司空 2 平台完成选址、覆盖测算与路线规划"
          />
          <ImageGallery
            items={GALLERY}
            note="以上地图均在大疆司空 2 平台绘制，点击图片可放大查看。"
          />
        </section>
      </Reveal>

      {/* ── 区域⑥ 完整方案全文 ─────────────────────── */}
      <Reveal>
        <section>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="06 · FULL PROPOSAL"
              title="方案全文"
              description="以下为完整建设方案，报价已脱敏为量级"
              className="mb-0"
            />
            <a
              href="works-zeya.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Download size={15} />
              下载 PDF 版
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <MarkdownView content={content} />
          </div>
        </section>
      </Reveal>

      {/* ── 区域⑦ 我的角色与成果 ───────────────────── */}
      <Reveal>
        <section>
          <SectionHeader eyebrow="07 · MY ROLE" title="我的角色与成果" />
          <RoleTriptych
            items={[
              {
                label: '难点',
                desc: '客户需求模糊——仅提出「用无人机代替人工」，预算与验收标准均不明确。',
              },
              {
                label: '思路',
                desc: '深入一线调研，以同类场景标杆案例与客户拉齐需求，设计「无人机 + 自动化机巢 + 云平台」全场景方案。',
              },
              {
                label: '成果',
                desc: '完成从硬件选型、机巢选址、空域申报到运营保障的全流程方案输出，将模糊需求聚焦为真实购买需求。',
              },
            ]}
          />
        </section>
      </Reveal>
    </WorkDetailLayout>
  )
}
