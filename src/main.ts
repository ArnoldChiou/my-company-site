import { ViteSSG } from 'vite-ssg'
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
    ({ app }) => {
        app.use(MotionPlugin)
    },
)
