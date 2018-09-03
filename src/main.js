import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Accounts from './Accounts.vue';
import navbar from './components/navbar';
import BootstrapVue from 'bootstrap-vue';
import createNewAccount from './createNewAccount.vue';
import viewAllAccounts from './viewAllAccounts.vue';
import Home from './Home.vue';
import singleAccount from './singleAccount.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueResource);

Vue.component('app-account', Accounts);
Vue.component('navbar-comp', navbar);

const routes = [
  {path: '/', component: Home},
  {path: '/accounts/newAccount', component: createNewAccount},
  {path: '/accounts', component: viewAllAccounts},
  {path: '/accounts/:id', component: singleAccount}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
