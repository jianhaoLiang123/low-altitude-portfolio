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
import content from '../content/putuo.md?raw'

/**
 * 作品 02：普陀区低空经济岛际物流服务采购项目 · 投标方案（完整内容版）
 */

/**
 * 区域④①：四层技术架构。
 * 4 层卡片样式完全统一，仅靠层序号与内容区分。
 */
const ARCH_LAYERS = [
  {
    no: 'L1',
    name: '飞行采集层',
    desc: '无人机整机与自动化机巢，执行飞行与数据采集',
    tags: ['FlyCart 100', 'Matrice 400', '自动化机巢', '电池/充电设施', '吊运/货舱系统'],
  },
  {
    no: 'L2',
    name: '飞控调度层',
    desc: '设备管理、航线规划、任务调度、飞行监控全链路管控',
    tags: ['大疆司空2', '大疆司运', '一人管多站、一站调多机'],
  },
  {
    no: 'L3',
    name: '数据应用层',
    desc: '飞行数据实时上云，运营报告与配送效率分析',
    tags: ['轨迹/状态实时上云', '运营报告', '效率分析'],
  },
  {
    no: 'L4',
    name: '接口集成层',
    desc: '通过司空2 OpenAPI 与采购方政务平台无缝对接',
    tags: ['司空2 OpenAPI', '云端互联', '政务平台对接'],
  },
]

/** 区域④②：多机型协同配送策略 */
const STRATEGY = [
  { cargo: '普通快递、小件包裹', range: '≤40km', model: 'Matrice 400', basis: '载重 6kg、续航 59 分钟，适合高频小件配送' },
  { cargo: '生鲜、农产品', range: '≤12km', model: 'FlyCart 100（双电）', basis: '载重 65kg、航程 12km，适合岛际大宗生鲜运输' },
  { cargo: '应急药品、急救物资', range: '≤40km', model: 'Matrice 400', basis: '紧急响应启动 ≤30 分钟，全程温控追踪' },
  { cargo: '批量物资（渔需、建材）', range: '≤6km', model: 'FlyCart 100（单电）', basis: '载重 80kg，满足中等重量岛际物资需求' },
]

/** 区域⑤：两组图集 */
const GALLERY_SITES: GalleryItem[] = [
  { src: 'images/putuo-locations.webp', title: '项目点位分布', caption: '本岛枢纽与东极、桃花、虾峙、六横各起降点布局' },
  { src: 'images/putuo-nofly-dji.webp', title: '司空2 禁飞区显示', caption: '东港、朱家尖、普陀山、沈家门老城区等禁飞区域' },
  { src: 'images/putuo-nofly-uom.webp', title: 'UOM 平台适飞区显示', caption: '民航 UOM 平台适飞空域查询结果' },
  { src: 'images/putuo-zhoushan-routes.webp', title: '舟山市已批复低空航线总图', caption: '已批复的 283 平方公里空域与岛际航线网络' },
]
const GALLERY_ROUTES: GalleryItem[] = [
  { src: 'images/putuo-route-liuheng.webp', title: '六横镇低空物流航线', caption: '舟山本岛 ⇌ 六横岛（悬山岛）航线规划' },
  { src: 'images/putuo-route-xiazhi.webp', title: '虾峙镇低空物流航线', caption: '普陀区物流中心 ⇌ 虾峙岛航线规划' },
  { src: 'images/putuo-route-taohua.webp', title: '桃花岛低空物流航线', caption: '普陀区物流中心 ⇌ 桃花岛航线规划' },
  { src: 'images/putuo-route-dongji.webp', title: '东极岛低空物流航线', caption: '东极庙子湖 ⇌ 六横悬山岛航线规划' },
]

export default function WorkPutuo() {
  return (
    <WorkDetailLayout
      eyebrow="作品 02 · 低空物流"
      title="普陀区低空经济岛际物流服务采购项目 · 投标方案"
      tags={['低空物流', '投标方案', '多机型协同', '大疆司空2']}
      cover="images/cover-putuo.webp"
      coverAlt="普陀区岛际物流服务采购项目投标方案封面横幅"
      next={{ to: '/works/zeya', label: '返回查看作品：温州泽雅水库无人机巡检建设方案' }}
    >
      {/* ── 区域① 项目概览 ─────────────────────────── */}
      <Reveal>
        <section>
          <SectionHeader eyebrow="01 · OVERVIEW" title="项目概览" />
          <p className="max-w-3xl text-base leading-relaxed text-slate-600">
            普陀区海岛众多、居民居住分散，传统船运班次少、时效差，海岛末端配送长期是民生痛点。本项目为政府采购投标项目，需要在严格的评标标准下，设计一套年运营
            5000 架次以上、覆盖东极 / 桃花 / 虾峙 / 六横的岛际无人机物流运营体系。
          </p>
          <div className="mt-6">
            <InfoGrid
              items={[
                { label: '我的角色', value: '解决方案负责人' },
                { label: '项目周期', value: '2026.2 – 2026.3' },
                { label: '项目类型', value: '政府采购投标项目' },
                { label: '方案类型', value: '运营方案 + 商务报价' },
              ]}
            />
          </div>
          <div className="mt-6">
            <a
              href="works-putuo.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-400 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
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
                problem: '小岛船运每日仅 1–2 班、单程 2–5 小时，居民取件常耗时半天',
                solution: '无人机岛际直达「当日达」，单次配送 ≤45 分钟',
              },
              {
                problem: '海产品离水存活仅 4–6 小时，传统船运超过保鲜窗口',
                solution: '捕捞后 3 小时内出岛，温控货舱 2–8℃ 全程保鲜',
              },
              {
                problem: '应急时刻船只受潮汐、风浪限制无法出航',
                solution: '全天候航空应急通道，30 分钟内起飞、1 小时响应',
              },
              {
                problem: '公务文件、样品需专人乘船传递，耗时且成本高',
                solution: '定时定点无人机快件，全程可追踪、电子签收有凭证',
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
              { countTo: 5000, prefix: '≥', suffix: ' 架次', label: '年飞行架次' },
              { countTo: 45, prefix: '≤', suffix: ' 分钟', label: '单次配送' },
              { countTo: 98, prefix: '≥', suffix: '%', label: '任务完成率' },
              { countTo: 30, prefix: '≤', suffix: ' 分钟', label: '应急响应起飞' },
              { countTo: 4, suffix: ' 大岛屿', label: '覆盖范围', sub: '东极 / 桃花 / 虾峙 / 六横' },
              { countTo: 168, prefix: '约 ', suffix: ' 万', label: '投标报价', sub: '脱敏量级' },
            ]}
          />
        </section>
      </Reveal>

      {/* ── 区域④ 架构与策略 ───────────────────────── */}
      <Reveal>
        <section>
          <SectionHeader
            eyebrow="04 · ARCHITECTURE"
            title="四层技术架构"
            description="「飞行器 + 机巢 + 云平台」三位一体，自下而上构成完整运营链路"
          />
          <div className="flex flex-col gap-3">
            {ARCH_LAYERS.map((layer) => (
              <div
                key={layer.no}
                className="rounded-xl border border-slate-200 border-l-4 border-l-blue-600 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-xs font-bold text-blue-600">{layer.no}</span>
                  <h3 className="text-base font-bold text-slate-900">{layer.name}</h3>
                  <p className="text-sm text-slate-500">{layer.desc}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {layer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 多机型协同策略表 */}
          <h3 className="mt-10 mb-4 text-lg font-bold text-slate-900">多机型协同配送策略</h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead className="bg-slate-50">
                <tr>
                  {['货物类型', '配送距离', '推荐机型', '调度依据'].map((h) => (
                    <th
                      key={h}
                      className="border-b border-slate-200 px-3 py-2.5 text-left font-semibold whitespace-nowrap text-slate-900"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-slate-50/60">
                {STRATEGY.map((row) => (
                  <tr key={row.cargo}>
                    <td className="border-b border-slate-100 px-3 py-2.5 font-medium text-slate-900">
                      {row.cargo}
                    </td>
                    <td className="border-b border-slate-100 px-3 py-2.5 whitespace-nowrap text-slate-700">
                      {row.range}
                    </td>
                    <td className="border-b border-slate-100 px-3 py-2.5 whitespace-nowrap">
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                        {row.model}
                      </span>
                    </td>
                    <td className="border-b border-slate-100 px-3 py-2.5 text-slate-600">
                      {row.basis}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>

      {/* ── 区域⑤ 项目图集 ─────────────────────────── */}
      <Reveal>
        <section>
          <SectionHeader
            eyebrow="05 · GALLERY"
            title="项目图集"
            description="点位选址与空域分析 + 四条岛际航线规划"
          />
          <h3 className="mb-4 text-base font-bold text-slate-900">点位与空域</h3>
          <ImageGallery items={GALLERY_SITES} note="禁飞区/适飞区截图来自大疆司空 2 与民航 UOM 平台，点击图片可放大查看。" />
          <h3 className="mt-10 mb-4 text-base font-bold text-slate-900">岛际航线（大疆司空 2 绘制）</h3>
          <ImageGallery items={GALLERY_ROUTES} note="以上航线图均在大疆司空 2 平台绘制，点击图片可放大查看。" />
        </section>
      </Reveal>

      {/* ── 区域⑥ 完整方案全文 ─────────────────────── */}
      <Reveal>
        <section>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="06 · FULL PROPOSAL"
              title="方案全文"
              description="以下为完整投标方案，报价已脱敏为量级"
              className="mb-0"
            />
            <a
              href="works-putuo.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-400 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
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
                desc: '多岛屿、多机型协同的复杂运营场景，且政府采购评标标准严格。',
              },
              {
                label: '思路',
                desc: '基于对政府招标流程的熟悉，设计「无人值守 + 有人辅助」混合运营方案，逐项对标评标标准。',
              },
              {
                label: '成果',
                desc: '任务完成率、配送时效等核心指标均优于招标要求，形成完整投标方案与商务报价。',
              },
            ]}
          />
        </section>
      </Reveal>
    </WorkDetailLayout>
  )
}
