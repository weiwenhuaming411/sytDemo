<template>
  <div class="app-container">
    <!-- 顶部组件 -->
    <HospitalTop></HospitalTop>
    <!-- 展示路由组件区域 -->
    <RouterView></RouterView>
    <!-- 底部组件 -->
    <HospitalBottom></HospitalBottom>
    <!-- 登录组件 -->
    <Login></Login>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
