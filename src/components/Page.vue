<template>
  <div id="page" class="box_block">
       <!-- 分页组件 -->
       <el-pagination
         @current-change="handleCurrentChange"
         @size-change="handleSizeChange"
         :current-page="currentPage"
         :page-sizes="[5, 10, 20]"
         :page-size="count2"
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
      },
      count2:{
        type:Number,
        default:10
      }
    },
    data() {
      return {
        currentPage: 1,
        page1:10
      }
    },
    methods: {
      handleCurrentChange(e) {
        let obj = {e:e,page:this.page1}
         //this.$emit('userorder',obj);
         // 基本资料
         this.$emit('table',obj);
          // 商家推广
         this.$emit('merchant',obj);
         // 审核记录
         //this.$emit('audit',obj);
         // 提现申请
         this.$emit('withdraw',obj);
          // 推广业绩
         this.$emit('performance',obj);
      },
      // 每页条数切换
      handleSizeChange(e) {

        this.page1 = e;
        this.currentPage = 1;
        let obj = {e:1,page:e}
        //this.$emit('userorder',obj);
        // 基本资料
        this.$emit('table',obj);
         // 商家推广
        this.$emit('merchant',obj);
        // 审核记录
        //this.$emit('audit',obj);
        // 提现申请
        this.$emit('withdraw',obj);
         // 推广业绩
        this.$emit('performance',obj);
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
