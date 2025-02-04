<template>
  <div class="level">
    <div class="content">
        <div class="left">等级:</div>
        <ul class="hospital">
            <li :class="{active:activeFlag==''}" @click="changeLevel('')">全部</li>
            <li :class="{active:activeFlag==item.value}" v-for="(item) in hospitalLevelArr" :key="item.id" @click="changeLevel(item.value)">{{ item.name }}</li>
        </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { reqHospitalVariety } from '@/api/home'
import type {HospitalVariety_Ts, Datum} from '@/types/hospitalVariety'

let activeFlag = ref('')

let hospitalLevelArr = ref<Datum[]>([])

// 自定义事件回传数据
let $emit = defineEmits(['getHospitalLevel'])

onMounted(()=>{
    getLevel()
})

// 获取医院分类数据
const getLevel = async ()=>{
    let result: HospitalVariety_Ts = await reqHospitalVariety('HosType')
    hospitalLevelArr.value = result.data
}

const changeLevel = (value: string)=>{
    activeFlag.value = value
    $emit('getHospitalLevel', value)
}


</script>

<style scoped lang='scss'>
.level {
    margin-top: 10px;
    .content {
        display: flex;

        .left {
            width: 40px;
        }

        .hospital {
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            .active {
                color: #55a6fe;
            }

            li {
                margin: 0 15px 10px 15px;
                &:hover{
                    color: #55a6fe;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>