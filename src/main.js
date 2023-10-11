import { createApp } from 'vue';
import '@fontsource-variable/montserrat';
import '@fontsource/hind';
import '@fontsource/poppins/400.css'
import './assets/app.css';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
