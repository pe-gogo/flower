<template>
  <el-menu
    :router="true"
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#fff"
    text-color="#333"
    active-text-color="#000"
    @select="handleSelect"
  >
    <div style="margin-left: 200px;"></div>
    <div style="display: flex;justify-content: center;align-items: center;margin-right: 20px;">
      <img src="https://www1.djicdn.com/dps/78800252c507990e5f033805ae463a99.svg" style="height: 40px;" >
    </div>
    <el-menu-item index="1" route="index">在线花店购物平台</el-menu-item>
    <el-menu-item index="2" route="cart">购物车</el-menu-item>
    <el-menu-item index="3" route="orders">我的订单</el-menu-item>

    <el-sub-menu index="5">
        <template #title>会员</template>
        <el-menu-item index="5-4-1" route="/login">登录</el-menu-item>
        <el-menu-item index="5-4-2" route="/register">注册</el-menu-item>
        <el-menu-item index="5-4-3" route="/uinfo">会员信息</el-menu-item>


    </el-sub-menu>

  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
}

const toMap = ()=>{
  let url = 'https://mapapi.qq.com/web/mapComponents/locationCluster/v/index.html?type=1&keyword=%E5%87%AF%E5%BE%B7MALL(%E8%A5%BF%E7%9B%B4%E9%97%A8%E5%BA%97)&center=39.908491%2C116.374328&radius=1000&key=4GABZ-EB5KR-77WW4-WKZ3O-2TLQ2-FYFDE&referer=myapp'
  window.location.replace(url)
}
</script>
