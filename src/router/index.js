import Vue from 'vue'
import VueRouter from 'vue-router'
// 后台管理首页
const Index = () => import('../views/Home/index');
// 小程序--业务员
const Salesman = () => import('../views/Applets/salesman');
// 订单管理用户订单
const UserOrder = () => import('../views/Order/userorder');
// 订单管理用户订单详情页面
const Detail = () => import('../views/Order/detail');
// 审核中心
const Review = () => import('../views/Review/review');
// 审核中心详情页
const ReviewDetail = () => import('../views/Review/reviewdetail');


// 1.安装插件
Vue.use(VueRouter);





// 解决点两次同一个地方路由报错
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

// 2.创建router
const routes = [
  {
    path: '',
    name: UserOrder,
    redirect: '/userorder'
  },
  {
    // 首页
    path:'/index',
    name: Index,
    component: Index
  },
  {
    // 订单管理--用户订单
    path:'/order/user',
    name: UserOrder,
    component: UserOrder,
    meta: { title: '用户订单' },
       children: [{
        path: 'detail',
        name: Detail,
        component: Detail,
        meta: { title: '查看详情' }
       }]
  },
  {
    path:'/review',
    name:Review,
    component: Review,
    meta:{title:'审核中心'},
    children: [{
     path: 'reviewdetail',
     name: ReviewDetail,
     component: ReviewDetail,
     meta: { title: '查看详情' }
    }]
  },
  {
    // 小程序--业务员
    path:'/applets/salesman',
    name: Salesman,
    component: Salesman,
    meta: { title: '业务员' }
  },


]
const router = new VueRouter({
  routes,
  mode: 'hash'
})


export default router



// import Vue from 'vue'
// import Router from 'vue-router'
// import Index from '@/components/index'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: Index
//     }
//   ]
// })
