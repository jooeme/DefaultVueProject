import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import * as utils from "./utils/utils";
import api from "./utils/http/index"; // 导入api接口
import alert from "./components/alert/alert";
import dialog from "./components/dialog/index";
Vue.config.productionTip = false;

Vue.prototype.$alert = alert.info; // 提示组件

Vue.prototype.$dialog = dialog.install; // 对话组件

Vue.prototype.$api = api.interfaces; // 将api挂载到vue的原型上

new Vue({
  router,
  store,
  utils,
  render: h => h(App)
}).$mount("#app");
