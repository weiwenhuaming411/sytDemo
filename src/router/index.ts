import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),  // 指定路由器的工作模式,createWebHashHistory()  // 带#号
    routes: [
        {
            path: '/home',  // 路径
            component: ()=>import('@/views/home/index.vue'),  // 按需引入
            // meta: {},
        },
        {
            path: '/hospital',
            component: ()=>import('@/views/hospital/index.vue'),
            children:[
                {
                    path:'register',
                    component: ()=>import('@/views/hospital/register/index.vue')
                },
                {
                    path:'detail',
                    component: ()=>import('@/views/hospital/detail/index.vue')
                },
                {
                    path:'notice',
                    component: ()=>import('@/views/hospital/notice/index.vue')
                },
                {
                    path:'close',
                    component: ()=>import('@/views/hospital/close/index.vue')
                },
                {
                    path:'search',
                    component: ()=>import('@/views/hospital/search/index.vue')
                },
                {
                    path: '/hospital/',
                    redirect: '/hospital/register'
                }
            ]
        },
        { path: '/', redirect: '/home' }  // 重定向
    ]
})
// 全局前置路由守卫--初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next) => { })
// 全局后置路由守卫--每次路由切换之后被调用
// router.afterEach((to, from) => { })
export default router