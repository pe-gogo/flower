<template>
    <div class="points-container">
      <h1 class="title">我的订单</h1>
      <el-table :data="useStore.myCart" style="width: 100%" >
        <el-table-column prop="fname" label="商品名"></el-table-column>
        <el-table-column prop="quantiy" label="数量"></el-table-column>
        <el-table-column prop="total" label="总价"></el-table-column>
        <el-table-column prop="createTime" label="购买时间"></el-table-column>
        <el-table-column label="操作">
        <template #default="scope">
        <el-button size="small" @click="handleRowClick(scope.row)"
        type="danger"
          >删除</el-button
        >
        <el-button text @click="handleRowCurrent(scope.row)"
        size="small"
        >
          详情
        </el-button>
        </template>
        </el-table-column>
      </el-table>
  <el-dialog v-model="dialogFormVisible" title="订单信息">
    <el-descriptions title="Order Info" v-model="form">
    <el-descriptions-item label="商品名">{{form.fname}}</el-descriptions-item>
    <el-descriptions-item label="数量">{{form.quantiy}}</el-descriptions-item>
    <el-descriptions-item label="总价">{{form.total}}</el-descriptions-item>
  </el-descriptions>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
      </span>
    </template>
  </el-dialog>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useUserStore } from '@/stores/user';
  const useStore = useUserStore();
  useStore.getOrder();
  
  const handleRowClick = (row: any) => {
    const index = useStore.myCart.indexOf(row);
    let id = row.busOrderId
    useStore.delCart(id);
    if (index > -1) {
      useStore.myCart.splice(index, 1);
    }
  };

//--------------

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
let form = reactive({})

const handleRowCurrent = (row: any) => {
  dialogFormVisible.value = true;
  form = JSON.parse(JSON.stringify(row));
  console.log(form)
};





  </script>
  
  <style>
  .points-container {
    max-width: 1000px;
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
  