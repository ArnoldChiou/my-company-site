<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import FAQSection from '../components/FAQSection.vue'
import ContactSection from '../components/ContactSection.vue'
import { SITE_NAME, SITE_URL, useSiteSeo } from '../utils/seo'

const description = '提供專業的系統開發、量化交易策略、前後端整合等企業級客製化解決方案。'

useSiteSeo({
  title: '諾秋工作室 | 專業軟體開發與網頁設計',
  description,
  path: '/',
  schema: {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description,
    email: 'nordchiou@gmail.com',
    telephone: '+886-926-192-178',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+886-926-192-178',
      contactType: 'customer support',
      availableLanguage: ['zh-TW']
    }
  }
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
