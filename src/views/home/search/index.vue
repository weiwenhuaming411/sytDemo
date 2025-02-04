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
    <el-button class="button" type="primary" :icon="Search"></el-button>
  </div>
</template>

<script setup lang='ts'>
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { reqHospitalSearch } from '@/api/home';
import type { HospitalSearch_Ts } from '@/types/hospitalSearch';
import { useRouter } from 'vue-router';
let $router = useRouter()
let hospitalQuery = ref<string>('') 
const hospitalSearch = async (keyword: string, cb: any)=>{
  let result: HospitalSearch_Ts = await reqHospitalSearch(keyword)
  // 重新整理符合要求的数据
  let showData = result.data.map((item)=>{
    return {
      value: item.hosname,
      hoscode: item.hoscode
    }
  })
  // 展示数据回调
  cb(showData)
}

// 点击跳转推荐项
const goDetail = (item: any)=>{
  console.log('123', item)
  $router.push('/hospital')
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
        margin-right: 10px;
    }

    :deep(.button){
        width: 60px;
    }
}
</style>