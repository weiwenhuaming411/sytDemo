<template>
    <div>
    <!-- 重定向此页面后获取用户信息并渲染 -->
    </div>
</template>

<script setup lang='ts'>
import {setToken} from '@/utils/token'
import { useRoute } from 'vue-router';

let $route = useRoute()

// 获取路由参数
let token = $route.query
// 存储token到本地存储
setToken('userInfo', JSON.stringify(token))
let html: any = document.querySelector('html')
html.style.display = 'none' // 隐藏html元素
</script>

<style scoped lang='scss'>

</style>