import { ExternalLink } from 'lucide-react'
import WorkDetailLayout from '../components/WorkDetailLayout'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import InfoGrid from '../components/InfoGrid'
import ImageGallery, { type GalleryItem } from '../components/ImageGallery'

/**
 * 作品 04：中国低空安全（反无人机）行业深度分析报告
 * 简洁版式（照抄作品 03）：概览 + 报告预览 + 飞书链接
 */

const FEISHU_URL = 'https://my.feishu.cn/wiki/ZtVfw3idHi3gFJkyIM1ciirHnhk'

/** 项目概览：6 个加粗小要点（文案为用户审定原文，勿改） */
const KEY_POINTS: { title: string; body: string }[] = [
  {
    title: '市场规模',
    body: '民用反无人机市场五年复合增长率达 22.8%，2026 年有望突破 80 亿元；政府占比从 70% 降至 55%，民用场景（光伏、物流、智慧城市）成为增长核心引擎。',
  },
  {
    title: '技术体系',
    body: '形成"侦测—识别—跟踪—反制—评估"五环节技术闭环，涵盖 4 种侦测技术（雷达/光电/无线电/声学）和 6 种反制手段（射频干扰/导航诱骗/协议接管/激光/微波/网捕），AI 赋能识别精度提升至 95%+。',
  },
  {
    title: '三大技术路线',
    body: '协议解析派（历正科技）、无源探测派（理工全盛/上海特金）、多源融合派（杰能科世）并行竞争，头部企业护城河差异显著。',
  },
  {
    title: '场景落地',
    body: '机场采用三层纵深防御（10km 预警→2-10km 识别反制→≤2km 物理处置），监狱以零误报周界防御为核心，某高等级监狱运行 1 年拦截 12 起违禁品投递，成功率 100%。',
  },
  {
    title: '政策驱动',
    body: '2021—2026 年出台 12 部相关法规，2023 年《无人驾驶航空器飞行管理暂行条例》为分水岭，行业从"鼓励发展"转向"发展与安全并重"。',
  },
  {
    title: '未来趋势',
    body: '多传感器融合、AI 智能化、装备小型化、合规标准化四大方向；蜂群攻击成为未来最大威胁形态，应对策略从"单点拦截"转向"区域拒止"。',
  },
]

/** 区域②：报告预览 4 张 */
const GALLERY: GalleryItem[] = [
  { src: 'images/report-cd-1.webp', title: '战略概览页', caption: '行业战略概览与核心结论' },
  { src: 'images/report-cd-2.webp', title: '杀伤链', caption: '「侦测—识别—跟踪—反制—评估」杀伤链拆解' },
  { src: 'images/report-cd-3.webp', title: '传感器矩阵', caption: '多传感器融合矩阵（雷达 / 光电 / 无线电 / 声学）' },
  { src: 'images/report-cd-4.webp', title: '反制效能热力图', caption: '反制手段效能对比热力图' },
]

export default function WorkCounterDrone() {
  return (
    <WorkDetailLayout
      eyebrow="作品 04 · 行业深度研究"
      title="中国低空安全（反无人机）行业深度分析报告"
      tags={['反无人机', '低空安全防御', '行业深度研究']}
      cover="images/cover-counter-drone.webp"
      coverAlt="中国低空安全（反无人机）行业深度分析报告封面横幅"
      prev={{ to: '/works/report', label: '低空公共服务产业调研分析报告' }}
      next={{ to: '/works/zeya', label: '温州泽雅水库无人机巡检建设方案' }}
    >
      {/* ── 区域① 项目概览 ─────────────────────────── */}
      <Reveal>
        <section>
          <SectionHeader eyebrow="01 · OVERVIEW" title="项目概览" />
          <p className="max-w-3xl text-base leading-relaxed text-slate-600">
            围绕战略概览、市场情报、技术架构、作战场景、竞争格局五大支柱，全面梳理行业从被动拦截向主动智能管控转型的关键趋势，为防务决策、市场布局和技术选型提供数据支撑与战略参考。
          </p>
          <ul className="mt-6 flex max-w-3xl list-disc flex-col gap-3 pl-5 text-base leading-relaxed text-slate-600">
            {KEY_POINTS.map((p) => (
              <li key={p.title} className="pl-1">
                <strong className="font-semibold text-slate-900">{p.title}</strong>
                ：{p.body}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <InfoGrid
              items={[
                { label: '我的角色', value: '独立研究与撰写' },
                { label: '项目类型', value: '行业深度研究报告' },
                { label: '成果形式', value: '飞书在线文档' },
              ]}
            />
          </div>
          <div className="mt-6">
            <a
              href={FEISHU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <ExternalLink size={16} />
              在飞书中查看完整报告
            </a>
          </div>
        </section>
      </Reveal>

      {/* ── 区域② 报告预览 ─────────────────────────── */}
      <Reveal>
        <section>
          <SectionHeader
            eyebrow="02 · PREVIEW"
            title="报告预览"
            description="完整内容请访问飞书文档"
          />
          <ImageGallery items={GALLERY} note="点击图片可放大查看，支持左右切换。" />
        </section>
      </Reveal>
    </WorkDetailLayout>
  )
}
