<template>
  <layoutHeader/>
  <el-container>
    <el-aside width="200px">
      <el-menu @select="(val:any)=>{$router.push(val)}" default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-sub-menu :key="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item  index="/home">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><Menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view v-slot="{ Component }">
        <transition name="router-fade" mode="out-in">
          <keep-alive>
            <component :is="Component"/>
          </keep-alive>
        </transition>
      </router-view>
    </el-main>
  </el-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {Location,Menu,Document,Setting} from "@element-plus/icons";
import layoutHeader from './components/layoutHeader.vue'
const isCollapse = ref(false)
const menuChange=(key:String)=>{
  console.log(key)
}
</script>
<style lang="less" scoped>
.el-container{
  height: calc( 100vh - 38px );
  .el-main{
    padding: 0;
  }
  .el-menu{
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>