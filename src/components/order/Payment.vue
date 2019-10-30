<template>
  <div id="payment">

    <el-form ref="form" :model="payment" >
      <el-form-item label="货款状态:">
        <span>未付款</span>
      </el-form-item>
      <el-form-item label="店铺名称:">
        <el-select v-model="payment.shopName">
          <el-option label="店铺名称第一公司" value="1"></el-option>
          <el-option label="店铺名称第二公司" value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="发货款支付:">
        <el-input :value="payment.price"></el-input>
        <el-select class="select" disabled v-model="payment.money">
          <el-option label="人民币" value="1"></el-option>
          <el-option label="美元" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="支付方式:">
        <el-select disabled v-model="payment.method" placeholder="选择第三方合作公司">
          <el-option label="银行转账" value="3"></el-option>
          <el-option label="支付宝" value="2"></el-option>
          <el-option label="微信" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="汇款姓名:">
        <el-input disabled :value="payment.name"></el-input>
      </el-form-item>
      <el-form-item label="汇款账号:">
        <el-input disabled :value="payment.accountNumber"></el-input>
      </el-form-item>
      <el-form-item label="申请凭证:">
        <div style="width: 250px;height: 120px;border: 1px solid #DBDBDB;display: inline-block;">
          <img src="" alt="">
        </div>
      </el-form-item>
      <el-form-item label="支付凭证:">
        <div style="width: 250px;height: 120px;border: 1px solid #DBDBDB;float: left;">
          <img :src="imgUrl" style="width: 100%;height: 100%;" alt="">
        </div>
        <input type="file" style="display: none;" @change="uploadImg($event)" ref="upload" >
        <span style="float: left;margin-left: 10px;">
          <el-button @click="cliBtn" size='mini' type="primary">上传凭证</el-button>
        </span>
      </el-form-item>
      <el-form-item label="状态:">
        <el-radio-group style="font-size: 12px;" v-model="payment.first">
            <el-radio label="0">同意</el-radio>
            <el-radio label="1">拒绝</el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item label="拒绝理由:">
        <el-input
          style="width: 300px;"
          type="textarea"
          :rows="5"
          placeholder="请输入内容"
          v-model="payment.textarea">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="margin-left: 80px;" size='mini' type="primary">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'payment',
    data() {
      return {
        payment: {
          shopName: '1',
          price: '200',
          money:'2',
          method: '2',
          accountNumber :'322446235452',
          name: 'zqy',
          first:'0',
          textarea:''
        },
        imgUrl: ''
      }
    },
    methods: {
           cliBtn() {
             this.$refs.upload.click();
           },
           uploadImg(e) {
              var file = e.target.files[0]
                     var reader = new FileReader()
                     var that = this
                     reader.readAsDataURL(file)
                     reader.onload = function(e) {
                       that.imgUrl = this.result
                     }
           }
    }
  }
</script>

<style>
  #payment .el-input {
    width: 200px;
  }

  #payment .select .el-input {
    width: 100px;
  }

  #payment .el-form .el-form-item__label {
    min-width:80px;
  }

  #payment .el-radio__label {
    font-size: 12px;
  }
</style>
