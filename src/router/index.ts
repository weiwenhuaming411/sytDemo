import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from '@/store/user'
import pinia from '@/store'

const router = createRouter({
    history: createWebHistory(),  // 指定路由器的工作模式,createWebHashHistory()  // 带#号
    routes: [
        {
            path: '/home',  // 路径
            component: ()=>import('@/views/home/index.vue'),  // 按需引入
            meta: {
                title: '首页'
            },
        },
        {
            path: '/hospital',
            component: ()=>import('@/views/hospital/index.vue'),
            children:[
                {
                    path:'register',
                    component: ()=>import('@/views/hospital/register/index.vue'),
                    meta: {
                        title: '医院详情'
                    },
                },
                {
                    path:'detail',
                    component: ()=>import('@/views/hospital/detail/index.vue'),
                    meta: {
                        title: '医院简介'
                    },
                },
                {
                    path:'notice',
                    component: ()=>import('@/views/hospital/notice/index.vue'),
                    meta: {
                        title: '挂号须知'
                    },
                },
                {
                    path: 'register_step1',
                    component: ()=>import('@/views/hospital/register/register_step1.vue'),
                    meta: {
                        title: '预约挂号第一步'
                    },
                },
                {
                    path: 'register_step2',
                    component: ()=>import('@/views/hospital/register/register_step2.vue'),
                    meta: {
                        title: '预约挂号第二步'
                    },
                },
                {
                    path: '/hospital/',
                    redirect: '/hospital/register'
                }
            ]
        },
        {
            path: '/user',
            component: ()=>import('@/views/user/index.vue'),
            children:[
                {
                    path: 'certification',
                    component: ()=>import('@/views/user/certification/index.vue'),
                    meta: {
                        title: '实名认证'
                    },
                },
                {
                    path: 'order',
                    component: ()=>import('@/views/user/order/index.vue'),
                    meta: {
                        title: '订单详情'
                    },
                },
                {
                    path: 'patient',
                    component: ()=>import('@/views/user/patient/index.vue'),
                    meta: {
                        title: '就诊人'
                    },
                },
                {
                    path: '/user/',
                    redirect: '/user/certification'  // 重定向到会员中心信息页面
                }
            ]
        },
        {
            path: '/wxlogin',
            component: ()=>import('@/components/login/wxlogin/index.vue'),
        },
        { path: '/', redirect: '/home' }  // 重定向
    ],
    // 路由切换时，滚动条的位置
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { left: 0, top: 0 }  // 滚动到顶部
    }
})


let userStore = useUserStore(pinia)
let whiteList = [
    '/home',
    '/hospital/register',
    '/hospital/detail',
    '/hospital/notice',
    '/hospital/close',
    '/hospital/search'
]

// 全局前置路由守卫--初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    let token = userStore.userInfo.token
    if(token){
        next()
    }else{
        if(whiteList.includes(to.path)){
            next()
        }else{
            userStore.visible = true
            next({path: '/home', query: {redirect: to.fullPath}})
        }
    }
    document.title = `尚医通 - ${to.meta.title}`
 })
// 全局后置路由守卫--每次路由切换之后被调用
router.afterEach((to, from) => {

 })

//  /home
//  /hospital/register
// /hospital/detail
// /hospital/notice
// /hospital/close
// /hospital/search
export default router