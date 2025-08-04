<template>
  <div class="levelAddRegion">
    <div class="content">
        <div class="left">{{ title }}:</div>
        <ul class="right">
            <li :class="{active:activeFlag==''}" @click="changeLevelOrRegion('')">全部</li>
            <li :class="{active:activeFlag==item.value}" v-for="(item) in levelAndRegionArr" :key="item.id" @click="changeLevelOrRegion(item.value)">{{ item.name }}</li>
        </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { reqHospitalVariety } from '@/api/home'
import type {HospitalVariety_Ts, Datum} from '@/types/home/hospitalVariety'

let $props = defineProps(['title', 'type'])

let activeFlag = ref<string>('')  // 动态样式
let levelAndRegionArr = ref<Datum[]>([])  // 医院等级数据

let $emit = defineEmits(['getLevelOrRegion'])  // 自定义事件回传数据

onMounted(()=>{
    getLevelAndRegion()
})

// 获取医院分类数据
const getLevelAndRegion = async ()=>{
    let result: HospitalVariety_Ts = await reqHospitalVariety($props.type)
    levelAndRegionArr.value = result.data
}

// 筛选医院等级
const changeLevelOrRegion = (value: string)=>{
    activeFlag.value = value
    $emit('getLevelOrRegion', {value, title: $props.title})
}

</script>

<style scoped lang='scss'>
.levelAddRegion {
    margin-top: 10px;
    color: #7f7f7f;
    
    .content {
        display: flex;

        .left {
            width: 40px;
        }

        .right {
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