import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
 
import './assets/scss/style.scss'

import MainPage from '@/pages/MainPage.vue'
import OurCoffeePage from '@/pages/OurCoffeePage.vue'
import Header from './components/Header.vue'
import HeaderLite from './components/HeaderLite.vue'

const routes = [
    { path: '/', components: { default: MainPage, header: Header } },
    { path: '/our-coffee', components: { default: OurCoffeePage, header: HeaderLite } },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
