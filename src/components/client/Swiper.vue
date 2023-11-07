<template>
    <div class="block text-center" m="t-4">
      <div style="position: absolute;margin: 300px 0 80px 100px;z-index: 1;">
        <div style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color:#fff; margin: 50px 20px;font-size: 300; ">
        The embodiment of style as lifestyle, Armani/Fiori came to life <br/>
        in 2000 with the opening of the Armani/Manzoni 31 store, bringing<br/>
         essential taste to the world of flowers and floral décor. Since<br/>
          then the philosophy behind Armani/Fiori has come to include dedicated<br/>
           boutiques in a number of cities around the world.
      </div>
      </div>
      <el-carousel trigger="click" height="90vh" >
        <el-carousel-item v-for="item in swiper" :key="item" name="我的名字" >
          <img :src="item" style="height:100%;width:100%">
        </el-carousel-item>
      </el-carousel>
      <div style="position: relative;margin: -80px 0 80px 0;">
        <button class="btn" @click="toList()"> 立即选购 </button>
      </div>
      <!-- 标题 -->
      <h1 style="color: #333;">管理员公告</h1>

        <div v-for="item in store.notices" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color: rgb(51, 51, 51); margin: 50px 20px;font-size: 300; ">
          <h2 style="color: #333;">
          {{ item.noticeTitle   }}
          </h2>
          <text style="color:#333">
          {{ item.noticeContent }}
          </text>
          <el-divider></el-divider>
        </div>
      
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useUserStore } from '@/stores/user';
const store = useUserStore();
const swiper = [
        'https://www.armani.com/content/images/cms/ycm/resource/blob/521236/d043a3621ee5ee39bc4a4cf43cdd76ec/armani-fiori-s-valentino0629-data.jpg/w1920.jpg',
        'https://www.armani.com/content/images/cms/ycm/resource/blob/501536/d98998955b30c7d78e0ccd821ebd676b/hero-2-data.jpg/w1920.jpg',
        "https://www.armani.com/content/images/cms/ycm/resource/blob/501538/5f6e8e0a016ad380fe3a3288228fb2bf/hero-1-data.jpg/w1920.jpg"
        ]
        store.getNotices()
      const toList=()=>{
          router.push('list')
      }
</script>
  
  <style scoped>
  .demonstration {
    color: var(--el-text-color-secondary);
  }
  
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .btn {
 width: 6.5em;
 height: 2.3em;
 margin: 0.5em;
 background: black;
 color: white;
 border: none;
 border-radius: 0.625em;
 font-size: 20px;
 font-weight: bold;
 cursor: pointer;
 position: relative;
 z-index: 1;
 overflow: hidden;
}

button:hover {
 color: black;
}

button:after {
 content: "";
 background: white;
 position: absolute;
 z-index: -1;
 left: -20%;
 right: -20%;
 top: 0;
 bottom: 0;
 transform: skewX(-45deg) scale(0, 1);
 transition: all 0.5s;
}

button:hover:after {
 transform: skewX(-45deg) scale(1, 1);
 -webkit-transition: all 0.5s;
 transition: all 0.5s;
}
  </style>
  