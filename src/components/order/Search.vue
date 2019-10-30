<template>
  <div id="search">
    <el-form ref="form" :model="formData" label-width="80px">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-form-item label="订单编号"><el-input v-model="formData.orderId" placeholder="请输入订单编号"></el-input></el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <el-form-item label="商品名称"><el-input  v-model="formData.shopName" placeholder="请输入商品名称"></el-input></el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <el-form-item label="买家账号"><el-input  v-model="formData.buyerAccount" placeholder="请输入买家账号"></el-input></el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <el-form-item label="订单状态">
              <el-select v-model="formData.orderStatus" placeholder="请选择订单状态">
                <el-option label="未支付" value="1"></el-option>
                <el-option label="待确认" value="2"></el-option>
                <el-option label="待运输" value="3"></el-option>
                <el-option label="待收货" value="4"></el-option>
                <el-option label="已完成" value="5"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <el-form-item label="付款方式">
              <el-select class="row_input" v-model="formData.paymentMethod" placeholder="请选择付款方式">
                <el-option label="本地门店支付" value="0"></el-option>
                <el-option label="国际汇款" value="1"></el-option>
                <el-option label="中国国内汇款" value="2"></el-option>
                <el-option label="西联汇款" value="3"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="grid-content">
            <el-form-item label="下单时间">
              <el-date-picker class="row_input" v-model="formData.startOrderTime" align="right" type="date" placeholder="开始日期" :picker-options="pickerOptions"></el-date-picker>
              -
              <el-date-picker class="row_input" v-model="formData.endOrderTime" align="right" type="date" placeholder="结束日期" :picker-options="pickerOptions"></el-date-picker>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="9">
          <div style="float: right;margin-right: 15px;">
            <el-form-item>
              <el-button type="primary" size='small' @click="onSubmit">查询</el-button>
              <el-button type="warning" size='small' native-type="reset">重置</el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      formData: {
        orderId: '',
        shopName: '',
        // 订单状态  未支付--1  待确认--2  待运输--3  待收货--4  已完成--5
        orderStatus: '',
        startOrderTime: '',
        endOrderTime: '',
        // 买家账号
        buyerAccount: '',
        // 付款方式  本地门店支付--0  国际汇款--1  中国国内汇款--2  西联汇款--3
        paymentMethod: ''
      }
    };
  },
  methods: {
    onSubmit(e) {
      console.log(e)
    }
  }
};
</script>

<style>
  #search .row_input {
    width: 150px;
  }
</style>
