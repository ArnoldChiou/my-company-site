import { ViteSSG } from 'vite-ssg'
import { createHead } from '@unhead/vue/client'
import { MotionPlugin } from '@vueuse/motion'
import './assets/main.css'
import App from './App.vue'
import { routes, scrollBehavior } from './router'

export const createApp = ViteSSG(
    App,
    {
        routes,
        base: import.meta.env.BASE_URL,
        scrollBehavior
    },
    ({ app, router, routes, isClient, initialState }) => {
        const head = createHead()
        app.use(head)
        app.use(MotionPlugin)
    },
)