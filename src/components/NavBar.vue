<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex-shrink-0 flex items-center gap-x-2">
            <img class="h-8 w-auto" src="/logo.png" alt="諾秋工作室 Logo" />
            <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              諾秋工作室
            </span>
          </router-link>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link to="/" class="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">首頁</router-link>
              <router-link to="/#about" class="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">關於我們</router-link>
              <router-link to="/#services" class="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">服務項目</router-link>
              <router-link to="/#portfolio" class="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">作品集</router-link>
              <router-link to="/#contact" class="bg-indigo-600/90 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-lg shadow-indigo-500/30">聯絡我們</router-link>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button @click="toggleMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white">
            <span class="sr-only">開啟選單</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMenuOpen" class="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full transition-all duration-300 ease-in-out origin-top">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link to="/" @click="isMenuOpen = false" class="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">首頁</router-link>
        <router-link to="/#about" @click="isMenuOpen = false" class="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">關於我們</router-link>
        <router-link to="/#services" @click="isMenuOpen = false" class="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">服務項目</router-link>
        <router-link to="/#portfolio" @click="isMenuOpen = false" class="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">作品集</router-link>
        <router-link to="/#contact" @click="isMenuOpen = false" class="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">聯絡我們</router-link>
      </div>
    </div>
  </nav>
</template>
