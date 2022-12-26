import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('@/views/Welcome.vue') },
        { path: '/menu', component: () => import('@/views/Menu.vue') },
    ],
})

createApp(App).use(router).mount('#app')
