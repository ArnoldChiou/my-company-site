<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

// 控制按鈕狀態
const isSubmitting = ref(false)

const submitForm = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true

  try {
    // 請將下方的 URL 替換成您在 Formspree 取得的網址
    const response = await fetch('https://formspree.io/f/xojnlbvk', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    if (response.ok) {
      alert('感謝您的來信！我們已經收到您的訊息。')
      form.value = { name: '', email: '', message: '' } // 清空表單
    } else {
      alert('發生錯誤，請稍後再試或直接透過 Email 聯繫我們。')
    }
  } catch (error) {
    alert('網路連線異常，請檢查您的網路狀態。')
  } finally {
    isSubmitting.value = false
  }
}
</script>
<template>
  <section id="contact" class="contact-section">
    <div class="content-container">
      <div class="header-container">
        <span class="section-subtitle">聯絡我們</span>
        <h2 class="section-title">準備好開始您的專案了嗎？</h2>
        <p class="section-description">
          無論是系統開發、網頁設計或技術諮詢，我們都隨時準備好為您提供專業的解決方案。請填寫下方表單或直接透過電子郵件與我們聯繫。
        </p>
      </div>
      
      <div class="contact-grid">
        <div class="info-card">
          <h3 class="info-title">聯絡資訊</h3>
          <dl class="info-list">
            <div class="info-item">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <svg class="info-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </dt>
              <dd><a class="info-link" href="mailto:nordchiou@gmail.com">nordchiou@gmail.com</a></dd>
            </div>
            <div class="info-item">
              <dt class="flex-none">
                <span class="sr-only">營業時間</span>
                <svg class="info-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </dt>
              <dd>週一至週日 <br>07:00 - 24:00</dd>
            </div>
            <div class="info-item">
              <dt class="flex-none">
                <span class="sr-only">連絡電話</span>
                <svg class="info-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </dt>
              <dd><a class="info-link" href="tel:0926192178">0926-192-178</a></dd>
            </div>
            <div class="info-item">
              <dt class="flex-none">
                <span class="sr-only">統一編號</span>
                <svg class="info-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </dt>
              <dd>統一編號：00884771</dd>
            </div>
          </dl>
        </div>

        <form @submit.prevent="submitForm" class="contact-form">
          <div class="space-y-6">
            <div>
              <label for="name" class="form-label">姓名 / 公司名稱</label>
              <div class="mt-2">
                <input v-model="form.name" type="text" id="name" required class="form-input" placeholder="王大明">
              </div>
            </div>
            
            <div>
              <label for="email" class="form-label">電子郵件</label>
              <div class="mt-2">
                <input v-model="form.email" type="email" id="email" required class="form-input" placeholder="your@email.com">
              </div>
            </div>

            <div>
              <label for="message" class="form-label">專案需求與訊息</label>
              <div class="mt-2">
                <textarea v-model="form.message" id="message" rows="4" required class="form-input" placeholder="請簡述您的專案需求或是想詢問的問題..."></textarea>
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <BaseButton 
              type="submit" 
              variant="contact"
              :disabled="isSubmitting"
              :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
            >
              {{ isSubmitting ? '傳送中...' : '送出訊息' }}
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss";
.contact-section {
  @apply relative isolate bg-slate-900 py-24 sm:py-32;
}

.content-container {
  @apply mx-auto max-w-7xl px-6 lg:px-8;
}

.header-container {
  @apply mx-auto max-w-2xl lg:mx-0;
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

.contact-grid {
  @apply mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2;
}

.info-card {
  @apply bg-slate-800/50 p-8 rounded-2xl border border-slate-700;
}

.info-title {
  @apply text-xl font-semibold leading-7 text-white mb-6;
}

.info-list {
  @apply space-y-6 text-base leading-7 text-gray-300;
}

.info-item {
  @apply flex gap-x-4;
}

.info-icon {
  @apply h-7 w-6 text-indigo-400;
}

.info-link {
  @apply hover:text-white transition-colors;
}

.contact-form {
  @apply bg-slate-800/50 p-8 rounded-2xl border border-slate-700;
}

.form-label {
  @apply block text-sm font-medium leading-6 text-white;
}

.form-input {
  @apply block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 placeholder:text-gray-500;
}
</style>