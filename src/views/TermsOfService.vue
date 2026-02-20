<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1 class="page-title">服務條款</h1>
      
      <div class="content-body">
        <p>存取或使用諾秋工作室的服務，即表示您同意受以下條款的約束。</p>

        <h2 class="section-title">1. 服務內容</h2>
        <p>本工作室提供網頁設計、軟體開發與系統整合等數位解決方案。具體專案範圍、開發時程與費用，以雙方最終確認並簽署之報價單或合約為準。</p>

        <h2 class="section-title">2. 智慧財產權</h2>
        <p>在專案款項全數結清後，客製化開發之最終產品與設計成果（不含開源組件與我方共用底層程式碼）版權歸客戶所有。本工作室保留將專案成果展示於作品集之權利，若雙方另有簽訂保密協議（NDA）則不在此限。</p>

        <h2 class="section-title">3. 客戶義務</h2>
        <p>客戶應配合提供專案所需之相關資料（如文案、圖片、伺服器權限等）。因客戶延遲提供資料導致之專案延宕，本工作室不負延遲責任。</p>

        <h2 class="section-title">4. 免責聲明</h2>
        <p>本工作室將盡力確保交付軟體之穩定性與安全性，但在法律允許的最大範圍內，對於因使用本服務而產生的任何間接損害或商業利潤損失，本工作室不承擔賠償責任。</p>

        <h2 class="section-title">5. 終止服務</h2>
        <p>若客戶嚴重違反合約條款或逾期未支付款項，本工作室有權暫停或終止提供服務。</p>
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
  @apply mx-auto max-w-3xl px-6 lg:px-8 text-gray-300;
}

.page-title {
  @apply text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8;
}

.content-body {
  @apply space-y-6 text-base leading-7;
}

.section-title {
  @apply text-xl font-semibold text-white mt-8;
}
</style>