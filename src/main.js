import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import echarts from 'echarts';
import "./router/routingHooks"
import './icons'

// import "./assets/css/common/reset-element.css";
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

// 对button进行二次封装保留原本参数添加防抖
Vue.directive('delay', {
  inserted: function(el) {
    el.addEventListener('click', () => {
      el.disabled = true
      setTimeout(() =>{
        el.disabled = false
      },200);
    })
  }
});
import delayButton from './components/delayButton'
Vue.component('delayButton', delayButton);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
