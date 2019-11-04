<template>
  <div id="salesman">
     <div class="contaiter_box">
      <el-tabs v-model="activeName">
        <el-tab-pane label="基本资料" name="tableData">
          <div>
            <!-- 搜索组件 -->
            <Search :showInput="1" @searchCon="tableDataSearch"></Search>
          </div>
          <div>
            <!-- 列表组件 -->
            <List :listArr="tableData" :showDiv="1"></List>
          </div>
          <div>
            <!-- 分页组件 -->
            <Page @table="table2" :count="tableDataCount"></Page>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商家推广" name="merchantInfo">
          <div>
            <!-- 搜索组件 -->
            <Search :showInput="2"  @searchCon="merchantInfoSearch" :datas="datas"></Search>
          </div>
          <div>
            <!-- 列表组件 -->
            <List :listArr="merchantInfo" :showDiv="2"></List>
          </div>
          <div>
            <!-- 分页组件 -->
            <Page @merchant="merchant2" :count="merchantInfoCount"></Page>
          </div>
        </el-tab-pane>
        <el-tab-pane label="推荐审核" name="auditRecord">
          <div>
            <!-- 搜索组件 -->
            <Search :showInput="3" @searchCon="auditRecordSearch"></Search>
          </div>
          <div>
            <!-- 列表组件 -->
            <List :listArr="auditRecord" :showDiv="3"></List>
          </div>
          <div>
            <!-- 分页组件 -->
            <Page @audit="audit2" :count="auditRecordCount"></Page>
          </div>
        </el-tab-pane>
        <el-tab-pane label="提现申请" name="withdraw">
          <div>
            <!-- 搜索组件 -->
            <Search :showInput="4" @searchCon="withdrawSearch"></Search>
          </div>
          <div>
            <!-- 列表组件 -->
            <List :listArr="withdraw" :showDiv="4"></List>
          </div>
          <div>
            <!-- 分页组件 -->
            <Page @withdraw="withdraw2" :count="withdrawCount"></Page>
          </div>
        </el-tab-pane>
        <el-tab-pane label="推广业绩" name="performance">
          <div>
            <!-- 搜索组件 -->
            <Search :showInput="5"  @searchCon="performanceSearch"></Search>
          </div>
          <div>
            <!-- 列表组件 -->
            <List :listArr="performance" :showDiv="5" :performanceTow="performanceTow" ></List>
          </div>
          <div>
            <!-- 分页组件 -->
            <Page  @performance="performance2" :count="performanceCount"></Page>
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
import {request} from "@/network/request";
export default {
  name: 'salesman',

  data() {
    return {
      activeName: 'tableData',
      // 分类
      datas:[],
      // 推广业绩 - 详细信息
      performanceTow:[],
      // 推广业绩
      performance: [],
      performanceCount: 0,
       // 提现申请
      withdraw: [],
      withdrawCount: 0,
      // 审核记录
      auditRecord: [],
      auditRecordCount: 0,
      // 商家推广
      merchantInfo:[],
      merchantInfoCount:0,
      // 基本资料
      tableData: [],
      tableDataCount: 0,

      // 分类信息
      options:[]

    }
  },
  components: {
      List,
      Page,
      Search
  },
  mounted() {
    this.getClassThree();
    // 业务员基本信息
    this.publisFn('/admin/Smallprogram/salesmanList', 1);
    // 商家推广
    this.publisFn('/admin/Smallprogram/merchantList', 2);
    // 推荐审核
    this.publisFn('/admin/Smallprogram/merchantExamineList', 3);
    // 提现申请
    this.publisFn('/admin/Smallprogram/withdrawalsList', 4);
    // 推广业绩
    this.publisFn('/admin/Smallprogram/performanceList', 5);

  },
  methods: {
    table2(e) {
      this.chackFn(e, '10', '/admin/Smallprogram/salesmanList', 1)
    },
    // 商家推广
    merchant2(e) {
      this.chackFn(e, '10', '/admin/Smallprogram/merchantList', 2)
    },
    // 审核记录
      audit2(e) {
      this.chackFn(e, '10', '/admin/Smallprogram/merchantExamineList', 3)
    },
    // 提现申请
    withdraw2(e) {
      this.chackFn(e, '10', '/admin/Smallprogram/withdrawalsList', 4)
    },
    // 推广业绩
    performance2(e) {
      this.chackFn(e, '10', '/admin/Smallprogram/performanceList', 5)
    },
    // 获取内容
    publisFn(url, obj) {
      request({
        url,
        method:'post',
        data:{

        }
      }).then(res => {
        let data = res.data;
        let nums = res.nums;
        if(obj === 1) {
          this.tableData = data;
          this.tableDataCount = nums;
        }else if(obj === 2) {
          this.merchantInfo = data;
          this.merchantInfoCount = nums;
        }else if(obj === 3) {
          this.auditRecord = data;
          this.auditRecordCount = nums;
        }else if(obj === 4) {
          this.withdraw = data;
          this.withdrawCount = nums;
        }else if(obj === 5) {
          this.performance = data;
          this.performanceCount = nums;
        }

      })
    },
    // 查询内容
    chackFn(page, count, url, obj) {
      request({
        url,
        data: {
          page,
          count,
          data:{

          }
        },
        method:'post'
      }).then(res => {
        let data = res.data;
        let nums = res.nums;
        if(obj === 1) {
          this.tableData = data;
          this.tableDataCount = nums;
        }else if(obj === 2) {
          this.merchantInfo = data;
          this.merchantInfoCount = nums;
        }else if(obj === 3) {
          this.auditRecord = data;
          this.auditRecordCount = nums;
        }else if(obj === 4) {
          this.withdraw = data;
          this.withdrawCount = nums;
        }else if(obj === 5) {
          this.performance = data;
          this.performanceCount = nums;
        }
      })

    },
    // 获取分类信息
    getClassThree() {
      request({
                url:'/admin/Smallprogram/category',
                method:'post',
                data:{

                }
              }).then(res => {
                const resData = res.data;
                let datas = [];

                for(let i = 0; i < resData.length; i++) {
                  let obj = {};
                  obj.value = resData[i].Pid;
                  obj.label = resData[i].Name_lang_1;
                  obj.children = [];

                  let resDataTwo = resData[i].two;
                  for(let j = 0; j < resDataTwo.length; j++) {
                    let obj1 = {};
                    obj1.value = resDataTwo[j].Pid;
                    obj1.label = resDataTwo[j].Name_lang_1;
                    obj1.children = [];

                    let resDataThree = resDataTwo[j].three;
                    for(let k = 0 ; k < resDataThree.length; k++ ){
                      let obj2 = {};
                      obj2.value = resDataThree[k].CateId;
                      obj2.label = resDataThree[k].Name_lang_1;
                      obj1.children.push(obj2);
                    }
                    obj.children.push(obj1);
                  }
                  datas.push(obj);
                }
                this.datas = datas;

              })
    },

    // 接受组件search返回的内容
    // 基本资料
    tableDataSearch(e) {
      this.tableData = e;
    },
    // 商家推广
    merchantInfoSearch(e) {
      this.merchantInfo = e;
    },
    // 推荐审核
    auditRecordSearch(e) {
      this.auditRecord = e;
    },
    // 提现审核
    withdrawSearch(e) {
      this.withdraw = e;
    },
    // 推广业绩
    performanceSearch(e) {
      this.performance = e;
    }


  }
};
</script>

<style>

</style>
