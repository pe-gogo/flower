<template>
    <div class="points-container">
      <h1 class="title">积分明细</h1>
      <div class="total-points">总积分：{{ totalPoints }}</div>
      <el-table :data="pointsList" style="width: 100%">
        <el-table-column prop="comment" label="项目" ></el-table-column>
        <el-table-column prop="get" label="获得积分" ></el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  import request from '@/libs/request';
  import { useUserStore } from '@/stores/user';
  import router from '@/router';

  export default {
    data() {
      return {
        totalPoints: 0,
        pointsList: [
        ],
      };
    },
    created() {
      let user = useUserStore();
      let u = useUserStore().userInfo
      
      if(u.userId == null){
        router.push('/login')
      }
      request.get('/sp/integral/u/'+u.userId).then(res=>{
        this.pointsList = res
        this.totalPoints = this.calculateTotalPoints();

      })
    },
    methods: {
      calculateTotalPoints() {
        return this.pointsList.reduce((total, point) => Number(total) + Number(point.get), 0);
      },
    },
  };
  </script>
  
  <style>
  .points-container {
    max-width: 800px;
    margin: 70px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  
  .title {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  
  .total-points {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .el-table {
    font-size: 18px;
  }
  
  .el-table__header {
    background-color: #f3f3f3;
    font-weight: bold;
  }
  
  .el-table__body tr:nth-child(2n) {
    background-color: #f9f9f9;
  }
  
  .el-table__row {
    height: 50px;
  }
  </style>
  