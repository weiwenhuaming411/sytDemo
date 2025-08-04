<template>
    <div class="register-step2">
        <div class="title">确认挂号信息</div>
        <!-- 展示就诊人信息 -->
        <el-card class="el-card">
            <template #header>
                <div class="card-header">
                    <span style="font-weight: 700;">请选择就诊人</span>
                    <el-button type="primary" :icon="User">添加就诊人</el-button>
                </div>
            </template>
            <div class="card-content">
                <div class="card-item" :class="{active: index === isItem}" v-for="(item,index) in hospitalDetail.patientList" :key="item">
                    <div class="item-header">
                        <div class="header-left">
                            <span>{{ item.isInsure==1? '医保' : '自费' }}</span>
                            <span>{{ item.name }}</span>
                        </div>
                        <div class="header-right">
                            <el-button type="success" :icon="Check" v-if="isItem==index"></el-button>
                            <el-button type="primary" :icon="Edit" v-else @click="console.log('编辑就诊人信息')"></el-button>
                        </div>
                    </div>
                    <div class="item-bottom" @click="patientCheck(item, index)">
                        <p>证件类型：{{ item.param.certificatesTypeString }}</p>
                        <p>证件号码：{{ item.certificatesNo }}</p>
                        <p>用户性别：{{ item.sex === 0? '男' : '女' }}</p>
                        <p>出生日期：{{ item.birthdate }}</p>
                        <p>手机号码：{{ item.phone }}</p>
                        <p>婚姻状况：保密</p>
                        <p>当前住址：{{ item.address }}</p>
                        <p>详细住址：{{ item.param.fullAddress }}</p>
                    </div>
                </div>
            </div>
        </el-card>
        <!-- 展示医生信息 -->
        <el-card class="el-card">
            <template #header>
                <div class="card-header">
                    <span style="font-weight: 700;">挂号信息</span>
                </div>
            </template>
            <div class="doctorInfo">
                <el-descriptions class="margin-top" :column="2" border>
                    <el-descriptions-item label-align="center">
                        <template #label>
                            <div class="cell-item">
                                就诊日期：
                            </div>
                        </template>
                        2025-07-10 周四 上午
                    </el-descriptions-item>
                    <el-descriptions-item  label-align="center">
                        <template #label>
                            <div class="cell-item">
                                就诊医院：
                            </div>
                        </template>
                        北京人民医院
                    </el-descriptions-item>
                    <el-descriptions-item label-align="center">
                        <template #label>
                            <div class="cell-item">
                                就诊科室：
                            </div>
                        </template>
                        多发性硬化专科门诊
                    </el-descriptions-item>
                    <el-descriptions-item label-align="center">
                        <template #label>
                            <div class="cell-item">
                                医生姓名：
                            </div>
                        </template>
                        某某某
                    </el-descriptions-item>
                    <el-descriptions-item label-align="center">
                        <template #label>
                            <div class="cell-item">
                                医生职称：
                            </div>
                        </template>
                        副主任医师
                    </el-descriptions-item>
                    <el-descriptions-item label-align="center">
                        <template #label >
                            <div class="cell-item">
                                医生专长：
                            </div>
                        </template>
                        内分泌与代谢性疾病
                    </el-descriptions-item>
                    <el-descriptions-item label-align="center">
                        <template #label>
                            <div class="cell-item">
                                医师服务费：
                            </div>
                        </template>
                        <span style="color:red">100 $</span>
                    </el-descriptions-item>
                </el-descriptions>
            </div>
        </el-card>
        <div class="btn">
            <el-button type="primary" width="100px" @click="goStep3">确认挂号</el-button>
            <el-button type="danger" width="100px" @click="goStep1">返回修改</el-button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
import { User, Edit, Check } from '@element-plus/icons-vue';
import hospitalDetailStore from '@/store/hospitalDetail'
import { useRouter } from 'vue-router';

let $router = useRouter(); // 获取路由实例
let hospitalDetail = hospitalDetailStore(); // 获取医院详情的store

onMounted(async () => {
    // 这里可以添加获取就诊人信息的逻辑
    await hospitalDetail.getPatientList()
    patientInfo = hospitalDetail.patientList[0] // 默认选中第一个就诊人
});

let isItem = ref<number>(0); // 用于标记选中的就诊人
let patientInfo = reactive<object>({})

// 确认就诊人
const patientCheck = (item: object, index: number) => {
    // 这里可以添加逻辑，比如跳转到就诊人详情页
    isItem.value = index; // 更新选中的就诊人索引
    patientInfo = item; // 更新就诊人信息
};

// 跳转到第三步
const goStep3 = () => {
    // let hosCode = '1000_0'
    // let patientId = patientInfo.id; // 假设就诊人ID
    // let scheduleId = '6225753136a9ba1be763dc18'; // 假设排班医生ID
    $router.push({ path: '/user/order', query: {hosCodeOrId: '412'} }) // 假设需要传递就诊人ID;
};
// 返回到第一步
const goStep1 = () => {
    $router.push({ path: '/hospital/register_step1' });
}
</script>

<style scoped lang='scss'>
.register-step2 {
  .title {
    font-size: 20px;
    color: #333;
    font-weight: 900;
    margin-left: 25px;
  }
  .el-card{
    margin: 25px 25px;
    .card-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        :deep(.el-button){
            width: 100px;
        }
    }
    .card-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 10px;
        .card-item {
            width:30%;
            border: 1px solid #e5e5e5;
            margin: 14px;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
            transition: transform 0.5s ease;
            &:hover {
                box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
                border-color: rgb(0, 255, 42);
                transform: scale(1.02);
            }
            .item-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px;
                background: #e5e5e5;
                .header-left {
                    display: flex;
                    align-items: center;
                    span:first-child {
                        margin-right: 10px;
                        background: white;
                        padding: 5px;
                        border-radius: 5px;
                    }
                }
                .header-right {
                    :deep(.el-button) {
                        width: 40px;
                        height: 40px;
                        border-radius: 50px;
                    }
                }
            }
            .item-bottom {
                margin: 10px 10px;
                p {
                    height: 36px;
                    line-height: 36px;
                    color: #666;
                    overflow: hidden;
                }
            }
        }
        .active {
            border-color: rgb(0, 255, 42);
        }
    }
  }
  .btn{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    :deep(.el-button) {
      width: 100px;
      margin: 0 10px;
    }
  }
}
</style>