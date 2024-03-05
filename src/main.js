import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@unhead/vue'

const app = createApp(App)
const head = createHead()
app.use(head)
app.mount('#app')
