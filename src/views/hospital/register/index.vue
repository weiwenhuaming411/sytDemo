<template>
  <div class="register">
    <!-- 医院标题 -->
    <div class="top">
      <div class="title">
        {{ hospitalDetailInfo.hospital?.hosname }}
      </div>
      <div class="level">
        <svg t="1749591276373" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4628" width="16" height="16"><path d="M939.358251 423.424662c-23.01825-37.252439-62.924121-60.779272-107.019409-63.209624-2.755764-0.38681-5.510504-0.579191-8.347109-0.579191l-152.202471-0.121773c6.649444-28.975938 10.015098-58.653865 10.015098-88.657202 0-28.223808-3.213181-57.139372-9.556657-85.952604-0.447185-2.043542-1.098008-4.006244-1.932002-5.866614-15.820314-57.302077-67.37755-96.841605-127.282918-96.841605-72.827679 0-132.081201 59.254545-132.081201 132.081201 0 3.334955 0.132006 6.66991 0.406253 10.015098-2.196015 57.211003-32.108279 109.947088-80.269162 141.363611-14.447037 9.42465-18.524912 28.773324-9.099239 43.220361 9.414417 14.437827 28.752858 18.535145 43.220361 9.099239 65.811892-42.925648 106.429984-115.325585 108.656699-193.684234 0.030699-1.332345-0.010233-2.663666-0.14224-3.996011-0.203638-2.012843-0.304945-4.016477-0.304945-6.019087 0-38.381146 31.233352-69.614497 69.614497-69.614497 32.57593 0 60.474326 22.204721 67.824735 53.997821 0.356111 1.534959 0.823761 3.019777 1.402953 4.453429 4.696975 22.814612 7.076162 45.579081 7.076162 67.743894 0 37.485753-6.222725 74.352405-18.494213 109.592001-3.324722 9.546424-1.819438 20.111037 4.02671 28.345582 5.856381 8.245801 15.332197 13.146415 25.448602 13.156648l193.226816 0.101307c1.423419 0.264013 2.857071 0.426719 4.300956 0.477884 24.116257 0.9967 45.935192 13.614066 58.603723 34.090423 7.838525 12.31242 11.438517 26.800389 10.431583 41.939181-0.080841 0.945535-0.121773 1.911536-0.11154 2.877537 0 0.854461 0.040932 1.697665 0.11154 2.53166 0.010233 0.335644-0.030699 0.661056-0.11154 0.976234-0.101307 0.376577-0.193405 0.772596-0.284479 1.159406l-74.972529 330.391802c-0.914836 1.281179-1.738597 2.6432-2.449795 4.046153-5.937223 11.762905-14.660908 21.48329-25.346271 28.172643-10.746762 6.812149-23.059182 10.614755-35.757388 11.06194-0.854461-0.061398-513.766226-0.224104-513.766226-0.224104-0.467651-0.020466-0.935302-0.030699-1.402953-0.030699 0 0-111.01542 0.172939-112.718201 0.457418-1.932002 0-3.446495-1.50426-3.446495-3.415796l0.299829-416.334173c0-1.901303 1.545192-3.446495 3.01466-3.456728l1.245364 0.121773c1.174756 0.132006 2.653433 0.284479 3.52836 0.193405l83.82822-0.222057 0 339.367221c0 17.253966 13.979386 31.233352 31.233352 31.233352s31.233352-13.979386 31.233352-31.233352L281.009092 435.350273c0-1.778506 0-8.631588 0-10.411117 0-17.253966-13.979386-30.928407-31.233352-30.928407-1.50426 0-117.547183 0.304945-119.402437 0.304945-36.34272 0-65.913199 29.566386-65.913199 65.893756l-0.299829 416.334173c0 36.337603 29.571503 65.902966 65.913199 65.902966 2.541893 0 111.406323-0.457418 111.406323-0.457418 0.457418 0.020466 0.925069 0.030699 1.382487 0.030699 0 0 511.458671 0.274246 512.505513 0.274246 25.469068 0 50.296523-7.197936 71.647807-20.73116 19.612687-12.281721 35.777855-29.881564 46.839795-50.967812 3.660366-5.622044 6.435573-11.875468 8.256034-18.615986 0.11154-0.416486 0.213871-0.823761 0.304945-1.240247l74.881454-330.340637c1.596358-6.212492 2.257413-12.586666 2.00261-18.992563C960.892707 473.366098 953.948551 446.331371 939.358251 423.424662z" fill="#d81e06" p-id="4629"></path><path d="M450.027553 518.650467c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C481.260905 532.629853 467.281519 518.650467 450.027553 518.650467z" fill="#d81e06" p-id="4630"></path><path d="M693.805696 518.650467c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C725.039048 532.629853 711.058638 518.650467 693.805696 518.650467z" fill="#d81e06" p-id="4631"></path><path d="M648.940882 660.09492c-14.304797-9.393951-33.592073-5.398964-43.159986 8.763594-0.132006 0.193405-13.614066 19.754926-34.171264 19.754926-19.98824 0-32.423457-18.09717-33.266661-19.368116-9.17087-14.427594-28.254507-18.809391-42.834574-9.770528-14.650675 9.109472-19.155269 28.366048-10.055007 43.016723 11.214413 18.047028 41.96988 48.588625 86.156242 48.588625 43.962258 0 75.104535-30.318516 86.572728-48.222281C667.404396 688.461991 663.216004 669.500127 648.940882 660.09492z" fill="#d81e06" p-id="4632"></path></svg>
        <span>
          {{ hospitalDetailInfo.hospital?.param.hostypeString }}
        </span>
      </div>
    </div>
    <!-- 展示内容 -->
     <div class="content">
      <!-- 医院logo -->
      <div class="left">
        <img :src="`data:image/jpeg;base64,${hospitalDetailInfo.hospital?.logoData}`" alt="">
      </div>
      <!-- 医院规则 -->
      <div class="right">
        <div>挂号规则</div>
        <div class="time">
          <span>预约周期：</span>10天 <span style="color: green;">放号时间：{{hospitalDetailInfo.bookingRule?.releaseTime}}</span> <span style="color: red;">停挂时间：{{ hospitalDetailInfo.bookingRule?.stopTime }}</span>
        </div>
        <div class="address">
          <span>具体位置：</span><span>{{ hospitalDetailInfo.hospital?.param.fullAddress }}</span>
        </div>
        <div class="route">
          <span>规划路线：</span><span>{{ hospitalDetailInfo.hospital?.route }}</span>
        </div>
        <div class="releasetime">
          <span>退号时间：</span><span>就诊前一工作日{{ hospitalDetailInfo.bookingRule?.quitTime }}前取消</span>
        </div>
        <div class="rule">医院预约规则</div>
        <div class="ruleInfo">
          <ol>
            <li v-for="(item, index) in hospitalDetailInfo.bookingRule?.rule" :key="index">
              {{ item }}
            </li>
          </ol>
        </div>
      </div>
     </div>
     <!-- 展示医院科室 -->
      <div class="department">
        <div class="dep-left">
          <ul>
            <li @click="changeIndex(index)" :class="{active:index==currentIndex}" v-for="(department, index) in useHospital.hospitalDepartmentList" :key="department.depcode">{{ department.depname }}</li>
          </ul>
        </div>
        <div class="dep-right" @scroll="scrollTOP">
          <div class="right-content" v-for="(department) in hospitalDepartmentList" :key="department.depcode">
            <h1 class="dep-title">{{ department.depname }}</h1>
            <ul>
              <li @click="goRegisterStep1(item)" v-for="(item) in department.children" :key="item.depcode">{{ item.depname }}</li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang='ts'>
import {ref, onMounted} from 'vue'
import hospitalDetailStore from '@/store/hospitalDetail'
import { useRouter, useRoute } from 'vue-router'
import {storeToRefs} from 'pinia'

let $router = useRouter()
let $route = useRoute()
let useHospital = hospitalDetailStore()
let {hospitalDetailInfo, hospitalDepartmentList} = storeToRefs(useHospital)

onMounted(() => {
  // 挂载时获取医院详情数据
  useHospital.getHospitalDetail($route.query.hosCodeOrId as string)
  // 挂载时获取医院科室列表
  useHospital.getHospitalDepartment($route.query.hosCodeOrId as string)
})

// 获取元素
let Top = ref<number>(0)

let currentIndex = ref<number>(0)
let Y = ref<number>(0)

// 控制滚动事件对应科室高亮
const scrollTOP = ()=>{
  let departmentShow = <HTMLImageElement>document.querySelector('.dep-right')
  Top.value = departmentShow.scrollTop

  let allH1 = <NodeList>document.querySelectorAll('.dep-title')

  allH1.forEach((item: Node, index: number) => {
        if((item as HTMLImageElement).offsetTop - 424 - departmentShow.scrollTop < 50){
          currentIndex.value = index
        }
  });
}

// 控制科室高亮的响应式数据
const changeIndex = (index: number)=>{
  currentIndex.value = index
  // 滚动到对应科室位置
  let allH1 = <NodeList>document.querySelectorAll('.dep-title');
  
  Y.value = (allH1[currentIndex.value] as HTMLImageElement).offsetTop - 424
  let departmentShow = <HTMLImageElement>document.querySelector('.dep-right')
  departmentShow.scroll(0, Y.value)
  Top.value = departmentShow.scrollTop

}


// 跳转预约挂号第一步
const goRegisterStep1 = (item: {depcode: string}) => {
  $router.push({path: '/hospital/register_step1', query: {hoscode: $route.query.hoscode, depcode: item.depcode}})
}

</script>

<style scoped lang='scss'>
.register {
  margin: 20px;
  .top {
    display: flex;
    .title {
      font-size: 30px;
      font-weight: 900;
    }
    .level {
      color: #7f7f7f;
      margin-left: 10px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }
  .content {
    display: flex;
    margin-top: 20px;
    .left {
      width: 80px;
      margin: 0 10px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .right {
      flex: 1;
      margin-left: 10px;
      .time,.address,.route,.releasetime{
        margin-top: 10px;
        line-height: 20px;
        color: #7f7f7f;
      }
      .route{
        display: flex;
        span:first-child{
          white-space: nowrap;
        }
      }
      .rule{
        margin: 10px 0;
      }
      .ruleInfo{
        ol{
          list-style-type: decimal;
          margin-left: 15px;
          li{
            margin-top: 10px;
            color: #7f7f7f;
          }
        }
      }
    }
  }
  .department{
    width: 100%;
    height: 600px;
    display: flex;
    margin-top: 20px;
    .dep-left{
      width: 100px;
      height: 100%;
      ul{
        width: 100%;
        height: 100%;
        background-color: rgb(248, 248, 248);
        display: flex;
        flex-direction: column;
        li{
          flex: 1;
          text-align: center;
          height: 40px;
          line-height: 40px;
          color: #7f7f7f;
          &.active{
            border-left: 2px solid red;
            color: red;
            background: white;
          }
        }
      }
    }
    .dep-right{
      flex: 1;
      margin-left: 20px;
      height: 100%;
      overflow: auto;

      &::-webkit-scrollbar{
        display: none;
      }
      .right-content{
        h1{
          background-color: rgb(248, 248, 248);
          color: #7f7f7f;
        }
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            width: 33%;
            color: #7f7f7f;
            line-height: 30px;
            &:hover{
              color: red;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>