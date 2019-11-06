<template>
  <div id="page" class="box_block">
       <!-- 分页组件 -->
       <el-pagination
         @current-change="handleCurrentChange"
         :current-page="currentPage"
         :page-sizes="[10]"
         layout="total, sizes, prev, pager, next, jumper"
         :total="count">
       </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'page',
    props:{
      count:{
        type:Number,
        default:10
      }
    },
    data() {
      return {
        currentPage: 1
      }
    },
    methods: {
      handleCurrentChange(e) {
         this.$emit('userorder',e);
         // 基本资料
         this.$emit('table',e);
          // 商家推广
         this.$emit('merchant',e);
         // 审核记录
         this.$emit('audit',e);
         // 提现申请
         this.$emit('withdraw',e);
          // 推广业绩
         this.$emit('performance',e);
      }
    }
  }
</script>

<style>
  .box_block {
     margin: 20px 0;
     text-align: center;
     }
</style>
