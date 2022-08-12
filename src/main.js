import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as  ElementPlusIconsVue from'element-plus'
import 'element-plus/theme-chalk/index.css'
import './assets/style/reset.css'
import App from './App.vue'

const app =createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(ElementPlusIconsVue);
app.mount('#app');
