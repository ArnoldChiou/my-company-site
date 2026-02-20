<script setup lang="ts">
import { useHead } from '@unhead/vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import FAQSection from '../components/FAQSection.vue'
import ContactSection from '../components/ContactSection.vue'

useHead({
  title: 'My Company | 專業的系統開發與解決方案',
  meta: [
    { name: 'description', content: '提供專業的系統開發、量化交易策略、前後端整合等企業級客製化解決方案。' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        "name": "My Company",
        "url": "https://www.my-company-site.com",
        "description": "提供專業的系統開發、量化交易策略、前後端整合等企業級客製化解決方案。",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+886-2-1234-5678",
          "contactType": "customer support"
        }
      })
    }
  ]
})
</script>

<template>
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <FAQSection />
    <ContactSection />
  </main>
</template>