<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="bg-gray-900 min-h-screen">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
    <FooterSection />
  </div>
</template>

<style>
/* Global scrollbar styling */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #0f172a; 
}
::-webkit-scrollbar-thumb {
  background: #4f46e5; 
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #4338ca; 
}

html {
  scroll-behavior: smooth;
}
</style>