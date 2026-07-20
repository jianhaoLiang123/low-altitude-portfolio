import { Briefcase, Plane, Sparkles, BadgeCheck } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import WorkCard from '../components/WorkCard'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import HudCorners from '../components/HudCorners'
import Strengths from '../components/Strengths'

/**
 * 首页：Hero（真实信息 + 轻科技感背景）+ 个人优势 + 精选作品 + 经历速览 + 联系我。
 * 动效基调：fade-up 入场（stagger 70–80ms）、数字 count-up、卡片 hover 上浮，
 * 全部 200–500ms ease-out，尊重 prefers-reduced-motion。
 */

/** Hero 关键数字条（数字滚动，suffix 为单位） */
const STATS = [
  { to: 5, suffix: ' 年', label: '政企项目经验' },
  { to: 10, suffix: '+', label: '参与中标项目' },
  { to: 2, suffix: ' 个', label: '低空经济完整方案' },
  { to: 96, suffix: ' 分', label: 'CAAC 超视距执照 · 理论' },
]

/** 个人优势卡片（2×2） */
const ADVANTAGES = [
  {
    icon: Briefcase,
    title: '政企项目全流程经验',
    desc: '5 年国企与政府类项目经验，深度对接城发、铁投、交通、规划、水利等部门，覆盖立项、需求分析、方案设计、招投标、交付全流程。',
    tools: null as string[] | null,
  },
  {
    icon: Plane,
    title: '低空产业知识与实践',
    desc: '掌握无人机硬件选型与行业应用，具备巡检、物流、市政项目经验；熟悉低空经济商业模式、应用场景、政策与空域管理。',
    tools: null as string[] | null,
  },
  {
    icon: Sparkles,
    title: '持续学习与 AI 应用',
    desc: '关注 AI 硬件、具身智能、新能源储能动态；使用 Coze / Kimi / Codex 等搭建智能体工作流，输出成果并运营个人 IP。',
    tools: null as string[] | null,
  },
  {
    icon: BadgeCheck,
    title: '证书与专业工具链',
    desc: 'CAAC 中型多旋翼超视距驾驶员执照（理论 96 分）、AOPA 合格证；熟练以下方案与行业工具：',
    tools: ['大疆司空2', '大疆司运', '大疆智图', 'DasViewer', 'SketchUp', 'Rhino', 'Revit', 'AutoCAD'],
  },
]

/** 经历速览时间线 */
const TIMELINE = [
  {
    period: '2026.04 – 2026.05',
    title: '温州泽雅水库无人机巡检建设方案',
    role: '解决方案负责人',
    note: '',
  },
  {
    period: '2026.02 – 2026.03',
    title: '普陀区岛际物流服务采购项目投标方案',
    role: '解决方案负责人',
    note: '',
  },
  {
    period: '2021.08 – 2026.05',
    title: '温州设计集团有限公司',
    role: '建筑设计师 / 项目负责人',
    note: '累计参与 10+ 中标项目，2023 年院最佳新人',
  },
]

/** 平滑滚动到本页锚点（HashRouter 下不能用 href="#id"，见 SiteHeader 注释） */
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Home() {
  return (
    <>
      {/* ── Hero（轻科技感背景：蓝图网格 + 双色光晕 + 飞行轨迹） ── */}
      <section className="relative overflow-hidden bg-white">
        {/* 背景装饰层（纯装饰，aria-hidden） */}
        <div aria-hidden className="hero-grid absolute inset-0" />
        <div aria-hidden className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />
        <div aria-hidden className="absolute top-1/3 -right-16 h-[28rem] w-[28rem] rounded-full bg-cyan-300/15 blur-3xl" />
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1120 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            className="flight-path"
            d="M-40 500 C 220 400, 420 210, 700 270 S 1060 170, 1180 70"
            stroke="#93c5fd"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <circle cx="700" cy="270" r="3" fill="#60a5fa" fillOpacity="0.55" />
          <circle cx="420" cy="305" r="3" fill="#60a5fa" fillOpacity="0.4" />
        </svg>

        <div className="relative mx-auto w-full max-w-[1120px] px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px]">
            <div className="flex max-w-3xl flex-col gap-6">
            <Reveal>
              <span className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-blue-600" />
                求职意向 · 低空经济解决方案工程师 / 售前技术支持
              </span>
            </Reveal>
            <Reveal delay={70}>
              {/* 全站唯一一处渐变文字点缀 */}
              <h1 className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
                梁兼豪
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-lg leading-relaxed text-slate-600">
                5 年国企与政府类项目经验，深度参与项目立项、需求分析、方案设计、招投标与交付全流程。专注无人机行业应用与低空经济场景落地，持
                CAAC 中型多旋翼超视距驾驶员执照。
              </p>
            </Reveal>
            <Reveal delay={210}>
              <p className="text-sm text-slate-500">📍 浙江台州 · 5 年工龄 · 建筑学本科</p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo('works')}
                  className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  查看作品
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  联系我
                </button>
              </div>
            </Reveal>
            </div>

            {/* 职业照（首屏，不 lazy） */}
            <Reveal delay={200}>
              <div className="group relative mx-auto w-60 sm:w-72 lg:w-full">
                <div aria-hidden className="absolute -inset-6 rounded-full bg-blue-400/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-blue-600/15">
                  <img
                    src="images/headshot.webp"
                    alt="梁兼豪职业照"
                    className="h-full w-full object-cover"
                  />
                </div>
                <HudCorners />
              </div>
            </Reveal>
          </div>

          {/* 关键数字条（count-up） */}
          <Reveal delay={150}>
            <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-sm md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 bg-white px-6 py-6">
                  <CountUp
                    to={s.to}
                    suffix={s.suffix}
                    className="text-2xl font-bold text-blue-600 md:text-3xl"
                  />
                  <span className="text-sm text-slate-500">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 个人优势 ─────────────────────────────────────────── */}
      <section id="skills" className="scroll-mt-16 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:py-24">
          <Reveal>
            <SectionHeader eyebrow="ADVANTAGES" title="个人优势" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {ADVANTAGES.map((adv, i) => (
              <Reveal key={adv.title} delay={i * 80}>
                <div className="group flex h-full flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-blue-600 p-3 text-white shadow-sm shadow-blue-600/25">
                      <adv.icon size={22} strokeWidth={1.8} />
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 md:text-xl">{adv.title}</h3>
                  </div>
                  <span
                    aria-hidden
                    className="mt-1 h-1 w-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                  />
                  <p className="text-sm leading-relaxed text-slate-600">{adv.desc}</p>
                  {adv.tools && (
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {adv.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 盖洛普优势测评（紧接个人优势，经历速览之上） ── */}
      <Strengths />

      {/* ── 精选作品 ─────────────────────────────────────────── */}
      <section id="works" className="scroll-mt-16 border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:py-24">
          <Reveal>
            <SectionHeader eyebrow="SELECTED WORKS" title="精选作品" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0}>
              <WorkCard
                title="温州泽雅水库无人机巡检建设方案"
                tags={['水利巡检', '建设方案', 'ROI 分析']}
                summary="为一级饮用水源地设计「无人机 + 自动化机巢 + 云平台」智能巡检体系"
                to="/works/zeya"
                cover="images/cover-zeya.webp"
                coverAlt="泽雅水库无人机巡检建设方案封面图"
              />
            </Reveal>
            <Reveal delay={90}>
              <WorkCard
                title="普陀区低空经济岛际物流服务采购项目 · 投标方案"
                tags={['低空物流', '投标方案', '多机型协同']}
                summary="面向舟山海岛场景的「无人值守 + 有人辅助」岛际无人机物流运营体系"
                to="/works/putuo"
                cover="images/cover-putuo.webp"
                coverAlt="普陀区岛际物流投标方案封面图"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 经历速览 ─────────────────────────────────────────── */}
      <section id="experience" className="scroll-mt-16 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:py-24">
          <Reveal>
            <SectionHeader eyebrow="EXPERIENCE" title="经历速览" />
          </Reveal>
          <ol className="relative ml-2 flex flex-col gap-10 border-l-2 border-slate-200 pl-8">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.period} delay={i * 80}>
                <li className="relative">
                  {/* 时间线圆点 */}
                  <span className="absolute top-1.5 -left-[41px] h-4 w-4 rounded-full border-2 border-blue-600 bg-white" />
                  <p className="text-sm font-semibold text-blue-600">{item.period}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-slate-600">{item.role}</p>
                  {item.note && <p className="mt-1 text-sm text-slate-500">{item.note}</p>}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 联系我 ───────────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-16 border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:py-24">
          <Reveal>
            <SectionHeader eyebrow="CONTACT" title="联系我" align="center" />
          </Reveal>
          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
            <Reveal delay={0}>
              <a
                href="tel:15957612379"
                className="flex h-full flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
              >
                <span className="text-2xl">📞</span>
                <span className="text-lg font-semibold text-slate-900">15957612379</span>
                <span className="text-sm text-slate-500">电话</span>
              </a>
            </Reveal>
            <Reveal delay={90}>
              <a
                href="mailto:1137634310@qq.com"
                className="flex h-full flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
              >
                <span className="text-2xl">✉️</span>
                <span className="text-lg font-semibold text-slate-900">1137634310@qq.com</span>
                <span className="text-sm text-slate-500">邮箱</span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="mt-10 text-center">
              <a
                href="resume-liangjianhao.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                下载完整简历（PDF）
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
