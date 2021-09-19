import VueRouter from 'vue-router';
import routes from './routes.js';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter ({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes,
})
