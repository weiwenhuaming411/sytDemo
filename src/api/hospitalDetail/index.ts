import request from "@/utils/request";
import type { HospitalDetail_Ts } from "@/types/hospitalDetail/hospitalDetail";
import type { HospitalDepartment_Ts } from "@/types/hospitalDetail/hospitalDepartment"

enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    HOSPITALDEPARTMENT_URL = '/hosp/hospital/department/',
    SCHEEDULE_URL = '/hosp/auth/getBookingScheduleRule/',
    SCHEDULELIST_URL = '/hosp/hospital/auth/findScheduleList/',
    PATIENTLIST_URL = '/user/patient/auth/findAll'
}

// api/hosp/hospital/{hoscode}  获取医院预约挂号详情
export const reqHospitalDetail = (hoscode: string)=>{
    return request.get<HospitalDetail_Ts, any>(API.HOSPITALDETAIL_URL + hoscode)
}

// api/hosp/hospital/department/{hoscode}  获取医院科室列表
export const reqHospitalDepartment = (hoscode: string)=>{
    return request.get<HospitalDepartment_Ts, any>(API.HOSPITALDEPARTMENT_URL + hoscode)
}

// /api/hosp/auth/getBookingScheduleRule/{limit}/{hoscode}/{depcode}  预约排班接口
export const reqSchedule = (page: number, limit: number, hoscode: string, depcode: string) => {
  return request.get<any>(API.SCHEEDULE_URL + `${page}/${limit}/${hoscode}/${depcode}`);
}

// /api/hosp/hospital/auth/findScheduleList/{hoscode}/{depcde}/{workDate}  获取预约排班列表
export const reqScheduleList = (hoscode: string, depcode: string, workDate: string) => {
  return request.get<any, any>(API.SCHEDULELIST_URL + `${hoscode}/${depcode}/${workDate}`);
}

// /api/user/patient/auth/findAll  获取就诊人信息接口
export const reqPatientList = () => {
  return request.get<any, any>(API.PATIENTLIST_URL);
}

// /api/hosp/hospital/getSchedule/6225753136a9ba1be763dc10  获取挂号医师信息