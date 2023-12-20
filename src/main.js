import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,

}).$mount('#app')
