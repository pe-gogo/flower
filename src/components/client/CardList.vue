<template>
   <div style="padding: 0 100px;">
    <el-row :gutter="20" v-for="item in store.flower">
    <el-col :span="6" style="margin-top: 20px;" v-for="item1 in item" >   
        <Item :name="item1.flowerName" :imageUrl="item1.flowerImageUrl" :price="item1.flowerPrice" @click="store.toDetail(item1)"/>
    </el-col>
  </el-row>
   </div>
</template>

<script setup lang="ts">
import request from '@/libs/request';
import { useUserStore } from '@/stores/user';

const store = useUserStore();
store.getFlowerList();


</script>
  
<style>
  
</style>
  