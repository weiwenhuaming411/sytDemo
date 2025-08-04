<template>
  <div class="navigation">
    <!-- 左侧导航区 -->
    <div class="menu">
      <div class="top" style="margin-left: 10px;">
        <el-icon>
          <icon.menuTitle />
        </el-icon>
        <span style="margin: 0 10px;">/</span>
        <span>{{ itemName.title}}</span>
      </div>
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
        <el-menu-item :index="pathList.route1" @click="changeRuote(pathList.route1)">
          <el-icon><icon.itemIcon1 /></el-icon>
          <span>{{ itemName.name1 }}</span>
        </el-menu-item>
        <el-menu-item :index="pathList.route2" @click="changeRuote(pathList.route2)">
          <el-icon>
            <icon.itemIcon2 />
          </el-icon>
          <span>{{ itemName.name2 }}</span>
        </el-menu-item>
        <el-menu-item :index="pathList.route3" :route="{ path: pathList.route3, query: { hosCodeOrId: id } }">
          <el-icon>
            <icon.itemIcon3 />
          </el-icon>
          <span>{{ itemName.name3 }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 右侧内容区 -->
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineProps(['icon', 'pathList', 'itemName'])

let $route = useRoute()
let $router = useRouter()

// 跳转子路由时携带query参数
let id = $route.query.hosCodeOrId
const changeRuote = (path: string) => {
  $router.push({ path, query: { hosCodeOrId: id} })
}
</script>

<style scoped lang='scss'>
.navigation {
  width: 1200px;
  display: flex;
  margin-top: 70px;
  margin-bottom: 50px;
  .menu {
    flex: 2;

    .top {
      color: #7f7f7f;
    }
  }

  .content {
    flex: 8;
  }
}
</style>