<script setup lang="ts">
import { ref } from 'vue'

// 在此陣列中新增或修改專案資料
const projects = ref([
  {
    id: 1,
    title: '傳統工廠訂單管理系統',
    description: '協助傳統產業工廠之系統電子化，以提升工作效率。'
  },
  {
    id: 2,
    title: '企業形象官網',
    description: '客製化響應式設計，提升品牌專業形象。'
  },
  {
    id: 3,
    title: '專業程式交易下單機',
    description: '協助客戶將交易策略轉化為程式交易下單機，以提升交易效率。'
  },
  {
    id: 4,
    title: '牙醫系統前端畫面串接後端AI辨識功能',
    description: '串接後端API以利牙醫系統自動辨識X光圖並顯示於前端畫面。'
  },
  {
    id: 5,
    title: '專業系統維護與客製化功能開發',
    description: '協助客戶將既有系統進行維護與客製化功能開發。'
  },
  {
    id: 6,
    title: '駕訓班預約系統',
    description: '建立預約系統，協助駕訓班進行學員預約管理，減少紙本作業並且可透過系統進行排課。'
  }
])
</script>

<template>
  <section id="portfolio" class="portfolio-section">
    <div class="content-container">
      <div class="header-container">
        <span class="section-subtitle">成功案例</span>
        <h2 class="section-title">作品集</h2>
      </div>
      
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
        </div>
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

.projects-grid {
  @apply mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3;
}

.project-card {
  @apply bg-slate-800 rounded-2xl p-6 border border-slate-700;
}

.project-title {
  @apply text-lg font-semibold text-white;
}

.project-description {
  @apply mt-2 text-sm text-gray-400;
}
</style>