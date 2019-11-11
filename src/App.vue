<template>
  <div id="app" style="height: 100%;width: 100%;">
    <div v-if="!homeShow" class="app_login" :style="backgroundDiv">
      <div class="app_login_box" :style="backgroundDivCenter">
        <div class="form_list">
          <h1 style="color: #2895FD;">EAGLESELL</h1>
          <h3 style="color: #666;margin-bottom: 30px;">鹰洋 · 后台管理系统</h3>
          <div class="app_login_user">
            <img class="login_img_bg" src="@/assets/new_login_username_bg.png" alt="">
            <input v-model="formData.user" type="text" placeholder="请输入用户名">
          </div>
          <div class="app_login_password">
            <img class="login_img_bg" src="@/assets/new_login_password_bg.png"  alt="">
            <input v-model="formData.pwd" type="password" placeholder="请输入密码">
          </div>
          <div class="app_login_code">
            <img class="login_img_bg" src="@/assets/new_login_excode_bg.png" alt="">
            <input type="text" @keyup.enter="onSubmit" v-model="formData.code" style="width: 110px;" placeholder="请输入认证码">
            <span style="float: right;margin-top: 6px;"  @click="changeCode"><Canvas ref="myClick" /></span>
          </div>
          <button @click="onSubmit" class="btn">立即登录</button>
        </div>

      </div>
    </div>

    <div v-if="homeShow" class="app_home">
      <el-container>
        <el-header style="height: 100px;">
          <el-row>
            <el-col :span="10"><img class="logo" src="@/assets/logo.png" alt="" /></el-col>
            <el-col :span="4"><h3 class="header_title">鹰洋国际后台管理系统</h3></el-col>
            <el-col :span="10">
              <div class="header_right">
                <div @click="outLogin" class="header_right_out">退出</div>
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
              <el-dropdown-item v-for="(twoItem, twoIndex) in item.sub" :command="{ oneTitle: item.title, twoTitle: twoItem.title, path: twoItem.path, img:twoItem.thumb }">
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
                  <img :src="'static/img'+item.src" style="width: 100%;height: 100%;" alt="">
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

        <el-footer style="background: #6BAEF3;text-align: center;line-height: 60px;color: white;">
          <div>
            深圳（前海）鹰洋国际贸易有限公司  粤ICP备17118012号
          </div>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
  import {request} from './network/request'
  import breadList from './components/breadcrumb'
  import Canvas from '@/components/Canvas'
export default {
  name: 'App',
  data() {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('@/assets/adminBg.png') + ')',
        width:"100%",
        height:"100%",
        backgroundSize:'cover',
      },
      backgroundDivCenter: {backgroundImage: 'url(' + require('@/assets/adminBgCenter.png') + ')',
      width:"600px",
      height:"350px",
      backgroundSize:'cover'
      },
      token:'',
      // 登录页面显示
      homeShow:false,
      formData:{
        user:'',
        pwd:'',
        code:''
      },
      // 认证码
      identifyCode:'ACT9',
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
      nav: []
    };
  },
  components: {
    breadList,
    Canvas
  },
  mounted() {
    const history =JSON.parse(localStorage.getItem('history'));
    if(history){
      this.history = history;
    }

    // 是否已登录
    const nav =JSON.parse(localStorage.getItem('nav'));
    if(nav){
      this.nav = nav;
    }
    const token =localStorage.getItem('token');
    if(token){
      this.homeShow = true;
    }

    // 认证码调用
    this.changeCode();
  },
  methods: {

    // 登录
    onSubmit() {
      const user = this.formData.user;
      const pwd = this.formData.pwd;
      const code = this.formData.code.toUpperCase();
      const identifyCode = this.identifyCode;
      if(user == '') {
        alert("请输入账号")
      }else if(pwd == '') {
        alert("请输入密码")
      }else if(code == ''){
        alert("请输入认证码")
      }else if(code != identifyCode) {
        alert('认证码错误');
        this.changeCode();
      }else {
        request({
          url:'/admin/PublicOperate/login',
          method:'post',
          data:{
            username:user,
            password:pwd
          }
        }).then(res => {
         if(res.error === 0) {
            this.homeShow = true;
            localStorage.setItem('token',res.data.token)
            this.token = res.data.token;
            localStorage.setItem('nav',JSON.stringify(res.data.auth))
            this.nav = res.data.auth;
          }else {
            alert(res.message)
          }
        })
      }

    },
    // 认证码
    changeCode() {
      const arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const one = arr[Math.floor(Math.random()*arr.length)];
      const two = arr[Math.floor(Math.random()*arr.length)];
      const three = arr[Math.floor(Math.random()*arr.length)];
      const four = arr[Math.floor(Math.random()*arr.length)];
      this.identifyCode = one + two + three + four;
      this.$refs.myClick.drawPic(this.identifyCode)
    },
    // 退出登录
    outLogin() {
       this.homeShow = false;
       localStorage.removeItem('token');
       localStorage.removeItem('nav');
       localStorage.removeItem('history');
       this.formData.code = '';
       setTimeout(() => {
         this.changeCode();
       },100)

    },
    // 路由跳转
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

  },

};
</script>

<style>
    html,body{
               height: 100%;
             }

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
  font-size: 14px;
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

.app_home .el-main {
  background-color: #e9eef3;
  color: #333;
  padding-top:0px;
}

.header_right {
  box-sizing: border-box;
}

.header_right_out {
  text-align: right;
  margin-top: 20px;
  cursor: pointer;
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

.app_login {
  width: 100%;
  height: 100%;
}

.app_login_box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.app_login_box input {
  border: none;
  outline:none;
  height: 25px;
  width: 200px;
  padding-left: 10px;
}

.app_login_box .form_list > div {
  border-bottom: 1px solid #DBDBDB;
height: 42px;
line-height: 41px;
}

.app_login_box .btn {
  width: 250px;
  height: 35px;
  line-height: 35px;
  background: #2993FF;
  border-radius: 6px;
  text-align: center;
  border: none;
  font-size: 16px;
  color: #FFFFFF;
  margin-top: 25px;
  cursor: pointer;
  outline:none;
}

.app_login_box .btn:hover {
  background: #79B5F3;
}

.app_login_box .form_list {
  box-sizing: border-box;
  padding: 10px 28px;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 310px;
  height: 330px;
}

.login_img_bg {
  position: relative;
  top: 2px;
}

</style>
