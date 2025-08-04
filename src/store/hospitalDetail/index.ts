import {defineStore} from 'pinia'
import { ref,reactive } from 'vue'
import { reqHospitalDetail, reqHospitalDepartment, reqPatientList } from '@/api/hospitalDetail'
import type { HospitalDetail_Ts, Data } from '@/types/hospitalDetail/hospitalDetail'
import type { HospitalDepartment_Ts,  Datum} from '@/types/hospitalDetail/hospitalDepartment'

export default defineStore('hospitalDetail', ()=>{
    let hospitalDetailInfo = ref({} as Data)  // 医院详情数据
    let hospitalDepartmentList = ref([] as Datum[])  // 医院科室数据
    let patientList = ref([])  // 就诊人信息

    // 获取医院详情数据方法
    async function getHospitalDetail(hoscode: string){
        let result: HospitalDetail_Ts = await reqHospitalDetail(hoscode)
        hospitalDetailInfo.value = result.data
    }

    // 获取医院科室列表
    async function getHospitalDepartment(hoscode: string){
        let result: HospitalDepartment_Ts = await reqHospitalDepartment(hoscode)
        hospitalDepartmentList.value = result.data
    }

    // 获取就诊人信息
    async function getPatientList(){
        let result: any = await reqPatientList()
        patientList.value = result.data
    }

    return {
        hospitalDetailInfo,
        hospitalDepartmentList,
        patientList,
        getHospitalDetail,
        getHospitalDepartment,
        getPatientList
    }
})
