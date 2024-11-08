
// import './assets/main.css';
// import './assets/Modern Vue Styles.css'; // 引入新添加的样式文件

// import { createApp } from 'vue';
// import App from './App.vue';

// createApp(App).mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 

import './assets/main.css';
import './assets/Modern Vue Styles.css'; 

createApp(App).use(router).mount('#app');
