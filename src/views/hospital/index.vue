<template>
  <HospitalUser :icon :pathList :itemName/>
</template>

<script setup lang='ts'>
import {
  Menu as IconMenu,
  Document,
  Bell,
  HomeFilled
} from '@element-plus/icons-vue'
import { markRaw } from 'vue';


let icon = markRaw({
  itemIcon1: IconMenu,
  itemIcon2: Document,
  itemIcon3: Bell,
  menuTitle: HomeFilled
})

let pathList = markRaw({
  route1: '/hospital/register',
  route2: '/hospital/detail',
  route3: '/hospital/notice',
})

let itemName = markRaw({
  title: '医院信息',
  name1: '医院详情',
  name2: '医院简介',
  name3: '挂号须知'
})


</script>

<style scoped lang='scss'>
</style>