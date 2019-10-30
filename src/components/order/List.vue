<template>
  <div id="list">
    <el-table
          :data="listArr"
          style="width: 100%">
          <el-table-column
            prop="orderId"
            label="订单编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="shopName"
            label="商品名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="orderTime"
            label="下单时间">
          </el-table-column>
          <el-table-column
            prop="buyerAccount"
            label="买家账号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="paymentMethod"
            label="付款方式">
          </el-table-column>
          <el-table-column
            prop="orderStatus"
            label="订单状态"
            width="180">
          </el-table-column>
          <el-table-column
            prop="operat"
            label="操作">
           <router-link to="/order/user/detail"><span style="color: #0000FF;cursor: pointer;">查看详情</span></router-link>
            &nbsp;&nbsp;
            <span style="color: #ff2951;cursor: pointer;">关闭订单</span>
          </el-table-column>
        </el-table>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props:{
      listArr:{
        type:Array,
        value:[]
      }
    },
    data() {
      return {

      }
    },
    methods: {
      
    }
  }
</script>

<style>
</style>
