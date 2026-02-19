<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="bg-gray-900 min-h-screen">
    <NavBar />
    
    <router-view />
    
    <FooterSection />
  </div>
</template>

<style>
/* 保留原本的 Scrollbar 與 html 樣式 */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: #0f172a; }
::-webkit-scrollbar-thumb { background: #4f46e5; border-radius: 5px; }
::-webkit-scrollbar-thumb:hover { background: #4338ca; }
html { scroll-behavior: smooth; }
</style>