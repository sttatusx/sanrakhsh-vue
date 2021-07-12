import Vue from 'vue';
import App from './App.vue';
import router from './configs/router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
