<template>
  <div class="home-container">
    <!-- 首页轮播图 -->
    <Carousel></Carousel>
    <!-- 首页搜索框 -->
    <Search></Search>
    <!-- 展示医院结构 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <h1>医院</h1>
        <!-- 医院等级 -->
        <LevelAddRegion title="等级" type="HosType" @getLevelOrRegion="getLevelOrRegion"></LevelAddRegion>
        <!-- 医院地区 -->
        <LevelAddRegion title="地区" type="Beijin" @getLevelOrRegion="getLevelOrRegion"></LevelAddRegion>
        <div class="card-content" v-if="hospitalList.length>0">
          <Card v-for="(item, index) in hospitalList" :key="index" :hospitalInfo="item"></Card>
        </div>
        <el-empty v-else description="description" />
        <!-- 分页器 -->
        <Pagintion :pagintion="pagintionOptions"></Pagintion>
      </el-col>
      <el-col :span="4">
        <Tips></Tips>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import LevelAddRegion from './levelAddRegion/index.vue'
import Card from './card/index.vue'
import Pagintion from '@/components/pagintion/index.vue'
import Tips from './tips/index.vue'

import {ref, reactive, onMounted} from 'vue'
import { reqHospitalList } from '@/api/home'

import type {HospitalList_Ts} from '@/types/home/hospitalList'
import type {Content} from '@/types/home/hospitalList'

interface Pagintion_Ts {
  pageNo: number,
  pageSize: number,
  pageSizes: Array<number>,
  total: number,
  currentChange: Function,
  sizeChange: Function
}

// 分页器配置
let pagintionOptions: Pagintion_Ts = reactive({
  pageNo: 1,
  pageSize: 10,
  pageSizes: [5, 10, 15, 20],
  total: 100,
  currentChange: ()=>{
    getHospitalList()
  },
  sizeChange: ()=>{
    getHospitalList()
  }
})

let hospitalList = ref<Content[]>([])  // 医院列表
let hospitalLevel = ref<string>('')  // 医院等级
let hospitalRegion = ref<string>('')  // 医院地区

onMounted(()=>{
  getHospitalList()
})

// 获取医院列表
const getHospitalList = async ()=>{
  let result: HospitalList_Ts = await reqHospitalList(pagintionOptions.pageNo, pagintionOptions.pageSize, hospitalLevel.value, hospitalRegion.value)
  hospitalList.value = result.data.content
  pagintionOptions.total = result.data.totalElements
}

// 获取医院等级或地区回调
const getLevelOrRegion = (data: {value: string, title: string})=>{
  if( data.title == '等级'){
    hospitalLevel.value = data.value
    getHospitalList()
  }else{
    hospitalRegion.value = data.value
    getHospitalList()
  }
}
</script>

<style scoped lang='scss'>
.home-container{
  width: 1200px;
  margin-top: 70px;
  margin-bottom: 50px;

  .card-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around;
  }

}
</style>