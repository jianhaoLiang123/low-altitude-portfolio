/**
 * 一次性脚本：把 src/ 下 public 静态资源引用从绝对路径改为相对路径。
 * 仅匹配 "/images/、"/works-、"/resume-、"/favicon 以及 md 里的 ](/images/，
 * 不影响 react-router 的路由（path/to="/works/..." 是斜杠不是连字符）。
 */
import { readFileSync, writeFileSync } from 'node:fs'

const FILES = [
  'src/pages/WorkZeya.tsx',
  'src/pages/WorkPutuo.tsx',
  'src/pages/Home.tsx',
  'src/components/SiteHeader.tsx',
  'src/components/SiteFooter.tsx',
  'src/content/zeya.md',
  'src/content/putuo.md',
]

// 前缀字符限定为 双引号 / 单引号 / 左括号（md 图片语法），避免误伤
const PATTERN = /(["'(])\/(images\/|works-|resume-|favicon)/g

for (const file of FILES) {
  const before = readFileSync(file, 'utf8')
  const matches = before.match(PATTERN) ?? []
  const after = before.replace(PATTERN, '$1$2')
  if (before !== after) {
    writeFileSync(file, after, 'utf8')
    console.log(`${file}: 替换 ${matches.length} 处`)
  } else {
    console.log(`${file}: 无匹配`)
  }
}
