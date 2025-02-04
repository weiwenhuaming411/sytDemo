import {defineStore} from 'pinia'        
import { ref,computed } from 'vue'
import { reqHospitalDetail } from '@/api/hospital'
import type { HospitalDetail_Ts } from '@/types/hospitalDetail'

export default defineStore('hospitalDetail',()=>{
    let hospitalInfo = ref()
    async function getHospitalDetail(hoscode: string){
        let result: HospitalDetail_Ts = await reqHospitalDetail(hoscode)
        hospitalInfo.value = result.data
    }  // 相当actions
    return {hospitalInfo, getHospitalDetail}
})