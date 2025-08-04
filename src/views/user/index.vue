<template>
  <div>
    <HospitalUser :icon :pathList :itemName/>
  </div>
</template>

<script setup lang='ts'>
import { markRaw } from 'vue'
import {
  Avatar,
  Memo,
  PieChart,
  HomeFilled
} from '@element-plus/icons-vue'

let icon = markRaw({
  itemIcon1: Avatar,
  itemIcon2: Memo,
  itemIcon3: PieChart,
  menuTitle: HomeFilled
})

let pathList = markRaw({
  route1: '/user/certification',
  route2: '/user/order',
  route3: '/user/patient'
})

let itemName = markRaw({
  title: '会员中心',
  name1: '实名认证',
  name2: '挂号订单',
  name3: '就诊人管理'
})

</script>

<style scoped lang='scss'>
</style>