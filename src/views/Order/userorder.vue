<template>
  <div id="userOrder">
    <div v-show="shows" class="user_box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane  label="全部订单" name="allOrder">
          <div class="order_component_box">
            <div>
              <!-- 搜索组件 -->
              <Search @childData="getChildVal"/>
            </div>
            <div style="margin: 0 10px;border-top: 1px solid #DBDBDB;">
              <!-- 搜索组件 -->
              <List :listArr="allOrder"/>
            </div>
            <div>
              <!-- 分页组件 -->
              <Page :count="nums" />
            </div>

          </div>
        </el-tab-pane>
        <el-tab-pane label="未支付" name="unpaid">
未支付
        </el-tab-pane>
        <el-tab-pane label="待确认" name="waitConfirm">
待确认
        </el-tab-pane>
        <el-tab-pane label="待运输" name="waitTransport">
待运输
        </el-tab-pane>
        <el-tab-pane label="待收货" name="pendingReceipt">
待收货
        </el-tab-pane>
        <el-tab-pane label="已完成" name="completed">
已完成
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
  import Search from '@/components/order/Search'
  import List from '@/components/order/List'
  import Page from '@/components/Page'
  import {request} from '@/network/request'
  export default {
    name: 'userOrder',
    data() {
      return {
        shows: true,
        activeName:'allOrder',
        // 全部订单
        allOrder: [],
        nums:0
      }
    },
    mounted() {
      request({
        url:'/admin/orders/orderlist',
        method:'post',
        data:{}
      }).then(res => {
        if(res.error == 0) {
          this.nums = res.data.nums;
          this.allOrder = res.data.list;
        }else {
          alert(res.message)
        }
      })
    },
    components: {
      Search,
      List,
      Page
    },
    methods: {
      // 获得搜索返回的内容
      getChildVal(val) {
        this.allOrder = val.data;
        this.nums = val.nums;
      },
      handleClick(e) {
        //console.log(e)
      },
      // 接受页数返回
      userorder(val) {
      }

    },
    // 第几页
    // pages(val) {
    //   console.log(val)
    // },
    // 监控路由发生改变事件
    watch:{
      $route(e){
        if(e.fullPath == '/order/user'){
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
