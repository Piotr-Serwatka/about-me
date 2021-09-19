import Vue from 'vue';
import App from './App.vue';
import router from './router';
import nasa from './services/NasaApiService';

Vue.prototype.$api = {nasa};

new Vue({
  router,
  render: h => h(App),
}).$mount('#vueApp');
