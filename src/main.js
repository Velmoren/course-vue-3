import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const counter = (a = 0, b) => {
    return a + b
}

console.log(counter(1, 2));
console.log(counter(3, 4));
console.log(counter(undefined, 6));