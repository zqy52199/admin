<template>
  <div id="page" class="box_block">
       <!-- 分页组件 -->
       <el-pagination
         @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
         :current-page="currentPage"
         :page-sizes="[10]"
         layout="total, sizes, prev, pager, next, jumper"
         :total="100">
       </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'page',
    data() {
      return {
        currentPage: 1
      }
    },
    methods: {
      handleSizeChange(e) {
        //console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(e) {
        // console.log(`当前页: ${val}`);
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
