<template>
  <div id="about" class="about-section">
    <div class="bg-pattern-container">
      <svg class="bg-pattern" aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
          <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>
    <div class="content-grid">
      <div class="text-content-wrapper">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="section-subtitle">關於諾秋</p>
            <h1 class="section-title">
              不只是寫程式，更是創造價值
            </h1>
            <p class="section-description">
              諾秋工作室成立於 2022 年，我們是一群熱愛技術的開發者與設計師。我們的使命是透過最先進的網頁技術，與客戶共同成長。
            </p>
          </div>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="team-image" src="https://images.pexels.com/photos/2675055/pexels-photo-2675055.jpeg" alt="Team meeting">
      </div>
      <div class="detail-content-wrapper">
        <div class="lg:pr-4">
          <div class="detail-text">
            <p>
              我們深信好的軟體需要精雕細琢。從需求分析、介面設計、系統架構到程式開發，我們在每一個環節都力求完美。我們不使用廉價的套版，而是為您量身打造最適合的解決方案。
            </p>
            <ul role="list" class="feature-list">
              <li class="feature-item">
                <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.875 4.875 0 010-7.47h6.88a4.875 4.875 0 010 7.47 4.5 4.5 0 01-1.44 8.765h-4z" clip-rule="evenodd" />
                </svg>
                <span><strong class="font-semibold text-white">雲端原生</strong> 我們擁抱雲端技術，讓您的服務具備高擴展性與穩定性。</span>
              </li>
              <li class="feature-item">
                <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
                <span><strong class="font-semibold text-white">資訊安全</strong> 安全是我們的首要考量，確保您的數據與客戶資料得到最嚴密的保護。</span>
              </li>
              <li class="feature-item">
                <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5a3.5 3.5 0 10-6.974 1.723c-.5 2.56-3.26 4.634-6.526 4.887V3.533zM2 3.533C2 2.686 2.687 2 3.533 2h8.934c.846 0 1.533.686 1.533 1.533v8.534C14 15.688 10.42 18.5 6 18.5s-8-2.812-8-6.433V3.533z" />
                </svg>
                <span><strong class="font-semibold text-white">敏捷開發</strong> 快速迭代，讓您隨時掌握專案進度，並能針對市場變化做出即時調整。</span>
              </li>
            </ul>
            <p class="mt-8">
              選擇諾秋，您選擇的不只是一個外包廠商，而是一個能與您並肩作戰的技術夥伴。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";
.about-section {
  @apply relative isolate overflow-hidden bg-slate-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0;
}

.bg-pattern-container {
  @apply absolute inset-0 -z-10 overflow-hidden;
}

.bg-pattern {
  @apply absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)];
}

.content-grid {
  @apply mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10;
}

.text-content-wrapper {
  @apply lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8;
}

.section-subtitle {
  @apply text-base font-semibold leading-7 text-indigo-400;
}

.section-title {
  @apply mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl;
}

.section-description {
  @apply mt-6 text-xl leading-8 text-gray-300;
}

.image-wrapper {
  @apply -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden;
}

.team-image {
  @apply w-[48rem] h-[45rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem];
}

.detail-content-wrapper {
  @apply lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8;
}

.detail-text {
  @apply max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg;
}

.feature-list {
  @apply mt-8 space-y-8 text-gray-400;
}

.feature-item {
  @apply flex gap-x-3;
}

.feature-icon {
  @apply mt-1 h-5 w-5 flex-none text-indigo-400;
}
</style>
