# 諾秋工作室 - 現代化響應式企業網站

這是一個基於 **Vue 3** 與 **TypeScript** 建構的現代化企業形象網站。設計風格採用深色主題 (Dark Mode)，結合了玻璃擬態 (Glassmorphism) 與流暢的微動畫 (Micro-animations)，展現高端科技感與專業形象。

## 🛠️ 技術架構 (Tech Stack)

本專案使用以下核心技術構建：

- **前端框架**: [Vue 3](https://vuejs.org/) (使用 Composition API 與 `<script setup>` 語法)
- **程式語言**: [TypeScript](https://www.typescriptlang.org/) (提供靜態型別檢查，提升程式碼品質)
- **樣式設計**: [Tailwind CSS v4](https://tailwindcss.com/) (Utility-first CSS 框架，透過 PostCSS 配置)
- **建置工具**: [Vite](https://vitejs.dev/) (極速的前端建置工具)
- **專案管理**: npm (Node Package Manager)

## 📂 專案目錄結構 (Project Structure)

專案採用標準的 Vue 3 + Vite 目錄結構，清晰分層以便於維護與擴充。

```plaintext
c:\my-company-site
├── public/                  # 靜態資源目錄 (如 favicon.ico，直接被伺服器取用)
├── src/                     # 原始碼主目錄
│   ├── assets/              # 靜態資源 (CSS, Images)
│   │   └── main.css         # 全域樣式設定 (Tailwind 指令與全域 Scrollbar 樣式)
│   ├── components/          # Vue 元件 (功能區塊)
│   │   ├── NavBar.vue       # 導覽列 (含手機版響應式選單)
│   │   ├── HeroSection.vue  #首頁主視覺區塊 (含動態背景與 CTA)
│   │   ├── AboutSection.vue # 關於我們區塊 (含團隊介紹與核心價值)
│   │   ├── ServicesSection.vue # 服務項目區塊 (使用 Grid 佈局展示服務卡片)
│   │   └── FooterSection.vue   # 頁尾區塊 (含版權宣告與社群連結)
│   ├── views/               # 頁面檢視 (目前為單頁式設計，暫保留此目錄以備未來擴充路由)
│   ├── App.vue              # 應用程式根元件 (整合所有區塊元件)
│   ├── main.ts              # 應用程式進入點 (Entry Point，掛載 Vue 實體)
│   └── env.d.ts             # TypeScript 型別宣告檔 (定義 .vue 檔案型別)
├── index.html               # 應用程式入口 HTML 檔案
├── package.json             # 專案依賴與腳本設定檔
├── postcss.config.js        # PostCSS 設定檔 (配置 Tailwind CSS)
├── tailwind.config.js       # Tailwind CSS 設定檔 (自定義樣式與插件)
├── tsconfig.json            # TypeScript 設定檔
└── vite.config.ts           # Vite 建置設定檔
```

## 🏗️ 架構設計說明

### 1. 元件化設計 (Component-Based Architecture)
本專案採用高度模組化的設計，將網頁的各個主要區塊拆分為獨立的 Vue 元件 (`src/components/`)。
- **優點**: 每個區塊的邏輯與樣式獨立，易於維護與重複使用。
- **組合**: 透過 `App.vue` 將各個元件 (`NavBar`, `HeroSection`, `AboutSection` 等) 組合起來，形成完整的單頁式網站 (Single Page Website)。

### 2. 響應式設計 (Responsive Design)
全站皆採用 Tailwind CSS 的 RWD 斷點系統 (`sm:`, `md:`, `lg:`, `xl:`) 進行開發。
- 支援從手機、平板到桌上型電腦的各種螢幕尺寸。
- `NavBar.vue` 內建自動切換的手機版漢堡選單。

### 3. 樣式策略 (Styling Strategy)
- **全域樣式**: 定義於 `src/assets/main.css`，包含 Tailwind 的初始化指令與全域 Scrollbar 美化。
- **深色模式**: 使用 `slate-900` 作為基底色，搭配 `indigo-500` 與漸層色系，營造沈穩且具科技感的視覺體驗。
- **視覺效果**: 大量運用 `backdrop-blur` (背景模糊) 實現玻璃擬態效果，並使用 CSS transition 增加互動質感。

## 🚀 快速開始 (Getting Started)

請依照以下步驟在您的本機環境執行此專案：

### 安裝依賴 (Install Dependencies)

```bash
npm install
```

### 啟動開發伺服器 (Start Dev Server)

```bash
npm run dev
```
啟動後，請在瀏覽器開啟終端機顯示的網址 (通常是 `http://localhost:5173`)。

### 建置生產版本 (Cuild for Production)

```bash
npm run build
```
此指令會將專案編譯並優化，產出靜態檔案至 `dist/` 目錄。

### 執行型別檢查 (Type Check)

```bash
npm run type-check
```
使用 `vue-tsc` 檢查專案中的 TypeScript 型別錯誤。

---

© 2025 諾秋工作室 Noqiu Studio. All rights reserved.
