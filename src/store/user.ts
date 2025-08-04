import {defineStore} from 'pinia'
import { reqLoginCode, reqUserLogin } from '@/api/login'
import {setToken, getToken} from '@/utils/token'

export default defineStore('user', {
    state: () => {
        return {
            visible: false, // 控制登录弹窗的显示与隐藏
            phoneCode: '', // 手机验证码
            userInfo: JSON.parse(getToken('userInfo') as string) || {} // 用户信息
        }
    },
    actions: {
        // 登录验证码
        async getPhoneCOde(phone: string) {
            const result = await reqLoginCode(phone)
            if (result.code === 200) {
                this.phoneCode = result.data // 假设返回的数据中有验证码
                return true // 成功获取验证码
            }else {
                this.phoneCode = '' // 清空验证码
                return false // 获取验证码失败
            }
        },
        // 用户登录
        async userLogin(loginParams: any) {  
            // 这里可以调用登录接口
            const result = await reqUserLogin(loginParams)
            this.userInfo = result.data // 假设返回的数据中有用户信息
            setToken('userInfo', JSON.stringify(result.data)) // 设置token
            // window.location.href = '/home' // 登录成功后跳转到首页
            return true // 返回登录成功状态
        }
    },
    getters: {}
})