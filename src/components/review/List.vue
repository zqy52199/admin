<template>
  <div id="list">
    <el-table
          :data="listArr"
          style="width: 100%">
          <el-table-column
            prop="menberAccount"
            label="商家账号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="shopName"
            label="商品名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="orderStatus"
            label="审核类别">
          </el-table-column>
          <el-table-column
            prop="applicationTime"
            label="申请时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="orderType"
            label="审核状态">
              <template scope="scope">
                <span v-if="scope.row.orderType==1">待审核</span>
                <span v-if="scope.row.orderType==2">已拒绝</span>
                <span style="color: #0BB908;" v-if="scope.row.orderType==3">已通过</span>
              </template>
          </el-table-column>
          <el-table-column
            prop="operat"
            label="操作">
           <router-link to="/review/reviewdetail"><span style="color: #0000FF;cursor: pointer;">查看详情</span></router-link>

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
