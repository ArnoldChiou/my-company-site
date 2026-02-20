<script setup lang="ts">
// Animations are now handled by @vueuse/motion
</script>

<template>
  <header class="hero-section">
    <!-- Abstract background -->
    <div class="bg-image"></div>
    <div class="bg-effect-container" aria-hidden="true">
      <div class="bg-effect-blob" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>

    <div class="content-container">
      <div 
        class="text-content-wrapper"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
      >
        <div class="mt-24 sm:mt-32 lg:mt-16">
          <a href="#" class="news-link">
            <span class="news-badge">最新消息</span>
            <span class="news-text-wrapper">
              <span>2026 全新設計方案上線</span>
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </span>
          </a>
        </div>
        <h1 class="hero-title">
          諾秋工作室
          <span class="block text-indigo-500 mt-2">為您打造數位未來</span>
        </h1>
        <p class="hero-description">
          我們專注於網頁設計與軟體開發，結合美學與技術，用最先進的程式碼實現您的商業願景。
          <br class="hidden sm:block">簡潔、高效、專業，是我們的承諾。
        </p>
        <div class="action-buttons">
          <router-link to="/#contact" class="btn-primary">開始專案</router-link>
          
          <router-link to="/#about" class="btn-secondary group">
            了解更多 <span aria-hidden="true" class="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </router-link>
        </div>
      </div>
      
      <div class="image-section-wrapper">
        <div class="image-container-inner">
          <div 
            class="image-card"
            v-motion
            :initial="{ opacity: 0, scale: 0.95, x: 50 }"
            :enter="{ opacity: 1, scale: 1, x: 0, transition: { duration: 1000, delay: 300 } }"
          >
            <img src="https://i.postimg.cc/zXMKvqRs/Gemini-Generated-Image-9fz9r49fz9r49fz9.png" 
                 alt="App screenshot" 
                 class="hero-image">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@reference "tailwindcss";
.hero-section {
  @apply relative bg-slate-900 overflow-hidden;
}

.bg-image {
  @apply absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay;
}

.bg-effect-container {
  @apply absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80;
}

.bg-effect-blob {
  @apply relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem];
}

.content-container {
  @apply mx-auto max-w-[90%] px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40;
}

.text-content-wrapper {
  @apply mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8;
}

.news-link {
  @apply inline-flex space-x-6;
}

.news-badge {
  @apply rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-600/20;
}

.news-text-wrapper {
  @apply inline-flex items-center space-x-2 text-sm font-medium leading-6 text-slate-300;
}

.hero-title {
  @apply mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-indigo-200;
}

.hero-description {
  @apply mt-6 text-lg leading-8 text-slate-300;
}

.action-buttons {
  @apply mt-10 flex items-center gap-x-6;
}

.btn-primary {
  @apply rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 hover:scale-105 shadow-indigo-500/50;
}

.btn-secondary {
  @apply text-sm font-semibold leading-6 text-white flex items-center;
}

.image-section-wrapper {
  @apply mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32;
}

.image-container-inner {
  @apply hidden sm:flex mx-auto mt-16 max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32;
}

.image-card {
  @apply max-w-2xl flex-none sm:max-w-3xl lg:max-w-none -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl shadow-indigo-500/20 transform hover:scale-[1.02] transition-transform duration-500;
}

.hero-image {
  @apply w-full lg:w-[60rem] max-h-[40rem] object-cover object-top rounded-md shadow-2xl ring-1 ring-gray-900/10 opacity-90 hover:opacity-100 transition-opacity;
}
</style>