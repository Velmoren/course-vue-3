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
    { path: '/', component: MainPage },
    { path: '/our-coffee', component: OurCoffeePage },
    { path: '/pleasure', component: PleasurePage },
    { path: '/contacts', component: ContactsPage },
    { path: '/thanks', component: ThanksPage },
    { path: '/product', component: ProductPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
