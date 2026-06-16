// import '/src/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Antd from 'ant-design-vue'
// import 'ant-design-vue/es/style/index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '/src/assets/styles/css/main.css'

const app = createApp(App)

AOS.init({
  duration: 1100,
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  once: true,
  offset: 80,
  delay: 0,
});

app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.use(Antd)
app.use(i18n)

app.mount('#app')
