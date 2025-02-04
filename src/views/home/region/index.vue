<template>
    <div class="level">
        <div class="content">
            <div class="left">地区:</div>
            <ul class="hospital">
                <li :class="{active:activeFlag==''}" @click="changeRegion('')">全部</li>
                <li :class="{active:activeFlag==item.value}" v-for="(item) in hospitalRegionArr" :key="item.id" @click="changeRegion(item.value)">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted} from 'vue'
import { reqHospitalVariety } from '@/api/home';
import type {HospitalVariety_Ts, Datum} from '@/types/hospitalVariety'

let activeFlag = ref('')
let hospitalRegionArr = ref<Datum[]>([])
// 自定义事件
let $emit = defineEmits(['getHospitalRegion'])

onMounted(()=>{
    getHospitalRegion()
})

// 获取医院地区数据
const getHospitalRegion = async ()=>{
    let result: HospitalVariety_Ts = await reqHospitalVariety('Beijin')
    hospitalRegionArr.value = result.data
}

const changeRegion = (value: string)=>{
    activeFlag.value = value
    $emit('getHospitalRegion', value)
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