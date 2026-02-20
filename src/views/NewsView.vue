<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface NewsItem {
  id: number
  title: string
  url: string
  time: number
  score: number
}

const newsList = ref<NewsItem[]>([])
const isLoading = ref(true)

// 取得 Hacker News 最新科技與程式新聞
onMounted(async () => {
  try {
    // 1. 取得最新文章 IDs
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const ids = await res.json()
    
    // 2. 取前 10 筆文章的詳細資料
    const top10Ids = ids.slice(0, 10)
    const promises = top10Ids.map((id: number) => 
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json())
    )
    
    newsList.value = await Promise.all(promises)
  } catch (error) {
    console.error('新聞載入失敗:', error)
  } finally {
    isLoading.value = false
  }
})

// 轉換時間格式
const formatDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString('zh-TW')
}
</script>

<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1 class="page-title">新聞中心</h1>
      <p class="page-description">最新科技與程式開發動態 (資料來源: Hacker News)</p>

      <div v-if="isLoading" class="loading-state">
        新聞載入中...
      </div>

      <div v-else class="news-list">
        <a 
          v-for="news in newsList" 
          :key="news.id" 
          :href="news.url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="news-card"
        >
          <h2 class="news-title">{{ news.title }}</h2>
          <div class="news-meta">
            <span>發布日期: {{ formatDate(news.time) }}</span>
            <span>熱度: {{ news.score }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";
.page-container {
  @apply bg-slate-900 min-h-screen py-24 sm:py-32;
}

.content-wrapper {
  @apply mx-auto max-w-4xl px-6 lg:px-8;
}

.page-title {
  @apply text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2;
}

.page-description {
  @apply text-gray-400 mb-10;
}

.loading-state {
  @apply text-indigo-400 text-center py-10;
}

.news-list {
  @apply space-y-4;
}

.news-card {
  @apply block bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors;
}

.news-title {
  @apply text-lg font-semibold text-white mb-2;
}

.news-meta {
  @apply flex gap-4 text-sm text-gray-400;
}
</style>