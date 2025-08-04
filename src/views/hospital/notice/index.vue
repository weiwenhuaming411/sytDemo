<template>
  <div class="notice">
    <h1>{{ hospitalDetailInfo.hospital?.hosname }}预约挂号须知</h1>
    <div class="top">为方便您早日就医康复，请您认真阅读预约挂号须知：</div>
    <div class="info">
      <div class="tip"> 一、预约实名制：</div>
      <div class="text">统一平台电话预的和网上预的强号均采取实名制注册候的，请您如卖理供就滚人员的再实姓名、有效证低号（月份证、护照）、性别、手机号码。
社保卡骨等基本信息。</div>
    </div>
    <div class="info">
      <div class="tip"> 二、预約挂号：</div>
      <div class="text">技照北京市卫团要统一等台要求，预的经号规则知下；
在周一自然已，同一医院，同一科至，据一就的单元，同干就今人以可以还的最务1个号源在同一月财丙，同一就诊人，可以陈约假终8个考謂在同一自然月，同一软诊人，可以预的眼多，2个号俩在同一目父系票，何一就晚大，可以预约最多24个最源。</div>
    </div>
    <div class="info">
      <div class="tip"> 三、服消预約：</div>
      <div class="text">已究成预的的号票，如需力理卫骨，至人在就诊船一国件日1400的通过网站，救信公众骨，114电请每田的天的漠道送行取问预的。</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import hospitalDetailStore from '@/store/hospitalDetail'
const useHospital = hospitalDetailStore()
let {hospitalDetailInfo} = storeToRefs(useHospital)
</script>

<style scoped lang='scss'>
.notice{
  h1{
    text-align: center;
  }
  .top{
    color: #7f7f7f;
    margin: 10px 0;
  }
  .info{
    .tip{
      color: red;
      font-weight: 900px;
    }
    .text{
      color: #7f7f7f;
      line-height: 24px;
      margin: 10px 0;
    }
  }
}
</style>