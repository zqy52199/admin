import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
const Index = () => import('../views/index')


// 1.安装插件
Vue.use(VueRouter)
Vue.use(ElementUI);

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
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
