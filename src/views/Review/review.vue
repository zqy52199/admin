<template>
  <div id="review">
    <div v-if="shows" class="contaiter_box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label=" 全部 " name="tableData">
          <!-- 头部搜索组件 -->
          <div>
            <Search />
          </div>
          <!-- 列表组件 -->
          <div>
            <List :listArr="listArr" />
          </div>
          <!-- 分页组件 -->
          <div>
            <Page />
          </div>
        </el-tab-pane>
        <el-tab-pane label="商家资质审核" name="merchantInfo">
          <!-- 头部搜索组件 -->
          <div>
            <Search />
          </div>
          <!-- 列表组件 -->
          <div>
            <List :listArr="listArr" />
          </div>
          <!-- 分页组件 -->
          <div>
            <Page />
          </div>
        </el-tab-pane>
        <el-tab-pane label="商家发布审核" name="auditRecord">
          <!-- 头部搜索组件 -->
          <div>
            <Search />
          </div>
          <!-- 列表组件 -->
          <div>
            <List :listArr="listArr" />
          </div>
          <!-- 分页组件 -->
          <div>
            <Page />
          </div>
        </el-tab-pane>
        <el-tab-pane label="新增分类审核" name="withdraw">
          <!-- 头部搜索组件 -->
          <div>
            <Search />
          </div>
          <!-- 列表组件 -->
          <div>
            <List :listArr="listArr" />
          </div>
          <!-- 分页组件 -->
          <div>
            <Page />
          </div>
        </el-tab-pane>
        <el-tab-pane label="商家货款审核" name="performance">
          <!-- 头部搜索组件 -->
          <div>
            <Search />
          </div>
          <!-- 列表组件 -->
          <div>
            <List :listArr="listArr" />
          </div>
          <!-- 分页组件 -->
          <div>
            <Page />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-if="!shows">
      <!-- 占位 -->
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
  import Search from '@/components/review/Search';
  import List from '@/components/review/List';
  import Page from '@/components/Page';
  export default {
    name:'review',
    data() {
      return {
        shows:true,
        activeName:'tableData',
        listArr: [{
          menberAccount:'商家账号',
          shopName:'商品名称',
          orderStatus:'审核状态',
          applicationTime:'申请时间',
          // 审核状态  待审核--1  已拒绝--2  已通过--2
          orderType:'1'
        },{
          menberAccount:'商家账号',
          shopName:'商品名称',
          orderStatus:'审核状态',
          applicationTime:'申请时间',
          // 审核状态  待审核--1  已拒绝--2  已通过--2
          orderType:'2'
        },{
          menberAccount:'商家账号',
          shopName:'商品名称',
          orderStatus:'审核状态',
          applicationTime:'申请时间',
          // 审核状态  待审核--1  已拒绝--2  已通过--2
          orderType:'3'
        }]
      }
    },
    components: {
      Search,
      List,
      Page
    },
    methods: {
      handleClick(e) {
        //console.log(e)
      }
    },
    watch:{
      $route(e){
        if(e.fullPath == '/review/reviewdetail'){
          this.shows = false;
        }else{
          this.shows = true;
        }

      }
    }
  }
</script>

<style>
</style>
