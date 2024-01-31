import { createApp } from 'vue'
import App from './App.vue'

//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
import gloalComponent from './components'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import './style/reset.scss'

const app = createApp(App);
app.use(gloalComponent);
app.mount('#app');
