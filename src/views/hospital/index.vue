<template>
  <div class="hospital">
    <!-- 左侧导航区 -->
    <div class="menu">
      <div class="top" style="margin-left: 10px;">
        <el-icon><HomeFilled /></el-icon>
        <span style="margin: 0 10px;">/</span>
        <span>医院信息</span>
      </div>
      <el-menu 
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        router
      >
        <el-menu-item index="/hospital/register">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail">
          <el-icon><document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice">
          <el-icon><Bell /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close">
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search">
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 右侧内容区 -->
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {
  Document,
  Menu as IconMenu,
  InfoFilled,
  Search,
  Bell,
  HomeFilled
} from '@element-plus/icons-vue'
import {useRoute} from 'vue-router'
import useHospitalDetailStore from '@/store/hospitalDetail'
import { onMounted } from 'vue';

let $route = useRoute()
const hospitalDetailStore = useHospitalDetailStore()

onMounted(()=>{
  hospitalDetailStore.getHospitalDetail($route.query.hoscode as string)
})


</script>

<style scoped lang='scss'>
.hospital{
  display: flex;
  .menu{
    flex: 2;
    .top{
      color: #7f7f7f;
    }
  }
  .content{
    flex: 8;
  }
}
</style>