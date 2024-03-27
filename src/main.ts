import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.ts'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import vuexStore from './vuex/store.ts'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(vuexStore)
app.use(pinia)
app.use(VueQueryPlugin)
app.mount('#app')
