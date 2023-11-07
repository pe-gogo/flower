<template>
  <div class="points-container">
    <h1 class="title">我的购物车</h1>
    <el-table :data="useStore.myCart" style="width: 100%" >
      <el-table-column prop="fname" label="商品名"></el-table-column>
      <el-table-column prop="quantiy" label="数量"></el-table-column>
      <el-table-column prop="total" label="总价"></el-table-column>
      <el-table-column prop="createTime" label="购买时间"></el-table-column>
      <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleRowClick(scope.row)"
          >提交支付订单</el-button
        >
        <el-button size="small" @click="handleDelClick(scope.row)" type="danger"
          >X</el-button
        >
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const useStore = useUserStore();
useStore.getCart();

const handleRowClick = (row: any) => {
  const index = useStore.myCart.indexOf(row);
  row.isCart = 0;
  useStore.delCart(row);
  if (index > -1) {
    useStore.myCart.splice(index, 1);
  }
  useStore.getFlowerList();
};

const handleDelClick = (row: any) => {
  // useStore.delCart(row.busOrderId);
};

// useStore.getCart().then(res=>{
//   console.log(res)
// })
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
