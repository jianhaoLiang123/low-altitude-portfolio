import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 使用 HashRouter：部署到 GitHub Pages 等静态托管时不会有路由 404 问题
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
