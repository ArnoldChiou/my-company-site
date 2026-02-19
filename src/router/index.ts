import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsOfService from '../views/TermsOfService.vue'
import NewsView from '../views/NewsView.vue' // 1. 引入

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/privacy-policy', name: 'privacy', component: PrivacyPolicy },
        { path: '/terms-of-service', name: 'terms', component: TermsOfService },
        { path: '/news', name: 'news', component: NewsView } // 2. 新增路由
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        }
        return { top: 0 }
    }
})

export default router