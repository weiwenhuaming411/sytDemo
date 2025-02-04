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
                <p class="login">登录/注册</p>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
let $router = useRouter()
const goHome = ()=>{
    $router.push('/home')
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