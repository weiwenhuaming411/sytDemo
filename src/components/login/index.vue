<template>
  <div class="login-container">
    <el-dialog v-model="userStore.visible" title="用户登录" width="800" @close="close">
        <!-- 对话框结构 -->
        <el-row>
            <!-- 左侧 -->
            <el-col :span="12">
                <div class="login-form" style="">
                    <div v-show="isPhoneLogin">
                        <el-form ref="form" :model="loginParams" :rules="rules">
                            <el-form-item prop="phone">
                                <el-input :prefix-icon="User" placeholder="请输入手机号码" v-model="loginParams.phone"></el-input>           
                            </el-form-item>
                            <el-form-item prop="code">
                                <el-input :prefix-icon="Lock" placeholder="请输入验证码" v-model="loginParams.code"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="getPhoneCode" :disabled="!isPhone || flag" style="width: 50%;">
                                  <span v-show="!flag">获取验证码</span>
                                  <span v-show="flag">获取验证码({{ time }}s)</span>
                                </el-button>
                            </el-form-item>
                        </el-form>
                        <div class="bottom">
                            <el-button type="primary" style="width: 100%" :disabled="!isPhone || loginParams.code.length!==6" @click="login">用户登录</el-button>
                            <p @click="changeLogin">微信扫码登录</p>
                            <svg @click="changeLogin" t="1751481540615" class="icon" viewBox="0 0 1257 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6037" width="16" height="16"><path d="M444.988194 0.014057C200.388776 0.014057 0 166.763385 0 378.482456c0 122.215364 66.674428 222.529241 178.023392 300.252814l-44.505848 133.897095 155.54555-78.032837c55.681511 11.049146 100.327934 22.351326 155.86887 22.351326 13.959036 0 27.819669-0.688814 41.539729-1.771237a332.486519 332.486519 0 0 1-13.706002-93.257043c0-194.301905 166.960189-352.06853 378.341881-352.06853a387.985284 387.985284 0 0 1 42.861128 2.628741C855.451321 133.222338 663.792213 0.014057 444.988194 0.014057zM300.435561 300.449618c-33.344242 0-66.997749-22.351326-66.997749-55.709626s33.653506-55.512822 66.997749-55.512822 55.569052 22.042062 55.569052 55.512822-22.238867 55.709626-55.569052 55.709626z m311.428477 0c-33.3583 0-66.829059-22.351326-66.829059-55.709626s33.470759-55.512822 66.899346-55.512822 55.695569 22.042062 55.695569 55.512822-22.266981 55.709626-55.695569 55.709626z m0 0" fill="#00C250" p-id="6038"></path><path d="M1257.255066 656.608863c0-177.798473-178.023392-322.815002-377.976388-322.815002-211.719071 0-378.398111 145.016528-378.398111 322.815002 0 178.178024 166.749327 322.885289 378.468398 322.885289 44.323101 0 88.983581-11.147548 133.545659-22.323211l121.976388 66.829059-33.470759-111.208391c89.306902-66.969634 155.86887-155.826698 155.86887-256.182746z m-500.69782-55.611224c-22.168579 0-44.519906-21.99989-44.519906-44.477733 0-22.210752 22.351326-44.54802 44.519906-44.548021 33.737851 0 55.695569 22.337269 55.695568 44.548021 0 22.4919-22.028005 44.477733-55.695568 44.477733z m244.782164 0c-22.013948 0-44.210642-21.99989-44.210642-44.477733 0-22.210752 22.196694-44.54802 44.210642-44.548021 33.330185 0 55.695569 22.337269 55.695569 44.548021 0 22.4919-22.365384 44.477733-55.695569 44.477733z m0 0" fill="#00C250" p-id="6039"></path></svg>
                        </div>
                    </div>
                    <div v-show="!isPhoneLogin">
                        <div class="wechat-login">
                            <div id="login_container"></div>
                            <p @click="changeLogin">手机短信验证码登录</p>
                            <svg @click="changeLogin" t="1751483250826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7190" width="16" height="16"><path d="M842 0H182c-11 0-20 9-20 20v984c0 11 9 20 20 20h660c11 0 20-9 20-20V20c0-11-9-20-20-20z m-28 956c0 11-9 20-20 20H230c-11 0-20-9-20-20V68c0-11 9-20 20-20h564c11 0 20 9 20 20v888z" fill="" p-id="7191"></path><path d="M812 819H208c-11 0-20-9-20-20v-8c0-11 9-20 20-20h604c11 0 20 9 20 20v8c0 11-9 20-20 20zM592 126H432c-11 0-20-9-20-20v-8c0-11 9-20 20-20h160c11 0 20 9 20 20v8c0 11-9 20-20 20z" fill="" p-id="7192"></path><path d="M512 897m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="" p-id="7193"></path></svg>
                        </div>
                    </div>
                </div>
            </el-col>
            <!-- 右侧 -->
            <el-col :span="12">
                <div class="right">
                    <div class="top">
                        <div>
                            <img src="@/assets/images/QR_code.png" alt="">
                            <svg t="1751483216180" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6190" width="16" height="16"><path d="M1022 618.5C1022 481 897.7 368 739 355.6 713.1 206.1 559.1 91.3 372.8 91.3c-204.3 0-370 138.3-370 309 0 94.2 50.4 178.5 129.9 235.1-8.9 58.4-18.4 120.4-19.2 125.7-1.5 10.2 9.2 19.3 22.7 14 9.9-3.9 148.1-70.1 148.1-70.1s70.3 4.2 88.5 4.2c14.6 0 29-0.7 43.2-2.1 43.1 102.3 158.4 175.4 294 175.4 20.9 0 81.1-6.1 81.1-6.1s73.6 39.4 91.6 46.8c45.2 18.6 54.6 6.4 47.9-35.7-2-13.5-5.8-41.1-10.2-74 62.4-48.3 101.6-117.7 101.6-195zM717.5 354.6c-2.5-0.1-5-0.1-7.5-0.1-2.2 0-4.4 0-6.7 0.1 2.2 0 4.4-0.1 6.7-0.1 2.5 0 5 0.1 7.5 0.1z m14.3 0.6h-0.2 0.2z m-7.1-0.4c-0.6 0-1.1 0-1.7-0.1 0.6 0.1 1.2 0.1 1.7 0.1zM287.3 667.6l-133.3 62 17.9-111.5S60.4 529.5 50.8 404.7C50.8 256.3 195 136 372.8 136c157.6 0 288.6 94.4 316.5 219.1-162.7 9-291.3 123.5-291.3 263.4 0 18.3 2.2 36.3 6.4 53.6-10.4 0.8-20.9 1.3-31.6 1.3-15.8 0-85.5-5.8-85.5-5.8z m413-312.9c-0.9 0-1.8 0.1-2.7 0.1 1-0.1 1.8-0.1 2.7-0.1zM410.7 693.4c0.2 0.5 0.3 1 0.5 1.5-0.1-0.5-0.3-1-0.5-1.5z m-6.3-21.3c0.4 1.7 0.9 3.4 1.3 5.2-0.4-1.8-0.9-3.5-1.3-5.2z m2 7.5c0.3 1 0.6 2.1 0.9 3.1-0.3-1-0.6-2-0.9-3.1z m1.7 5.8c0.3 1.1 0.7 2.1 1 3.2-0.4-1.1-0.7-2.2-1-3.2z m479.8 101.8l9.7 104.4-106.9-50.3s-63 4.3-80.7 4.3c-145.8 0-264-99.9-264-223.2s118.2-223.2 264-223.2 264 99.9 264 223.2c0 65.2-86.1 164.8-86.1 164.8z" fill="" p-id="6191"></path><path d="M209 303.3a47.7 41.3 0 1 0 95.4 0 47.7 41.3 0 1 0-95.4 0Z" fill="" p-id="6192"></path><path d="M452 303.3a47.7 41.3 0 1 0 95.4 0 47.7 41.3 0 1 0-95.4 0Z" fill="" p-id="6193"></path><path d="M576.2 546.3a39 33.8 0 1 0 78 0 39 33.8 0 1 0-78 0Z" fill="" p-id="6194"></path><path d="M774.8 546.3a39 33.8 0 1 0 78 0 39 33.8 0 1 0-78 0Z" fill="" p-id="6195"></path></svg>
                            <p>微信扫一扫关注</p>
                            <p>“快速预约挂号”</p>
                        </div>
                        <div>
                            <img src="@/assets/images/marble_code.png" alt="">
                            <svg t="1751483250826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7190" width="16" height="16"><path d="M842 0H182c-11 0-20 9-20 20v984c0 11 9 20 20 20h660c11 0 20-9 20-20V20c0-11-9-20-20-20z m-28 956c0 11-9 20-20 20H230c-11 0-20-9-20-20V68c0-11 9-20 20-20h564c11 0 20 9 20 20v888z" fill="" p-id="7191"></path><path d="M812 819H208c-11 0-20-9-20-20v-8c0-11 9-20 20-20h604c11 0 20 9 20 20v8c0 11-9 20-20 20zM592 126H432c-11 0-20-9-20-20v-8c0-11 9-20 20-20h160c11 0 20 9 20 20v8c0 11-9 20-20 20z" fill="" p-id="7192"></path><path d="M512 897m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="" p-id="7193"></path></svg>
                            <p>扫一扫下载</p>
                            <p>“预约挂号”APP</p>
                        </div>
                    </div>
                    <div class="bottom">
                        <p>xxxx官方指定平台</p>
                        <p>快速挂号 安全放心</p>
                    </div>
                </div>
            </el-col>
        </el-row>
        <template #footer>
            <el-button @click="close" type="primary">关闭窗口</el-button>
        </template>
  </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import {ref,reactive, computed} from 'vue'
import {User, Lock, Phone} from '@element-plus/icons-vue'
// 获取user仓库的数据
import useUserStore from '@/store/user'
// 获取微信二维码登录需要的参数
import { reqWxLogin } from '@/api/login'
import {getToken} from '@/utils/token'
import { useRouter, useRoute } from 'vue-router'

let userStore = useUserStore()
let $router = useRouter()
let $route = useRoute()

// 获取表单
const form = ref<any>(null)

// 控制手机号码登录or微信登录
let isPhoneLogin = ref(true)
const changeLogin = async () => {
    isPhoneLogin.value = !isPhoneLogin.value

    if(!isPhoneLogin.value){
      let redirect_URL = encodeURIComponent(window.location.origin + '/wxlogin') // 微信登录回调地址
      let result = await reqWxLogin(redirect_URL)
      // @ts-ignore  关闭ts警告
      new WxLogin({
        self_redirect: true,  // 是否自定义跳转
        id: "login_container",  // 容器id
        appid: result.data.appid,  // 微信公众号的appid
        scope: "snsapi_login",  // 授权作用域
        redirect_uri: result.data.redirectUri,  // 授权后跳转的地址
        state: result.data.state,  // 自定义参数
        style: "black",  // 按钮样式
        href: ""  // 微信登录二维码的地址
      });

      let timer = setInterval(()=>{
        console.log('扫码了没有啊?')
        if(getToken('userInfo')){ // 如果本地存储有token
          userStore.visible = false // 关闭登录弹窗
          userStore.userInfo = JSON.parse(getToken('userInfo') as string) // 获取用户信息
          clearInterval(timer) // 清除定时器
        }
      }, 1000)
    }
    
}

// 收集手机号码和验证码
let loginParams = reactive({
    phone: '',
    code: ''
})
let isPhone = computed(() => {
    const regPhone = /^1[0-9]{10}$/
    return regPhone.test(loginParams.phone)
})

// 定义定时器
let flag = ref(false)  // 是否可以获取验证码  flase可以/ true不可
let time = ref(5)  // 倒计时5秒

// 获取手机验证码
const getPhoneCode = async () => {
    flag.value = true

    let play = setInterval(()=>{
      time.value--
      if (time.value <= 0) {
        flag.value = false
        time.value = 5
        clearInterval(play)
      }
    }, 1000)
    try {
      await userStore.getPhoneCOde(loginParams.phone)
      loginParams.code = userStore.phoneCode // 假设store中有phoneCode
    } catch (error) {
      console.error('获取验证码失败:', error)
    }
}

// 用户登录
const login = async () => {
  await form.value.validate() // 验证表单
    try {
        await userStore.userLogin(loginParams)
        userStore.visible = false // 登录成功后关闭弹窗
        userStore.phoneCode = '' // 清空验证码
        let redirect: any = $route.query.redirect
        if(redirect){
          $router.push(redirect)
        }else{
          $router.push('/home')
        }
    } catch (error) {
        console.error('登录失败:', error)
        // 可以在这里添加错误提示逻辑
    }
}

// 定义表单验证规则
const rules = reactive({
  phone: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    { pattern: /^1[0-9]{10}$/, message: '请输入正确的手机号码', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^[0-9]{6}$/, message: '验证码必须为6位数字', trigger: 'blur' }
  ]
})

// 关闭弹窗回调
const close = () => {
    userStore.visible = false
    form.value.resetFields() // 重置表单
    isPhoneLogin.value = true
    flag.value = false
    time.value = 5
}
</script>

<style scoped lang='scss'>
.login-container {
  ::v-deep(.el-dialog__body){
    border-top: 1px solid #dcdfe6;
    border-bottom: 1px solid #dcdfe6;
    padding: 25px 0;
    .login-form {
        border: 1px solid #dcdfe6;
      padding: 50px;
      .el-form-item {
        margin-bottom: 20px;
      }
      .bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          margin-top: 10px;
          color: #dcdfe6;
          cursor: pointer;
          &:hover {
            color: red;
          }
        }
        .icon {
          margin-top: 10px;
          width: 16px;
          height: 16px;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .wechat-login {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          margin-top: 10px;
          color: #333;
          &:hover {
            color: red;
            cursor: pointer;
          }
        }
        svg {
          margin-top: 10px;
          width: 16px;
          height: 16px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .right{
        .top{
            display: flex;
            justify-content: space-around;
            align-items: center;
            div{
                display: flex;
                flex-flow: column;
                align-items: center;
                img{
                    width: 150px;
                    height: 150px;
                }
                svg{
                    margin: 5px 0;
                }
                p{
                    margin-bottom: 10px;
                    color: #333;
                }
            }
        }
        .bottom{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 25px 0;
            p{
                margin-top: 10px;
                color: #333;
                font-size: 20px;
            }
        }
    }
  }
}
</style>