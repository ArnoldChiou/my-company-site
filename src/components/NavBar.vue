<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-wrapper">
        <div class="logo-area">
          <router-link to="/" class="brand-link">
            <img class="brand-logo" src="/logo.png" alt="諾秋工作室 Logo" />
            <span class="brand-name">
              諾秋工作室
            </span>
          </router-link>
          <div class="hidden md:block">
            <div class="desktop-menu">
              <router-link to="/" class="nav-link">首頁</router-link>
              <router-link to="/#about" class="nav-link">關於我們</router-link>
              <router-link to="/#services" class="nav-link">服務項目</router-link>
              <router-link to="/#portfolio" class="nav-link">作品集</router-link>
              <BaseButton to="/#contact" variant="contact">聯絡我們</BaseButton>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button @click="toggleMenu" type="button" class="mobile-menu-btn">
            <span class="sr-only">開啟選單</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMenuOpen" class="mobile-menu">
      <div class="mobile-menu-items">
        <router-link to="/" @click="isMenuOpen = false" class="mobile-nav-link">首頁</router-link>
        <router-link to="/#about" @click="isMenuOpen = false" class="mobile-nav-link">關於我們</router-link>
        <router-link to="/#services" @click="isMenuOpen = false" class="mobile-nav-link">服務項目</router-link>
        <router-link to="/#portfolio" @click="isMenuOpen = false" class="mobile-nav-link">作品集</router-link>
        <router-link to="/#contact" @click="isMenuOpen = false" class="mobile-nav-link">聯絡我們</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@reference "tailwindcss";
.navbar {
  @apply sticky top-0 z-50 w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-800;
}

.navbar-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.navbar-wrapper {
  @apply flex items-center justify-between h-16;
}

.logo-area {
  @apply flex items-center;
}

.brand-link {
  @apply flex-shrink-0 flex items-center gap-x-2;
}

.brand-logo {
  @apply h-8 w-auto;
}

.brand-name {
  @apply text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400;
}

.desktop-menu {
  @apply ml-10 flex items-baseline space-x-4;
}

.nav-link {
  @apply text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors;
}

.mobile-menu-btn {
  @apply inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white;
}

.mobile-menu {
  @apply md:hidden bg-slate-900 border-b border-slate-800 absolute w-full transition-all duration-300 ease-in-out origin-top;
}

.mobile-menu-items {
  @apply px-2 pt-2 pb-3 space-y-1 sm:px-3;
}

.mobile-nav-link {
  @apply text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium;
}
</style>
