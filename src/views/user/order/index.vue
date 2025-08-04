<template>
  <div>
    <orderDetail v-if="orderId"></orderDetail>
    <orderAll v-else></orderAll>
  </div>
</template>

<script setup lang='ts'>
import orderDetail from './orderDetail/index.vue'
import orderAll from '@/views/user/order/orderAll/index.vue'
import { useRoute } from 'vue-router'
import { ref, onUpdated } from 'vue'

let $route = useRoute()

let orderId: any = ref()

onUpdated(()=>{
  orderId.value = $route.query.hosCodeOrId
})

</script>

<style scoped lang='scss'>

</style>