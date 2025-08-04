<template>
    <div>
        <el-carousel height="400px" :interval="5000">
            <el-carousel-item v-for="item in 4" :key="item">
                <img src="@/assets/images/chenduling.jpg">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
img{
    width: 100%;
    height: 100%;
}
</style>