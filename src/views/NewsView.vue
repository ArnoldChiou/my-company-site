<script setup lang="ts">
import { ref, shallowRef, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import BaseCard from '../components/BaseCard.vue'

useHead({
  title: '最新科技動態 | My Company',
  meta: [
    { name: 'description', content: '整合 Hacker News 最新科技與程式開發動態，提供最即時的產業資訊。' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "最新科技動態",
        "description": "整合 Hacker News 最新科技與程式開發動態，提供最即時的產業資訊。",
        "publisher": {
          "@type": "Organization",
          "name": "My Company"
        }
      })
    }
  ]
})

interface NewsItem {
  id: number
  title: string
  url: string
  time: number
  score: number
  formattedTime?: string // 加上預先格式化好的時間
}

// 效能優化：使用 shallowRef 替代 ref 來避免巨大列表的深度響應性開銷
const newsList = shallowRef<NewsItem[]>([])
const isLoading = ref(true)

// 轉換時間格式的純函數
const formatDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString('zh-TW')
}

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
    
    const results = await Promise.all(promises)
    
    // 效能優化：在 JavaScript 端先將時間格式化好，避免每次 Vue 重繪時都在模板中執行函數
    newsList.value = results.map(item => ({
      ...item,
      formattedTime: formatDate(item.time)
    }))
  } catch (error) {
    console.error('新聞載入失敗:', error)
  } finally {
    isLoading.value = false
  }
})
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
        <!-- 效能優化：使用 v-memo 指令來略過不必要的子樹重繪 -->
        <BaseCard 
          v-for="news in newsList" 
          :key="news.id" 
          v-memo="[news.id]"
          :href="news.url" 
          class="hover:border-indigo-500"
        >
          <h2 class="news-title">{{ news.title }}</h2>
          <div class="news-meta">
            <!-- 直接渲染格式化後的時間，避免在 template 呼叫 method 導致每次重繪都計算 -->
            <span>發布日期: {{ news.formattedTime }}</span>
            <span>熱度: {{ news.score }}</span>
          </div>
        </BaseCard>
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

.news-title {
  @apply text-lg font-semibold text-white mb-2;
}

.news-meta {
  @apply flex gap-4 text-sm text-gray-400;
}
</style>