import { createApp } from 'vue';
import App from './App.vue';
import clickOutside from '@/directives/click-outside'
import './assets/styles/css/main.css';

const app = createApp(App)

app.directive('clickoutside', clickOutside);

app.mount('#app');
