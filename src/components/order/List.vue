<template>
  <div id="list">
    <el-table
          :data="listArr"
          style="width: 100%">
          <el-table-column
            prop="OrderId"
            label="订单编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="goodsname"
            label="商品名称"
            width="180">
            <!-- <template slot-scope="props">
              <span v-if="props.row.goodsname">{{props.row.goodsname[0]}}</span>
              <span v-else style="color: red;">·····</span>
            </template> -->
          </el-table-column>
          <el-table-column
            prop="AddTime"
            label="下单时间">
          </el-table-column>
          <el-table-column
            prop="UserName"
            label="买家账号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="pay_ment"
            label="付款方式">
            <template slot-scope="props">
              <span v-if="props.row.pay_ment == 0">门店支付</span>
              <span v-if="props.row.pay_ment == 1">国际汇款</span>
              <span v-if="props.row.pay_ment == 2">中国国内汇款</span>
              <span v-if="props.row.pay_ment == 3">西联汇款</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="Status"
            label="订单状态"
            width="120">
            <template slot-scope="props">
              <span v-if="props.row.Status < 1">未支付</span>
              <span v-else-if="props.row.Status < 4">待确认</span>
              <span v-else-if="props.row.Status < 6">待运输</span>
              <span v-else-if="props.row.Status < 8">待收货</span>
              <span v-else>已完成</span>
            </template>
          </el-table-column>
          <el-table-column
            width="180"
            label="操作">
            <template slot-scope="props" >
              <router-link :to="{path:'/order/user/detail', query:{id:props.row.OId}}"><span style="color: #2962ff;cursor: pointer;">查看详情</span></router-link>
               &nbsp;&nbsp;
               <span style="color: #ff2150;cursor: pointer;">关闭订单</span>
            </template>

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

