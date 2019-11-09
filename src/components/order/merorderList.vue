<template>
  <div id="list">
    <el-table
          :data="listArr"
          style="width: 100%">
          <el-table-column
            prop="OrderId"
            width="100"
            label="订单编号">
          </el-table-column>
          <el-table-column
            prop="MemberName"
            width="300"
            label="商家名称">
          </el-table-column>
          <el-table-column
            prop="confirmtime"
            label="派单日期">
          </el-table-column>
          <el-table-column
            prop="order_status"
            label="订单状态">
            <template slot-scope="props">
               <span v-if="props.row.order_status < 4">未接单</span>
               <span v-else-if="props.row.order_status < 5">已接单</span>
               <span v-else-if="props.row.order_status < 8">已完成</span>
               <span v-else>已结单</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
           <template slot-scope="props" >
              <router-link :to="{path:'/order/merorder/merchant', query:{id:props.row.OId}}"><span style="color: #2962ff;cursor: pointer;">查看详情</span></router-link>
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
        met:''
      }
    },
    methods: {

    }
  }
</script>

<style>
  #list .el-table .cell {
    text-align: center;
  }

</style>
