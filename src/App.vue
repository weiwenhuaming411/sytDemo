<template>
  <div class="container">
    <!-- 顶部组件 -->
    <HospitalTop></HospitalTop>
    <!-- 展示路由组件区域 -->
    <div class="content">
      <RouterView></RouterView>
    </div>
    <!-- 底部组件 -->
    <HospitalBottom></HospitalBottom>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 1200px;
    margin-top: 70px;
  }
}
</style>
