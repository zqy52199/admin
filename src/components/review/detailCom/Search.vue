<template>
  <div id="search">
    <el-form ref="form" :model="formData" label-width="80px">
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-form-item label="商家账号:"><el-input  style="width: 150px;" v-model="formData.menberAccount" placeholder="请输入商家账号"></el-input></el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <el-form-item label="订单编号:"><el-input  style="width: 150px;"  v-model="formData.shopName" placeholder="请输入商品名称"></el-input></el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <el-form-item label="商家名称:"><el-input  style="width: 150px;"  v-model="formData.shopName" placeholder="请输入商品名称"></el-input></el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content" >
            <el-form-item label="申请类型:">
              <el-select style="width: 150px;" v-model="formData.orderStatus" placeholder="请选择审核状态">
                <el-option label="请选择" value=""></el-option>
                <el-option label="待审核" value="1"></el-option>
                <el-option label="已拒绝" value="2"></el-option>
                <el-option label="已通过" value="3"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content" >
            <el-form-item label="审核状态:">
              <el-select style="width: 150px;" v-model="formData.orderStatus" placeholder="请选择审核状态">
                <el-option label="请选择" value=""></el-option>
                <el-option label="待审核" value="1"></el-option>
                <el-option label="已拒绝" value="2"></el-option>
                <el-option label="已通过" value="3"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="6" style="float: right;margin-right: 15px;">
          <div >
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
        formData: {
          // 商家名称
          shopName: '',
          // 订单状态  待审核--1  已拒绝--2  已通过--3
          orderStatus: '',
          endOrderTime: '',
          // 商家账号
          menberAccount: '',
        }
      }
    },
    methods: {
      onSubmit(e) {
        console.log(e)
      }
    }
  }
</script>

<style>
  #search {
    border-bottom: 1px solid #DBDBDB;
    margin-bottom: 10px;
  }
  #search .el-input__inner {
    height: 30px;
  }
</style>
