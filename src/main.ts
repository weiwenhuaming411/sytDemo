import { createApp } from 'vue'
import App from '@/App.vue'

// 引入清除默认样式文件
import 'reset-scss/reset.scss'
// 引入主题样式文件
// import '@/assets/theme/index.scss'

// 引入全局组件
import HospitalTop from "@/components/home_top/index.vue"
import HospitalBottom from '@/components/home_bottom/index.vue'
import Login from '@/components/login/index.vue'
import HospitalUser from '@/components/navigation/index.vue'
import Pagintion from '@/components/pagintion/index.vue'

// 引入pinia
import pinia from '@/store'  // 引入

// 引入路由
import router from '@/router/index'

// 引入element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

// 注册全局组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
app.component('Login', Login)
app.component('HospitalUser', HospitalUser)
app.component('Pagintion', Pagintion)

app.use(pinia)

// 应用路由
app.use(router)

// 应用element Plus
app.use(ElementPlus, {
    locale: zhCn,
})

// 挂载
app.mount('#app')
