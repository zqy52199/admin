<template>
  <div id="app">
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
      <el-header class="main_header">
        <router-link to="/index"><span class="header_index">首页</span></router-link>
        <el-dropdown :show-timeout="1" v-for="(item, index) in nav" class="main_header_nav" @command="handleCommand">
          <span class="el-dropdown-link main_header_nav_title">{{ item.title }}</span>
          <el-dropdown-menu class="main_header_nav_hover" slot="dropdown">
            <el-dropdown-item v-for="(twoItem, twoIndex) in item.two" :command="{ oneTitle: item.title, twoTitle: twoItem.title, path: twoItem.path, img:twoItem.img }">
              {{ twoItem.title }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container class='view_container1'>
        <el-aside width="180px">
          <div class="left_title">
            <div class="left_row_img">
              <img style="width: 100%;height: 100%;" src="@/assets/leftBigImg/MyToDo.png" alt="">
            </div>
            <div class="left_row_title">我的待办</div>
          </div>
          <div class="left_commonly_used">
            <div class="commonly_title">
              常用设置
              <span>
                <img src="" alt="">
              </span>
            </div>
            <div class="history_one"  v-for="item in commonlyUsed">
              <div class="commonly_img">
                <img :src="item.src" style="width: 100%;height: 100%;" alt="">
              </div>
              <div>
                {{item.title}}
              </div>
            </div>

          </div>
          <div class="left_history">
            <div class="history_title">
              历史操作
            </div>
            <div class="history_one" @click="historyClick(item.path)" v-for="item in history">

              <div class="history_img">
                <img :src="item.src" style="width: 100%;height: 100%;" alt="">
              </div>
              <div >
                {{item.title}}
              </div>
            </div>
          </div>
        </el-aside>
        <el-main>
          <el-container class="view_container">
            <div class="view_container_head">
              <breadList />
            </div>
          </el-container>
          <div class="app_view">
            <!-- 视口占位 -->
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import breadList from './components/breadcrumb'
export default {
  name: 'App',
  data() {
    return {
      // 常用功能
      commonlyUsed: [{
        title:'消息管理',
        src:require('@/assets/leftBigImg/MyToDo.png')
      },
      {
        title:'协议管理',
        src:require('@/assets/leftBigImg/MyToDo.png')
      },{
        title:'商品管理',
        src:require('@/assets/leftBigImg/MyToDo.png')
      },{
        title:'消息管理',
        src:require('@/assets/leftBigImg/MyToDo.png')
      }],
      // 历史操作
      history: [],
      breadcrumb: [],
      nav: [
        {
          title: '订单管理',
          two: [
            {
              title: '用户订单',
              path: '/order/user',
              img:require('@/assets/leftBigImg/userOrder.png')
            },
            {
              title: '商家订单',
              path: '/order/merchant'
            },
            {
              title: '翻译管理',
              path: '/order/translation'
            }
          ]
        },
        {
          title: '审核中心',
          two: [
            {
              title: '审核中心',
              path: '/review',
              img:require('@/assets/leftBigImg/salesman.png')
            }
          ]
        },
        {
          title: '商城管理',
          two: [
            {
              title: '商品管理',
              path: '/mall/commodity'
            },
            {
              title: '分类管理',
              path: '/mall/classifica'
            },
            {
              title: '反馈中心',
              path: '/mall/feedback'
            }
          ]
        },
        {
          title: '用户管理',
          two: [
            {
              title: '用户管理',
              path: '/usermanagement/management'
            },
            {
              title: '商家管理',
              path: '/usermanagement/merchant'
            }
          ]
        },
        {
          title: '综合管理',
          two: [
            {
              title: '权限设置',
              path: '/comprehensive/permission'
            },
            {
              title: '消息管理',
              path: '/comprehensive/message'
            },
            {
              title: '促销活动',
              path: '/comprehensive/promotion'
            },
            {
              title: '个人中心',
              path: '/comprehensive/personal'
            },
            {
              title: '协议管理',
              path: '/comprehensive/protocol'
            },
            {
              title: '统计中心',
              path: '/comprehensive/statistics'
            },
            {
              title: '财务中心',
              path: '/comprehensive/finance'
            }
          ]
        },
        {
          title: '小程序',
          two: [
            {
              title: '商家管理',
              path: '/applets/merchant'
            },
            {
              title: '公众号',
              path: '/applets/public'
            },
            {
              title: '业务员',
              path: '/applets/salesman',
              img:require('@/assets/leftBigImg/salesman.png')
            }
          ]
        },
        {
          title: '第三方',
          two: [
            {
              title: '运输清关',
              path: '/third/transport'
            }
          ]
        }
      ]
    };
  },
  components: {
    breadList
  },
  mounted() {
    const history =JSON.parse(localStorage.getItem('history'));
    if(history){
      this.history = history;
    }

  },
  methods: {
    handleCommand(e) {
      //console.log(this.$route.meta)
      const path = e.path;
      const arr = [e.oneTitle, e.twoTitle];
      this.breadcrumb = arr;
      // 动态跳转路由
      this.$router.push(path);
      let arr1 = this.history;
      if(arr1.length > 0){
        // 遍历判断是否有相同的
        for(let i = 0; i < arr1.length; i++) {
          console.log(arr1[i].title)
          console.log(e.twoTitle)
          if(arr1[i].title == e.twoTitle){
            // 删除相同的
            arr1.splice(i,1)
          }
        }
      }
        arr1.unshift({
          title:e.twoTitle,
          src:e.img,
          path:path
        })
        // 历史操作大于六条删除最后一条
      if(arr1.length >6) {
        arr1.pop();
      }
      localStorage.setItem('history',JSON.stringify(arr1));
      this.history = arr1;
    },
    // 跳转路由
    historyClick(e) {
      this.$router.push(e);
    },

  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
  min-width: 1330px;
  margin: 0 auto;
}

#app .el-tabs__item {
  font-size: 12px;
}
#app .app_view {
  margin: 10px;
  border-radius: 5px;
  background: #ffffff;
  padding: 20px 10px 10px 10px;
  font-size: 12px;
  border: 1px solid #22C838;
}
#app .main_header .header_index {
  color: #606266;
  font-size: 14px;
  padding:0 10px 0 40px;
  font-weight: 700;
}
#app .main_header {
  height: 40px !important;
  background-image: linear-gradient(#ECECEC, #FFFFFF, #ECECEC)!important;
  padding: 0;
  border-bottom: 1px solid #DBDBDB;
  text-align: center;
}

.view_container1,.el-main {
  padding-top: 10px;
  background: #E4EAF6!important ;
}

#app .main_header_nav {
  height: 40px;
  min-width: 100px;
  text-align: center;
  line-height:40px;
  cursor: pointer;
  font-weight: 700;
}
.main_header_nav_title {
  font-size: 14px !important;
}

.el-dropdown-menu__item {
  font-size: 12px;
}
.main_header_nav_hover {
  top: 130px !important;
}

.main_header_nav_hover:nth-of-type(1) .popper__arrow {
  display: none;
}

.main_header_nav_hover:nth-of-type(3) .popper__arrow {
  display: none;
}

.view_container {
  background: #FEF4F3;
  border-radius: 2px;
  margin: 10px;
  margin-top: 0;
  height: 40px;
  line-height: 40px;
  border: 1px solid #69D9F2;
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
  background-color: #E4EAF6;
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
  height: 160px;
  text-align: center;
  color: #333;
  padding: 30px 0px;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #FBABAC;
}

.left_row_img {
  display: inline-block;
  width: 70px;
  height: 70px;
}

.left_row {
  height: 120px;
  text-align: center;
  padding: 25px 0px;
  box-sizing: border-box;
}

.view_container .color .el-breadcrumb__inner {
  color: #000000;
}

.view_container .el-tabs__item,
.el-breadcrumb,
.el-form-item__label,
.el-input__inner,
.demonstration,
tbody .cell {
  font-size: 12px;
}

.el-breadcrumb {
  padding: 12px 0 0 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.view_container_head .el-breadcrumb {
  background: #FEF4F3;
}

.left_commonly_used {
  width: 180px;
  margin-top: 10px;
  text-align: center;
  background: #FFFFFF;
  overflow: hidden;
  color: #333;
  min-height: 200px;
}
.left_history {
  width: 180px;
  margin-top: 10px;
  text-align: center;
  background: #FFFFFF;
  overflow: hidden;
  color: #333;
  min-height: 200px;
}

.commonly_title {
  text-align: center;
  padding: 10px 0;
  font-weight: 700;
}

.commonly_img {
  width: 50px;
  height: 50px;
  margin: 10px auto;
}

.history_img {
  width: 50px;
  height: 50px;
  margin: 10px auto;
}

.history_one {
  width: 49%;
  height: 100px;
  float: left;
  font-size: 12px;
  cursor: pointer;
}

.history_title {
  text-align: center;
  padding: 10px 0;
}
</style>
