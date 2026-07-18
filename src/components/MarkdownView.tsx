import type { ReactNode } from 'react'

/**
 * Markdown 渲染组件（零依赖，专为 src/content/ 下两份方案文档编写）。
 * 支持：h1–h4、GFM 表格、引用块（可嵌套列表）、有序/无序列表（两级缩进）、
 * 加粗、行内代码、独立行图片。排版样式与全站浅色商务风一致。
 * 表格移动端横向滚动；图片 lazy 加载。
 */

/* ── 块解析 ─────────────────────────────────────────── */

type Block =
  | { type: 'h'; level: 1 | 2 | 3 | 4; text: string }
  | { type: 'p'; text: string }
  | { type: 'img'; alt: string; src: string }
  | { type: 'ul'; items: { text: string; children: string[] }[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; blocks: Block[] }
  | { type: 'table'; header: string[]; rows: string[][] }

const isBlank = (l: string) => l.trim() === ''
const isTableLine = (l: string) => /^\s*\|/.test(l)
const isTableSep = (l: string) => /^\s*\|?[\s:|-]+\|?\s*$/.test(l) && l.includes('-')
const isUlLine = (l: string) => /^(\s*)- /.test(l)
const isOlLine = (l: string) => /^\d+\.\s/.test(l)
const isQuoteLine = (l: string) => /^>/.test(l)
const isImgLine = (l: string) => /^!\[.*?\]\(.*?\)\s*$/.test(l.trim())
const isHeadLine = (l: string) => /^#{1,4}\s/.test(l)

/** 是否是某种块级元素的起始行（用于段落终止判断） */
function startsBlock(l: string): boolean {
  return isHeadLine(l) || isUlLine(l) || isOlLine(l) || isQuoteLine(l) || isImgLine(l) || isTableLine(l)
}

function splitRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim())
}

function parseBlocks(text: string): Block[] {
  const lines = text.split('\n')
  const blocks: Block[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    if (isBlank(line)) {
      i++
      continue
    }

    // 标题
    const h = line.match(/^(#{1,4})\s+(.*)$/)
    if (h) {
      blocks.push({ type: 'h', level: h[1].length as 1 | 2 | 3 | 4, text: h[2].trim() })
      i++
      continue
    }

    // 独立行图片
    const img = line.trim().match(/^!\[(.*?)\]\((.*?)\)$/)
    if (img) {
      blocks.push({ type: 'img', alt: img[1], src: img[2] })
      i++
      continue
    }

    // 表格（当前行 + 下一行为分隔行）
    if (isTableLine(line) && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const header = splitRow(line)
      const rows: string[][] = []
      i += 2
      while (i < lines.length && isTableLine(lines[i]) && !isBlank(lines[i])) {
        rows.push(splitRow(lines[i]))
        i++
      }
      blocks.push({ type: 'table', header, rows })
      continue
    }

    // 引用块（去掉 "> " 前缀后递归解析，支持块内列表）
    if (isQuoteLine(line)) {
      const inner: string[] = []
      while (i < lines.length && isQuoteLine(lines[i])) {
        inner.push(lines[i].replace(/^>\s?/, ''))
        i++
      }
      blocks.push({ type: 'quote', blocks: parseBlocks(inner.join('\n')) })
      continue
    }

    // 无序列表（支持 4 空格缩进的二级嵌套）
    if (isUlLine(line)) {
      const items: { text: string; children: string[] }[] = []
      while (i < lines.length && isUlLine(lines[i])) {
        const m = lines[i].match(/^(\s*)- (.*)$/)!
        const indent = m[1].length
        if (indent >= 4 && items.length > 0) {
          items[items.length - 1].children.push(m[2].trim())
        } else {
          items.push({ text: m[2].trim(), children: [] })
        }
        i++
      }
      blocks.push({ type: 'ul', items })
      continue
    }

    // 有序列表
    if (isOlLine(line)) {
      const items: string[] = []
      while (i < lines.length && isOlLine(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, '').trim())
        i++
      }
      blocks.push({ type: 'ol', items })
      continue
    }

    // 段落：每个物理行渲染为独立段落（比 CommonMark 软换行更适合中文方案文档）
    while (i < lines.length && !isBlank(lines[i]) && !startsBlock(lines[i])) {
      blocks.push({ type: 'p', text: lines[i].trim() })
      i++
    }
  }

  return blocks
}

/* ── 行内解析（加粗 / 行内代码） ────────────────────── */

function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return parts.map((p, idx) => {
    if (p.length > 4 && p.startsWith('**') && p.endsWith('**')) {
      return (
        <strong key={idx} className="font-semibold text-slate-900">
          {renderInline(p.slice(2, -2))}
        </strong>
      )
    }
    if (p.length > 2 && p.startsWith('`') && p.endsWith('`')) {
      return (
        <code key={idx} className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.875em] text-slate-800">
          {p.slice(1, -1)}
        </code>
      )
    }
    return p
  })
}

/* ── 块渲染 ─────────────────────────────────────────── */

function renderBlock(block: Block, key: number): ReactNode {
  switch (block.type) {
    case 'h': {
      const cls: Record<number, string> = {
        1: 'mt-10 mb-4 border-b border-slate-200 pb-3 text-2xl font-bold text-slate-900 first:mt-0',
        2: 'mt-12 mb-4 border-l-4 border-blue-600 pl-3 text-xl font-bold text-slate-900',
        3: 'mt-8 mb-3 text-lg font-bold text-slate-900',
        4: 'mt-6 mb-2 text-base font-semibold text-slate-800',
      }
      const Tag = `h${block.level}` as 'h1' | 'h2' | 'h3' | 'h4'
      return (
        <Tag key={key} className={cls[block.level]}>
          {renderInline(block.text)}
        </Tag>
      )
    }
    case 'p':
      return (
        <p key={key} className="my-3 text-[15px] leading-7 text-slate-700">
          {renderInline(block.text)}
        </p>
      )
    case 'img':
      return (
        <img
          key={key}
          src={block.src}
          alt={block.alt}
          loading="lazy"
          className="my-4 w-full rounded-xl border border-slate-200 bg-slate-50 object-contain"
        />
      )
    case 'ul':
      return (
        <ul key={key} className="my-3 list-disc space-y-1.5 pl-6 text-[15px] leading-7 text-slate-700">
          {block.items.map((item, j) => (
            <li key={j} className="pl-1">
              {renderInline(item.text)}
              {item.children.length > 0 && (
                <ul className="mt-1.5 list-[circle] space-y-1.5 pl-5 text-slate-600">
                  {item.children.map((c, k) => (
                    <li key={k} className="pl-1">
                      {renderInline(c)}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={key} className="my-3 list-decimal space-y-1.5 pl-6 text-[15px] leading-7 text-slate-700">
          {block.items.map((item, j) => (
            <li key={j} className="pl-1">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      )
    case 'quote':
      return (
        <blockquote
          key={key}
          className="my-4 rounded-r-lg border-l-4 border-blue-500 bg-blue-50/60 py-1 pr-4 pl-4 text-slate-600"
        >
          {block.blocks.map((b, j) => renderBlock(b, j))}
        </blockquote>
      )
    case 'table':
      return (
        <div key={key} className="my-5 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead className="bg-slate-50">
              <tr>
                {block.header.map((h, j) => (
                  <th
                    key={j}
                    className="border-b border-slate-200 px-3 py-2.5 text-left font-semibold whitespace-nowrap text-slate-900"
                  >
                    {renderInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="[&>tr:nth-child(even)]:bg-slate-50/60">
              {block.rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => (
                    <td key={k} className="border-b border-slate-100 px-3 py-2.5 align-top text-slate-700">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}

export default function MarkdownView({ content }: { content: string }) {
  const blocks = parseBlocks(content)
  return <div className="max-w-none">{blocks.map((b, i) => renderBlock(b, i))}</div>
}
