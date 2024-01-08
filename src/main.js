// import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

//pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

//引入初始化的样式文件
import '@/styles/common.scss';

createApp(App).use(pinia).use(router).mount('#app');
