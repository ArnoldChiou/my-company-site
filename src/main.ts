import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router' // 新增

const app = createApp(App)
app.use(router) // 新增
app.mount('#app')