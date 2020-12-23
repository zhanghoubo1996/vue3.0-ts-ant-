import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ant from 'ant-design-vue';
import './css/index.scss';
import {i18n } from "@/il8n/index"
import 'ant-design-vue/dist/antd.css';
const app=createApp(App)
app.use(store)
app.use(router)
app.use(Ant);
app.use(i18n)
app.mount('#app')