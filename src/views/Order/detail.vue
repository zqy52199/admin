<template>
  <div id="detail">
    <div class="detail_head">
      <el-row>
        <el-col :span="6">
          <div>
            当前订单状态：
            <span style="color: blue;">{{orderInfo.Status}}</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            当前环节处理人：
            <span style="color: blue;" v-if="orderInfo.Status == 0">用户</span>
            <span style="color: blue;" v-else-if="orderInfo.Status == 1">用户</span>
            <span style="color: blue;" v-else-if="orderInfo.Status == 2">客服</span>
            <span style="color: blue;" v-else-if="orderInfo.Status == 3">财务</span>
            <span style="color: blue;" v-else-if="orderInfo.Status == 4">商家</span>
            <span style="color: blue;" v-else-if="orderInfo.Status == 5">商家</span>
            <span style="color: blue;" v-else-if="orderInfo.Status == 6">平台收货验货</span>
            <span style="color: blue;" v-else-if="orderInfo.Status == 7">运输</span>
            <span style="color: blue;" v-else-if="orderInfo.Status == 8">用户</span>
          </div>
        </el-col>
        <el-col :span="12"><div>此订单已有-106565-未操作</div></el-col>
      </el-row>
    </div>
    <div class="detail_box">
      <div class="box_user">
        <el-row>
          <el-col :span="24"><h3><img class="icon_head" src="@/assets/twoIcon/buyImg.png" alt="">买家信息</h3></el-col>
          <el-col :span="6"><div>订单编号：{{orderInfo.OrderId}}</div></el-col>
          <el-col :span="6"><div>收货人：{{addressInfo.Name}}</div></el-col>
          <el-col :span="6"><div>手机号码：{{addressInfo.Mobile}}</div></el-col>
          <el-col :span="6"><div>固定电话：{{addressInfo.Phome}}</div></el-col>
          <el-col :span="24"><div>收货地址：{{addressInfo.Address}}</div></el-col>
        </el-row>
      </div>
      <div class="box_order">
        <el-row>
          <el-col :span="24">
            <h3>
              <img class="icon_head" src="@/assets/twoIcon/orderMsg.png" alt="" />
              订单信息
            </h3>
          </el-col>
          <el-col :span="6">
            <div>订单编号：{{ orderInfo.OrderId }}</div>
          </el-col>
          <el-col :span="6">
            <div>下单时间：{{ orderInfo.AddTime }}</div>
          </el-col>
          <el-col :span="6">
            <div>运输方式：{{ orderInfo.transport == 1 ? '鹰洋代理' : '自行运输' }}</div>
          </el-col>
          <el-col :span="6">
            <div>清关方式：{{ orderInfo.Custom == 1 ? '鹰洋代理' : '自行清关' }}</div>
          </el-col>
          <el-col :span="6">
            <div>运货方式：{{ orderInfo.transport == 1 ? '海运' : '空运' }}</div>
          </el-col>
          <el-col :span="6">
            <div>运输计费方式：{{ orderInfo.transport == 1 ? '海运' : '空运' }}</div>
          </el-col>
          <el-col :span="6">
            <div>
              付款方式：
              <span v-if="orderInfo.pay_ment == 0">门店支付</span>
              <span v-if="orderInfo.pay_ment == 1">国际汇款</span>
              <span v-if="orderInfo.pay_ment == 2">中国国内汇款</span>
              <span v-if="orderInfo.pay_ment == 3">西联汇款</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div>运输费用：{{ (sum(orderInfo.priceT) - sum(orderInfo.Price_z)).toFixed(2) }}</div>
          </el-col>
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
              <div class="goods_list_content">
                <div class="goods_list_row" v-for="(item, index) in goodsInfo" :key="index">
                  <el-col :span="6">
                    <el-col :span="6">
                      <img :src="item.img_china" alt="">
                    </el-col>
                    <el-col style="text-align: left;padding: 0 5px;" :span="18">
                      <div>{{ item.Name_lang_1 }}</div>
                      <div>{{ item.MemberName }}</div>
                    </el-col>
                  </el-col>
                  <el-col :span="5">
                    <div v-for="towItem in item.goodsattr">{{ towItem.sizeName }}:{{ towItem.sizeValue }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div>{{ sum(item.price) }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div>{{ item.number }}</div>
                  </el-col>
                  <el-col :span="3">
                    <div>{{ sum(item.discount) == 1.0 ? '无' : sum(item.discount) + '折' }}</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="red">{{ sum(parseFloat(item.price) * item.number) }}</div>
                  </el-col>
                </div>
              </div>
            </div>
          </el-col>
          <el-col style="margin: 10px 0;" :span="24">
            <div>
              当日汇款：
              <span class="red">{{ orderInfo.rate }}</span>
              美元&nbsp;&nbsp;&nbsp;&nbsp;应付金额：人民币(含运费)：
              <span class="red">￥ {{ sum(orderInfo.priceT * orderInfo.rate) }}</span>
              &nbsp;&nbsp;|&nbsp;&nbsp; 美元(含运费)：
              <span class="red">$ {{ sum(orderInfo.priceT) }}</span>
            </div>
          </el-col>
          <el-col :span="24">
            <span>用户汇款凭证：</span>
            <span>
              <img :src="orderInfo.order_img" alt="">
            </span>
          </el-col>
        </el-row>
      </div>
      <div class="br"></div>
      <div class="detail_box_order">
        <h3>
          <img class="icon_head" src="@/assets/twoIcon/order.png" alt="" />
          订单流程
        </h3>
        <div class="order">
          <el-table :data="orderArr" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <div v-if="props.$index === 0" class="customerService">
                  <el-form ref="form" :model="customerService" label-width="80px">
                    <el-form-item label="转交部门:">
                      <el-select v-model="customerService.toDepartment" placeholder="转交部门">
                        <el-option label="中国财务" value="2"></el-option>
                        <el-option label="墨西哥分公司财务" value="3"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="备注:"><el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="customerService.textarea"></el-input></el-form-item>

                    <el-form-item>
                      <el-button style="margin-left: 80px;" size="mini" type="primary">提交</el-button>
                      <el-button size="mini" type="primary">关闭</el-button>
                    </el-form-item>
                  </el-form>
                </div>
                <div v-if="props.$index === 1" class="customerService1">
                  <el-form ref="form" :model="receipt">
                    <el-form-item label="应付金额:">
                      <el-input style="width: 150px;" v-model="receipt.usd"></el-input>
                      /美元 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <el-input style="width: 150px;" v-model="receipt.rmb"></el-input>
                      /人民币
                    </el-form-item>

                    <el-form-item label="收款状态:">
                      <el-radio-group v-model="receipt.che">
                        <el-radio label="1">已到账</el-radio>
                        <el-radio label="2">未到账</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="选择第三方合作公司:">
                      <el-select v-model="receipt.cooperation" placeholder="选择第三方合作公司">
                        <el-option label="第一公司" value="2"></el-option>
                        <el-option label="第二公司" value="1"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item>
                      <el-button style="margin-left: 80px;" size="mini" type="primary">提交</el-button>
                      <el-button size="mini" type="primary">关闭</el-button>
                    </el-form-item>
                  </el-form>
                </div>
                <div v-if="props.$index === 2" class="customerService2"><Payment></Payment></div>
                <div v-if="props.$index === 3" class="customerService2"><Payment></Payment></div>
                <div v-if="props.$index === 4" class="customerService3">
                  <el-row>
                    <el-col style="text-align: right;font-size: 12px;" :span="4">送货商家 : &nbsp;</el-col>
                    <el-col :span="16">
                      <div class="font_size12">
                        <span>
                          舒肤佳专卖店
                          <img src="@/assets/twoIcon/gouIcon.png" alt="" />
                          <span class="weishouhuo">未收货</span>
                          <span class="yishouhuo">已收货</span>
                        </span>

                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style="cursor: pointer;">提醒商家发货</span>
                      </div>
                    </el-col>
                  </el-row>
                  <div class="box_print">
                    <el-button v-print="'#prints'" style="float: right;margin-bottom: 10px;" size="mini" type="primary">打印</el-button>
                    <!-- 打印清单内容 -->
                    <div id="prints">
                      <table style="width: 1035px;font-size: 16px;border-collapse:collapse;margin: 10px auto;display: none;">
                        <thead>
                          <tr style="height: 50px;">
                            <td style="text-align: center;border: 1px solid #DBDBDB;width: 100px;">序号</td>
                            <td style="text-align: center;border: 1px solid #DBDBDB;">商品编号</td>
                            <td style="text-align: center;border: 1px solid #DBDBDB;">商品名称</td>
                            <td style="text-align: center;border: 1px solid #DBDBDB;">商家名称</td>
                            <td style="text-align: center;border: 1px solid #DBDBDB;">规格</td>
                            <td style="text-align: center;border: 1px solid #DBDBDB;">数量</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style="height: 50px;">
                            <td style="text-align: center;border: 1px solid #DBDBDB;width: 100px;">1</td>
                            <td style="text-align: center;border: 1px solid #DBDBDB;">123456</td>
                            <td style="text-align: center;border: 1px solid #DBDBDB;">商品名称</td>
                            <td style="text-align: center;border: 1px solid #DBDBDB;">商家名称</td>
                            <td style="text-align: center;border: 1px solid #DBDBDB;">规格</td>
                            <td style="text-align: center;border: 1px solid #DBDBDB;">数量</td>
                          </tr>
                        </tbody>
                      </table>
                      <!-- 打印清单内容end -->
                    </div>
                    <el-table :data="shopPrint" border style="width: 100%;border: 1px solid #DBDBDB;text-align: center;">
                      <el-table-column style="text-align: center;border: 1px solid #DBDBDB;" prop="xu" label="序号" width="83"></el-table-column>
                      <el-table-column prop="goodsNumber" label="商品编号" width="150"></el-table-column>
                      <el-table-column prop="goodsName" width="300" label="商品名称"></el-table-column>
                      <el-table-column prop="shopName" width="200" label="商家名称"></el-table-column>
                      <el-table-column prop="specification" width="150" label="规格"></el-table-column>
                      <el-table-column prop="number" width="150" label="数量"></el-table-column>
                    </el-table>
                  </div>
                  <div style="margin: 0 auto;width: 150px;">
                    <el-button size="mini" type="primary">提交</el-button>
                    <el-button size="mini" type="primary">取消</el-button>
                  </div>
                </div>
                <div v-if="props.$index === 5" class="customerService2"><Payment></Payment></div>
              </template>
            </el-table-column>
            <el-table-column label="流程" prop="Process"></el-table-column>
            <el-table-column label="部门" prop="adminId"></el-table-column>
            <el-table-column label="操作人" prop="adminDepartment"></el-table-column>
            <el-table-column label="操作时间" prop="optime"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Payment from '@/components/order/Payment';
import { request } from '@/network/request';
export default {
  name: 'detail',
  data() {
    return {
      // 商品信息
      goodsInfo: {},
      // 订单信息
      orderInfo: {},
      // 买家信息
      addressInfo: {},
      shopPrint: [
        {
          xu: '1',
          goodsNumber: '商品编号',
          goodsName: '商品名称',
          shopName: '商家名称',
          number: '数量',
          specification: '规格'
        },
        {
          xu: '2',
          goodsNumber: '商品编号',
          goodsName: '商品名称',
          shopName: '商家名称',
          number: '数量',
          specification: '规格'
        },
        {
          xu: '3',
          goodsNumber: '商品编号',
          goodsName: '商品名称',
          shopName: '商家名称',
          number: '数量',
          specification: '规格'
        }
      ],
      // 客服接单
      customerService: {
        // 中国财务--2  墨西哥财务--3
        toDepartment: '2',
        textarea: ''
      },
      // 确认收款
      receipt: {
        usd: '12580',
        rmb: '35966',
        che: '1',
        cooperation: '1'
      },
      goosInfo: [
        {
          specification: [
            {
              name: '颜色',
              value: '粉色'
            },
            {
              name: '型号',
              value: 'V型'
            }
          ],
          goodsImg: '123123123',
          shopName: '商店名称商店名称商店名称商店名称商店名称商店名称',
          goodsName: '商品名称商店名称商店名称商店名称',
          price: '价格',
          goodsNumber: '商品数量',
          goodsSunPrice: '商品总价格',
          discount: '折扣'
        },
        {
          specification: [
            {
              name: '颜色',
              value: '粉色'
            },
            {
              name: '型号',
              value: 'V型'
            }
          ],
          goodsImg: '123123123',
          shopName: '商店名称商店名称商店名称商店名称商店名称商店名称',
          goodsName: '商品名称商店名称商店名称商店名称',
          price: '价格',
          goodsNumber: '商品数量',
          goodsSunPrice: '商品总价格',
          discount: '折扣'
        }
      ],
      orderArr: [
        {
          Process: '客服接单',
          department: '客服',
          operator: '卢会英',
          operatorTime: '2019-10-24 16:00:47'
        },
        {
          Process: '确认收款',
          department: '财务',
          operator: '甄云蕾',
          operatorTime: '2019-10-24 16:00:47'
        },
        {
          Process: '支付首款',
          department: '财务',
          operator: '甄云蕾',
          operatorTime: '2019-10-24 16:00:47'
        },
        {
          Process: '支付发货款',
          department: '财务',
          operator: '甄云蕾',
          operatorTime: '2019-10-24 16:00:47'
        },
        {
          Process: '收货发货',
          department: '财务',
          operator: '甄云蕾',
          operatorTime: '2019-10-24 16:00:47'
        },
        {
          Process: '支付尾款',
          department: '财务',
          operator: '甄云蕾',
          operatorTime: '2019-10-24 16:00:47'
        }
      ]
    };
  },
  components: {
    Payment
  },
  methods: {},
  // 计算属性
  computed: {
    sum() {
      return function(price) {
        return parseFloat(price).toFixed(2);
      };
    }
  },
  mounted() {
    const oid = this.$route.query.id;
    request({
      url: '/admin/orders/getorderinfo',
      method: 'post',
      data: {
        oid
      }
    }).then(res => {
      if (res.error == 0) {
        this.orderInfo = res.data.orderinfo;
        this.addressInfo = res.data.addressinfo;
        this.goodsInfo = res.data.goodsinfo;
        this.orderArr = res.data.orderprocess;
      } else {
        alert(res.message);
      }
    });
  }
};
</script>

<style>
.red {
  color: red;
  font-size: 15px;
  font-weight: 600;
}
.br {
  border-top: 1px dashed #00a1e9;
  margin-bottom: 20px;
}
#detail .detail_head {
  background: #fff6f7;
  border-radius: 5px;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  border: 1px solid red;
}

#detail .detail_box {
  margin-top: 20px;
  border-top: 2px solid #dbdbdb;
  box-sizing: border-box;
  padding: 10px;
}

#detail .box_user {
  line-height: 25px;
  border-bottom: 1px #00a2ea dashed;
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
  border: 1px solid #dbdbdb;
  border-radius: 5px;
}

#detail .goods_list_head {
  background: #fbfaf8;
  text-align: center;
  line-height: 30px;
  border-bottom: 1px solid #dbdbdb;
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
  border-bottom: 1px solid #dbdbdb;
}

#detail .customerService {
  margin: 0 auto;
  width: 400px;
}

#detail .customerService1 {
  margin: 0 auto;
  width: 500px;
}

#detail .customerService2 {
  margin: 0 auto;
  width: 600px;
}

#detail .customerService3 .el-table {
  font-size: 12px;
}

#detail .font_size12 {
  font-size: 12px;
}

#detail .weishouhuo {
  margin-left: 15px;
  cursor: pointer;
}

#detail .yishouhuo {
  margin-left: 15px;
  border: 1px solid #22c838;
  color: #22c838;
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
}

#detail .box_print {
  margin: 20px auto;
}

#detail .box_print .cell {
  text-align: center;
}

#detail .icon_head {
  width: 24px;
  height: 24px;
  margin-right: 5px;
  position: relative;
  top: 5px;
}
</style>
