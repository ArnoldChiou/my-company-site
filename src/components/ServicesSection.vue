<template>
  <div id="services" class="services-section">
    <div class="content-container">
      <div class="header-container">
        <h2 class="section-subtitle">我們的專業</h2>
        <p class="section-title">全方位的數位解決方案</p>
        <p class="section-description">
          無論是品牌形象網站、高效能應用程式、複雜的後端系統，我們都能為您量身打造。
        </p>
      </div>
      <div class="services-grid-wrapper">
        <dl class="services-grid">
          <div class="service-card group">
            <dt class="service-header">
              <div class="icon-container group-hover:bg-indigo-500">
                <svg class="service-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S13.627 3 12 3m0 0c-1.657 0-3.642 3.51-3.642 9s1.5 8.1 3 9m0 0a9.004 9.004 0 01-8.716-6.747M12 3c1.657 0 3.642 3.51 3.642 9s-1.5 8.1-3 9m-9-9a9 9 0 019-9" />
                </svg>
              </div>
              網頁設計 RWD
            </dt>
            <dd class="service-description">
              <p class="flex-auto">打造響應式網站，確保在手機、平板與桌機上都有完美的瀏覽體驗。我們注重使用者介面(UI)與使用者體驗(UX)設計。</p>
            </dd>
          </div>
          
          <div class="service-card group">
            <dt class="service-header">
              <div class="icon-container group-hover:bg-indigo-500">
                 <svg class="service-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45 15.08 15.08 0 01-.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.438 4.438 0 002.946-2.946 4.493 4.493 0 004.306-1.758" />
                 </svg>
              </div>
              高效能系統開發
            </dt>
            <dd class="service-description">
              <p class="flex-auto">告別系統卡頓與延遲。我們專注於建構高併發、高可用性的現代化架構，用最嚴謹的程式碼，為您的產品提供如閃電般的極速體驗。</p>
            </dd>
          </div>
          
          <div class="service-card group">
            <dt class="service-header">
              <div class="icon-container group-hover:bg-indigo-500">
                <svg class="service-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              系統整合與雲端服務
            </dt>
            <dd class="service-description">
              <p class="flex-auto">從企業 ERP 到客製化管理系統，我們提供完整的後端解決方案與雲端部署服務 (AWS, GCP, Azure)。</p>
            </dd>
          </div>

          <div class="service-card group">
            <dt class="service-header">
              <div class="icon-container group-hover:bg-indigo-500">
                <svg class="service-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              專業系統維護
            </dt>
            <dd class="service-description">
              <p class="flex-auto">針對既有系統提供日常維護、效能優化與客製化功能開發，確保您的服務穩定運行，並隨業務需求持續進化。</p>
            </dd>
          </div>

        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";
.services-section {
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

.services-grid-wrapper {
  @apply mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none;
}

.services-grid {
  @apply grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none md:grid-cols-2 lg:grid-cols-2;
}

.service-card {
  @apply flex flex-col p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10;
}

.service-header {
  @apply flex items-center gap-x-3 text-base font-semibold leading-7 text-white;
}

.icon-container {
  @apply h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/50;
}

.service-icon {
  @apply h-6 w-6 text-white;
}

.service-description {
  @apply mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300;
}
</style>
