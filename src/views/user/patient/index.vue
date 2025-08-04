<template>
  <!-- 展示就诊人信息 -->
  <el-card class="el-card">
    <template #header>
      <div class="card-header">
        <span style="font-weight: 700;">就诊人管理</span>
        <el-button type="primary" :icon="User" @click="addPatient">{{ status? '添加就诊人':'取消编辑'}}</el-button>
      </div>
    </template>
    <!-- 展示就诊人 -->
    <div class="card-content" v-if="status">
      <div class="card-item" v-for="(item) in hospitalDetail.patientList" :key="item">
        <div class="item-header">
          <div class="header-left">
            <span>{{ item.isInsure == 0 ? '自费' : '医保' }}</span>
            <span>{{ item.name }}</span>
          </div>
          <div class="header-right">
            <el-button type="primary" :icon="Edit" @click="patientChange(item)"></el-button>
            <el-popconfirm title="确定要删除吗?" @confirm="deletePaient(item)">
              <template #reference>
                <el-button type="danger" :icon="Delete"></el-button>
              </template>
            </el-popconfirm>
          </div>
        </div>
        <div class="item-bottom">
          <p>证件类型：{{ item.param.certificatesTypeString }}</p>
          <p>证件号码：{{ item.certificatesNo }}</p>
          <p>用户性别：{{ item.sex === 0 ? '男' : '女' }}</p>
          <p>出生日期：{{ item.birthdate }}</p>
          <p>手机号码：{{ item.phone }}</p>
          <p>婚姻状况：{{ item.isMarry === 1? '未婚' : '已婚' }}</p>
          <p>当前住址：{{ item.address }}</p>
          <p>详细住址：{{ item.param.fullAddress }}</p>
        </div>
      </div>
    </div>
    <!-- 编辑/添加就诊人 -->
    <div class="cardChange" v-else>
      <el-divider content-position="left">就诊人信息</el-divider>
      <el-form :model="patientInfo" :rules="rules" label-width="250px" style="max-width: 700px">
        <el-form-item label="用户姓名" prop="name">
          <el-input v-model="patientInfo.name" placeholder="请输入用户姓名"></el-input>
        </el-form-item>
        <el-form-item label="证件类型" prop="certificatesType">
          <el-select v-model="patientInfo.certificatesType">
            <el-option label="身份证" value="10"></el-option>
            <el-option label="户口本" value="20"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码" prop="certificatesNo">
          <el-input v-model="patientInfo.certificatesNo" placeholder="请输入证件号码"></el-input>
        </el-form-item>
        <el-form-item label="用户性别" prop="sex">
          <el-radio-group v-model="patientInfo.sex">
            <el-radio :value="0">男</el-radio>
            <el-radio :value="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthdate">
          <el-date-picker v-model="patientInfo.birthdate" value-format="YYYY-MM-DD" type="date" placeholder="出生日期" style="width: 100%"/>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="patientInfo.phone" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-divider content-position="left">建档信息（完善后部分医院首次就诊不排队建档）</el-divider>
        <el-form-item label="婚姻状况" prop="isMarry">
          <el-radio-group v-model="patientInfo.isMarry">
            <el-radio :value="1">未婚</el-radio>
            <el-radio :value="0">已婚</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="自费/医保" prop="isInsure">
          <el-radio-group v-model="patientInfo.isInsure">
            <el-radio :value="0">自费</el-radio>
            <el-radio :value="1">医保</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="当前住址" prop="addressSelected">
          <el-cascader :props="props" v-model="patientInfo.addressSelected"></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="patientInfo.address" placeholder="请输入地址"></el-input>
        </el-form-item>
        <el-divider content-position="left">联系人信息（选填）</el-divider>
        <el-form-item label="联系人姓名">
          <el-input v-model="patientInfo.contactsName" placeholder="请输入联系人姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系人号码">
          <el-input v-model="patientInfo.contactsPhone" placeholder="请输入联系人号码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 80px;" @click="submit">提交</el-button>
          <el-button style="border: 1px solid #ccc; width: 80px;" @click="reset">重写</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script setup lang='ts'>
import { User, Edit, Delete} from '@element-plus/icons-vue';
import hospitalDetailStore from '@/store/hospitalDetail'
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { reqParntList, reqAddOrUpdateUser, reqRemovePatient } from '@/api/user';

let hospitalDetail = hospitalDetailStore(); // 获取医院详情的store

let status = ref(true)  // 切换编辑/添加状态
// 收集就诊人信息
let patientInfo = reactive({
  name: '',
  certificatesType: '',
  certificatesNo: '',
  sex: 0,
  birthdate: '',
  phone: '',
  isMarry: 1,
  isInsure: 0,
  addressSelected: [],
  address: '',
  contactsName: '',
  contactsCertificatesType: '',
  contactsCertificatesNo: '',
  contactsPhone:''
})

onMounted(async () => {
    // 这里可以添加获取就诊人信息的逻辑
    await hospitalDetail.getPatientList()
});

// 表单校验规则
const rules = reactive({
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
  ],
  certificatesType: [{ required: true, message: '请选择证件类型', trigger: 'change' }],
  certificatesNo: [{ required: true, message: '请输入证件号码', trigger: 'blur' }],
  sex: [{ required: true, message: 'Please select sex.', trigger: 'change' }],
  birthdate: [{ required: true, message: 'Please select brithdate.', trigger: 'change' }],
  phone: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
  isMarry: [{ required: true, message: 'Please select isMarry.', trigger: 'change' }],
  isInsure: [{ required: true, message: 'Please select isInsure.', trigger: 'change' }],
  addressSelected: [{ required: true, message: '请输入地址', trigger: 'blur' }],
  address: [{ required: true, message: '请输入详细地址', trigger: 'blur' }],
})

// 获取地区地址
const props = {
  lazy: true,  // 开启懒加载
  async lazyLoad(node: any, resolve: any) {
    let result = await reqParntList(node.data.id || '86')  // 请求数据
    // 整理数据
    let showData = result.data.map((item: any)=>{
      return {
        id: item.id,
        label: item.name,
        value: item.value,
        leaf: item.hasChildren
      }
    })
    // 注入组件
    resolve(showData)
  },
}

// 添加就诊人
const addPatient = ()=>{
  status.value = !status.value
  reset()
}

// 编辑就诊人
const patientChange = (item: any)=>{
  reset()
  status.value = false
  patientInfo = item
}

// 删除就诊人
const deletePaient = async (item: any)=>{
  await reqRemovePatient(item.id)
  ElMessage({
    message: '删除成功！',
    type: 'success',
  })
  await hospitalDetail.getPatientList()
}

// 提交就诊人信息
const submit = async ()=>{
    await reqAddOrUpdateUser(patientInfo)  // 添加/编辑就诊人信息
    reset()
    ElMessage({
      message: patientInfo.id? '编辑成功！' : '添加成功！',
      type: 'success',
    })
    status.value = true
    await hospitalDetail.getPatientList()  // 再次获取全部就诊人信息
}

// 重置就诊人信息
const reset = ()=>{
  Object.assign(patientInfo,{
    id: null,
    name: '',
    certificatesType: '',
    certificatesNo: '',
    sex: 0,
    birthdate: '',
    phone: '',
    isMarry: 1,
    isInsure: 0,
    addressSelected: [],
    address: '',
    contactsName: '',
    contactsCertificatesType: '',
    contactsCertificatesNo: '',
    contactsPhone: ''
  })
}


</script>

<style scoped lang='scss'>
    .el-card {
      margin: 25px 25px;
  
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
  
        :deep(.el-button) {
          width: 100px;
        }
      }
  
      .card-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 10px;
  
        .card-item {
          width: 30%;
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
      }
    }
</style>