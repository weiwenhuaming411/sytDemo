import request from "@/utils/request";

enum API {
    SUBMITORDER_URL = '/order/orderInfo/auth/submitOrder/',
    ORDERINFO_URL = '/order/orderInfo/auth/getOrderInfo/',
    CANCELORDER_URL = '/order/orderInfo/auth/cancelOrder/',
    USERINFO_URL = '/user/auth/getUserInfo',
    ORDERLIST_URL = '/order/orderInfo/auth/',
    PATIENTALL_URL = '/user/patient/auth/findAll',
    STATUSALL_URL = '/order/orderInfo/auth/getStatusList',
    PARENTLIST_URL = '/cmn/dict/findByParentId/',
    ADDUSER_URL = '/user/patient/auth/save',
    UPDATEUSER_URL = '/user/patient/auth/update',
    REMOVEPATIENT_URL = '/user/patient/auth/remove/'
}


interface UserInfo_Ts {
    code: number;
    data: Data;
    message: string;
    ok: boolean;
    [property: string]: any;
}

interface Data {
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


// /api/order/orderInfo/auth/submitOrder/{hoscode}/{scheduleId}/{patientId}  提交挂号订单  => 201
export const reqSubmitOrder = (hosCode: string, scheduleId: string, patientId: string) => {
    return request.post<any, any>(API.SUBMITORDER_URL + `${hosCode}/${scheduleId}/${patientId}`)
}

// /api/order/orderInfo/auth/getOrderInfo/{id}  获取预约订单
export const reqOrderInfo = (id: string) => {
    return request.get<any>(API.ORDERINFO_URL + id)
}

// /api/order/orderInfo/auth/cancelOrder/{orderId} 取消预约
export const reqCancelOrder = (id: string) => {
    return request.get<any>(API.CANCELORDER_URL + id)
}

// /api/order/weixin/createNative/{orderId}  获取微信支付二维码接口

// /api/order/weixin/queryPayStatus/{orderId}  查询支付状态接口

// /api/user/auth/getUserInfo 获取会员信息
export const reqUserInfo = ()=>{
    return request.get<UserInfo_Ts, any>(API.USERINFO_URL)
}

// /api/order/orderInfo/auth/{page}/{limit} 获取所有订单数据
export const reqOrderList = (page: any, limit: any, patientId?: any, orderStatus?: any)=>{
    return request.get(API.ORDERLIST_URL + `${page}/${limit}?patientId=${patientId}&orderStatus=${orderStatus}`)
}

// /api/user/patient/auth/findAll 获取所有就诊人数据
export const reqPatientAll = ()=>{
    return request.get(API.PATIENTALL_URL)
}

// /api/order/orderInfo/auth/getStatusList 获取所有订单状态接口
export const reqStatusAll = ()=>{
    return request.get(API.STATUSALL_URL)
}

// /api/cmn/dict/findByParentId/{parentId} 获取当前住址（根据上级id获取子节点数据列表）
export const reqParntList = (parentId: any)=>{
    return request.get(API.PARENTLIST_URL + parentId)
}

// (post) /api/user/patient/auth/save 添加就诊人接口  // (put) /api/user/patient/auth/update 修改就诊人接口
export const reqAddOrUpdateUser = (data: any)=>{
    if(data.id){
        return request.put(API.UPDATEUSER_URL, data)
    }else{
        return request.post(API.ADDUSER_URL, data)
    }
}

// （delete） /api/user/patient/auth/remove/{id} 删除就诊人接口
export const reqRemovePatient = (id: any)=>{
    return request.delete(API.REMOVEPATIENT_URL+id)
}



// 17720125002 已认证