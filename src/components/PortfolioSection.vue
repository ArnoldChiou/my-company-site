<script setup lang="ts">
interface Project {
  id: number
  title: string
  category: string
  description: string
  result: string
  image: string
  imageAlt: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: '傳統工廠訂單管理系統',
    category: '製造業數位化',
    description: '將紙本訂單、排程與庫存流程整合成單一管理介面，降低人工追蹤成本。',
    result: '訂單狀態、交期與生產進度可即時查詢，管理者能更快掌握現場狀況。',
    image: '/portfolio/factory-order-system.svg',
    imageAlt: '工廠訂單管理系統儀表板範例圖',
    tags: ['ERP', 'Dashboard', 'Workflow']
  },
  {
    id: 2,
    title: '企業形象官網',
    category: '品牌網站設計',
    description: '以響應式版面、清楚的服務資訊與聯絡流程，建立更完整的企業門面。',
    result: '首頁、服務介紹與聯絡轉換路徑重新整理，讓訪客更快理解品牌價值。',
    image: '/portfolio/corporate-website.svg',
    imageAlt: '企業形象官網響應式設計範例圖',
    tags: ['RWD', 'SEO', 'Branding']
  },
  {
    id: 3,
    title: '專業程式交易下單機',
    category: '金融科技工具',
    description: '把交易策略、風控條件與下單流程轉化成可操作的自動化工具。',
    result: '策略訊號、下單狀態與風險參數集中管理，減少人工判斷與操作延遲。',
    image: '/portfolio/trading-order-engine.svg',
    imageAlt: '程式交易下單機介面範例圖',
    tags: ['Automation', 'API', 'Risk Control']
  },
  {
    id: 4,
    title: '牙醫 AI 辨識功能串接',
    category: '醫療系統整合',
    description: '串接後端 AI API，將 X 光辨識結果整理為前端可閱讀、可追蹤的操作畫面。',
    result: '影像、辨識標記與結果摘要整合在同一流程，提升診間使用效率。',
    image: '/portfolio/dental-ai-system.svg',
    imageAlt: '牙醫 AI X 光辨識系統範例圖',
    tags: ['AI API', 'Medical UI', 'Integration']
  },
  {
    id: 5,
    title: '系統維護與客製化開發',
    category: '長期技術維運',
    description: '接手既有系統後，依照實際營運需求補強功能、修復問題並優化流程。',
    result: '透過版本控管與維護節奏，讓系統能穩定演進，而不是只做一次性修改。',
    image: '/portfolio/system-maintenance.svg',
    imageAlt: '系統維護與客製化功能開發範例圖',
    tags: ['Maintenance', 'DevOps', 'Refactor']
  },
  {
    id: 6,
    title: '駕訓班預約系統',
    category: '預約排程系統',
    description: '建立學員、教練、車輛與時段的預約管理流程，取代紙本排課作業。',
    result: '櫃台能快速安排課程與查詢預約狀態，降低排程衝突與溝通成本。',
    image: '/portfolio/driving-school-booking.svg',
    imageAlt: '駕訓班預約排程系統範例圖',
    tags: ['Booking', 'Schedule', 'Admin Panel']
  }
]
</script>

<template>
  <section id="portfolio" class="portfolio-section">
    <div class="content-container">
      <div class="header-container">
        <span class="section-subtitle">成功案例</span>
        <h2 class="section-title">作品集</h2>
        <p class="section-description">
          從企業內部管理到對外品牌網站，將實際營運需求整理成可長期使用的數位工具。
        </p>
      </div>

      <div class="projects-grid">
        <article v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image-wrap">
            <img
              class="project-image"
              :src="project.image"
              :alt="project.imageAlt"
              loading="lazy"
              width="1536"
              height="864"
            >
          </div>
          <div class="project-body">
            <div class="project-meta">
              <span class="project-category">{{ project.category }}</span>
              <span class="project-index">{{ String(project.id).padStart(2, '0') }}</span>
            </div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <p class="project-result">{{ project.result }}</p>
            <ul class="project-tags" aria-label="使用技術與專案類型">
              <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss";

.portfolio-section {
  @apply bg-slate-900 py-24 sm:py-32;
}

.content-container {
  @apply mx-auto max-w-7xl px-6 lg:px-8;
}

.header-container {
  @apply mx-auto max-w-2xl lg:text-center;
}

.section-subtitle {
  @apply text-base font-semibold leading-7 text-indigo-400;
}

.section-title {
  @apply mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl;
}

.section-description {
  @apply mt-6 text-lg leading-8 text-gray-300;
}

.projects-grid {
  @apply mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3;
}

.project-card {
  @apply overflow-hidden rounded-lg border border-white/10 bg-slate-800/90 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-slate-800;
}

.project-image-wrap {
  @apply relative aspect-[16/9] overflow-hidden bg-slate-950;
}

.project-image-wrap::after {
  @apply absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent content-[''];
}

.project-image {
  @apply h-full w-full object-cover transition duration-500;
}

.project-card:hover .project-image {
  @apply scale-105;
}

.project-body {
  @apply flex min-h-[20rem] flex-col p-6;
}

.project-meta {
  @apply flex items-center justify-between gap-4;
}

.project-category {
  @apply text-sm font-semibold leading-6 text-indigo-300;
}

.project-index {
  @apply text-xs font-semibold text-slate-500;
}

.project-title {
  @apply mt-3 text-lg font-semibold leading-7 text-white;
}

.project-description {
  @apply mt-3 text-sm leading-6 text-gray-300;
}

.project-result {
  @apply mt-4 border-l-2 border-indigo-400/70 pl-4 text-sm leading-6 text-slate-300;
}

.project-tags {
  @apply mt-auto flex flex-wrap gap-2 pt-6;
}

.project-tags li {
  @apply rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300;
}
</style>
