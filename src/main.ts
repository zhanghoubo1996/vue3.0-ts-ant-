import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ant from 'ant-design-vue';
import './css/index.scss';
import {i18n } from "@/il8n/index"
import 'ant-design-vue/dist/antd.css';
import 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
const app=createApp(App)
app.use(VXETable)
app.use(store)
app.use(router)
app.use(Ant);
app.use(i18n)
app.mount('#app')