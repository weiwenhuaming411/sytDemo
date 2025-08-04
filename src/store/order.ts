import { defineStore } from "pinia";
import { reqOrderInfo } from "@/api/user";

export default defineStore('order', {
    state: ()=>{
        return {
            orderInfo: {}, // 订单信息
        }
    },
    actions: {
        // 获取订单信息
        async getOrderInfo(id: string){
            let result = await reqOrderInfo(id)
            this.orderInfo = result.data
        }
    }
})