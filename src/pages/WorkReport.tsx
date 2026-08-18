import { ExternalLink } from 'lucide-react'
import WorkDetailLayout from '../components/WorkDetailLayout'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import InfoGrid from '../components/InfoGrid'
import ImageGallery, { type GalleryItem } from '../components/ImageGallery'

/**
 * 作品 03：低空公共服务产业调研分析报告（简洁版：概览 + 报告预览 + 飞书链接）
 */

const FEISHU_URL = 'https://my.feishu.cn/wiki/GtQNwGvK9iNokvkzUdKcj5bdnVC'

/** 区域②：报告预览 4 张 */
const GALLERY: GalleryItem[] = [
  { src: 'images/report-ps-1.webp', title: '报告预览 ①', caption: '低空公共服务产业调研分析报告' },
  { src: 'images/report-ps-2.webp', title: '报告预览 ②', caption: '低空公共服务产业调研分析报告' },
  { src: 'images/report-ps-3.webp', title: '报告预览 ③', caption: '低空公共服务产业调研分析报告' },
  { src: 'images/report-ps-4.webp', title: '报告预览 ④', caption: '低空公共服务产业调研分析报告' },
]

export default function WorkReport() {
  return (
    <WorkDetailLayout
      eyebrow="作品 03 · 产业调研"
      title="低空公共服务产业调研分析报告"
      tags={['低空经济', '公共服务', '产业调研']}
      cover="images/cover-public-service.webp"
      coverAlt="低空公共服务产业调研分析报告封面横幅"
      next={{ to: '/works/counter-drone', label: '查看下一个作品：中国低空安全（反无人机）行业深度分析报告' }}
    >
      {/* ── 区域① 项目概览 ─────────────────────────── */}
      <Reveal>
        <section>
          <SectionHeader eyebrow="01 · OVERVIEW" title="项目概览" />
          <p className="max-w-3xl text-base leading-relaxed text-slate-600">
            低空公共服务是国家低空经济战略中政府刚需最强、预算最稳定的细分赛道，2024 年市场规模约 800
            亿元，预计 2030 年突破 2500
            亿元。但地方政府在采购时面临场景选型模糊、空域审批不畅、跨部门共享缺失、供应商评估缺乏标准等问题，企业则难以判断市场优先级与商业模式方向
            ——
            本报告从需求场景、技术装备、竞争格局、政策法规、产业链生态、挑战瓶颈六大维度系统调研，覆盖七大应用领域、四种采购模式、六层技术架构与主要企业竞合分析，输出市场规模测算、场景优先级矩阵、采购模式趋势判断、竞争图谱与进入策略建议，把零散的行业认知整合为可落地的政府采购指南与企业布局参考。
          </p>
          <div className="mt-6">
            <InfoGrid
              items={[
                { label: '我的角色', value: '独立研究与撰写' },
                { label: '项目类型', value: '产业调研报告' },
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
              在线查看完整报告（飞书文档）
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
