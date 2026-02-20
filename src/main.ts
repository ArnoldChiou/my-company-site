import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import './assets/main.css'
import App from './App.vue'
import router from './router' // 新增

const app = createApp(App)
const head = createHead()
app.use(router) // 新增
app.use(head)
app.mount('#app')