<template>
  <div id="list" style="margin-top: 20px;" class="list_box">
    <!-- 基本资料列表 -->
    <div v-if="showDiv == 1" class="box1">
      <el-table
          :data="tempListArr"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
             <el-form label-position="left" inline class="demo-table-expand">
               <el-col :span="8"><div class="grid-content bg-purple"></div><el-form-item label="姓名:" >
                  <span>{{ props.row.name }}</span>
                </el-form-item></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="身份证号:">
                  <span>{{ props.row.cardId }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="手机:">
                  <span>{{ props.row.telphone }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="兼职编码:">
                  <span>{{ props.row.number }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="银行账号:">
                  <span>{{ props.row.bankaccount }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="所在地区:">
                  <span>{{ props.row.address }}</span>
                </el-form-item></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="注册日期:">
                   <span>{{ props.row.created }}</span>
                 </el-form-item></div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple"><el-form-item label="详细地址:">
                   <span>{{ props.row.area }}</span>
                 </el-form-item></div></el-col>

              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            width="80px"
            label="ID">
            <template slot-scope="scope">
              {{scope.$index + 1 }}
            </template>
          </el-table-column>
          <el-table-column
            label="兼职编号"
            prop="number">
          </el-table-column>
          <el-table-column
            label="姓名"
            prop="name">
          </el-table-column>
          <el-table-column
            width="220px"
            label="身份证号"
            prop="cardId">
          </el-table-column>
          <el-table-column
            label="手机"
            prop="telphone">
          </el-table-column>
          <el-table-column
            width="220px"
            label="银行账号"
            prop="bankaccount">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <span @click="freeze(scope.row.uid, '0')" style="cursor: pointer;color: #2592ff;">
                冻结
              </span>
              &nbsp;&nbsp;
              <span  @click="freeze(scope.row.uid, '1')" style="cursor: pointer;">激活</span>
            </template>

          </el-table-column>
        </el-table>
    </div>
    <!-- 商家推广列表 -->
    <div v-if="showDiv == 2" class="box2">
      <el-table
          :data="tempListArr"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
             <el-form label-position="left" inline class="demo-table-expand">
               <el-col :span="8"><div class="grid-content bg-purple"></div><el-form-item label="兼职编号:" >
                  <span>{{ props.row.number }}</span>
                </el-form-item></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="企业名称:">
                  <span>{{ props.row.company }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="企业固定电话:">
                  <span>{{ props.row.tel }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="企业法人:">
                  <span>{{ props.row.legal }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="企业信用代码:">
                  <span>{{ props.row.company_sn }}</span>
                </el-form-item></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="经营品类:">
                   <span>{{ props.row.category_id }}</span>
                 </el-form-item></div></el-col>
                 <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="推荐渠道:">
                    <span v-if="props.row.channel === 1">电商平台</span>
                    <span v-else-if="props.row.channel === 2">自身人脉</span>
                    <span v-else-if="props.row.channel === 3">论坛帖子</span>
                    <span v-else>{{props.row.channel_ext}}</span>
                  </el-form-item></div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="提交日期:">
                     <span>{{ props.row.updated }}</span>
                   </el-form-item></div></el-col>

                   <el-col :span="24"><div class="grid-content bg-purple"><el-form-item label="企业地址:">
                   <span>{{ props.row.address }}</span>
                 </el-form-item></div></el-col>
                 <el-col :span="16"><div class="grid-content bg-purple"><el-form-item label="联系记录证明:">

                    <div style="margin-top: 15px;">
                      <div class="img_div_box" v-for="item in props.row.pics">
                        <img :src="baseURL+'/'+item" style="width: 100%;height: 100%;" alt="">
                      </div>
                    </div>
                  </el-form-item></div></el-col>

              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            width="80px"
            label="ID">
            <template slot-scope="props" >
              {{props.$index + 1}}
            </template>
          </el-table-column>
          <el-table-column
            label="企业名称"
            prop="company">
          </el-table-column>
          <el-table-column
            width="220px"
            label="经营品类"
            prop="category_id">
          </el-table-column>
          <el-table-column
            label="兼职编号"
            prop="number">
          </el-table-column>
          <el-table-column
            width="220px"
            label="提交日期"
            prop="updated">
          </el-table-column>
          <el-table-column
            label="状态">
            <template slot-scope="props">
              <span v-if="props.row.status === 0" style="color: #999;" >未通过</span>
              <span v-else-if="props.row.status === 1" style="color: green;" >已审核</span>
              <span v-else style="color: #999;" >待审核</span>
            </template>

          </el-table-column>
        </el-table>


    </div>
    <!-- 审核记录列表 -->
    <div v-if="showDiv == 3" class="box3">
      <el-table
          :data="tempListArr"
          style="width: 100%">

          <el-table-column
            width="80px"
            label="ID">
            <template slot-scope="props">
              {{props.$index + 1}}
            </template>
          </el-table-column>
          <el-table-column
            label="兼职编号"
            prop="number">
          </el-table-column>
          <el-table-column
            width="220px"
            label="企业名称"
            prop="company">
          </el-table-column>
          <el-table-column
          label="注册是否通过">
            <template scope="scope">
              <span>{{scope.row.isreg==0?'否':'是'}}</span>
              <span style="color:blue;margin-left:20px;cursor:pointer">查看</span>
              <span v-if="scope.row.isreg == 0"><el-button @click="tempClick(scope.row.mid, scope.row.isreg, 2)" size="mini"type="danger">注册</el-button></span>
            </template>
          </el-table-column>
          <el-table-column
          label="产品发布是否达标">
            <template scope="scope">
              <span>{{scope.row.isrelease==0?'否':'是'}}</span>
              <span style="color:blue;margin-left:20px;cursor:pointer">查看</span>
              <span v-if="scope.row.isrelease == 0"><el-button @click="tempClick(scope.row.mid, scope.row.isreg, 3)" size="mini"type="danger">发布</el-button></span>
            </template>
          </el-table-column>
          <el-table-column
          label="操作">
          <template scope="scope">
            <span v-if='scope.row.status === 0'>
              <el-button @click="by(scope.row.mid,1,scope.$index)" size="mini" type="success">通过</el-button>
              <el-button @click="by(scope.row.mid,2,scope.$index)" size="mini" type="danger">拒绝</el-button>
            </span>
            <span v-if='scope.row.status==1'><el-button size="mini" disabled type="success">已通过</el-button></span>
            <span v-if='scope.row.status==2'><el-button size="mini" disabled type="danger">已拒绝</el-button></span>
          </template>

          </el-table-column>
        </el-table>
    </div>
    <!-- 提现申请列表 -->
    <div v-if="showDiv == 4" class="box4">
      <el-table
          :data="tempListArr"
          style="width: 100%">

          <el-table-column
            width="80px"
            label="ID">
            <template slot-scope="props">
              {{props.$index + 1}}
            </template>
          </el-table-column>
          <el-table-column
            label="兼职编号"
            prop="number">
          </el-table-column>
          <el-table-column
            width="120px"
            label="姓名"
            prop="name">
          </el-table-column>
          <el-table-column
          prop="tixian"
          label="提现方式">
          <template slot-scope="props">
            <span>{{props.row.mode === 1 ? '银行转账' : '支付宝'}}</span>
          </template>
          </el-table-column>

          <el-table-column
          prop="account"
          label="提现账号">
          </el-table-column>
          <el-table-column
          prop="money"
          label="提现金额(￥)">
          </el-table-column>
          <el-table-column
          prop="created"
          label="申请时间">

          </el-table-column>
          <el-table-column
          prop="status"
          label="状态">
          <template scope="scope">
            <span v-if="scope.row.status == 0"><span style="margin-right: 30px;color: #999;">待处理</span><el-button @click="examineBtn(scope.row.id, scope.$index)" size="mini" type="primary">已打款</el-button></span>
            <span style="color: lawngreen;" v-else>已完成</span>
          </template>

          </el-table-column>
        </el-table>
    </div>
    <!-- 推广业绩列表 -->
    <div v-if="showDiv == 5" class="box5">
      <el-table
          :data="tempListArr"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <div style="width: 80%;margin: 0 auto;text-align: center;font-size: 14px;font-weight: 600;">
                <el-col :span="4">日期</el-col>
                <el-col :span="4">本月累计推广</el-col>
                <el-col :span="4">本月有效推广</el-col>
                <el-col :span="5">本月绩效基数</el-col>
                <el-col :span="4">本月提现金额</el-col>
              </div>
              <div v-for="item in props.row.descdata" style="line-height: 25px;width: 80%;margin: 0 auto;text-align: center;font-size: 12px;">
                <el-col :span="4">{{item.date}}</el-col>
                <el-col :span="4">{{item.byljtg}}</el-col>
                <el-col :span="4">{{item.byyxtg}}</el-col>
                <el-col :span="5">{{item.byjxjs}}</el-col>
                <el-col :span="4">{{item.bytxje}}</el-col>
              </div>

            </template>
          </el-table-column>
          <el-table-column
            width="80px"
            label="ID">
            <template scope="props">
              {{props.$index + 1}}
            </template>
          </el-table-column>
          <el-table-column
            label="兼职编号"
            prop="number">
          </el-table-column>
          <el-table-column
            width="150px"
            label="姓名"
            prop="name">
          </el-table-column>
          <el-table-column
          prop="created"
          label="注册日期">
          </el-table-column>

          <el-table-column
          prop="ljtgs"
          label="累计提交推广">

          </el-table-column>

          <el-table-column
          prop="yxtgs"
          label="累计有效推广">

          </el-table-column>

          <el-table-column
          prop="txje"
          label="累计提现金额(￥)">

          </el-table-column>
          <el-table-column
          prop="dqye"
          label="当前余额(￥)">

          </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
  import {request} from '@/network/request'
  import {baseURL} from '@/network/baseURL'
  export default {
    name: 'list',
    props:['listArr', 'showDiv', 'performanceTow'],
    data() {
      return {
        baseURL:baseURL,
        tempListArr:this.listArr
      }
    },
    methods: {
      // 临时接口
      tempClick(mid, status, type) {
        
        request({
          url:'/admin/Smallprogram/examinetest',
          method:'post',
          data:{
            mid,
            type,
            status
          }
        })
      },
      //基本资料-- 冻结  激活
      freeze(uid, status) {
        
        request({
          url:'/admin/Smallprogram/changeStatus',
          method:'post',
          data:{
            uid,
            status
          }
        }).then(res => {
           alert(res.message)


        })
      },
      // 审核状态   1 通过   2 拒绝
      by(mid, status, index) {
        request({
          url:'/admin/Smallprogram/merchantExamine',
          method:'post',
          data:{
            mid,
            status
          }
        }).then(res => {
         alert(res.message)
         this.tempListArr[index].status = status;

        })
      },
      // 提现申请审核
      examineBtn(id, index) {
        request({
          url:'/admin/Smallprogram/examine',
          method:'post',
          data:{
            id
          }
        }).then(res => {
         alert(res.message)
         this.tempListArr[index].status = 1;
        })
      }
    },
    watch:{
        listArr:function(val){
          this.tempListArr = val
        }
      }
  }
</script>

<style>
  .list_box .el-form-item {
    min-width:200px;
    margin-bottom: 0;
  }

  #list .box2 .img_div_box {
    height: 150px;
    width: 250px;
    border: 1px solid #DBDBDB;
    margin-left: 20px;
    margin-bottom: 20px;
    float: left;
  }
</style>
