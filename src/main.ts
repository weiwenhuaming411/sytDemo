import { createApp } from 'vue'
import App from '@/App.vue'

// 引入清除默认样式文件
import '../node_modules/reset-scss/reset.scss'

// 引入全局组件
import HospitalTop from "@/components/hospital_top/index.vue"
import HospitalBottom from '@/components/hospital_bottom/index.vue'

// 引入路由
import router from '@/router/index'

// 引入pinia
import {createPinia} from 'pinia'  // 引入
const pinia = createPinia()  // 创建


// 引入element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

// 注册全局组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

// 应用路由
app.use(router)
app.use(pinia)  // 应用

// 应用element Plus
app.use(ElementPlus, {
    locale: zhCn,
})

// 挂载
app.mount('#app')
