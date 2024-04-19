import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
 
import './assets/scss/style.scss'

import MainPage from '@/pages/MainPage.vue'
import OurCoffeePage from '@/pages/OurCoffeePage.vue'
import Header from './components/Header.vue'
import HeaderLite from './components/HeaderLite.vue'
import PleasurePage from './pages/PleasurePage.vue'
import ContactsPage from './pages/ContactsPage.vue'
import ThanksPage from './pages/ThanksPage.vue'
import ProductPage from './pages/ProductPage.vue'

const routes = [
    { path: '/', components: { default: MainPage, header: Header } },
    { path: '/our-coffee', components: { default: OurCoffeePage, header: HeaderLite } },
    { path: '/pleasure', components: { default: PleasurePage, header: HeaderLite } },
    { path: '/contacts', components: { default: ContactsPage, header: HeaderLite } },
    { path: '/thanks', components: { default: ThanksPage, header: HeaderLite } },
    { path: '/product', components: { default: ProductPage, header: HeaderLite } },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
