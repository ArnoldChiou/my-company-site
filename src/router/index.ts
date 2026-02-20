import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsOfService from '../views/TermsOfService.vue'
import NewsView from '../views/NewsView.vue'
import DocsView from '../views/DocsView.vue'
import MaintenanceView from '../views/MaintenanceView.vue'

export const routes: RouteRecordRaw[] = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/privacy-policy', name: 'privacy', component: PrivacyPolicy },
    { path: '/terms-of-service', name: 'terms', component: TermsOfService },
    { path: '/news', name: 'news', component: NewsView },
    { path: '/docs', name: 'docs', component: DocsView },
    { path: '/maintenance', name: 'maintenance', component: MaintenanceView }
]

export const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
    if (to.hash) {
        return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
}