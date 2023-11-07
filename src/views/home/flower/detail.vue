<template>
    <div class="flex flex-col lg:flex-row max-w-5xl mx-auto mt-8">
      <div class="lg:w-1/2 mb-8 lg:mb-0">
        <img class="w-full object-cover border-2" style="height: 600px;" :src="flowerImageUrl" :alt="flowerName" />
      </div>
      <div class="lg:w-1/2 px-4" style="margin-left: 100px;">
        <h1 class="text-4xl font-semibold mb-4" style="color:#333">{{ flowerName }}</h1>
        <p class="text-2xl font-semibold  mb-8" style="color:burlywood">¥ {{ flowerPrice }}</p>

        <div class="text-lg mb-4">
          <span class="font-bold">销量：</span>{{ flowerSales }}
        </div>
        <div class="text-lg mb-4 text-gray-600" >
          <span class="font-bold"></span>{{ flowerCategory }}
        </div>
        <div class="flex items-center">
            <el-input-number v-model="quantity" :min="1" :max="99" class="mr-4"></el-input-number>

          <el-button type="primary" style="background-color:burlywood;border: none;color:#333;width: 100%;" @click="addToCart">加入购物车</el-button>
        </div>
      </div>
    </div>
    <div style="background-color:floralwhite;margin-top: 20px;">

        <div style="display: flex;justify-content: center;align-items: center;padding: 50px;">
         <p class="text-lg text-gray-600 leading-relaxed mb-4" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">花语：{{ flowerMeaning }}</p>

        </div>
    </div>

  </template>
  
  <script setup lang="ts">
  import router from '@/router';
import { useUserStore } from '@/stores/user';
  import { ref } from 'vue';
  
  const store = useUserStore();
  const {
    flowerName,
    flowerCategory,
    description,
    flowerImageUrl,
    flowerMeaning,
    flowerPrice,
    flowerSales
  } = store.currentFlower;

    const quantity = ref(1);
    const addToCart = () => {
      console.log(store.userInfo.name)
      if(store.userInfo.name ===''){
        router.push('/login')
        return;
      }
        const total = quantity.value*flowerPrice;
        const newSales = flowerSales+quantity.value
        const uname = store.userInfo.name
        
        let data ={
            fname:flowerName,
            quantiy:quantity.value,
            total,
            uname,
            isCart:1
        }
        store.toCart(data)
        quantity.value = 1;
        router.push('/cart')
    };

  </script>
  
  <style scoped>
  .text-gold-500 {
    color: #ffd700;
  }
  text{
    color:#333
  }
  </style>
  