<template>
  <div id="salesman">
     <div class="contaiter_box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
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
</template>

<script>

import List from '@/components/applets/List';
import Page from '@/components/Page';
import Search from '@/components/applets/Search';
export default {
  name: 'salesman',

  data() {
    return {

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
                wechat: 'zhongqiyou',
                numberId: '10333',
                addTime:'2019-10-23'
              },{
                id: '2',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                wechat: 'zhongqiyou',
                numberId: '10333',
                addTime:'2019-10-23'
              },{
                id: '2',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                wechat: 'zhongqiyou',
                numberId: '10333',
                addTime:'2019-10-23'
              },{
                id: '2',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                wechat: 'zhongqiyou',
                numberId: '10333',
                addTime:'2019-10-23'
              },{
                id: '2',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                wechat: 'zhongqiyou',
                numberId: '10333',
                addTime:'2019-10-23'
              },{
                id: '2',
                name: '小哥哥',
                operat: '操作',
                address:'哥伦比亚大学门口',
                card: '4408888888888888888',
                bank: '3546316516351613111',
                phone: '13325213252',
                wechat: 'zhongqiyou',
                numberId: '10333',
                addTime:'2019-10-23'
              }]

    }
  },
  components: {
      List,
      Page,
      Search
  },
  methods: {


    handleClick(e) {
      console.log(e)
    }
  }
};
</script>

<style>

</style>
