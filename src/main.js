import { createApp } from 'vue'
import router from './router'
// import './style.css'
import './style/reset.css'
import './style/index.css'

import App from './App.vue'

createApp(App).use(router).mount('#app')
