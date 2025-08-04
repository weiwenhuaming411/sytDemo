<template>
  <div class="search">
    <el-autocomplete
        class="input"
        clearable
        placeholder="请输入名称..."
        v-model="hospitalQuery"
        :fetch-suggestions="hospitalSearch"
        :trigger-on-focus= false
        @select="goDetail"
    />
    <el-button class="button" :icon="Search" type="primary"></el-button>
  </div>
</template>

<script setup lang='ts'>
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { reqHospitalSearch } from '@/api/home';
import type { HospitalSearch_Ts } from '@/types/home/hospitalSearch';
import { useRouter, type Router } from 'vue-router';

let $router: Router = useRouter()

let hospitalQuery = ref<string>('')  // 收集用户输入

// 搜索
const hospitalSearch = async (keyword: string, callback: Function)=>{
  let result: HospitalSearch_Ts = await reqHospitalSearch(keyword)
  // 重新整理符合要求的数据
  let showData = result.data.map((item)=>{
    return {
      value: item.hosname,
      hoscode: item.hoscode
    }
  })
  // 展示数据回调
  callback(showData)
}

// 点击跳转推荐项
const goDetail = (item: {value: string, hoscode: string})=>{
  $router.push({path: '/hospital', query:{hoscode:item.hoscode}})
}
</script>

<style scoped lang='scss'>
.search {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    :deep(.input){
      width: 600px;
    }

    :deep(.button){
      width: 80px;
      background-color: #55a6fe;
    }
}
</style>