<template>
  <div id="list">
    <el-table
          :data="listArr"
          style="width: 100%">
          <el-table-column
            prop="menberAccount"
            label="商家账号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="shopName"
            label="商品名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="orderNumber"
            label="订单编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="orderStatus"
            label="审核类型">
          </el-table-column>
          <el-table-column
            prop="applicationTime"
            label="申请时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="orderType"
            label="审核状态">
              <template scope="scope">
                <span v-if="scope.row.orderType==1">待审核</span>
                <span v-if="scope.row.orderType==2">已拒绝</span>
                <span style="color: #0BB908;" v-if="scope.row.orderType==3">已通过</span>
              </template>
          </el-table-column>
          <el-table-column type="expand">
            <template slot-scope="props">
              <div class="menu_box">
                <div class="menu_box_head">
                  <el-row>
                    <el-col :span="6">
                      <span style="color: #09bb07;">支付状态：</span><span>已支付</span>
                    </el-col>
                    <el-col :span="8">
                      <span style="color: #09bb07;">操作时间：</span><span>2019/11/12 11:11:56</span>
                    </el-col>
                  </el-row>
                </div>
                <div class="menu_box_content">
                  <el-row>
                    <el-col class="box_col" :span="8">
                      <div>
                        订单编号：123456789   <span style="color: #2962ff;">查看订单</span>
                      </div>
                      <div>
                        订单总金额：<span style="color: #FF2150;">￥123123</span>
                      </div>
                      <div>
                        申请类型：首款申请
                      </div>
                      <div>
                        申请金额：<span style="color: #FF2150;">￥123123</span>
                      </div>
                      <div>
                        首款人姓名：钟某某
                      </div>
                      <div>
                        对公账号：1234 1324 3412 1243
                      </div>
                    </el-col>
                    <el-col style="overflow: hidden;margin-top: 15px;" :span="16">
                      <div style="float: left;">
                        <div class="box_col_right">
                          <img src="" alt="">
                        </div>
                        <div style="text-align: center;line-height: 25px;">申请凭证</div>
                      </div>
                      <!-- 汇款凭证 -->
                      <div v-if="false" style="float: left;margin-left: 100px;">
                        <div class="box_col_right">
                          <img src="" alt="">
                        </div>
                        <div style="text-align: center;line-height: 25px;">汇款凭证</div>
                      </div>

                      <!-- 通过会拒绝申请 -->
                      <div v-if="true" style="float: left;margin-left: 100px;">
                        <div style="line-height: 25px;">拒绝理由：(<span style="color: #2962ff;">如果拒绝申请，请填写拒绝理由</span>)</div>
                        <div >
                          <el-input
                            type="textarea"
                            :rows="5"
                            placeholder="请输入内容"
                            v-model="textarea">
                          </el-input>
                        </div>
                        <div style="text-align: center;margin-top: 10px;">
                         <el-button @click="examineBtn(props.row.id, props.$index)" size="mini" type="success">通过申请</el-button>
                         <el-button size="mini" type="danger">拒绝申请</el-button>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <!-- 上传凭证 -->
        <el-dialog :visible.sync="centerDialogVisible" width="35%" center>
          <input v-show="false" ref="inputClick" @change="changeImage($event)" type="file" />
          <input style="width: 300px;height: 24px;" :value="imgName" type="text" />
          <el-button @click="inputClicks" size="mini" type="primary">上传汇款凭证</el-button>
          <div style="width: 220px;margin: 40px auto;">
            <el-button size="small" style="width: 100px;" @click="determine" type="primary">确定</el-button>
            <el-button size="small" style="width: 100px;" @click="centerDialogVisible = false" type="primary">关闭</el-button>
          </div>
        </el-dialog>
  </div>
</template>

<script>
  import { request } from '@/network/request';
  import { baseURL } from '@/network/baseURL';
  import axios from 'axios'
  export default {
    name: 'list',
    props:{
      listArr:{
        type:Array,
        value:[]
      }
    },
    data() {
      return {
        textarea:'',
        centerDialogVisible: false,
        imgUrl:'',
        imgName:''
      }
    },
    methods: {
      // 上传图片
      changeImage(e) {
        let file = e.target.files[0];
        this.imgName = file.name;
        let formData = new FormData();
        formData.append('images', file);
        axios.post('https://vx.eaglesell.com.cn/index.php/admin/PublicOperate/uploadimg', formData).then(res => {
          this.imgUrl = res.data.data[0];
          e.target.files = [];
        });
      },
      // 确定上传
      determine() {
        if (this.imgUrl == '') {
          alert('请先上传汇款凭证');
          return;
        }
        request({
          url: '/admin/Smallprogram/examine',
          method: 'post',
          data: {
            id: this.id,
            voucher: this.imgUrl
          }
        }).then(res => {
          this.centerDialogVisible = false;
          if (res.error == 0) {
            this.tempListArr[this.index].status = 1;
          }
          alert(res.message);
        });
      },
      // 点击通过申请弹窗框
      examineBtn(id, index) {
        this.imgName = '';
        this.centerDialogVisible = true;
        this.id = id;
        this.index = index;
      },
      // input file 上传文件事件
      inputClicks() {
        this.$refs.inputClick.click();
      },
    }
  }
</script>

<style>
  #list .menu_box {
    font-size: 12px;

  }
  .el-table tr.expanded {
      background: #dfeefd;
  }

  .el-table tr td.el-table__expanded-cell {
      background: #f3f8ff;
      padding: 15px;
  }

  .menu_box .menu_box_head {
    border-bottom: 1px dashed #459bfb;
    padding-bottom: 15px;
  }

  .box_col {
    padding: 10px 0;
  }

  .box_col > div {
    line-height: 25px;
  }

  .box_col_right {
    width: 230px;
    height: 130px;
    border: 1px solid #DBDBDB;
  }


</style>
