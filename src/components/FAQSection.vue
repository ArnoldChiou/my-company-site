<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    question: '請問諾秋工作室提供哪些服務？',
    answer: '諾秋工作室專注於全方位的數位解決方案，包含企業形象網站設計(RWD)、高併發高效能的系統開發、雲端伺服器架構與部署(AWS/GCP)，以及後續的系統維護與客製化擴展。'
  },
  {
    question: '客製化網站開發需要多長的時間？',
    answer: '依據專案的複雜度而定。一般企業形象網站約需 4 到 6 週的時間完成；若包含複雜後端邏輯的系統平台，則可能需要 2 到 4 個月的開發週期。我們會在簽約前提供明確的時程表。'
  },
  {
    question: '網頁開發完成後，有提供後續維護嗎？',
    answer: '有的。我們提供專案上線後三個月的免費保固期，修復任何潛在的程式錯誤。此外，我們也提供按年或按月計費的長期系統維護合約，確保您的網站持續穩定且安全地運作。'
  },
  {
    question: '我們的網站是否對 AEO/SEO 友善？',
    answer: '絕對是的！我們不僅遵循所有最新的技術 SEO 規範，包括 Semantic HTML、極速載入與響應式設計，更針對 AI 答案引擎(AEO)提供結構化資料(JSON-LD Schema)，讓您的網頁更容易被 AI 直接引用。'
  }
])
</script>

<template>
  <section id="faq" class="faq-section">
    <!-- 加入 JSON-LD FAQ Schema 給 AI 答案引擎抓取 -->
    <component :is="'script'" type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {{ faqs.map(faq => `{
            "@type": "Question",
            "name": "${faq.question}",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "${faq.answer}"
            }
          }`).join(',') }}
        ]
      }
    </component>

    <div class="content-container">
      <div class="header-container">
        <span class="section-subtitle">常見問題 FAQ</span>
        <h2 class="section-title">了解更多關於我們的服務</h2>
        <p class="section-description">
          您對諾秋工作室的服務有疑問嗎？我們整理了客戶最常詢問的問題，為您提供直接明確的解答。
        </p>
      </div>
      
      <div class="faq-list">
        <dl class="space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <!-- 標題部分採用 dt (定義項目) 並將問題放在 h3 中以強化語意 -->
            <dt>
              <h3 class="faq-question">
                {{ faq.question }}
              </h3>
            </dt>
            <!-- 答案部分採用 dd (定義描述) 給出直接回答 -->
            <dd class="faq-answer">
              <p>{{ faq.answer }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss";
.faq-section {
  @apply bg-slate-900 py-24 sm:py-32 border-t border-slate-800;
}

.content-container {
  @apply mx-auto max-w-7xl px-6 lg:px-8;
}

.header-container {
  @apply mx-auto max-w-2xl lg:text-center mb-16;
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

.faq-list {
  @apply mx-auto max-w-3xl divide-y divide-white/10;
}

.faq-item {
  @apply pt-6 pb-6;
}

.faq-question {
  @apply text-lg font-semibold leading-7 text-white;
}

.faq-answer {
  @apply mt-4 text-base leading-7 text-gray-300;
}
</style>
