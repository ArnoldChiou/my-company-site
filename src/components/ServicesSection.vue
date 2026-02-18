<template>
  <div id="services" class="bg-slate-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-400">我們的專業</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">全方位的數位解決方案</p>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          無論是品牌形象網站、高效能應用程式，或是複雜的後端系統，我們都能為您量身打造。
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div class="flex flex-col group p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
              <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/50">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S13.627 3 12 3m0 0c-1.657 0-3.642 3.51-3.642 9s1.5 8.1 3 9m0 0a9.004 9.004 0 01-8.716-6.747M12 3c1.657 0 3.642 3.51 3.642 9s-1.5 8.1-3 9m-9-9a9 9 0 019-9" />
                </svg>
              </div>
              網頁設計 RWD
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
              <p class="flex-auto">打造響應式網站，確保在手機、平板與桌機上都有完美的瀏覽體驗。我們注重使用者介面(UI)與使用者體驗(UX)設計。</p>
            </dd>
          </div>
          
          <div class="flex flex-col group p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
              <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/50">
                 <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                 </svg>
              </div>
              APP 行動應用開發
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
              <p class="flex-auto">iOS 與 Android 雙平台開發，使用 Flutter 或 React Native 技術，快速部署、高效能，助您搶佔行動市場。</p>
            </dd>
          </div>
          
          <div class="flex flex-col group p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
              <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/50">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              系統整合與雲端服務
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
              <p class="flex-auto">從企業 ERP 到客製化管理系統，我們提供完整的後端解決方案與雲端部署服務 (AWS, GCP, Azure)。</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
