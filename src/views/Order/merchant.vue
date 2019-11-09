<template>
  <div id="detail">
    <div class="detail_head">
      <el-row>
        <el-col :span="6"><div>当前订单状态：未接单</div></el-col>
        <el-col :span="6"><div>当前环节处理人：商家</div></el-col>
        <el-col :span="12"><div>此订单已有-1天05:25:56-未操作</div></el-col>
      </el-row>
    </div>
    <div class="detail_box">
      <div class="box_order">
        <el-row>
          <el-col :span="24"><h3>订单信息</h3></el-col>
          <el-col :span="6"><div>订单编号：{{orderInfo.OrderId}}</div></el-col>
          <el-col :span="6"><div>下单时间：{{orderInfo.AddTime}}</div></el-col>
          <el-col :span="6"><div>运输方式：{{orderInfo.transport}}</div></el-col>
          <el-col :span="6"><div>清关方式：{{orderInfo.Custom}}</div></el-col>
          <el-col :span="6"><div>运货方式：{{orderInfo.OrderId}}</div></el-col>
          <el-col :span="6"><div>运输计费方式：{{orderInfo.OrderId}}</div></el-col>
          <el-col :span="6"><div>付款方式：{{orderInfo.pay_ment}}</div></el-col>
          <el-col :span="6"><div>运输费用：{{orderInfo.OrderId}}</div></el-col>
          <el-col :span="24">
            <div class="goods_list">
              <div class="goods_list_head">
                <el-col :span="6"><div>商品信息</div></el-col>
                <el-col :span="5"><div>规格</div></el-col>
                <el-col :span="3"><div>单价(￥)</div></el-col>
                <el-col :span="3"><div>数量</div></el-col>
                <el-col :span="3"><div>折扣</div></el-col>
                <el-col :span="4"><div>商品总价(￥)</div></el-col>
              </div>
             <!-- <div class="goods_list_content">
                <div class="goods_list_row" v-for="(item, index) in goodsInfo" :key="index">
                  <el-col :span="6">
                    <el-col :span="6">
                      {{item.goodsImg}}
                    </el-col>
                    <el-col style="text-align: left;padding: 0 5px;" :span="18">
                      <div>{{item.goodsName}}</div>
                      <div>{{item.shopName}}</div>
                    </el-col>
                  </el-col>
                  <el-col :span="5"><div v-for="towItem in item.specification">{{towItem.name}}:{{towItem.value}}</div></el-col>
                  <el-col :span="3"><div>{{item.price}}</div></el-col>
                  <el-col :span="3"><div>{{item.goodsNumber}}</div></el-col>
                  <el-col :span="3"><div>{{item.discount}}折</div></el-col>
                  <el-col :span="4"><div>{{item.goodsSunPrice}}</div></el-col>
                </div>
              </div> -->
            </div>
          </el-col>
          <el-col style="margin: 10px 0;" :span="24"><div>当日汇款：<span class="red">123123</span>  美元&nbsp;&nbsp;&nbsp;&nbsp;应付金额：人民币(含运费)：<span class="red">￥ 123123</span> &nbsp;&nbsp;|&nbsp;&nbsp; 美元(含运费)：<span class="red">$ 123123</span></div></el-col>
          <el-col :span="24">
            <span>用户汇款凭证：</span>
            <span>图片1234123123123123123</span>
          </el-col>
        </el-row>
      </div>
      <div class="br"></div>
      <div class="detail_box_order">
        <h3>商家操作记录</h3>
        <!-- <div class="order">
          <el-table
              :data="orderInfo"
              style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <div class="neirong">
                      <div>
                        <div class="fonwei">动作</div>
                        <div>系统派单</div>
                        <div>立即接单</div>
                        <div>完成订单</div>
                        <div>首款申请</div>
                        <div>发货款申请</div>
                        <div>尾款申请</div>
                      </div>
                      <div>
                        <div class="fonwei">时间</div>
                        <div>2019/05/05 15:15:15</div>
                        <div>2019/05/05 15:15:15</div>
                        <div>2019/05/05 15:15:15</div>
                        <div>2019/05/05 15:15:15</div>
                        <div>2019/05/05 15:15:15</div>
                        <div>2019/05/05 15:15:15</div>
                      </div>

                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="商家名称"
                prop="merchantname">
              </el-table-column>
              <el-table-column
                label="商家账号"
                prop="merchantnum">
              </el-table-column>
              <el-table-column
                label="公司电话"
                prop="merchanttel">
              </el-table-column>
              <el-table-column
                label="手机号码"
                prop="merchantphone">
              </el-table-column>
              <el-table-column
                label="当前状态"
                prop="merchantstatus">
              </el-table-column>
            </el-table>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import {request} from '@/network/request'
  export default {
    name: 'detail',
    data() {
      return {
        goodsInfo:[],
        memberInfo:[],
        orderInfo:{}
      }
    },
    methods: {

    },
	mounted() {
		const oid = this.$route.query.id;
    request({
      url: '/admin/orders/merchantorderinfo',
      method: 'post',
      data: {
        oid
      }
    }).then(res => {
      if (res.error == 0) {
       console.log(res.data)
       this.goodsInfo = res.data.goodsinfo;
       this.memberInfo = res.data.memberinfo;
       this.orderInfo = res.data.orderinfo;
      } else {
        alert(res.message);
      }
    });
	}

  }
</script>

<style>
  .red {
    color: red;
    font-size: 15px;
    font-weight: 600;
  }
  .br {
    height: 10px;
    width: 100%;
    border-bottom: 2px dashed red;
    border-top: 2px dashed blue;
    margin-bottom: 10px;
  }
  #detail .detail_head {
    background: #22C838;
    border-radius: 5px;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    border: 1px solid red;
  }

  #detail .detail_box {
    margin-top: 20px;
    border: 1px solid blue;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
  }

  #detail .box_user {
    line-height: 25px;
    border-bottom: 2px greenyellow dashed ;
    padding-bottom: 10px;
  }

  #detail .box_order {
    padding: 15px 0;
    line-height: 25px;
  }

  #detail .box_user h3 {
    font-weight: 600;
  }

  #detail .goods_list {
    border: 1px solid deeppink;
    border-radius: 5px;
  }

  #detail .goods_list_head {
    background: #22C838;
    text-align: center;
    line-height: 30px;
    overflow: hidden;
  }

  #detail .goods_list_content {
    text-align: center;
    overflow: hidden;
    min-height: 100px;
    line-height: 20px;
  }

  #detail .goods_list_row {
    overflow: hidden;
    padding: 10px;
    border-bottom: 1px solid #DBDBDB;
  }
  .neirong{
        width: 50%;
        display: flex;
        justify-content: space-around;
  }
  .neirong .fonwei{
        font-weight: bold;
  }
</style>
