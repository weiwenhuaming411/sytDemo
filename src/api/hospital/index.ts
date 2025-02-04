import request from "@/utils/request";
import type { HospitalDetail_Ts } from "@/types/hospitalDetail";

enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/'
}

export const reqHospitalDetail = (hoscode: string)=>{
    return request.get<any, HospitalDetail_Ts>(API.HOSPITALDETAIL_URL + hoscode)
}