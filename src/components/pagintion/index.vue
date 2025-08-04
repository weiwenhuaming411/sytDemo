<template>
    <!-- 分页器 -->
    <div class="pagintion">
        <el-pagination 
        v-model:current-page="pagintion.pageNo" 
        v-model:page-size="pagintion.pageSize" 
        :page-sizes="pagintion.pageSizes"
        layout=" prev, pager, next, jumper, sizes, total" 
        :total="pagintion.total" 
        @current-change="pagintion.currentChange"
        @size-change="pagintion.sizeChange" 
        />
    </div>
</template>

<script setup lang='ts'>
defineProps(['pagintion'])
</script>

<style scoped lang='scss'>
.pagintion {
    display: flex;
    justify-content: center;
    margin: 10px 0;
}
</style>