import { createApp } from 'vue'
import './style.css'
import App from './views/App.vue'
import router from './scripts/router'

createApp(App).use(router).mount('#app')
