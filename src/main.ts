import Vue from "vue";
import App from "./App.vue";
import Cookies from 'js-cookie';
Vue.prototype.$Cookies = Cookies ;
import {router} from "./router";
import store from "./store";
import "./registerServiceWorker";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
import echarts from "echarts";
Vue.prototype.$echarts = echarts ;
import Axios from 'axios';
Vue.prototype.$axios=Axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
