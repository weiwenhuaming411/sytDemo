<template>
    <div class="top">
        <div class="content">
            <!-- 左侧内容区域 -->
            <div class="left">
                <div class="img">img</div>
                <p @click="goHome">尚医通 预约挂号统一平台</p>
            </div>
            <!-- 右侧内容区域 -->
            <div class="right">
                <p class="help">帮助中心</p>
                <!-- 未登录 -->
                <p class="login" @click="login" v-if="!userStore.userInfo.name">登录/注册</p>
                <!-- 已登录 -->
                <el-dropdown v-else class="login" trigger="click">
                    <span class="el-dropdown-link" style="color:red">
                        {{ userStore.userInfo.name }}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="$router.push('/user/certification')">实名认证</el-dropdown-item>
                            <el-dropdown-item @click="$router.push('/user/order')">挂号订单</el-dropdown-item>
                            <el-dropdown-item @click="$router.push('/user/patient')">就诊人管理</el-dropdown-item>
                            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';

let $router = useRouter()

// 返回首页
const goHome = ()=>{
    $router.push('/home')
}

// 获取user仓库的数据
import useUserStore from '@/store/user'
let userStore = useUserStore()

// 登录
const login = () => {
    userStore.visible = true
}

// 退出登录
const loginOut = () => {
    userStore.userInfo = {} // 清空用户信息
    userStore.visible = false // 关闭登录弹窗
    localStorage.removeItem('userInfo') // 清除本地存储的用户信息
    $router.push('/home') // 跳转到首页
}
</script>

<style scoped lang="scss">
.top {
    width: 100%;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 99;
}

.content {
    width: 1200px;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: space-between;

    .left {
        display: flex;
        justify-content: center;
        align-items: center;

        .img {
            width: 50px;
            height: 50px;
            background: #55a6fe;
            text-align: center;
            line-height: 50px;
            border-radius: 25px;
            margin-right: 10px;
        }

        p {
            font-size: 22px;
            color: #55a6fe;
            cursor: pointer;
        }
    }

    .right {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #ccc;

        .help {
            margin-right: 10px;
        }

        .login:hover {
            color: #55a6fe;
        }
    }
}
</style>