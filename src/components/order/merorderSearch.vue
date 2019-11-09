<template>
  <div id="search">
    <div class="search_box">
      <el-form ref="form" :model="formData" label-width="80px">
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-form-item label="订单编号:"><el-input v-model="formData.ordersn" placeholder="请输入订单编号"></el-input></el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-form-item label="商家名称:"><el-input v-model="formData.membername" placeholder="请输入商品名称"></el-input></el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-form-item label="订单状态:">
                <el-select v-model="formData.status" placeholder="请选择订单状态">
                  <el-option label="请选择" value=""></el-option>
                  <el-option label="未接单" value="a"></el-option>
                  <el-option label="已接单" value="b"></el-option>
                  <el-option label="已完成" value="c"></el-option>
                  <el-option label="已结单" value="d"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content">
              <el-form-item label="下单时间:">
                <el-date-picker class="row_input" v-model="formData.start" align="right" type="date" placeholder="开始日期" :picker-options="pickerOptions"></el-date-picker>
                -
                <el-date-picker class="row_input" v-model="formData.end" align="right" type="date" placeholder="结束日期" :picker-options="pickerOptions"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="9">
            <div style="float: right;margin-right: 15px;">
              <el-form-item>
                <el-button type="primary" size="mini" @click="onSubmit">查询</el-button>
                <el-button type="warning" size="mini" @click="onReset" native-type="reset">重置</el-button>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import { request } from '@/network/request';
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
           "ordersn":"",          //#订单编号
           "membername":"",       //#商家名称
           "status":"d",          //#商家状态 a.未接单 b.已接单 c.已完成 d.已结单
           "start":"",            //#派单起始时间
           "end":"",              //#派单截止时间
      }
    };
  },
  methods: {
    onSubmit(e) {
      // 时间转换成时间戳
      let data = this.formData;
      data.end = this.timeDate(this.formData.end);
      data.start = this.timeDate(this.formData.start);

      request({
        url: '/admin/orders/merchantorder',
        method: 'post',
        data
      }).then(res => {
        this.$emit('childData', { data: res.data});
      });
    },
    // 重置搜索内容
    onReset() {
      this.formData = {
           "ordersn":"",          //#订单编号
           "membername":"",       //#商家名称
           "status":"d",          //#商家状态 a.未接单 b.已接单 c.已完成 d.已结单
           "start":"",            //#派单起始时间
           "end":"",              //#派单截止时间
      }
      request({
        url: '/admin/orders/orderlist',
        method: 'post',
        data: {}
      }).then(res => {
        this.$emit('childData', { data: res.data.list, nums: res.data.nums });
      });
    },
    // 时间转换成时间戳
    timeDate(time) {
      const d = new Date(time);
      return d.getTime() / 1000;
    }
  }
};
</script>

<style>
#search .row_input {
  width: 150px;
}

#search .el-input__inner {
  height: 30px;
  width: 150px;
}
</style>
