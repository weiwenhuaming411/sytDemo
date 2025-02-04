<template>
  <div class="home">
    <!-- 首页轮播图 -->
    <Carousel></Carousel>
    <!-- 首页搜索框 -->
    <Search></Search>
    <!-- 展示医院结构 -->
    <el-row :gutter="20">
      <el-col class="left" :span="20">
        <h1>医院</h1>
        <!-- 医院类别 -->
        <!-- 医院等级 -->
        <Level @getHospitalLevel="getHospitalLevel"></Level>
        <!-- 医院地区 -->
        <Region @getHospitalRegion="getHospitalRegion"></Region>
        <div class="cardContent" v-if="hospitalList.length>0">
          <Card v-for="(item, index) in hospitalList" :key="index" :hospitalInfo="item"></Card>
        </div>
        <el-empty v-else description="description" />
        <!-- 分页器 -->
        <div class="pagintion">
          <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[5, 10, 15, 20]"
            layout=" prev, pager, next, jumper, sizes, total"
            :total="total"
            @current-change="currentChange"
            @size-change="sizeChange"
          />
        </div>
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
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
import Tips from './tips/index.vue'

import {ref, onMounted} from 'vue'
import {reqHospitalList} from '@/api/home'

import type {Content} from '@/types/hospitalList'
import type {HospitalList_Ts} from '@/types/hospitalList'

let pageNo = ref<number>(1)
let pageSize = ref<number>(10)
let hospitalList = ref<Content[]>([])
let total = ref<number>(0)
// 存储医院类别数据
let hospitalLevel = ref<string>('')
let hospitalRegion = ref<string>('')

onMounted(()=>{
  getHospitalList()
})

const getHospitalList = async ()=>{
  let result: object<HospitalList_Ts> = await reqHospitalList(pageNo.value, pageSize.value, hospitalLevel.value, hospitalRegion.value)
  hospitalList.value = result.data.content
  total.value = result.data.totalElements
}

// 获取医院等级组件数据
const getHospitalLevel = (value: string)=>{
  hospitalLevel.value = value
  getHospitalList()
}
// 获取医院地区组件数据
const getHospitalRegion = (value: string)=>{
  hospitalRegion.value = value
  getHospitalList()
}

// 分页器
const currentChange = ()=>{
  getHospitalList()
}
const sizeChange = ()=>{
  pageNo.value = 1
  getHospitalList()
}
</script>

<style scoped lang='scss'>
.left {
  color: #7f7f7f;
  
  h1 {
    font-size: 900;
    margin: 10px 0;
  }

  .cardContent {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around;
  }

    .pagintion {
      display: flex;
      justify-content: center;
      margin: 10px 0;
  }
}
</style>