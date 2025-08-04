<template>
  <div>
    <el-card class="box-card">
      <!-- 卡片头部结构 -->
      <template #header>
        <div class="detail">挂号详情</div>
      </template>
      <!-- 卡片身体结构 -->
      <div class="top">
        <div class="left">
          <el-tag type="success">
            <el-icon><Select></Select></el-icon>
            <span style="margin-left: 5px;">{{ useOrder.orderInfo.param?.orderStatusString }}</span>
          </el-tag>
        </div>
        <div class="right">
          <div class="le">
            <img src="@/assets/images/marble_code.png" alt="">
          </div>
          <div class="rig">
            <p>
              微信
              <svg t="1752331934574" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4959" width="16" height="16">
                <path
                  d="M669.3 369.4c9.8 0 19.6 0 29.4 1.6C671 245.2 536.9 152 383.2 152 211.6 152 71 269.7 71 416.8c0 85 45.8 156.9 124.2 210.9l-31.1 93.2L273.6 667c39.2 8.2 70.3 16.3 109.5 16.3 9.8 0 19.6 0 31.1-1.6-6.5-21.3-9.8-42.5-9.8-65.4 0.1-135.7 116.2-246.9 264.9-246.9z m-168.4-85c24.5 0 39.2 16.3 39.2 39.2 0 22.9-16.3 39.2-39.2 39.2-24.5 0-47.4-16.4-47.4-39.2 0-24.5 24.6-39.2 47.4-39.2z m-216.3 73.1c-24.7 0-47.8-16.2-47.8-38.8 0-24.3 24.7-38.8 47.8-38.8s39.5 16.2 39.5 38.8c0.1 22.7-16.4 38.8-39.5 38.8z"
                  fill="#24DB5A" p-id="4960"></path>
                <path
                  d="M953.8 613c0-125.9-124.2-227.2-264.8-227.2-148.8 0-266.5 103-266.5 227.2 0 125.9 117.7 227.2 266.5 227.2 31.1 0 62.1-8.2 93.2-16.3l85 47.4-22.9-78.5c62.1-47.4 109.5-109.5 109.5-179.8z m-351.5-39.2c-14.7 0-31.1-14.7-31.1-31.1 0-14.7 16.3-31.1 31.1-31.1 22.9 0 39.2 16.3 39.2 31.1 0 16.4-14.7 31.1-39.2 31.1z m178-7.6c-14.8 0-31.3-14.6-31.3-30.7 0-14.6 16.5-30.7 31.3-30.7 23.1 0 39.5 16.2 39.5 30.7 0 16.2-16.4 30.7-39.5 30.7z"
                  fill="#24DB5A" p-id="4961"></path>
              </svg>
              关注“北京114预约挂号”
            </p>
            <p>“快速预约挂号”</p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <el-descriptions class="margin-top" :column="1" border>
            <el-descriptions-item label-align="center">
              <template #label>
                <div class="cell-item">
                  就诊人信息
                </div>
              </template>
              {{ useOrder.orderInfo?.patientName }}
            </el-descriptions-item>
            <el-descriptions-item label-align="center">
              <template #label>
                <div class="cell-item">
                  就诊日期
                </div>
              </template>
              {{ useOrder.orderInfo?.quitTime }}
            </el-descriptions-item>
            <el-descriptions-item label-align="center">
              <template #label>
                <div class="cell-item">
                  就诊医院
                </div>
              </template>
              {{ useOrder.orderInfo?.hosname }}
            </el-descriptions-item>
            <el-descriptions-item label-align="center">
              <template #label>
                <div class="cell-item">
                  就诊科室
                </div>
              </template>
              {{ useOrder.orderInfo?.depname }}
            </el-descriptions-item>
            <el-descriptions-item label-align="center">
              <template #label>
                <div class="cell-item">
                  医生职称
                </div>
              </template>
              {{ useOrder.orderInfo?.title }}
            </el-descriptions-item>
            <el-descriptions-item label-align="center">
              <template #label>
                <div class="cell-item">
                  服务费
                </div>
              </template>
              <span style="color:red;">{{ useOrder.orderInfo?.amount }} $</span>
            </el-descriptions-item>
            <el-descriptions-item label-align="center">
              <template #label>
                <div class="cell-item">
                  挂号订单
                </div>
              </template>
              {{ useOrder.orderInfo.outTradeNo }}
            </el-descriptions-item>
            <el-descriptions-item label-align="center">
              <template #label>
                <div class="cell-item">
                  挂号时间
                </div>
              </template>
              {{ useOrder.orderInfo.updateTime }}
            </el-descriptions-item>
          </el-descriptions>
          <div v-if="useOrder.orderInfo.orderStatus == 0 || useOrder.orderInfo.orderStatus == 1">
            <el-popconfirm title="确定要取消预约吗?" @confirm="cancel">
              <template #reference>
                <el-button>取消预约</el-button>
              </template>
            </el-popconfirm>
            <el-button type="primary" v-if="useOrder.orderInfo.orderStatus == 0" @click="dialogVisible=true">支付</el-button>
          </div>
        </div>
        <div class="right">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>注意事项</span>
              </div>
            </template>
          </el-card>
        </div>
      </div>
    </el-card>
    <!-- 支付二维码 -->
    <el-dialog v-model="dialogVisible" title="微信支付" width="600">
      <div class="pay">
        <img src="@/assets/images/marble_code.png" alt="">
        <p>请使用微信扫一扫</p>
        <p>扫描二维码支付 </p>
      </div>
      <template #footer>
          <el-button type="primary" @click="dialogVisible=false">关闭窗口</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import { Select } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import orderStore from '@/store/order'
import { reqCancelOrder } from '@/api/user';
import { ElMessage } from 'element-plus'

onMounted(()=>{
  useOrder.getOrderInfo(id)
})

let $route = useRoute()
let useOrder = orderStore()

let id:any = $route.query.hosCodeOrId  // 订单Id
let dialogVisible = ref(false)  // 控制支付对话框显示/隐藏

// 取消预约
const cancel = async ()=>{
  await reqCancelOrder(id)
  await useOrder.getOrderInfo(id)
  useOrder.orderInfo.orderStatus = -1
  useOrder.orderInfo.param.orderStatusString = '取消预约'
  open()
}

// 打开消息提示
const open = () => {
  ElMessage({
    message: '取消预约成功!',
    type: 'success',
  })
}


</script>

<style scoped lang='scss'>
.detail{
  font-size: 30px;
  color: #7f7f7f;
}
.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin: 10px 0;
  padding-bottom: 20px;
  .right{
    display: flex;
    .le{
      img{
        width: 30px;
        height: 30px;
      }
    }
    .rig{
      p:first-child{
        text-indent: 10px;
      }
    }
    
  }
}
.bottom{
  display: flex;
  justify-content: space-between;
  
  .left{
    flex: 4;
    margin: 10px;
    &:deep(.el-button){
      border: 1px solid #ccc;
      padding: 0 15px;
      margin: 15px 20px 0 0;
    }
  }
  .right{
    flex: 6;
    margin: 10px;
  }
}
.pay{
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  p{
    margin-top: 10px;
  }
}
</style>