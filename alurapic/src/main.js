import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource); // Recursos do Vue Resource estarão disponiveis
new Vue({
  el: '#app',
  render: h => h(App)
})
