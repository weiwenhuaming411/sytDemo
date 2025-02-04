import request from '@/utils/request'
import type {HospitalList_Ts} from '@/types/hospitalList'
import type {HospitalVariety_Ts} from '@/types/hospitalVariety'
import type { HospitalSearch_Ts } from '@/types/hospitalSearch'

// 通过枚举管理首页模块的接口地址
enum API {
    // 获取已有的医院的数据接口类型
    HOSPITAL_URL = '/hosp/hospital/',
    // 获取医院等级与地区接口
    HOSPITALVARIETY_URL = '/cmn/dict/findByDictCode/',
    // 根据关键字医院的名字获取数据
    HOSPITALSEARCH_URL = 'hosp/hospital/findByHosname/'
}

// 获取医院数据
export const reqHospitalList = (page: number, limit: number, hospitalLevel= '', hospitalRegion= '')=>{
    return request.get<any, HospitalList_Ts>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hospitalLevel}&cityCode=${hospitalRegion}`)
}

// 获取医院等级与地区接口
export const reqHospitalVariety = (dictCode: string)=>{
    return request.get<any, HospitalVariety_Ts>(API.HOSPITALVARIETY_URL + dictCode)
}

// 获取医院关键字数据
export const reqHospitalSearch = (hosname: string)=>{
    return request.get<any, HospitalSearch_Ts>(API.HOSPITALSEARCH_URL + hosname)
}