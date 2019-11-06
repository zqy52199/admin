import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import Print from 'vue-print-nb';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill'


import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Print);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
