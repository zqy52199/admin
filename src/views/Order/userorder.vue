<template>
  <div id="userOrder">
    <div v-show="shows" class="user_box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane  label="全部订单" name="allOrder">
          <div class="order_component_box">
            <div>
              <!-- 搜索组件 -->
              <Search />
            </div>
            <div style="margin: 0 10px;border-top: 1px solid #DBDBDB;">
              <!-- 搜索组件 -->
              <List :listArr="allOrder"/>
            </div>
            <div>
              <!-- 分页组件 -->
              <Page />
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
  export default {
    name: 'userOrder',
    data() {
      return {
        shows: true,
        activeName:'allOrder',
        // 全部订单
        allOrder: [{
          orderId: '订单编号',
          shopName: '商品名称',
          // 订单状态  未支付--1  待确认--2  待运输--3  待收货--4  已完成--5
          orderStatus: '订单状态',
          orderTime: '下单时间',
          // 买家账号
          buyerAccount: '买家账号',
          // 付款方式  本地门店支付--0  国际汇款--1  中国国内汇款--2  西联汇款--3
          paymentMethod: '付款方式'
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
