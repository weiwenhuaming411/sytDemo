<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>实名信息</span>
      </div>
    </template>
    <div class="tip">
      <p><el-icon>
          <InfoFilled></InfoFilled>
        </el-icon>完成实名认证后才能添加就诊人，正常进行挂号</p>
    </div>
    <!-- 已经实名认证结构 -->
    <el-descriptions v-if="userInfo.authStatus==1" class="margin-top" :column="1" border label-width="100px">
      <el-descriptions-item label-align="center">
        <template #label>
          <div class="cell-item">
            用户姓名
          </div>
        </template>
        {{ userInfo.name }}
      </el-descriptions-item>
      <el-descriptions-item label-align="center">
        <template #label>
          <div class="cell-item">
            证件类型
          </div>
        </template>
        身份证
      </el-descriptions-item>
      <el-descriptions-item label-align="center">
        <template #label>
          <div class="cell-item">
            证件号码
          </div>
        </template>
        {{ userInfo.certificatesNo }}
      </el-descriptions-item>
    </el-descriptions>
    <!-- 未实名认证结构 -->
    <el-form v-model="params" :rules="rules" v-if="userInfo.authStatus==0" style="width: 50%; margin: 20px auto;" label-width="100px">
      <el-form-item label="用户姓名：" prop="name">
        <el-input placeholder="请输入用户姓名" v-model="params.name"/>
      </el-form-item>
      <el-form-item label="证件类型：" prop="certificatesType">
        <el-select style="width: 100%;" placeholder="请选择证件类型" v-model="params.certificatesType">
          <el-option label="身份证" value="身份证"></el-option>
          <el-option label="户口本" value="户口本"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="证件号码：" prop="certificatesNo">
        <el-input placeholder="请输入证件号码" v-model="params.certificatesNo"/>
      </el-form-item>
      <el-form-item label="上传证件：" prop="certificatesUrl">
        <el-upload 
        ref='upload'
        list-type="picture-card" 
        :limit="1" 
        action="/api/oss/file/fileUpload?fileHost=userAuah" 
        :on-success="successHandler" 
        :on-exceed="exceedHandler"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        >
          <el-icon><plus></plus></el-icon>
        </el-upload>
        <el-dialog v-model="dialogVisible" style="display: flex; justify-content: center;  background-color: transparent; width: 100%;">
          <img style="width: 100%; height: 100%;" w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 60px" @click="submit">提交</el-button>
        <el-button  style="width: 60px; border: 1px solid #ccc;" @click="reset">重写</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang='ts'>
import { InfoFilled, Plus } from '@element-plus/icons-vue';
import { ref,reactive, onMounted} from 'vue'
import { reqUserInfo } from '@/api/user';
import { ElMessage } from 'element-plus';

interface UserInfoData {
    authStatus: number;
    certificatesNo: string;
    certificatesType: string;
    certificatesUrl: string;
    createTime: string;
    id: number;
    isDeleted: number;
    name: string;
    nickName: string;
    openid: string;
    param: { [key: string]: any };
    phone: string;
    status: number;
    updateTime: string;
    [property: string]: any;
}

let userInfo = ref<any>({})  // 收集会员信息
// 上传图片
let upload = ref()

// 收集实名认证信息
let params = reactive({
  name: '',
  certificatesNo: '',
  certificatesType: '',
  certificatesUrl: '',
})

// 获取图片Url
let dialogImageUrl = ref('')
// 控制图片预览对话框
let dialogVisible = ref(false)

onMounted(async ()=>{
  let result: UserInfoData = await reqUserInfo()
  userInfo.value = result.data
})

// 自定义校验规则
const validatorName = (rule: any, value: any, callback: any)=>{
  const reg = /^1[0-9]{10}$/
  console.log(reg.test(value))
  if(reg.test(value)){
    callback()
  }else{
    callback(new Error('请输入正确名字'))
  }
}

// 表单校验规则
const rules = {
  name: [
    {
      required: true,
      validator: validatorName,
    }
  ],
  certificatesNo: [
    {required: true}
  ],
  certificatesType: [
    {required: true}
  ],
  certificatesUrl: [
    {required: true}
  ],
}

// 超出限制回调
const exceedHandler = ()=> {
  ElMessage({
    type: 'error',
    message: '只能上传1张图片'
  })
}

// 成功上传图片回调
const successHandler = (response: any, uploadFile: any, uploadFiles: any)=>{
  params.certificatesUrl = response.data
}

// 预览图片回调
const handlePictureCardPreview = (uploadFile: any) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}

// 删除图片回调
const handleRemove = (uploadFile: any, uploadFiles: any) => {
  params.certificatesUrl = ''
}

// 重置表单
const reset = ()=>{
  params.certificatesNo = ''
  params.certificatesType = ''
  params.certificatesUrl = ''
  params.name = ''
  upload.value.clearFiles()
}

// 提交实名信息
const submit = ()=>{
  // 提交认证信息后再次获取用户信息
}

</script>

<style scoped lang='scss'>
.tip{
  text-align: center;
}
.margin-top{
  margin-top: 20px;
}
</style>