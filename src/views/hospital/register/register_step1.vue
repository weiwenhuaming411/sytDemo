<template>
  <div class="wrap">
    <div class="top">
        <div class="hosname">北京医院</div>
        <div class="line"></div>
        <div>专科</div>
        <div class="dot">·</div>
        <div class="hosdeparment">多发性</div>
    </div>
    <div class="center">
        <h1>2023年07月08日</h1>
        <div class="container">
            <div class="item" v-for="(item) in 6" :key=item @click="changeTime(item)">
                <div class="item-top">123</div>
                <div class="item-bottom">456</div>
            </div>
        </div>
        <el-pagination layout="prev, pager, next" :total="50" />
    </div>
    <div class="bottom">
      <!-- 即将放号 -->
      <div class="will">
        <span class="time">2025年07月09日</span>
        <span>放号</span>
      </div>
      <!-- 医生信息 -->
      <div class="doctor">
        <div class="moring">
          <div class="tip">
            <svg t="1752036599566" class="icon" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6870" width="16" height="16"><path d="M1082.514286 731.428571h-73.142857v-36.571428c0-234.057143-190.171429-424.228571-424.228572-424.228572S160.914286 460.8 160.914286 694.857143v36.571428h-73.142857c-29.257143 0-58.514286 21.942857-58.514286 58.514286s21.942857 58.514286 58.514286 58.514286h987.428571c29.257143 0 58.514286-21.942857 58.514286-58.514286s-21.942857-58.514286-51.2-58.514286z m-804.571429-36.571428c0-168.228571 138.971429-307.2 307.2-307.2 168.228571 0 307.2 138.971429 307.2 307.2 0 14.628571 0 21.942857-7.314286 36.571428H277.942857v-36.571428zM892.342857 914.285714H277.942857c-29.257143 0-58.514286 21.942857-58.514286 58.514286s21.942857 51.2 58.514286 51.2h621.714286c29.257143 0 58.514286-21.942857 58.514286-58.514286s-29.257143-51.2-65.828572-51.2zM585.142857 234.057143c29.257143 0 58.514286-21.942857 58.514286-58.514286V73.142857c0-29.257143-21.942857-58.514286-58.514286-58.514286s-58.514286 29.257143-58.514286 58.514286v102.4c0 36.571429 29.257143 58.514286 58.514286 58.514286zM146.285714 387.657143c21.942857 21.942857 58.514286 21.942857 80.457143 0 21.942857-21.942857 21.942857-58.514286 0-80.457143l-73.142857-73.142857c-21.942857-21.942857-58.514286-21.942857-80.457143 0-29.257143 21.942857-29.257143 58.514286-7.314286 80.457143l80.457143 73.142857zM943.542857 387.657143c21.942857 21.942857 58.514286 21.942857 80.457143 0l73.142857-73.142857c21.942857-21.942857 21.942857-58.514286 0-80.457143-21.942857-21.942857-58.514286-21.942857-80.457143 0l-73.142857 73.142857c-21.942857 21.942857-21.942857 58.514286 0 80.457143z" fill="#7dc5eb" p-id="6871"></path></svg>
            <span>上午号源</span>
          </div>
          <div class="doctor-info">
            <div class="left">
              <div class="info">
                <span>主任医师</span>
                <span>|</span>
                <span>张医生</span>
              </div>
              <div class="skill">内分泌科常见疾病</div>
            </div>
            <div class="right">
              <div class="money">￥100</div>
              <el-button class="button" type="primary" size="default" width="100px" @click="goStep2('doctor')">20</el-button>
            </div>
          </div>
            <div class="doctor-info">
            <div class="left">
              <div class="info">
                <span>主任医师</span>
                <span>|</span>
                <span>张医生</span>
              </div>
              <div class="skill">内分泌科常见疾病</div>
            </div>
            <div class="right">
              <div class="money">￥100</div>
              <el-button class="button" type="primary" size="default" width="100px">20</el-button>
            </div>
          </div>
        </div>
        <div class="after">
          <div class="tip">
            <svg t="1752036543442" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5714" width="16" height="16"><path d="M930.816 139.52c0 25.6-20.736 46.592-47.36 46.592H140.544c-26.112 0-47.36-21.504-47.36-46.592 0-25.6 20.736-46.592 47.36-46.592h742.912c26.112 0.256 47.36 21.76 47.36 46.592zM558.592 788.736v96.512c0 25.344-21.504 45.824-46.592 45.824-25.6 0-46.592-21.248-46.592-45.824v-96.512c30.976 3.328 62.208 3.328 93.184 0z m280.832-154.88l56.832 56.832c17.92 17.92 17.152 47.616-0.512 65.28-18.176 18.176-47.872 17.92-65.28 0.512l-56.832-56.832c24.064-19.456 46.336-41.472 65.792-65.792z m-588.8 65.792l-56.832 56.832c-17.92 17.92-47.616 17.152-65.28-0.512-18.176-18.176-17.92-47.872-0.512-65.28l56.832-56.832c19.2 24.32 41.472 46.336 65.792 65.792zM186.112 372.48c0 179.968 145.92 325.888 325.888 325.888s325.888-145.92 325.888-325.888h139.52c25.344 0 46.592-20.736 46.592-46.592 0-24.832-20.992-46.592-46.592-46.592H46.592c-25.344 0-46.592 20.736-46.592 46.592 0 25.088 20.992 46.592 46.592 46.592h139.52z m0 0" p-id="5715" fill="#7dc5eb"></path></svg>
            <span>下午号源</span>
          </div>
          <div class="doctor-info">
            <div class="left">
              <div class="info">
                <span>主任医师</span>
                <span>|</span>
                <span>张医生</span>
              </div>
              <div class="skill">内分泌科常见疾病</div>
            </div>
            <div class="right">
              <div class="money">￥100</div>
              <el-button class="button" type="primary" size="default" width="100px">20</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {ref, onMounted} from 'vue';
import { reqSchedule, reqScheduleList } from '@/api/hospitalDetail';
import {useRoute, useRouter} from 'vue-router';

let $route = useRoute();
let $router = useRouter();

let pageNo = ref<number>(1);  // 当前页码
let limit = ref<number>(6);  // 每页显示的数量
let scheduleData = ref<object>({})  // 用于存储排班数据
let workTime = ref<object>({})  // 存储排班日期:当前数据第一个
let doctorArr = ref<Array<any>>([]);  // 存储医生信息

onMounted(async () => {
  // fetchSchedule()
});

// 获取排班数据
const fetchSchedule = async ()=>{
  let result = await reqSchedule(pageNo.value, limit.value, $route.query.hoscode as string, $route.query.depcode as string)
  scheduleData.value = result.data  // P37 接口404
  workTime.value = result.data.bookingScheduleList[0]
  // getFetchScheduleList()  // 获取预约排班列表
}
// 获取预约排班列表
const getFetchScheduleList = async ()=>{
  let result = await reqScheduleList($route.query.hoscode as string, $route.query.depcode as string, workTime.value.workDate as string)
  doctorArr.value = result.data
}

// 切换时间
const changeTime = (item: any) => {
  workTime.value = item
  // getFetchScheduleList()  // 获取预约排班列表
}

// 跳转到第二步
const goStep2 = (data: string) => {
  $router.push({path:'/hospital/register_step2', query:{doctorId:data}})
}
</script>

<style scoped lang='scss'>
.wrap {
  .top{
    display: flex;
    color: #7f7f7f;
    .line {
      width: 5px;
      height: 20px;
      background-color: skyblue;
      margin: 0 5px;
    }
    .dot {
      color: skyblue;
    }
  }
  .center{
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 20px;
        color: #7f7f7f;
    }
    .container {
        display: flex;
        margin: 25px 0;
        width: 100%;
      .item {
        flex: 1;
        border: 1px solid skyblue;
        margin: 0 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .item-top {
            width: 100%;
            height: 24px;
            color: #333;
            background: #e8f2ff;
            line-height: 24px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .item-bottom {
            width: 100%;
            height: 60px;
            text-align: center;
            line-height: 60px;
        }
      }
    }
  }
  .bottom{
    .will{
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      .time {
        color: skyblue;
      }
    }
    .doctor {
      // display: flex;
      // justify-content: space-around;
      margin-top: 20px;
      .moring, .after {
        .tip{
          display: flex;
          align-items: center;
          svg {
            margin-right: 5px;
          }
        }
        .doctor-info {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          border-bottom: 1px solid #ccc;
          .left{
            text-align: center;
            line-height: 30px;
            .info{
              display: flex;
              justify-content: center;
              align-items: center;
              span {
                margin: 0 5px;
                color: skyblue;
              }
            }
            .skill {
              color: #7f7f7f;
            }
          }
          .right{
            width: 200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .money {
              color: skyblue;
              font-size: 20px;
            }
            :deep(.button) {
              width: 80px;
            }
          } 
        }
      }
    }
  }
}
</style>