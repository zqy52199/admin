<template>
  <div id="merorder">
<div v-show="shows" class="user_box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部订单" name="allOrder">
          <div class="order_component_box">
            <div>
              <!-- 搜索组件 -->
              <MerorderSearch @childData="parentData" />
            </div>
            <div style="margin: 0 10px;border-top: 1px solid #DBDBDB;">
              <!-- 搜索组件 -->
              <MerorderList :listArr="merchantOrder" />
            </div>
            <div>
              <!-- 分页组件 -->
              <Page />
            </div>

          </div>
        </el-tab-pane>
        <el-tab-pane label="未接单" name="missedOrder">
未支付
        </el-tab-pane>
        <el-tab-pane label="已接单" name="orderReceived">
待确认
        </el-tab-pane>
        <el-tab-pane label="已完成" name="completed">
待运输
        </el-tab-pane>
        <el-tab-pane label="已结单" name="listed">
待收货
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-show="!shows">
      <!-- 视口占位 -->
      <router-view /></router-view>
    </div>
  </div>
</template>

<script>
  import MerorderSearch from '@/components/order/merorderSearch'
  import MerorderList from '@/components/order/merorderList'
  import Page from '@/components/Page'
  import {request} from '@/network/request'
  export default {
    name: 'merorder',
    data() {
      return {
        //导航显示
        shows:true,
        // 菜单选中
        activeName:'allOrder',
        // 全部订单
        merchantOrder: [],

        nums:0

      }
    },
    components: {
      MerorderSearch,
      MerorderList,
      Page
    },
    methods: {
      // 接受搜索返回值
      parentData(val) {

        this.merchantOrder = val.data.list;
        this.nums = val.data.nums;
      },
      handleClick(e) {
        //console.log(e)
      }
    },
    created() {
      request({
        url: '/admin/orders/merchantorder',
        method: 'post',
        data:{}
      }).then(res => {
        if(res.error == 0) {
          this.merchantOrder = res.data.list;
          this.nums = res.data.nums;
        }else {
          alert(res.message)
        }
       
      });
    },
    // mounted() {

    // },

    watch:{
      $route(e){
        if(e.fullPath == '/order/merorder'){
          this.shows = true;
        }else{
          this.shows = false;
        }

      }
    }
  }
</script>

<style>
</style>
