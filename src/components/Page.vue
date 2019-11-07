<template>
  <div id="page" class="box_block">
       <!-- 分页组件 -->
       <el-pagination
         @current-change="handleCurrentChange"
         @size-change="handleSizeChange"
         :current-page="currentPage"
         :page-sizes="[5, 10, 20]"
         :page-size="10"
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
        currentPage: 1,
        page:10
      }
    },
    methods: {
      handleCurrentChange(e) {
        let obj = {e:e,page:this.page}
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
      },
      // 每页条数切换
      handleSizeChange(e) {
        this.page = e;
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
