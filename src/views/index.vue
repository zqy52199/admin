<template>
  <div id="admin">
    <el-container>
      <el-header style="height: 100px;">
        <el-row>
          <el-col :span="10"><img class="logo" src="@/assets/logo.png" alt="" /></el-col>
          <el-col :span="4"><h3 class="header_title">鹰洋国际后台管理系统</h3></el-col>
          <el-col :span="10">
            <div class="header_right">
              <div class="header_right_out">退出</div>
              <div class="header_right_info">
                <span>员工姓名：XXX</span>
                <span>员工编号：XXX</span>
                <span>部门：XXX</span>
                <span>平台账号：XXX</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="150px">
          <div class="left_title">
            <div class="left_row_img"></div>
            <div class="left_row_title">我的待办</div>
          </div>
          <div class="left_history">
            <div class="left_row">
              <div class="left_row_img"></div>
              <div class="left_row_title">我的待办</div>
            </div>
          </div>
        </el-aside>
        <el-main>
          <el-header class="main_header">
            <el-dropdown v-for="(item, index) in nav" class="main_header_nav" @command="handleCommand">
              <span class="el-dropdown-link main_header_nav_title">{{ item.title }}</span>
              <el-dropdown-menu class="main_header_nav_hover" slot="dropdown">
                <el-dropdown-item v-for="(twoItem, twoIndex) in item.two" :command="index + '-' + twoIndex">{{ twoItem }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-header>
          <el-container class="view_container">
            <div class="view_container_head">
              <el-breadcrumb separator=">>">
                <el-breadcrumb-item class="color">小程序</el-breadcrumb-item>
                <el-breadcrumb-item class="color">业务员</el-breadcrumb-item>
              </el-breadcrumb>
              <div class="contaiter_box">
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                  <el-tab-pane label="基本资料" name="tableData">
                    <div>
                      <!-- 搜索组件 -->
                      <Search :showInput="1"></Search>
                    </div>
                    <div>
                      <!-- 列表组件 -->
                      <List :listArr="tableData" :showDiv="1"></List>
                    </div>
                    <div>
                      <!-- 分页组件 -->
                      <Page></Page>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="商家推广" name="merchantInfo">
                    <div>
                      <!-- 搜索组件 -->
                      <Search :showInput="2"></Search>
                    </div>
                    <div>
                      <!-- 列表组件 -->
                      <List :listArr="merchantInfo" :showDiv="2"></List>
                    </div>
                    <div>
                      <!-- 分页组件 -->
                      <Page></Page>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="审核记录" name="auditRecord">
                    <div>
                      <!-- 搜索组件 -->
                      <Search :showInput="3"></Search>
                    </div>
                    <div>
                      <!-- 列表组件 -->
                      <List :listArr="auditRecord" :showDiv="3"></List>
                    </div>
                    <div>
                      <!-- 分页组件 -->
                      <Page></Page>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="提现申请" name="withdraw">
                    <div>
                      <!-- 搜索组件 -->
                      <Search :showInput="4"></Search>
                    </div>
                    <div>
                      <!-- 列表组件 -->
                      <List :listArr="withdraw" :showDiv="4"></List>
                    </div>
                    <div>
                      <!-- 分页组件 -->
                      <Page></Page>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="推广业绩" name="performance">
                    <div>
                      <!-- 搜索组件 -->
                      <Search :showInput="5"></Search>
                    </div>
                    <div>
                      <!-- 列表组件 -->
                      <List :listArr="performance" :showDiv="5"></List>
                    </div>
                    <div>
                      <!-- 分页组件 -->
                      <Page></Page>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import List from '@/components/List';
import Page from '@/components/Page';
import Search from '@/components/Search';
export default {
  name: 'index',

  data() {
    return {
      // navBar
      activeName: 'tableData',
      // 推广业绩
      performance: [{
                   id:1,
                   numberId: '兼职编号',
                   name:'中期有',
                   zhuceriqi: '2019-10-20',
                   leijituiguang: '累计推广',
                   leijiyouxiaotuiguang: '累计有效推广',
                   leijitixian: '累计提现',
                   two:[
                     {riqi:'2018-20-24',leiji:'累计推广',youxiao:'有效推广',jixiao:'本月绩效基数',tixian:'本月提现'},
                     {riqi:'2018-20-25',leiji:'累计推广',youxiao:'有效推广',jixiao:'本月绩效基数',tixian:'本月提现'},
                     {riqi:'2018-20-26',leiji:'累计推广',youxiao:'有效推广',jixiao:'本月绩效基数',tixian:'本月提现'},
                     {riqi:'2018-20-27',leiji:'累计推广',youxiao:'有效推广',jixiao:'本月绩效基数',tixian:'本月提现'},
                     {riqi:'2018-20-28',leiji:'累计推广',youxiao:'有效推广',jixiao:'本月绩效基数',tixian:'本月提现'}
                   ]
                   }],
       // 提现申请
      withdraw: [{
                    id:1,
                    numberId: '兼职编号',
                    name:'中期有',
                    tixian: '支付宝',
                    tixianzhanghao: '提现账号',
                    tixianjinge: '提现金额',
                    shenqingshijian: '2019-10-22',
                    status: 0
                }],
      // 审核记录
      auditRecord: [{
                    id:1,
                    numberId: '兼职编号',
                    qiyemingcheng: '企业名称',
                    registerType: 0,
                    releaseType: 1,
                    operat:0
                    },
                    {
                     id:2,
                     numberId: '兼职编号',
                     qiyemingcheng: '企业名称',
                     registerType: 1,
                     releaseType: 0,
                     operat:1
                    },{
                      id:3,
                      numberId: '兼职编号',
                      qiyemingcheng: '企业名称',
                      registerType: 0,
                      releaseType: 1,
                      operat:2
                    }],
      // 商家推广
      merchantInfo:[{
                  id: '1',
                  qiyemingcheng: '企业名称',
                  operat: '操作',
                  address:'哥伦比亚大学门口',
                  suozaidiqu: '所在地区',
                  card: '4408888888888888888',
                  bank: '3546316516351613111',
                  fixedTelephone: '07556242355',
                  faRen: '中秋又',
                  jinyingpinglei:'衣服、上衣、裤子',
                  type: '0',
                  submitTime: '2019/9/28',
                  numberId: '兼职编码',
                  xinyongdaima: '信用代码',
                  tuijianqudao: '推荐渠道',
                  lianxizhengm: '联系证明记录图片'
                },{
                  id: '2',
                  qiyemingcheng: '企业名称',
                  operat: '操作',
                  address:'哥伦比亚大学门口',
                  suozaidiqu: '所在地区',
                  card: '4408888888888888888',
                  bank: '3546316516351613111',
                  fixedTelephone: '07556242355',
                  faRen: '中秋又',
                  jinyingpinglei:'衣服、上衣、裤子',
                  type: '1',
                  submitTime: '2019/9/28',
                  numberId: '兼职编码',
                  xinyongdaima: '信用代码',
                  tuijianqudao: '推荐渠道',
                  lianxizhengm: '联系证明记录图片'
                }],
      // 基本资料
      tableData: [{
                id: '1',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                numberId: '10333'
              },{
                id: '2',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                numberId: '10333'
              },{
                id: '3',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                numberId: '10333'
              },{
                id: '4',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                numberId: '10333'
              },{
                id: '5',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                numberId: '10333'
              },{
                id: '6',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                numberId: '10333'
              },{
                id: '7',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                numberId: '10333'
              },{
                id: '8',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                numberId: '10333'
              },{
                id: '9',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                numberId: '10333'
              },{
                id: '10',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                numberId: '10333'
              }],
      nav: [
        {
          title: '首页'
        },
        {
          title: '订单管理',
          two:['用户订单', '商家订单', '翻译管理']
        },
        {
          title: '审核中心'
        },
        {
          title: '商城管理',
          two:['商品管理', '分类管理', '反馈中心']
        },
        {
          title: '用户管理',
          two:['用户管理', '商家管理']
        },
        {
          title: '综合管理',
          two:['权限设置', '消息管理', '促销活动', '个人中心', '协议管理', '统计中心', '财务中心']
        },
        {
          title: '小程序',
          two:['商家管理', '公众号', '业务员']
        },
        {
          title: '第三方',
          two:['运输清关']
        }
      ]
    }
  },
  components: {
      List,
      Page,
      Search
  },
  methods: {
    handleCommand(e) {
      console.log(e)
    },

    handleClick(e) {
      console.log(e)
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.header_title {
  text-align: center;
  line-height: 100px;
}
.el-header {
  background-color: #6baef3;
  color: #fff;
}

.el-header .logo {
  margin-top: 20px;
}

.el-aside {
  background-color: #4d4e50;
  color: #fff;
  text-align: center;
  min-height: 500px;
  font-size: 14px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 0;
}

.header_right {
  box-sizing: border-box;
}

.header_right_out {
  text-align: right;
  margin-top: 20px;
}

.header_right_info {
  text-align: right;
  margin-top: 25px;
  font-size: 14px;
}

.header_right_info > span {
  margin-left: 15px;
}

.left_title {
  height: 120px;
  text-align: center;
  padding: 25px 0px;
  box-sizing: border-box;
  border-bottom: 1px dashed #fff;
}

.left_row_img {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 1px solid #dbdbdb;
}

.left_row {
  height: 120px;
  text-align: center;
  padding: 25px 0px;
  box-sizing: border-box;
}

.main_header {
  height: 30px !important;
  background: #ffffff;
  padding: 0;
}

.main_header_nav {
  height: 30px;
  min-width: 100px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.main_header_nav_title {
  font-size: 14px !important;
}

.el-dropdown-menu__item {
  font-size: 12px;
}
.main_header_nav_hover {
  top: 123px !important;
}

.main_header_nav_hover:nth-of-type(1) .popper__arrow {
  display: none;
}

.main_header_nav_hover:nth-of-type(3) .popper__arrow {
  display: none;
}

.view_container {
  padding: 10px;
  box-sizing: border-box;
}

.view_container_head {
  overflow: hidden;
  width: 100%;
}

.view_container_head .el-breadcrumb {
  padding-bottom: 10px;
}

.contaiter_box {
  padding: 10px 20px;
  background: #ffffff;
  min-height: 700px;
}

.view_container .color .el-breadcrumb__inner {
  color: #000000;
}

.view_container .el-tabs__item, .el-breadcrumb, .el-form-item__label, .el-input__inner, .demonstration, tbody .cell{
  font-size:12px;
}

.el-breadcrumb {
  background: #FFFFFF;
  padding: 8px 0 0 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
