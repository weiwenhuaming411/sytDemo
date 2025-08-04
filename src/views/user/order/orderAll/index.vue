<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>挂号订单</span>
      </div>
    </template>
    <!-- 下拉菜单 -->
    <el-form :inline="true" label-width="100px">
      <el-form-item label="就诊人">
        <el-select v-model="patientId" placeholder="请选择就诊人" style="width: 200px;" @change="getOrderList">
          <el-option label="全部就诊人" value=""></el-option>
          <el-option v-for="item in patientAll" :key="item" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单状态">
        <el-select v-model="orderStatus" placeholder="选择所有订单状态" style="width: 200px;" @change="getOrderList">
          <el-option label="全部订单状态" value=""></el-option>
          <el-option v-for="item in statusAll" :key="item" :label="item.comment" :value="item.status"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <!-- 表格展示订单 -->
    <el-table :data="tableData" stripe style="width: 100%; margin: 15px 0;">
      <el-table-column prop="reserveDate" label="就诊时间"/>
      <el-table-column prop="hosname" label="医院"/>
      <el-table-column prop="depname" label="科室" />
      <el-table-column prop="title" label="医师"/>
      <el-table-column prop="amount" label="费用"/>
      <el-table-column prop="patientName" label="就诊人" />
      <el-table-column prop="param.orderStatusString" label="订单状态"/>
      <el-table-column label="操作">
          <template #="{row}">
            <el-link @click="goDetail(row)" style="color: skyblue;">详情</el-link>
          </template>
      </el-table-column>
    </el-table>
    <pagintion :pagintion="pagintionOptions"></pagintion>
  </el-card>
</template>

<script setup lang='ts'>
import { ref, onMounted, reactive, shallowRef } from 'vue';
import { reqOrderList, reqPatientAll, reqStatusAll } from '@/api/user';
import { useRouter } from 'vue-router';

interface Pagintion_Ts {
  pageNo: number,
  pageSize: number,
  pageSizes: Array<number>,
  total: number,
  currentChange: Function,
  sizeChange: Function
}

let $router = useRouter()

let tableData = ref([])  // 所有订单列表
let patientAll = ref([])  // 所有就诊人数据
let statusAll = ref([])  // 所有订单状态

let patientId = ref('')  // 就诊人ID
let orderStatus = ref('')  // 订单状态

let pagintionOptions: Pagintion_Ts = reactive({
  pageNo: 1,
  pageSize: 10,
  pageSizes: [5, 10, 15, 20],
  total: 0,
  currentChange: ()=>{
    getOrderList()
  },
  sizeChange: ()=>{
    getOrderList()
  }
})

onMounted(()=>{
  getOrderList()
  getPatientAll()
  getStatusAll()
})

// 获取所有订单数据
const getOrderList = async ()=>{
  let result = await reqOrderList(pagintionOptions.pageNo, pagintionOptions.pageSize, patientId.value, orderStatus.value)
  tableData.value = result.data.records
  pagintionOptions.total = result.data.total
}

// 获取所有就诊人数据
const getPatientAll = async ()=>{
  let result = await reqPatientAll()
  patientAll.value = result.data
}

// 获取所有订单状态数据
const getStatusAll = async ()=>{
  let result = await reqStatusAll()
  statusAll.value = result.data
}

// 跳转订单详情页
const goDetail = (row:any)=>{
  $router.push({path: '/user/order', query: {hosCodeOrId: row.id}})
}
</script>

<style scoped lang='scss'>

</style>