import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ant from 'ant-design-vue';
import './css/index.scss';
import { i18n } from "@/il8n/index"
import 'ant-design-vue/dist/antd.css';
import 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
VXETable.setup({
    // 对组件内置的提示语进行国际化翻译
    translate(key, args) {
        // 例如，只翻译 "app." 开头的键值
        if (key && key.indexOf('app.') > -1) {
            return i18n.global.t(key, args)
        }
        return key
    }
})
const app = createApp(App)
app.use(VXETable)
app.use(store)
app.use(router)
app.use(Ant);
app.use(i18n)
app.mount('#app')