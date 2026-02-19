<template>
  <div class="bg-slate-900 min-h-screen py-24 sm:py-32">
    <div class="mx-auto max-w-4xl px-6 lg:px-8 text-gray-300">
      <h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">系統維護服務</h1>
      
      <div class="space-y-12 text-base leading-7">
        
        <section>
          <h2 class="text-2xl font-semibold text-indigo-400 mb-6">基礎維護項目</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 class="text-lg font-semibold text-white mb-2">伺服器與效能監控</h3>
              <p class="text-sm">持續監控主機資源與連線狀態，確保系統高可用性，並定期優化效能。</p>
            </div>
            <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 class="text-lg font-semibold text-white mb-2">安全性更新</h3>
              <p class="text-sm">定期更新伺服器、框架與套件版本，修補已知漏洞，防範潛在資安威脅。</p>
            </div>
            <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 class="text-lg font-semibold text-white mb-2">資料定期備份</h3>
              <p class="text-sm">執行自動化與異地資料備份機制，確保突發狀況時能迅速還原資料庫。</p>
            </div>
            <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 class="text-lg font-semibold text-white mb-2">異常排除與 Bug 修復</h3>
              <p class="text-sm">提供線上技術支援，快速排查並修復系統運行中出現的各類程式錯誤。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-indigo-400 mb-6">聯絡方式</h2>
          <div class="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <p class="mb-6">如需了解詳細的維護方案與報價，請透過以下方式與我們聯繫：</p>
            <ul class="space-y-4">
              <li class="flex items-center gap-x-4">
                <svg class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:contact@nordchiou.com" class="hover:text-white transition-colors">contact@nordchiou.com</a>
              </li>
              <li class="flex items-center gap-x-4">
                 <svg class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>服務時間：週一至週日 08:00 - 23:00</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>