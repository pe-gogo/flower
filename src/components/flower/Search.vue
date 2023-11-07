<template>
  <div class="page-search">

    <!-- 写一个价格输入表 -->

    <el-select v-model="cate" placeholder="分类">
      <el-option
      @click="list()"
        :value="'全部'"
      >
        <span style="float: left">全部</span>
        <span style="float: right; color: #8492a6; font-size: 13px"></span>
      </el-option>
      <el-option
        v-for="item in user.cateList"
        :key="item.name"
        :label="item.name"
        :value="item.id"
        @click="search()"   
        >
      </el-option>
    </el-select>
    <el-select placeholder="价格" v-model="maxPrice">
      <el-option
        key="100"
        label="0-100" 
        value="0-100"
        @click="searchByPrice(0)"
      >
      </el-option>
      <el-option  
       key="200"
        label="100-200"
        :value="100-200"
        @click="searchByPrice(100)"
        >
      </el-option>
      <el-option 
        key="201"
        :value="201"
        label="200以上"
        @click="searchByPrice(200)"
        >
      </el-option>
    </el-select>
    <div class="search">
      <input type="text" class="search__input" placeholder="请输入关键字" v-model="keyword">
      <button class="search__button" @click="searchByKey()">
        <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
      </button>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import List from '@/views/home/flower/list.vue';
import { ref } from 'vue';

const user = useUserStore();

const maxPrice = ref('');
const cate = ref('');
const keyword = ref('');
const search = () => {
  user.getFlowerByCate({
    flowerCategory : cate.value
  }).then(res=>{
    user.flower = [];
    for (let i = 0; i < res.length; i+=4) { const chunk = res.slice(i, i+4);
        user.flower.push(chunk)
    }
    
  })
};

const searchByKey = ()=>{
  user.getFlowerByKey({
    flowerName : keyword.value
  })
}

const list = () =>{
  user.getFlowerList();
}
user.getCategory()


const searchByPrice=(price:number)=>{
  user.getFlowerByPrice(price)
}
</script>

<style scoped>
.page-search{
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* From uiverse.io by @satyamchaudharydev */
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.search__input {
  font-family: inherit;
  font-size: inherit;
  background-color: #f4f2f2;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  width: 800px;
  transition: all ease-in-out .5s;
  margin-right: -2rem;
}

.search__input:hover, .search__input:focus {
  box-shadow: 0 0 1em #00000013;
}

.search__input:focus {
  outline: none;
  background-color: #f0eeee;
}

.search__input::-webkit-input-placeholder {
  font-weight: 100;
  color: #ccc;
}

.search__input:focus + .search__button {
  background-color: #f0eeee;
}

.search__button {
  border: none;
  background-color: #f4f2f2;
  margin-top: .1em;
}

.search__button:hover {
  cursor: pointer;
}

.search__icon {
  height: 1.3em;
  width: 1.3em;
  fill: #b4b4b4;
}

</style>