import request from "@/utils/request";

enum API {
    LOGINCODE_URL = '/sms/send/',
    USERLOGOUT_URL = '/user/login',
    WXLOGIN_URL = '/user/weixin/getLoginParam/'
}

// /api/sms/send/{phone}  登录验证码
export const reqLoginCode = (phone: any) => {
    return request.get<any, any>(API.LOGINCODE_URL + phone)
}

// /api/user/login  用户登录
export const reqUserLogin = (data: any) => {
    return request.post<any, any>(API.USERLOGOUT_URL, data)
}

// /api/user/weixin/getLoginParam/?wxRedirectUri=${data}  获取微信二维码登录的参数
export const reqWxLogin = (data: any) => {
    return request.get<any, any>(API.WXLOGIN_URL + `?wxRedirectUri=${data}`)
}
