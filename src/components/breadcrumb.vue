<template>
  <el-breadcrumb class="app-breadcrumb" separator=">>">
    <transition-group>
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path" v-if="item.meta.title">
        <span v-if="item.redirect === 'index' || index == 0" style="color: #303133;font-weight: 700;">{{ item.meta.title }}</span>
        <router-link v-else :to="item.redirect || item.path">{{ item.meta.title }}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script>
export default {
  name: 'idnex',
  data() {
    return {
      levelList: null
    };
  },
  created() {
    this.getBreadcrumb();
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name); //$route.matched 将会是一个包含从上到下的所有对象 (副本)。
      const first = matched[0];
      //console.log(first.name , 'first.name')
      if (first && first.name !== 'index') {
        //$route.name当前路由名称  ；$route.redirectedFrom重定向来源的路由的名字
        if (first.path == '/applets/salesman') {
          matched = [{ path: 'salesman', meta: { title: '小程序' } }].concat(matched);
        } else if (first.path == '/order/user') {
          matched = [{ path: 'user', meta: { title: '订单管理' } }].concat(matched);
        } else if (first.path == '/order/merorder') {
          matched = [{ path: 'merorder', meta: { title: '订单管理' } }].concat(matched); //商家管理
        } else if (first.path == '/order/translation') {
          matched = [{ path: 'translation', meta: { title: '订单管理' } }].concat(matched); //翻译管理
        } else if (first.path == '/review') {
          matched = [{ path: 'review', meta: { title: '审核中心' } }].concat(matched);
        } else if (first.path == '/comprehensive/personal') {
          matched = [{ path: 'personal', meta: { title: '综合管理' } }].concat(matched);
        } else if (first.path == '/comprehensive/protocol') {
          matched = [{ path: 'protocol', meta: { title: '综合管理' } }].concat(matched);
        } else if (first.path == '/comprehensive/message') {
          matched = [{ path: 'message', meta: { title: '综合管理' } }].concat(matched);
        }

        // else if(first.path =='/review') {
        //            matched=[{ path: 'review', meta: { title: '审核中心' }}].concat(matched)
        //          }
      }

      this.levelList = matched;
    }
  }
};
</script>
<style scoped></style>
