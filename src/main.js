import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as  ElementPlusIconsVue from'element-plus'
import 'element-plus/theme-chalk/index.css'
import './assets/style/reset.css'
import './assets/style/root.css'
import App from './App.vue'

// 引入md解析
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});


const app =createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(ElementPlusIconsVue);
app.use(VMdPreview);
app.mount('#app');
