<script setup lang="ts">
import { onMounted, ref } from 'vue'

const showContent = ref(false)

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, 100)
})
</script>

<template>
  <div class="relative bg-slate-900 overflow-hidden">
    <!-- Abstract background -->
    <div class="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>

    <div class="mx-auto max-w-[90%] px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 transition-all duration-1000 ease-out transform" :class="showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
        <div class="mt-24 sm:mt-32 lg:mt-16">
          <a href="#" class="inline-flex space-x-6">
            <span class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-600/20">最新消息</span>
            <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-slate-300">
              <span>2025 全新設計方案上線</span>
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </span>
          </a>
        </div>
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-indigo-200">
          諾秋工作室
          <span class="block text-indigo-500 mt-2">為您打造數位未來</span>
        </h1>
        <p class="mt-6 text-lg leading-8 text-slate-300">
          我們專注於網頁設計與軟體開發，結合美學與技術，用最先進的程式碼實現您的商業願景。
          <br class="hidden sm:block">簡潔、高效、專業，是我們的承諾。
        </p>
        <div class="mt-10 flex items-center gap-x-6">
          <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 hover:scale-105 shadow-indigo-500/50">開始專案</a>
          <a href="#" class="text-sm font-semibold leading-6 text-white group flex items-center">
            了解更多 <span aria-hidden="true" class="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
      
      <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div class="hidden sm:flex mx-auto mt-16 max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div class="max-w-2xl flex-none sm:max-w-3xl lg:max-w-none"> <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl shadow-indigo-500/20 transform hover:scale-[1.02] transition-transform duration-500">
            <img src="https://i.postimg.cc/6p7cb2tQ/safar-safarov-ko-Od-Uvf-Gr4c-unsplash.jpg" 
                 alt="App screenshot" 
                 class="w-full lg:w-[100rem] max-h-[40rem] object-cover object-top rounded-md shadow-2xl ring-1 ring-gray-900/10 opacity-90 hover:opacity-100 transition-opacity">
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>