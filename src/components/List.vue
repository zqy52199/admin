<template>
  <div id="list" style="margin-top: 20px;" class="list_box">
    <!-- 基本资料列表 -->
    <div v-if="showDiv == 1" class="box1">
      <el-table
          :data="listArr"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
             <el-form label-position="left" inline class="demo-table-expand">
               <el-col :span="8"><div class="grid-content bg-purple"></div><el-form-item label="姓名:" >
                  <span>{{ props.row.name }}</span>
                </el-form-item></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="身份证号:">
                  <span>{{ props.row.card }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="手机:">
                  <span>{{ props.row.phone }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="兼职编码:">
                  <span>{{ props.row.numberId }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="银行账号:">
                  <span>{{ props.row.bank }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="所在地区">
                  <span>{{ props.row.address }}</span>
                </el-form-item></div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple"><el-form-item label="详细地址:">
                   <span>{{ props.row.address }}</span>
                 </el-form-item></div></el-col>

              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            width="80px"
            label="ID"
            prop="id">
          </el-table-column>
          <el-table-column
            label="兼职编号"
            prop="numberId">
          </el-table-column>
          <el-table-column
            width="220px"
            label="身份证号"
            prop="card">
          </el-table-column>
          <el-table-column
            label="手机"
            prop="phone">
          </el-table-column>
          <el-table-column
            width="220px"
            label="银行账号"
            prop="bank">
          </el-table-column>
          <el-table-column
            label="操作">
            冻结   激活
          </el-table-column>
        </el-table>
    </div>
    <!-- 商家推广列表 -->
    <div v-if="showDiv == 2" class="box2">
      <el-table
          :data="listArr"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
             <el-form label-position="left" inline class="demo-table-expand">
               <el-col :span="8"><div class="grid-content bg-purple"></div><el-form-item label="兼职编号:" >
                  <span>{{ props.row.numberId }}</span>
                </el-form-item></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="企业名称:">
                   {{listArr[props.$index].type}}
                  <span>{{ props.row.qiyemingcheng }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="企业固定电话:">
                  <span>{{ props.row.fixedTelephone }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="企业法人:">
                  <span>{{ props.row.faRen }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="企业信用代码:">
                  <span>{{ props.row.xinyongdaima }}</span>
                </el-form-item></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="所在地区">
                  <span>{{ props.row.suozaidiqu }}</span>
                </el-form-item></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="经营品类:">
                   <span>{{ props.row.jinyingpinglei }}</span>
                 </el-form-item></div></el-col>
                 <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="推荐渠道:">
                    <span>{{ props.row.tuijianqudao }}</span>
                  </el-form-item></div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="提交日期:">
                     <span>{{ props.row.submitTime }}</span>
                   </el-form-item></div></el-col>
                   <el-col :span="24"><div class="grid-content bg-purple"><el-form-item label="企业地址:">
                   <span>{{ props.row.address }}</span>
                 </el-form-item></div></el-col>
                 <el-col :span="24"><div class="grid-content bg-purple"><el-form-item label="联系记录证明:">
                    <span>{{ props.row.lianxizhengm }}</span>
                  </el-form-item></div></el-col>

              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            width="80px"
            label="ID"
            prop="id">
          </el-table-column>
          <el-table-column
            label="企业名称"
            prop="qiyemingcheng">
          </el-table-column>
          <el-table-column
            width="220px"
            label="经营品类"
            prop="jinyingpinglei">
          </el-table-column>
          <el-table-column
            label="兼职编号"
            prop="numberId">
          </el-table-column>
          <el-table-column
            width="220px"
            label="提交日期"
            prop="submitTime">
          </el-table-column>
          <el-table-column
            label="状态">
            <span style="color: #999;" >待审核</span>
          </el-table-column>
        </el-table>


    </div>
    <!-- 审核记录列表 -->
    <div v-if="showDiv == 3" class="box3">
      <el-table
          :data="listArr"
          style="width: 100%">

          <el-table-column
            width="80px"
            label="ID"
            prop="id">
          </el-table-column>
          <el-table-column
            label="兼职编号"
            prop="numberId">
          </el-table-column>
          <el-table-column
            width="220px"
            label="企业名称"
            prop="qiyemingcheng">
          </el-table-column>
          <el-table-column
          prop="registerType"
          label="注册是否通过">
            <template scope="scope">
              <span>{{scope.row.registerType==0?'否':'是'}}</span>
              <span style="color:blue;margin-left:20px;cursor:pointer">查看</span>
            </template>
          </el-table-column>
          <el-table-column
          prop="releaseType"
          label="产品发布是否达标">
            <template scope="scope">
              <span>{{scope.row.releaseType==0?'否':'是'}}</span>
              <span style="color:blue;margin-left:20px;cursor:pointer">查看</span>
            </template>
          </el-table-column>
          <el-table-column
          prop="operat"
          label="操作">
          <template scope="scope">
            <span v-if='scope.row.operat==0'>
              <el-button size="mini" type="success">通过</el-button>
              <el-button size="mini" type="danger">拒绝</el-button>
            </span>
            <span v-if='scope.row.operat==1'><el-button size="mini" disabled type="success">已通过</el-button></span>
            <span v-if='scope.row.operat==2'><el-button size="mini" disabled type="danger">已拒绝</el-button></span>
          </template>

          </el-table-column>
        </el-table>
    </div>
    <!-- 提现申请列表 -->
    <div v-if="showDiv == 4" class="box4">
      <el-table
          :data="listArr"
          style="width: 100%">

          <el-table-column
            width="80px"
            label="ID"
            prop="id">
          </el-table-column>
          <el-table-column
            label="兼职编号"
            prop="numberId">
          </el-table-column>
          <el-table-column
            width="220px"
            label="姓名"
            prop="name">
          </el-table-column>
          <el-table-column
          prop="tixian"
          label="提现方式">
          </el-table-column>

          <el-table-column
          prop="tixianzhanghao"
          label="提现账号">

          </el-table-column>
          <el-table-column
          prop="shenqingshijian"
          label="申请时间">

          </el-table-column>
          <el-table-column
          prop="status"
          label="状态">
          <template scope="scope">
            <span v-if="scope.row.status == 0"><span style="margin-right: 30px;color: #999;">待处理</span><el-button size="mini" type="primary">已打款</el-button></span>
            <span style="color: lawngreen;" v-else>已完成</span>
          </template>

          </el-table-column>
        </el-table>
    </div>
    <!-- 推广业绩列表 -->
    <div v-if="showDiv == 5" class="box5">
      <el-table
          :data="listArr"
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
              <div v-for="item in props.row.two" style="width: 80%;margin: 0 auto;text-align: center;font-size: 12px;">
                <el-col :span="4">{{item.riqi}}</el-col>
                <el-col :span="4">{{item.leiji}}</el-col>
                <el-col :span="4">{{item.youxiao}}</el-col>
                <el-col :span="5">{{item.jixiao}}</el-col>
                <el-col :span="4">{{item.tixian}}</el-col>
              </div>

            </template>
          </el-table-column>
          <el-table-column
            width="80px"
            label="ID"
            prop="id">
          </el-table-column>
          <el-table-column
            label="兼职编号"
            prop="numberId">
          </el-table-column>
          <el-table-column
            width="220px"
            label="姓名"
            prop="name">
          </el-table-column>
          <el-table-column
          prop="zhuceriqi"
          label="注册日期">
          </el-table-column>

          <el-table-column
          prop="leijituiguang"
          label="累计提交推广">

          </el-table-column>

          <el-table-column
          prop="leijiyouxiaotuiguang"
          label="累计有效推广">

          </el-table-column>

          <el-table-column
          prop="leijitixian"
          label="累计提现金额">

          </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props:['listArr', 'showDiv'],
    data() {
      return {
        
      }
    },
    methods: {

    }
  }
</script>

<style>
  .list_box .el-form-item {
    min-width:200px ;
    margin-bottom: 0;
  }
</style>
