<template>
  <div id="translation">
     <div class="contaiter_box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="发布翻译" name="posttranslation">
          <div>
            <!-- 搜索组件 -->
            <Search :showInput="6"></Search>
          </div>
          <div>
            <!-- 列表组件 -->
            <List :listArr="posttranslation" :showDiv="6"></List>
          </div>
          <div>
            <!-- 分页组件 -->
            <Page></Page>
          </div>
        </el-tab-pane>
        <el-tab-pane label="参数翻译" name="parametertranslation">
          <div>
            <!-- 搜索组件 -->
            <Search :showInput="7"></Search>
          </div>
          <!-- <div>
            4545 -->
            <!-- 列表组件 -->
            <!-- <List :listArr="parametertranslation" :showDiv="7"></List> -->
          <!-- </div> -->
          <!-- <div> -->
            <!-- 分页组件 -->
            <!-- <Page></Page>
          </div> -->
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
  name: 'translation',

  data() {
    return {

      activeName: 'posttranslation',
      //发布翻译
      posttranslation: [{
                id: '1',
                shangjiaId: '小哥哥',
                fabubianhao: '操作',
                shangjiamingcheng:'哥伦比亚大学门口',
                fabufangshi: '4408888888888888888',
                fanyizhuangtai: '3546316516351613111',
                fabushijian: '13325213252',
                caozuo: 0,
              },{
                id: '2',
                shangjiaId: '小哥哥',
                fabubianhao: '操作',
                shangjiamingcheng:'哥伦比亚大学门口',
                fabufangshi: '4408888888888888888',
                fanyizhuangtai: '3546316516351613111',
                fabushijian: '13325213252',
                caozuo:0,
              },{
                id: '3',
                shangjiaId: '小哥哥',
                fabubianhao: '操作',
                shangjiamingcheng:'哥伦比亚大学门口',
                fabufangshi: '4408888888888888888',
                fanyizhuangtai: '3546316516351613111',
                fabushijian: '13325213252',
                caozuo:0,
              }],

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
